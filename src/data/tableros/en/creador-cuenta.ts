import type {TableroData} from '@site/src/components/TableroDigital/types';

export const creadorCuenta: TableroData = {
  componente: 'Account Creation',
  tarjetas: {
    'actualizacion-manual': [
      {titulo: 'Registration Form', variante: 'mandatorio'},
    ],
    'actualizacion-automatica': [],
    'conceptos-datos': [
      {titulo: 'User', variante: 'mandatorio'},
    ],
    'salidas-demanda': [],
    'salidas-automaticas': [
      {titulo: 'Welcome Email', variante: 'opcional'},
      {titulo: 'Email Verification Code', variante: 'opcional'},
    ],
    'procesos-autonomos': [],
  },
};
