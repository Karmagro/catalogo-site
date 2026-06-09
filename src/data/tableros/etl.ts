import type {TableroData} from '@site/src/components/TableroDigital/types';

export const etl: TableroData = {
  componente: 'ETL',
  tarjetas: {
    'actualizacion-manual': [],
    'actualizacion-automatica': [
      {titulo: 'Extracción Programada desde S3', variante: 'mandatorio'},
    ],
    'conceptos-datos': [
      {titulo: 'Datos Analíticos', variante: 'mandatorio'},
    ],
    'salidas-demanda': [],
    'salidas-automaticas': [],
    'procesos-autonomos': [
      {titulo: 'Transformación con Spark', variante: 'mandatorio'},
      {titulo: 'Logs de Ejecución', variante: 'opcional'},
    ],
  },
};
