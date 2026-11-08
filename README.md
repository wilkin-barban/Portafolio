# Portafolio — Wilkin Barban

Portafolio profesional de **Wilkin Barban**, construido con **Node.js, Express, HTML5, CSS3 y JavaScript nativo**. Presenta los proyectos actuales con casos de estudio, enlaces verificados y capturas reales, en **español, inglés y portugués**.

> **Nuevo repositorio:** [github.com/wilkin-barban/Portafolio](https://github.com/wilkin-barban/Portafolio)  
> **Sitio publicado:** [wilkinbarban.duckdns.org](https://wilkinbarban.duckdns.org)

---

## Proyectos actuales

| Proyecto | Qué es | Enlaces |
|---|---|---|
| **CRM Sofia Manager** | CRM omnichannel con IA, pedidos, stock, pagos y RAG para una operación de asados. Next.js, Supabase y Docker. | [Repo](https://github.com/wilkin-barban/CRM_Sofia_Manager) · [Demo](https://crmsofiamanager.duckdns.org) · [Release](https://github.com/wilkin-barban/CRM_Sofia_Manager/releases/latest) |
| **Trindade Massas** | Operaciones de planta en web y Android: producción, higiene, temperatura, cargas, stock y ERP Aero32. | [Repo](https://github.com/wilkin-barban/Trindade) · [Demo](https://trindademasas.duckdns.org) · [Release](https://github.com/wilkin-barban/Trindade/releases/latest) |
| **Super Chat Manager** | Chat en vivo auto-hospedado con widget, Telegram, panel, RAG y Docker. | [Repo](https://github.com/wilkin-barban/Super-Chat-Manager) · [Release](https://github.com/wilkin-barban/Super-Chat-Manager/releases/latest) |
| **FF-Converter** | Conversor FFmpeg de escritorio para Windows y Linux, por lotes y con perfiles. | [Repo](https://github.com/wilkin-barban/FF-Converter) · [Release](https://github.com/wilkin-barban/FF-Converter/releases/latest) |
| **pi-auto-compaction** | Compactación automática y configurable para agentes Pi, gentle-shell y herdr. | [Repo](https://github.com/wilkin-barban/pi-auto-compaction) · [Release](https://github.com/wilkin-barban/pi-auto-compaction/releases/latest) |

---

## Stack

- **Backend:** Node.js + Express, API de salud, estadísticas de GitHub y galería dinámica.
- **Frontend:** HTML5, CSS3, JavaScript ES Modules, i18n ES/EN/PT, temas claro/oscuro y partículas.
- **Contenido:** `public/data/projects.json` + `public/locales/*.json`.
- **Imágenes:** carpetas `public/<Proyecto>/captura_N.png`; el servidor valida la carpeta contra `projects.json`.
- **Infraestructura:** Docker, Docker Compose, Nginx, Certbot/Let's Encrypt y healthchecks.

## Estructura

```text
.
├── public/
│   ├── assets/              # favicon y og-cover.png 1280x640
│   ├── css/                 # estilos y Webflow
│   ├── data/                # projects.json + config.json
│   ├── js/                  # app.js + módulos ES
│   ├── locales/             # es.json, en.json, pt.json
│   ├── index.html
│   └── <Proyecto>/          # captura_1.png, captura_2.png, ...
├── src/server.js            # Express, API y seguridad
├── tests/                   # pruebas de datos, servidor y operación
├── docker-compose.yml
├── Dockerfile
├── docs/
│   ├── releases/v1.1.3.md
│   └── operations/
└── nginx/
```

## Desarrollo local

```bash
npm ci
npm run check
npm test
npm start
```

Abrí `http://localhost:3000` (o el `PORT` configurado).

## Docker y despliegue

```bash
docker compose up -d --build
docker compose ps
docker compose logs -f portfolio
```

Servicios principales:

- `portfolio-web`: Express en el puerto 80 interno.
- `portfolio-nginx`: reverse proxy TLS y gateway de los dominios.
- `portfolio-edge-observation-pruner`: retención de logs de observación.

Dominios actuales:

- `wilkinbarban.duckdns.org` — Portafolio y widget de Super Chat Manager.
- `crmsofiamanager.duckdns.org` — CRM Sofia Manager.
- `trindademasas.duckdns.org` — Trindade Massas.

## Contenido y capturas

1. Los metadatos técnicos viven en `public/data/projects.json`.
2. Los textos y casos de estudio viven en `public/locales/es.json`, `en.json` y `pt.json`.
3. Las capturas se guardan en `public/<folder>/captura_1.png`, `captura_2.png`, etc.
4. La API `/api/gallery/:project` solo sirve carpetas autorizadas y ordena las capturas numéricamente.

La portada y las capturas de cada proyecto se actualizaron con las aplicaciones reales. La imagen social/OG está en `public/assets/og-cover.png` (1280×640).

## Tests y CI

```bash
npm run check
npm test
```

La suite cubre integridad de idiomas, metadatos, configuración, seguridad HTTP, galería autorizada, path traversal, health y fallback SPA. El workflow `.github/workflows/ci.yml` valida tests y build Docker en `main` y pull requests.

## Release

La versión actual es **v1.1.3**. Las notas están en [`docs/releases/v1.1.3.md`](docs/releases/v1.1.3.md) y el historial en [`CHANGELOG.md`](CHANGELOG.md).

## Contacto

- **GitHub:** [@wilkin-barban](https://github.com/wilkin-barban)
- **Correo:** [barbanwilkin@gmail.com](mailto:barbanwilkin@gmail.com)
- **LinkedIn:** [wilkin-barban-rosabal](https://www.linkedin.com/in/wilkin-barban-rosabal)
- **Portafolio:** [wilkinbarban.duckdns.org](https://wilkinbarban.duckdns.org)

## Licencia

MIT. Consultá [`LICENSE`](LICENSE).
