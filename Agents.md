# Instrucciones para el Agente: Integración de Nuevos Proyectos

Cuando el usuario te indique "lee Agents.md y creame la estructura del proyecto [URL_DEL_REPOSITORIO] en mi sitio web", debes ejecutar la siguiente serie de pasos para integrar la información del repositorio en el portafolio, respetando el diseño, el soporte multilenguaje y la arquitectura dinámica existente.

> [!IMPORTANT]
> El portafolio renderiza los proyectos de forma 100% dinámica mediante JavaScript (`public/js/app.js`). **No es necesario modificar `index.html` estáticamente.**

## Paso 1: Análisis del README.md
1. Descarga el `README.md` del repositorio indicado usando comandos de consola (ej. `curl`).
2. Lee y extrae cuidadosamente el contenido para los **3 idiomas** (Español, Inglés y Portugués). 
3. Identifica:
   - Nombre del proyecto y descripción breve.
   - Qué hace el proyecto (`does`).
   - El caso de estudio: Problema, Solución implementada, y Resultado.
   - Métodos de instalación, pasos recomendados, y el comando de instalación de "un clic" (ej. el script de PowerShell).

## Paso 2: Actualización de `public/js/app.js`
1. **Array `projectMeta` (Líneas iniciales):**
   - Agrega un nuevo objeto al array `projectMeta`.
   - Propiedades a incluir:
     - `id`: slug único del proyecto (ej. `mi-nuevo-proyecto`).
     - `icon`: dos letras representativas (ej. `NP`).
     - `folder`: nombre de la carpeta para las imágenes (ej. `Mi_Nuevo_Proyecto`).
     - `repo`: URL del repositorio.
     - `release`: URL a la última release (`URL_DEL_REPO/releases/latest`).
2. **Objeto `translations`:**
   - Encontrarás el objeto `translations` con claves `es`, `en`, y `pt`.
   - Dentro de cada idioma, dirígete a `projects.projects` (es un array).
   - Agrega un nuevo objeto al final del array respetando exactamente el esquema JSON de los proyectos anteriores.
   - **Esquema Requerido:**
     ```javascript
     {
       name: "Nombre extraído",
       subtitle: "Subtítulo extraído",
       description: "Descripción general",
       does: "Lo que hace el proyecto",
       problem: "El problema principal que resuelve",
       caseStudy: {
         sections: [
           { title: "Problema", text: "..." },
           { title: "Solución implementada", text: "..." },
           { title: "Resultado", text: "..." }
         ],
         installTitle: "Método recomendado",
         methods: ["...", "..."],
         stepsTitle: "Pasos recomendados",
         steps: ["...", "..."],
         commandTitle: "Comando de un clic",
         commandLabel: "Copiar comando",
         commandCopied: "Comando copiado",
         command: "powershell -ExecutionPolicy Bypass..."
       }
     }
     ```

## Paso 3: Carpeta de Galería de Imágenes
1. Dentro del directorio `public/`, crea la carpeta usando el nombre exacto que definiste en `folder` de `projectMeta`.
2. Notifica al usuario que la carpeta ha sido creada para que suba allí sus capturas de pantalla, asegurándote de indicarle que deben nombrarse `Captura_1.png`, `Captura_2.png`, etc., para que el visor de imágenes dinámico las lea automáticamente.

## Reglas y Prevenciones
- **Sincronización:** Trabaja aplicando el mismo patrón de extracción que el "Plan: Sincronización Dinámica de Información desde GitHub".
- **Comprobación de Sintaxis:** Las modificaciones en `app.js` pueden romper el sitio fácilmente si falta una coma o hay errores de sintaxis en los objetos JavaScript. Revisa meticulosamente tus bloques de reemplazo.
- **Clarificación:** Si el `README.md` del nuevo proyecto carece de información en alguno de los idiomas soportados, pregúntale al usuario si desea que traduzcas dinámicamente la información o si prefiere proporcionar los textos.
- **Antes de modificar:** Haz cualquier pregunta técnica que consideres oportuna si hay ambigüedad sobre la estructura.
