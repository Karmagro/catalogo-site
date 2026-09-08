import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Catálogo de Componentes',
  tagline: 'Componentes de software recurrentes para sistemas de información',
  favicon: 'img/favicon.ico',
  // favicon.ico es el respaldo universal (Safari); el SVG sigue el tema del navegador.
  headTags: [
    {tagName: 'link', attributes: {rel: 'icon', type: 'image/svg+xml', href: '/img/favicon.svg'}},
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
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
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
      copyright: `Catálogo de Componentes · Carlos Gálvez Romo · Universidad de Chile`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
