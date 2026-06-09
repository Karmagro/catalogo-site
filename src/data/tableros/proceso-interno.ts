import type {TableroData} from '@site/src/components/TableroDigital/types';

export const procesoInterno: TableroData = {
  componente: 'Proceso Interno',
  tarjetas: {
    'actualizacion-manual': [],
    'actualizacion-automatica': [],
    'conceptos-datos': [
      {titulo: 'Registros a Conciliar', variante: 'mandatorio'},
      {titulo: 'Inconsistencias Detectadas', variante: 'mandatorio'},
    ],
    'salidas-demanda': [
      {titulo: 'Verificación Bajo Demanda', variante: 'opcional'},
    ],
    'salidas-automaticas': [
      {titulo: 'Alerta de Inconsistencia', variante: 'opcional'},
    ],
    'procesos-autonomos': [
      {titulo: 'Conciliación Nocturna', variante: 'mandatorio'},
      {titulo: 'Logs de Ejecución', variante: 'opcional'},
    ],
  },
};
