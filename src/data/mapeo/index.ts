import type {MapeoComponente, Seccion, Vinculo} from '@site/src/components/TableroDigital/types';

/**
 * Vínculo de cada componente con las seis secciones del Tablero Digital.
 * Única fuente del mapeo: de aquí salen la rejilla de cada ficha
 * (<MapeoTablero />), la matriz consolidada y la lectura por sección.
 * El orden de las entradas es el de la matriz (el de la memoria).
 */
export const MAPEO: MapeoComponente[] = [
  {
    slug: 'formulario-login',
    nombre: 'Formulario de Login',
    vinculos: {
      'actualizacion-manual': null,
      'actualizacion-automatica': null,
      'conceptos-datos': 'mandatorio',
      'salidas-demanda': null,
      'salidas-automaticas': 'opcional',
      'procesos-autonomos': null,
    },
  },
  {
    slug: 'login-biometrico',
    nombre: 'Login Biométrico',
    vinculos: {
      'actualizacion-manual': null,
      'actualizacion-automatica': null,
      'conceptos-datos': 'mandatorio',
      'salidas-demanda': null,
      'salidas-automaticas': 'opcional',
      'procesos-autonomos': 'opcional',
    },
  },
  {
    slug: 'autenticacion-api',
    nombre: 'Autenticación API',
    vinculos: {
      'actualizacion-manual': null,
      'actualizacion-automatica': 'mandatorio',
      'conceptos-datos': 'mandatorio',
      'salidas-demanda': null,
      'salidas-automaticas': null,
      'procesos-autonomos': 'mandatorio',
    },
  },
  {
    slug: 'creador-cuenta',
    nombre: 'Creador de Cuenta',
    vinculos: {
      'actualizacion-manual': 'mandatorio',
      'actualizacion-automatica': null,
      'conceptos-datos': 'mandatorio',
      'salidas-demanda': null,
      'salidas-automaticas': 'opcional',
      'procesos-autonomos': null,
    },
  },
  {
    slug: 'gestion-perfil',
    nombre: 'Gestión de Perfil',
    vinculos: {
      'actualizacion-manual': 'mandatorio',
      'actualizacion-automatica': null,
      'conceptos-datos': 'mandatorio',
      'salidas-demanda': 'mandatorio',
      'salidas-automaticas': 'opcional',
      'procesos-autonomos': null,
    },
  },
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
  {
    slug: 'formulario-carga',
    nombre: 'Formulario de carga',
    vinculos: {
      'actualizacion-manual': 'mandatorio',
      'actualizacion-automatica': null,
      'conceptos-datos': 'mandatorio',
      'salidas-demanda': null,
      'salidas-automaticas': 'opcional',
      'procesos-autonomos': null,
    },
  },
  {
    slug: 'workflow-aprobacion',
    nombre: 'Workflow de aprobación',
    vinculos: {
      'actualizacion-manual': 'mandatorio',
      'actualizacion-automatica': null,
      'conceptos-datos': 'mandatorio',
      'salidas-demanda': 'opcional',
      'salidas-automaticas': 'opcional',
      'procesos-autonomos': 'mandatorio',
    },
  },
  {
    slug: 'dashboard',
    nombre: 'Dashboard',
    vinculos: {
      'actualizacion-manual': null,
      'actualizacion-automatica': null,
      'conceptos-datos': 'mandatorio',
      'salidas-demanda': 'mandatorio',
      'salidas-automaticas': null,
      'procesos-autonomos': 'mandatorio',
    },
  },
  {
    slug: 'sistema-notificacion',
    nombre: 'Sistema de Notificación',
    vinculos: {
      'actualizacion-manual': 'opcional',
      'actualizacion-automatica': null,
      'conceptos-datos': 'mandatorio',
      'salidas-demanda': null,
      'salidas-automaticas': 'mandatorio',
      'procesos-autonomos': 'mandatorio',
    },
  },
  {
    slug: 'etl',
    nombre: 'ETL',
    vinculos: {
      'actualizacion-manual': null,
      'actualizacion-automatica': 'mandatorio',
      'conceptos-datos': 'mandatorio',
      'salidas-demanda': null,
      'salidas-automaticas': null,
      'procesos-autonomos': 'mandatorio',
    },
  },
  {
    slug: 'scraper',
    nombre: 'Scraper',
    vinculos: {
      'actualizacion-manual': null,
      'actualizacion-automatica': 'mandatorio',
      'conceptos-datos': 'mandatorio',
      'salidas-demanda': null,
      'salidas-automaticas': null,
      'procesos-autonomos': 'mandatorio',
    },
  },
  {
    slug: 'proceso-programado',
    nombre: 'Proceso Programado',
    vinculos: {
      'actualizacion-manual': null,
      'actualizacion-automatica': null,
      'conceptos-datos': 'mandatorio',
      'salidas-demanda': 'opcional',
      'salidas-automaticas': 'opcional',
      'procesos-autonomos': 'mandatorio',
    },
  },
  {
    slug: 'proceso-reactivo',
    nombre: 'Proceso Reactivo',
    vinculos: {
      'actualizacion-manual': null,
      'actualizacion-automatica': null,
      'conceptos-datos': 'mandatorio',
      'salidas-demanda': null,
      'salidas-automaticas': 'opcional',
      'procesos-autonomos': 'mandatorio',
    },
  },
  {
    slug: 'consultas',
    nombre: 'Consultas',
    vinculos: {
      'actualizacion-manual': null,
      'actualizacion-automatica': null,
      'conceptos-datos': 'mandatorio',
      'salidas-demanda': 'mandatorio',
      'salidas-automaticas': null,
      'procesos-autonomos': null,
    },
  },
  {
    slug: 'reporte',
    nombre: 'Reporte',
    vinculos: {
      'actualizacion-manual': null,
      'actualizacion-automatica': null,
      'conceptos-datos': 'mandatorio',
      'salidas-demanda': 'mandatorio',
      'salidas-automaticas': 'opcional',
      'procesos-autonomos': 'mandatorio',
    },
  },
  {
    slug: 'mapa-interactivo',
    nombre: 'Mapa Interactivo',
    vinculos: {
      'actualizacion-manual': null,
      'actualizacion-automatica': null,
      'conceptos-datos': 'mandatorio',
      'salidas-demanda': 'mandatorio',
      'salidas-automaticas': null,
      'procesos-autonomos': null,
    },
  },
  {
    slug: 'log-auditoria',
    nombre: 'Log de Auditoría',
    vinculos: {
      'actualizacion-manual': null,
      'actualizacion-automatica': null,
      'conceptos-datos': 'mandatorio',
      'salidas-demanda': 'opcional',
      'salidas-automaticas': null,
      'procesos-autonomos': 'mandatorio',
    },
  },
  {
    slug: 'servicio-expuesto',
    nombre: 'Servicio Expuesto',
    vinculos: {
      'actualizacion-manual': null,
      'actualizacion-automatica': 'opcional',
      'conceptos-datos': 'mandatorio',
      'salidas-demanda': null,
      'salidas-automaticas': 'mandatorio',
      'procesos-autonomos': 'mandatorio',
    },
  },
  {
    slug: 'consumo-servicio-externo',
    nombre: 'Consumo de Servicio Externo',
    vinculos: {
      'actualizacion-manual': null,
      'actualizacion-automatica': 'mandatorio',
      'conceptos-datos': 'mandatorio',
      'salidas-demanda': null,
      'salidas-automaticas': 'mandatorio',
      'procesos-autonomos': 'mandatorio',
    },
  },
  {
    slug: 'autorizacion',
    nombre: 'Autorización',
    vinculos: {
      'actualizacion-manual': 'opcional',
      'actualizacion-automatica': null,
      'conceptos-datos': 'mandatorio',
      'salidas-demanda': null,
      'salidas-automaticas': null,
      'procesos-autonomos': 'mandatorio',
    },
  },
  {
    slug: 'base-datos',
    nombre: 'Base de Datos',
    vinculos: {
      'actualizacion-manual': null,
      'actualizacion-automatica': null,
      'conceptos-datos': 'mandatorio',
      'salidas-demanda': null,
      'salidas-automaticas': null,
      'procesos-autonomos': 'opcional',
    },
  },
];

/** Orden de las secciones tal como se leen en la ficha (flujo de la información). */
export const SECCIONES_FLUJO: Seccion[] = [
  'actualizacion-manual',
  'actualizacion-automatica',
  'conceptos-datos',
  'salidas-demanda',
  'salidas-automaticas',
  'procesos-autonomos',
];

/** Entrada del mapeo de un componente. Falla en build si el slug no existe. */
export function mapeoDe(slug: string): MapeoComponente {
  const entrada = MAPEO.find((m) => m.slug === slug);
  if (!entrada) {
    throw new Error(`No hay mapeo declarado para el componente "${slug}" en src/data/mapeo`);
  }
  return entrada;
}

/** Componentes cuyo vínculo con `seccion` es `vinculo`, en el orden de la matriz. */
export function porSeccion(seccion: Seccion, vinculo: Exclude<Vinculo, null>): MapeoComponente[] {
  return MAPEO.filter((m) => m.vinculos[seccion] === vinculo);
}
