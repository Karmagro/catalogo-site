import type {GaleriaData} from '@site/src/components/Galeria/types';

export const baseDatos: GaleriaData = {
  componente: 'Database',
  imagenes: [
    {
      src: '/img/ejemplos/base-datos-er.png',
      alt: 'Entity-relationship diagram of a book e-commerce domain',
      caption:
        'Entity-relationship diagram of a book e-commerce domain: entities (Author, Book, Customer, ShoppingBasket) and their relationships with cardinalities.',
    },
  ],
};
