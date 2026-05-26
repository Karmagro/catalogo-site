import type {GaleriaData} from '@site/src/components/Galeria/types';

export const etl: GaleriaData = {
  componente: 'ETL',
  imagenes: [
    {
      src: '/img/ejemplos/etl-flujo-moderno.png',
      alt: 'Diagrama de arquitectura de un flujo ETL moderno',
      caption:
        'Arquitectura de un flujo ETL moderno: extracción desde un data lake (Amazon S3), transformación con Apache Spark, y carga a un warehouse (Redshift / MongoDB), orquestado con Apache Airflow.',
    },
  ],
};
