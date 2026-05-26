export type Seccion =
  | 'entradas-manuales'
  | 'entradas-automaticas'
  | 'conceptos-datos'
  | 'salidas-demanda'
  | 'salidas-automaticas'
  | 'procesos-autonomos';

export type PostItVariante = 'mandatorio' | 'opcional';

export interface PostIt {
  titulo: string;
  subtitulo?: string;
  variante: PostItVariante;
}

export interface TableroData {
  componente: string;
  tarjetas: Record<Seccion, PostIt[]>;
}
