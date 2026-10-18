import type {TableroData} from '@site/src/components/TableroDigital/types';

export const etl: TableroData = {
  componente: 'ETL',
  tarjetas: {
    'actualizacion-manual': [],
    'actualizacion-automatica': [
      {titulo: 'Scheduled Extraction from S3', variante: 'mandatorio'},
    ],
    'conceptos-datos': [
      {titulo: 'Analytical Data', variante: 'mandatorio'},
    ],
    'salidas-demanda': [],
    'salidas-automaticas': [],
    'procesos-autonomos': [
      {titulo: 'Transformation with Spark', variante: 'mandatorio'},
      {titulo: 'Run Logs', variante: 'opcional'},
    ],
  },
};
