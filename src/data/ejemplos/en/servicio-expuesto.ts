import type {GaleriaData} from '@site/src/components/Galeria/types';

export const servicioExpuesto: GaleriaData = {
  componente: 'Exposed Service',
  imagenes: [
    {
      src: '/img/ejemplos/servicio-expuesto-swagger-petstore.png',
      alt: 'Interactive Swagger UI documentation of the Petstore API with its access points',
      caption:
        'Swagger Petstore: the system publishes its API contract (OpenAPI) and the access points it exposes —POST, PUT, GET, DELETE on /pet— so that other systems can invoke them programmatically.',
    },
    {
      src: '/img/ejemplos/servicio-expuesto-aws-api-gateway.png',
      alt: 'Configuration of a POST /pets endpoint in the AWS API Gateway console',
      caption:
        'AWS API Gateway: on the provider side, the POST /pets endpoint is configured, defining the request and response flow that handles incoming invocations from external systems.',
    },
  ],
};
