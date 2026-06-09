import React from 'react';
import {useTutorial} from './context';
import styles from './NavbarButton.module.css';

/** Ícono en la navbar que reabre el banner de ayuda de navegación.
 *  Registrado como tipo de navbar item custom (`custom-tutorialButton`). */
export default function NavbarTutorialButton(): React.ReactNode {
  const {open} = useTutorial();
  return (
    <button
      type="button"
      className={`navbar__item ${styles.helpBtn}`}
      onClick={open}
      aria-label="Cómo navegar el catálogo"
      title="Cómo navegar el catálogo">
      <span className={styles.icon} aria-hidden="true">?</span>
    </button>
  );
}
