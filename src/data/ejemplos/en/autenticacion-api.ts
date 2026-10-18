import type {GaleriaData} from '@site/src/components/Galeria/types';

export const autenticacionApi: GaleriaData = {
  componente: 'API Authentication',
  imagenes: [
    {
      src: '/img/ejemplos/autenticacion-api-oauth-flow.png',
      alt: 'Diagram of the abstract OAuth 2.0 flow',
      caption:
        'Diagram of the abstract OAuth 2.0 flow: the client obtains an access token from the authorization server to consume a protected resource on behalf of the user.',
    },
  ],
};
