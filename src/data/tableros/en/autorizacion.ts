import type {TableroData} from '@site/src/components/TableroDigital/types';

export const autorizacion: TableroData = {
  componente: 'Authorization',
  tarjetas: {
    'actualizacion-manual': [
      {titulo: 'Per-Channel Permission Settings', variante: 'opcional'},
      {titulo: 'Role Assignment', variante: 'opcional'},
    ],
    'actualizacion-automatica': [],
    'conceptos-datos': [
      {titulo: 'Role', variante: 'mandatorio'},
      {titulo: 'User', variante: 'mandatorio'},
      {titulo: 'Permission', variante: 'mandatorio'},
    ],
    'salidas-demanda': [],
    'salidas-automaticas': [],
    'procesos-autonomos': [
      {titulo: 'Permission Evaluation', variante: 'mandatorio'},
    ],
  },
};
