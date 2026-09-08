# Guía para contribuir al catálogo

Esta guía existe para que alguien que no participó en la construcción del catálogo pueda agregar el componente 23 con el mismo criterio y la misma calidad que los 22 anteriores. Tiene tres partes: el **criterio** (cuándo algo es un componente), la **mecánica** (qué archivos se tocan) y el **flujo** (cómo entra un cambio al sitio). Si solo quieres corregir una errata, salta a [Reportar un error](#reportar-un-error) o abre directamente un *pull request*.

El esfuerzo de mantener el catálogo está en el criterio, no en la técnica. Un componente mal delimitado le quita valor a todos sus vecinos; un archivo mal ubicado lo detecta `npm run verificar` en menos de un segundo.

## Índice

1. [Criterio: cuándo algo es un componente](#criterio-cuándo-algo-es-un-componente)
2. [Proponer un componente](#proponer-un-componente)
3. [Escribir el componente: archivos que se tocan](#escribir-el-componente-archivos-que-se-tocan)
4. [Estilo de la ficha](#estilo-de-la-ficha)
5. [Modificar un componente existente](#modificar-un-componente-existente)
6. [Versiones y registro de cambios](#versiones-y-registro-de-cambios)
7. [Flujo de trabajo: ramas, verificación y *pull requests*](#flujo-de-trabajo-ramas-verificación-y-pull-requests)
8. [Reportar un error](#reportar-un-error)
9. [Licencia de las contribuciones](#licencia-de-las-contribuciones)

## Criterio: cuándo algo es un componente

Un componente del catálogo es un **tipo de funcionalidad recurrente definido por su propósito**, no por su implementación. El catálogo documenta funcionalidades que reaparecen en sistemas distintos, con fronteras nítidas entre ellas y un formato comparable. Incorporar un componente nuevo sigue seis pasos; los dos primeros son de criterio y los cuatro restantes, de documentación.

1. **Verificar la recurrencia del candidato.** Un candidato debe haberse observado en varios sistemas, preferentemente de dominios diferentes. Una funcionalidad vista en un solo sistema, por muy bien resuelta que esté, es una necesidad de ese sistema y no un componente.

2. **Contrastar el candidato con los componentes ya documentados.** Este es el paso crítico. Se resuelve revisando las **capacidades mandatorias** y las **delimitaciones** de los componentes existentes que operan sobre el mismo dominio de funcionalidad. El contraste admite tres desenlaces:

   - Si el candidato **satisface las capacidades mandatorias** de un componente ya documentado, no es un componente nuevo. Según el caso, se registra como una **modalidad** de ese componente (si es una variante funcional reconocible) o como una **capacidad adicional** (si lo enriquece sin ser esencial).
   - Si el candidato **comparte propósito general** con un componente existente pero **difiere en su función esencial**, se documenta como componente nuevo y, al mismo tiempo, se actualizan las delimitaciones del componente existente para explicitar la distinción. Esta actualización no es opcional: el campo de delimitaciones vale porque recoge exactamente las confusiones posibles dentro del catálogo.
   - Si el candidato **no se relaciona** con ningún componente documentado, se documenta como componente nuevo.

3. **Completar los once campos de la ficha.** Los once, sin excepción. Merecen atención particular las capacidades mandatorias, que definen la identidad del componente y sirven para reconocerlo en un sistema concreto, y las delimitaciones, que lo separan de sus vecinos. Los demás campos admiten completarse de forma incremental a medida que se acumulan ejemplos y observaciones.

4. **Declarar el mapeo al Tablero Digital.** Para cada una de las seis secciones del Tablero se indica si el vínculo es **mandatorio** (el componente siempre toca esa sección por sus capacidades esenciales), **opcional** (la toca solo cuando incorpora ciertas capacidades adicionales) o **inexistente**. Un componente no pertenece a una sección: toca varias.

5. **Asignar etiquetas.** Se reutilizan las etiquetas existentes siempre que sea posible (están en `docs/tags.yml`) y solo se crea una nueva cuando ninguna resulta aplicable. Una etiqueta con un solo componente fragmenta la navegación en vez de ayudarla.

6. **Publicar el componente.** Se incorpora al repositorio por *pull request*, con el flujo de la sección 7.

Un ejemplo en cada sentido, para calibrar:

- **Workflow de aprobación** entró como componente propio: comparte propósito con el Formulario de carga (ambos reciben datos de una persona) pero su función esencial es distinta (orquestar etapas con decisiones humanas hasta un estado terminal). Al entrar, las delimitaciones del Formulario de carga y de los procesos autónomos pasaron a nombrarlo.
- **La importación masiva** no es un componente: satisface las capacidades de un Mantenedor y lo enriquece, así que es una capacidad adicional de este.

## Proponer un componente

Antes de escribir una línea, abre un *issue* con la plantilla **«Proponer un componente»**. La plantilla pide exactamente lo que exigen los pasos 1 y 2: en qué sistemas observaste el candidato, con qué componentes existentes lo contrastaste y por qué no es una modalidad ni una capacidad adicional de ellos, qué delimitaciones de vecinos habría que actualizar, el mapeo propuesto a las seis secciones y las etiquetas existentes que aplican.

No se acepta un componente por *pull request* sin un *issue* de propuesta previo. El formulario existe para que el criterio se discuta antes del código, no después.

## Escribir el componente: archivos que se tocan

Con el *issue* resuelto a favor, en una rama creada desde `dev`:

| # | Archivo | Qué va ahí |
|---|---|---|
| 1 | `docs/componentes/<slug>.mdx` | La ficha. Se copia de `docs/componentes/_plantilla.mdx`, que trae los diez encabezados, los bloques con estilo y los *imports*. El `slug` es el nombre en minúsculas, sin acentos, con guiones (`workflow-aprobacion`); es la URL de la ficha y no se traduce ni se cambia después |
| 2 | `src/data/tableros/<slug>.ts` | Los post-its del Tablero Digital de ejemplo, por sección, con su variante (`mandatorio` u `opcional`). Las seis secciones van siempre, aunque estén vacías (`[]`) |
| 3 | `src/data/ejemplos/<slug>.ts` y `static/img/ejemplos/<slug>-<descriptor>.png` | Las capturas de la galería, cada una con `src`, `alt` y `caption`. Una imagen basta; dos o tres muestran mejor la variedad |
| 4 | `src/data/mapeo/index.ts` | Una entrada con `slug`, `nombre` y los seis vínculos (`'mandatorio'`, `'opcional'` o `null`). De aquí salen la rejilla de la ficha, la matriz de la página Por Sección y las listas por sección; no hay que tocar nada más para que aparezcan |
| 5 | `sidebars.ts` | Una línea `'componentes/<slug>'` en el tramo de lectura que corresponda. Los tramos son un orden de lectura, no categorías (ver `DECISIONES.md`) |
| 6 | `docs/tags.yml` y `src/css/custom.css` | **Solo si hace falta una etiqueta nueva** (excepcional, paso 5 del criterio): la etiqueta con `label`, `permalink` y `description` en el YAML, y su color en el CSS (selector `a[href$="/etiquetas/<permalink>"]`) |
| 7 | `src/pages/index.tsx`, `docs/sobre-el-catalogo.mdx`, `CHANGELOG.md` | El conteo de componentes aparece escrito en la portada y en Sobre el Catálogo (en cifra y en palabra). `npm run verificar` avisa si alguno quedó desactualizado |
| 8 | Fichas vecinas | Si el paso 2 del criterio obligó a actualizar delimitaciones de otros componentes, esos MDX también cambian y se listan en el *pull request* |
| 9 | `CHANGELOG.md` | Una línea en `[Sin publicar]` › **Catálogo** con el componente que entra, y las que hagan falta en **Añadido** o **Cambiado** |

Luego `npm run verificar` en verde y el *pull request* (sección 7). El script comprueba que la ficha tiene los diez encabezados en orden, que existen el tablero, la galería, la entrada del mapeo y la línea del sidebar con el mismo nombre, que el mapeo declarado coincide con los post-its del tablero y con la tabla de observaciones de la ficha, que las imágenes existen y tienen `alt` y `caption`, que los enlaces internos apuntan a páginas reales, que las etiquetas están declaradas y tienen color, y que las cifras publicadas coinciden con el número de fichas. Lo que **no** comprueba es si el componente merece estar: eso lo sostiene el *issue* de propuesta.

## Estilo de la ficha

El sitio es un catálogo de consulta, no un ensayo. La ficha se escribe para que alguien que llega desde un buscador entienda en un minuto qué es el componente, cómo reconocerlo y con qué no confundirlo.

**Registro.** Tercera persona, presente, sin «nosotros» ni «usted». Sin prosa de tesis (no se cita literatura ni se justifica la existencia del catálogo; para eso está la memoria). Términos en español; los anglicismos establecidos van en cursiva la primera vez (*dashboard*, *scraper*) o como alias.

**Nombre.** Un sustantivo en singular con mayúscula inicial: «Mantenedor», «Formulario de carga», «Consumo de Servicio Externo». El nombre es el H1 de la ficha y se repite, idéntico, en `componente` del tablero, `componente` de la galería y `nombre` del mapeo; el script lo comprueba.

**Alias.** Dos o tres nombres con los que se conoce el componente en la industria, separados por «·». Van en la línea bajo el título.

**Descripción.** Un párrafo de entre 40 y 100 palabras que diga qué hace el componente y para qué. Si necesita más, lo que sobra suele ser una modalidad o una delimitación.

**Capacidades mandatorias.** Entre cinco y ocho viñetas, cada una con un verbo en presente («Permite crear…», «Valida…», «Restringe…»). Son las que definen la identidad: si un sistema real no las cumple todas, no tiene este componente. Se puede resaltar en negrita la palabra que distingue una viñeta de otra (**crear**, **editar**, **eliminar**).

**Capacidades adicionales.** Viñetas con la forma **Nombre:** explicación. Enriquecen sin ser esenciales; muchas de ellas son las que activan un vínculo *opcional* con alguna sección del Tablero.

**Delimitaciones.** Es el campo que separa al componente de sus vecinos. Cada viñeta tiene la forma `**No** hace tal cosa — eso corresponde a [Vecino](/docs/componentes/vecino)`. Enlazar siempre al vecino: la delimitación vale por la comparación. Entre tres y cinco viñetas; si hay más, el componente probablemente está mal recortado.

**Flujo de información.** Dos tarjetas, Entrada y Salida, con una frase cada una.

**Modalidades.** Viñetas con la forma **Nombre de la modalidad.** Explicación de en qué se diferencia. Solo cuando existen variantes reconocibles; si no las hay, se deja una sola línea que lo diga.

**Dependencias típicas.** Viñetas con enlace a los componentes del catálogo de los que este suele depender y una razón breve.

**Ejemplos (galería).** Capturas de sistemas reales y conocidos, preferentemente de dominios distintos entre sí. Una buena captura muestra el componente en uso, no un menú ni una pantalla de configuración. El `caption` dice qué sistema es, qué se ve y por qué eso materializa el componente (una o dos frases). El `alt` describe la imagen para quien no la ve. Los diagramas (un flujo OAuth, un esquema ETL) se admiten cuando la captura no puede mostrar el componente; el `caption` lo aclara.

**Mapeo al Tablero Digital.** La rejilla la dibuja el sitio a partir de `src/data/mapeo`. Debajo va la tabla de observaciones: una fila por sección, con el vínculo (`Siempre`, `Opcional` o `No`) y una observación de una o dos frases que diga *qué* toca el componente en esa sección. La columna de vínculo tiene que coincidir con el mapeo declarado; el script lo comprueba.

**Ejemplo de Tablero Digital.** Un caso concreto e inventado (el Mantenedor usa «Actores»; una Base de Datos, varias entidades). Cada post-it es una intención o necesidad tal como aparecería en un Tablero real («Formulario de Alta de Actores», «Listado de Actores»), no el nombre del componente. Los post-its mandatorios materializan capacidades mandatorias; los opcionales, capacidades adicionales. Un post-it en una sección donde el mapeo dice «No» es un error que el script detecta.

## Modificar un componente existente

No todas las modificaciones son equivalentes.

- **Enriquecimiento local:** agregar alias, ejemplos, modalidades o capacidades adicionales. Afecta solo a la ficha intervenida. Es un cambio de **parche** o **menor**, según el tamaño.
- **Cambio de identidad:** modificar las capacidades mandatorias o las delimitaciones. Altera las fronteras que separan al componente de sus vecinos, así que exige revisar los componentes que operan sobre el mismo dominio de funcionalidad, para verificar que no queden solapamientos ni vacíos, y revisar el mapeo al Tablero Digital. En el *pull request* se listan los vecinos revisados. Es **menor** si el componente sigue reconociéndose como el mismo y **mayor** si un lector de la versión anterior clasificaría distinto un sistema real; lo decide quien mantiene el catálogo y lo justifica en el `CHANGELOG.md`.
- **Eliminar, dividir o fusionar** un componente rompe enlaces y citas. Es siempre un cambio **mayor**.

## Versiones y registro de cambios

- Catálogo y sitio comparten **un único número de versión**. Se escribe solo en `package.json`; la página de Créditos lo lee de ahí. Si aparece un número de versión escrito a mano en un MDX, es un error.
- Se usa **Versionado Semántico** con las reglas leídas para un catálogo: **mayor** cuando cambia el modelo (los once campos, las seis secciones) o se elimina, divide o fusiona un componente; **menor** cuando se agrega sin romper (un componente, una etiqueta, un idioma, una página); **parche** cuando se corrige (redacción, un ejemplo, una imagen, un mapeo mal declarado, un defecto del sitio).
- `CHANGELOG.md` sigue el formato *Keep a Changelog*, en español: **Añadido · Cambiado · Corregido · Eliminado**, más una sección **Catálogo** al inicio de cada versión con el conteo de componentes y cuáles entraron, salieron o cambiaron de identidad. Esa sección es la que busca un lector no técnico. Todo cambio entra primero en `[Sin publicar]`.
- Cambiar de versión es un comando, que se ejecuta cuando el `CHANGELOG.md` ya tiene la sección de esa versión:

  ```bash
  npm version minor -m "release: v%s"     # o major / patch
  git push --follow-tags
  gh release create v1.1.0 --notes-file notas.md   # el fragmento del CHANGELOG
  ```

## Flujo de trabajo: ramas, verificación y *pull requests*

- **`main`** es producción: Cloudflare Pages publica cada cambio en https://catalogo-componentes-software.pages.dev. Está protegida: solo entra por *pull request* desde `dev`, y solo si la integración continua está en verde.
- **`dev`** es integración. Cloudflare construye cada cambio como *preview* en https://dev.catalogo-componentes-software.pages.dev.
- Un cambio se hace en una **rama creada desde `dev`**, con un nombre que diga qué trae (`componente-firma-electronica`, `fix-delimitaciones-reporte`).

Pasos:

1. `npm run verificar` mientras trabajas; `npm run verificar:todo` antes de abrir el *pull request* (agrega el chequeo de tipos y el `build`, y es lo que corre la integración continua).
2. Revisar en el navegador, en modo claro **y** oscuro. Los problemas visuales aparecen casi siempre en uno solo de los dos.
3. Actualizar `CHANGELOG.md` en `[Sin publicar]`.
4. Abrir el *pull request* **hacia `dev`**. La plantilla trae la lista de comprobación. Un componente nuevo enlaza su *issue* de propuesta; un cambio de identidad lista los vecinos revisados.
5. Con la integración continua en verde y el *preview* de Cloudflare revisado, se hace el *merge* a `dev`. Los cambios acumulados en `dev` pasan a `main` por otro *pull request* cuando se decide publicar.

Los mensajes de *commit* describen el cambio para un lector del repositorio («Agrega el componente Firma electrónica», «Corrige las delimitaciones de Reporte respecto de Dashboard»), en español, sin referencias a conversaciones o planes externos al repositorio.

## Reportar un error

Una errata, un enlace roto, un mapeo que no coincide con la ficha, una captura que no carga: abre un *issue* con la plantilla **«Reportar un error»** (página, qué dice, qué debería decir). Si sabes corregirlo, un *pull request* directo con la corrección es bienvenido; sigue siendo útil abrir el *issue* si el error revela un problema de criterio.

## Licencia de las contribuciones

Al contribuir aceptas que tu aporte quede bajo las mismas licencias que el resto del repositorio, sin condiciones adicionales (*inbound = outbound*). Las licencias del código y del contenido están en definición y se anunciarán en el `README.md`; hasta entonces, las contribuciones se reciben con ese entendimiento. Las capturas de pantalla de sistemas de terceros no se licencian como propias: se usan con fines ilustrativos y se atribuyen al sistema que muestran.
