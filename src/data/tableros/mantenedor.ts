import type {TableroData} from '@site/src/components/TableroDigital/types';

export const mantenedor: TableroData = {
  componente: 'Mantenedor',
  tarjetas: {
    'actualizacion-manual': [
      {titulo: 'Formulario de Alta de Actores', variante: 'mandatorio'},
      {titulo: 'Formulario de Edición de Actores', variante: 'mandatorio'},
    ],
    'actualizacion-automatica': [],
    'conceptos-datos': [
      {titulo: 'Actores', variante: 'mandatorio'},
    ],
    'salidas-demanda': [
      {titulo: 'Listado de Actores', variante: 'mandatorio'},
      {titulo: 'Búsqueda de Actores', variante: 'opcional'},
      {titulo: 'Exportación de Actores', variante: 'opcional'},
    ],
    'salidas-automaticas': [],
    'procesos-autonomos': [
      {titulo: 'Historial de Cambios de Actores', variante: 'opcional'},
    ],
  },
};
