# Changelog

Todos los cambios relevantes de este proyecto se documentan en este archivo.

El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/) y el proyecto usa versionado semántico.

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

[1.1.0]: https://github.com/wilkin-barban/Portafolio/releases/tag/v1.1.0
