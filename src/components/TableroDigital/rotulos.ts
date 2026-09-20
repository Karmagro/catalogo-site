import {translate} from '@docusaurus/Translate';
import type {Seccion} from './types';

/**
 * Rótulo de cada sección del Tablero en el idioma del sitio.
 *
 * Va aparte de secciones.ts porque ese archivo lo importa también el script de
 * verificación, en Node, donde `@docusaurus/Translate` no existe. Los `id` y los
 * `message` son literales a propósito: `write-translations` los extrae leyendo el
 * código, sin ejecutarlo. El `message` debe ser igual al `label` de secciones.ts
 * (`npm run verificar` lo comprueba).
 */
export function rotuloSeccion(seccion: Seccion): string {
  switch (seccion) {
    case 'actualizacion-manual':
      return translate({
        id: 'tablero.seccion.actualizacion-manual',
        message: 'Actualización Manual',
        description: 'Sección del Tablero Digital',
      });
    case 'actualizacion-automatica':
      return translate({
        id: 'tablero.seccion.actualizacion-automatica',
        message: 'Actualización Automática',
        description: 'Sección del Tablero Digital',
      });
    case 'conceptos-datos':
      return translate({
        id: 'tablero.seccion.conceptos-datos',
        message: 'Conceptos de Datos',
        description: 'Sección del Tablero Digital',
      });
    case 'salidas-demanda':
      return translate({
        id: 'tablero.seccion.salidas-demanda',
        message: 'Salidas por Demanda',
        description: 'Sección del Tablero Digital',
      });
    case 'salidas-automaticas':
      return translate({
        id: 'tablero.seccion.salidas-automaticas',
        message: 'Salidas Automáticas',
        description: 'Sección del Tablero Digital',
      });
    case 'procesos-autonomos':
      return translate({
        id: 'tablero.seccion.procesos-autonomos',
        message: 'Procesos Autónomos',
        description: 'Sección del Tablero Digital',
      });
  }
}

/** Rótulo abreviado, para los encabezados de columna de la matriz. */
export function abreviaturaSeccion(seccion: Seccion): string {
  switch (seccion) {
    case 'actualizacion-manual':
      return translate({
        id: 'tablero.seccion.actualizacion-manual.abreviatura',
        message: 'Act. Manual',
        description: 'Encabezado de columna de la matriz: Actualización Manual',
      });
    case 'actualizacion-automatica':
      return translate({
        id: 'tablero.seccion.actualizacion-automatica.abreviatura',
        message: 'Act. Automática',
        description: 'Encabezado de columna de la matriz: Actualización Automática',
      });
    case 'conceptos-datos':
      return translate({
        id: 'tablero.seccion.conceptos-datos.abreviatura',
        message: 'Conceptos',
        description: 'Encabezado de columna de la matriz: Conceptos de Datos',
      });
    case 'salidas-demanda':
      return translate({
        id: 'tablero.seccion.salidas-demanda.abreviatura',
        message: 'Salidas D.',
        description: 'Encabezado de columna de la matriz: Salidas por Demanda',
      });
    case 'salidas-automaticas':
      return translate({
        id: 'tablero.seccion.salidas-automaticas.abreviatura',
        message: 'Salidas A.',
        description: 'Encabezado de columna de la matriz: Salidas Automáticas',
      });
    case 'procesos-autonomos':
      return translate({
        id: 'tablero.seccion.procesos-autonomos.abreviatura',
        message: 'Proc. Aut.',
        description: 'Encabezado de columna de la matriz: Procesos Autónomos',
      });
  }
}
