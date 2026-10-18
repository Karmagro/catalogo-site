import React, {useEffect, useRef, useState} from 'react';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
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

// Se arma dentro de una función, y con literales, para que `write-translations`
// extraiga las cadenas y para que se resuelvan en el idioma de la página.
function vias(): Via[] {
  return [
    {
      icon: '⌕',
      title: translate({id: 'tutorial.via.buscar.titulo', message: 'Buscar por contenido'}),
      desc: translate({
        id: 'tutorial.via.buscar.desc',
        message: 'Si ya sabes qué necesitas. Busca en todo el catálogo.',
      }),
      hint: 'Ctrl + K',
    },
    {
      icon: '⊞',
      title: translate({id: 'tutorial.via.seccion.titulo', message: 'Por Sección del Tablero'}),
      desc: translate({
        id: 'tutorial.via.seccion.desc',
        message: 'Qué componentes sirven para entrar datos, mostrarlos, notificar…',
      }),
      to: '/docs/secciones',
    },
    {
      icon: '⊛',
      title: translate({id: 'tutorial.via.etiquetas.titulo', message: 'Por Etiquetas'}),
      desc: translate({
        id: 'tutorial.via.etiquetas.desc',
        message: 'Explora agrupado por afinidad funcional.',
      }),
      to: '/docs/etiquetas',
    },
    {
      icon: '≡',
      title: translate({id: 'tutorial.via.recorrer.titulo', message: 'Recorrer el catálogo'}),
      desc: translate({
        id: 'tutorial.via.recorrer.desc',
        message: 'La lista completa en la barra lateral, en orden de lectura.',
      }),
      to: '/docs/componentes/formulario-login',
    },
  ];
}

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
      aria-label={translate({
        id: 'tutorial.banner.ariaLabel',
        message: 'Guía de navegación del catálogo',
        description: 'aria-label de la región del banner de ayuda',
      })}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>
            <Translate id="tutorial.banner.titulo" description="Título del banner de ayuda de navegación">
              Cómo encontrar lo que buscas
            </Translate>
          </span>
          <button
            className={styles.closeBtn}
            onClick={close}
            aria-label={translate({
              id: 'tutorial.banner.cerrar',
              message: 'Cerrar la ayuda de navegación',
              description: 'aria-label del botón que cierra el banner de ayuda',
            })}
            type="button">
            ×
          </button>
        </div>

        <div className={styles.grid}>
          {vias().map((v) => {
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
