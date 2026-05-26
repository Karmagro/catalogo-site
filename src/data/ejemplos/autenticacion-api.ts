import type {GaleriaData} from '@site/src/components/Galeria/types';

export const autenticacionApi: GaleriaData = {
  componente: 'Autenticación API',
  imagenes: [
    {
      src: '/img/ejemplos/autenticacion-api-oauth-flow.png',
      alt: 'Diagrama del flujo abstracto de OAuth 2.0',
      caption:
        'Diagrama del flujo abstracto de OAuth 2.0: el cliente obtiene un token de acceso del servidor de autorización para consumir un recurso protegido en nombre del usuario.',
    },
  ],
};
