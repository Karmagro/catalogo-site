import type {TableroData} from '@site/src/components/TableroDigital/types';

export const autenticacionApi: TableroData = {
  componente: 'Autenticación API',
  tarjetas: {
    'actualizacion-manual': [],
    'actualizacion-automatica': [
      {titulo: 'Recepción de Solicitud OAuth', variante: 'mandatorio'},
    ],
    'conceptos-datos': [
      {titulo: 'Token', variante: 'mandatorio'},
      {titulo: 'Cliente', variante: 'mandatorio'},
    ],
    'salidas-demanda': [],
    'salidas-automaticas': [],
    'procesos-autonomos': [
      {titulo: 'Validación de Credenciales del Cliente', variante: 'mandatorio'},
      {titulo: 'Auditoría', variante: 'opcional'},
      {titulo: 'Limitación de Tasa', variante: 'opcional'},
    ],
  },
};
