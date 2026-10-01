#!/bin/sh
set -e

CONF_DIR="/etc/nginx/conf.d"
SITES_DIR="/etc/nginx/sites-templates"
OBS_DIR="${OBSERVATION_DIR:-/var/log/nginx/edge-observations}"

echo "[nginx-ssl] Iniciando comprobación de configuración SSL..."

echo "[nginx-ssl] Verificando volumen de observación en $OBS_DIR..."
if ! mountpoint -q "$OBS_DIR"; then
    echo "[nginx-ssl] ERROR: $OBS_DIR no es un punto de montaje dedicado. Fallo cerrado para proteger logs del sistema." >&2
    exit 1
fi

if ! chown 101:101 "$OBS_DIR" || ! chmod 0750 "$OBS_DIR"; then
    echo "[nginx-ssl] ERROR: No se pudieron establecer permisos UID/GID 101 en $OBS_DIR." >&2
    exit 1
fi
echo "[nginx-ssl] ✓ Volumen de observación verificado y permisos UID/GID 101 asegurados."

if [ -d "$SITES_DIR" ]; then
    echo "[nginx-ssl] Modo modular detectado en $SITES_DIR"
    rm -f "$CONF_DIR"/*.conf

    for http_file in "$SITES_DIR"/*.http.conf; do
        [ -f "$http_file" ] || continue

        filename=$(basename "$http_file")
        domain="${filename%.http.conf}"
        https_file="${SITES_DIR}/${domain}.https.conf"

        cert="/etc/letsencrypt/live/${domain}/fullchain.pem"
        key="/etc/letsencrypt/live/${domain}/privkey.pem"

        if [ -f "$cert" ] && [ -f "$key" ] && [ -f "$https_file" ]; then
            echo "[nginx-ssl] ✓ ${domain}: Certificados presentes -> Activando HTTPS"
            cp "$https_file" "${CONF_DIR}/${domain}.conf"
        else
            echo "[nginx-ssl] ⚠ ${domain}: Certificados no encontrados -> Activando HTTP (desafío ACME habilitado)"
            cp "$http_file" "${CONF_DIR}/${domain}.conf"
        fi
    done
else
    echo "[nginx-ssl] Modo legacy monolítico detectado..."
    if [ -f /etc/letsencrypt/live/wilkinbarban.duckdns.org/fullchain.pem ] && [ -f /etc/letsencrypt/live/wilkinbarban.duckdns.org/privkey.pem ]; then
        cp /etc/nginx/templates/default.https.conf /etc/nginx/conf.d/default.conf
    else
        cp /etc/nginx/templates/default.http.conf /etc/nginx/conf.d/default.conf
    fi
fi

echo "[nginx-ssl] Configuración lista en $CONF_DIR."
