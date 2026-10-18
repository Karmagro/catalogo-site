import type {TableroData} from '@site/src/components/TableroDigital/types';

export const procesoReactivo: TableroData = {
  componente: 'Reactive Process',
  tarjetas: {
    'actualizacion-manual': [],
    'actualizacion-automatica': [],
    'conceptos-datos': [
      {titulo: 'Detected New Customer', variante: 'mandatorio'},
      {titulo: 'Derived Account', variante: 'mandatorio'},
    ],
    'salidas-demanda': [],
    'salidas-automaticas': [
      {titulo: 'Account Created Notice', variante: 'opcional'},
    ],
    'procesos-autonomos': [
      {titulo: 'Reaction to New Customer', variante: 'mandatorio'},
      {titulo: 'Trigger Logs', variante: 'opcional'},
    ],
  },
};
