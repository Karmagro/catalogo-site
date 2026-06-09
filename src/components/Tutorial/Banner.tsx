import React, {useEffect, useRef, useState} from 'react';
import Link from '@docusaurus/Link';
import {useTutorial} from './context';
import styles from './Banner.module.css';

const AUTO_DISMISS_MS = 9000;

type Via = {
  icon: string;
  title: string;
  desc: string;
  to?: string;
  hint?: string;
};

const VIAS: Via[] = [
  {
    icon: '⌕',
    title: 'Buscar por contenido',
    desc: 'Si ya sabes qué necesitas. Busca en todo el catálogo.',
    hint: 'Ctrl + K',
  },
  {
    icon: '⊞',
    title: 'Por Sección del Tablero',
    desc: 'Qué componentes sirven para entrar datos, mostrarlos, notificar…',
    to: '/docs/secciones',
  },
  {
    icon: '⊛',
    title: 'Por Etiquetas',
    desc: 'Explora agrupado por afinidad funcional.',
    to: '/docs/etiquetas',
  },
  {
    icon: '≡',
    title: 'Recorrer el catálogo',
    desc: 'La lista completa en la barra lateral, en orden de lectura.',
    to: '/docs/componentes/formulario-login',
  },
];

export default function Banner(): React.ReactNode {
  const {isOpen, isAuto, close} = useTutorial();
  const [mounted, setMounted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Controla la animación de salida: mantenemos el nodo montado un instante
  // tras cerrarse para que el fade-out se vea.
  useEffect(() => {
    if (isOpen) {
      setMounted(true);
    } else if (mounted) {
      const t = setTimeout(() => setMounted(false), 350);
      return () => clearTimeout(t);
    }
  }, [isOpen, mounted]);

  // Auto-cierre solo en primera visita (apertura automática).
  useEffect(() => {
    if (isOpen && isAuto) {
      timerRef.current = setTimeout(() => close(), AUTO_DISMISS_MS);
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }
  }, [isOpen, isAuto, close]);

  // Empuja el contenido de la página hacia abajo mientras el banner (fixed) está visible,
  // para que no tape el breadcrumb / la navegación superior.
  useEffect(() => {
    const cls = 'tutorial-banner-active';
    if (isOpen) document.body.classList.add(cls);
    else document.body.classList.remove(cls);
    return () => document.body.classList.remove(cls);
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <div
      className={`${styles.banner} ${isOpen ? styles.bannerOpen : styles.bannerClosing}`}
      role="region"
      aria-label="Guía de navegación del catálogo">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Cómo encontrar lo que buscas</span>
          <button
            className={styles.closeBtn}
            onClick={close}
            aria-label="Cerrar la ayuda de navegación"
            type="button">
            ×
          </button>
        </div>

        <div className={styles.grid}>
          {VIAS.map((v) => {
            const content = (
              <>
                <span className={styles.viaIcon} aria-hidden="true">{v.icon}</span>
                <span className={styles.viaText}>
                  <span className={styles.viaTitle}>
                    {v.title}
                    {v.hint && <kbd className={styles.kbd}>{v.hint}</kbd>}
                  </span>
                  <span className={styles.viaDesc}>{v.desc}</span>
                </span>
              </>
            );
            return v.to ? (
              <Link key={v.title} to={v.to} className={styles.via} onClick={close}>
                {content}
              </Link>
            ) : (
              <div key={v.title} className={styles.via}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
