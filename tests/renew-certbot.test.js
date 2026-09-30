"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const os = require("node:os");
const { spawnSync } = require("node:child_process");

const SCRIPT_SOURCE_PATH = path.resolve(__dirname, "../scripts/renew-certbot.sh");

function createTestHarness() {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "certbot-test-"));
  const fakeRepo = path.join(tempDir, "fake-repo");
  const fakeScriptsDir = path.join(fakeRepo, "scripts");
  const stubBinDir = path.join(tempDir, "bin");
  const unrelatedCwd = path.join(tempDir, "unrelated-cwd");
  const callLogPath = path.join(tempDir, "docker-calls.log");

  fs.mkdirSync(fakeScriptsDir, { recursive: true });
  fs.mkdirSync(stubBinDir, { recursive: true });
  fs.mkdirSync(unrelatedCwd, { recursive: true });

  const fakeScriptPath = path.join(fakeScriptsDir, "renew-certbot.sh");
  fs.copyFileSync(SCRIPT_SOURCE_PATH, fakeScriptPath);
  fs.chmodSync(fakeScriptPath, 0o755);

  const stubDockerPath = path.join(stubBinDir, "docker");
  const stubDockerContent = [
    "#!/bin/sh",
    "node -e '",
    '  const fs = require("node:fs");',
    "  const logFile = process.env.STUB_CALL_LOG;",
    "  const entry = { cwd: process.cwd(), args: process.argv.slice(1) };",
    '  fs.appendFileSync(logFile, JSON.stringify(entry) + "\\n");',
    "' \"$@\"",
    "exit 0",
    "",
  ].join("\n");

  fs.writeFileSync(stubDockerPath, stubDockerContent, { mode: 0o755 });

  function runScript(args = [], options = {}) {
    const env = {
      ...process.env,
      ...options.env,
      PATH: `${stubBinDir}${path.delimiter}${options.env?.PATH || process.env.PATH}`,
      STUB_CALL_LOG: callLogPath,
    };

    if (options.unsetPortafolioDir !== false && !options.env?.PORTAFOLIO_DIR) {
      delete env.PORTAFOLIO_DIR;
    }

    const scriptToRun = options.scriptPath || fakeScriptPath;

    return spawnSync("/bin/sh", [scriptToRun, ...args], {
      cwd: options.cwd || unrelatedCwd,
      env,
      encoding: "utf8",
    });
  }

  function getDockerCalls() {
    if (!fs.existsSync(callLogPath)) {
      return [];
    }
    const content = fs.readFileSync(callLogPath, "utf8").trim();
    if (!content) {
      return [];
    }
    return content.split("\n").map((line) => JSON.parse(line));
  }

  function cleanup() {
    try {
      fs.rmSync(tempDir, { recursive: true, force: true });
    } catch {
      // Best-effort cleanup
    }
  }

  return {
    tempDir,
    fakeRepo: fs.realpathSync(fakeRepo),
    fakeScriptPath,
    unrelatedCwd,
    callLogPath,
    runScript,
    getDockerCalls,
    cleanup,
  };
}

test("derives default PORTAFOLIO_DIR from script location when run from unrelated cwd", (t) => {
  const harness = createTestHarness();
  t.after(() => harness.cleanup());

  const result = harness.runScript([], { cwd: harness.unrelatedCwd });

  assert.equal(result.status, 0, `Script failed with stderr: ${result.stderr}`);
  assert.match(result.stdout, /renew-certbot\.sh ok/);

  const calls = harness.getDockerCalls();
  assert.equal(calls.length, 2, "Expected exactly 2 docker invocations");

  // Verify call 1: compose renew with default --quiet from fake repo root
  assert.equal(calls[0].cwd, harness.fakeRepo);
  assert.deepEqual(calls[0].args, [
    "compose",
    "--profile",
    "ssl",
    "run",
    "--rm",
    "certbot",
    "renew",
    "--quiet",
  ]);

  // Verify call 2: compose nginx reload from fake repo root
  assert.equal(calls[1].cwd, harness.fakeRepo);
  assert.deepEqual(calls[1].args, [
    "compose",
    "exec",
    "-T",
    "nginx",
    "nginx",
    "-s",
    "reload",
  ]);
});

test("derives default PORTAFOLIO_DIR when executed via symlink from outside repo", (t) => {
  const harness = createTestHarness();
  t.after(() => harness.cleanup());

  const symlinkPath = path.join(harness.tempDir, "symlink-renew-certbot.sh");
  fs.symlinkSync(harness.fakeScriptPath, symlinkPath);

  const result = harness.runScript([], {
    scriptPath: symlinkPath,
    cwd: harness.unrelatedCwd,
  });

  assert.equal(result.status, 0, `Script failed with stderr: ${result.stderr}`);
  const calls = harness.getDockerCalls();
  assert.equal(calls.length, 2);
  assert.equal(calls[0].cwd, harness.fakeRepo);
  assert.equal(calls[1].cwd, harness.fakeRepo);
});

test("preserves explicit PORTAFOLIO_DIR override", (t) => {
  const harness = createTestHarness();
  t.after(() => harness.cleanup());

  const customDir = path.join(harness.tempDir, "custom-target-dir");
  fs.mkdirSync(customDir, { recursive: true });
  const canonicalCustomDir = fs.realpathSync(customDir);

  const result = harness.runScript([], {
    cwd: harness.unrelatedCwd,
    env: { PORTAFOLIO_DIR: customDir },
  });

  assert.equal(result.status, 0, `Script failed with stderr: ${result.stderr}`);
  const calls = harness.getDockerCalls();
  assert.equal(calls.length, 2);
  assert.equal(calls[0].cwd, canonicalCustomDir);
  assert.equal(calls[1].cwd, canonicalCustomDir);
});

test("forwards custom arguments to certbot renew", (t) => {
  const harness = createTestHarness();
  t.after(() => harness.cleanup());

  const result = harness.runScript(["--dry-run", "--force-renewal"], {
    cwd: harness.unrelatedCwd,
  });

  assert.equal(result.status, 0, `Script failed with stderr: ${result.stderr}`);
  const calls = harness.getDockerCalls();
  assert.equal(calls.length, 2);

  assert.deepEqual(calls[0].args, [
    "compose",
    "--profile",
    "ssl",
    "run",
    "--rm",
    "certbot",
    "renew",
    "--dry-run",
    "--force-renewal",
  ]);
  assert.deepEqual(calls[1].args, [
    "compose",
    "exec",
    "-T",
    "nginx",
    "nginx",
    "-s",
    "reload",
  ]);
});

test("fails with error when PORTAFOLIO_DIR is missing or invalid", (t) => {
  const harness = createTestHarness();
  t.after(() => harness.cleanup());

  const invalidDir = path.join(harness.tempDir, "nonexistent-dir");
  const result = harness.runScript([], {
    env: { PORTAFOLIO_DIR: invalidDir },
  });

  assert.equal(result.status, 1);
  assert.match(
    result.stderr,
    new RegExp(`Error: PORTAFOLIO_DIR \\(${invalidDir.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\) is not available\\.`)
  );

  const calls = harness.getDockerCalls();
  assert.equal(calls.length, 0, "No docker commands should run on invalid PORTAFOLIO_DIR");
});
