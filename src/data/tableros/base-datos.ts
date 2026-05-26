import type {TableroData} from '@site/src/components/TableroDigital/types';

export const baseDatos: TableroData = {
  componente: 'Base de Datos',
  tarjetas: {
    'entradas-manuales': [],
    'entradas-automaticas': [],
    'conceptos-datos': [
      {titulo: 'Libro', variante: 'mandatorio'},
      {titulo: 'Cliente', variante: 'mandatorio'},
      {titulo: 'Editorial', variante: 'mandatorio'},
      {titulo: 'Autor', variante: 'mandatorio'},
      {titulo: 'Pedido', variante: 'mandatorio'},
    ],
    'salidas-demanda': [],
    'procesos-autonomos': [],
    'salidas-automaticas': [],
  },
};
