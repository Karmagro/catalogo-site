import type {GaleriaData} from '@site/src/components/Galeria/types';

export const procesoProgramado: GaleriaData = {
  componente: 'Scheduled Process',
  imagenes: [
    {
      src: '/img/ejemplos/proceso-interno-integridad-config.png',
      alt: 'Configuration of a scheduled "Database Integrity Checker" job on the Temenos platform',
      caption:
        'A scheduled database integrity check (Temenos): the "Database Integrity Checker" routine goes through the tables looking for inconsistencies. No user operates it step by step; a schedule trigger (Trigger Type) and a programmed repetition (every week) are configured. It is the classic example of recurring autonomous processing on internal data.',
    },
    {
      src: '/img/ejemplos/proceso-interno-servicenow-jobs.png',
      alt: 'Scheduled Jobs monitoring dashboard on the ServiceNow platform',
      caption:
        'Monitoring of scheduled processes on a management platform (ServiceNow): dozens of recurring jobs run in the background (reconciliations, recalculations, purges), with their execution count and processing time. What is visible is not the process itself —which is invisible— but its scheduling and monitoring.',
    },
  ],
};
