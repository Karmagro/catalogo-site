import type {TableroData} from '@site/src/components/TableroDigital/types';

export const workflowAprobacion: TableroData = {
  componente: 'Workflow de aprobación',
  tarjetas: {
    'actualizacion-manual': [
      {titulo: 'Decisión de Aprobación', variante: 'mandatorio'},
    ],
    'actualizacion-automatica': [],
    'conceptos-datos': [
      {titulo: 'Solicitud', variante: 'mandatorio'},
      {titulo: 'Estado del Caso', variante: 'mandatorio'},
    ],
    'salidas-demanda': [
      {titulo: 'Bandeja de Pendientes', variante: 'opcional'},
    ],
    'salidas-automaticas': [
      {titulo: 'Aviso de Cambio de Estado', variante: 'opcional'},
    ],
    'procesos-autonomos': [
      {titulo: 'Avance del Flujo', variante: 'mandatorio'},
    ],
  },
};
