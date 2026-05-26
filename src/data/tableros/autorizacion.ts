import type {TableroData} from '@site/src/components/TableroDigital/types';

export const autorizacion: TableroData = {
  componente: 'Autorización',
  tarjetas: {
    'entradas-manuales': [
      {titulo: 'Configuración de Permisos por Canal', variante: 'opcional'},
      {titulo: 'Asignación de Roles', variante: 'opcional'},
    ],
    'entradas-automaticas': [],
    'conceptos-datos': [
      {titulo: 'Rol', variante: 'mandatorio'},
      {titulo: 'Usuario', variante: 'mandatorio'},
      {titulo: 'Permiso', variante: 'mandatorio'},
    ],
    'salidas-demanda': [],
    'salidas-automaticas': [],
    'procesos-autonomos': [
      {titulo: 'Evaluación de Permisos', variante: 'mandatorio'},
    ],
  },
};
