# Registro de decisiones

Por qué el catálogo y el sitio son como son. Una entrada por decisión, con la fecha, qué se decidió, por qué y qué se descartó. Sirve para no rediscutir lo ya resuelto y para que quien herede el proyecto sepa qué cambios son de fondo y cuáles de forma. Las entradas van en orden cronológico; las nuevas se agregan al final.

Formato: **fecha · decisión** · por qué · qué NO se hace.

---

## 2026-04-14 · El catálogo mapea componentes al Tablero; no los clasifica

**Decisión.** Un componente no pertenece a una sección del Tablero Digital ni a una categoría. Cada componente es un flujo transversal que **toca** varias secciones a la vez, de forma mandatoria u opcional. La relación se representa como una matriz componentes × secciones, no como un árbol.

**Por qué.** El modelo anterior decía «un Mantenedor *es* una entrada manual», y eso es falso: un Mantenedor también define conceptos de datos y produce salidas por demanda. Atar un componente a una sola sección obliga a elegir una «sección principal» arbitraria y esconde el resto. Además, las taxonomías de componentes existentes en la literatura clasifican por características técnicas; lo que este catálogo aporta es la relación con el alcance del sistema, y esa relación es múltiple.

**Qué NO se hace.** No hay categorías de componentes, ni «familias», ni secciones que «contengan» componentes. Un post-it del Tablero es una intención o necesidad, no un componente. Lo que sí sigue vigente es identificar a qué componente corresponde un requisito de software: eso es usar el catálogo, no clasificar sus componentes.

## 2026-06-06 · Las secciones «Entradas» del Tablero pasan a llamarse Actualización Manual y Actualización Automática

**Decisión.** Las dos secciones que reciben información se llaman **Actualización Manual** (un operador humano crea, modifica o elimina datos persistentes mediante la interfaz) y **Actualización Automática** (el sistema incorpora o actualiza datos sin intervención humana). El identificador interno también cambió (`actualizacion-manual`, `actualizacion-automatica`), no solo la etiqueta visible.

**Por qué.** «Entradas» se leía como el acto de teclear, y entonces cualquier formulario contaba: los criterios de una búsqueda, las credenciales de un login. Lo que la sección recoge es el **efecto sobre el repositorio de datos**: si el ingreso no crea, modifica ni elimina un dato persistente, no es Actualización Manual. Con el nombre nuevo, el criterio para llenar la columna es una sola pregunta. El renombre profundo (identificador incluido) se prefirió a cambiar solo la etiqueta para que el código no contradiga a la interfaz.

**Qué NO se hace.** No se renombra ninguna otra sección; las cuatro restantes ya describen efectos y no actos.

## 2026-06-06 · End-point (API) se divide en Servicio Expuesto y Consumo de Servicio Externo

**Decisión.** El componente End-point (API) desaparece y se reemplaza por dos: **Servicio Expuesto** (el sistema es proveedor: publica puntos de acceso que otros invocan) y **Consumo de Servicio Externo** (el sistema es cliente: invoca un servicio de un tercero).

**Por qué.** Exponer y consumir son funciones esenciales distintas, con mapeos distintos al Tablero: el consumo es siempre Actualización Automática (trae datos de afuera), la exposición solo a veces. Un componente con dos modalidades habría obligado a un mapeo ambiguo en esa celda.

**Qué NO se hace.** No se conserva End-point como componente paraguas.

## 2026-06-08 · El sidebar ordena las fichas en un recorrido; no las agrupa en categorías

**Decisión.** La barra lateral es una lista plana con los componentes en el orden del ciclo de vida de la información en un sistema (acceso, gestión de datos, ingesta, procesamiento, consulta, comunicación, registro), con rótulos de tramo no clicables entre medio.

**Por qué.** Ordenar y agrupar no son lo mismo. Agrupar afirma pertenencia, y con componentes que tocan varias secciones eso miente o reintroduce la «sección principal» que la decisión del 14 de abril descartó. Ordenar solo sugiere una secuencia de lectura. La pertenencia formal, que es múltiple, vive en Por Sección y Por Etiquetas, donde una matriz sí puede representarla.

**Qué NO se hace.** Los rótulos de tramo no son las secciones del Tablero ni las etiquetas, no enlazan a nada y no se usan en ningún otro lugar del sitio. No se crean categorías en el sidebar ni en la matriz.

## 2026-06-08 · La orientación al usuario es un banner, no una página

**Decisión.** Las cuatro formas de navegar el catálogo (buscar, Por Sección, Por Etiquetas, recorrer) se presentan en un banner que aparece solo en la primera visita y que se puede reabrir desde el botón `?` de la navbar.

**Por qué.** Una página «Cómo navegar» sería tan invisible como las vías que intenta revelar: quien no sabe que existe Por Sección tampoco va a buscar la página que lo explica. El tutorial tiene que estar en la ruta obligatoria del primer visitante.

**Qué NO se hace.** No hay página de ayuda ni recorrido guiado paso a paso.

## 2026-06-23 · Proceso Interno se divide en Proceso Programado y Proceso Reactivo

**Decisión.** El componente Proceso Interno se reemplaza por **Proceso Programado** (disparado por una agenda: reloj, *cron*, lote) y **Proceso Reactivo** (disparado por un cambio en los datos internos del sistema).

**Por qué.** Un solo componente de «procesamiento autónomo» parecía cubrir toda la sección Procesos Autónomos del Tablero, y el disparador (agenda o evento) es la distinción estándar en la industria entre trabajos en segundo plano. Separarlos deja dos componentes con forma reconocible en vez de un comodín.

**Qué NO se hace.** Ninguno de los dos recibe entradas externas: un *webhook* es una entrada externa y corresponde a Servicio Expuesto. Ambos operan sobre datos que ya están en el sistema; lo que los separa de ETL y Scraper es exactamente eso.

## 2026-08-29 · Los slugs y los permalinks se mantienen en español en todos los idiomas

**Decisión.** Cuando el sitio tenga un segundo idioma, las URL de las fichas (`/docs/componentes/mantenedor`), los identificadores de documento y los *permalinks* de etiqueta (`/docs/etiquetas/datos`) no se traducen.

**Por qué.** Los enlaces cruzados entre fichas son decenas y siguen válidos en todos los idiomas sin tocarlos; los colores de etiqueta se asignan por sufijo de URL y siguen funcionando; el sidebar es uno solo. Traducir los *slugs* tiene un costo permanente (dos grafos de enlaces sincronizados) y un beneficio cosmético.

**Qué NO se hace.** No se traducen las rutas ni la base de etiquetas. Lo único visible es que la ruta de una etiqueta en inglés será `/en/docs/etiquetas/datos` con el rótulo en inglés.

## 2026-09-07 · Catálogo y sitio comparten un único número de versión

**Decisión.** Un solo número, escrito solo en `package.json`, con Versionado Semántico leído para un catálogo: mayor cuando cambia el modelo o se elimina, divide o fusiona un componente; menor cuando se agrega sin romper; parche cuando se corrige. El `CHANGELOG.md` abre cada versión con una sección Catálogo.

**Por qué.** Separar «versión del contenido» de «versión del software» obliga a explicar dos números a gente que solo quiere saber si el catálogo cambió desde que lo leyó. Para un catálogo, compatibilidad significa que lo que alguien citó, enlazó o aprendió sigue siendo válido.

**Qué NO se hace.** No se escribe la versión en más de un lugar. No se publica el paquete en npm.

## 2026-09-07 · El mapeo al Tablero se declara una sola vez

**Decisión.** El vínculo de cada componente con las seis secciones vive en `src/data/mapeo/index.ts`. La rejilla de cada ficha, la matriz de Por Sección y las listas por sección se dibujan desde ahí.

**Por qué.** Antes cada una de esas tres vistas se escribía a mano y podían contradecirse (y se contradijeron). Con una fuente, agregar un componente es una entrada y las tres vistas se actualizan solas; el script de verificación puede cruzar esa fuente con los post-its del tablero y con la tabla de observaciones de la ficha.

**Qué NO se hace.** La tabla de observaciones y los post-its del tablero siguen siendo contenido propio de cada ficha: son prosa y ejemplos, no datos derivables.

## 2026-09-07 · Diez etiquetas, todas con color, declaradas en un archivo

**Decisión.** Las etiquetas se declaran en `docs/tags.yml` con descripción; una etiqueta no declarada rompe el build. Las diez tienen color, tomado de la sección del Tablero con la que más se relacionan, incluidas las tres que hoy tienen un solo componente (`formularios`, `geo`, `notificaciones`).

**Por qué.** La memoria publicó las diez; quitar o fusionar etiquetas cambiaría lo publicado. Darles color es coherente y barato. Declararlas en un archivo evita que una errata en el *frontmatter* cree una etiqueta nueva en silencio.

**Qué NO se hace.** No se fusionan ni eliminan etiquetas por ahora; se revisará cuando entre el componente 23. El script avisa de las que tienen menos de dos componentes para no perderlo de vista.

## 2026-09-07 · La verificación del catálogo es un script sin dependencias, y la integración continua la exige

**Decisión.** `npm run verificar` comprueba la coherencia del catálogo en menos de un segundo; `verificar:todo` suma tipos y build. GitHub Actions lo corre en cada *pull request* y `main` no acepta un *merge* sin ese check en verde.

**Por qué.** Un catálogo con 22 fichas, 22 tableros, 22 galerías, un mapeo y un sidebar tiene demasiadas correspondencias para revisarlas a mano en cada cambio. Que la comprobación sea rápida y no necesite red hace que se corra siempre; que la exija la protección de `main` hace que no dependa de que alguien se acuerde.

**Qué NO se hace.** El script no juzga si un componente merece estar: eso es criterio, no comprobación. No se agregan ESLint, Prettier ni otras herramientas hasta que exista la necesidad concreta.

## 2026-09-07 · Node 24, fijado en el repositorio

**Decisión.** `.nvmrc` fija Node 24; `package.json` exige 22.18 como mínimo. La integración continua y Cloudflare leen esa versión del archivo.

**Por qué.** El script de verificación importa los datos TypeScript sin compilarlos, con el *type stripping* nativo de Node, disponible desde 22.18. Fijar una versión en el repositorio evita que el sitio construya distinto en cada máquina.

**Qué NO se hace.** No se agrega un paso de compilación para el script ni se convierte el paquete a módulos ES.
