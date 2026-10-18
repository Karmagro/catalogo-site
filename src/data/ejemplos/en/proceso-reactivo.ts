import type {GaleriaData} from '@site/src/components/Galeria/types';

export const procesoReactivo: GaleriaData = {
  componente: 'Reactive Process',
  imagenes: [
    {
      src: '/img/ejemplos/proceso-reactivo-database-trigger.png',
      alt: '"Create Trigger" dialog in pgAdmin with the SQL statement of an AFTER INSERT/UPDATE/DELETE trigger',
      caption:
        'A reactive process in its rawest form: a database trigger. The statement declares that, AFTER INSERT OR DELETE OR UPDATE on the jobhist table, the database itself runs the emp_stamp() function. Nobody schedules or operates this reaction: the change in the data triggers it. It is the low-level mechanism of the component.',
    },
    {
      src: '/img/ejemplos/proceso-reactivo-salesforce-flow.png',
      alt: '"Configure Start" screen of a record-triggered flow in Salesforce, with the option "A record is created" selected',
      caption:
        'The same pattern at the business level (Salesforce, record-triggered flow): an object is chosen and "Trigger the Flow When: A record is created" is configured. As soon as a new record appears, the flow reacts automatically. It is the readable version of the component —"when X is created, do Y"— without writing SQL.',
    },
  ],
};
