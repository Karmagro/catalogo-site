import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {UserRound, GraduationCap, Building2, ExternalLink, Scale} from 'lucide-react';

import styles from './creditos.module.css';

const URL_SITIO = 'https://catalogo-componentes-software.pages.dev';
const URL_REPO = 'https://github.com/Karmagro/catalogo-site';
const URL_CC = 'https://creativecommons.org/licenses/by-nc-sa/4.0/';

// Se arma dentro de una función, y con literales, para que `write-translations`
// extraiga el rol y el cargo y para que se resuelvan en el idioma de la página.
function profesores() {
  return [
    {
      nombre: 'Sergio Ochoa',
      rol: translate({id: 'creditos.profesor.guia', message: 'Profesor guía'}),
      cargo: translate({id: 'creditos.profesor.asociado', message: 'Profesor Asociado · DCC'}),
      foto: '/img/creditos/sergio-ochoa.png',
      url: 'https://www.dcc.uchile.cl/nosotros/academico/sochoa/',
    },
    {
      nombre: 'Daniel Perovich',
      rol: translate({id: 'creditos.profesor.coguia', message: 'Profesor co-guía'}),
      cargo: translate({id: 'creditos.profesor.adjunto', message: 'Profesor Adjunto · DCC'}),
      foto: '/img/creditos/daniel-perovich.png',
      url: 'https://www.dcc.uchile.cl/nosotros/academico/dperovich/',
    },
  ];
}

function Hero() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <p className={styles.heroEyebrow}>
          <Translate id="creditos.antetitulo">Créditos</Translate>
        </p>
        <h1 className={styles.heroTitle}>
          <Translate id="creditos.titulo">Quién hizo este catálogo</Translate>
        </h1>
        <p className={styles.heroDescription}>
          <Translate id="creditos.descripcion">
            Este sitio es el artefacto navegable de una memoria de título del Departamento de Ciencias de la Computación de la Universidad de Chile.
          </Translate>
        </p>
      </div>
    </header>
  );
}

export default function Creditos(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const version = siteConfig.customFields?.version as string;
  const base = useBaseUrl('/');
  return (
    <Layout
      title={translate({id: 'creditos.meta.titulo', message: 'Créditos', description: 'Título de la pestaña de la página de créditos'})}
      description={translate({
        id: 'creditos.meta.descripcion',
        message: 'Créditos del Catálogo de Componentes: autor, profesores guía y contexto académico.',
        description: 'Meta descripción de la página de créditos',
      })}>
      <Hero />
      <main className="container">
        {/* Tarjeta de créditos versionada: todo cuelga del badge de versión
            para que el bloque escale con futuras versiones (v2, v3…). */}
        <section className={styles.identityCard}>
          <div className={styles.identityBadge}>
            <Translate id="creditos.version" values={{version}}>
              {'Versión {version}'}
            </Translate>
          </div>
          <h2 className={styles.identityTitle}>
            <Translate id="creditos.identidad.titulo">Catálogo de Componentes</Translate>
          </h2>
          <p className={styles.identityDesc}>
            <Translate
              id="creditos.identidad.desc"
              description="{tablero} es el enlace «Tablero Digital» (creditos.identidad.tablero) y {memoria} el título de la memoria en cursiva (creditos.identidad.memoria)"
              values={{
                tablero: (
                  <Link to="/docs/tablero-digital">
                    <Translate id="creditos.identidad.tablero">Tablero Digital</Translate>
                  </Link>
                ),
                memoria: (
                  <em>
                    <Translate
                      id="creditos.identidad.memoria"
                      description="Título formal de la memoria. En otros idiomas: el original en español seguido de su traducción entre paréntesis">
                      «Catalogación de componentes recurrentes de software que forman parte de sistemas de información»
                    </Translate>
                  </em>
                ),
              }}>
              {
                'Componentes de software recurrentes para sistemas de información, documentados con estructura uniforme y mapeados al {tablero}. Desarrollado durante 2026 como parte de la memoria {memoria}.'
              }
            </Translate>
          </p>

          {/* Autor */}
          <div className={styles.block}>
            <h3 className={styles.blockHeading}>
              <GraduationCap size={18} strokeWidth={2} /> <Translate id="creditos.autor">Autor</Translate>
            </h3>
            <div className={styles.personGrid}>
              <article className={styles.personCard}>
                <div className={styles.avatarPlaceholder} aria-hidden="true">
                  <UserRound size={40} strokeWidth={1.5} />
                </div>
                <div className={styles.personBody}>
                  <h4 className={styles.personName}>Carlos Gálvez Romo</h4>
                  <span className={styles.personRole}>
                    <Translate id="creditos.autor.rol">Memorista</Translate>
                  </span>
                  <span className={styles.personMeta}>
                    <Translate id="creditos.autor.carrera">
                      Ingeniería Civil en Computación · Universidad de Chile
                    </Translate>
                  </span>
                </div>
              </article>
            </div>
          </div>

          {/* Profesores */}
          <div className={styles.block}>
            <h3 className={styles.blockHeading}>
              <UserRound size={18} strokeWidth={2} /> <Translate id="creditos.profesores">Profesores</Translate>
            </h3>
            <div className={styles.personGrid}>
              {profesores().map((p) => (
                <a
                  key={p.nombre}
                  className={styles.personCard}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer">
                  <img className={styles.avatar} src={base + p.foto.slice(1)} alt={p.nombre} />
                  <div className={styles.personBody}>
                    <h4 className={styles.personName}>
                      {p.nombre}
                      <ExternalLink size={13} strokeWidth={2} className={styles.extIcon} />
                    </h4>
                    <span className={styles.personRole}>{p.rol}</span>
                    <span className={styles.personMeta}>{p.cargo}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contexto institucional */}
          <div className={styles.block}>
            <h3 className={styles.blockHeading}>
              <Building2 size={18} strokeWidth={2} /> <Translate id="creditos.contexto">Contexto</Translate>
            </h3>
            <p className={styles.contextText}>
              <Translate id="creditos.contexto.desc">
                Trabajo desarrollado para optar al título de Ingeniero Civil en Computación, en el Departamento de Ciencias de la Computación (DCC) de la Facultad de Ciencias Físicas y Matemáticas (FCFM), Universidad de Chile · 2026.
              </Translate>
            </p>
          </div>

          {/* Licencia y cómo citar */}
          <div className={styles.block}>
            <h3 className={styles.blockHeading}>
              <Scale size={18} strokeWidth={2} /> <Translate id="creditos.licencia">Licencia y cómo citar</Translate>
            </h3>
            <p className={styles.contextText}>
              <Translate
                id="creditos.licencia.desc"
                description="{cc} es el enlace a CC BY-NC-SA 4.0, {mit} el enlace a la licencia MIT y {atribuciones} el enlace al archivo de atribuciones (creditos.licencia.atribuciones)"
                values={{
                  cc: <Link to={URL_CC}>CC BY-NC-SA 4.0</Link>,
                  mit: <Link to={`${URL_REPO}/blob/main/LICENSE`}>MIT</Link>,
                  atribuciones: (
                    <Link to={`${URL_REPO}/blob/main/ATRIBUCIONES.md`}>
                      <Translate id="creditos.licencia.atribuciones">atribuciones</Translate>
                    </Link>
                  ),
                }}>
                {
                  'El contenido del catálogo (fichas, tableros, mapeo y traducciones) se publica bajo {cc}: puede copiarse, adaptarse y traducirse citando al autor, sin fines comerciales y compartiendo bajo la misma licencia. El código del sitio está bajo {mit}. Las capturas de sistemas de terceros y las fotografías pertenecen a sus titulares y se detallan en las {atribuciones}.'
                }
              </Translate>
            </p>
            <p className={styles.citaText}>
              <Translate
                id="creditos.cita"
                description="Cita sugerida. {version} es el número de versión y {sitio} la URL del sitio"
                values={{version, sitio: <Link to={URL_SITIO}>{URL_SITIO.replace('https://', '')}</Link>}}>
                {
                  'Gálvez Romo, C. (2026). Catálogo de Componentes: componentes de software recurrentes para sistemas de información (versión {version}). Departamento de Ciencias de la Computación, Universidad de Chile. {sitio}'
                }
              </Translate>
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
