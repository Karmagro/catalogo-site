import type {TableroData} from '@site/src/components/TableroDigital/types';

export const sistemaNotificacion: TableroData = {
  componente: 'Notification System',
  tarjetas: {
    'actualizacion-manual': [
      {titulo: 'Notification Preference Settings', variante: 'opcional'},
    ],
    'actualizacion-automatica': [],
    'conceptos-datos': [
      {titulo: 'Notification', variante: 'mandatorio'},
      {titulo: 'Message Template', variante: 'mandatorio'},
    ],
    'salidas-demanda': [],
    'salidas-automaticas': [
      {titulo: 'Order Confirmation', variante: 'mandatorio'},
      {titulo: 'Shipping Alert', variante: 'mandatorio'},
    ],
    'procesos-autonomos': [
      {titulo: 'Order Event Evaluation', variante: 'mandatorio'},
    ],
  },
};
