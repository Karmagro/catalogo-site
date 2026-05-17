import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Catálogo de Componentes',
  tagline: 'Componentes de software recurrentes para sistemas de información',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://catalogocomponentes.cl',
  baseUrl: '/',

  organizationName: 'cgalvezr',
  projectName: 'catalogo-componentes',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
        },
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
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Catálogo de Componentes',
      logo: {
        alt: 'Catálogo de Componentes',
        src: 'img/logo.svg',
        href: '/docs/componentes/formulario-login',
      },
      items: [
        {to: '/', label: 'Inicio', position: 'left'},
        {type: 'search', position: 'left'},
        {to: '/docs/secciones', label: 'Por Sección', position: 'right'},
        {to: '/docs/tags', label: 'Por Tags', position: 'right'},
        {to: '/docs/tablero-digital', label: 'Tablero Digital', position: 'right'},
        {to: '/docs/sobre-el-catalogo', label: 'Sobre el Catálogo', position: 'right'},
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
            {label: 'Por Tags', to: '/docs/tags'},
          ],
        },
        {
          title: 'Tablero Digital',
          items: [
            {label: 'Explicación', to: '/docs/tablero-digital'},
            {label: 'Mapeo de componentes', to: '/docs/secciones'},
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
          title: 'Tesis',
          items: [
            {label: 'Carlos Gálvez Romo', to: 'https://github.com/Karmagro'},
            {label: 'Universidad de Chile', to: 'https://www.dcc.uchile.cl/'},
          ],
        },
      ],
      copyright: `Catálogo de Componentes · Carlos Gálvez Romo · Universidad de Chile`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
