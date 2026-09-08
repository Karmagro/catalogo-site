import type {CSSProperties, ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {SECCIONES} from '@site/src/components/TableroDigital/secciones';
import type {Seccion, Vinculo} from '@site/src/components/TableroDigital/types';
import {MAPEO, SECCIONES_FLUJO} from '@site/src/data/mapeo';

/** Encabezados abreviados de la matriz, en el orden de SECCIONES_FLUJO. */
const ABREVIATURA: Record<Seccion, string> = {
  'actualizacion-manual': 'Act. Manual',
  'actualizacion-automatica': 'Act. Automática',
  'conceptos-datos': 'Conceptos',
  'salidas-demanda': 'Salidas D.',
  'salidas-automaticas': 'Salidas A.',
  'procesos-autonomos': 'Proc. Aut.',
};

const SIMBOLO: Record<'mandatorio' | 'opcional', string> = {
  mandatorio: '●',
  opcional: '○',
};

function estiloEncabezado(cssVar: string): CSSProperties {
  return {
    padding: '0.65rem 0.75rem',
    textAlign: 'center',
    background: `color-mix(in srgb, var(${cssVar}) 15%, var(--ifm-background-color))`,
    borderBottom: `2px solid var(${cssVar})`,
    color: `var(${cssVar})`,
    fontSize: '0.75rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
  };
}

function estiloCelda(vinculo: Vinculo, cssVar: string, rowBg: string): CSSProperties {
  return {
    padding: '0.6rem 0.75rem',
    textAlign: 'center',
    fontSize: vinculo === 'mandatorio' ? '1rem' : '0.85rem',
    color: vinculo ? `var(${cssVar})` : 'var(--ifm-color-emphasis-300)',
    background: rowBg,
    fontWeight: vinculo ? 700 : 400,
  };
}

/**
 * Matriz consolidada componentes × secciones del Tablero Digital,
 * generada desde src/data/mapeo (una fila por componente, en su orden).
 */
export default function MatrizMapeo(): ReactNode {
  return (
    <div style={{overflowX: 'auto', marginBottom: '1.5rem'}}>
      <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem'}}>
        <thead>
          <tr>
            <th
              style={{
                padding: '0.65rem 1rem',
                textAlign: 'left',
                background: 'var(--ifm-color-emphasis-100)',
                borderBottom: '2px solid var(--ifm-color-emphasis-300)',
                minWidth: '160px',
              }}>
              Componente
            </th>
            {SECCIONES_FLUJO.map((seccion) => (
              <th key={seccion} style={estiloEncabezado(SECCIONES[seccion].cssVar)}>
                {ABREVIATURA[seccion]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {MAPEO.map((componente, i) => {
            const rowBg =
              i % 2 === 1
                ? 'color-mix(in srgb, var(--ifm-color-emphasis-100) 60%, transparent)'
                : 'transparent';
            return (
              <tr key={componente.slug}>
                <td style={{padding: '0.6rem 1rem', background: rowBg}}>
                  <Link to={`/docs/componentes/${componente.slug}`} style={{fontWeight: 500}}>
                    {componente.nombre}
                  </Link>
                </td>
                {SECCIONES_FLUJO.map((seccion) => {
                  const vinculo = componente.vinculos[seccion];
                  return (
                    <td key={seccion} style={estiloCelda(vinculo, SECCIONES[seccion].cssVar, rowBg)}>
                      {vinculo ? SIMBOLO[vinculo] : '—'}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
