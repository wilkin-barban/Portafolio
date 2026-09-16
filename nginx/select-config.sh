#!/bin/sh
set -e

CONF_DIR="/etc/nginx/conf.d"
SITES_DIR="/etc/nginx/sites-templates"

echo "[nginx-ssl] Iniciando comprobación de configuración SSL..."

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
