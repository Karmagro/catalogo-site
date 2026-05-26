export interface ImagenEjemplo {
  /** Ruta servida desde static/, ej. '/img/ejemplos/formulario-login-ucampus.png' */
  src: string;
  /** Texto alternativo para accesibilidad */
  alt: string;
  /** Descripción breve mostrada como caption (vista normal y lightbox) */
  caption: string;
}

export interface GaleriaData {
  componente: string;
  imagenes: ImagenEjemplo[];
}
