import React, {useState, useEffect, useRef} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Translate, {translate} from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import type {GaleriaData} from './types';
import styles from './styles.module.css';

interface GaleriaProps {
  data: GaleriaData;
  /** Intervalo del carrusel automático en ms (default 5000) */
  intervalo?: number;
}

export default function Galeria({
  data,
  intervalo = 5000,
}: GaleriaProps): React.ReactElement {
  // Las rutas de los datos son absolutas (/img/…); useBaseUrl les antepone el
  // prefijo del idioma (/en/), donde cada build tiene su propia copia de static/.
  const base = useBaseUrl('/');
  const imagenes = data.imagenes.map((img) => ({
    ...img,
    src: img.src.startsWith('/') ? base + img.src.slice(1) : img.src,
  }));
  const total = imagenes.length;
  const hayVarias = total > 1;

  const [activo, setActivo] = useState(0);
  const [lightboxAbierto, setLightboxAbierto] = useState(false);
  const [pausado, setPausado] = useState(false);

  // Carrusel automático: avanza solo si hay varias imágenes, no está
  // pausado (hover) y el lightbox está cerrado.
  useEffect(() => {
    if (!hayVarias || pausado || lightboxAbierto) {
      return undefined;
    }
    const id = setInterval(() => {
      setActivo((i) => (i + 1) % total);
    }, intervalo);
    return () => clearInterval(id);
  }, [hayVarias, pausado, lightboxAbierto, total, intervalo]);

  // Ficha aún sin imágenes de ejemplo: degradar con gracia en vez de romper el build.
  if (total === 0) {
    return (
      <div className={styles.galeria}>
        <figure className={styles.viewport}>
          <figcaption className={styles.caption}>
            <Translate id="galeria.vacia" description="Galería de una ficha que aún no tiene imágenes">
              Ejemplos visuales pendientes para este componente.
            </Translate>
          </figcaption>
        </figure>
      </div>
    );
  }

  const actual = imagenes[activo];

  return (
    <div className={styles.galeria}>
      <figure
        className={styles.viewport}
        onMouseEnter={() => setPausado(true)}
        onMouseLeave={() => setPausado(false)}
      >
        <button
          type="button"
          className={styles.imgButton}
          onClick={() => setLightboxAbierto(true)}
          aria-label={translate(
            {
              id: 'galeria.ampliar.ariaLabel',
              message: 'Ampliar imagen: {alt}',
              description: 'aria-label del botón que abre la imagen de la galería a pantalla completa',
            },
            {alt: actual.alt},
          )}
        >
          <img className={styles.img} src={actual.src} alt={actual.alt} />
          <span className={styles.zoomHint} aria-hidden="true">
            <Translate id="galeria.ampliar" description="Indicación visible sobre la imagen de la galería">
              ⤢ Ampliar
            </Translate>
          </span>
        </button>

        <figcaption className={styles.caption}>{actual.caption}</figcaption>

        {hayVarias && (
          <div
            className={styles.dots}
            role="tablist"
            aria-label={translate({
              id: 'galeria.puntos.ariaLabel',
              message: 'Imágenes de ejemplo',
              description: 'aria-label del selector de imágenes de la galería',
            })}>
            {imagenes.map((img, idx) => (
              <button
                key={idx}
                type="button"
                className={`${styles.dot} ${idx === activo ? styles.dotActivo : ''}`}
                onClick={() => setActivo(idx)}
                aria-label={translate(
                  {
                    id: 'galeria.punto.ariaLabel',
                    message: 'Ir a la imagen {n}',
                    description: 'aria-label de cada punto del selector de imágenes de la galería',
                  },
                  {n: idx + 1},
                )}
                aria-selected={idx === activo}
                role="tab"
              />
            ))}
          </div>
        )}
      </figure>

      {lightboxAbierto && (
        <BrowserOnly>
          {() => {
            const Lightbox = require('./Lightbox').default;
            return (
              <Lightbox
                imagenes={imagenes}
                indice={activo}
                onClose={() => setLightboxAbierto(false)}
                onNavigate={setActivo}
              />
            );
          }}
        </BrowserOnly>
      )}
    </div>
  );
}
