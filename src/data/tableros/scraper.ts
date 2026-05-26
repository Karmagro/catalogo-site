import type {TableroData} from '@site/src/components/TableroDigital/types';

export const scraper: TableroData = {
  componente: 'Scraper',
  tarjetas: {
    'entradas-manuales': [],
    'entradas-automaticas': [
      {titulo: 'Extracción Programada de Sitios de Empresas', variante: 'mandatorio'},
    ],
    'conceptos-datos': [
      {titulo: 'Oferta de Empleo', variante: 'mandatorio'},
      {titulo: 'Empresa', variante: 'mandatorio'},
    ],
    'salidas-demanda': [],
    'salidas-automaticas': [],
    'procesos-autonomos': [
      {titulo: 'Parser HTML', variante: 'mandatorio'},
      {titulo: 'Logs de Extracción', variante: 'opcional'},
    ],
  },
};
