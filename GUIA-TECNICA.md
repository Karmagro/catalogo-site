# Guía técnica del sitio

Cómo está hecho el sitio del catálogo, para quien tenga que mantenerlo o extenderlo. Complementa a [`CONTRIBUTING.md`](CONTRIBUTING.md) (criterio y flujo para agregar componentes) y a [`DECISIONES.md`](DECISIONES.md) (por qué el catálogo es como es). Aquí va el *cómo*: qué archivo hace qué, qué se declara dónde y qué trampas ya se pisaron.

## Índice

1. [Tecnología y comandos](#tecnología-y-comandos)
2. [Mapa de carpetas](#mapa-de-carpetas)
3. [Las tres fuentes de datos de una ficha](#las-tres-fuentes-de-datos-de-una-ficha)
4. [Las seis secciones del Tablero](#las-seis-secciones-del-tablero)
5. [El Tablero Digital como componente](#el-tablero-digital-como-componente)
6. [La galería de ejemplos](#la-galería-de-ejemplos)
7. [El mapeo en una sola fuente](#el-mapeo-en-una-sola-fuente)
8. [Las etiquetas](#las-etiquetas)
9. [El sidebar: orden, no categorías](#el-sidebar-orden-no-categorías)
10. [Piezas de Docusaurus sobreescritas](#piezas-de-docusaurus-sobreescritas)
11. [Sistema visual](#sistema-visual)
12. [Lecciones aprendidas de CSS y MDX](#lecciones-aprendidas-de-css-y-mdx)
13. [Qué verifica y qué no verifica el script](#qué-verifica-y-qué-no-verifica-el-script)
14. [Integración continua y despliegue](#integración-continua-y-despliegue)
15. [Versión](#versión)
16. [Internacionalización](#internacionalización)

## Tecnología y comandos

[Docusaurus](https://docusaurus.io/) 3 con el *preset* clásico, TypeScript, React 19. Sin blog, sin versionado de docs, sin *plugins* fuera del buscador local ([`@easyops-cn/docusaurus-search-local`](https://github.com/easyops-cn/docusaurus-search-local)) y los íconos de [`lucide-react`](https://lucide.dev/). Node **24** (`.nvmrc`; el mínimo real es 22.18 porque el script de verificación importa TypeScript sin compilar, con el *type stripping* nativo de Node).

| Comando | Qué hace |
|---|---|
| `npm ci` | Instala exactamente lo que fija `package-lock.json` |
| `npm start` | Servidor de desarrollo en `http://localhost:3000`, con recarga en caliente |
| `npm run build` | Sitio estático en `build/`. Un enlace o ancla internos rotos, o una etiqueta no declarada, **rompen** el build (`onBrokenLinks`, `onBrokenAnchors`, `onInlineTags` en `'throw'`) |
| `npm run serve` | Sirve `build/` tal como quedará publicado |
| `npm run typecheck` | `tsc` sobre todo el proyecto |
| `npm run verificar` | `scripts/verificar-catalogo.mjs` (sección 13). Menos de un segundo, sin red, sin dependencias |
| `npm run verificar:todo` | `verificar` + `typecheck` + `build`. Lo que corre la integración continua |
| `npm run clear` | Borra la caché de Docusaurus (`.docusaurus/`). Útil cuando un cambio en `tags.yml` o en la configuración no se refleja |

## Mapa de carpetas

```
catalogo-site/
├── docs/                              Contenido (MDX). Solo contenido: los estilos viven en src/css
│   ├── componentes/<slug>.mdx         Una ficha por componente (22)
│   ├── componentes/_plantilla.mdx     Plantilla para la ficha 23. Docusaurus no la publica; el script la omite
│   ├── secciones.mdx                  Página «Por Sección»: matriz y pestañas, dibujadas desde src/data/mapeo
│   ├── tablero-digital.mdx            Qué es el Tablero Digital
│   ├── sobre-el-catalogo.mdx          Estructura de la ficha, audiencia, cómo usar el catálogo
│   └── tags.yml                       Las etiquetas (única fuente; sección 8)
├── src/
│   ├── data/
│   │   ├── mapeo/index.ts             MAPEO: vínculo de cada componente con las seis secciones (sección 7)
│   │   ├── tableros/<slug>.ts         TableroData: post-its del Tablero de ejemplo (sección 5)
│   │   └── ejemplos/<slug>.ts         GaleriaData: capturas de la galería (sección 6)
│   ├── components/
│   │   ├── TableroDigital/            Dibuja un TableroData. types.ts define Seccion, Vinculo, TableroData, MapeoComponente
│   │   ├── Galeria/                   Carrusel + lightbox de una GaleriaData
│   │   ├── MapeoTablero/              Rejilla de la ficha (index), matriz (MatrizMapeo) y listas por sección (ResumenSeccion)
│   │   ├── FichaTags/                 Chips de etiquetas al inicio de la ficha, leídos del frontmatter
│   │   └── Tutorial/                  Banner de orientación y su botón de la navbar
│   ├── css/
│   │   ├── custom.css                 Variables globales, paleta, navbar, sidebar, tablas, colores de etiqueta
│   │   ├── componente.module.css      Estilos de las fichas (bloques de capacidades, flujo, mapeo, alias)
│   │   └── paginas.module.css         Estilos de tablero-digital.mdx y sobre-el-catalogo.mdx
│   ├── pages/                         index.tsx (portada) y creditos.tsx, con sus .module.css
│   └── theme/                         Piezas de Docusaurus sobreescritas (sección 10)
├── static/img/
│   ├── ejemplos/                      Imágenes de las galerías (<slug>-<descriptor>.png)
│   ├── creditos/                      Fotos de la página de Créditos
│   └── logo.svg, logo-dark.svg, favicon.svg, favicon.ico
├── scripts/verificar-catalogo.mjs     Verificación del catálogo (sección 13)
├── sidebars.ts                        Orden de lectura de las fichas (sección 9)
├── docusaurus.config.ts               Configuración del sitio
├── .github/workflows/verificar.yml    Integración continua (sección 14)
├── .github/ISSUE_TEMPLATE/            Plantillas «Proponer un componente» y «Reportar un error»
└── .github/PULL_REQUEST_TEMPLATE.md   Lista de comprobación de cada pull request
```

## Las tres fuentes de datos de una ficha

Cada ficha `docs/componentes/<slug>.mdx` es prosa más tres datos tipados que viven en `src/data/` y se importan al inicio del MDX:

```mdx
import {mantenedor} from '@site/src/data/tableros/mantenedor';                        // Tablero de ejemplo
import {mantenedor as ejemplosMantenedor} from '@site/src/data/ejemplos/mantenedor';  // Galería
<MapeoTablero slug="mantenedor" />                                                    // Mapeo (lo busca por slug)
```

El alias `ejemplos<Nombre>` en el segundo *import* evita el choque con el primero, que exporta la misma constante. El `slug` es el nombre del archivo MDX y se repite en el nombre de los dos archivos de datos, en la entrada del mapeo y en `sidebars.ts`; el script comprueba que las cuatro apariciones existen y que el nombre visible (`componente` en tablero y galería, `nombre` en el mapeo) es idéntico al H1 de la ficha.

Por qué los datos están separados de la prosa: son estructuras (listas de post-its, listas de imágenes, seis vínculos) que se dibujan con componentes React. Tenerlas tipadas hace que `tsc` detecte una sección mal escrita o un campo faltante, permite que el script las importe y las cruce, y deja la ficha como prosa limpia.

## Las seis secciones del Tablero

El tipo `Seccion` (`src/components/TableroDigital/types.ts`) fija los seis identificadores:

| Identificador | Etiqueta visible | Variable CSS |
|---|---|---|
| `actualizacion-manual` | Actualización Manual | `--seccion-actualizacion-manual` |
| `actualizacion-automatica` | Actualización Automática | `--seccion-actualizacion-automatica` |
| `conceptos-datos` | Conceptos de Datos | `--seccion-conceptos` |
| `salidas-demanda` | Salidas por Demanda | `--seccion-salidas-demanda` |
| `salidas-automaticas` | Salidas Automáticas | `--seccion-salidas-automaticas` |
| `procesos-autonomos` | Procesos Autónomos | `--seccion-procesos-autonomos` |

`SECCIONES` (`secciones.ts`, junto al tipo) mapea cada identificador a su etiqueta y su variable CSS; es la única tabla de nombres. Hay dos órdenes en uso: `SECCION_ORDER` (en el mismo archivo) es el orden del Tablero dibujado, en dos filas (Manual, Conceptos, Demanda / Automática, Procesos, Salidas Automáticas), y `SECCIONES_FLUJO` (`src/data/mapeo/index.ts`) es el orden de lectura del mapeo, la matriz y la rejilla (Manual, Automática, Conceptos, Demanda, Salidas Automáticas, Procesos).

**El identificador de una sección es transversal.** Aparece en el tipo, en `SECCIONES`, en las claves de los 22 tableros, en los 22 mapeos, en las variables CSS (definidas en claro y en oscuro) y en los `style` que las referencian. Cuando se renombraron dos secciones, el cambio tocó 41 archivos. Si hubiera que hacerlo de nuevo: primero el tipo `Seccion` y `SECCIONES`, luego las variables en `custom.css` (ambos temas, conservando el color), luego los datos y los MDX, y `npm run build` como red: `Record<Seccion, …>` falla la compilación si alguna clave quedó vieja. La etiqueta visible es independiente del identificador y se puede cambiar sola.

## El Tablero Digital como componente

`<TableroDigital data={…} />` (`src/components/TableroDigital/`) dibuja el campo «Ejemplo de Tablero Digital» de cada ficha a partir de un `TableroData`:

```ts
import type {TableroData} from '@site/src/components/TableroDigital/types';

export const mantenedor: TableroData = {
  componente: 'Mantenedor',                       // idéntico al H1 de la ficha
  tarjetas: {
    'actualizacion-manual': [
      {titulo: 'Formulario de Alta de Actores', variante: 'mandatorio'},
      {titulo: 'Formulario de Edición de Actores', variante: 'mandatorio'},
    ],
    'actualizacion-automatica': [],               // las seis secciones van siempre; vacía = []
    'conceptos-datos': [{titulo: 'Actores', variante: 'mandatorio'}],
    'salidas-demanda': [
      {titulo: 'Listado de Actores', variante: 'mandatorio'},
      {titulo: 'Búsqueda de Actores', variante: 'opcional'},
    ],
    'salidas-automaticas': [],
    'procesos-autonomos': [{titulo: 'Historial de Cambios de Actores', variante: 'opcional'}],
  },
};
```

Un post-it admite `subtitulo` (segunda línea, en peso normal). El archivo se llama como el `slug` y exporta una sola constante, en *camelCase*.

Decisiones de dibujo que no conviene rediscutir: no lleva pestaña con el nombre del componente (la ficha ya tiene título); cada post-it toma el color de la **sección donde está**, no un azul o rojo fijo (refuerza la identidad de las seis secciones en todo el sitio); mandatorio = fondo al 22 % del color de la sección más borde sólido, opcional = fondo al 8 % más borde discontinuo; los post-its se distribuyen con `flex-wrap` y un ancho mínimo de 70 px, así los cortos van lado a lado y los largos se apilan; una celda vacía conserva su cabecera y muestra un guion, para comunicar que la sección existe pero no aplica.

## La galería de ejemplos

`<Galeria data={…} />` (`src/components/Galeria/`) dibuja el campo «Ejemplos» a partir de una `GaleriaData`:

```ts
import type {GaleriaData} from '@site/src/components/Galeria/types';

export const mantenedor: GaleriaData = {
  componente: 'Mantenedor',
  imagenes: [
    {
      src: '/img/ejemplos/mantenedor-google-calendar.png',   // ruta servida desde static/
      alt: 'Formulario de creación de evento en Google Calendar',
      caption: 'Creación y edición de un evento en Google Calendar: …',
    },
  ],
};
```

Comportamiento: una imagen grande visible; con dos o más, carrusel automático cada 5 s (se detiene con el ratón) con puntos indicadores; al hacer clic, *lightbox* con la imagen a tamaño completo, contador, flechas y teclado (←, →, Esc). `object-fit: contain` con alto máximo de 480 px: las capturas verticales quedan con fondo a los lados y las anchas se ajustan; no se recorta nada. Sin imágenes, la galería degrada a un aviso en vez de romper el build.

El `Lightbox` se monta dentro de `<BrowserOnly>` porque usa `document` (teclado, bloqueo del *scroll*), que no existe durante el *render* en servidor. No quitar ese envoltorio.

Las imágenes van en `static/img/ejemplos/` con el nombre `<slug>-<descriptor>.png`. El script avisa de las que no referencia ninguna galería.

## El mapeo en una sola fuente

`src/data/mapeo/index.ts` declara, para cada componente, su vínculo con las seis secciones:

```ts
{
  slug: 'mantenedor',
  nombre: 'Mantenedor',
  vinculos: {
    'actualizacion-manual': 'mandatorio',
    'actualizacion-automatica': null,
    'conceptos-datos': 'mandatorio',
    'salidas-demanda': 'mandatorio',
    'salidas-automaticas': null,
    'procesos-autonomos': 'opcional',
  },
},
```

De esta lista salen tres vistas, sin escribir nada más:

- `<MapeoTablero slug="…" />`: la rejilla de seis celdas de la ficha.
- `<MatrizMapeo />`: la matriz componentes × secciones de `docs/secciones.mdx`, en el orden de la lista.
- `<ResumenSeccion seccion="…" />`: las listas de las pestañas de la misma página, con `porSeccion(seccion, 'mandatorio' | 'opcional')`.

Lo que sigue siendo contenido escrito a mano en la ficha es la **tabla de observaciones** bajo la rejilla (una fila por sección, con la columna Vínculo en `Siempre`, `Opcional` o `No`, y una observación) y los **post-its del tablero**. El script cruza las tres cosas: el vínculo declarado debe coincidir con la columna de la tabla y con las variantes de los post-its de esa sección (mandatorio exige al menos un post-it mandatorio; opcional exige post-its y ninguno mandatorio; sin vínculo exige celda vacía).

## Las etiquetas

`docs/tags.yml` es la única fuente. Cada etiqueta lleva `label`, `permalink` (sin acentos; es el segmento de la URL bajo `/docs/etiquetas/`) y `description` (una línea que Docusaurus muestra como subtítulo de la página de la etiqueta). Una ficha usa una etiqueta que no está declarada y el build falla (`onInlineTags: 'throw'`): así una errata no crea una etiqueta nueva en silencio.

El color de cada etiqueta se asigna en `src/css/custom.css` por el sufijo del enlace, de modo que funcione igual en los chips del inicio de la ficha (`<FichaTags />`), en los del pie y en las páginas de etiquetas:

```css
a[href$="/etiquetas/datos"] { --tag-color: var(--seccion-conceptos); }
```

Cada etiqueta toma el color de la sección del Tablero con la que más se relaciona. Una etiqueta sin selector es un error del script. El script también avisa cuando una etiqueta tiene menos de dos componentes: la navegación por etiquetas sirve cuando agrupa.

`<FichaTags />` lee las etiquetas del *frontmatter* con `useDoc()`; no se repiten en el cuerpo del MDX.

## El sidebar: orden, no categorías

`sidebars.ts` es una lista plana con los 22 identificadores de ficha y siete rótulos de tramo (`type: 'html'`, clase `sidebar-tramo`) intercalados: Acceso y cuentas, Gestión de datos, Ingesta automática, Procesamiento interno, Consulta y visualización, Comunicación y servicios, Registro e infraestructura. Los rótulos no son clicables y no son categorías: nombran fases del ciclo de vida de la información para que la lista se lea como un recorrido y no como una bolsa. La pertenencia formal, que es múltiple, vive en «Por Sección» y «Por Etiquetas», donde una matriz sí puede decir que un componente toca varias secciones. Un árbol no puede; por eso el sidebar ordena y no agrupa. El razonamiento completo está en `DECISIONES.md`.

Agregar un componente es una línea `'componentes/<slug>'` en el tramo que corresponda. El script comprueba que cada ficha aparece y que cada línea apunta a una ficha existente.

## Piezas de Docusaurus sobreescritas

Todo lo que está en `src/theme/` reemplaza a una pieza del tema clásico (*swizzle*). Son tres, y conviene mantenerlas pocas porque cada una hay que revisarla al actualizar Docusaurus:

- **`DocItem/Layout/index.tsx`**: copia del original con un solo cambio: en las fichas de componente (`metadata.permalink` bajo `/docs/componentes/`) el paginador anterior/siguiente aparece también arriba del artículo, para recorrer el catálogo sin bajar hasta el final de cada ficha.
- **`Root.tsx`**: envuelve todo el sitio con el `TutorialProvider` y monta el banner de orientación. En la primera visita (marca `catalogo:tutorial-visto` en `localStorage`) lo abre solo, con 700 ms de retraso para no competir con la carga, y se cierra a los 9 s o con el botón. Desde el botón `?` de la navbar se reabre y entonces queda hasta que se cierre.
- **`NavbarItem/ComponentTypes.tsx`**: registra el tipo `custom-tutorialButton` que usa la navbar para ese botón.

## Sistema visual

Fuente Inter (Google Fonts, cargada en `custom.css`), interlineado 1.7, títulos con *letter-spacing* negativo. Color primario índigo (`#4F46E5` claro, `#818CF8` oscuro). Fondo `#FFFFFF` / `#0F172A`; superficie de tarjetas `#F8FAFC` / `#1E293B`. Los seis colores de sección se definen dos veces (`:root` y `[data-theme='dark']`), aclarados en oscuro para conservar contraste, con el mismo nombre de variable; el CSS resuelve el valor según el tema:

| Sección | Claro | Oscuro |
|---|---|---|
| Actualización Manual | `#0284C7` | `#38BDF8` |
| Actualización Automática | `#7C3AED` | `#A78BFA` |
| Conceptos de Datos | `#059669` | `#34D399` |
| Salidas por Demanda | `#D97706` | `#FCD34D` |
| Salidas Automáticas | `#DB2777` | `#F472B6` |
| Procesos Autónomos | `#475569` | `#94A3B8` |

Colores de estado en las fichas: mandatorio esmeralda (`#059669`), adicional azul (`#2563EB`), delimitación rojo (`#DC2626`), como borde izquierdo y encabezado de cada bloque.

Reglas: el color de sección se usa **solo** para hablar de esa sección (celdas del mapeo, post-its, columnas de la matriz, color de etiqueta), nunca como color decorativo general. La única excepción es el ícono del sitio, donde los seis aparecen juntos porque ahí *son* el Tablero. Los valores hexadecimales viven en `custom.css`; un `style` en línea en un MDX o en un componente referencia variables (`var(--seccion-…)`), nunca un hexadecimal.

Ícono: `static/img/logo.svg` (baldosa blanca, navbar claro), `logo-dark.svg` (baldosa pizarra, navbar oscuro), `favicon.svg` (sigue el tema del navegador con `prefers-color-scheme`) y `favicon.ico` (respaldo para navegadores sin favicon SVG; PNG de 16, 32 y 48 px). Al cambiar el dibujo, subir el sufijo `?v=N` de las dos URL del favicon en `docusaurus.config.ts`: los navegadores guardan el favicon por URL y no lo refrescan.

## Lecciones aprendidas de CSS y MDX

Trampas que ya se pisaron. Leer antes de tocar el CSS o escribir MDX con JSX.

1. **Grises ilegibles en modo claro.** `--ifm-color-emphasis-500` y `-600` se ven bien en oscuro y no se leen en claro. Para texto secundario, mínimo `--ifm-color-emphasis-700`; si tiene que destacar, el color primario.
2. **Fondos tenues que desaparecen sobre blanco.** Un `color-mix(… 8 %, fondo)` se ve en oscuro y no en claro. Mínimo 12 o 13 % sobre blanco, y siempre un borde visible (40 a 45 % del color).
3. **Botón de contorno junto a uno relleno.** El de contorno transparente se lee como «apagado». Lleva fondo al 6 % para tener presencia sin competir.
4. **Tarjetas del mismo color que la página** flotan sin definirse. Las tarjetas usan `--ifm-background-surface-color`; la principal puede llevar un tinte del primario al 4 %.
5. **Las clases de los avisos no son las que uno supone.** `<Admonition type="danger">` genera `.alert--danger`, no `.admonition-danger`. Inspeccionar el DOM real antes de escribir un *override*.
6. **Enlaces sobre fondos de color** (los vecinos enlazados dentro de Delimitaciones) no se leen con el color de enlace normal. Se convierten en *badges* con fondo, borde y color propios, adaptados al fondo del contenedor, en claro y en oscuro.
7. **La tabla por defecto de Docusaurus** tiene cabecera indistinguible en oscuro y sin presencia en claro. Hay un *override* global: cabecera con tinte del primario, filas alternas, sin bordes verticales internos, esquinas redondeadas solo en el contenedor.
8. **`<p className={…}>` con texto en varias líneas rompe el HTML.** MDX mete un `<p>` propio dentro del tuyo y el resultado es un `<p>` anidado que el minificador del build señala («No 'p' element in scope»). Dentro de un MDX, para un bloque de texto con clase usar `<div className={…}>`.
9. **Importar en MDX.** Los `import` van después del *frontmatter* y antes del primer encabezado. Los módulos CSS y las librerías React se importan igual que en un `.tsx`; `@site/` apunta a la raíz del proyecto.
10. **El identificador de una sección está acoplado en decenas de archivos** (sección 4). No renombrarlo a la ligera; si se hace, en el orden indicado y con el build como red.
11. **Revisar siempre en claro y en oscuro.** Los problemas aparecen casi siempre en uno solo de los dos.

## Qué verifica y qué no verifica el script

`scripts/verificar-catalogo.mjs` importa los datos TypeScript tal cual (Node 22.18 o superior) y recorre ocho bloques. Sale con código 1 si hay errores; las advertencias no detienen nada.

| Bloque | Qué comprueba |
|---|---|
| Estructura de la ficha | *Frontmatter* con `tags`; H1; los diez H2 en el orden canónico (Ejemplos, Descripción, Capacidades mandatorias, Capacidades adicionales, Delimitaciones, Flujo de información, Modalidades, Dependencias típicas, Mapeo al Tablero Digital, Ejemplo de Tablero Digital); línea de alias; `<FichaTags />`, `<Galeria>`, `<MapeoTablero slug>` (con el slug del archivo) y `<TableroDigital>` presentes |
| Vocabulario | Cada etiqueta usada está en `tags.yml`; cada etiqueta declarada tiene color en `custom.css`; aviso si una etiqueta tiene menos de dos componentes |
| Integridad de archivos | Para cada ficha existen tablero, galería, entrada del mapeo y línea del sidebar, con el nombre igual al H1; no hay tableros, galerías, entradas de mapeo ni líneas de sidebar huérfanos; ningún slug se repite en el mapeo |
| Mapeo coherente | Para cada componente y sección, el vínculo declarado coincide con las variantes de los post-its del tablero y con la columna Vínculo de la tabla de observaciones de la ficha |
| Imágenes | Cada imagen de galería existe en `static/`, tiene `alt` y `caption`; aviso por imágenes en `static/img/ejemplos/` que ninguna galería usa; si existe `ATRIBUCIONES.md`, aviso por imágenes que no aparecen ahí |
| Enlaces internos | Todo enlace `/docs/…` en `docs/`, `src/` y la configuración apunta a una ficha, una página o una etiqueta existentes |
| Cifras | Los conteos de componentes escritos en la portada, en Sobre el Catálogo y en la sección vigente del `CHANGELOG.md` (en cifra o en palabra) coinciden con el número de fichas |
| Encabezados | Los H2 llevan `{#id}` explícito. Hoy es una advertencia; el interruptor `ENCABEZADOS_CON_ID_ES_ERROR` al inicio del script lo convierte en error cuando se hayan fijado los identificadores (`npm run write-heading-ids`), para que las anclas sobrevivan a una traducción de los títulos |

Los archivos que empiezan con `_` en `docs/componentes/` (la plantilla) se omiten. El bloque de atribuciones se activa solo cuando el archivo `ATRIBUCIONES.md` existe.

Lo que **no** verifica, a propósito: si un componente merece estar en el catálogo, si es recurrente, si no es una modalidad de otro, si sus delimitaciones son nítidas. Eso lo sostiene el proceso de propuesta y revisión de `CONTRIBUTING.md`. Tampoco revisa `static/img/` fuera de `ejemplos/`, ni los enlaces relativos de los archivos Markdown de la raíz del repositorio.

Para agregar una comprobación: una función `verificarAlgo(inv)` que use `error()` o `advertencia()`, y su entrada en `BLOQUES`. El inventario `inv` ya trae las fichas parseadas, los datos importados, las etiquetas, el CSS y los textos con cifras.

## Integración continua y despliegue

- `.github/workflows/verificar.yml` corre `npm ci` y `npm run verificar:todo` en cada *pull request* y en cada cambio en `main` o `dev`, con la versión de Node de `.nvmrc`.
- `main` está protegida: solo entra por *pull request* y solo con el check `verificar` en verde, también para administradores.
- Cloudflare Pages construye el sitio con `npm run build` y publica `build/`: `main` en https://catalogo-componentes-software.pages.dev y `dev` como *preview* en https://dev.catalogo-componentes-software.pages.dev. Lee la versión de Node de `.nvmrc`. No hay ningún paso de despliegue en el repositorio: publicar es hacer *merge* a `main`.

## Versión

Una sola, en `package.json`. `docusaurus.config.ts` la expone en `customFields.version` y `src/pages/creditos.tsx` la muestra. `npm version <major|minor|patch>` la sube, hace el *commit* y crea la etiqueta `v…`; el registro de lo que cambió va en `CHANGELOG.md` (reglas en `CONTRIBUTING.md`).

## Internacionalización

El sitio está en español y preparado para un segundo idioma con el sistema de i18n de Docusaurus. La regla para cuando se active: **si es prosa, se copia; si es código, se instrumenta.**

| Qué | Cómo se traduce |
|---|---|
| `docs/**/*.mdx` | Espejo en `i18n/<locale>/docusaurus-plugin-content-docs/current/`, mismo nombre de archivo |
| `src/data/**/*.ts` (tableros, galerías, mapeo) | Espejo en una subcarpeta del idioma; el MDX traducido importa el dato traducido |
| `src/pages/*.tsx` y `src/components/**/*.tsx` | `<Translate>` / `translate()` en el mismo archivo; las cadenas se extraen con `npm run write-translations` |
| `sidebars.ts` y `docusaurus.config.ts` | Se cargan en Node, fuera del sistema de React: los rótulos de tramo se eligen por `process.env.DOCUSAURUS_CURRENT_LOCALE` |
| `docs/tags.yml` | Espejo localizado con la **misma clave y el mismo `permalink`**, distinto `label` |

Los *slugs*, los identificadores de documento y los *permalinks* de etiqueta se mantienen en español en todos los idiomas (`/en/docs/componentes/mantenedor`): así los enlaces cruzados entre fichas y los selectores de color de etiqueta siguen valiendo sin duplicarlos. No se escriben condicionales de idioma a mano en los componentes (`locale === 'en' ? … : …`): quedan fuera de `write-translations` y no escalan. Un solo repositorio y un solo despliegue: `npm run build` construye todos los idiomas.
