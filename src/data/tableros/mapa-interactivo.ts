import type {TableroData} from '@site/src/components/TableroDigital/types';

export const mapaInteractivo: TableroData = {
  componente: 'Mapa Interactivo',
  tarjetas: {
    'entradas-manuales': [
      {titulo: 'Filtros de Mapa', variante: 'opcional'},
      {titulo: 'Mapa con Propiedades', variante: 'mandatorio'},
      {titulo: 'Click Propiedad Información Adicional', variante: 'mandatorio'},
    ],
    'entradas-automaticas': [],
    'conceptos-datos': [
      {titulo: 'Propiedades', variante: 'opcional'},
    ],
    'salidas-demanda': [
      {titulo: 'Mapa con Marcadores', variante: 'mandatorio'},
      {titulo: 'Detalle de Propiedad', variante: 'mandatorio'},
    ],
    'salidas-automaticas': [],
    'procesos-autonomos': [],
  },
};
