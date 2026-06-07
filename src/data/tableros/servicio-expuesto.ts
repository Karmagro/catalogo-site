import type {TableroData} from '@site/src/components/TableroDigital/types';

export const servicioExpuesto: TableroData = {
  componente: 'Servicio Expuesto',
  tarjetas: {
    'actualizacion-manual': [],
    'actualizacion-automatica': [
      {titulo: 'Inyección de Posición GPS', variante: 'opcional'},
    ],
    'conceptos-datos': [
      {titulo: 'Bus', variante: 'mandatorio'},
      {titulo: 'Recorrido', variante: 'mandatorio'},
      {titulo: 'Tiempo de Llegada', variante: 'mandatorio'},
    ],
    'salidas-demanda': [],
    'salidas-automaticas': [
      {titulo: 'Respuesta con Posición en Tiempo Real', variante: 'mandatorio'},
      {titulo: 'Respuesta con Tiempos de Llegada', variante: 'mandatorio'},
    ],
    'procesos-autonomos': [
      {titulo: 'Atención de Solicitudes', variante: 'mandatorio'},
      {titulo: 'Rate Limiting', variante: 'mandatorio'},
    ],
  },
};
