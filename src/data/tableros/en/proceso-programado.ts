import type {TableroData} from '@site/src/components/TableroDigital/types';

export const procesoProgramado: TableroData = {
  componente: 'Scheduled Process',
  tarjetas: {
    'actualizacion-manual': [],
    'actualizacion-automatica': [],
    'conceptos-datos': [
      {titulo: 'Records to Reconcile', variante: 'mandatorio'},
      {titulo: 'Detected Inconsistencies', variante: 'mandatorio'},
    ],
    'salidas-demanda': [
      {titulo: 'On-Demand Verification', variante: 'opcional'},
    ],
    'salidas-automaticas': [
      {titulo: 'Inconsistency Alert', variante: 'opcional'},
    ],
    'procesos-autonomos': [
      {titulo: 'Nightly Reconciliation', variante: 'mandatorio'},
      {titulo: 'Execution Logs', variante: 'opcional'},
    ],
  },
};
