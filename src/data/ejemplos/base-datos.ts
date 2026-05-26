import type {GaleriaData} from '@site/src/components/Galeria/types';

export const baseDatos: GaleriaData = {
  componente: 'Base de Datos',
  imagenes: [
    {
      src: '/img/ejemplos/base-datos-er.png',
      alt: 'Diagrama entidad-relación de un dominio de e-commerce de libros',
      caption:
        'Diagrama entidad-relación de un dominio de e-commerce de libros: entidades (Autor, Libro, Cliente, Carrito) y sus relaciones con cardinalidades.',
    },
  ],
};
