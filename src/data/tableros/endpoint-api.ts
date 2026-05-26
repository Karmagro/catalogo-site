import type {TableroData} from '@site/src/components/TableroDigital/types';

export const endpointApi: TableroData = {
  componente: 'End-point (API)',
  tarjetas: {
    'entradas-manuales': [],
    'entradas-automaticas': [
      {titulo: 'Solicitud de Geocoding', variante: 'mandatorio'},
      {titulo: 'Solicitud de Cálculo de Ruta', variante: 'mandatorio'},
    ],
    'conceptos-datos': [
      {titulo: 'Coordenadas', variante: 'mandatorio'},
      {titulo: 'Lugar', variante: 'mandatorio'},
      {titulo: 'Ruta', variante: 'mandatorio'},
    ],
    'salidas-demanda': [
      {titulo: 'Respuesta JSON con Geocoding', variante: 'mandatorio'},
      {titulo: 'Respuesta JSON con Ruta', variante: 'mandatorio'},
    ],
    'salidas-automaticas': [],
    'procesos-autonomos': [
      {titulo: 'Cálculo de Rutas', variante: 'mandatorio'},
      {titulo: 'Rate Limiting', variante: 'mandatorio'},
    ],
  },
};
