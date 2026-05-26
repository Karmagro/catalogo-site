import type {TableroData} from '@site/src/components/TableroDigital/types';

export const formularioLogin: TableroData = {
  componente: 'Formulario de Login',
  tarjetas: {
    'entradas-manuales': [
      {titulo: 'Formulario de Login', variante: 'mandatorio'},
      {titulo: 'Formulario de Recuperación de Contraseña', variante: 'opcional'},
    ],
    'entradas-automaticas': [],
    'conceptos-datos': [
      {titulo: 'Usuario', variante: 'mandatorio'},
      {titulo: 'Sesión', variante: 'mandatorio'},
    ],
    'salidas-demanda': [],
    'salidas-automaticas': [
      {titulo: 'Email de Recuperación de Contraseña', variante: 'opcional'},
    ],
    'procesos-autonomos': [],
  },
};
