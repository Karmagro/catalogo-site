import type {GaleriaData} from '@site/src/components/Galeria/types';

export const servicioExpuesto: GaleriaData = {
  componente: 'Servicio Expuesto',
  imagenes: [
    {
      src: '/img/ejemplos/servicio-expuesto-swagger-petstore.png',
      alt: 'Documentación interactiva en Swagger UI de la API Petstore con sus puntos de acceso',
      caption:
        'Swagger Petstore: el sistema publica el contrato de su API (OpenAPI) y los puntos de acceso que expone —POST, PUT, GET, DELETE sobre /pet— para que otros sistemas los invoquen programáticamente.',
    },
    {
      src: '/img/ejemplos/servicio-expuesto-aws-api-gateway.png',
      alt: 'Configuración de un endpoint POST /pets en la consola de AWS API Gateway',
      caption:
        'AWS API Gateway: desde el lado del proveedor se configura el endpoint POST /pets, definiendo el flujo de solicitud y respuesta que atiende las invocaciones entrantes de sistemas externos.',
    },
  ],
};
