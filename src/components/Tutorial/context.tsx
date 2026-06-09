import React, {createContext, useContext, useState, useCallback, type ReactNode} from 'react';

type TutorialContextValue = {
  /** El banner está visible en pantalla. */
  isOpen: boolean;
  /** Abre el banner de forma manual (invocado desde el ícono de la navbar).
   *  El banner permanece hasta que el usuario lo cierra (sin auto-cierre). */
  open: () => void;
  /** Cierra el banner. */
  close: () => void;
  /** Abre el banner en modo "primera visita" (se auto-cierra tras unos segundos). */
  openAuto: () => void;
  /** True cuando la apertura fue automática (1ª visita); controla el auto-cierre. */
  isAuto: boolean;
};

const TutorialContext = createContext<TutorialContextValue | null>(null);

export function TutorialProvider({children}: {children: ReactNode}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuto, setIsAuto] = useState(false);

  const open = useCallback(() => {
    setIsAuto(false);
    setIsOpen(true);
  }, []);

  const openAuto = useCallback(() => {
    setIsAuto(true);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setIsAuto(false);
  }, []);

  return (
    <TutorialContext.Provider value={{isOpen, open, close, openAuto, isAuto}}>
      {children}
    </TutorialContext.Provider>
  );
}

export function useTutorial(): TutorialContextValue {
  const ctx = useContext(TutorialContext);
  if (!ctx) {
    // Fuera del provider (p.ej. render server-side parcial) → no-op seguro.
    return {isOpen: false, open: () => {}, close: () => {}, openAuto: () => {}, isAuto: false};
  }
  return ctx;
}
