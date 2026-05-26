import React, {useState, useEffect, useRef} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
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
  const {imagenes} = data;
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
          aria-label={`Ampliar imagen: ${actual.alt}`}
        >
          <img className={styles.img} src={actual.src} alt={actual.alt} />
          <span className={styles.zoomHint} aria-hidden="true">
            ⤢ Ampliar
          </span>
        </button>

        <figcaption className={styles.caption}>{actual.caption}</figcaption>

        {hayVarias && (
          <div className={styles.dots} role="tablist" aria-label="Imágenes de ejemplo">
            {imagenes.map((img, idx) => (
              <button
                key={idx}
                type="button"
                className={`${styles.dot} ${idx === activo ? styles.dotActivo : ''}`}
                onClick={() => setActivo(idx)}
                aria-label={`Ir a la imagen ${idx + 1}`}
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
