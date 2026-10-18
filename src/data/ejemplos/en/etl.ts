import type {GaleriaData} from '@site/src/components/Galeria/types';

export const etl: GaleriaData = {
  componente: 'ETL',
  imagenes: [
    {
      src: '/img/ejemplos/etl-flujo-moderno.png',
      alt: 'Architecture diagram of a modern ETL pipeline',
      caption:
        'Architecture of a modern ETL pipeline: extraction from a data lake (Amazon S3), transformation with Apache Spark, and loading into a warehouse (Redshift / MongoDB), orchestrated with Apache Airflow.',
    },
  ],
};
