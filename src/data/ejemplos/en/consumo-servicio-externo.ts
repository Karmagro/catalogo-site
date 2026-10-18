import type {GaleriaData} from '@site/src/components/Galeria/types';

export const consumoServicioExterno: GaleriaData = {
  componente: 'External Service Consumption',
  imagenes: [
    {
      src: '/img/ejemplos/endpoint-api-google-maps.png',
      alt: 'Google Maps Embed API integration through an iframe',
      caption:
        'Consuming Google Maps: the system invokes the provider\'s service to embed a rendered map, incorporating a third-party capability without developing it internally.',
    },
  ],
};
