import type {TableroData} from '@site/src/components/TableroDigital/types';

export const dashboard: TableroData = {
  componente: 'Dashboard',
  tarjetas: {
    'actualizacion-manual': [],
    'actualizacion-automatica': [],
    'conceptos-datos': [
      {titulo: 'Products', variante: 'mandatorio'},
      {titulo: 'Sales', variante: 'mandatorio'},
    ],
    'salidas-demanda': [
      {titulo: 'Line chart', subtitulo: 'Sales per day/week/month', variante: 'mandatorio'},
      {titulo: 'Bar chart', subtitulo: 'Product stock', variante: 'mandatorio'},
      {titulo: 'Chart export', variante: 'opcional'},
    ],
    'procesos-autonomos': [
      {titulo: 'Sales metrics calculation', variante: 'mandatorio'},
      {titulo: 'Product metrics calculation', variante: 'mandatorio'},
    ],
    'salidas-automaticas': [],
  },
};
