#!/bin/sh
set -eu

if [ -f /etc/letsencrypt/live/wilkinbarban.duckdns.org/fullchain.pem ] && [ -f /etc/letsencrypt/live/wilkinbarban.duckdns.org/privkey.pem ] \
   && [ -f /etc/letsencrypt/live/trindademasas.duckdns.org/fullchain.pem ] \
   && [ -f /etc/letsencrypt/live/trindademasas.duckdns.org/privkey.pem ] \
   && [ -f /etc/letsencrypt/live/wilkinbarban-opencode.duckdns.org/fullchain.pem ] \
   && [ -f /etc/letsencrypt/live/wilkinbarban-opencode.duckdns.org/privkey.pem ] \
   && [ -f /etc/letsencrypt/live/wilkinbarban-music.duckdns.org/fullchain.pem ] \
   && [ -f /etc/letsencrypt/live/wilkinbarban-music.duckdns.org/privkey.pem ] \
   && [ -f /etc/letsencrypt/live/casadeasados.duckdns.org/fullchain.pem ] \
   && [ -f /etc/letsencrypt/live/casadeasados.duckdns.org/privkey.pem ] \
   && [ -f /etc/letsencrypt/live/wilkinbarban-engram.duckdns.org/fullchain.pem ] \
   && [ -f /etc/letsencrypt/live/wilkinbarban-engram.duckdns.org/privkey.pem ] \
   && [ -f /etc/letsencrypt/live/wilkinbarban-omniroute.duckdns.org/fullchain.pem ] \
   && [ -f /etc/letsencrypt/live/wilkinbarban-omniroute.duckdns.org/privkey.pem ]; then
    cp /etc/nginx/templates/default.https.conf /etc/nginx/conf.d/default.conf
else
    cp /etc/nginx/templates/default.http.conf /etc/nginx/conf.d/default.conf
fi

rm -f /etc/nginx/conf.d/default.conf.default
