import type {TableroData} from '@site/src/components/TableroDigital/types';

export const loginBiometrico: TableroData = {
  componente: 'Login Biométrico',
  tarjetas: {
    'entradas-manuales': [
      {titulo: 'Captura Facial', variante: 'mandatorio'},
      {titulo: 'Ingreso de PIN como Respaldo', variante: 'opcional'},
    ],
    'entradas-automaticas': [],
    'conceptos-datos': [
      {titulo: 'Usuario', variante: 'mandatorio'},
      {titulo: 'Plantilla Facial', variante: 'mandatorio'},
    ],
    'salidas-demanda': [
      {titulo: 'Notificación por correo de intento fallido', variante: 'opcional'},
    ],
    'salidas-automaticas': [],
    'procesos-autonomos': [],
  },
};
