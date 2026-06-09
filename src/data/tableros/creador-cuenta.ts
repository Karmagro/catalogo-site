import type {TableroData} from '@site/src/components/TableroDigital/types';

export const creadorCuenta: TableroData = {
  componente: 'Creador de Cuenta',
  tarjetas: {
    'actualizacion-manual': [
      {titulo: 'Formulario de Registro', variante: 'mandatorio'},
    ],
    'actualizacion-automatica': [],
    'conceptos-datos': [
      {titulo: 'Usuario', variante: 'mandatorio'},
    ],
    'salidas-demanda': [],
    'salidas-automaticas': [
      {titulo: 'Email de Bienvenida', variante: 'opcional'},
      {titulo: 'Código de Verificación de Email', variante: 'opcional'},
    ],
    'procesos-autonomos': [],
  },
};
