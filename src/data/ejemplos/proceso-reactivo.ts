import type {GaleriaData} from '@site/src/components/Galeria/types';

export const procesoReactivo: GaleriaData = {
  componente: 'Proceso Reactivo',
  imagenes: [
    {
      src: '/img/ejemplos/proceso-reactivo-database-trigger.png',
      alt: 'Diálogo "Create Trigger" en pgAdmin con la sentencia SQL de un trigger AFTER INSERT/UPDATE/DELETE',
      caption:
        'Un proceso reactivo en su forma más cruda: un disparador de base de datos (database trigger). La sentencia declara que, AFTER INSERT OR DELETE OR UPDATE sobre la tabla jobhist, la propia base ejecute la función emp_stamp(). Nadie agenda ni opera esta reacción: la dispara el cambio en los datos. Es el mecanismo de bajo nivel del componente.',
    },
    {
      src: '/img/ejemplos/proceso-reactivo-salesforce-flow.png',
      alt: 'Pantalla "Configure Start" de un record-triggered flow en Salesforce, con la opción "A record is created" seleccionada',
      caption:
        'El mismo patrón a nivel de negocio (Salesforce, record-triggered flow): se elige un objeto y se configura "Trigger the Flow When: A record is created". En cuanto aparece un registro nuevo, el flujo reacciona automáticamente. Es la versión legible del componente —"cuando se cree X, haz Y"— sin escribir SQL.',
    },
  ],
};
