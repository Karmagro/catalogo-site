import React, {useEffect, useCallback} from 'react';
import type {ImagenEjemplo} from './types';
import styles from './styles.module.css';

interface LightboxProps {
  imagenes: ImagenEjemplo[];
  indice: number;
  onClose: () => void;
  onNavigate: (nuevoIndice: number) => void;
}

export default function Lightbox({
  imagenes,
  indice,
  onClose,
  onNavigate,
}: LightboxProps): React.ReactElement {
  const total = imagenes.length;
  const hayVarias = total > 1;

  const prev = useCallback(() => {
    onNavigate((indice - 1 + total) % total);
  }, [indice, total, onNavigate]);

  const next = useCallback(() => {
    onNavigate((indice + 1) % total);
  }, [indice, total, onNavigate]);

  // Teclado: Esc cierra, ←/→ navegan
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (hayVarias && e.key === 'ArrowLeft') {
        prev();
      } else if (hayVarias && e.key === 'ArrowRight') {
        next();
      }
    };
    document.addEventListener('keydown', onKey);
    // Bloquear scroll del fondo mientras el lightbox está abierto
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [hayVarias, prev, next, onClose]);

  const actual = imagenes[indice];

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={actual.alt}
    >
      <button
        type="button"
        className={styles.lightboxClose}
        onClick={onClose}
        aria-label="Cerrar"
      >
        ×
      </button>

      {hayVarias && (
        <button
          type="button"
          className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          aria-label="Imagen anterior"
        >
          ‹
        </button>
      )}

      {/* Detener la propagación: click sobre la figura no cierra el overlay */}
      <figure className={styles.lightboxFigure} onClick={(e) => e.stopPropagation()}>
        <img className={styles.lightboxImg} src={actual.src} alt={actual.alt} />
        <figcaption className={styles.lightboxCaption}>
          {actual.caption}
          {hayVarias && (
            <span className={styles.lightboxContador}>
              {indice + 1} / {total}
            </span>
          )}
        </figcaption>
      </figure>

      {hayVarias && (
        <button
          type="button"
          className={`${styles.lightboxNav} ${styles.lightboxNext}`}
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          aria-label="Imagen siguiente"
        >
          ›
        </button>
      )}
    </div>
  );
}
