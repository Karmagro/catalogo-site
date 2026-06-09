import type {Seccion} from './types';

export interface SeccionInfo {
  label: string;
  cssVar: string;
}

export const SECCIONES: Record<Seccion, SeccionInfo> = {
  'actualizacion-manual': {
    label: 'Actualización Manual',
    cssVar: '--seccion-actualizacion-manual',
  },
  'conceptos-datos': {
    label: 'Conceptos de Datos',
    cssVar: '--seccion-conceptos',
  },
  'salidas-demanda': {
    label: 'Salidas por Demanda',
    cssVar: '--seccion-salidas-demanda',
  },
  'actualizacion-automatica': {
    label: 'Actualización Automática',
    cssVar: '--seccion-actualizacion-automatica',
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
  'actualizacion-manual',
  'conceptos-datos',
  'salidas-demanda',
  'actualizacion-automatica',
  'procesos-autonomos',
  'salidas-automaticas',
];
