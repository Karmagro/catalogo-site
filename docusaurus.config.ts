import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// Este archivo se carga en Node, fuera del sistema de traducción de React:
// el título y el tagline se eligen por la variable que Docusaurus fija en cada
// build de idioma. Los rótulos del navbar y del footer sí se traducen por el
// camino normal (i18n/en/docusaurus-theme-classic/*.json).
const enIngles = process.env.DOCUSAURUS_CURRENT_LOCALE === 'en';

const config: Config = {
  title: enIngles ? 'Component Catalog' : 'Catálogo de Componentes',
  tagline: enIngles
    ? 'Recurring software components for information systems'
    : 'Componentes de software recurrentes para sistemas de información',
  favicon: 'img/favicon.ico?v=2',
  // favicon.ico es el respaldo universal (Safari); el SVG sigue el tema del navegador.
  // El sufijo ?v=N fuerza a los navegadores a refrescar el favicon: subirlo cada vez que cambie el dibujo.
  headTags: [
    {tagName: 'link', attributes: {rel: 'icon', type: 'image/svg+xml', href: '/img/favicon.svg?v=2'}},
  ],

  future: {
    v4: true,
  },

  url: 'https://catalogo-componentes-software.pages.dev',
  baseUrl: '/',

  organizationName: 'Karmagro',
  projectName: 'catalogo-componentes',

  // La versión del catálogo se escribe solo en package.json;
  // las páginas la leen desde customFields.
  customFields: {
    version: require('./package.json').version,
  },

  // Un enlace o ancla rotos rompen el build: es parte de la verificación del catálogo.
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    localeConfigs: {
      es: {label: 'Español'},
      en: {label: 'English'},
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // «Editar esta página» abre el archivo en GitHub sobre `dev`, para que la
          // propuesta entre por integración. En inglés, el espejo de i18n/en/.
          editUrl: 'https://github.com/Karmagro/catalogo-site/edit/dev/',
          editLocalizedFiles: true,
          tagsBasePath: 'etiquetas',
          // Las etiquetas se declaran en docs/tags.yml; una etiqueta que no esté
          // ahí rompe el build en vez de crear una nueva en silencio.
          tags: 'tags.yml',
          onInlineTags: 'throw',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['es', 'en'],
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: '/docs',
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  themeConfig: {
    // Tarjeta para redes sociales (1200×630), una por idioma. Lleva escrito el número de
    // componentes: si cambia, hay que regenerarla.
    image: enIngles ? 'img/social-card-en.png' : 'img/social-card.png',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Catálogo de Componentes',
      logo: {
        alt: 'Catálogo de Componentes',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
        href: '/docs/componentes/formulario-login',
      },
      items: [
        {to: '/', label: 'Inicio', position: 'left'},
        {type: 'search', position: 'left'},
        {to: '/docs/secciones', label: 'Por Sección', position: 'right'},
        {to: '/docs/etiquetas', label: 'Por Etiquetas', position: 'right'},
        {to: '/docs/tablero-digital', label: 'Tablero Digital', position: 'right'},
        {to: '/docs/sobre-el-catalogo', label: 'Sobre el Catálogo', position: 'right'},
        {to: '/creditos', label: 'Créditos', position: 'right'},
        {type: 'localeDropdown', position: 'right'},
        {type: 'custom-tutorialButton', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Catálogo',
          items: [
            {label: 'Componentes', to: '/docs/componentes/mantenedor'},
            {label: 'Por Sección', to: '/docs/secciones'},
            {label: 'Por Etiquetas', to: '/docs/etiquetas'},
          ],
        },
        {
          title: 'Tablero Digital',
          items: [
            {label: 'Explicación', to: '/docs/tablero-digital'},
            {label: 'Mapeo de componentes', to: '/docs/secciones'},
            {label: 'Herramienta en línea', href: 'https://tablero-digital.dcc.uchile.cl/'},
          ],
        },
        {
          title: 'Sobre el Catálogo',
          items: [
            {label: 'Estructura', to: '/docs/sobre-el-catalogo'},
            {label: 'Cómo usar', to: '/docs/sobre-el-catalogo'},
          ],
        },
        {
          title: 'Memoria',
          items: [
            {label: 'Créditos', to: '/creditos'},
            {label: 'Carlos Gálvez Romo', to: 'https://github.com/Karmagro'},
            {label: 'Universidad de Chile', to: 'https://www.dcc.uchile.cl/'},
          ],
        },
      ],
      // El copyright admite HTML. La versión inglesa está en i18n/en/docusaurus-theme-classic/footer.json.
      copyright: `Catálogo de Componentes · Carlos Gálvez Romo · Universidad de Chile<br/>Contenido bajo <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC-SA 4.0</a> · Código bajo <a href="https://github.com/Karmagro/catalogo-site/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">MIT</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
