import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Orden NARRATIVO del catálogo, no taxonómico.
 *
 * Los rótulos de tramo (`type: 'html'`) NO son categorías del modelo: no son las
 * secciones del Tablero ni las etiquetas, no son clicables y no afirman pertenencia.
 * Son andamiaje de lectura — nombran fases del ciclo de vida de la información en un
 * sistema de información, para que la lista no se lea como "una bolsa de cosas".
 *
 * La pertenencia formal (multi-sección) vive en "Por Sección" y "Por Etiquetas",
 * donde una tabla/grid sí puede representar que un componente toca varias secciones.
 * Un árbol (el sidebar) no puede: por eso aquí solo se ORDENA, no se AGRUPA.
 */

/**
 * Docusaurus no traduce los ítems `type: 'html'` del sidebar (su sistema de
 * traducción solo cubre categorías, enlaces y documentos). Como este archivo se
 * carga en Node, el rótulo se elige por la variable que Docusaurus fija en cada
 * build de idioma. Un tramo sin entrada aquí se muestra en español.
 */
const TRAMOS_EN: Record<string, string> = {
  'Acceso y cuentas': 'Access and accounts',
  'Gestión de datos': 'Data management',
  'Ingesta automática': 'Automated ingestion',
  'Procesamiento interno': 'Internal processing',
  'Consulta y visualización': 'Querying and visualization',
  'Comunicación y servicios': 'Communication and services',
  'Registro e infraestructura': 'Logging and infrastructure',
};

const enIngles = process.env.DOCUSAURUS_CURRENT_LOCALE === 'en';

const tramo = (label: string) => ({
  type: 'html' as const,
  value: enIngles ? (TRAMOS_EN[label] ?? label) : label,
  className: 'sidebar-tramo',
  defaultStyle: true,
});

const sidebars: SidebarsConfig = {
  componentesSidebar: [
    tramo('Acceso y cuentas'),
    'componentes/formulario-login',
    'componentes/login-biometrico',
    'componentes/autenticacion-api',
    'componentes/autorizacion',
    'componentes/creador-cuenta',
    'componentes/gestion-perfil',

    tramo('Gestión de datos'),
    'componentes/mantenedor',
    'componentes/formulario-carga',
    'componentes/workflow-aprobacion',

    tramo('Ingesta automática'),
    'componentes/etl',
    'componentes/scraper',
    'componentes/consumo-servicio-externo',

    tramo('Procesamiento interno'),
    'componentes/proceso-programado',
    'componentes/proceso-reactivo',

    tramo('Consulta y visualización'),
    'componentes/consultas',
    'componentes/reporte',
    'componentes/dashboard',
    'componentes/mapa-interactivo',

    tramo('Comunicación y servicios'),
    'componentes/sistema-notificacion',
    'componentes/servicio-expuesto',

    tramo('Registro e infraestructura'),
    'componentes/log-auditoria',
    'componentes/base-datos',
  ],
};

export default sidebars;
