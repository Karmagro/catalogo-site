import type {GaleriaData} from '@site/src/components/Galeria/types';

export const procesoInterno: GaleriaData = {
  componente: 'Proceso Interno',
  imagenes: [
    {
      src: '/img/ejemplos/proceso-interno-integridad-config.png',
      alt: 'Configuración de un job programado "Database Integrity Checker" en la plataforma Temenos',
      caption:
        'Un proceso interno de chequeo de integridad de la base de datos (Temenos): la rutina "Database Integrity Checker" recorre las tablas buscando inconsistencias. No la opera un usuario paso a paso; se configura un disparador (Trigger Type) y una repetición programada (cada semana). Es el ejemplo clásico de procesamiento autónomo sobre datos internos.',
    },
    {
      src: '/img/ejemplos/proceso-interno-servicenow-jobs.png',
      alt: 'Tablero de monitoreo de Scheduled Jobs en la plataforma ServiceNow',
      caption:
        'Monitoreo de procesos internos en una plataforma de gestión (ServiceNow): decenas de jobs recurrentes corren en segundo plano (conciliaciones, recálculos, depuraciones), con su conteo de ejecuciones y tiempo de procesamiento. Lo visible no es el proceso en sí —que es invisible— sino su agendamiento y su monitoreo.',
    },
  ],
};
