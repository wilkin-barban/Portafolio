#!/bin/sh
set -eu

if [ -z "${PORTAFOLIO_DIR:-}" ]; then
  SCRIPT_PATH="$0"
  case "$SCRIPT_PATH" in
    */*) ;;
    *) SCRIPT_PATH=$(command -v -- "$0" || echo "./$0") ;;
  esac
  while [ -L "$SCRIPT_PATH" ]; do
    SCRIPT_LINK_DIR=$(CDPATH='' cd -- "$(dirname -- "$SCRIPT_PATH")" && pwd -P)
    TARGET_PATH=$(readlink "$SCRIPT_PATH")
    case "$TARGET_PATH" in
      /*) SCRIPT_PATH="$TARGET_PATH" ;;
      *)  SCRIPT_PATH="$SCRIPT_LINK_DIR/$TARGET_PATH" ;;
    esac
  done
  SCRIPT_DIR=$(CDPATH='' cd -- "$(dirname -- "$SCRIPT_PATH")" && pwd -P)
  PORTAFOLIO_DIR=$(CDPATH='' cd -- "$SCRIPT_DIR/.." && pwd -P)
fi

if [ -d "$PORTAFOLIO_DIR" ]; then
  cd "$PORTAFOLIO_DIR"
  if [ $# -gt 0 ]; then
    docker compose --profile ssl run --rm certbot renew "$@"
  else
    docker compose --profile ssl run --rm certbot renew --quiet
  fi
  docker compose exec -T nginx nginx -s reload
else
  echo "Error: PORTAFOLIO_DIR ($PORTAFOLIO_DIR) is not available." >&2
  exit 1
fi

echo "renew-certbot.sh ok $(date -Is)"
