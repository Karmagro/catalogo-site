import type {TableroData} from '@site/src/components/TableroDigital/types';

export const mantenedor: TableroData = {
  componente: 'Data Manager',
  tarjetas: {
    'actualizacion-manual': [
      {titulo: 'Actor Creation Form', variante: 'mandatorio'},
      {titulo: 'Actor Editing Form', variante: 'mandatorio'},
    ],
    'actualizacion-automatica': [],
    'conceptos-datos': [
      {titulo: 'Actors', variante: 'mandatorio'},
    ],
    'salidas-demanda': [
      {titulo: 'Actor List', variante: 'mandatorio'},
      {titulo: 'Actor Search', variante: 'opcional'},
      {titulo: 'Actor Export', variante: 'opcional'},
    ],
    'salidas-automaticas': [],
    'procesos-autonomos': [
      {titulo: 'Actor Change History', variante: 'opcional'},
    ],
  },
};
