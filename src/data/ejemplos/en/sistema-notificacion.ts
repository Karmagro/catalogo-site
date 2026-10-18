import type {GaleriaData} from '@site/src/components/Galeria/types';

export const sistemaNotificacion: GaleriaData = {
  componente: 'Notification System',
  imagenes: [
    {
      src: '/img/ejemplos/sistema-notificacion-etsy.png',
      alt: 'Etsy email telling the buyer that their order has shipped',
      caption:
        'Automated Etsy email telling the buyer that the seller has shipped their order. The platform generates it from a template as soon as the seller marks the order as shipped; the buyer’s name, the shop, and the destination are the variable data. The buyer’s photo is pixelated.',
    },
  ],
};
