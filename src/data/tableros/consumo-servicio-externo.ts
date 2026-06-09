import type {TableroData} from '@site/src/components/TableroDigital/types';

export const consumoServicioExterno: TableroData = {
  componente: 'Consumo de Servicio Externo',
  tarjetas: {
    'actualizacion-manual': [],
    'actualizacion-automatica': [
      {titulo: 'Respuesta de Geocoding', variante: 'mandatorio'},
      {titulo: 'Respuesta de Cálculo de Ruta', variante: 'mandatorio'},
    ],
    'conceptos-datos': [
      {titulo: 'Dirección', variante: 'mandatorio'},
      {titulo: 'Coordenadas', variante: 'mandatorio'},
      {titulo: 'Ruta', variante: 'mandatorio'},
    ],
    'salidas-demanda': [],
    'salidas-automaticas': [
      {titulo: 'Solicitud a Google Maps', variante: 'mandatorio'},
    ],
    'procesos-autonomos': [
      {titulo: 'Armado de Solicitud', variante: 'mandatorio'},
      {titulo: 'Interpretación de Respuesta', variante: 'mandatorio'},
      {titulo: 'Manejo de Fallos y Reintentos', variante: 'opcional'},
    ],
  },
};
