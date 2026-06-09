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

const tramo = (label: string) => ({
  type: 'html' as const,
  value: label,
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
    'componentes/proceso-interno',

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
