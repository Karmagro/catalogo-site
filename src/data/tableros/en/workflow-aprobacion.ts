import type {TableroData} from '@site/src/components/TableroDigital/types';

export const workflowAprobacion: TableroData = {
  componente: 'Approval Workflow',
  tarjetas: {
    'actualizacion-manual': [
      {titulo: 'Approval Decision', variante: 'mandatorio'},
    ],
    'actualizacion-automatica': [],
    'conceptos-datos': [
      {titulo: 'Request', variante: 'mandatorio'},
      {titulo: 'Case State', variante: 'mandatorio'},
    ],
    'salidas-demanda': [
      {titulo: 'Pending Inbox', variante: 'opcional'},
    ],
    'salidas-automaticas': [
      {titulo: 'State Change Notice', variante: 'opcional'},
    ],
    'procesos-autonomos': [
      {titulo: 'Flow Progression', variante: 'mandatorio'},
    ],
  },
};
