import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <h1 className={styles.heroTitle}>
          Catálogo de Componentes de Software
          <span className={styles.heroSubtitle}>para Sistemas de Información</span>
        </h1>
        <p className={styles.heroDescription}>
          Un catálogo navegable de componentes recurrentes que materializan las
          necesidades de un sistema de información. Cada componente se describe
          con una estructura consistente y se vincula a las secciones del{' '}
          <strong>Tablero Digital</strong>, ayudando a equipos de proyecto a
          pasar de &quot;lo que necesitamos&quot; a &quot;cómo lo construimos&quot;.
        </p>
      </div>
    </header>
  );
}

function EntryCards() {
  const cards = [
    {
      title: 'Por Componente',
      description:
        'Explora el catálogo completo. Diecisiete componentes documentados con estructura consistente, ejemplos reales y mapeo al Tablero Digital.',
      to: '/docs/componentes/formulario-login',
    },
    {
      title: 'Por Sección del Tablero',
      description:
        '¿Qué componente materializa cada sección? La matriz consolidada te muestra qué toca cada componente: Entrada Manual, Conceptos, Visualización y más.',
      to: '/docs/secciones',
    },
    {
      title: 'Por Tags',
      description:
        'Agrupa por afinidad funcional: autenticación, visualización, ingesta de datos, seguridad. Facetas que cruzan los componentes sin encasillarlos.',
      to: '/docs/tags',
    },
  ];

  return (
    <section className={styles.cardsSection}>
      <div className="container">
        <div className="row">
          {cards.map((card) => (
            <div key={card.title} className="col col--4 margin-bottom--lg">
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
                <Link
                  className="button button--primary button--outline"
                  to={card.to}>
                  Explorar
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BoardTeaser() {
  const sections = [
    {label: 'Entradas Manuales', desc: 'Interacción directa con usuarios'},
    {label: 'Entradas Automáticas', desc: 'Ingesta sin intervención humana'},
    {label: 'Conceptos de Datos', desc: 'Entidades persistentes del sistema'},
    {label: 'Salidas por Demanda', desc: 'Información solicitada por el usuario'},
    {label: 'Salidas Automáticas', desc: 'Notificaciones y comunicación proactiva'},
    {label: 'Procesos Autónomos', desc: 'Tareas en segundo plano'},
  ];

  return (
    <section className={styles.boardSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>El Tablero Digital</h2>
        <p className={styles.sectionDescription}>
          Un modelo visual que organiza el alcance de un sistema de información en
          seis secciones. Cada componente del catálogo mapea a una o varias de ellas,
          mostrando qué partes del sistema materializa.
        </p>
        <Link to="/docs/tablero-digital" className={styles.boardGridLink}>
          <div className={styles.boardGrid}>
            {sections.map((s) => (
              <div key={s.label} className={styles.boardCell}>
                <span className={styles.boardCellLabel}>{s.label}</span>
                <span className={styles.boardCellDesc}>{s.desc}</span>
              </div>
            ))}
          </div>
        </Link>
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
