import type {TableroData} from '@site/src/components/TableroDigital/types';

export const reporte: TableroData = {
  componente: 'Reporte',
  tarjetas: {
    'actualizacion-manual': [],
    'actualizacion-automatica': [],
    'conceptos-datos': [
      {titulo: 'Cuenta', variante: 'mandatorio'},
      {titulo: 'Movimiento', variante: 'mandatorio'},
    ],
    'salidas-demanda': [
      {titulo: 'Cartola Descargable', variante: 'mandatorio'},
    ],
    'salidas-automaticas': [
      {titulo: 'Email con Cartola Mensual', variante: 'opcional'},
    ],
    'procesos-autonomos': [
      {titulo: 'Generación de Cartola Mensual', variante: 'mandatorio'},
    ],
  },
};
