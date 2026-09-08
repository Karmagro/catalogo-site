# Registro de cambios

Todos los cambios relevantes del Catálogo de Componentes se documentan en este archivo.

El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/) y el proyecto usa [Versionado Semántico](https://semver.org/lang/es/), con las reglas leídas para un catálogo: **MAYOR** cuando cambia el modelo (los once campos de la ficha, las seis secciones del Tablero Digital) o se elimina, divide o fusiona un componente; **MENOR** cuando se agrega sin romper (un componente, una etiqueta, un idioma, una página); **PARCHE** cuando se corrige (redacción, un ejemplo, una imagen, un mapeo mal declarado, un defecto del sitio). Catálogo y sitio comparten un único número de versión.

Cada versión abre con una sección **Catálogo** que resume el estado del contenido: cuántos componentes hay y cuáles entraron, salieron o cambiaron de identidad.

## [Sin publicar]

### Catálogo

- 22 componentes, sin cambios de contenido.

### Añadido

- La versión del catálogo se escribe una sola vez, en `package.json`; la página de Créditos la lee desde la configuración del sitio en vez de llevarla escrita a mano.
- Este registro de cambios.
- Etiqueta `v1.0.0` sobre el estado entregado con la memoria.
- Script de verificación del catálogo (`npm run verificar`): comprueba la estructura de cada ficha, el vocabulario de etiquetas, la correspondencia entre fichas y datos, la coherencia entre el mapeo declarado, los post-its del tablero y la tabla de observaciones de cada componente, las imágenes de las galerías, los enlaces internos y las cifras publicadas. `npm run verificar:todo` suma el chequeo de tipos y el build.
- Integración continua en GitHub Actions: cada *pull request* y cada cambio en `main` o `dev` corren `verificar:todo`.
- Las etiquetas se declaran en `docs/tags.yml`; una etiqueta que no esté ahí rompe el build en vez de crear una nueva en silencio.
- Documentación del repositorio: `README.md` (qué es el catálogo, cómo correr el sitio, estructura del repositorio), `CONTRIBUTING.md` (criterio para incorporar o modificar componentes, archivos que se tocan, estilo de la ficha, versiones y flujo de trabajo), `GUIA-TECNICA.md` (cómo está hecho el sitio) y `DECISIONES.md` (registro de decisiones con su justificación).
- Plantillas de GitHub: dos formularios de *issue* («Proponer un componente», que pide responder el criterio de incorporación antes de escribir la ficha, y «Reportar un error») y la lista de comprobación de cada *pull request*.
- `docs/componentes/_plantilla.mdx`: plantilla de ficha con los diez encabezados, los bloques y los *imports*. Docusaurus no la publica y `npm run verificar` la omite.

### Cambiado

- Un enlace o ancla internos rotos rompen el build en vez de emitir una advertencia.
- Versión mínima de Node: 22.18 (`.nvmrc` fija la 24).
- El mapeo de cada componente a las seis secciones del Tablero Digital se declara una sola vez, en `src/data/mapeo`. De ahí salen la rejilla de cada ficha, la matriz consolidada y la lectura por sección, que antes se escribían a mano por separado. La tabla de observaciones de cada ficha y los post-its de su tablero siguen siendo contenido propio.
- Los estilos de las fichas y páginas viven en `src/css`; `docs/` contiene solo contenido.
- Ramas normalizadas: `main` es producción (protegida, solo por *pull request*) y `dev` es integración. La rama `master` deja de existir.
- URL canónica del sitio: `https://catalogo-componentes-software.pages.dev`.
- Ícono propio en lugar del de la plantilla de Docusaurus: una baldosa con las seis secciones del Tablero Digital en sus colores. El navbar usa la baldosa clara en modo claro y la oscura en modo oscuro; el favicon SVG sigue el tema del navegador y `favicon.ico` (16, 32 y 48 px) es el respaldo para navegadores sin soporte de SVG.

### Eliminado

- La página de ejemplo de la plantilla de Docusaurus (`/markdown-page`) y el blog vacío (`/blog`).

### Corregido

- Las etiquetas **automatización** y **formularios** no tenían color asignado y se mostraban con el color genérico del sitio.
- Tablero Digital de **Login Biométrico**: la notificación de intento fallido estaba en Salidas por Demanda y corresponde a Salidas Automáticas; faltaba el post-it opcional de detección de vida en Procesos Autónomos. La ficha y la matriz de mapeo ya lo declaraban así.

## [1.0.0] — 2026-07-20

Primera versión publicada: el estado del catálogo entregado junto con la memoria de título *«Catalogación de componentes recurrentes de software que forman parte de sistemas de información»* (Departamento de Ciencias de la Computación, Universidad de Chile).

### Catálogo

- 22 componentes, en el orden de lectura del sitio: Formulario de Login, Login Biométrico, Autenticación API, Autorización, Creador de Cuenta, Gestión de Perfil, Mantenedor, Formulario de carga, Workflow de aprobación, ETL, Scraper, Consumo de Servicio Externo, Proceso Programado, Proceso Reactivo, Consultas, Reporte, Dashboard, Mapa Interactivo, Sistema de Notificación, Servicio Expuesto, Log de Auditoría, Base de Datos.
- Decisiones de identidad tomadas durante el desarrollo, respecto del borrador de 17 componentes de mayo de 2026:
  - **Formulario de carga** y **Workflow de aprobación** se incorporan como componentes propios.
  - **End-point (API)** se divide en **Servicio Expuesto** y **Consumo de Servicio Externo**.
  - Se incorpora **Proceso Interno**, que luego se divide en **Proceso Programado** y **Proceso Reactivo**.
  - Las secciones **Entradas** del Tablero Digital pasan a llamarse **Actualización Manual** y **Actualización Automática**, y se revisa la matriz de mapeo completa.

### Añadido

- Ficha uniforme de once campos por componente: alias, descripción, capacidades mandatorias y adicionales, delimitaciones, flujo de información, modalidades, dependencias típicas, ejemplos, mapeo al Tablero Digital y ejemplo de Tablero Digital.
- Tablero Digital de cada componente como componente React declarativo, con post-its mandatorios y opcionales por sección.
- Galería de capturas de sistemas reales al inicio de cada ficha, con degradación cuando falta una imagen.
- Matriz de mapeo componentes × secciones del Tablero Digital.
- Etiquetas navegables y filtrables, buscador local, página de Créditos y página de inicio.
- Barra lateral en orden narrativo y banner de orientación para quien llega por primera vez.

[Sin publicar]: https://github.com/Karmagro/catalogo-site/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/Karmagro/catalogo-site/releases/tag/v1.0.0
