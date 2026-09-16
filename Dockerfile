FROM node:20-alpine

WORKDIR /app

# Instalar dependencias de producción
COPY package*.json ./
RUN npm ci --omit=dev && chown -R node:node /app

# Copiar código fuente con usuario node no privilegiado
COPY --chown=node:node src ./src
COPY --chown=node:node public ./public

ENV NODE_ENV=production
ENV PORT=80

# Hardening: Ejecutar proceso sin privilegios de root
USER node

EXPOSE 80

CMD ["node", "src/server.js"]
