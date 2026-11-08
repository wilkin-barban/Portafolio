# Política de Seguridad

Este portafolio es un sitio estático servido por Express. No almacena cuentas de clientes ni procesa pagos; aun así, cuidamos la superficie pública y la cadena de despliegue.

## Versiones soportadas

| Versión | Soporte |
|---|---|
| 1.1.x | Correcciones de seguridad |
| < 1.1 | Sin soporte |

## Cómo reportar

Usá los **GitHub Security Advisories** del repositorio:

<https://github.com/wilkin-barban/Portafolio/security/advisories/new>

No abras issues públicos con detalles explotables, credenciales o datos personales. Incluí pasos de reproducción, impacto y versión afectada.

## Alcance

- XSS o inyección en el contenido de proyectos, traducciones o galería.
- Path traversal o bypass de la whitelist de galerías.
- Exposición de secretos, rutas internas o configuración del servidor.
- Debilidades en las cabeceras HTTP, TLS o proxy Nginx.
- Manipulación de enlaces de demo, repositorios o releases.

## Secretos

No se versionan claves, tokens ni certificados privados. Las credenciales de despliegue viven fuera del repositorio, en el entorno del VPS y en los certificados de Let's Encrypt.

## Privacidad

El sitio no incorpora analítica de terceros. El widget de chat pertenece a Super Chat Manager y su tratamiento de datos se documenta en ese proyecto.
