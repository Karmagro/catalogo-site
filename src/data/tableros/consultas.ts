import type {TableroData} from '@site/src/components/TableroDigital/types';

export const consultas: TableroData = {
  componente: 'Consultas',
  tarjetas: {
    'entradas-manuales': [
      {titulo: 'Barra de Búsqueda', variante: 'mandatorio'},
      {titulo: 'Filtros de Búsqueda', variante: 'opcional'},
    ],
    'entradas-automaticas': [],
    'conceptos-datos': [
      {titulo: 'Video', variante: 'mandatorio'},
    ],
    'salidas-demanda': [
      {titulo: 'Lista de Resultados', variante: 'mandatorio'},
      {titulo: 'Sugerencias inteligentes de búsqueda', variante: 'opcional'},
    ],
    'salidas-automaticas': [],
    'procesos-autonomos': [],
  },
};
