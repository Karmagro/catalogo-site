import type {TableroData} from '@site/src/components/TableroDigital/types';

export const loginBiometrico: TableroData = {
  componente: 'Biometric Login',
  tarjetas: {
    'actualizacion-manual': [],
    'actualizacion-automatica': [],
    'conceptos-datos': [
      {titulo: 'User', variante: 'mandatorio'},
      {titulo: 'Facial Template', variante: 'mandatorio'},
    ],
    'salidas-demanda': [],
    'salidas-automaticas': [
      {titulo: 'Failed attempt email notification', variante: 'opcional'},
    ],
    'procesos-autonomos': [
      {titulo: 'Liveness detection (anti-spoofing)', variante: 'opcional'},
    ],
  },
};
