import type {TableroData} from '@site/src/components/TableroDigital/types';

export const baseDatos: TableroData = {
  componente: 'Base de Datos',
  tarjetas: {
    'actualizacion-manual': [],
    'actualizacion-automatica': [],
    'conceptos-datos': [
      {titulo: 'Libro', variante: 'mandatorio'},
      {titulo: 'Cliente', variante: 'mandatorio'},
      {titulo: 'Editorial', variante: 'mandatorio'},
      {titulo: 'Autor', variante: 'mandatorio'},
      {titulo: 'Pedido', variante: 'mandatorio'},
    ],
    'salidas-demanda': [],
    'procesos-autonomos': [
      {titulo: 'Respaldo Automático', variante: 'opcional'},
    ],
    'salidas-automaticas': [],
  },
};
