#!/usr/bin/env node
/**
 * Prepara el espejo en inglés de una ficha o de una página, para traducirla.
 *
 *   node scripts/scaffold-i18n.mjs mantenedor formulario-login
 *   node scripts/scaffold-i18n.mjs secciones
 *   node scripts/scaffold-i18n.mjs --todo
 *
 * Por cada nombre copia `docs/…/<nombre>.mdx` a
 * `i18n/en/docusaurus-plugin-content-docs/current/…` y, si es una ficha, sus datos
 * (`src/data/tableros/<nombre>.ts`, `src/data/ejemplos/<nombre>.ts`) a la subcarpeta
 * `en/`. En la copia del MDX reescribe los dos imports de datos para que apunten a
 * `en/`: es el paso que a mano se olvida, y un tablero en inglés con post-its en
 * español no rompe el build.
 *
 * No traduce nada y no sobrescribe nunca: si el archivo de destino existe, lo deja
 * como está. Se puede correr las veces que haga falta.
 */
import {copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync} from 'node:fs';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const DOCS_EN = 'i18n/en/docusaurus-plugin-content-docs/current';
const DATOS = ['src/data/tableros', 'src/data/ejemplos'];

const creados = [];
const omitidos = [];

function asegurarDirectorio(ruta) {
  mkdirSync(dirname(join(RAIZ, ruta)), {recursive: true});
}

/** Copia `origen` a `destino` si `destino` no existe. `transformar` recibe y devuelve el texto. */
function copiarSiFalta(origen, destino, transformar) {
  if (existsSync(join(RAIZ, destino))) {
    omitidos.push(destino);
    return;
  }
  asegurarDirectorio(destino);
  if (transformar) {
    // UTF-8 sin BOM: los acentos del frontmatter y de los nombres propios se conservan.
    writeFileSync(join(RAIZ, destino), transformar(readFileSync(join(RAIZ, origen), 'utf8')), 'utf8');
  } else {
    copyFileSync(join(RAIZ, origen), join(RAIZ, destino));
  }
  creados.push(destino);
}

/** `@site/src/data/tableros/x` → `@site/src/data/tableros/en/x` (ídem ejemplos). Idempotente. */
function apuntarDatosAlIngles(mdx) {
  return mdx.replace(/(@site\/src\/data\/(?:tableros|ejemplos)\/)(?!en\/)/g, '$1en/');
}

function prepararFicha(slug) {
  copiarSiFalta(`docs/componentes/${slug}.mdx`, `${DOCS_EN}/componentes/${slug}.mdx`, apuntarDatosAlIngles);
  for (const dir of DATOS) {
    if (existsSync(join(RAIZ, dir, `${slug}.ts`))) {
      copiarSiFalta(`${dir}/${slug}.ts`, `${dir}/en/${slug}.ts`);
    }
  }
}

function prepararPagina(nombre) {
  copiarSiFalta(`docs/${nombre}.mdx`, `${DOCS_EN}/${nombre}.mdx`);
}

function listarMdx(dir) {
  return readdirSync(join(RAIZ, dir))
    .filter((f) => f.endsWith('.mdx') && !f.startsWith('_'))
    .map((f) => f.replace(/\.mdx$/, ''));
}

const argumentos = process.argv.slice(2);
if (argumentos.length === 0) {
  console.error('Uso: node scripts/scaffold-i18n.mjs <ficha o página>… | --todo');
  process.exit(2);
}

const fichas = listarMdx('docs/componentes');
const paginas = listarMdx('docs');
const pedidos = argumentos.includes('--todo') ? [...fichas, ...paginas] : argumentos;

for (const nombre of pedidos) {
  if (fichas.includes(nombre)) prepararFicha(nombre);
  else if (paginas.includes(nombre)) prepararPagina(nombre);
  else {
    console.error(`«${nombre}» no es una ficha de docs/componentes/ ni una página de docs/`);
    process.exit(1);
  }
}

// Las etiquetas: misma clave y mismo permalink, distinto label.
if (existsSync(join(RAIZ, 'docs/tags.yml'))) copiarSiFalta('docs/tags.yml', `${DOCS_EN}/tags.yml`);

for (const ruta of creados) console.log(`creado    ${ruta}`);
for (const ruta of omitidos) console.log(`ya existe ${ruta}`);
console.log(`\n${creados.length} archivo${creados.length === 1 ? '' : 's'} por traducir.`);
