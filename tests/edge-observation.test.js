const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { execFileSync, spawnSync } = require('node:child_process');
const os = require('node:os');

const REPO_ROOT = path.resolve(__dirname, '..');
const NGINX_CONF_PATH = path.join(REPO_ROOT, 'nginx/sites/crmsofiamanager.duckdns.org.https.conf');
const SELECT_CONFIG_PATH = path.join(REPO_ROOT, 'nginx/select-config.sh');
const COMPOSE_PATH = path.join(REPO_ROOT, 'docker-compose.yml');
const PRUNE_SCRIPT_PATH = path.join(REPO_ROOT, 'scripts/prune-edge-observation.sh');

describe('CRM Edge Observation Invariants', () => {
  describe('Nginx HTTPS Template Privacy and Routing', () => {
    test('defines privacy-safe log_format crm_edge_observation without sensitive data', () => {
      const content = fs.readFileSync(NGINX_CONF_PATH, 'utf8');

      assert.match(content, /log_format\s+crm_edge_observation/, 'Must declare crm_edge_observation format');

      const logFormatMatch = content.match(/log_format\s+crm_edge_observation\s+['"]([^'"]+)['"]/);
      assert.ok(logFormatMatch, 'log_format crm_edge_observation must be defined with quotes');
      const formatStr = logFormatMatch[1];

      // Privacy checks: NEVER record IP, URI, query, headers, body, or tokens
      assert.doesNotMatch(formatStr, /\$remote_addr/, 'Must not record remote client IP');
      assert.doesNotMatch(formatStr, /\$http_x_forwarded_for/, 'Must not record forwarded IP header');
      assert.doesNotMatch(formatStr, /\$http_x_real_ip/, 'Must not record real IP header');
      assert.doesNotMatch(formatStr, /\$uri|\$request_uri|\$request(?![_a-z])/, 'Must not record request URI/URL');
      assert.doesNotMatch(formatStr, /\$args|\$query_string/, 'Must not record query parameters');
      assert.doesNotMatch(formatStr, /\$http_authorization|\$http_cookie/, 'Must not record auth/cookie headers');
      assert.doesNotMatch(formatStr, /\$request_body/, 'Must not record request body');

      // Required observation metadata
      assert.match(formatStr, /\$time_iso8601/, 'Must record ISO8601 timestamp');
      assert.match(formatStr, /\$request_method/, 'Must record HTTP method');
      assert.match(formatStr, /\$status/, 'Must record downstream status');
      assert.match(formatStr, /\$upstream_status/, 'Must record upstream status');
      assert.match(formatStr, /count=1/, 'Must record count metric');
    });

    test('configures top-level maps for route filtering and hourly filenames', () => {
      const content = fs.readFileSync(NGINX_CONF_PATH, 'utf8');

      // URI map for edge route observation condition
      assert.match(content, /map\s+\$uri\s+\$crm_edge_observe\s*\{[\s\S]*?default\s+0;[\s\S]*?"~?\^?\/functions\/v1(?:\(\?:\/\|\$\)|\/|\$)"?\s+1;[\s\S]*?\}/);

      // Hour map for hourly log rotation
      assert.match(content, /map\s+\$time_iso8601\s+\$crm_edge_hour\s*\{[\s\S]*?default\s+"nodate";[\s\S]*?"~?\^?\\?\(?\\d\{4\}-\\d\{2\}-\\d\{2\}T\\d\{2\}\\?\)?"\s+\$1;[\s\S]*?\}/);
    });

    test('preserves combined Supabase location route and dual access_log directives', () => {
      const content = fs.readFileSync(NGINX_CONF_PATH, 'utf8');

      // Combined Supabase location regex must remain unchanged
      assert.match(content, /location\s+~\s+\^\/\(auth\|rest\|storage\|realtime\|functions\)\/v1\(\?:\/\|\$\)\s*\{/);

      // Must explicitly preserve standard stdout access.log
      assert.match(content, /access_log\s+\/var\/log\/nginx\/access\.log\s+main;/);

      // Must include conditional edge observation log with hourly filename
      assert.match(content, /access_log\s+\/var\/log\/nginx\/edge-observations\/crm-edge-\$crm_edge_hour\.log\s+crm_edge_observation\s+if=\$crm_edge_observe;/);

      // Must preserve upstream proxy settings
      assert.match(content, /set\s+\$supabase_gw\s+http:\/\/asados-supabase-kong:8000;/);
      assert.match(content, /proxy_pass\s+\$supabase_gw;/);
      assert.match(content, /proxy_buffering\s+off;/);
      assert.match(content, /proxy_read_timeout\s+3600s;/);
    });

    test('requires root in same combined proxy location for variable log evaluation', () => {
      const content = fs.readFileSync(NGINX_CONF_PATH, 'utf8');

      const locationMatch = content.match(/location\s+~\s+\^\/\(auth\|rest\|storage\|realtime\|functions\)\/v1\(\?:\/\|\$\)\s*\{([\s\S]*?)\}/);
      assert.ok(locationMatch, 'Combined Supabase location block must exist');

      const locationBlock = locationMatch[1];
      assert.match(locationBlock, /access_log\s+\/var\/log\/nginx\/edge-observations\/crm-edge-\$crm_edge_hour\.log/, 'Must contain variable edge observation log');
      assert.match(locationBlock, /root\s+\/usr\/share\/nginx\/html;/, 'Must specify root /usr/share/nginx/html; in same combined proxy location');
    });
  });

  describe('Entrypoint Mountpoint and Permissions Guard', () => {
    test('select-config.sh checks mountpoint and sets non-recursive 101:101 permissions', () => {
      const content = fs.readFileSync(SELECT_CONFIG_PATH, 'utf8');

      assert.match(content, /mountpoint\s+-q\s+["']?\$?(?:OBS_DIR|\/var\/log\/nginx\/edge-observations)/, 'Must verify dedicated mountpoint');
      assert.match(content, /chown\s+101:101\s+["']?\$?(?:OBS_DIR|\/var\/log\/nginx\/edge-observations)/, 'Must chown to UID:GID 101:101');
      assert.doesNotMatch(content, /chown\s+-[rR]\s+.*(?:OBS_DIR|edge-observations)/, 'Must NOT recursively chown volume');
      assert.match(content, /exit\s+1/, 'Must fail closed on mount/permission error');
    });
  });

  describe('Docker Compose Service Topology', () => {
    test('declares dedicated volume and networkless UID101 pruner sidecar', () => {
      const content = fs.readFileSync(COMPOSE_PATH, 'utf8');

      // Dedicated named volume
      assert.match(content, /^\s*edge-observations:\s*$/m, 'Must define top-level edge-observations volume');
      assert.match(content, /-\s+edge-observations:\/var\/log\/nginx\/edge-observations/, 'Nginx must mount volume at subpath');
      assert.match(content, /TZ=UTC/, 'Nginx must enforce TZ=UTC environment for consistent hourly bucketing');

      // Pruner sidecar service
      assert.match(content, /image:\s*nginx:1\.27-alpine/, 'Sidecar must use pinned nginx:1.27-alpine');
      assert.match(content, /network_mode:\s*["']?none["']?/, 'Sidecar must be network isolated');
      assert.match(content, /user:\s*["']?101:101["']?/, 'Sidecar must run as UID/GID 101:101');
      assert.match(content, /read_only:\s*true/, 'Sidecar must be read-only root filesystem');
      assert.match(content, /cap_drop:\s*\n\s*-\s*ALL/, 'Sidecar must drop all capabilities');
      assert.match(content, /no-new-privileges:true/, 'Sidecar must enforce no-new-privileges');
      assert.doesNotMatch(content, /\/var\/run\/docker\.sock/, 'Sidecar must not mount Docker socket');
      assert.match(content, /prune-edge-observation\.sh/, 'Sidecar must run pruner script');
    });
  });

  describe('Pruner Script Invariants and Retention Logic', () => {
    test('exists, is executable, and passes syntax check', () => {
      assert.ok(fs.existsSync(PRUNE_SCRIPT_PATH), 'prune-edge-observation.sh must exist');
      const stats = fs.statSync(PRUNE_SCRIPT_PATH);
      assert.ok((stats.mode & 0o111) !== 0, 'prune-edge-observation.sh must be executable');

      const syntaxCheck = spawnSync('sh', ['-n', PRUNE_SCRIPT_PATH]);
      assert.equal(syntaxCheck.status, 0, `Shell syntax check failed: ${syntaxCheck.stderr.toString()}`);
    });

    test('rejects relative, empty, symlink, or protected target directories', () => {
      const runPrune = (target, env = {}) => {
        return spawnSync('sh', [PRUNE_SCRIPT_PATH, '--once'], {
          env: { ...process.env, OBSERVATION_DIR: target, ...env },
          encoding: 'utf8',
        });
      };

      // Empty target
      let res = runPrune('');
      assert.notEqual(res.status, 0, 'Must reject empty target');

      // Relative target
      res = runPrune('relative/path');
      assert.notEqual(res.status, 0, 'Must reject relative target');

      // Protected root paths
      res = runPrune('/var/log');
      assert.notEqual(res.status, 0, 'Must reject /var/log as target');

      res = runPrune('/var/log/nginx');
      assert.notEqual(res.status, 0, 'Must reject /var/log/nginx as target');

      // Symlink target directory
      const tmpBase = fs.mkdtempSync(path.join(os.tmpdir(), 'pruner-guard-'));
      try {
        const realDir = path.join(tmpBase, 'real');
        const symlinkDir = path.join(tmpBase, 'symlink');
        fs.mkdirSync(realDir);
        fs.symlinkSync(realDir, symlinkDir);

        res = runPrune(symlinkDir);
        assert.notEqual(res.status, 0, 'Must reject symlink target directory');
      } finally {
        fs.rmSync(tmpBase, { recursive: true, force: true });
      }
    });

    test('correctly prunes expired files (>14d) while preserving active, recent, and unrelated files', () => {
      const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pruner-retention-'));
      try {
        const nowMs = Date.now();
        const ONE_DAY_MS = 24 * 60 * 60 * 1000;

        // 1. Expired file (20 days old)
        const expiredDateTime = new Date(nowMs - 20 * ONE_DAY_MS).toISOString().slice(0, 13);
        const expiredFile = path.join(tmpDir, `crm-edge-${expiredDateTime}.log`);
        fs.writeFileSync(expiredFile, 'time=2026-09-01T00:00:00Z count=1\n');
        const expiredTime = (nowMs - 20 * ONE_DAY_MS) / 1000;
        fs.utimesSync(expiredFile, expiredTime, expiredTime);

        // 2. Recent file (5 days old)
        const recentDateTime = new Date(nowMs - 5 * ONE_DAY_MS).toISOString().slice(0, 13);
        const recentFile = path.join(tmpDir, `crm-edge-${recentDateTime}.log`);
        fs.writeFileSync(recentFile, 'time=2026-09-25T00:00:00Z count=1\n');
        const recentTime = (nowMs - 5 * ONE_DAY_MS) / 1000;
        fs.utimesSync(recentFile, recentTime, recentTime);

        // 3. Active file of current hour (UTC)
        const activeHourUtc = new Date().toISOString().slice(0, 13);
        const activeFile = path.join(tmpDir, `crm-edge-${activeHourUtc}.log`);
        fs.writeFileSync(activeFile, 'time=current_hour count=1\n');

        // 4. Unrelated log file that does not match pattern
        const unrelatedFile = path.join(tmpDir, 'access.log');
        fs.writeFileSync(unrelatedFile, 'unrelated log line\n');
        fs.utimesSync(unrelatedFile, expiredTime, expiredTime);

        // 5. Subdirectory with matching name format (must NOT be deleted or traversed)
        const subDir = path.join(tmpDir, 'crm-edge-2020-01-01T00.log');
        fs.mkdirSync(subDir);

        // Execute pruner pass with 14-day threshold (20160 minutes)
        const res = spawnSync('sh', [PRUNE_SCRIPT_PATH, '--once'], {
          env: {
            ...process.env,
            OBSERVATION_DIR: tmpDir,
            RETENTION_MINUTES: '20160',
          },
          encoding: 'utf8',
        });

        assert.equal(res.status, 0, `Pruner execution failed: ${res.stderr}\n${res.stdout}`);

        // Verifications
        assert.ok(!fs.existsSync(expiredFile), 'Expired file (>14d) must be pruned');
        assert.ok(fs.existsSync(recentFile), 'Recent file (<14d) must be preserved');
        assert.ok(fs.existsSync(activeFile), 'Active file must be preserved');
        assert.ok(fs.existsSync(unrelatedFile), 'Unrelated file must not be pruned');
        assert.ok(fs.existsSync(subDir), 'Subdirectory must not be deleted');
      } finally {
        fs.rmSync(tmpDir, { recursive: true, force: true });
      }
    });
  });
});
