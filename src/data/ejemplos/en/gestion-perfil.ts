import type {GaleriaData} from '@site/src/components/Galeria/types';

export const gestionPerfil: GaleriaData = {
  componente: 'Profile Management',
  imagenes: [
    {
      src: '/img/ejemplos/gestion-perfil-google.png',
      alt: 'Sign-in and security panel of a Google account',
      caption:
        'The "How you sign in to Google" panel: the user manages the password, 2-Step Verification, and recovery methods of their account (Spanish-language interface).',
    },
    {
      src: '/img/ejemplos/gestion-perfil-facebook.png',
      alt: 'Facebook password and security panel',
      caption:
        'Facebook\'s "Password and security" panel: management of credentials, saved login, and the account\'s security controls (Spanish-language interface).',
    },
  ],
};
