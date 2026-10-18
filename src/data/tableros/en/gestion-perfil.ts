import type {TableroData} from '@site/src/components/TableroDigital/types';

export const gestionPerfil: TableroData = {
  componente: 'Profile Management',
  tarjetas: {
    'actualizacion-manual': [
      {titulo: 'Profile Editing Form', variante: 'mandatorio'},
      {titulo: '2FA Setup', variante: 'opcional'},
      {titulo: 'Remote Session Sign-Out', variante: 'opcional'},
    ],
    'actualizacion-automatica': [],
    'conceptos-datos': [
      {titulo: 'User', variante: 'mandatorio'},
      {titulo: 'Session', variante: 'opcional'},
    ],
    'salidas-demanda': [
      {titulo: 'Profile data', variante: 'mandatorio'},
      {titulo: 'Active Session List', variante: 'opcional'},
    ],
    'salidas-automaticas': [
      {titulo: 'Change Confirmation Email', variante: 'opcional'},
      {titulo: 'Verification Code', variante: 'opcional'},
    ],
    'procesos-autonomos': [],
  },
};
