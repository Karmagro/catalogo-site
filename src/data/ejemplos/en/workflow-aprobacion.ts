import type {GaleriaData} from '@site/src/components/Galeria/types';

export const workflowAprobacion: GaleriaData = {
  componente: 'Approval Workflow',
  imagenes: [
    {
      src: '/img/ejemplos/workflow-aprobacion-bandeja.png',
      alt: 'Inbox of requests pending approval with approve and deny buttons',
      caption:
        'Approval inbox for leave requests: the manager sees the pending cases —each with its requester, type, and dates— and resolves each one by approving or denying it. The screen embodies the heart of the component: cases waiting for a human decision at a stage of the flow. The form used to submit the request and the subsequent notice are other components that the workflow coordinates.',
    },
    {
      src: '/img/ejemplos/workflow-aprobacion-historial.jpg',
      alt: 'Invoice with Approved status and an approval history from two reviewers',
      caption:
        'Invoice approval flow with two levels of review: each invoice moves through stages and ends up with a visible status ("Approved") and a history that records, in order, each reviewer, their decision, and the date. It embodies the other side of the component: the sequence of stages with multiple responsible actors and the traceability of the case until it reaches its terminal state.',
    },
  ],
};
