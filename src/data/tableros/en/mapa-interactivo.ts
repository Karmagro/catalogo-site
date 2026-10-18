import type {TableroData} from '@site/src/components/TableroDigital/types';

export const mapaInteractivo: TableroData = {
  componente: 'Interactive Map',
  tarjetas: {
    'actualizacion-manual': [],
    'actualizacion-automatica': [],
    'conceptos-datos': [
      {titulo: 'Properties', variante: 'mandatorio'},
    ],
    'salidas-demanda': [
      {titulo: 'Map with Markers', variante: 'mandatorio'},
      {titulo: 'Property Detail', variante: 'mandatorio'},
    ],
    'salidas-automaticas': [],
    'procesos-autonomos': [],
  },
};
