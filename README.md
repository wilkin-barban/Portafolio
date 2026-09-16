# Portafolio Personal — Wilkin Barban

Sitio web y portafolio profesional de Wilkin Barban, desarrollado con una arquitectura ligera, modular y de alto rendimiento basada en **Node.js, Express, JavaScript nativo (ES6+), HTML5 y CSS3**.

El proyecto incluye soporte multilenguaje reactivo, visualizador interactivo de proyectos con galería dinámica, integración de widget de chat en tiempo real, tematización claro/oscuro, contenedorización con **Docker** y orquestación con **Nginx** como reverse proxy SSL multifuncional.

---

## Características Principales

- **Frontend Nativo y Rápido:** Construido sin frameworks pesados en cliente para garantizar máxima velocidad de carga, interactividad fluida y cero dependencias de bundling innecesarias.
- **Soporte Multilenguaje Completo:** Traducciones integradas para **Español (ES)**, **Inglés (EN)** y **Portugués (PT)** con detección automática según el navegador y selector interactivo persistente.
- **Tematización Dinámica:** Modos claro y oscuro con detección de preferencia del sistema y guardado de estado en almacenamiento local.
- **Renderizado Dinámico de Proyectos:** Los casos de estudio, insignias tecnológicas, comandos de instalación de un clic y enlaces a repositorios se administran de forma desacoplada desde `public/js/app.js`.
- **Galería de Capturas Inteligente:** Endpoint en backend (`/api/gallery/:project`) que detecta y ordena automáticamente las capturas en disco (`captura_1.png`, `captura_2.png`, etc.) con sanitización contra path traversal.
- **Métricas de GitHub en Tiempo Real:** Integración con la API pública de GitHub (`/api/stats`) con sistema de caché en memoria de 1 hora para evitar rate limits.
- **Infraestructura de Producción:** Configuración completa con Docker Compose y Nginx Reverse Proxy preparado para gestión automática de certificados SSL con Certbot / Let's Encrypt para múltiples dominios.
- **Integración con Widget de Chat:** Conexión nativa con LiveChat Pro mediante WebSocket y scripts diferidos.

---

## Arquitectura y Estructura del Proyecto

```text
.
├── .gitignore              # Exclusiones de Git (dependencias, temporales, etc.)
├── Agents.md               # Guía automatizada para agentes sobre integración de nuevos proyectos
├── docker-compose.yml      # Definición de servicios (portfolio, nginx, certbot y redes)
├── Dockerfile              # Imagen de producción basada en node:20-alpine
├── nginx/                  # Configuraciones del proxy inverso Nginx
│   ├── default.http.conf   # Servido HTTP y validación ACME de Let's Encrypt
│   ├── default.https.conf  # Servido HTTPS con TLS 1.2/1.3, cabeceras seguras y upstreams
│   └── select-config.sh    # Script de arranque para conmutar HTTP/HTTPS según certificados
├── package.json            # Dependencias y scripts de Node.js
├── public/                 # Archivos estáticos servidos por Express
│   ├── assets/             # Favicon, covers y recursos gráficos
│   ├── css/                # Estilos globales, diseño responsive y temas (webflow.css)
│   ├── js/                 # Lógica cliente, estado, i18n y renderizado (app.js)
│   ├── index.html          # Estructura principal y maquetación semántica
│   └── <Nombre_Proyecto>/  # Directorios de capturas ordenadas para la galería de cada app
└── src/
    └── server.js           # Servidor Express, endpoints de API y cabeceras de seguridad
```

---

## Requisitos Previos

- **Node.js**: versión 18 LTS o superior (recomendado Node.js 20+).
- **npm**: versión 9 o superior.
- **Docker** y **Docker Compose** (para ejecución o despliegue en contenedores).

---

## Ejecución en Entorno Local

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Verificar sintaxis e integridad del código:**
   ```bash
   npm run check
   ```

3. **Iniciar el servidor en modo desarrollo:**
   ```bash
   PORT=3000 npm run dev
   ```
   Abre tu navegador en `http://localhost:3000`.

---

## Despliegue con Docker

El servicio está preparado para producción utilizando contenedores ligeros basados en Alpine Linux.

1. **Construir y levantar los contenedores:**
   ```bash
   docker compose up --build -d
   ```

2. **Verificar estado de los contenedores:**
   ```bash
   docker compose ps
   ```

3. **Consultar registros en tiempo real:**
   ```bash
   docker compose logs -f portfolio
   ```

4. **Detener el entorno:**
   ```bash
   docker compose down
   ```

---

## Configuración de Dominios y Nginx

El servicio Nginx incluido funciona como gateway central para los dominios gestionados bajo DuckDNS:

- **`wilkinbarban.duckdns.org`**: Portafolio web y pasarela para LiveChat.
- **`casadeasados.duckdns.org`**: Aplicación web y API Gateway.
- **`trindademasas.duckdns.org`**: Sitio web Trindade.
- **`wilkinbarban-music.duckdns.org`**: Servicio de streaming de audio privado (Navidrome).

El script `nginx/select-config.sh` valida automáticamente la existencia de los certificados en `/etc/letsencrypt/live/`. Si existen, activa la configuración HTTPS (`default.https.conf`) con redirección de tráfico no seguro; en caso contrario, arranca en modo HTTP (`default.http.conf`) para permitir el desafío ACME (`/.well-known/acme-challenge/`).

---

## Integración de Nuevos Proyectos

Para agregar un nuevo caso de estudio al portafolio:

1. **Registrar metadatos en `public/js/app.js`:**
   Añade la definición en el array `projectMeta` (id, icono, carpeta de imágenes, URLs de repositorio y release).

2. **Añadir textos en el diccionario `translations`:**
   En cada idioma (`es`, `en`, `pt`), agrega dentro de `projects.projects` el objeto con:
   - `name`, `subtitle`, `description`, `does`, `problem`.
   - `caseStudy`: secciones estructuradas, métodos de instalación, pasos y comando de un clic.

3. **Agregar capturas en `public/<Nombre_Carpeta>/`:**
   Nombra los archivos secuencialmente: `captura_1.png`, `captura_2.png`, etc. La API de galería los consumirá y ordenará automáticamente.

*(Para más detalles sobre este procedimiento asistido, consulta `Agents.md`).*

---

## Variables de Entorno

| Variable | Descripción | Valor por Defecto |
| :--- | :--- | :--- |
| `PORT` | Puerto de escucha del servidor Express | `80` (en contenedor) / configurable |
| `NODE_ENV` | Entorno de ejecución (`development` o `production`) | `production` (en Docker) |

---

## Contacto

- **Desarrollador:** Wilkin Barban
- **Correo Electrónico:** [wilkin.barban@gmail.com](mailto:wilkin.barban@gmail.com)
- **LinkedIn:** [linkedin.com/in/wilkin-barban-rosabal](https://www.linkedin.com/in/wilkin-barban-rosabal)
- **GitHub:** [@wilkinbarban](https://github.com/wilkinbarban)
