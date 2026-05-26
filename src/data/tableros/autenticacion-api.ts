import type {TableroData} from '@site/src/components/TableroDigital/types';

export const autenticacionApi: TableroData = {
  componente: 'Autenticación API',
  tarjetas: {
    'entradas-manuales': [],
    'entradas-automaticas': [
      {titulo: 'Recepción de Solicitud OAuth', variante: 'mandatorio'},
    ],
    'conceptos-datos': [
      {titulo: 'Token', variante: 'mandatorio'},
      {titulo: 'Cliente', variante: 'mandatorio'},
    ],
    'salidas-demanda': [],
    'salidas-automaticas': [],
    'procesos-autonomos': [
      {titulo: 'Auditoría', variante: 'opcional'},
      {titulo: 'Limitación de Tasa', variante: 'opcional'},
    ],
  },
};
