import type {GaleriaData} from '@site/src/components/Galeria/types';

export const sistemaNotificacion: GaleriaData = {
  componente: 'Sistema de Notificación',
  imagenes: [
    {
      src: '/img/ejemplos/sistema-notificacion-etsy.png',
      alt: 'Correo de Etsy que avisa al comprador que su pedido fue despachado',
      caption:
        'Correo automático de Etsy que avisa al comprador que el vendedor despachó su pedido. La plataforma lo genera a partir de una plantilla en cuanto el vendedor marca el envío; el nombre del comprador, la tienda y el destino son los datos variables. La foto del comprador está pixelada.',
    },
  ],
};
