import type {CSSProperties, ReactNode} from 'react';
import {SECCIONES} from '@site/src/components/TableroDigital/secciones';
import type {Vinculo} from '@site/src/components/TableroDigital/types';
import {mapeoDe, SECCIONES_FLUJO} from '@site/src/data/mapeo';
import styles from '@site/src/css/componente.module.css';

const ESTADO: Record<'mandatorio' | 'opcional' | 'ninguno', string> = {
  mandatorio: 'Siempre',
  opcional: 'Opcional',
  ninguno: 'No',
};

function claseCelda(vinculo: Vinculo): string {
  if (vinculo === 'mandatorio') return `${styles.mapeoCell} ${styles.mapeoMandatory}`;
  if (vinculo === 'opcional') return `${styles.mapeoCell} ${styles.mapeoOptional}`;
  return `${styles.mapeoCell} ${styles.mapeoEmpty}`;
}

function estiloCelda(vinculo: Vinculo, cssVar: string): CSSProperties | undefined {
  const borde = `color-mix(in srgb, var(${cssVar}) 45%, transparent)`;
  if (vinculo === 'mandatorio') {
    return {
      background: `color-mix(in srgb, var(${cssVar}) 13%, var(--ifm-background-color))`,
      borderColor: borde,
    };
  }
  if (vinculo === 'opcional') return {borderColor: borde};
  return undefined;
}

/**
 * Rejilla "Mapeo al Tablero Digital" de una ficha: seis celdas, una por
 * sección, con el vínculo declarado en src/data/mapeo para ese componente.
 */
export default function MapeoTablero({slug}: {slug: string}): ReactNode {
  const {vinculos} = mapeoDe(slug);
  return (
    <div className={styles.mapeoGrid}>
      {SECCIONES_FLUJO.map((seccion) => {
        const vinculo = vinculos[seccion];
        const {label, cssVar} = SECCIONES[seccion];
        return (
          <div key={seccion} className={claseCelda(vinculo)} style={estiloCelda(vinculo, cssVar)}>
            <span className={styles.mapeoLabel}>{label}</span>
            <span className={styles.mapeoStatus}>{ESTADO[vinculo ?? 'ninguno']}</span>
          </div>
        );
      })}
    </div>
  );
}
