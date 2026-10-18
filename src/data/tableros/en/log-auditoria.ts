import type {TableroData} from '@site/src/components/TableroDigital/types';

export const logAuditoria: TableroData = {
  componente: 'Audit Log',
  tarjetas: {
    'actualizacion-manual': [],
    'actualizacion-automatica': [],
    'conceptos-datos': [
      {titulo: 'Audit Entry', variante: 'mandatorio'},
    ],
    'salidas-demanda': [
      {titulo: 'Page History View', variante: 'opcional'},
    ],
    'salidas-automaticas': [],
    'procesos-autonomos': [
      {titulo: 'Automatic Edit Capture', variante: 'mandatorio'},
    ],
  },
};
