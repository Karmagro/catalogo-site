import type {Seccion} from './types';

export interface SeccionInfo {
  label: string;
  cssVar: string;
}

export const SECCIONES: Record<Seccion, SeccionInfo> = {
  'entradas-manuales': {
    label: 'Entradas Manuales',
    cssVar: '--seccion-entradas-manuales',
  },
  'conceptos-datos': {
    label: 'Conceptos de Datos',
    cssVar: '--seccion-conceptos',
  },
  'salidas-demanda': {
    label: 'Salidas por Demanda',
    cssVar: '--seccion-salidas-demanda',
  },
  'entradas-automaticas': {
    label: 'Entradas Automáticas',
    cssVar: '--seccion-entradas-automaticas',
  },
  'procesos-autonomos': {
    label: 'Procesos Autónomos',
    cssVar: '--seccion-procesos-autonomos',
  },
  'salidas-automaticas': {
    label: 'Salidas Automáticas',
    cssVar: '--seccion-salidas-automaticas',
  },
};

export const SECCION_ORDER: Seccion[] = [
  'entradas-manuales',
  'conceptos-datos',
  'salidas-demanda',
  'entradas-automaticas',
  'procesos-autonomos',
  'salidas-automaticas',
];
