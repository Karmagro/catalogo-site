import type {TableroData} from '@site/src/components/TableroDigital/types';

export const formularioLogin: TableroData = {
  componente: 'Login Form',
  tarjetas: {
    'actualizacion-manual': [],
    'actualizacion-automatica': [],
    'conceptos-datos': [
      {titulo: 'User', variante: 'mandatorio'},
      {titulo: 'Session', variante: 'mandatorio'},
    ],
    'salidas-demanda': [],
    'salidas-automaticas': [
      {titulo: 'Password Recovery Email', variante: 'opcional'},
    ],
    'procesos-autonomos': [],
  },
};
