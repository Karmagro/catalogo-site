import type {GaleriaData} from '@site/src/components/Galeria/types';

export const workflowAprobacion: GaleriaData = {
  componente: 'Workflow de aprobación',
  imagenes: [
    {
      src: '/img/ejemplos/workflow-aprobacion-bandeja.png',
      alt: 'Bandeja de solicitudes pendientes de aprobación con botones aprobar y rechazar',
      caption:
        'Bandeja de aprobación de solicitudes de ausencia: la jefatura ve los casos pendientes —cada uno con su solicitante, tipo y fechas— y resuelve cada uno aprobándolo o rechazándolo. La pantalla materializa el corazón del componente: casos que esperan una decisión humana en una etapa del flujo. El formulario con que se cargó la solicitud y el aviso posterior son otros componentes que el workflow coordina.',
    },
    {
      src: '/img/ejemplos/workflow-aprobacion-historial.jpg',
      alt: 'Factura con estado Aprobada e historial de aprobación de dos revisores',
      caption:
        'Flujo de aprobación de facturas con dos niveles de revisión: cada factura avanza por etapas y queda con un estado visible ("Aprobada") y un historial que registra, en orden, a cada revisor, su decisión y la fecha. Materializa la otra cara del componente: la secuencia de etapas con múltiples responsables y la trazabilidad del avance del caso hasta su estado terminal.',
    },
  ],
};
