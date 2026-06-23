import type {TableroData} from '@site/src/components/TableroDigital/types';

export const procesoReactivo: TableroData = {
  componente: 'Proceso Reactivo',
  tarjetas: {
    'actualizacion-manual': [],
    'actualizacion-automatica': [],
    'conceptos-datos': [
      {titulo: 'Cliente Nuevo Detectado', variante: 'mandatorio'},
      {titulo: 'Cuenta Derivada', variante: 'mandatorio'},
    ],
    'salidas-demanda': [],
    'salidas-automaticas': [
      {titulo: 'Aviso de Cuenta Creada', variante: 'opcional'},
    ],
    'procesos-autonomos': [
      {titulo: 'Reacción a Alta de Cliente', variante: 'mandatorio'},
      {titulo: 'Logs de Disparo', variante: 'opcional'},
    ],
  },
};
