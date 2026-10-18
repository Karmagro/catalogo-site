import type {TableroData} from '@site/src/components/TableroDigital/types';

export const autenticacionApi: TableroData = {
  componente: 'API Authentication',
  tarjetas: {
    'actualizacion-manual': [],
    'actualizacion-automatica': [
      {titulo: 'OAuth Request Reception', variante: 'mandatorio'},
    ],
    'conceptos-datos': [
      {titulo: 'Token', variante: 'mandatorio'},
      {titulo: 'Client', variante: 'mandatorio'},
    ],
    'salidas-demanda': [],
    'salidas-automaticas': [],
    'procesos-autonomos': [
      {titulo: 'Client Credential Validation', variante: 'mandatorio'},
      {titulo: 'Auditing', variante: 'opcional'},
      {titulo: 'Rate Limiting', variante: 'opcional'},
    ],
  },
};
