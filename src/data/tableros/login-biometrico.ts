import type {TableroData} from '@site/src/components/TableroDigital/types';

export const loginBiometrico: TableroData = {
  componente: 'Login Biométrico',
  tarjetas: {
    'actualizacion-manual': [],
    'actualizacion-automatica': [],
    'conceptos-datos': [
      {titulo: 'Usuario', variante: 'mandatorio'},
      {titulo: 'Plantilla Facial', variante: 'mandatorio'},
    ],
    'salidas-demanda': [],
    'salidas-automaticas': [
      {titulo: 'Notificación por correo de intento fallido', variante: 'opcional'},
    ],
    'procesos-autonomos': [
      {titulo: 'Detección de vida (anti-spoofing)', variante: 'opcional'},
    ],
  },
};
