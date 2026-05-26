import React from 'react';
import type {PostIt as PostItData, Seccion} from './types';
import {SECCIONES} from './secciones';
import styles from './styles.module.css';

interface PostItProps {
  data: PostItData;
  seccion: Seccion;
}

export default function PostIt({data, seccion}: PostItProps): React.ReactElement {
  const {cssVar} = SECCIONES[seccion];
  const isMandatorio = data.variante === 'mandatorio';

  const mixPercent = isMandatorio ? 22 : 8;
  const borderPercent = isMandatorio ? 60 : 45;

  const style: React.CSSProperties = {
    background: `color-mix(in srgb, var(${cssVar}) ${mixPercent}%, var(--ifm-background-color))`,
    borderColor: `color-mix(in srgb, var(${cssVar}) ${borderPercent}%, transparent)`,
  };

  const className = `${styles.postIt} ${isMandatorio ? styles.postItMandatorio : styles.postItOpcional}`;

  return (
    <div className={className} style={style}>
      <span className={styles.postItTitulo}>{data.titulo}</span>
      {data.subtitulo && <span className={styles.postItSubtitulo}>{data.subtitulo}</span>}
    </div>
  );
}
