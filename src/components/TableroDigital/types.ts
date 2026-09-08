export type Seccion =
  | 'actualizacion-manual'
  | 'actualizacion-automatica'
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

/** Carácter del vínculo entre un componente y una sección del Tablero. */
export type Vinculo = 'mandatorio' | 'opcional' | null;

/** Entrada de la fuente única del mapeo (src/data/mapeo). */
export interface MapeoComponente {
  slug: string;
  nombre: string;
  vinculos: Record<Seccion, Vinculo>;
}
