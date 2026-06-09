import React from 'react';
import type {ReactNode} from 'react';
import {useDoc} from '@docusaurus/plugin-content-docs/client';

/**
 * Chips de etiquetas al inicio de cada ficha de componente (R15).
 * Lee las tags del frontmatter vía useDoc() para no duplicarlas en el MDX.
 * El color de cada chip lo resuelve el mapping global por href en custom.css
 * (`a[href$="/etiquetas/<slug>"] { --tag-color: ... }`), el mismo que usan los
 * chips del pie de ficha y las páginas /docs/etiquetas.
 */
export default function FichaTags(): ReactNode {
  const {metadata} = useDoc();
  const tags = metadata.tags ?? [];

  if (tags.length === 0) {
    return null;
  }

  return (
    <div className="ficha-top-tags">
      <b className="ficha-top-tags__label">Etiquetas:</b>
      {tags.map((tag) => (
        <a key={tag.permalink} href={tag.permalink} rel="tag">
          {tag.label}
        </a>
      ))}
    </div>
  );
}
