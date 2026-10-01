# CRM Edge Functions Ingress Observation Runbook

Operate and monitor privacy-safe, bounded ingress observation for the public Supabase Edge Functions route (`/functions/v1/`) on `crmsofiamanager.duckdns.org`. Future production deployment, Nginx reload, or volume creation requires separate owner authorization; draft PR publication, review, and CI checks do not constitute deployment authorization.

## Quick path (Read-Only)

1. **Verify volume and mount configuration:**
   ```bash
   docker compose config --quiet
   ```
2. **Inspect observation volume directory non-destructively:**
   ```bash
   docker compose exec nginx ls -l /var/log/nginx/edge-observations/
   ```
3. **Aggregate daily request counts and status codes without exposing secrets:**
   ```bash
   docker compose exec nginx awk -F'[ =]' '{print $2, $4, $6, $8}' /var/log/nginx/edge-observations/crm-edge-*.log 2>/dev/null || true
   ```

## Architecture and Design Decisions

| Area | Decision | Details & Safeguards |
|------|----------|----------------------|
| **Privacy boundary** | Metadata-only logging | Format `crm_edge_observation` records only ISO timestamp, HTTP method, client status, upstream status, and `count=1`. It **never** logs IP addresses, URIs, query strings, headers, tokens, or payloads. |
| **Route preservation** | Unchanged combined proxy | The combined Supabase regex `^/(auth|rest|storage|realtime|functions)/v1(?:/|$)` remains untouched. Standard stdout access logging (`access_log /var/log/nginx/access.log main;`) is preserved byte-for-byte. |
| **Storage isolation** | Dedicated named volume | Volume `edge-observations` is mounted strictly at `/var/log/nginx/edge-observations`. It never masks `/var/log/nginx/` stdout symlinks. |
| **Boot guard** | Fail-closed mount validation | `nginx/select-config.sh` verifies `mountpoint -q /var/log/nginx/edge-observations` and assigns directory ownership `101:101` (non-recursive). If the dedicated mount is missing, Nginx fails closed at boot. |
| **Pruning sidecar** | Hardened non-root pruner | `edge-observation-pruner` runs pinned `nginx:1.27-alpine` as UID/GID `101:101` with `network_mode: "none"`, `read_only: true`, `cap_drop: [ALL]`, `security_opt: [no-new-privileges:true]`, and no Docker socket. Hourly pruning (`-mmin +20160`) removes only expired hourly files. |
| **Timezone alignment** | Explicit UTC on Nginx | Nginx runs with environment `TZ=UTC` matching pruner `date -u`, ensuring `$time_iso8601` hourly log bucketing agrees with pruning regardless of host timezone. |
| **Retention bounds & lag** | 14d minimum, ~14d+2h upper bound | Files segmented hourly UTC (`crm-edge-YYYY-MM-DDTHH.log`). Writes for any file cease after at most 1 hour. Pruner runs hourly and removes files older than 20,160 minutes (14d) from last write. Earliest hourly entries persist up to ~14d+2h before unlinking, ensuring continuous 14-day observation coverage. |

### Retention Window and Privacy Implications

- **Hourly segmentation & persistence bound:** Files are named with hourly UTC timestamps (`crm-edge-YYYY-MM-DDTHH.log`). Because file writes cease after at most 1 hour, the 14-day timer (`-mmin +20160`) starts within 1 hour of file creation. Factoring in the hourly pruner polling cycle (~1h lag), the earliest entry in any file persists for at most **~14 days and 2 hours** (~14d+2h) before unlinking, subject to healthy pruner operation. This bounds retention tightly while guaranteeing continuous 14-day coverage (not a strict exact 14d cutoff).
- **Volume file count:** Hourly segmentation produces 24 small log files per day (~340 files over a 14.1-day retention window). This file count is negligible for Docker volume inode and directory traversal performance.
- **Privacy risk assessment:** Format `crm_edge_observation` records coarse metadata (timestamp, method, statuses, count) and never logs IP, URI, query strings, headers, body, or tokens in content or filenames. While direct identifiers are absent, residual correlation risk remains: precise timestamps, HTTP methods, and status codes are correlatable with external events or upstream logs. This risk is minimized through non-root container isolation, strict directory permissions (`0750`), and the ~14d+2h bounded retention lifecycle.

### Manual Pruning Notice (Destructive Operation)

Executing `prune-edge-observation.sh --once` is **DESTRUCTIVE**: it immediately deletes all files matching the retention age criteria. It is **NOT** a dry-run. Do not run it outside separately authorized maintenance or automated CI test harnesses.

## Operator Checklist

- [ ] Volume `edge-observations` exists before starting the stack in production (`docker volume inspect portfolio_edge-observations`).
- [ ] Stdout logs continue receiving all requests via `/var/log/nginx/access.log`.
- [ ] No IP, query parameters, authorization headers, or request bodies appear in `/var/log/nginx/edge-observations/*.log`.
- [ ] Pruner sidecar shows clean runs with dropped capabilities and no network (`docker compose logs edge-observation-pruner`).
- [ ] At the end of the observation window, observe-only traffic data is analyzed without modifying upstream routing.

## Rollback Boundary

`nginx/select-config.sh` copies site templates from `/etc/nginx/sites-templates/` to `/etc/nginx/conf.d/` **only at container startup**. Therefore, simply editing host templates and calling `nginx -s reload` will not disable observation.

If observation must be stopped or reverted, execute one of these separately authorized procedures:

1. **Controlled Container Recreate (Recommended):**
   Revert the observation directives in `nginx/sites/crmsofiamanager.duckdns.org.https.conf`, verify syntax with isolated candidate `nginx -t`, and execute a controlled recreation:
   ```bash
   docker compose up -d --no-deps --force-recreate nginx
   ```
   At container boot, `select-config.sh` will regenerate `/etc/nginx/conf.d/` with the clean template.
2. **Audited Generated Config Replacement:**
   Directly update `/etc/nginx/conf.d/crmsofiamanager.duckdns.org.conf` inside the running container, run `docker compose exec nginx nginx -t`, and only upon verified syntax reload the worker processes (`docker compose exec nginx nginx -s reload`).

In both procedures, the named volume `edge-observations` and its historical log files remain preserved for post-incident review. No reload or recreate commands are executed during this review.
