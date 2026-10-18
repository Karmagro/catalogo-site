import type {TableroData} from '@site/src/components/TableroDigital/types';

export const servicioExpuesto: TableroData = {
  componente: 'Exposed Service',
  tarjetas: {
    'actualizacion-manual': [],
    'actualizacion-automatica': [
      {titulo: 'GPS Position Injection', variante: 'opcional'},
    ],
    'conceptos-datos': [
      {titulo: 'Bus', variante: 'mandatorio'},
      {titulo: 'Route', variante: 'mandatorio'},
      {titulo: 'Arrival Time', variante: 'mandatorio'},
    ],
    'salidas-demanda': [],
    'salidas-automaticas': [
      {titulo: 'Real-Time Position Response', variante: 'mandatorio'},
      {titulo: 'Arrival Times Response', variante: 'mandatorio'},
    ],
    'procesos-autonomos': [
      {titulo: 'Request Handling', variante: 'mandatorio'},
      {titulo: 'Rate Limiting', variante: 'mandatorio'},
    ],
  },
};
