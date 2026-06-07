import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {UserRound, GraduationCap, Building2, ExternalLink} from 'lucide-react';

import styles from './creditos.module.css';

const TITULO_MEMORIA =
  'Catalogación de componentes recurrentes de software que forman parte de sistemas de información';

const PROFESORES = [
  {
    nombre: 'Sergio Ochoa',
    rol: 'Profesor guía',
    cargo: 'Profesor Asociado · DCC',
    foto: '/img/creditos/sergio-ochoa.png',
    url: 'https://www.dcc.uchile.cl/nosotros/academico/sochoa/',
  },
  {
    nombre: 'Daniel Perovich',
    rol: 'Profesor co-guía',
    cargo: 'Profesor Adjunto · DCC',
    foto: '/img/creditos/daniel-perovich.png',
    url: 'https://www.dcc.uchile.cl/nosotros/academico/dperovich/',
  },
];

function Hero() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <p className={styles.heroEyebrow}>Créditos</p>
        <h1 className={styles.heroTitle}>Quién hizo este catálogo</h1>
        <p className={styles.heroDescription}>
          Este sitio es el artefacto navegable de una memoria de título del
          Departamento de Ciencias de la Computación de la Universidad de Chile.
        </p>
      </div>
    </header>
  );
}

export default function Creditos(): ReactNode {
  return (
    <Layout
      title="Créditos"
      description="Créditos del Catálogo de Componentes: autor, profesores guía y contexto académico.">
      <Hero />
      <main className="container">
        {/* Identidad del artefacto */}
        <section className={styles.identityCard}>
          <div className={styles.identityBadge}>Versión 1.0</div>
          <h2 className={styles.identityTitle}>Catálogo de Componentes</h2>
          <p className={styles.identityDesc}>
            Componentes de software recurrentes para sistemas de información,
            documentados con estructura uniforme y mapeados al{' '}
            <Link to="/docs/tablero-digital">Tablero Digital</Link>. Desarrollado
            durante 2026 como parte de la memoria{' '}
            <em>«{TITULO_MEMORIA}»</em>.
          </p>
        </section>

        {/* Autor */}
        <section className={styles.block}>
          <h2 className={styles.blockHeading}>
            <GraduationCap size={18} strokeWidth={2} /> Autor
          </h2>
          <div className={styles.personGrid}>
            <article className={styles.personCard}>
              <div className={styles.avatarPlaceholder} aria-hidden="true">
                <UserRound size={40} strokeWidth={1.5} />
              </div>
              <div className={styles.personBody}>
                <h3 className={styles.personName}>Carlos Gálvez Romo</h3>
                <span className={styles.personRole}>Memorista</span>
                <span className={styles.personMeta}>
                  Ingeniería Civil en Computación · Universidad de Chile
                </span>
              </div>
            </article>
          </div>
        </section>

        {/* Profesores */}
        <section className={styles.block}>
          <h2 className={styles.blockHeading}>
            <UserRound size={18} strokeWidth={2} /> Profesores
          </h2>
          <div className={styles.personGrid}>
            {PROFESORES.map((p) => (
              <a
                key={p.nombre}
                className={styles.personCard}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer">
                <img className={styles.avatar} src={p.foto} alt={p.nombre} />
                <div className={styles.personBody}>
                  <h3 className={styles.personName}>
                    {p.nombre}
                    <ExternalLink size={13} strokeWidth={2} className={styles.extIcon} />
                  </h3>
                  <span className={styles.personRole}>{p.rol}</span>
                  <span className={styles.personMeta}>{p.cargo}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Contexto institucional */}
        <section className={styles.block}>
          <h2 className={styles.blockHeading}>
            <Building2 size={18} strokeWidth={2} /> Contexto
          </h2>
          <p className={styles.contextText}>
            Trabajo desarrollado para optar al título de Ingeniero Civil en
            Computación, en el Departamento de Ciencias de la Computación (DCC) de
            la Facultad de Ciencias Físicas y Matemáticas (FCFM), Universidad de
            Chile · 2026.
          </p>
        </section>
      </main>
    </Layout>
  );
}
