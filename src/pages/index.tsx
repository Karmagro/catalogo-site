import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import {SECCIONES} from '@site/src/components/TableroDigital/secciones';
import {rotuloSeccion} from '@site/src/components/TableroDigital/rotulos';
import type {Seccion} from '@site/src/components/TableroDigital/types';
import {MAPEO, SECCIONES_FLUJO} from '@site/src/data/mapeo';

import styles from './index.module.css';

// El número de componentes sale de los datos: no hay una cifra escrita que actualizar.
const TOTAL_COMPONENTES = MAPEO.length;

function HomepageHeader() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <h1 className={styles.heroTitle}>
          {/* El orden de las dos líneas cambia con el idioma: va en el mensaje. */}
          <Translate
            id="home.hero.titulo"
            description="Título de la portada. {br} es el salto de línea y {acento} la parte destacada (home.hero.titulo.acento)"
            values={{
              br: <br />,
              acento: (
                <span className={styles.heroTitleAccent}>
                  <Translate id="home.hero.titulo.acento" description="Parte destacada del título de la portada">
                    de Software
                  </Translate>
                </span>
              ),
            }}>
            {'Catálogo de Componentes{br}{acento}'}
          </Translate>
        </h1>
        <p className={styles.heroDescription}>
          <Translate
            id="home.hero.descripcion"
            description="Bajada de la portada. {tablero} es «Tablero Digital» en negrita (home.tablero)"
            values={{
              tablero: (
                <strong>
                  <Translate id="home.tablero" description="Nombre del Tablero Digital dentro de una frase">
                    Tablero Digital
                  </Translate>
                </strong>
              ),
            }}>
            {
              'Un catálogo navegable de componentes recurrentes para sistemas de información. Cada componente está documentado con estructura consistente y vinculado al {tablero} — para pasar de "lo que necesitamos" a "cómo lo construimos".'
            }
          </Translate>
        </p>
        <div className={styles.heroCtas}>
          <Link className={styles.ctaPrimary} to="/docs/componentes/formulario-login">
            <Translate id="home.hero.cta.explorar" values={{n: TOTAL_COMPONENTES}}>
              {'Explorar los {n} componentes →'}
            </Translate>
          </Link>
          <Link className={styles.ctaSecondary} to="/docs/sobre-el-catalogo">
            <Translate id="home.hero.cta.que-es">¿Qué es este catálogo?</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

function EntryCards() {
  return (
    <section className={styles.cardsSection}>
      <div className="container">
        <div className={styles.cardsGrid}>

          {/* Tarjeta principal */}
          <div className={styles.cardPrimary}>
            <div className={styles.cardPrimaryBadge}>
              <Translate id="home.componente.insignia">Catálogo completo</Translate>
            </div>
            <h2 className={styles.cardPrimaryTitle}>
              <Translate id="home.componente.titulo">Por Componente</Translate>
            </h2>
            <p className={styles.cardPrimaryDesc}>
              <Translate id="home.componente.desc" values={{n: TOTAL_COMPONENTES}}>
                {
                  '{n} componentes documentados con estructura de 11 campos: descripción, capacidades, delimitaciones, flujo de información, modalidades, dependencias, ejemplos y mapeo al Tablero Digital.'
                }
              </Translate>
            </p>
            <Link className={styles.ctaPrimary} to="/docs/componentes/formulario-login">
              <Translate id="home.componente.cta">Ver todos los componentes →</Translate>
            </Link>
          </div>

          {/* Tarjetas secundarias */}
          <div className={styles.cardsSecondaryGroup}>
            <div className={styles.cardSecondary}>
              <div className={styles.cardSecondaryIcon} style={{background: 'color-mix(in srgb, var(--seccion-salidas-demanda) 12%, transparent)', color: 'var(--seccion-salidas-demanda)'}}>⊞</div>
              <h3 className={styles.cardSecondaryTitle}>
                <Translate id="home.seccion.titulo">Por Sección del Tablero</Translate>
              </h3>
              <p className={styles.cardSecondaryDesc}>
                <Translate id="home.seccion.desc">
                  Matriz consolidada: qué componentes tocan cada sección del tablero, con carácter mandatorio u opcional.
                </Translate>
              </p>
              <Link className={styles.ctaSecondary} to="/docs/secciones">
                <Translate id="home.seccion.cta">Ver matriz →</Translate>
              </Link>
            </div>

            <div className={styles.cardSecondary}>
              <div className={styles.cardSecondaryIcon} style={{background: 'color-mix(in srgb, var(--seccion-actualizacion-automatica) 12%, transparent)', color: 'var(--seccion-actualizacion-automatica)'}}>⊛</div>
              <h3 className={styles.cardSecondaryTitle}>
                <Translate id="home.etiquetas.titulo">Por Etiquetas</Translate>
              </h3>
              <p className={styles.cardSecondaryDesc}>
                <Translate id="home.etiquetas.desc">
                  Agrupación por afinidad funcional: autenticación, visualización, seguridad, integración y más.
                </Translate>
              </p>
              <Link className={styles.ctaSecondary} to="/docs/etiquetas">
                <Translate id="home.etiquetas.cta">Ver etiquetas →</Translate>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/** Bajada de cada sección en el teaser. El rótulo y el color salen de SECCIONES. */
function descripcionSeccion(seccion: Seccion): string {
  switch (seccion) {
    case 'actualizacion-manual':
      return translate({id: 'home.tablero.seccion.actualizacion-manual', message: 'Datos que el usuario crea o modifica'});
    case 'actualizacion-automatica':
      return translate({id: 'home.tablero.seccion.actualizacion-automatica', message: 'Ingesta sin intervención humana'});
    case 'conceptos-datos':
      return translate({id: 'home.tablero.seccion.conceptos-datos', message: 'Entidades persistentes del sistema'});
    case 'salidas-demanda':
      return translate({id: 'home.tablero.seccion.salidas-demanda', message: 'Información solicitada por el usuario'});
    case 'salidas-automaticas':
      return translate({id: 'home.tablero.seccion.salidas-automaticas', message: 'Notificaciones y comunicación proactiva'});
    case 'procesos-autonomos':
      return translate({id: 'home.tablero.seccion.procesos-autonomos', message: 'Tareas en segundo plano'});
  }
}

function BoardTeaser() {
  return (
    <section className={styles.boardSection}>
      <div className="container">
        <div className={styles.boardSectionInner}>
          <div className={styles.boardSectionText}>
            <p className={styles.boardEyebrow}>
              <Translate id="home.tablero.antetitulo">Marco conceptual</Translate>
            </p>
            <h2 className={styles.boardTitle}>
              <Translate id="home.tablero.titulo">El Tablero Digital</Translate>
            </h2>
            <p className={styles.boardDesc}>
              <Translate id="home.tablero.desc">
                Instrumento visual para definir el alcance de un sistema de información. Organiza los requisitos en seis secciones que reflejan el flujo natural de la información: cómo entra, cómo se almacena, cómo se procesa y cómo se comunica al exterior.
              </Translate>
            </p>
            <Link to="/docs/tablero-digital" className={styles.ctaSecondary}>
              <Translate id="home.tablero.cta">Conocer el Tablero Digital →</Translate>
            </Link>
          </div>

          <Link to="/docs/tablero-digital" className={styles.boardGridLink}>
            <div className={styles.boardGrid}>
              {SECCIONES_FLUJO.map((id) => {
                const color = `var(${SECCIONES[id].cssVar})`;
                return (
                  <div
                    key={id}
                    className={styles.boardCell}
                    style={{
                      borderColor: `color-mix(in srgb, ${color} 50%, transparent)`,
                      background: `color-mix(in srgb, ${color} 13%, var(--ifm-background-color))`,
                    }}>
                    <span
                      className={styles.boardCellDot}
                      style={{background: color}}
                    />
                    <span className={styles.boardCellLabel}>{rotuloSeccion(id)}</span>
                    <span className={styles.boardCellDesc}>{descripcionSeccion(id)}</span>
                  </div>
                );
              })}
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      description={translate({
        id: 'home.meta.descripcion',
        message: 'Catálogo navegable de componentes de software recurrentes para sistemas de información.',
        description: 'Meta descripción de la portada',
      })}>
      <HomepageHeader />
      <main>
        <EntryCards />
        <BoardTeaser />
      </main>
    </Layout>
  );
}
