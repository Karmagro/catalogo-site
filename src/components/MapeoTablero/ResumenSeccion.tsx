import type {ReactNode} from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import type {Seccion} from '@site/src/components/TableroDigital/types';
import {MAPEO, porSeccion} from '@site/src/data/mapeo';

function lista(nombres: string[]): string {
  if (nombres.length === 0) {
    return translate({
      id: 'mapeo.resumen.ninguno',
      message: 'Ninguno',
      description: 'Lectura por sección: ningún componente tiene ese vínculo con la sección',
    });
  }
  if (nombres.length === MAPEO.length) {
    return translate({
      id: 'mapeo.resumen.todos',
      message: 'todos los componentes del catálogo',
      description: 'Lectura por sección: todos los componentes tienen ese vínculo con la sección',
    });
  }
  return nombres.join(', ');
}

interface ResumenSeccionProps {
  seccion: Seccion;
  /**
   * Nombre de cada componente (por slug) en el idioma de la página. Lo pasa el
   * MDX traducido desde src/data/mapeo/<idioma>; sin él se usa el nombre en español.
   */
  nombres?: Record<string, string>;
}

/**
 * Las dos líneas de "Lectura por sección": qué componentes se vinculan
 * con la sección de forma mandatoria y cuáles de forma opcional.
 */
export default function ResumenSeccion({seccion, nombres}: ResumenSeccionProps): ReactNode {
  const nombre = (m: {slug: string; nombre: string}) => nombres?.[m.slug] ?? m.nombre;
  const mandatorios = porSeccion(seccion, 'mandatorio').map(nombre);
  const opcionales = porSeccion(seccion, 'opcional').map(nombre);
  return (
    <>
      <p>
        <strong>
          <Translate
            id="mapeo.resumen.mandatorios"
            description="Lectura por sección: encabezado de la lista de componentes con vínculo mandatorio"
            values={{n: mandatorios.length}}>
            {'Mandatorios ({n}):'}
          </Translate>
        </strong>{' '}
        {lista(mandatorios)}
      </p>
      <p>
        <strong>
          <Translate
            id="mapeo.resumen.opcionales"
            description="Lectura por sección: encabezado de la lista de componentes con vínculo opcional"
            values={{n: opcionales.length}}>
            {'Opcionales ({n}):'}
          </Translate>
        </strong>{' '}
        {lista(opcionales)}
      </p>
    </>
  );
}
