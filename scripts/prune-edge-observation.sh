#!/bin/sh
set -eu

TARGET_DIR="${OBSERVATION_DIR:-/var/log/nginx/edge-observations}"
RETENTION_MINUTES="${RETENTION_MINUTES:-20160}"
PRUNE_INTERVAL_SECONDS="${PRUNE_INTERVAL_SECONDS:-3600}"

validate_target() {
    if [ -z "$TARGET_DIR" ]; then
        echo "[pruner] ERROR: El directorio de destino no puede estar vacío." >&2
        exit 1
    fi

    case "$TARGET_DIR" in
        /*) ;;
        *)
            echo "[pruner] ERROR: El directorio de destino debe ser una ruta absoluta: $TARGET_DIR" >&2
            exit 1
            ;;
    esac

    case "$TARGET_DIR" in
        /|/bin|/sbin|/usr|/usr/*|/var|/var/log|/var/log/nginx|/etc|/etc/*|/dev|/proc|/sys)
            echo "[pruner] ERROR: El directorio de destino es una ruta restringida: $TARGET_DIR" >&2
            exit 1
            ;;
    esac

    if [ -L "$TARGET_DIR" ]; then
        echo "[pruner] ERROR: El directorio de destino no debe ser un enlace simbólico: $TARGET_DIR" >&2
        exit 1
    fi

    if [ ! -d "$TARGET_DIR" ]; then
        echo "[pruner] ERROR: El directorio de destino no existe: $TARGET_DIR" >&2
        exit 1
    fi
}

prune_pass() {
    validate_target
    active_hour_utc=$(date -u +%Y-%m-%dT%H)
    active_file="crm-edge-${active_hour_utc}.log"

    echo "[pruner] Iniciando ciclo de limpieza en $TARGET_DIR (retención: ${RETENTION_MINUTES} min, archivo activo: $active_file)..."

    find "$TARGET_DIR" \
        -maxdepth 1 \
        -mindepth 1 \
        -type f \
        -name "crm-edge-[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]T[0-9][0-9].log" \
        ! -name "$active_file" \
        -mmin "+${RETENTION_MINUTES}" \
        -print \
        -delete

    echo "[pruner] Ciclo de limpieza completado."
}

prune_pass

if [ "${1:-}" = "--once" ] || [ "${PRUNE_ONCE:-0}" = "1" ]; then
    exit 0
fi

trap 'echo "[pruner] Detención solicitada. Saliendo limpiamente."; exit 0' TERM INT

while true; do
    sleep "$PRUNE_INTERVAL_SECONDS" &
    wait "$!"
    prune_pass
done
