import type {TableroData} from '@site/src/components/TableroDigital/types';

export const logAuditoria: TableroData = {
  componente: 'Log de Auditoría',
  tarjetas: {
    'entradas-manuales': [],
    'entradas-automaticas': [],
    'conceptos-datos': [
      {titulo: 'Registro de Auditoría', variante: 'mandatorio'},
    ],
    'salidas-demanda': [
      {titulo: 'Vista de Historial de Página', variante: 'opcional'},
    ],
    'salidas-automaticas': [],
    'procesos-autonomos': [
      {titulo: 'Captura Automática de Ediciones', variante: 'mandatorio'},
    ],
  },
};
