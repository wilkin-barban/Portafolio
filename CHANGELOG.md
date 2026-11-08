# Changelog

Todos los cambios relevantes de este proyecto se documentan en este archivo.

El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/) y el proyecto usa versionado semántico.

## [1.1.4] - 2026-11-08

### Cambiado

- Email de contacto del portafolio actualizado a **wilkin.barban@gmail.com**.
- README, `public/data/config.json` y test de configuración actualizados.
- `assetVersion` actualizado a `20261109-4`.

### Verificación

- `npm run check` y `npm test`: 24/24 tests OK.
- CI y build Docker en verde.
- Contacto y email live verificados.

## [1.1.3] - 2026-11-08

### Cambiado

- El proyecto **Portafolio** ya no se muestra dentro de su propia sección de proyectos; quedan cinco proyectos de producto.
- Eliminadas la entrada de Portafolio, sus textos ES/EN/PT y la carpeta de capturas `public/Portafolio/`.
- Contador y `/api/stats` actualizados a 5 proyectos.
- `assetVersion` `20261109-3` y `Cache-Control: no-cache` para HTML/JSON.
- README y README del perfil sin la fila de Portafolio.

### Verificación

- `npm run check` y `npm test`: 24/24 tests OK.
- CI y build Docker en verde.
- Galerías de los cinco proyectos verificadas en live.

## [1.1.2] - 2026-11-08

### Cambiado

- FF-Converter: añadidas **Catálogo de Perfiles** y **Diagnóstico del sistema**; la galería queda con tres capturas de interfaz.
- `assetVersion` actualizado a `20261109-2` para invalidar la caché de la galería.

### Verificación

- `npm run check` y `npm test`: 24/24 tests OK.
- CI y build Docker en verde.
- Galería live de FF-Converter con tres imágenes y hashes coincidentes.

## [1.1.1] - 2026-11-08

### Cambiado

- CRM Sofia Manager: reemplazadas las dos capturas de login de operador/móvil por **Métricas & Desempeño** y **Estoque & Combos**.
- Trindade Massas: reemplazadas las dos capturas de login por **Dashboard**, **Lançamento de Massas** y **Calculador de Estoque** (tres imágenes).
- Super Chat Manager: añadidas **AI Management Panel** y **Theme Catalog / Appearance**; la demo del widget queda como tercera captura.
- `assetVersion` actualizado a `20261109-1` para invalidar la caché de las galerías.

### Verificación

- `npm run check` y `npm test`: 24/24 tests OK.
- CI y build Docker en verde.
- Galerías live verificadas para los seis proyectos.

## [1.1.0] - 2026-11-08

### Agregado

- Portafolio actualizado con los seis proyectos publicados actualmente: CRM Sofia Manager, Trindade Massas, Super Chat Manager, FF-Converter, pi-auto-compaction y Portafolio.
- Casos de estudio ES/EN/PT con problema, solución, resultado, métodos de instalación, pasos y comandos reales.
- Enlaces de “Ver en vivo” para CRM, Trindade y Portafolio, además de repositorio y última release en cada proyecto.
- Biblioteca de capturas reconstruida con imágenes reales de las aplicaciones: CRM (cliente, operador y móvil), Trindade (web y móvil), Super Chat Manager, FF-Converter, pi-auto-compaction y el propio Portafolio.
- Imagen OG/social preview `public/assets/og-cover.png` de 1280×640 generada desde el sitio actualizado.
- `CHANGELOG.md`, notas de release en `docs/releases/v1.1.0.md`, `SECURITY.md` y `LICENSE`.

### Cambiado

- Migración al repositorio `wilkin-barban/Portafolio`.
- README, contacto, enlaces de GitHub y dominios actualizados.
- Endpoint `/api/stats` usa la cuenta `wilkin-barban` y devuelve el conteo real de proyectos (6) separado de los repositorios públicos.
- Contadores de la portada y metadatos SEO/OG alineados con el contenido actual.
- Guía `Agents.md` actualizada para el nuevo propietario de GitHub.

### Eliminado

- Proyectos antiguos y sus capturas (`YouTube Downloader`, `Normalizador Audio`, `Photo Dedup`, `LiveChat Pro`, `WSL Manager Pro`, `AI Workspace Manager`).
- Enlaces al usuario anterior `wilkinbarban`.
- Antiguo `public/assets/og-cover.svg` reemplazado por el PNG 1280×640.

### Verificación

- `npm run check` y `npm test`: 24/24 tests OK.
- Galerías API validadas para los seis proyectos.
- Build Docker y despliegue en `portfolio-web` verificados.

[1.1.4]: https://github.com/wilkin-barban/Portafolio/releases/tag/v1.1.4
[1.1.3]: https://github.com/wilkin-barban/Portafolio/releases/tag/v1.1.3
[1.1.2]: https://github.com/wilkin-barban/Portafolio/releases/tag/v1.1.2
[1.1.1]: https://github.com/wilkin-barban/Portafolio/releases/tag/v1.1.1
[1.1.0]: https://github.com/wilkin-barban/Portafolio/releases/tag/v1.1.0
