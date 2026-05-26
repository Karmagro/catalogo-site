import React from 'react';
import type {TableroData} from './types';
import {SECCIONES, SECCION_ORDER} from './secciones';
import PostIt from './PostIt';
import styles from './styles.module.css';

interface TableroDigitalProps {
  data: TableroData;
}

export default function TableroDigital({data}: TableroDigitalProps): React.ReactElement {
  return (
    <div className={styles.tablero}>
      <div className={styles.grid}>
        {SECCION_ORDER.map((seccion) => {
          const info = SECCIONES[seccion];
          const postIts = data.tarjetas[seccion];
          const isEmpty = postIts.length === 0;

          const cellStyle: React.CSSProperties = {
            borderLeftColor: `var(${info.cssVar})`,
          };

          return (
            <div
              key={seccion}
              className={`${styles.cell} ${isEmpty ? styles.cellEmpty : ''}`}
              style={cellStyle}
            >
              <div className={styles.cellHeader}>{info.label}</div>
              <div className={styles.cellBody}>
                {isEmpty ? (
                  <span className={styles.cellEmptyMark}>—</span>
                ) : (
                  postIts.map((postIt, idx) => (
                    <PostIt key={idx} data={postIt} seccion={seccion} />
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
