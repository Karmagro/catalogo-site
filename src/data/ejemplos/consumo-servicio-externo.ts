import type {GaleriaData} from '@site/src/components/Galeria/types';

export const consumoServicioExterno: GaleriaData = {
  componente: 'Consumo de Servicio Externo',
  imagenes: [
    {
      src: '/img/ejemplos/endpoint-api-google-maps.png',
      alt: 'Integración de Google Maps Embed API mediante un iframe',
      caption:
        'Consumo de Google Maps: el sistema invoca el servicio del proveedor para incrustar un mapa renderizado, incorporando una capacidad de terceros sin desarrollarla internamente.',
    },
  ],
};
