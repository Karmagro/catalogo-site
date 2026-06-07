import type {GaleriaData} from '@site/src/components/Galeria/types';

export const servicioExpuesto: GaleriaData = {
  componente: 'Servicio Expuesto',
  // TODO: reemplazar por una captura propia de documentación de API expuesta
  // (Swagger/OpenAPI). Por ahora se reutiliza la imagen de Google Maps.
  imagenes: [
    {
      src: '/img/ejemplos/endpoint-api-google-maps.png',
      alt: 'Documentación de una API expuesta con sus puntos de acceso',
      caption:
        'Documentación de una API expuesta: el sistema publica sus puntos de acceso y un ejemplo de invocación para que otros sistemas la consuman.',
    },
  ],
};
