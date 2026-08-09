# Portafolio Personal

Página web profesional construida con Node.js, Express, HTML, CSS y JavaScript puro. Incluye diseño responsive, animaciones, partículas suaves, SEO básico, Docker y estructura lista para producción.

## Ejecutar en local

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Ejecutar con Docker

```bash
docker compose up --build
```

La web quedará disponible en `http://localhost:3000`.

Para detener:

```bash
docker compose down
```

## Estructura

```text
.
├── public
│   ├── assets
│   ├── css
│   ├── js
│   └── index.html
├── src
│   └── server.js
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
```

## Editar contenido

- Cambia textos principales y secciones fijas en `public/index.html`.
- Edita habilidades, proyectos, servicios, traducciones y enlaces de contacto en `public/js/app.js`.
- Ajusta colores, espaciados, animaciones y responsive en `public/css/webflow.css`.
- Reemplaza `public/assets/og-cover.svg` para personalizar la imagen compartida en redes.

## Capturas de proyectos

Cada proyecto tiene una carpeta dentro de `public`. Coloca ahí tus capturas y se mostrarán automáticamente en el detalle del proyecto:

```text
public/Youtube_Downloader
public/Normalizador_Audio
public/Photo_Dedup
public/LiveChat_Pro
```

Formatos soportados: `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`, `.avif` y `.svg`.

## Idiomas

El sitio detecta el idioma del navegador y soporta español, inglés y portugués. También incluye selector manual `ES / EN / PT`. Las traducciones están en `public/js/app.js`, dentro del objeto `translations`.

## Preparar para producción

1. Actualiza los enlaces reales de GitHub, WhatsApp, correo, LinkedIn y Telegram en `public/js/app.js`.
2. Cambia el nombre o datos personales que quieras en `public/index.html`.
3. Ejecuta `npm run check`.
4. Construye con Docker usando `docker compose up --build`.

## Variables

- `PORT`: puerto del servidor. Valor por defecto: `3000`.
- `NODE_ENV`: usa `production` en despliegues.
