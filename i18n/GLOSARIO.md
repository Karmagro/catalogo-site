# Glosario terminológico ES → EN

Correspondencia entre el vocabulario del catálogo en español y su versión en inglés. Es la referencia para traducir una ficha nueva o corregir una existente: un término que aparece aquí se traduce **siempre igual**, en la prosa, en los post-its del tablero, en la tabla de mapeo y en los rótulos del sitio. Si hace falta un término que no está, se agrega aquí antes de usarlo.

Este archivo vive fuera de `i18n/en/` porque describe la correspondencia entre idiomas; no es contenido de ninguno.

## Convenciones

- **Inglés estadounidense** (*authorization*, *visualization*, *behavior*).
- **Registro académico e impersonal**, en presente, sin contracciones (*does not*, no *doesn't*). El catálogo describe; no le habla al lector de tú.
- **Mayúsculas tipo título** en nombres de componente, nombres de sección del Tablero y rótulos de navegación (*Approval Workflow*, *On-Demand Outputs*). **Mayúscula solo inicial** en los encabezados de los campos de la ficha (*Mandatory capabilities*), igual que en español.
- Coma de Oxford. *e.g.* por «p. ej.»; *i.e.* por «es decir» cuando va entre paréntesis.
- Las rayas (—) del original se conservan.
- Los nombres propios no se traducen: U-Campus, CuentaRUT, Universidad de Chile en las atribuciones formales (*University of Chile* en la prosa).
- Las capturas de pantalla de sistemas en español se conservan: son evidencia de sistemas reales. El pie de imagen lo indica con *(Spanish-language interface)*.

## Lo que no se traduce

| Qué | Ejemplo | Por qué |
|---|---|---|
| *Slugs* y rutas | `/en/docs/componentes/mantenedor` | Los enlaces entre fichas y los colores de etiqueta valen para ambos idiomas sin duplicarse (ver `DECISIONES.md`) |
| Clave y `permalink` de las etiquetas | `autenticación` → `/etiquetas/autenticacion` | Ídem; solo cambia el `label` |
| Identificadores de encabezado | `## Description {/* #descripcion */}` | La misma ancla en los dos idiomas |
| Claves del modelo en los datos | `variante: 'mandatorio'`, `'salidas-demanda'` | Son identificadores de código, no texto |
| Nombres de archivo y de símbolo exportado | `tableros/en/mantenedor.ts` exporta `mantenedor` | El espejo se reconoce por la ruta |

## El Tablero Digital y sus seis secciones

**Tablero Digital → Digital Board.** La página del Tablero en inglés anota la equivalencia: *Tablero Digital* en las fuentes en español; *digital canvas* (y una vez *digital board*) en Ochoa et al.

| Español | Inglés | Abreviatura en la matriz | En el paper del Tablero |
|---|---|---|---|
| Actualización Manual | Manual Update | Manual Upd. | *manual inputs* |
| Actualización Automática | Automatic Update | Automatic Upd. | *autonomous inputs* |
| Conceptos de Datos | Data Concepts | Concepts | *data concepts* |
| Salidas por Demanda | On-Demand Outputs | On-Demand Out. | *on-demand outputs* |
| Salidas Automáticas | Automatic Outputs | Automatic Out. | *autonomous outputs* |
| Procesos Autónomos | Autonomous Processes | Auton. Proc. | *autonomous processes* |

Se sigue el vocabulario del sitio y no el del paper: «Actualización» reemplazó a «Entrada» a propósito (nombra el efecto sobre el repositorio, no el acto de teclear), y esa decisión vale también en inglés. Se conserva además la distinción del español entre *Automatic* (actualizaciones y salidas) y *Autonomous* (procesos).

## Los once campos de la ficha

**Ficha → component sheet** (*sheet* a secas cuando el contexto es claro).

| # | Español | Inglés |
|---|---|---|
| 1 | Alias | Alias |
| 2 | Descripción | Description |
| 3 | Capacidades mandatorias | Mandatory capabilities |
| 4 | Capacidades adicionales | Additional capabilities |
| 5 | Delimitaciones · «Qué no es» | Boundaries · «What it is not» |
| 6 | Flujo de información · Entrada → Salida | Information flow · Input → Output |
| 7 | Modalidades | Variants |
| 8 | Dependencias típicas | Typical dependencies |
| 9 | Ejemplos | Examples |
| 10 | Mapeo al Tablero Digital | Mapping to the Digital Board |
| 11 | Ejemplo de Tablero Digital | Digital Board example |

Tabla de mapeo de cada ficha: **Sección · Vínculo · Observación → Section · Relationship · Notes**. Valores: **Siempre → Always**, **Opcional → Optional**, **No → No**. En leyendas y resúmenes: **Mandatorio → Mandatory**, **Opcional → Optional**, **Ninguno → None**.

## Los 22 componentes

| Español | Inglés |
|---|---|
| Formulario de Login | Login Form |
| Login Biométrico | Biometric Login |
| Autenticación API | API Authentication |
| Autorización | Authorization |
| Creador de Cuenta | Account Creation |
| Gestión de Perfil | Profile Management |
| Mantenedor | Data Manager |
| Formulario de carga | Submission Form |
| Workflow de aprobación | Approval Workflow |
| ETL | ETL |
| Scraper | Scraper |
| Consumo de Servicio Externo | External Service Consumption |
| Proceso Programado | Scheduled Process |
| Proceso Reactivo | Reactive Process |
| Consultas | Queries |
| Reporte | Report |
| Dashboard | Dashboard |
| Mapa Interactivo | Interactive Map |
| Sistema de Notificación | Notification System |
| Servicio Expuesto | Exposed Service |
| Log de Auditoría | Audit Log |
| Base de Datos | Database |

**Alias.** La línea de alias de cada ficha en inglés lista los nombres con que el componente se conoce *en inglés*. Los alias que en la ficha en español ya están en inglés se conservan (*Sign-in*, *Audit trail*, *Web scraper*); los que son español se traducen cuando el término inglés existe y se usa (*Panel de control* → *Control panel*), y se omiten cuando solo tienen sentido en español. El nombre en español del componente entra como alias únicamente cuando es jerga sin equivalente directo: *Mantenedor* y *ABM* en **Data Manager**.

### Nombres con alternativa descartada

- **Data Manager** (Mantenedor). *Maintainer* es una persona en inglés; *CRUD Manager* mete una sigla en el título y duplica el alias. *CRUD* queda como primer alias, que es el que hace el reconocimiento.
- **Submission Form** (Formulario de carga). Lo que lo separa del Mantenedor es la relación con el dato: quien lo llena envía y no vuelve a administrar el registro. *Submission* nombra esa frontera; *Data entry form* también describiría el formulario de alta de un mantenedor, y queda como alias.
- **Account Creation** (Creador de Cuenta). *Sign-up* es más coloquial y queda como alias; *Account Creator* es el calco, pero en inglés nombra a una persona.
- **External Service Consumption** (Consumo de Servicio Externo). Forma pareja con **Exposed Service**: uno expone, el otro consume. *API client* e *Outbound integration* quedan como alias.
- **Variants** (Modalidades). Es el término de la literatura de patrones de software para esta misma sección; *modality* en inglés se asocia a interacción persona-computador o a medicina.
- **Relationship** (Vínculo). *Link* se confunde con un hipervínculo en un sitio web.
- **Component sheet** (Ficha). *Entry* choca con *data entry*; *profile*, con el componente Profile Management.

## Las diez etiquetas

Se muestran en minúscula, como en español. La clave y el `permalink` no cambian.

| Clave | `label` en inglés |
|---|---|
| autenticación | authentication |
| automatización | automation |
| datos | data |
| formularios | forms |
| geo | geo |
| integración | integration |
| notificaciones | notifications |
| procesamiento | processing |
| seguridad | security |
| visualización | visualization |

## Navegación del sitio

| Español | Inglés |
|---|---|
| Catálogo de Componentes | Component Catalog |
| Componentes de software recurrentes para sistemas de información | Recurring software components for information systems |
| Inicio | Home |
| Por Componente | By Component |
| Por Sección | By Section |
| Por Etiquetas | By Tag |
| Tablero Digital | Digital Board |
| Sobre el Catálogo | About the Catalog |
| Créditos | Credits |

Tramos del menú lateral: Acceso y cuentas → **Access and accounts** · Gestión de datos → **Data management** · Ingesta automática → **Automated ingestion** · Procesamiento interno → **Internal processing** · Consulta y visualización → **Querying and visualization** · Comunicación y servicios → **Communication and services** · Registro e infraestructura → **Logging and infrastructure**.

## Vocabulario recurrente

| Español | Inglés |
|---|---|
| componente recurrente | recurring component |
| sistema de información | information system |
| catálogo | catalog |
| campo (de la ficha) | field |
| capacidad | capability |
| mandatorio / opcional | mandatory / optional |
| delimitación | boundary |
| modalidad | variant |
| mapeo · mapear | mapping · to map |
| vínculo (componente ↔ sección) | relationship |
| un componente *toca* una sección | a component *touches* a section |
| transversal | cross-cutting |
| sección (del Tablero) | section |
| post-it | post-it |
| repositorio de datos | data repository |
| registro (fila de datos) | record |
| registro (bitácora) | log |
| entidad | entity |
| usuario · perfil · rol · permiso | user · profile · role · permission |
| alcance (de un sistema) | scope |
| requisito | requirement |
| *stakeholder* | stakeholder |
| etiqueta | tag |
| memoria (de título) | thesis |
| profesor guía · co-guía | thesis advisor · co-advisor |

## Cómo se producen las traducciones

Las traducciones al inglés se redactan con asistencia de un modelo de lenguaje, a partir de este glosario, y las revisa el autor del catálogo: primero el glosario, luego dos fichas piloto, después el resto por lotes. Ningún proceso automático reescribe una traducción ya revisada.
