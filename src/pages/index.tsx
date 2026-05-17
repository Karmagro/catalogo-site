import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const SECTION_COLORS: Record<string, string> = {
  'Entradas Manuales':    'var(--seccion-entradas-manuales)',
  'Entradas Automáticas': 'var(--seccion-entradas-automaticas)',
  'Conceptos de Datos':   'var(--seccion-conceptos)',
  'Salidas por Demanda':  'var(--seccion-salidas-demanda)',
  'Salidas Automáticas':  'var(--seccion-salidas-automaticas)',
  'Procesos Autónomos':   'var(--seccion-procesos-autonomos)',
};

function HomepageHeader() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <p className={styles.heroEyebrow}>Tesis de Ingeniería Civil Informática · Universidad de Chile</p>
        <h1 className={styles.heroTitle}>
          Catálogo de Componentes<br />
          <span className={styles.heroTitleAccent}>de Software</span>
        </h1>
        <p className={styles.heroDescription}>
          Un catálogo navegable de componentes recurrentes para sistemas de información.
          Cada componente está documentado con estructura consistente y vinculado
          al <strong>Tablero Digital</strong> — para pasar de "lo que necesitamos"
          a "cómo lo construimos".
        </p>
        <div className={styles.heroCtas}>
          <Link className={styles.ctaPrimary} to="/docs/componentes/formulario-login">
            Explorar los 17 componentes →
          </Link>
          <Link className={styles.ctaSecondary} to="/docs/sobre-el-catalogo">
            ¿Qué es este catálogo?
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
            <div className={styles.cardPrimaryBadge}>Catálogo completo</div>
            <h2 className={styles.cardPrimaryTitle}>Por Componente</h2>
            <p className={styles.cardPrimaryDesc}>
              17 componentes documentados con estructura de 11 campos: descripción,
              capacidades, delimitaciones, flujo de información, modalidades,
              dependencias, ejemplos y mapeo al Tablero Digital.
            </p>
            <Link className={styles.ctaPrimary} to="/docs/componentes/formulario-login">
              Ver todos los componentes →
            </Link>
          </div>

          {/* Tarjetas secundarias */}
          <div className={styles.cardsSecondaryGroup}>
            <div className={styles.cardSecondary}>
              <div className={styles.cardSecondaryIcon} style={{background: 'color-mix(in srgb, var(--seccion-salidas-demanda) 12%, transparent)', color: 'var(--seccion-salidas-demanda)'}}>⊞</div>
              <h3 className={styles.cardSecondaryTitle}>Por Sección del Tablero</h3>
              <p className={styles.cardSecondaryDesc}>
                Matriz consolidada: qué componentes tocan cada sección del tablero, con carácter mandatorio u opcional.
              </p>
              <Link className={styles.ctaSecondary} to="/docs/secciones">Ver matriz →</Link>
            </div>

            <div className={styles.cardSecondary}>
              <div className={styles.cardSecondaryIcon} style={{background: 'color-mix(in srgb, var(--seccion-entradas-automaticas) 12%, transparent)', color: 'var(--seccion-entradas-automaticas)'}}>⊛</div>
              <h3 className={styles.cardSecondaryTitle}>Por Tags</h3>
              <p className={styles.cardSecondaryDesc}>
                Agrupación por afinidad funcional: autenticación, visualización, seguridad, integración y más.
              </p>
              <Link className={styles.ctaSecondary} to="/docs/tags">Ver tags →</Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function BoardTeaser() {
  const sections = [
    {label: 'Entradas Manuales',    desc: 'Interacción directa con usuarios'},
    {label: 'Entradas Automáticas', desc: 'Ingesta sin intervención humana'},
    {label: 'Conceptos de Datos',   desc: 'Entidades persistentes del sistema'},
    {label: 'Salidas por Demanda',  desc: 'Información solicitada por el usuario'},
    {label: 'Salidas Automáticas',  desc: 'Notificaciones y comunicación proactiva'},
    {label: 'Procesos Autónomos',   desc: 'Tareas en segundo plano'},
  ];

  return (
    <section className={styles.boardSection}>
      <div className="container">
        <div className={styles.boardSectionInner}>
          <div className={styles.boardSectionText}>
            <p className={styles.boardEyebrow}>Marco conceptual</p>
            <h2 className={styles.boardTitle}>El Tablero Digital</h2>
            <p className={styles.boardDesc}>
              Instrumento visual para definir el alcance de un sistema de información.
              Organiza los requisitos en seis secciones que reflejan el flujo natural
              de la información: cómo entra, cómo se almacena, cómo se procesa
              y cómo se comunica al exterior.
            </p>
            <Link to="/docs/tablero-digital" className={styles.ctaSecondary}>
              Conocer el Tablero Digital →
            </Link>
          </div>

          <Link to="/docs/tablero-digital" className={styles.boardGridLink}>
            <div className={styles.boardGrid}>
              {sections.map((s) => {
                const color = SECTION_COLORS[s.label];
                return (
                  <div
                    key={s.label}
                    className={styles.boardCell}
                    style={{
                      borderColor: `color-mix(in srgb, ${color} 50%, transparent)`,
                      background: `color-mix(in srgb, ${color} 13%, var(--ifm-background-color))`,
                    }}>
                    <span
                      className={styles.boardCellDot}
                      style={{background: color}}
                    />
                    <span className={styles.boardCellLabel}>{s.label}</span>
                    <span className={styles.boardCellDesc}>{s.desc}</span>
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
  useDocusaurusContext();
  return (
    <Layout description="Catálogo navegable de componentes de software recurrentes para sistemas de información.">
      <HomepageHeader />
      <main>
        <EntryCards />
        <BoardTeaser />
      </main>
    </Layout>
  );
}
