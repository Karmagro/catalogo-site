import type {TableroData} from '@site/src/components/TableroDigital/types';

export const consumoServicioExterno: TableroData = {
  componente: 'External Service Consumption',
  tarjetas: {
    'actualizacion-manual': [],
    'actualizacion-automatica': [
      {titulo: 'Geocoding Response', variante: 'mandatorio'},
      {titulo: 'Route Calculation Response', variante: 'mandatorio'},
    ],
    'conceptos-datos': [
      {titulo: 'Address', variante: 'mandatorio'},
      {titulo: 'Coordinates', variante: 'mandatorio'},
      {titulo: 'Route', variante: 'mandatorio'},
    ],
    'salidas-demanda': [],
    'salidas-automaticas': [
      {titulo: 'Request to Google Maps', variante: 'mandatorio'},
    ],
    'procesos-autonomos': [
      {titulo: 'Request Building', variante: 'mandatorio'},
      {titulo: 'Response Interpretation', variante: 'mandatorio'},
      {titulo: 'Failure Handling and Retries', variante: 'opcional'},
    ],
  },
};
