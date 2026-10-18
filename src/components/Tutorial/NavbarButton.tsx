import React from 'react';
import {translate} from '@docusaurus/Translate';
import {useTutorial} from './context';
import styles from './NavbarButton.module.css';

/** Ícono en la navbar que reabre el banner de ayuda de navegación.
 *  Registrado como tipo de navbar item custom (`custom-tutorialButton`). */
export default function NavbarTutorialButton(): React.ReactNode {
  const {open} = useTutorial();
  const rotulo = translate({
    id: 'tutorial.boton',
    message: 'Cómo navegar el catálogo',
    description: 'aria-label y title del botón «?» del navbar, que reabre la ayuda de navegación',
  });
  return (
    <button
      type="button"
      className={`navbar__item ${styles.helpBtn}`}
      onClick={open}
      aria-label={rotulo}
      title={rotulo}>
      <span className={styles.icon} aria-hidden="true">?</span>
    </button>
  );
}
