import type {TableroData} from '@site/src/components/TableroDigital/types';

export const baseDatos: TableroData = {
  componente: 'Database',
  tarjetas: {
    'actualizacion-manual': [],
    'actualizacion-automatica': [],
    'conceptos-datos': [
      {titulo: 'Book', variante: 'mandatorio'},
      {titulo: 'Customer', variante: 'mandatorio'},
      {titulo: 'Publisher', variante: 'mandatorio'},
      {titulo: 'Author', variante: 'mandatorio'},
      {titulo: 'Order', variante: 'mandatorio'},
    ],
    'salidas-demanda': [],
    'procesos-autonomos': [
      {titulo: 'Automatic Backup', variante: 'opcional'},
    ],
    'salidas-automaticas': [],
  },
};
