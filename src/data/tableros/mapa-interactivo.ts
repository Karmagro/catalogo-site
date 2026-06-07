import type {TableroData} from '@site/src/components/TableroDigital/types';

export const mapaInteractivo: TableroData = {
  componente: 'Mapa Interactivo',
  tarjetas: {
    'actualizacion-manual': [],
    'actualizacion-automatica': [],
    'conceptos-datos': [
      {titulo: 'Propiedades', variante: 'mandatorio'},
    ],
    'salidas-demanda': [
      {titulo: 'Mapa con Marcadores', variante: 'mandatorio'},
      {titulo: 'Detalle de Propiedad', variante: 'mandatorio'},
    ],
    'salidas-automaticas': [],
    'procesos-autonomos': [],
  },
};
