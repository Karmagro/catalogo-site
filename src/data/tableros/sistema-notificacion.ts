import type {TableroData} from '@site/src/components/TableroDigital/types';

export const sistemaNotificacion: TableroData = {
  componente: 'Sistema de Notificación',
  tarjetas: {
    'entradas-manuales': [
      {titulo: 'Configuración de Preferencias de Notificación', variante: 'opcional'},
    ],
    'entradas-automaticas': [],
    'conceptos-datos': [],
    'salidas-demanda': [],
    'salidas-automaticas': [
      {titulo: 'Confirmación de Pedido', variante: 'mandatorio'},
      {titulo: 'Alerta de Despacho', variante: 'mandatorio'},
    ],
    'procesos-autonomos': [
      {titulo: 'Evaluación de Eventos de Pedido', variante: 'mandatorio'},
    ],
  },
};
