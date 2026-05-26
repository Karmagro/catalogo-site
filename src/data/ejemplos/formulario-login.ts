import type {GaleriaData} from '@site/src/components/Galeria/types';

export const formularioLogin: GaleriaData = {
  componente: 'Formulario de Login',
  imagenes: [
    {
      src: '/img/ejemplos/formulario-login-ucampus.png',
      alt: 'Pantalla de inicio de sesión de U-Campus de la Universidad de Chile',
      caption:
        'Página de inicio de sesión de U-Campus donde el estudiante ingresa su usuario y clave institucional para acceder al sistema académico.',
    },
    {
      src: '/img/ejemplos/formulario-login-github-2fa.png',
      alt: 'Pantalla de autenticación de dos factores de GitHub',
      caption:
        'GitHub solicitando el segundo factor (2FA): el usuario ingresa el código de verificación generado por su aplicación de autenticación.',
    },
  ],
};
