import type {TableroData} from '@site/src/components/TableroDigital/types';

export const formularioCarga: TableroData = {
  componente: 'Submission Form',
  tarjetas: {
    'actualizacion-manual': [
      {titulo: 'Scholarship Request', variante: 'mandatorio'},
    ],
    'actualizacion-automatica': [],
    'conceptos-datos': [
      {titulo: 'Application', variante: 'mandatorio'},
    ],
    'salidas-demanda': [],
    'salidas-automaticas': [
      {titulo: 'Submission Confirmation by Email', variante: 'opcional'},
    ],
    'procesos-autonomos': [],
  },
};
