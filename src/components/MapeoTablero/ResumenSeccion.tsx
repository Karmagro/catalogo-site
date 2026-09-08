import type {ReactNode} from 'react';
import type {Seccion} from '@site/src/components/TableroDigital/types';
import {MAPEO, porSeccion} from '@site/src/data/mapeo';

function lista(nombres: string[]): string {
  if (nombres.length === 0) return 'Ninguno';
  if (nombres.length === MAPEO.length) return 'todos los componentes del catálogo';
  return nombres.join(', ');
}

/**
 * Las dos líneas de "Lectura por sección": qué componentes se vinculan
 * con la sección de forma mandatoria y cuáles de forma opcional.
 */
export default function ResumenSeccion({seccion}: {seccion: Seccion}): ReactNode {
  const mandatorios = porSeccion(seccion, 'mandatorio').map((m) => m.nombre);
  const opcionales = porSeccion(seccion, 'opcional').map((m) => m.nombre);
  return (
    <>
      <p>
        <strong>Mandatorios ({mandatorios.length}):</strong> {lista(mandatorios)}
      </p>
      <p>
        <strong>Opcionales ({opcionales.length}):</strong> {lista(opcionales)}
      </p>
    </>
  );
}
