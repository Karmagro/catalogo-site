import type {TableroData} from '@site/src/components/TableroDigital/types';

export const reporte: TableroData = {
  componente: 'Report',
  tarjetas: {
    'actualizacion-manual': [],
    'actualizacion-automatica': [],
    'conceptos-datos': [
      {titulo: 'Account', variante: 'mandatorio'},
      {titulo: 'Transaction', variante: 'mandatorio'},
    ],
    'salidas-demanda': [
      {titulo: 'Downloadable Statement', variante: 'mandatorio'},
    ],
    'salidas-automaticas': [
      {titulo: 'Monthly Statement Email', variante: 'opcional'},
    ],
    'procesos-autonomos': [
      {titulo: 'Monthly Statement Generation', variante: 'mandatorio'},
    ],
  },
};
