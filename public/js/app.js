"use strict";

const contactLinks = [
  { label: { es: "GitHub", en: "GitHub", pt: "GitHub" }, icon: "GH", href: "https://github.com/wilkinbarban/" },
  { label: { es: "Correo", en: "Email", pt: "E-mail" }, icon: "@", href: "mailto:wilkin.barban@yahoo.com" },
  { label: { es: "LinkedIn", en: "LinkedIn", pt: "LinkedIn" }, icon: "IN", href: "https://www.linkedin.com/in/wilkin-barban-rosabal" },
  { labelKey: "action_support_project", icon: "$", action: "support" }
];

const supportTargets = {
  wise: "https://wise.com/pay/me/wilkinb3",
  pix: "wilkin.barban@yahoo.com"
};

const assetVersion = "20260526-3";

const sharedSkills = [
  "Python",
  "Node.js",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Docker",
  "Linux",
  "GitHub",
  "APIs",
  "FFmpeg",
  "Tkinter",
  "UI/UX"
];

const projectMeta = [
  {
    id: "youtube-downloader",
    icon: "VD",
    folder: "Youtube_Downloader",
    repo: "https://github.com/wilkinbarban/youtube-downloader",
    release: "https://github.com/wilkinbarban/youtube-downloader/releases/latest"
  },
  {
    id: "normalizador-audio",
    icon: "AU",
    folder: "Normalizador_Audio",
    repo: "https://github.com/wilkinbarban/normalizador-audio",
    release: "https://github.com/wilkinbarban/normalizador-audio/releases/latest"
  },
  {
    id: "photo-dedup",
    icon: "PH",
    folder: "Photo_Dedup",
    repo: "https://github.com/wilkinbarban/photo-dedup",
    release: "https://github.com/wilkinbarban/photo-dedup/releases/latest"
  },
  {
    id: "livechat-pro",
    icon: "LC",
    folder: "LiveChat_Pro",
    repo: "https://github.com/wilkinbarban/LiveChat-Pro",
    release: "https://github.com/wilkinbarban/LiveChat-Pro/releases/latest"
  },
  {
    id: "wsl-manager-pro",
    icon: "WS",
    folder: "WSL_Manager_Pro",
    repo: "https://github.com/wilkinbarban/WSL-Manager-Pro",
    release: "https://github.com/wilkinbarban/WSL-Manager-Pro/releases/latest"
  },
  {
    id: "ai-workspace-manager",
    icon: "AI",
    folder: "AI_Workspace_Manager",
    repo: "https://github.com/wilkinbarban/AI-Workspace-Manager",
    release: "https://github.com/wilkinbarban/AI-Workspace-Manager/releases/latest"
  }
];

const translations = {
  es: {
    meta: {
      title: "Wilkin | Desarrollador de software",
      description: "Portafolio profesional de desarrollador de software especializado en automatización, Node.js, Python, aplicaciones web y soluciones freelance.",
      languageSelector: "Selector de idioma"
    },
    nav: {
      about: "Sobre mí",
      skills: "Habilidades",
      projects: "Proyectos",
      services: "Servicios",
      contact: "Contacto",
      language: "Idioma"
    },
    hero: {
      eyebrow: "Desarrollo de software · Automatización · Freelance",
      title: "Wilkin, desarrollador de software enfocado en soluciones reales.",
      text: "Construyo herramientas productivas, automatizaciones y experiencias web limpias para transformar procesos complejos en sistemas simples, rápidos y confiables.",
      primary: "Hablemos",
      secondary: "Ver proyectos",
      cardAria: "Resumen profesional",
      cardLabel: "Disponible para",
      cardTitle: "Automatización, aplicaciones web y herramientas a medida",
      stats: { skills: "habilidades", projects: "proyectos", services: "áreas freelance" }
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Una trayectoria de adaptación, aprendizaje y ejecución.",
      paragraphs: [
        "Soy un desarrollador de software de origen cubano, actualmente radicado en Curitiba, Brasil, bajo la condición de refugiado. Mi trayectoria es una historia de adaptación y evolución constante: desde la gestión logística profesional hasta la creación de soluciones digitales complejas.",
        "Me especializo en la automatización de procesos y el desarrollo de aplicaciones que resuelven problemas reales. Mi enfoque combina la eficiencia de la lógica de programación con una capacidad autodidacta para dominar herramientas como Python y Node.js.",
        "He desarrollado utilidades de software orientadas a productividad real, optimizando tareas que van desde la normalización de medios hasta la gestión inteligente de archivos.",
        "Creo firmemente que la tecnología es mi mejor lenguaje para aportar valor en cualquier entorno."
      ],
      timeline: [
        "Detectar procesos repetitivos y convertirlos en sistemas.",
        "Diseñar herramientas simples, mantenibles y útiles desde el primer día.",
        "Iterar con datos reales, documentación clara y mentalidad de producto."
      ]
    },
    skills: {
      eyebrow: "Habilidades",
      title: "Stack técnico orientado a productividad, automatización y producto.",
      list: [...sharedSkills, "Automatización", "SEO básico", "i18n / L10n"]
    },
    projects: {
      eyebrow: "Proyectos",
      title: "Herramientas creadas para necesidades reales.",
      intro: "Herramientas que construí para resolver problemas reales de mi día a día. Cada proyecto nació de una necesidad personal y fue desarrollado con fines educativos y de crecimiento técnico. El código es abierto, las soluciones son funcionales y siempre estoy dispuesto a recibir mejoras, correcciones y colaboraciones.",
      open: "Ver detalles",
      repo: "Repositorio",
      release: "Última versión",
      gallery: "Capturas",
      noImages: "Aún no hay capturas. Coloca imágenes en",
      solves: "Problema que resuelve",
      does: "Qué hace",
      projects: [
        {
          name: "YouTube Downloader",
          subtitle: "Descargador avanzado de video y audio",
          description: "Aplicación de escritorio para Windows creada con Python y PyQt6 para gestionar descargas de YouTube (video, playlist y audio), con cola concurrente, historial, logs, monitor del portapapeles y gestor web asíncrono en FastAPI/WebSockets.",
          does: "Descarga videos individuales, playlists y audio, permite hasta 3 descargas simultáneas, detecta enlaces desde el portapapeles, integra FFmpeg y ofrece un gestor web local en http://127.0.0.1:8000 con progreso en tiempo real.",
          problem: "Resuelve la necesidad de descargar material educativo, referencias o recursos de forma ordenada, repetible y con una interfaz gráfica estable que gestiona colas automáticamente.",
          caseStudy: {
            sections: [
              {
                title: "Problema",
                text: "Muchos descargadores son inestables, limitados en formatos o carecen de gestión de colas. Descargar listas largas o formatos específicos de forma repetitiva consume tiempo y es propenso a errores."
              },
              {
                title: "Solución implementada",
                text: "Se desarrolló una aplicación en Python con PyQt6 y yt-dlp. Integra FFmpeg, workers en segundo plano, monitor de portapapeles y un gestor web moderno basado en FastAPI y WebSockets para control remoto local."
              },
              {
                title: "Resultado",
                text: "Una experiencia robusta y automatizada que reduce los tiempos operativos, permite descargar playlists completas y extraer audio fácilmente, con un instalador automático para Windows."
              }
            ],
            installTitle: "Método recomendado",
            methods: [
              "🚀 Método recomendado (.exe): Descarga YouTubeDownloader.exe desde la última release. Incluye el runtime necesario y FFmpeg portable empaquetado, ideal para usuarios no técnicos.",
              "⚡ Instalación scriptable (PowerShell): Ejecuta install.ps1 con el comando de un clic para descargar el repositorio oficial, verificarlo, preparar .venv, instalar requirements.txt y lanzar la aplicación."
            ],
            stepsTitle: "Instalación alternativa",
            steps: [
              "Clonar el repositorio o descargar el ZIP oficial.",
              "Abrir la carpeta del proyecto en Windows.",
              "Ejecutar Iniciar.bat para validar Python, crear .venv, instalar dependencias y abrir la interfaz."
            ],
            commandTitle: "Comando de un clic",
            commandLabel: "Copiar comando",
            commandCopied: "Comando copiado",
            command: "Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force; irm https://raw.githubusercontent.com/wilkinbarban/youtube-downloader/main/install.ps1 | iex"
          }
        },
        {
          name: "Normalizador de Audio",
          subtitle: "Normalizador inteligente de audio",
          description: "Aplicación de escritorio para Windows que normaliza el volumen de lotes de video con FFmpeg loudnorm (LUFS), perfiles de referencia, reportes antes/después, procesamiento paralelo configurable y configuración local fuera del repositorio.",
          does: "Analiza videos, aplica presets LUFS para YouTube, Netflix, Spotify, Podcast o modo Custom, genera perfiles de referencia, muestra waveform, exporta reportes CSV/TXT y puede usar aceleración GPU con fallback a CPU.",
          problem: "Evita revisar y editar manualmente colecciones grandes de audio cuando cada archivo tiene volumen o formato diferente, generando procesos lentos y propensos a errores.",
          caseStudy: {
            sections: [
              {
                title: "Problema",
                text: "En colecciones de video, la inconsistencia de volumen y la necesidad de parámetros LUFS estandarizados generan flujos de trabajo repetitivos y mala experiencia final."
              },
              {
                title: "Solución implementada",
                text: "Se construyó una aplicación con Python, PyQt6 y FFmpeg que automatiza la normalización loudnorm (LUFS). Incluye presets, perfil de referencia, procesamiento paralelo configurable, detección de GPU, visualización de waveform y reportes trazables."
              },
              {
                title: "Resultado",
                text: "Un flujo de normalización eficiente con reportes I, LRA y TP, acelerando drásticamente el procesamiento de lotes de video con una interfaz multilenguaje (ES/EN/PT)."
              }
            ],
            installTitle: "Método recomendado",
            methods: [
              "🚀 Instalación oficial con PowerShell: Ejecuta el comando de un clic basado en install.ps1. Es el único flujo oficial de instalación remota.",
              "⚡ El instalador descarga el repositorio si hace falta, valida el archivo, crea o reutiliza .venv, instala requirements.txt, comprueba Python/FFmpeg y lanza la aplicación."
            ],
            stepsTitle: "Instalación alternativa",
            steps: [
              "Opcionalmente definir $env:NORM_INSTALL_DIR para cambiar la carpeta de instalación.",
              "Ejecutar el comando PowerShell de un clic.",
              "Agregar videos, seleccionar preset o perfil de referencia, elegir carpeta de salida y revisar los reportes generados."
            ],
            commandTitle: "Comando de un clic",
            commandLabel: "Copiar comando",
            commandCopied: "Comando copiado",
            command: "Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force; irm https://raw.githubusercontent.com/wilkinbarban/normalizador-audio/main/install.ps1 | iex"
          }
        },
        {
          name: "Photo Dedup",
          subtitle: "Detector y eliminador de fotos duplicadas",
          description: "PhotoDedup ayuda a limpiar bibliotecas fotográficas grandes sin borrar a ciegas. Analiza archivos, agrupa posibles duplicados y permite decidir visualmente qué foto conservar, con edición Lite y Full.",
          does: "Detecta duplicados exactos por tamaño/hash, similitud visual con hashes perceptuales, comparación asistida por IA en PhotoDedup-full.exe, integración con Google Takeout, revisión por grupos y acciones seguras hacia Papelera o carpeta de destino.",
          problem: "Resuelve el desorden de bibliotecas fotográficas grandes donde los duplicados cambian de nombre, tamaño o compresión, consumiendo espacio y dificultando la organización.",
          caseStudy: {
            sections: [
              {
                title: "Problema",
                text: "Las carpetas de fotografías crecen con copias y versiones casi idénticas. El filtrado manual consume demasiado tiempo y no ofrece un control seguro ni auditabilidad."
              },
              {
                title: "Solución implementada",
                text: "Se implementó una herramienta en PyQt6 con análisis por tamaño/hash, hashes perceptuales, caché local, soporte Google Takeout y asistencia IA opcional en la edición Full. La edición Lite mantiene un flujo más ligero sin dependencias pesadas de IA."
              },
              {
                title: "Resultado",
                text: "Una limpieza de bibliotecas fotográficas significativamente más rápida, con estadísticas de ahorro de espacio y control total sobre qué imágenes conservar sin perder material relevante."
              }
            ],
            installTitle: "Método recomendado",
            methods: [
              "🚀 Descarga recomendada: Usa la última release oficial y elige PhotoDedup-lite.exe para arranque rápido sin IA o PhotoDedup-full.exe para análisis más profundo con IA opcional.",
              "⚡ Instalación con un solo comando: Ejecuta install.ps1 desde PowerShell. Fuera del proyecto descarga y valida el repositorio; dentro del proyecto valida Python 3.14.x, prepara .venv, instala dependencias y abre PhotoDedup."
            ],
            stepsTitle: "Pasos recomendados",
            steps: [
              "Descargar la versión más reciente desde Releases o usar el comando PowerShell de un clic.",
              "Elegir PhotoDedup-lite.exe para flujo hash/visual o PhotoDedup-full.exe para análisis asistido por IA.",
              "Para una copia ya descargada o clonada, ejecutar Iniciar.bat. Si SmartScreen avisa, usar 'Más información' y 'Ejecutar de todas formas' solo si confías en la release oficial."
            ],
            commandTitle: "Comando de un clic",
            commandLabel: "Copiar comando",
            commandCopied: "Comando copiado",
            command: "powershell -ExecutionPolicy Bypass -Command \"iwr -UseBasicParsing https://raw.githubusercontent.com/wilkinbarban/photo-dedup/main/install.ps1 | iex\""
          }
        },
        {
          name: "LiveChat Pro",
          subtitle: "Chat en vivo auto-hospedado con panel web y Telegram",
          description: "LiveChat Pro es un chat en vivo auto-hospedado con widget embebible, integración con Telegram, panel web de administración, persistencia SQLite, métricas del visitante, traducción automática y despliegue recomendado en Docker.",
          does: "Inserta un chat en cualquier web con un solo script, mantiene sesión e historial por visitante, envía mensajes a Telegram y al panel admin, permite responder desde ambos canales y traduce mensajes según idioma.",
          problem: "Resuelve la necesidad de ofrecer soporte directo en sitios pequeños sin depender de plataformas externas costosas, manteniendo control total de datos, configuración e infraestructura.",
          caseStudy: {
            sections: [
              {
                title: "Problema",
                text: "Los sitios pequeños necesitan un canal de contacto inmediato, pero muchas soluciones de soporte son costosas, pesadas y limitan el control sobre datos y operación."
              },
              {
                title: "Solución implementada",
                text: "Se implementó una solución auto-hospedada con widget embebible, integración por bot de Telegram, panel web /admin, sesiones persistentes por visitante, métricas (IP, geolocalización, idioma, user-agent) y traducción automática entre idiomas."
              },
              {
                title: "Resultado",
                text: "El resultado es un canal de soporte ligero y rápido de desplegar que centraliza mensajes en Telegram y panel admin, mejora la atención al visitante y mantiene independencia tecnológica para crecer sin lock-in de proveedores."
              }
            ],
            installTitle: "Método de instalación",
            methods: [
              "🚀 Método recomendado (VPS + Docker): Asegura que el comando node exista, ejecuta node setup.js y elige Public VPS with Docker para publicar en HOST_PORT=8080.",
              "⚡ setup.js valida Node.js >= 24 y npm; si la versión inicial es antigua, intenta actualizar a Node.js 24 en distribuciones soportadas.",
              "🛠️ Método local o sin Docker: instala dependencias con npm, ejecuta setup.js y levanta server.js; opcionalmente usa PM2 para mantener el servicio."
            ],
            stepsTitle: "Pasos recomendados",
            steps: [
              "Instalar un paquete inicial de Node.js si el servidor no trae el comando node.",
              "Crear el bot en BotFather y obtener TELEGRAM_TOKEN y TELEGRAM_ADMIN_ID.",
              "Ejecutar el comando de instalación, elegir Public VPS with Docker o modo local, definir dominio/orígenes permitidos y pegar el script widget.js generado en el sitio externo."
            ],
            commandTitle: "Comando de un clic",
            commandLabel: "Copiar comando",
            commandCopied: "Comando copiado",
            command: "git clone https://github.com/wilkinbarban/LiveChat-Pro.git && cd LiveChat-Pro && node setup.js"
          }
        },
        {
          name: "WSL Manager Pro",
          subtitle: "Gestor profesional de WSL (Subsistema de Windows para Linux)",
          description: "Aplicación de escritorio para Windows que centraliza la gestión de WSL: listar distribuciones, instalar desde catálogo online o rootfs, importar/exportar, aprovisionamiento post-instalación, límites mediante .wslconfig y utilidades de mantenimiento. Construida con Python 3.14+, PySide6/Qt 6 y QThread.",
          does: "Lista distribuciones, instala desde catálogo en línea o rootfs, importa/exporta distros, configura aprovisionamiento post-instalación (cuenta de usuario, paquetes, wsl.conf), aplica límites de recursos mediante .wslconfig y ejecuta utilidades de mantenimiento.",
          problem: "Resuelve la complejidad de gestionar WSL desde la línea de comandos, centralizando en una interfaz gráfica todas las operaciones de instalación, configuración y mantenimiento de distribuciones Linux.",
          caseStudy: {
            sections: [
              {
                title: "Problema",
                text: "Gestionar WSL desde la línea de comandos requiere conocer múltiples comandos, scripts y configuraciones dispersas. Instalar distribuciones, configurar recursos o hacer mantenimiento implica procesos manuales repetitivos y propensos a errores."
              },
              {
                title: "Solución implementada",
                text: "Se desarrolló una aplicación de escritorio con Python, PySide6 y Qt 6 que centraliza toda la gestión de WSL en una interfaz gráfica intuitiva. Incluye un catálogo de 9 distribuciones, descargas reanudables, asistente de instalación de 5 pasos, aprovisionamiento post-instalación automatizado, configuración visual de .wslconfig y utilidades de importación/exportación con workers en segundo plano."
              },
              {
                title: "Resultado",
                text: "Una herramienta completa que reduce drásticamente el tiempo de configuración de WSL, permite instalar distribuciones con un solo clic, automatiza el aprovisionamiento inicial y ofrece control total sobre los recursos del sistema, todo desde una interfaz moderna y multilenguaje (ES/EN/PT)."
              }
            ],
            installTitle: "Método recomendado",
            methods: [
              "🚀 Instalación y ejecución con un solo comando (PowerShell): Ejecuta install.ps1 desde la rama master para descargar el ZIP oficial, extraerlo en el Escritorio y preparar el entorno sin requerir Git.",
              "⚡ Ejecución local rápida: Si ya tienes el repositorio o ZIP descargado, ejecuta Iniciar.bat para detectar Python 3.14+, crear .venv, instalar requisitos y abrir la GUI."
            ],
            stepsTitle: "Pasos recomendados",
            steps: [
              "Ejecutar el comando PowerShell de un clic en Windows 10/11.",
              "Permitir la comprobación de WSL y Python 3.14+; el instalador puede usar winget y solicitar elevación si debe habilitar WSL.",
              "Para instalación manual, descargar/clonar el repo, crear .venv, instalar requirements.txt y ejecutar python main.py."
            ],
            commandTitle: "Comando de un clic",
            commandLabel: "Copiar comando",
            commandCopied: "Comando copiado",
            command: "Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force; irm https://raw.githubusercontent.com/wilkinbarban/WSL-Manager-Pro/master/install.ps1 | iex"
          }
        },
        {
          name: "AI Workspace Manager",
          subtitle: "Centro local para auditoría, memoria y tareas con IA",
          description: "Aplicación local para auditar, documentar y mejorar proyectos de software con ayuda de IA. Escanea carpetas del equipo, detecta tecnologías, calcula métricas de salud, conserva memoria cronológica, registra tareas completadas y permite ejecutar agentes con diffs visibles.",
          does: "Analiza workspaces locales, identifica lenguaje, framework, dependencias, README, licencia, Git, Docker y tests; calcula health score, mantiene memoria del proyecto, gestiona tareas con IA y registra consumo estimado por proveedor, modelo y tipo de tarea.",
          problem: "Resuelve la falta de contexto centralizado al trabajar con varios proyectos, evitando auditorías manuales, pérdida de memoria técnica y cambios de IA difíciles de revisar.",
          caseStudy: {
            sections: [
              {
                title: "Problema",
                text: "Los proyectos acumulan deuda técnica, tareas dispersas y decisiones que se pierden entre carpetas, chats y commits. Auditar manualmente cada workspace y preparar contexto para una IA consume tiempo y reduce la trazabilidad."
              },
              {
                title: "Solución implementada",
                text: "Se desarrolló una aplicación con Electron, React, TypeScript, Node.js, Prisma y SQLite. Soporta escritorio en Windows/macOS y modo web headless para Linux/WSL, con scanner local, memoria cronológica, proveedores IA configurables, agente con herramientas internas y visor de diffs."
              },
              {
                title: "Resultado",
                text: "Un panel local para medir salud técnica, documentar decisiones, ejecutar tareas asistidas por IA y auditar cambios antes de aceptarlos, manteniendo los datos del proyecto en SQLite local y las claves en almacenamiento seguro o .env según la plataforma."
              }
            ],
            installTitle: "Método recomendado",
            methods: [
              "🚀 Windows: Ejecuta el instalador PowerShell para descargar main.zip, validar Node.js >= 20 y npm >= 10, instalar dependencias, preparar Prisma/SQLite y abrir la app Electron.",
              "⚡ Linux/WSL/macOS: Ejecuta install.sh con curl. En Linux/WSL levanta backend Node.js en localhost:3000 y frontend Vite en localhost:5173; en macOS usa Electron en modo desarrollo."
            ],
            stepsTitle: "Pasos recomendados",
            steps: [
              "Ejecutar el instalador correspondiente a tu sistema operativo.",
              "Configurar al menos un proveedor IA desde la interfaz o mediante variables .env en modo headless.",
              "Agregar un workspace usando una ruta absoluta y revisar el health score, memoria, tareas y diffs generados."
            ],
            commandTitle: "Comandos de un clic",
            commandLabel: "Copiar comando",
            commandCopied: "Comando copiado",
            commands: [
              {
                label: "Windows",
                command: "powershell -NoProfile -ExecutionPolicy Bypass -Command \"irm https://raw.githubusercontent.com/wilkinbarban/AI-Workspace-Manager/main/install.ps1 | iex\""
              },
              {
                label: "Linux, WSL y macOS",
                command: "curl -fsSL https://raw.githubusercontent.com/wilkinbarban/AI-Workspace-Manager/main/install.sh | bash"
              }
            ]
          }
        }
      ]
    },
    services: {
      eyebrow: "Servicios freelance",
      title: "Soluciones puntuales o colaboraciones a largo plazo.",
      intro: "Disponible para proyectos puntuales o colaboraciones a largo plazo. Presupuesto sin compromiso.",
      list: [
        {
          icon: "PY",
          title: "Automatización & Scripts",
          intro: "Diseño y desarrollo de herramientas a medida que eliminan tareas manuales, reducen errores y escalan operaciones sin ampliar el equipo humano.",
          items: [
            "Scripts Python de alto rendimiento para procesamiento masivo, limpieza de datos y pipelines automatizados.",
            "Bots e integraciones con APIs para conectar servicios, notificaciones y flujos multiplataforma.",
            "Aplicaciones de escritorio CLI y GUI pensadas para uso diario sin fricción.",
            "Procesamiento multimedia con FFmpeg para conversión, normalización, corte y exportación en lote."
          ]
        },
        {
          icon: "L10",
          title: "Servicios especializados",
          intro: "Soluciones lingüísticas y técnicas para productos digitales multilingües, desde la localización de UI hasta la internacionalización del código base.",
          items: [
            "Localización de software con UI, menús y mensajes adaptados a cada idioma.",
            "Traducción técnica ES ↔ PT-BR para documentación, manuales y contenido digital.",
            "Internacionalización de apps con JSON, i18next y estructuras escalables.",
            "Transcreación y adaptación cultural para evitar traducciones literales fuera de contexto."
          ]
        },
        {
          icon: "KDP",
          title: "Maquetación & Publicación en Amazon",
          intro: "Preparación editorial completa para publicar en Amazon KDP con presentación profesional, compatibilidad máxima y posicionamiento optimizado desde el primer día.",
          items: [
            "Maquetación KDP para eBook y libro impreso con estructura profesional.",
            "Conversión a EPUB y MOBI validada para múltiples dispositivos.",
            "Optimización de portadas según especificaciones de Amazon.",
            "Metadatos y SEO para mejorar visibilidad orgánica en el catálogo."
          ]
        }
      ]
    },
    contact: {
      eyebrow: "Contacto",
      title: "¿Tienes una idea, proceso o producto que necesita volverse software?",
      text: "Cuéntame qué quieres automatizar, mejorar o publicar. Podemos empezar por un diagnóstico simple y convertirlo en un plan ejecutable."
    },
    support: {
      action_support_project: "Ayuda al proyecto",
      support_title: "Ayuda al programador",
      support_heading: "💙 Apoya al programador",
      support_message: "Si mi trabajo, mis herramientas o este portafolio te han resultado útiles, puedes apoyar al desarrollador para seguir creando aplicaciones, proyectos y soluciones reales.",
      support_note: "✨ Tu apoyo ayuda a dedicar más tiempo a nuevas ideas, mejoras y mantenimiento.",
      support_target: "🔗 Enlace de pago (Wise): {target}",
      support_scan_hint: "📱 Escanea el código QR o usa el botón de acción.",
      support_open: "Abrir enlace de pago",
      support_copy: "Copiar enlace",
      support_link_copied: "Enlace de pago copiado al portapapeles.",
      support_qr_error: "No se pudo generar el código QR en este momento.",
      support_close: "Cerrar"
    }
  },
  en: {
    meta: {
      title: "Wilkin | Software developer",
      description: "Professional portfolio for a software developer focused on automation, Node.js, Python, web applications, and freelance solutions.",
      languageSelector: "Language selector"
    },
    nav: { about: "About", skills: "Skills", projects: "Projects", services: "Services", contact: "Contact", language: "Language" },
    hero: {
      eyebrow: "Software developer · Automation · Freelance",
      title: "Wilkin, software developer focused on real-world solutions.",
      text: "I build productivity tools, automation workflows, and clean web experiences that turn complex processes into simple, fast, reliable systems.",
      primary: "Let's talk",
      secondary: "View projects",
      cardAria: "Professional summary",
      cardLabel: "Available for",
      cardTitle: "Automation, web applications, and custom tools",
      stats: { skills: "skills", projects: "projects", services: "freelance areas" }
    },
    about: {
      eyebrow: "About",
      title: "A path of adaptation, learning, and execution.",
      paragraphs: [
        "I am a Cuban software developer currently based in Curitiba, Brazil, under refugee status. My path is a story of constant adaptation and evolution: from professional logistics management to building complex digital solutions.",
        "I specialize in process automation and developing applications that solve real problems. My approach combines programming logic with a self-taught ability to master tools such as Python and Node.js.",
        "I have built software utilities focused on real productivity, optimizing tasks from media normalization to intelligent file management.",
        "I strongly believe technology is my best language for creating value in any environment."
      ],
      timeline: [
        "Spot repetitive processes and turn them into systems.",
        "Design simple, maintainable tools that are useful from day one.",
        "Iterate with real data, clear documentation, and a product mindset."
      ]
    },
    skills: {
      eyebrow: "Skills",
      title: "A technical stack focused on productivity, automation, and product work.",
      list: [...sharedSkills, "Automation", "Basic SEO", "i18n / L10n"]
    },
    projects: {
      eyebrow: "Projects",
      title: "Tools built for real needs.",
      intro: "Tools I built to solve real problems in my day-to-day work. Each project started from a personal need and was developed for learning and technical growth. The code is open, the solutions are functional, and I am always open to improvements, fixes, and collaboration.",
      open: "View details",
      repo: "Repository",
      release: "Latest version",
      gallery: "Screenshots",
      noImages: "No screenshots yet. Add images to",
      solves: "Problem it solves",
      does: "What it does",
      projects: [
        {
          name: "YouTube Downloader",
          subtitle: "Advanced video and audio downloader",
          description: "Windows desktop application built with Python and PyQt6 to manage YouTube downloads (video, playlists, and audio), including concurrent queueing, history, logs, clipboard monitoring, and an asynchronous FastAPI/WebSocket web manager.",
          does: "Downloads single videos, playlists, and audio, supports up to 3 concurrent downloads, detects links from the clipboard, integrates FFmpeg, and exposes a local web manager at http://127.0.0.1:8000 with real-time progress.",
          problem: "It solves the need to download educational material, references, or personal resources in an organized, repeatable way with a stable GUI that manages queues automatically.",
          caseStudy: {
            sections: [
              {
                title: "Problem",
                text: "Many downloaders are unstable, limited in formats, or lack queue management. Downloading long playlists or specific formats repetitively is time-consuming and error-prone."
              },
              {
                title: "Implemented solution",
                text: "Developed a Python app with PyQt6 and yt-dlp. It integrates FFmpeg, background workers, clipboard monitoring, and a modern FastAPI/WebSocket web manager for local remote control."
              },
              {
                title: "Result",
                text: "A robust and automated experience that reduces operational time, allowing users to download full playlists and extract audio easily, with an automatic Windows installer."
              }
            ],
            installTitle: "Recommended method",
            methods: [
              "🚀 Recommended method (.exe): Download YouTubeDownloader.exe from the latest release. It includes the required runtime and bundled portable FFmpeg, ideal for non-technical users.",
              "⚡ Scriptable install (PowerShell): Run install.ps1 with the one-click command to download the official repository, verify it, prepare .venv, install requirements.txt, and launch the app."
            ],
            stepsTitle: "Alternative installation",
            steps: [
              "Clone the repository or download the official ZIP.",
              "Open the project folder in Windows.",
              "Run Iniciar.bat to validate Python, create .venv, install dependencies, and launch the interface."
            ],
            commandTitle: "One-click command",
            commandLabel: "Copy command",
            commandCopied: "Command copied",
            command: "Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force; irm https://raw.githubusercontent.com/wilkinbarban/youtube-downloader/main/install.ps1 | iex"
          }
        },
        {
          name: "Audio Normalizer",
          subtitle: "Smart audio normalization",
          description: "Windows desktop application that normalizes video batch loudness with FFmpeg loudnorm (LUFS), reference profiles, before/after reports, configurable parallel processing, and local user configuration outside the repository.",
          does: "Analyzes videos, applies LUFS presets for YouTube, Netflix, Spotify, Podcast, or Custom mode, generates reference profiles, shows waveform previews, exports CSV/TXT reports, and can use GPU acceleration with CPU fallback.",
          problem: "It avoids manually reviewing and editing large audio collections where each file has a different volume level, leading to slow and error-prone adjustments.",
          caseStudy: {
            sections: [
              {
                title: "Problem",
                text: "In video collections, volume inconsistency and the need for standardized LUFS parameters create repetitive workflows and a poor final experience."
              },
              {
                title: "Implemented solution",
                text: "Built an application with Python, PyQt6, and FFmpeg that automates loudnorm (LUFS) normalization. It includes presets, a reference-profile workflow, configurable parallel processing, GPU detection, waveform visualization, and traceable reports."
              },
              {
                title: "Result",
                text: "An efficient normalization workflow with I, LRA, and TP reports, drastically speeding up batch video processing with a multilingual interface (ES/EN/PT)."
              }
            ],
            installTitle: "Recommended method",
            methods: [
              "🚀 Official PowerShell install: Run the one-click command based on install.ps1. It is the only official remote one-click installation flow.",
              "⚡ The installer downloads the repository when needed, validates the archive, creates or reuses .venv, installs requirements.txt, checks Python/FFmpeg, and launches the app."
            ],
            stepsTitle: "Alternative installation",
            steps: [
              "Optionally set $env:NORM_INSTALL_DIR to change the installation folder.",
              "Run the one-click PowerShell command.",
              "Add videos, select a preset or reference profile, choose the output folder, and review the generated reports."
            ],
            commandTitle: "One-click command",
            commandLabel: "Copy command",
            commandCopied: "Command copied",
            command: "Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force; irm https://raw.githubusercontent.com/wilkinbarban/normalizador-audio/main/install.ps1 | iex"
          }
        },
        {
          name: "Photo Dedup",
          subtitle: "Duplicate photo detector and remover",
          description: "PhotoDedup helps clean large photo libraries without blind deletion. It analyzes files, groups likely duplicates, and lets you visually decide which photo to keep, with Lite and Full editions.",
          does: "Detects exact duplicates by size/hash, visual similarity with perceptual hashes, AI-assisted comparison in PhotoDedup-full.exe, Google Takeout metadata integration, group review, and safe actions to the Recycle Bin or a target folder.",
          problem: "It solves the disorganization of large photo libraries where duplicates change names, sizes, or compression, consuming space and making management difficult.",
          caseStudy: {
            sections: [
              {
                title: "Problem",
                text: "Photo folders grow with nearly identical copies and exports. Manual filtering takes too much time and lacks safe, reviewable controls."
              },
              {
                title: "Implemented solution",
                text: "A PyQt6 tool was built with size/hash analysis, perceptual hashes, local cache, Google Takeout support, and optional AI assistance in the Full edition. The Lite edition keeps a lighter workflow without heavyweight AI dependencies."
              },
              {
                title: "Result",
                text: "Significantly faster library cleanup with recoverable-space statistics, maintaining total control over which images to keep without losing relevant media."
              }
            ],
            installTitle: "Recommended method",
            methods: [
              "🚀 Recommended download: Use the latest official release and choose PhotoDedup-lite.exe for fast hash/visual cleanup or PhotoDedup-full.exe for deeper analysis with optional AI.",
              "⚡ One-command installation: Run install.ps1 from PowerShell. Outside the project it downloads and validates the repository; inside the project it validates Python 3.14.x, prepares .venv, installs dependencies, and opens PhotoDedup."
            ],
            stepsTitle: "Recommended steps",
            steps: [
              "Download the latest release from Releases or use the one-click PowerShell command.",
              "Choose PhotoDedup-lite.exe for the hash/visual workflow or PhotoDedup-full.exe for AI-assisted analysis.",
              "For an already downloaded or cloned copy, run Iniciar.bat. If SmartScreen warns, use 'More info' and 'Run anyway' only if you trust the official release."
            ],
            commandTitle: "One-click command",
            commandLabel: "Copy command",
            commandCopied: "Command copied",
            command: "powershell -ExecutionPolicy Bypass -Command \"iwr -UseBasicParsing https://raw.githubusercontent.com/wilkinbarban/photo-dedup/main/install.ps1 | iex\""
          }
        },
        {
          name: "LiveChat Pro",
          subtitle: "Self-hosted live chat with web admin and Telegram",
          description: "LiveChat Pro is a self-hosted live chat with an embeddable widget, Telegram integration, a web admin panel, SQLite persistence, visitor metrics, automatic translation, and Docker as the recommended deployment path.",
          does: "Adds chat to any website with one script, keeps persistent visitor sessions, forwards messages to Telegram and /admin, supports replies from both channels, and translates messages between visitor and admin languages.",
          problem: "It solves the need for direct support on small websites without relying on expensive external platforms, while preserving full control over infrastructure and data.",
          caseStudy: {
            sections: [
              {
                title: "Problem",
                text: "Small websites need fast, direct support, but many support suites are costly, heavy, and reduce operational control over data and deployment."
              },
              {
                title: "Implemented solution",
                text: "A self-hosted architecture was built with an embeddable widget, Telegram bot integration, /admin web panel, persistent per-visitor sessions, operational metrics (IP, geolocation, language, user-agent), and automatic translation between languages."
              },
              {
                title: "Result",
                text: "The result is a lightweight and easy-to-deploy support channel that centralizes conversations in Telegram and the admin panel, improving response flow while avoiding vendor lock-in."
              }
            ],
            installTitle: "Installation method",
            methods: [
              "🚀 Recommended (VPS + Docker): Make sure the node command exists, run node setup.js, and choose Public VPS with Docker to publish on HOST_PORT=8080.",
              "⚡ setup.js validates Node.js >= 24 and npm; if the initial version is old, it attempts to upgrade to Node.js 24 on supported distributions.",
              "🛠️ Local or without Docker: install dependencies with npm, run setup.js, and start server.js; optionally keep it online with PM2."
            ],
            stepsTitle: "Recommended steps",
            steps: [
              "Install an initial Node.js package if the server does not provide the node command.",
              "Create your Telegram bot in BotFather and obtain TELEGRAM_TOKEN and TELEGRAM_ADMIN_ID.",
              "Run the installation command, choose Public VPS with Docker or local mode, set domain/allowed origins, and paste the generated widget.js script into the external website."
            ],
            commandTitle: "One-click command",
            commandLabel: "Copy command",
            commandCopied: "Command copied",
            command: "git clone https://github.com/wilkinbarban/LiveChat-Pro.git && cd LiveChat-Pro && node setup.js"
          }
        },
        {
          name: "WSL Manager Pro",
          subtitle: "Professional WSL (Windows Subsystem for Linux) Manager",
          description: "Windows desktop application that centralizes WSL management: list distributions, install from an online catalog or rootfs, import/export, post-install provisioning, resource limits via .wslconfig, and maintenance utilities. Built with Python 3.14+, PySide6/Qt 6, and QThread.",
          does: "Lists distributions, installs from online catalog or rootfs, imports/exports distros, configures post-install provisioning (user account, packages, wsl.conf), applies resource limits via .wslconfig, and executes maintenance utilities.",
          problem: "It solves the complexity of managing WSL from the command line by centralizing all installation, configuration, and maintenance operations for Linux distributions into a graphical interface.",
          caseStudy: {
            sections: [
              {
                title: "Problem",
                text: "Managing WSL from the command line requires knowing multiple commands, scripts, and scattered configurations. Installing distributions, configuring resources, or performing maintenance involves repetitive, error-prone manual processes."
              },
              {
                title: "Implemented solution",
                text: "A desktop application was built with Python, PySide6, and Qt 6 that centralizes all WSL management in an intuitive graphical interface. It includes a catalog of 9 distributions, resumable downloads, a 5-step installation wizard, automated post-install provisioning, visual .wslconfig configuration, and import/export utilities with background workers."
              },
              {
                title: "Result",
                text: "A comprehensive tool that drastically reduces WSL setup time, allows one-click distro installation, automates initial provisioning, and offers full control over system resources — all from a modern, multilingual interface (EN/ES/PT)."
              }
            ],
            installTitle: "Recommended method",
            methods: [
              "🚀 One-click PowerShell installation and launch: Run install.ps1 from the master branch to download the official ZIP, extract it to the Desktop, and prepare the environment without requiring Git.",
              "⚡ Easy local execution: If you already have the repository or ZIP, run Iniciar.bat to detect Python 3.14+, create .venv, install requirements, and open the GUI."
            ],
            stepsTitle: "Recommended steps",
            steps: [
              "Run the one-click PowerShell command on Windows 10/11.",
              "Allow the WSL and Python 3.14+ checks; the installer may use winget and request elevation if it needs to enable WSL.",
              "For manual installation, download/clone the repo, create .venv, install requirements.txt, and run python main.py."
            ],
            commandTitle: "One-click command",
            commandLabel: "Copy command",
            commandCopied: "Command copied",
            command: "Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force; irm https://raw.githubusercontent.com/wilkinbarban/WSL-Manager-Pro/master/install.ps1 | iex"
          }
        },
        {
          name: "AI Workspace Manager",
          subtitle: "Local control center for audits, memory, and AI tasks",
          description: "Local application for auditing, documenting, and improving software projects with AI assistance. It scans local folders, detects technologies, calculates health metrics, preserves chronological memory, records completed tasks, and runs agents with visible diffs.",
          does: "Analyzes local workspaces, identifies language, framework, dependencies, README, license, Git, Docker, and tests; calculates a health score, keeps project memory, manages AI-assisted tasks, and estimates token/cost usage by provider, model, and task type.",
          problem: "It solves the lack of centralized context when working across multiple projects, reducing manual audits, lost technical memory, and AI-generated changes that are hard to review.",
          caseStudy: {
            sections: [
              {
                title: "Problem",
                text: "Projects accumulate technical debt, scattered tasks, and decisions that get lost across folders, chats, and commits. Manually auditing each workspace and preparing context for AI takes time and weakens traceability."
              },
              {
                title: "Implemented solution",
                text: "An application was built with Electron, React, TypeScript, Node.js, Prisma, and SQLite. It supports desktop mode on Windows/macOS and headless web mode on Linux/WSL, with a local scanner, chronological memory, configurable AI providers, an internal-tool agent, and a diff viewer."
              },
              {
                title: "Result",
                text: "A local dashboard for measuring technical health, documenting decisions, running AI-assisted tasks, and auditing changes before accepting them, while keeping project data in local SQLite and secrets in secure storage or .env depending on the platform."
              }
            ],
            installTitle: "Recommended method",
            methods: [
              "🚀 Windows: Run the PowerShell installer to download main.zip, validate Node.js >= 20 and npm >= 10, install dependencies, prepare Prisma/SQLite, and launch the Electron app.",
              "⚡ Linux/WSL/macOS: Run install.sh with curl. On Linux/WSL it starts a Node.js backend on localhost:3000 and a Vite frontend on localhost:5173; on macOS it uses Electron in development mode."
            ],
            stepsTitle: "Recommended steps",
            steps: [
              "Run the installer for your operating system.",
              "Configure at least one AI provider from the interface or through .env variables in headless mode.",
              "Add a workspace with an absolute path and review its health score, memory, tasks, and generated diffs."
            ],
            commandTitle: "One-click commands",
            commandLabel: "Copy command",
            commandCopied: "Command copied",
            commands: [
              {
                label: "Windows",
                command: "powershell -NoProfile -ExecutionPolicy Bypass -Command \"irm https://raw.githubusercontent.com/wilkinbarban/AI-Workspace-Manager/main/install.ps1 | iex\""
              },
              {
                label: "Linux, WSL, and macOS",
                command: "curl -fsSL https://raw.githubusercontent.com/wilkinbarban/AI-Workspace-Manager/main/install.sh | bash"
              }
            ]
          }
        }
      ]
    },
    services: {
      eyebrow: "Freelance services",
      title: "One-off solutions or long-term collaboration.",
      intro: "Available for specific projects or long-term collaborations. No-obligation quote.",
      list: [
        {
          icon: "PY",
          title: "Automation & Scripts",
          intro: "Custom tools that eliminate manual tasks, reduce errors, and scale operations without increasing headcount.",
          items: [
            "High-performance Python scripts for bulk processing, data cleaning, and automated pipelines.",
            "Bots and API integrations for services, notifications, and multi-platform workflows.",
            "CLI and GUI desktop apps designed for daily operations.",
            "FFmpeg multimedia workflows for batch conversion, normalization, trimming, and export."
          ]
        },
        {
          icon: "L10",
          title: "Specialized Services",
          intro: "Linguistic and technical solutions for multilingual digital products, from UI localization to codebase internationalization.",
          items: [
            "Software localization for UI, menus, and messages adapted to each language.",
            "Technical translation ES ↔ PT-BR for documentation, manuals, and digital content.",
            "App internationalization with JSON, i18next, and scalable structures.",
            "Transcreation and cultural adaptation to avoid literal, out-of-context translations."
          ]
        },
        {
          icon: "KDP",
          title: "Amazon Formatting & Publishing",
          intro: "Complete editorial preparation for Amazon KDP with professional presentation, high compatibility, and optimized positioning.",
          items: [
            "KDP layout for eBook and print with professional structure.",
            "Validated EPUB and MOBI conversion for multiple devices.",
            "Cover optimization according to Amazon specifications.",
            "Metadata and SEO to improve organic catalog visibility."
          ]
        }
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Do you have an idea, process, or product that needs to become software?",
      text: "Tell me what you want to automate, improve, or publish. We can start with a simple diagnosis and turn it into an executable plan."
    },
    support: {
      action_support_project: "Support the project",
      support_title: "Support the developer",
      support_heading: "💙 Support the developer",
      support_message: "If my work, tools, or portfolio have been useful to you, you can support the developer behind them so I can keep building applications, projects, and practical solutions.",
      support_note: "✨ Your support helps me dedicate more time to new ideas, improvements, and maintenance.",
      support_target: "🔗 Payment link (Wise): {target}",
      support_scan_hint: "📱 Scan the QR code or use the action button.",
      support_open: "Open payment link",
      support_copy: "Copy link",
      support_link_copied: "Payment link copied to the clipboard.",
      support_qr_error: "The QR code could not be generated right now.",
      support_close: "Close"
    }
  },
  pt: {
    meta: {
      title: "Wilkin | Desenvolvedor de software",
      description: "Portfólio profissional de desenvolvedor de software especializado em automação, Node.js, Python, aplicações web e soluções freelance.",
      languageSelector: "Seletor de idioma"
    },
    nav: { about: "Sobre mim", skills: "Habilidades", projects: "Projetos", services: "Serviços", contact: "Contato", language: "Idioma" },
    hero: {
      eyebrow: "Software developer · Automação · Freelance",
      title: "Wilkin, desenvolvedor de software focado em soluções reais.",
      text: "Construo ferramentas produtivas, fluxos de automação e experiências web limpas para transformar processos complexos em sistemas simples, rápidos e confiáveis.",
      primary: "Vamos conversar",
      secondary: "Ver projetos",
      cardAria: "Resumo profissional",
      cardLabel: "Disponível para",
      cardTitle: "Automação, aplicações web e ferramentas sob medida",
      stats: { skills: "habilidades", projects: "projetos", services: "áreas freelance" }
    },
    about: {
      eyebrow: "Sobre mim",
      title: "Uma trajetória de adaptação, aprendizado e execução.",
      paragraphs: [
        "Sou um desenvolvedor de software de origem cubana, atualmente radicado em Curitiba, Brasil, na condição de refugiado. Minha trajetória é uma história de adaptação e evolução constante: da gestão logística profissional à criação de soluções digitais complexas.",
        "Sou especializado em automação de processos e no desenvolvimento de aplicações que resolvem problemas reais. Minha abordagem combina a eficiência da lógica de programação com uma capacidade autodidata para dominar ferramentas como Python e Node.js.",
        "Desenvolvi utilitários de software voltados à produtividade real, otimizando tarefas que vão da normalização de mídia à gestão inteligente de arquivos.",
        "Acredito firmemente que a tecnologia é minha melhor linguagem para gerar valor em qualquer ambiente."
      ],
      timeline: [
        "Detectar processos repetitivos e transformá-los em sistemas.",
        "Projetar ferramentas simples, sustentáveis e úteis desde o primeiro dia.",
        "Iterar com dados reais, documentação clara e mentalidade de produto."
      ]
    },
    skills: {
      eyebrow: "Habilidades",
      title: "Stack técnico orientado a produtividade, automação e produto.",
      list: [...sharedSkills, "Automação", "SEO básico", "i18n / L10n"]
    },
    projects: {
      eyebrow: "Projetos",
      title: "Ferramentas criadas para necessidades reais.",
      intro: "Ferramentas que construí para resolver problemas reais do meu dia a dia. Cada projeto nasceu de uma necessidade pessoal e foi desenvolvido com fins educativos e de evolução técnica. O código é aberto, as soluções são funcionais e estou sempre disposto a receber melhorias, correções e colaborações.",
      open: "Ver detalhes",
      repo: "Repositório",
      release: "Última versão",
      gallery: "Capturas",
      noImages: "Ainda não há capturas. Coloque imagens em",
      solves: "Problema que resolve",
      does: "O que faz",
      projects: [
        {
          name: "YouTube Downloader",
          subtitle: "Downloader avançado de vídeo e áudio",
          description: "Aplicativo desktop para Windows desenvolvido com Python e PyQt6 para gerenciar downloads do YouTube (vídeo, playlists e áudio), com fila concorrente, histórico, logs, monitor da área de transferência e gestor web assíncrono em FastAPI/WebSockets.",
          does: "Baixa vídeos individuais, playlists e áudio, suporta até 3 downloads simultâneos, detecta links pela área de transferência, integra FFmpeg e oferece um gestor web local em http://127.0.0.1:8000 com progresso em tempo real.",
          problem: "Resolve a necessidade de baixar material educativo, referências ou recursos de forma organizada, repetível e com uma interface gráfica estável que gerencia filas automaticamente.",
          caseStudy: {
            sections: [
              {
                title: "Problema",
                text: "Muitos downloaders são instáveis, limitados em formatos ou não possuem gerenciamento de filas. Baixar playlists longas ou formatos específicos de forma repetitiva consome tempo e está sujeito a erros."
              },
              {
                title: "Solução implementada",
                text: "Foi desenvolvido um aplicativo em Python com PyQt6 e yt-dlp. Integra FFmpeg, workers em segundo plano, monitor da área de transferência e um gestor web moderno baseado em FastAPI e WebSockets para controle remoto local."
              },
              {
                title: "Resultado",
                text: "Uma experiência robusta e automatizada que reduz o tempo operacional, permite baixar playlists completas e extrair áudio facilmente, com um instalador automático para Windows."
              }
            ],
            installTitle: "Método recomendado",
            methods: [
              "🚀 Método recomendado (.exe): Baixe YouTubeDownloader.exe da última release. Inclui o runtime necessário e FFmpeg portátil empacotado, ideal para usuários não técnicos.",
              "⚡ Instalação scriptável (PowerShell): Execute install.ps1 com o comando de um clique para baixar o repositório oficial, validá-lo, preparar .venv, instalar requirements.txt e iniciar o app."
            ],
            stepsTitle: "Instalação alternativa",
            steps: [
              "Clonar o repositório ou baixar o ZIP oficial.",
              "Abrir a pasta do projeto no Windows.",
              "Executar Iniciar.bat para validar Python, criar .venv, instalar dependências e abrir a interface."
            ],
            commandTitle: "Comando de um clique",
            commandLabel: "Copiar comando",
            commandCopied: "Comando copiado",
            command: "Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force; irm https://raw.githubusercontent.com/wilkinbarban/youtube-downloader/main/install.ps1 | iex"
          }
        },
        {
          name: "Normalizador de Áudio",
          subtitle: "Normalizador inteligente de áudio",
          description: "Aplicativo desktop para Windows que normaliza o volume de lotes de vídeo com FFmpeg loudnorm (LUFS), perfis de referência, relatórios antes/depois, processamento paralelo configurável e configuração local fora do repositório.",
          does: "Analisa vídeos, aplica presets LUFS para YouTube, Netflix, Spotify, Podcast ou modo Custom, gera perfis de referência, mostra waveform, exporta relatórios CSV/TXT e pode usar aceleração GPU com fallback para CPU.",
          problem: "Evita revisar e editar manualmente grandes coleções de áudio quando cada arquivo tem um nível de volume diferente, o que gera ajustes lentos e sujeitos a erros.",
          caseStudy: {
            sections: [
              {
                title: "Problema",
                text: "Em coleções de vídeo, a inconsistência de volume e a necessidade de parâmetros LUFS padronizados geram fluxos de trabalho repetitivos e uma experiência final ruim."
              },
              {
                title: "Solução implementada",
                text: "Foi desenvolvido um aplicativo com Python, PyQt6 e FFmpeg que automatiza a normalização loudnorm (LUFS). Inclui presets, fluxo de perfil de referência, processamento paralelo configurável, detecção de GPU, visualização de waveform e relatórios rastreáveis."
              },
              {
                title: "Resultado",
                text: "Um fluxo de normalização eficiente com relatórios I, LRA e TP, acelerando drasticamente o processamento de lotes de vídeo com uma interface multilíngue (ES/EN/PT)."
              }
            ],
            installTitle: "Método recomendado",
            methods: [
              "🚀 Instalação oficial com PowerShell: Execute o comando de um clique baseado em install.ps1. Este é o único fluxo oficial de instalação remota.",
              "⚡ O instalador baixa o repositório quando necessário, valida o arquivo, cria ou reutiliza .venv, instala requirements.txt, verifica Python/FFmpeg e inicia o aplicativo."
            ],
            stepsTitle: "Instalação alternativa",
            steps: [
              "Opcionalmente definir $env:NORM_INSTALL_DIR para alterar a pasta de instalação.",
              "Executar o comando PowerShell de um clique.",
              "Adicionar vídeos, selecionar preset ou perfil de referência, escolher pasta de saída e revisar os relatórios gerados."
            ],
            commandTitle: "Comando de um clique",
            commandLabel: "Copiar comando",
            commandCopied: "Comando copiado",
            command: "Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force; irm https://raw.githubusercontent.com/wilkinbarban/normalizador-audio/main/install.ps1 | iex"
          }
        },
        {
          name: "Photo Dedup",
          subtitle: "Detector e removedor de fotos duplicadas",
          description: "PhotoDedup ajuda a limpar bibliotecas grandes de fotos sem exclusão cega. Ele analisa arquivos, agrupa duplicatas prováveis e permite decidir visualmente qual foto manter, com edições Lite e Full.",
          does: "Detecta duplicatas exatas por tamanho/hash, similaridade visual com hashes perceptuais, comparação assistida por IA em PhotoDedup-full.exe, integração com Google Takeout, revisão por grupos e ações seguras para a Lixeira ou pasta de destino.",
          problem: "Resolve a desorganização de bibliotecas fotográficas grandes onde duplicatas mudam de nome, tamanho ou compressão, consumindo espaço e dificultando o gerenciamento.",
          caseStudy: {
            sections: [
              {
                title: "Problema",
                text: "As pastas de fotografias crescem com cópias e versões quase idênticas. A filtragem manual consome muito tempo e não oferece controle seguro nem auditabilidade."
              },
              {
                title: "Solução implementada",
                text: "Foi desenvolvida uma ferramenta em PyQt6 com análise por tamanho/hash, hashes perceptuais, cache local, suporte ao Google Takeout e assistência IA opcional na edição Full. A edição Lite mantém um fluxo mais leve sem dependências pesadas de IA."
              },
              {
                title: "Resultado",
                text: "Uma limpeza de bibliotecas significativamente mais rápida, com estatísticas de espaço recuperável e controle total sobre quais imagens manter."
              }
            ],
            installTitle: "Método recomendado",
            methods: [
              "🚀 Download recomendado: Use a última release oficial e escolha PhotoDedup-lite.exe para limpeza rápida hash/visual ou PhotoDedup-full.exe para análise mais profunda com IA opcional.",
              "⚡ Instalação com um comando: Execute install.ps1 no PowerShell. Fora do projeto ele baixa e valida o repositório; dentro do projeto valida Python 3.14.x, prepara .venv, instala dependências e abre o PhotoDedup."
            ],
            stepsTitle: "Passos recomendados",
            steps: [
              "Baixar a última release em Releases ou usar o comando PowerShell de um clique.",
              "Escolher PhotoDedup-lite.exe para o fluxo hash/visual ou PhotoDedup-full.exe para análise assistida por IA.",
              "Para uma cópia já baixada ou clonada, execute Iniciar.bat. Se o SmartScreen avisar, use 'Mais informações' e 'Executar assim mesmo' apenas se confiar na release oficial."
            ],
            commandTitle: "Comando de um clique",
            commandLabel: "Copiar comando",
            commandCopied: "Comando copiado",
            command: "powershell -ExecutionPolicy Bypass -Command \"iwr -UseBasicParsing https://raw.githubusercontent.com/wilkinbarban/photo-dedup/main/install.ps1 | iex\""
          }
        },
        {
          name: "LiveChat Pro",
          subtitle: "Chat ao vivo auto-hospedado com painel web e Telegram",
          description: "LiveChat Pro é um chat ao vivo auto-hospedado com widget incorporável, integração com Telegram, painel web de administração, persistência SQLite, métricas do visitante, tradução automática e implantação recomendada via Docker.",
          does: "Insere chat em qualquer site com um único script, mantém sessão e histórico por visitante, envia mensagens para Telegram e /admin, permite respostas pelos dois canais e traduz mensagens entre idiomas.",
          problem: "Resolve a necessidade de suporte direto em sites pequenos sem depender de plataformas externas caras, mantendo controle total da infraestrutura e dos dados.",
          caseStudy: {
            sections: [
              {
                title: "Problema",
                text: "Sites pequenos precisam de atendimento rápido e direto, mas muitas plataformas de suporte são caras, pesadas e reduzem o controle operacional sobre dados e implantação."
              },
              {
                title: "Solução implementada",
                text: "Foi criada uma arquitetura auto-hospedada com widget incorporável, integração por bot do Telegram, painel web /admin, sessões persistentes por visitante, métricas operacionais (IP, geolocalização, idioma, user-agent) e tradução automática entre idiomas."
              },
              {
                title: "Resultado",
                text: "O resultado é um canal de suporte leve e fácil de implantar que centraliza conversas no Telegram e no painel admin, melhora o fluxo de resposta e evita dependência de fornecedores externos."
              }
            ],
            installTitle: "Método de instalação",
            methods: [
              "🚀 Recomendado (VPS + Docker): Garanta que o comando node exista, execute node setup.js e escolha Public VPS with Docker para publicar em HOST_PORT=8080.",
              "⚡ setup.js valida Node.js >= 24 e npm; se a versão inicial for antiga, tenta atualizar para Node.js 24 em distribuições suportadas.",
              "🛠️ Local ou sem Docker: instale dependências com npm, execute setup.js e inicie server.js; opcionalmente use PM2 para manter o serviço online."
            ],
            stepsTitle: "Passos recomendados",
            steps: [
              "Instalar um pacote inicial de Node.js se o servidor não fornecer o comando node.",
              "Criar o bot no BotFather e obter TELEGRAM_TOKEN e TELEGRAM_ADMIN_ID.",
              "Executar o comando de instalação, escolher Public VPS with Docker ou modo local, definir domínio/origens permitidas e colar o script widget.js gerado no site externo."
            ],
            commandTitle: "Comando de um clique",
            commandLabel: "Copiar comando",
            commandCopied: "Comando copiado",
            command: "git clone https://github.com/wilkinbarban/LiveChat-Pro.git && cd LiveChat-Pro && node setup.js"
          }
        },
        {
          name: "WSL Manager Pro",
          subtitle: "Gerenciador profissional de WSL (Subsistema Windows para Linux)",
          description: "Aplicativo desktop para Windows que centraliza o gerenciamento do WSL: listar distribuições, instalar do catálogo online ou rootfs, importar/exportar, provisionamento pós-instalação, limites via .wslconfig e utilitários de manutenção. Construído com Python 3.14+, PySide6/Qt 6 e QThread.",
          does: "Lista distribuições, instala do catálogo online ou rootfs, importa/exporta distros, configura provisionamento pós-instalação (conta de usuário, pacotes, wsl.conf), aplica limites de recursos via .wslconfig e executa utilitários de manutenção.",
          problem: "Resolve a complexidade de gerenciar o WSL pela linha de comando, centralizando em uma interface gráfica todas as operações de instalação, configuração e manutenção das distribuições Linux.",
          caseStudy: {
            sections: [
              {
                title: "Problema",
                text: "Gerenciar o WSL pela linha de comando exige conhecer vários comandos, scripts e configurações dispersas. Instalar distribuições, configurar recursos ou fazer manutenção envolve processos manuais repetitivos e sujeitos a erros."
              },
              {
                title: "Solução implementada",
                text: "Foi desenvolvido um aplicativo desktop com Python, PySide6 e Qt 6 que centraliza todo o gerenciamento do WSL em uma interface gráfica intuitiva. Inclui um catálogo de 9 distribuições, downloads retomáveis, assistente de instalação de 5 etapas, provisionamento pós-instalação automatizado, configuração visual do .wslconfig e utilitários de importação/exportação com workers em segundo plano."
              },
              {
                title: "Resultado",
                text: "Uma ferramenta completa que reduz drasticamente o tempo de configuração do WSL, permite instalar distribuições com um clique, automatiza o provisionamento inicial e oferece controle total sobre os recursos do sistema — tudo a partir de uma interface moderna e multilíngue (PT/ES/EN)."
              }
            ],
            installTitle: "Método recomendado",
            methods: [
              "🚀 Instalação e execução com um único comando (PowerShell): Execute install.ps1 da branch master para baixar o ZIP oficial, extrair na Área de Trabalho e preparar o ambiente sem exigir Git.",
              "⚡ Execução local rápida: Se você já tem o repositório ou ZIP, execute Iniciar.bat para detectar Python 3.14+, criar .venv, instalar requisitos e abrir a GUI."
            ],
            stepsTitle: "Passos recomendados",
            steps: [
              "Executar o comando PowerShell de um clique no Windows 10/11.",
              "Permitir as verificações de WSL e Python 3.14+; o instalador pode usar winget e solicitar elevação se precisar habilitar o WSL.",
              "Para instalação manual, baixar/clonar o repo, criar .venv, instalar requirements.txt e executar python main.py."
            ],
            commandTitle: "Comando de um clique",
            commandLabel: "Copiar comando",
            commandCopied: "Comando copiado",
            command: "Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force; irm https://raw.githubusercontent.com/wilkinbarban/WSL-Manager-Pro/master/install.ps1 | iex"
          }
        },
        {
          name: "AI Workspace Manager",
          subtitle: "Centro local para auditoria, memória e tarefas com IA",
          description: "Aplicação local para auditar, documentar e melhorar projetos de software com ajuda de IA. Escaneia pastas do computador, detecta tecnologias, calcula métricas de saúde, preserva memória cronológica, registra tarefas concluídas e executa agentes com diffs visíveis.",
          does: "Analisa workspaces locais, identifica linguagem, framework, dependências, README, licença, Git, Docker e testes; calcula health score, mantém a memória do projeto, gerencia tarefas com IA e estima consumo de tokens/custos por provedor, modelo e tipo de tarefa.",
          problem: "Resolve a falta de contexto centralizado ao trabalhar com vários projetos, reduzindo auditorias manuais, perda de memória técnica e mudanças geradas por IA difíceis de revisar.",
          caseStudy: {
            sections: [
              {
                title: "Problema",
                text: "Projetos acumulam dívida técnica, tarefas dispersas e decisões que se perdem entre pastas, chats e commits. Auditar manualmente cada workspace e preparar contexto para uma IA consome tempo e reduz a rastreabilidade."
              },
              {
                title: "Solução implementada",
                text: "Foi desenvolvida uma aplicação com Electron, React, TypeScript, Node.js, Prisma e SQLite. Ela suporta modo desktop no Windows/macOS e modo web headless no Linux/WSL, com scanner local, memória cronológica, provedores IA configuráveis, agente com ferramentas internas e visualizador de diffs."
              },
              {
                title: "Resultado",
                text: "Um painel local para medir saúde técnica, documentar decisões, executar tarefas assistidas por IA e auditar mudanças antes de aceitá-las, mantendo os dados do projeto em SQLite local e os segredos em armazenamento seguro ou .env conforme a plataforma."
              }
            ],
            installTitle: "Método recomendado",
            methods: [
              "🚀 Windows: Execute o instalador PowerShell para baixar main.zip, validar Node.js >= 20 e npm >= 10, instalar dependências, preparar Prisma/SQLite e abrir o app Electron.",
              "⚡ Linux/WSL/macOS: Execute install.sh com curl. No Linux/WSL ele inicia o backend Node.js em localhost:3000 e o frontend Vite em localhost:5173; no macOS usa Electron em modo de desenvolvimento."
            ],
            stepsTitle: "Passos recomendados",
            steps: [
              "Executar o instalador correspondente ao seu sistema operacional.",
              "Configurar pelo menos um provedor IA pela interface ou por variáveis .env no modo headless.",
              "Adicionar um workspace usando um caminho absoluto e revisar o health score, memória, tarefas e diffs gerados."
            ],
            commandTitle: "Comandos de um clique",
            commandLabel: "Copiar comando",
            commandCopied: "Comando copiado",
            commands: [
              {
                label: "Windows",
                command: "powershell -NoProfile -ExecutionPolicy Bypass -Command \"irm https://raw.githubusercontent.com/wilkinbarban/AI-Workspace-Manager/main/install.ps1 | iex\""
              },
              {
                label: "Linux, WSL e macOS",
                command: "curl -fsSL https://raw.githubusercontent.com/wilkinbarban/AI-Workspace-Manager/main/install.sh | bash"
              }
            ]
          }
        }
      ]
    },
    services: {
      eyebrow: "Serviços freelance",
      title: "Soluções pontuais ou colaborações de longo prazo.",
      intro: "Disponível para projetos pontuais ou colaborações de longo prazo. Orçamento sem compromisso.",
      list: [
        {
          icon: "PY",
          title: "Automação & Scripts",
          intro: "Ferramentas sob medida que eliminam tarefas manuais, reduzem erros e escalam operações sem ampliar a equipe.",
          items: [
            "Scripts Python de alto desempenho para processamento em massa, limpeza de dados e pipelines automatizados.",
            "Bots e integrações com APIs para conectar serviços, notificações e fluxos multiplataforma.",
            "Aplicações desktop CLI e GUI pensadas para uso diário.",
            "Processamento multimídia com FFmpeg para conversão, normalização, corte e exportação em lote."
          ]
        },
        {
          icon: "L10",
          title: "Serviços Especializados",
          intro: "Soluções linguísticas e técnicas para produtos digitais multilíngues, da localização de UI à internacionalização do código.",
          items: [
            "Localização de software com UI, menus e mensagens adaptados a cada idioma.",
            "Tradução técnica ES ↔ PT-BR para documentação, manuais e conteúdo digital.",
            "Internacionalização de apps com JSON, i18next e estruturas escaláveis.",
            "Transcriação e adaptação cultural para evitar traduções literais fora de contexto."
          ]
        },
        {
          icon: "KDP",
          title: "Formatação & Publicação na Amazon",
          intro: "Preparação editorial completa para publicar na Amazon KDP com apresentação profissional, alta compatibilidade e posicionamento otimizado.",
          items: [
            "Diagramação KDP para eBook e livro impresso com estrutura profissional.",
            "Conversão validada para EPUB e MOBI em múltiplos dispositivos.",
            "Otimização de capas conforme especificações da Amazon.",
            "Metadados e SEO para melhorar a visibilidade orgânica no catálogo."
          ]
        }
      ]
    },
    contact: {
      eyebrow: "Contato",
      title: "Você tem uma ideia, processo ou produto que precisa virar software?",
      text: "Conte o que deseja automatizar, melhorar ou publicar. Podemos começar com um diagnóstico simples e transformá-lo em um plano executável."
    },
    support: {
      action_support_project: "Apoiar o projeto",
      support_title: "Apoiar o programador",
      support_heading: "💙 Apoie o programador",
      support_message: "Se meu trabalho, minhas ferramentas ou este portfólio foram úteis para você, considere apoiar o desenvolvedor para que eu continue criando aplicações, projetos e soluções práticas.",
      support_note: "✨ Sua ajuda contribui para dedicar mais tempo a novas ideias, melhorias e manutenção.",
      support_target: "🔗 Transferência via PIX (chave): {target}",
      support_scan_hint: "📱 Escaneie o QR Code ou copie a chave PIX abaixo.",
      support_open: "Copiar chave PIX",
      support_qr_error: "Não foi possível gerar o código QR agora.",
      support_pix_copied: "Chave PIX copiada para a área de transferência.",
      support_close: "Fechar"
    }
  }
};

let currentLang = "es";
let activeProjectId = null;
let revealObserver;

document.body.classList.add("is-loading");

window.addEventListener("load", () => {
  const loader = document.querySelector("[data-loader]");
  window.setTimeout(() => {
    loader?.classList.add("is-hidden");
    document.body.classList.remove("is-loading");
  }, 360);
});

const get = (path, source = translations[currentLang]) =>
  path.split(".").reduce((value, key) => value?.[key], source);

const detectLanguage = () => {
  const saved = localStorage.getItem("portfolio-language");
  if (saved && translations[saved]) return saved;
  const browserLang = navigator.language?.slice(0, 2).toLowerCase();
  return translations[browserLang] ? browserLang : "es";
};

const createElement = (tag, className, text) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
};

const getSupportText = (key) => translations[currentLang].support[key];

const getSupportConfig = () => {
  const isPix = currentLang === "pt";
  return {
    isPix,
    target: isPix ? supportTargets.pix : supportTargets.wise,
    qrValue: isPix ? supportTargets.pix : supportTargets.wise,
    copiedText: isPix ? getSupportText("support_pix_copied") : getSupportText("support_link_copied")
  };
};

const writeToClipboard = async (value) => {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const input = createElement("textarea");
  input.value = value;
  input.setAttribute("readonly", "");
  input.style.position = "fixed";
  input.style.opacity = "0";
  document.body.append(input);
  input.select();
  document.execCommand("copy");
  input.remove();
};

const closeSupportDialog = () => {
  document.querySelector("[data-support-dialog]")?.remove();
  if (!document.querySelector("[data-gallery-viewer]")) {
    document.body.classList.remove("has-dialog");
  }
};

const closeGalleryViewer = () => {
  document.querySelector("[data-gallery-viewer]")?.remove();
  if (!document.querySelector("[data-support-dialog]")) {
    document.body.classList.remove("has-dialog");
  }
};

const openGalleryViewer = (src, alt, title) => {
  closeGalleryViewer();

  const viewer = createElement("div", "gallery-viewer");
  viewer.dataset.galleryViewer = "";
  viewer.innerHTML = `
    <div class="gallery-viewer__backdrop" data-gallery-close></div>
    <section class="gallery-viewer__panel" role="dialog" aria-modal="true" aria-label="${alt}">
      <div class="gallery-viewer__header">
        <div>
          <p class="gallery-viewer__kicker">${title}</p>
          <h3>${alt}</h3>
        </div>
        <button type="button" aria-label="Cerrar" data-gallery-close>×</button>
      </div>
      <div class="gallery-viewer__frame">
        <img src="${src}" alt="${alt}">
      </div>
    </section>
  `;

  document.body.append(viewer);
  document.body.classList.add("has-dialog");
  viewer.querySelectorAll("[data-gallery-close]").forEach((button) => button.addEventListener("click", closeGalleryViewer));
};

const openSupportDialog = () => {
  closeSupportDialog();

  const config = getSupportConfig();
  const dialog = createElement("div", "support-dialog");
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=320x320&margin=12&data=${encodeURIComponent(config.qrValue)}`;
  dialog.dataset.supportDialog = "";
  dialog.innerHTML = `
    <div class="support-dialog__backdrop" data-support-close></div>
    <section class="support-dialog__panel" role="dialog" aria-modal="true" aria-labelledby="support-title">
      <div class="support-dialog__hero">
        <p class="support-dialog__kicker">${getSupportText("support_title")}</p>
        <h3 id="support-title">${getSupportText("support_heading")}</h3>
        <p>${getSupportText("support_message")}</p>
        <span>${getSupportText("support_note")}</span>
      </div>
      <div class="support-dialog__qr-card">
        <div class="support-dialog__qr-frame">
          <img src="${qrUrl}" alt="${getSupportText("support_title")}" width="320" height="320" data-support-qr>
          <p class="support-dialog__qr-error" data-support-qr-error hidden>${getSupportText("support_qr_error")}</p>
        </div>
        <p class="support-dialog__hint">${getSupportText("support_scan_hint")}</p>
        <p class="support-dialog__target">${getSupportText("support_target").replace("{target}", config.target)}</p>
        <p class="support-dialog__status" data-support-status role="status" aria-live="polite"></p>
      </div>
      <div class="support-dialog__actions">
        <button class="button button--ghost" type="button" data-support-close>${getSupportText("support_close")}</button>
        ${
          config.isPix
            ? ""
            : `<button class="button button--ghost" type="button" data-support-copy>${getSupportText("support_copy")}</button>`
        }
        <button class="button button--primary" type="button" data-support-primary>${getSupportText("support_open")}</button>
      </div>
    </section>
  `;

  document.body.append(dialog);
  document.body.classList.add("has-dialog");

  const status = dialog.querySelector("[data-support-status]");
  const showCopied = async () => {
    await writeToClipboard(config.target);
    status.textContent = config.copiedText;
  };

  dialog.querySelectorAll("[data-support-close]").forEach((button) => button.addEventListener("click", closeSupportDialog));
  dialog.querySelector("[data-support-copy]")?.addEventListener("click", showCopied);
  dialog.querySelector("[data-support-primary]")?.addEventListener("click", async () => {
    if (config.isPix) {
      await showCopied();
      return;
    }
    window.open(config.target, "_blank", "noopener,noreferrer");
  });
  dialog.querySelector("[data-support-qr]")?.addEventListener("error", (event) => {
    event.currentTarget.hidden = true;
    dialog.querySelector("[data-support-qr-error]").hidden = false;
  });
};

const getProjects = () =>
  translations[currentLang].projects.projects.map((project, index) => ({
    ...projectMeta[index],
    ...project
  }));

const renderStaticText = () => {
  document.documentElement.lang = currentLang;
  document.title = translations[currentLang].meta.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", translations[currentLang].meta.description);
  document.querySelector("[data-language-switcher]")?.setAttribute("aria-label", translations[currentLang].meta.languageSelector);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = get(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(",").forEach((pair) => {
      const [attr, key] = pair.split(":");
      element.setAttribute(attr.trim(), get(key.trim()));
    });
  });

  const about = document.querySelector("[data-about-text]");
  about.innerHTML = translations[currentLang].about.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("");
};

const renderSkills = () => {
  const skills = document.querySelector("[data-skills]");
  skills.innerHTML = "";
  translations[currentLang].skills.list.forEach((skill) => {
    skills.append(createElement("span", "skill-pill", skill));
  });
};

const renderProjects = () => {
  const projects = document.querySelector("[data-projects]");
  projects.innerHTML = "";
  getProjects().forEach((project, index) => {
    const card = createElement("article", "project-card reveal");
    card.innerHTML = `
      <span class="project-card__number">${String(index + 1).padStart(2, "0")}</span>
      <div class="card-icon" aria-hidden="true">${project.icon}</div>
      <h3>${project.name}</h3>
      <p><strong>${project.subtitle}</strong></p>
      <p>${project.description}</p>
      <button class="text-action" type="button" data-project-id="${project.id}">${translations[currentLang].projects.open}</button>
    `;
    projects.append(card);
  });

  projects.querySelectorAll("[data-project-id]").forEach((button) => {
    button.addEventListener("click", () => showProject(button.dataset.projectId, true));
  });
};

const renderServices = () => {
  const services = document.querySelector("[data-services]");
  services.innerHTML = "";
  translations[currentLang].services.list.forEach((service) => {
    const card = createElement("article", "service-card reveal");
    const items = service.items.map((item) => `<li>${item}</li>`).join("");
    card.innerHTML = `
      <div class="card-icon" aria-hidden="true">${service.icon}</div>
      <h3>${service.title}</h3>
      <p>${service.intro}</p>
      <ul>${items}</ul>
    `;
    services.append(card);
  });
};

const renderContacts = () => {
  const contacts = document.querySelector("[data-contacts]");
  contacts.innerHTML = "";
  contactLinks.forEach((contact) => {
    if (contact.action === "support") {
      const button = createElement("button", "contact-link contact-link--support");
      button.type = "button";
      button.innerHTML = `<span class="link-icon" aria-hidden="true">${contact.icon}</span>${getSupportText(contact.labelKey)}`;
      button.addEventListener("click", openSupportDialog);
      contacts.append(button);
      return;
    }

    const link = createElement("a", "contact-link");
    link.href = contact.href;
    link.target = contact.href.startsWith("http") ? "_blank" : "";
    link.rel = contact.href.startsWith("http") ? "noreferrer" : "";
    link.innerHTML = `<span class="link-icon" aria-hidden="true">${contact.icon}</span>${contact.label[currentLang]}`;
    contacts.append(link);
  });
};

const fetchGallery = async (folder) => {
  try {
    const response = await fetch(`/api/gallery/${encodeURIComponent(folder)}`);
    if (!response.ok) return [];
    const data = await response.json();
    return Array.isArray(data.images) ? data.images : [];
  } catch (_error) {
    return [];
  }
};

const renderProjectCaseStudy = (project) => {
  if (!project.caseStudy) return "";

  const cards = [
    {
      title: translations[currentLang].projects.does,
      text: project.does
    },
    ...project.caseStudy.sections
  ];

  const sections = cards
    .map(
      (section) => `
        <article class="project-case__card">
          <h4>${section.title}</h4>
          <p>${section.text}</p>
        </article>
      `
    )
    .join("");

  const methods = project.caseStudy.methods.map((method) => `<p>${method}</p>`).join("");
  const steps = project.caseStudy.steps.map((step) => `<li>${step}</li>`).join("");
  const commands = Array.isArray(project.caseStudy.commands)
    ? project.caseStudy.commands
    : [{ label: project.caseStudy.commandTitle, command: project.caseStudy.command }];
  const commandBlocks = commands
    .map(
      (item) => `
        <div class="project-command">
          <div class="project-command__bar">
            <span>${item.label}</span>
            <button type="button" data-copy-command data-copy-label="${project.caseStudy.commandLabel}" data-copied-label="${project.caseStudy.commandCopied}">${project.caseStudy.commandLabel}</button>
          </div>
          <pre><code>${item.command}</code></pre>
        </div>
      `
    )
    .join("");

  return `
    <div class="project-case">
      <div class="project-case__grid">${sections}</div>
      <article class="project-case__install">
        <h4>${project.caseStudy.installTitle}</h4>
        <div class="project-case__methods">${methods}</div>
        <h5>${project.caseStudy.stepsTitle}</h5>
        <ol>${steps}</ol>
      </article>
      <h4>${project.caseStudy.commandTitle}</h4>
      ${commandBlocks}
    </div>
  `;
};

const showProject = async (projectId, shouldScroll = false) => {
  const detail = document.querySelector("[data-project-detail]");
  const project = getProjects().find((item) => item.id === projectId) || getProjects()[0];
  activeProjectId = project.id;
  detail.hidden = false;
  detail.classList.remove("is-ready");

  const galleryLabel = translations[currentLang].projects.gallery;
  const noImages = translations[currentLang].projects.noImages;
  const images = await fetchGallery(project.folder);
  const gallery = images.length
    ? images
        .map((src, index) => {
          const versionedSrc = `${src}?v=${assetVersion}`;
          const alt = `${galleryLabel} ${index + 1} - ${project.name}`;
          return `
            <a class="gallery-item" href="${versionedSrc}" data-gallery-image data-gallery-alt="${alt}" data-gallery-title="${galleryLabel}">
              <img src="${versionedSrc}" alt="${alt}" loading="lazy" decoding="async">
            </a>
          `;
        })
        .join("")
    : `<div class="gallery-empty">${noImages} <code>public/${project.folder}</code>.</div>`;
  const caseStudy = renderProjectCaseStudy(project);
  const overview = project.caseStudy
    ? ""
    : `
      <div class="detail-columns">
        <div>
          <h4>${translations[currentLang].projects.does}</h4>
          <p>${project.does}</p>
        </div>
      </div>
    `;

  detail.innerHTML = `
    <div class="project-detail__copy">
      <span class="project-card__number">${project.icon}</span>
      <h3>${project.name}</h3>
      <p class="project-detail__lead">${project.description}</p>
      ${overview}
      ${caseStudy}
      <div class="project-actions">
        <a class="button button--primary" href="${project.repo}" target="_blank" rel="noreferrer">${translations[currentLang].projects.repo}</a>
        <a class="button button--ghost" href="${project.release}" target="_blank" rel="noreferrer">${translations[currentLang].projects.release}</a>
      </div>
    </div>
    <div class="project-gallery">
      <p class="eyebrow">${galleryLabel}</p>
      <div class="gallery-grid">${gallery}</div>
    </div>
  `;

  detail.querySelectorAll("[data-copy-command]").forEach((button) => {
    button.addEventListener("click", async () => {
      const command = button.closest(".project-command")?.querySelector("code")?.textContent.trim();
      if (!command) return;
      await writeToClipboard(command);
      button.textContent = button.dataset.copiedLabel;
      window.setTimeout(() => {
        button.textContent = button.dataset.copyLabel;
      }, 1600);
    });
  });

  detail.querySelectorAll("[data-gallery-image]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      openGalleryViewer(link.href, link.dataset.galleryAlt, link.dataset.galleryTitle);
    });
  });

  requestAnimationFrame(() => detail.classList.add("is-ready", "is-visible"));
  if (shouldScroll) detail.scrollIntoView({ behavior: "smooth", block: "start" });
};

const refreshReveals = () => {
  revealObserver?.disconnect();
  revealObserver = new IntersectionObserver(
    (entries) => {
      let delay = 0;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${delay}ms`;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
          delay += 100;
        }
      });
    },
    { threshold: 0.16 }
  );
  document.querySelectorAll(".reveal").forEach((element) => {
    element.style.transitionDelay = "0ms";
    revealObserver.observe(element);
  });
};

const renderContent = async () => {
  document.body.classList.add("is-translating");
  renderStaticText();
  renderSkills();
  renderProjects();
  renderServices();
  renderContacts();
  refreshReveals();
  if (activeProjectId) await showProject(activeProjectId);
  window.setTimeout(() => document.body.classList.remove("is-translating"), 180);
};

const setupLanguageSwitcher = () => {
  const switcher = document.querySelector("[data-language-switcher]");
  switcher.querySelectorAll("[data-lang-option]").forEach((button) => {
    button.addEventListener("click", async () => {
      const nextLang = button.dataset.langOption;
      if (nextLang === currentLang) {
        switcher.closest(".language-menu")?.removeAttribute("open");
        return;
      }
      currentLang = nextLang;
      localStorage.setItem("portfolio-language", currentLang);
      switcher.querySelectorAll("button").forEach((item) => item.classList.toggle("is-active", item.dataset.langOption === currentLang));
      await renderContent();
      switcher.closest(".language-menu")?.removeAttribute("open");
    });
  });
};

const setupNavigation = () => {
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");
  const header = document.querySelector("[data-header]");

  toggle?.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav?.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      nav.classList.remove("is-open");
      toggle?.setAttribute("aria-expanded", "false");
    }
  });

  window.addEventListener("scroll", () => {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  });
};

const setupCounters = async () => {
  const counters = document.querySelectorAll("[data-counter]");
  
  try {
    const response = await fetch("/api/stats");
    if (response.ok) {
      const stats = await response.json();
      if (counters.length >= 2 && stats.repos) {
        counters[1].dataset.counter = stats.repos;
      }
    }
  } catch (e) {
    console.error("Failed to fetch stats", e);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const element = entry.target;
        const target = Number(element.dataset.counter);
        const start = performance.now();
        const duration = 900;

        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          element.textContent = Math.floor(progress * target);
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
        observer.unobserve(element);
      });
    },
    { threshold: 0.8 }
  );

  counters.forEach((counter) => observer.observe(counter));
};

const setupParticles = () => {
  const canvas = document.querySelector("[data-particles]");
  const context = canvas.getContext("2d");
  const particles = Array.from({ length: 118 }, () => ({
    x: Math.random(),
    y: Math.random(),
    radius: Math.random() * 2.4 + 0.6,
    speed: Math.random() * 0.13 + 0.035,
    phase: Math.random() * Math.PI * 2,
    wave: Math.random() * 0.9 + 0.35,
    vx: 0,
    vy: 0
  }));

  let mouse = { x: null, y: null, radius: 160 };

  window.addEventListener("mousemove", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
  });

  window.addEventListener("mouseout", () => {
    mouse.x = null;
    mouse.y = null;
  });

  const resize = () => {
    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;
  };

  const draw = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    const isDark = document.documentElement.dataset.theme === "dark";
    const colorRGB = isDark ? "110, 231, 249" : "20, 110, 245";
    const now = performance.now() / 1000;
    context.fillStyle = `rgba(${colorRGB}, 0.78)`;
    context.lineWidth = 0.55 * window.devicePixelRatio;

    particles.forEach((particle, index) => {
      let x = particle.x * canvas.width;
      let y = particle.y * canvas.height;
      
      // Mouse interaction
      if (mouse.x != null && mouse.y != null) {
        let dx = mouse.x * window.devicePixelRatio - x;
        let dy = mouse.y * window.devicePixelRatio - y;
        let distance = Math.sqrt(dx * dx + dy * dy) || 1;
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouse.radius * window.devicePixelRatio;
        let force = (maxDistance - distance) / maxDistance;

        if (distance < maxDistance) {
          particle.vx -= forceDirectionX * force * 0.5;
          particle.vy -= forceDirectionY * force * 0.5;
        }
      }

      particle.vx *= 0.95; // Friction
      particle.vy *= 0.95;
      particle.vx += Math.sin(now * 0.8 + particle.phase) * particle.wave * 0.006;
      particle.vy += Math.cos(now * 0.65 + particle.phase) * particle.wave * 0.004;
      x += particle.vx;
      y += particle.vy;

      // Wrap around bounds
      particle.x = x / canvas.width;
      particle.y = y / canvas.height;

      context.beginPath();
      context.arc(x, y, particle.radius * window.devicePixelRatio, 0, Math.PI * 2);
      context.fill();

      // Connections
      for (let j = index; j < particles.length; j++) {
        let p2 = particles[j];
        let p2x = p2.x * canvas.width;
        let p2y = p2.y * canvas.height;
        let dist = Math.sqrt(Math.pow(x - p2x, 2) + Math.pow(y - p2y, 2));
        
        const connectionDistance = 108 * window.devicePixelRatio;
        if (dist < connectionDistance) {
          context.strokeStyle = `rgba(${colorRGB}, ${0.24 - (dist / connectionDistance) * 0.24})`;
          context.beginPath();
          context.moveTo(x, y);
          context.lineTo(p2x, p2y);
          context.stroke();
        }
      }

      particle.y -= particle.speed / 1000;
      if (particle.y < -0.02) particle.y = 1.02;
      if (particle.x < -0.02) particle.x = 1.02;
      if (particle.x > 1.02) particle.x = -0.02;
    });
    requestAnimationFrame(draw);
  };

  resize();
  draw();
  window.addEventListener("resize", resize);
};

const setupCardsTilt = () => {
  const cards = document.querySelectorAll(".project-card, .service-card, .hero-card, .glass-panel");
  
  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;
      
      card.style.setProperty("--rx", `${rotateX}deg`);
      card.style.setProperty("--ry", `${rotateY}deg`);
    });
    
    card.addEventListener("mouseleave", () => {
      card.style.setProperty("--x", `50%`);
      card.style.setProperty("--y", `50%`);
      card.style.setProperty("--rx", `0deg`);
      card.style.setProperty("--ry", `0deg`);
    });
  });
};

const setupThemeToggle = () => {
  const toggleBtn = document.querySelector("[data-theme-toggle]");
  const savedTheme = localStorage.getItem("portfolio-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const currentTheme = savedTheme || (prefersDark ? "dark" : "light");
  
  document.documentElement.dataset.theme = currentTheme;
  
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const newTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = newTheme;
      localStorage.setItem("portfolio-theme", newTheme);
    });
  }
};

const boot = async () => {
  setupThemeToggle();
  currentLang = detectLanguage();
  document.querySelectorAll("[data-lang-option]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.langOption === currentLang);
  });
  await renderContent();
  setupLanguageSwitcher();
  setupNavigation();
  setupCounters();
  setupParticles();
  setupCardsTilt();
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeGalleryViewer();
      closeSupportDialog();
    }
  });
};

boot();
