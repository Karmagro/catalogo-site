import type {GaleriaData} from '@site/src/components/Galeria/types';

export const gestionPerfil: GaleriaData = {
  componente: 'Gestión de Perfil',
  imagenes: [
    {
      src: '/img/ejemplos/gestion-perfil-google.png',
      alt: 'Panel de acceso y seguridad de una cuenta de Google',
      caption:
        'Panel "Cómo acceder a Google": el usuario administra contraseña, verificación en dos pasos y métodos de recuperación de su cuenta.',
    },
    {
      src: '/img/ejemplos/gestion-perfil-facebook.png',
      alt: 'Panel de contraseña y seguridad de Facebook',
      caption:
        'Panel "Contraseña y seguridad" de Facebook: gestión de credenciales, inicio de sesión guardado y controles de seguridad de la cuenta.',
    },
  ],
};
