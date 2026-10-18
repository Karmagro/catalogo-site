import type {TableroData} from '@site/src/components/TableroDigital/types';

export const scraper: TableroData = {
  componente: 'Scraper',
  tarjetas: {
    'actualizacion-manual': [],
    'actualizacion-automatica': [
      {titulo: 'Scheduled Extraction from Company Websites', variante: 'mandatorio'},
    ],
    'conceptos-datos': [
      {titulo: 'Job Posting', variante: 'mandatorio'},
      {titulo: 'Company', variante: 'mandatorio'},
    ],
    'salidas-demanda': [],
    'salidas-automaticas': [],
    'procesos-autonomos': [
      {titulo: 'HTML Parser', variante: 'mandatorio'},
      {titulo: 'Extraction Logs', variante: 'opcional'},
    ],
  },
};
