# Instrucciones para el Agente: Integración de Nuevos Proyectos

Cuando el usuario te indique "lee Agents.md y creame la estructura del proyecto [URL_DEL_REPOSITORIO] en mi sitio web", debes ejecutar la siguiente serie de pasos para integrar la información del repositorio en el portafolio, respetando el diseño, el soporte multilenguaje y la arquitectura modular basada en datos JSON y ES Modules.

> [!IMPORTANT]
> El portafolio renderiza los proyectos de forma 100% dinámica consumiendo archivos JSON desacoplados (`public/data/projects.json` y `public/locales/*.json`). **No es necesario modificar `app.js` ni `index.html` estáticamente.**

## Paso 1: Análisis del README.md
1. Descarga el `README.md` del repositorio indicado usando comandos de consola (ej. `curl`).
2. Lee y extrae cuidadosamente el contenido para los **3 idiomas** (Español, Inglés y Portugués). 
3. Identifica:
   - Nombre del proyecto y descripción breve.
   - Qué hace el proyecto (`does`).
   - El caso de estudio: Problema, Solución implementada, y Resultado.
   - Métodos de instalación, pasos recomendados, y el comando de instalación de "un clic" (ej. el script de PowerShell).

## Paso 2: Actualización de Metadatos y Textos

1. **Metadatos en `public/data/projects.json`:**
   - Agrega un nuevo objeto al array `projects.json`:
     ```json
     {
       "id": "mi-nuevo-proyecto",
       "icon": "NP",
       "folder": "Mi_Nuevo_Proyecto",
       "repo": "https://github.com/wilkinbarban/mi-nuevo-proyecto",
       "release": "https://github.com/wilkinbarban/mi-nuevo-proyecto/releases/latest"
     }
     ```

2. **Diccionarios de Idioma (`public/locales/es.json`, `en.json`, `pt.json`):**
   - En cada archivo de idioma, dirígete al array `projects.projects`.
   - Agrega un nuevo objeto al final del array respetando el orden y esquema:
     ```json
     {
       "name": "Nombre extraído",
       "subtitle": "Subtítulo extraído",
       "description": "Descripción general",
       "does": "Lo que hace el proyecto",
       "problem": "El problema principal que resuelve",
       "caseStudy": {
         "sections": [
           { "title": "Problema", "text": "..." },
           { "title": "Solución implementada", "text": "..." },
           { "title": "Resultado", "text": "..." }
         ],
         "installTitle": "Método recomendado",
         "methods": ["...", "..."],
         "stepsTitle": "Pasos recomendados",
         "steps": ["...", "..."],
         "commandTitle": "Comando de un clic",
         "commandLabel": "Copiar comando",
         "commandCopied": "Comando copiado",
         "command": "powershell -ExecutionPolicy Bypass..."
       }
     }
     ```

## Paso 3: Carpeta de Galería de Imágenes
1. Dentro del directorio `public/`, crea la carpeta usando el nombre exacto que definiste en `folder` de `projects.json`.
2. Notifica al usuario que la carpeta ha sido creada para que suba allí sus capturas de pantalla (`captura_1.png`, `captura_2.png`, etc.) para que el visor de imágenes dinámico las lea automáticamente.

## Reglas y Prevenciones
- **Validación JSON:** Asegúrate de que los archivos JSON modificados sean válidos (`jq . public/locales/es.json` o `node -e 'JSON.parse(...)'`).
- **Clarificación:** Si el `README.md` del nuevo proyecto carece de información en alguno de los idiomas soportados, pregúntale al usuario si desea que traduzcas dinámicamente la información o si prefiere proporcionar los textos.
