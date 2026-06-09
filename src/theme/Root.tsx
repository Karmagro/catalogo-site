import React, {useEffect, type ReactNode} from 'react';
import {TutorialProvider, useTutorial} from '@site/src/components/Tutorial/context';
import TutorialBanner from '@site/src/components/Tutorial/Banner';

const FIRST_VISIT_KEY = 'catalogo:tutorial-visto';

/** Dispara la apertura automática del banner solo en la primera visita. */
function FirstVisitTrigger() {
  const {openAuto} = useTutorial();

  useEffect(() => {
    try {
      if (!localStorage.getItem(FIRST_VISIT_KEY)) {
        localStorage.setItem(FIRST_VISIT_KEY, '1');
        // Pequeño retraso para no competir con la animación de carga de la página.
        const t = setTimeout(() => openAuto(), 700);
        return () => clearTimeout(t);
      }
    } catch {
      // localStorage no disponible → simplemente no mostramos el banner automático.
    }
  }, [openAuto]);

  return null;
}

export default function Root({children}: {children: ReactNode}): ReactNode {
  return (
    <TutorialProvider>
      <TutorialBanner />
      <FirstVisitTrigger />
      {children}
    </TutorialProvider>
  );
}
