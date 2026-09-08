#!/usr/bin/env node
/**
 * Verificación del catálogo: comprueba que cada componente tiene la forma
 * que hace comparable al catálogo y que las fuentes que lo describen
 * (ficha, tablero, galería, mapeo, etiquetas) dicen lo mismo.
 *
 *   npm run verificar        → este script (menos de 2 s, sin red, sin dependencias)
 *   npm run verificar:todo   → este script + typecheck + build (lo que corre en CI)
 *
 * Sale con código 1 si hay ERRORES; con 0 si solo hay advertencias.
 *
 * Requiere Node 22.18 o superior: los datos (`src/data/**.ts`) se importan tal
 * cual gracias al *type stripping* nativo, sin compilar ni parsear a mano.
 *
 * Lo que este script NO verifica: si un componente merece estar en el catálogo
 * (si es realmente recurrente, si no es una modalidad de otro, si sus
 * delimitaciones son nítidas). Eso lo sostiene el proceso de propuesta y
 * revisión de componentes, no una comprobación automática.
 */

// Node avisa por consola al importar .ts sin "type" en package.json y por el
// type stripping. Son ruido para quien corre el script; el resto de avisos pasa.
process.removeAllListeners('warning');
process.on('warning', (w) => {
  if (w.name === 'ExperimentalWarning' || w.code === 'MODULE_TYPELESS_PACKAGE_JSON') return;
  console.warn(w);
});

import {readdirSync, readFileSync, existsSync, statSync} from 'node:fs';
import {join, basename, dirname, sep} from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');

// ─── Constantes del modelo ──────────────────────────────────────────────────

/** Los diez H2 de la ficha, en el orden canónico. El campo 1 (alias) va bajo el H1. */
const H2_CANONICOS = [
  'Ejemplos',
  'Descripción',
  'Capacidades mandatorias',
  'Capacidades adicionales',
  'Delimitaciones',
  'Flujo de información',
  'Modalidades',
  'Dependencias típicas',
  'Mapeo al Tablero Digital',
  'Ejemplo de Tablero Digital',
];

/** Valores de la columna «Vínculo» de la tabla de observaciones de cada ficha. */
const VINCULO_TABLA = {Siempre: 'mandatorio', Opcional: 'opcional', No: null};

/** Interruptores de comprobaciones que dependen de trabajo pendiente. */
const ENCABEZADOS_CON_ID_ES_ERROR = false; // pasa a true cuando se corra `write-heading-ids`
const ARCHIVO_ATRIBUCIONES = 'ATRIBUCIONES.md'; // cuando exista, se cruza con las imágenes

// ─── Reporte ────────────────────────────────────────────────────────────────

const errores = [];
const advertencias = [];
let bloqueActual = '';

function error(msg) {
  errores.push({bloque: bloqueActual, msg});
}
function advertencia(msg) {
  advertencias.push({bloque: bloqueActual, msg});
}

const VERSION_NODE_MINIMA = [22, 18];

function verificarNode() {
  const [mayor, menor] = process.versions.node.split('.').map(Number);
  const [mMayor, mMenor] = VERSION_NODE_MINIMA;
  if (mayor < mMayor || (mayor === mMayor && menor < mMenor)) {
    console.error(
      `Este script necesita Node ${mMayor}.${mMenor} o superior (tienes ${process.versions.node}). ` +
        'Ver .nvmrc.',
    );
    process.exit(2);
  }
}

// ─── Utilidades ─────────────────────────────────────────────────────────────

function leer(ruta) {
  return readFileSync(join(RAIZ, ruta), 'utf8');
}

function existe(ruta) {
  return existsSync(join(RAIZ, ruta));
}

function listar(dir, extension) {
  return readdirSync(join(RAIZ, dir))
    .filter((f) => f.endsWith(extension))
    .sort();
}

async function importar(ruta) {
  return import(pathToFileURL(join(RAIZ, ruta)).href);
}

/** Único export de un módulo de datos (tableros/*.ts, ejemplos/*.ts). */
function unicoExport(modulo, ruta) {
  const claves = Object.keys(modulo);
  if (claves.length !== 1) {
    throw new Error(`${ruta} debe exportar exactamente un objeto (exporta ${claves.length})`);
  }
  return modulo[claves[0]];
}

/** Slug ASCII de una etiqueta: el que Docusaurus usa en /docs/etiquetas/<slug>. */
function slugEtiqueta(etiqueta) {
  return etiqueta
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/** Frontmatter mínimo: solo se necesita `tags` (lista YAML de una línea o en bloque). */
function parsearFrontmatter(texto) {
  const m = texto.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return null;
  const fm = {tags: null};
  const lineas = m[1].split(/\r?\n/);
  for (let i = 0; i < lineas.length; i++) {
    const inline = lineas[i].match(/^tags:\s*\[(.*)\]\s*$/);
    if (inline) {
      fm.tags = inline[1]
        .split(',')
        .map((t) => t.trim().replace(/^['"]|['"]$/g, ''))
        .filter(Boolean);
      break;
    }
    if (/^tags:\s*$/.test(lineas[i])) {
      fm.tags = [];
      for (let j = i + 1; j < lineas.length; j++) {
        const item = lineas[j].match(/^\s+-\s*(.+?)\s*$/);
        if (!item) break;
        fm.tags.push(item[1].replace(/^['"]|['"]$/g, ''));
      }
      break;
    }
  }
  return fm;
}

/**
 * tags.yml de Docusaurus: `clave:` seguida de `  label/permalink/description: valor`.
 * Formato acotado a propósito; no es un parser YAML general.
 */
function parsearTagsYml(texto) {
  const tags = {};
  let actual = null;
  for (const linea of texto.split(/\r?\n/)) {
    if (/^\s*(#|$)/.test(linea)) continue;
    const clave = linea.match(/^([^\s#][^:]*):\s*$/);
    if (clave) {
      actual = clave[1].trim();
      tags[actual] = {};
      continue;
    }
    const campo = linea.match(/^\s+(label|permalink|description):\s*(.*)$/);
    if (campo && actual) {
      tags[actual][campo[1]] = campo[2].trim().replace(/^['"]|['"]$/g, '');
      continue;
    }
    throw new Error(`docs/tags.yml: línea no reconocida: «${linea}»`);
  }
  return tags;
}

/** Filas `| Sección | Vínculo | Observación |` de la tabla de una ficha, por etiqueta de sección. */
function parsearTablaMapeo(texto, etiquetasSeccion) {
  const filas = {};
  for (const linea of texto.split(/\r?\n/)) {
    const m = linea.match(/^\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|/);
    if (!m) continue;
    const seccion = etiquetasSeccion[m[1]];
    if (!seccion) continue;
    filas[seccion] = m[2];
  }
  return filas;
}

/** Enlaces internos al catálogo en un texto MDX/TSX: `](/docs/…)`, `to="/docs/…"`, `href="/docs/…"`. */
function extraerEnlacesDocs(texto) {
  const enlaces = [];
  const re = /(?:\]\(|(?:to|href)=["'])(\/docs\/[^)"'#\s]*)/g;
  let m;
  while ((m = re.exec(texto))) enlaces.push(m[1].replace(/\/$/, ''));
  return enlaces;
}

const NUMEROS_EN_PALABRAS = {
  quince: 15, dieciséis: 16, diecisiete: 17, dieciocho: 18, diecinueve: 19,
  veinte: 20, veintiuno: 21, veintiún: 21, veintidós: 22, veintitrés: 23,
  veinticuatro: 24, veinticinco: 25, veintiséis: 26, veintisiete: 27,
  veintiocho: 28, veintinueve: 29, treinta: 30,
};

/** Menciones «N componentes» (en cifra o en palabra) dentro de un texto. */
function mencionesDeCantidad(texto) {
  const re = /\b([0-9]{1,3}|[a-záéíóúñ]+) componentes\b/giu;
  const menciones = [];
  let m;
  while ((m = re.exec(texto))) {
    const token = m[1].toLowerCase();
    const n = /^[0-9]+$/.test(token) ? Number(token) : NUMEROS_EN_PALABRAS[token];
    if (n !== undefined) menciones.push({texto: m[0], n});
  }
  return menciones;
}

// ─── Inventario ─────────────────────────────────────────────────────────────

async function cargarInventario() {
  const {MAPEO} = await importar('src/data/mapeo/index.ts');
  const {SECCIONES} = await importar('src/components/TableroDigital/secciones.ts');
  const sidebars = (await importar('sidebars.ts')).default;

  const secciones = Object.keys(SECCIONES);
  const etiquetaASeccion = Object.fromEntries(secciones.map((s) => [SECCIONES[s].label, s]));

  const fichas = [];
  for (const archivo of listar('docs/componentes', '.mdx')) {
    const slug = basename(archivo, '.mdx');
    const ruta = `docs/componentes/${archivo}`;
    const texto = leer(ruta);
    const h1 = (texto.match(/^# (.+?)\s*$/m) || [])[1] ?? null;
    const h2s = [...texto.matchAll(/^## (.+?)\s*$/gm)].map((m) => m[1]);
    fichas.push({
      slug,
      ruta,
      texto,
      frontmatter: parsearFrontmatter(texto),
      h1,
      h2s,
      tabla: parsearTablaMapeo(texto, etiquetaASeccion),
    });
  }

  const tableros = {};
  for (const archivo of listar('src/data/tableros', '.ts')) {
    const ruta = `src/data/tableros/${archivo}`;
    tableros[basename(archivo, '.ts')] = unicoExport(await importar(ruta), ruta);
  }

  const ejemplos = {};
  for (const archivo of listar('src/data/ejemplos', '.ts')) {
    const ruta = `src/data/ejemplos/${archivo}`;
    ejemplos[basename(archivo, '.ts')] = unicoExport(await importar(ruta), ruta);
  }

  const idsSidebar = [];
  const recorrer = (items) => {
    for (const item of items) {
      if (typeof item === 'string') idsSidebar.push(item);
      else if (item && item.type === 'doc') idsSidebar.push(item.id);
      else if (item && Array.isArray(item.items)) recorrer(item.items);
    }
  };
  for (const sidebar of Object.values(sidebars)) recorrer(sidebar);

  const docsGenerales = listar('docs', '.mdx').map((f) => basename(f, '.mdx'));

  return {
    secciones,
    SECCIONES,
    fichas,
    tableros,
    ejemplos,
    mapeo: Object.fromEntries(MAPEO.map((m) => [m.slug, m])),
    ordenMapeo: MAPEO.map((m) => m.slug),
    idsSidebar,
    docsGenerales,
    tagsYml: existe('docs/tags.yml') ? parsearTagsYml(leer('docs/tags.yml')) : null,
    css: leer('src/css/custom.css'),
    imagenesEnStatic: existe('static/img/ejemplos') ? listar('static/img/ejemplos', '') : [],
    home: leer('src/pages/index.tsx'),
    sobreElCatalogo: existe('docs/sobre-el-catalogo.mdx') ? leer('docs/sobre-el-catalogo.mdx') : '',
    changelog: existe('CHANGELOG.md') ? leer('CHANGELOG.md') : '',
    atribuciones: existe(ARCHIVO_ATRIBUCIONES) ? leer(ARCHIVO_ATRIBUCIONES) : null,
  };
}

// ─── Bloques de verificación ────────────────────────────────────────────────

function verificarEstructura(inv) {
  for (const f of inv.fichas) {
    const donde = `${f.ruta}`;
    if (!f.frontmatter) {
      error(`${donde}: falta el frontmatter`);
    } else if (!Array.isArray(f.frontmatter.tags) || f.frontmatter.tags.length === 0) {
      error(`${donde}: el frontmatter no declara \`tags\``);
    }
    if (!f.h1) error(`${donde}: falta el H1 con el nombre del componente`);

    const esperados = H2_CANONICOS.join(' · ');
    const obtenidos = f.h2s.join(' · ');
    if (obtenidos !== esperados) {
      const faltan = H2_CANONICOS.filter((h) => !f.h2s.includes(h));
      const sobran = f.h2s.filter((h) => !H2_CANONICOS.includes(h));
      let detalle = '';
      if (faltan.length) detalle += ` faltan: ${faltan.join(', ')}.`;
      if (sobran.length) detalle += ` sobran: ${sobran.join(', ')}.`;
      if (!faltan.length && !sobran.length) detalle = ' están todos, pero en otro orden.';
      error(`${donde}: los H2 no siguen el orden canónico de la ficha.${detalle}`);
    }

    if (!/className=\{styles\.aliases\}/.test(f.texto)) {
      error(`${donde}: falta la línea de alias (<span className={styles.aliases}>)`);
    }
    if (!/<FichaTags\s*\/>/.test(f.texto)) error(`${donde}: falta <FichaTags />`);
    if (!/<Galeria\s+data=/.test(f.texto)) error(`${donde}: falta <Galeria data={…} />`);
    const mapeoTablero = f.texto.match(/<MapeoTablero\s+slug="([^"]+)"/);
    if (!mapeoTablero) {
      error(`${donde}: falta <MapeoTablero slug="…" />`);
    } else if (mapeoTablero[1] !== f.slug) {
      error(`${donde}: <MapeoTablero slug="${mapeoTablero[1]}"> no coincide con el archivo (${f.slug})`);
    }
    if (!/<TableroDigital\s+data=/.test(f.texto)) error(`${donde}: falta <TableroDigital data={…} />`);
  }
}

function verificarVocabulario(inv) {
  if (!inv.tagsYml) {
    error('falta docs/tags.yml (las etiquetas deben declararse ahí)');
    return;
  }
  const declaradas = Object.keys(inv.tagsYml);
  const uso = Object.fromEntries(declaradas.map((t) => [t, 0]));

  for (const f of inv.fichas) {
    for (const tag of f.frontmatter?.tags ?? []) {
      if (!(tag in uso)) {
        error(`${f.ruta}: la etiqueta «${tag}» no está declarada en docs/tags.yml`);
      } else {
        uso[tag] += 1;
      }
    }
  }

  for (const tag of declaradas) {
    const permalink = inv.tagsYml[tag].permalink ?? slugEtiqueta(tag);
    const selector = `a[href$="/etiquetas/${permalink}"]`;
    if (!inv.css.includes(selector)) {
      error(`docs/tags.yml: la etiqueta «${tag}» no tiene color en src/css/custom.css (falta ${selector})`);
    }
    if (uso[tag] < 2) {
      advertencia(
        `la etiqueta «${tag}» tiene ${uso[tag]} componente${uso[tag] === 1 ? '' : 's'} (se esperan al menos dos)`,
      );
    }
  }
}

function verificarIntegridad(inv) {
  const slugsFicha = new Set(inv.fichas.map((f) => f.slug));

  for (const f of inv.fichas) {
    const tablero = inv.tableros[f.slug];
    const galeria = inv.ejemplos[f.slug];
    const mapeo = inv.mapeo[f.slug];

    if (!tablero) error(`${f.slug}: falta src/data/tableros/${f.slug}.ts`);
    else if (tablero.componente !== f.h1) {
      error(`${f.slug}: el tablero dice «${tablero.componente}» y la ficha «${f.h1}»`);
    }

    if (!galeria) error(`${f.slug}: falta src/data/ejemplos/${f.slug}.ts`);
    else if (galeria.componente !== f.h1) {
      error(`${f.slug}: la galería dice «${galeria.componente}» y la ficha «${f.h1}»`);
    }

    if (!mapeo) error(`${f.slug}: no hay entrada en src/data/mapeo/index.ts`);
    else if (mapeo.nombre !== f.h1) {
      error(`${f.slug}: el mapeo dice «${mapeo.nombre}» y la ficha «${f.h1}»`);
    }

    if (!inv.idsSidebar.includes(`componentes/${f.slug}`)) {
      error(`${f.slug}: no aparece en sidebars.ts`);
    }
  }

  for (const slug of Object.keys(inv.tableros)) {
    if (!slugsFicha.has(slug)) error(`src/data/tableros/${slug}.ts no tiene ficha en docs/componentes/`);
  }
  for (const slug of Object.keys(inv.ejemplos)) {
    if (!slugsFicha.has(slug)) error(`src/data/ejemplos/${slug}.ts no tiene ficha en docs/componentes/`);
  }
  for (const slug of inv.ordenMapeo) {
    if (!slugsFicha.has(slug)) error(`src/data/mapeo/index.ts declara «${slug}», que no tiene ficha`);
  }
  const repetidos = inv.ordenMapeo.filter((s, i) => inv.ordenMapeo.indexOf(s) !== i);
  for (const slug of new Set(repetidos)) error(`src/data/mapeo/index.ts declara «${slug}» más de una vez`);

  for (const id of inv.idsSidebar) {
    if (id.startsWith('componentes/') && !slugsFicha.has(id.slice('componentes/'.length))) {
      error(`sidebars.ts lista «${id}», que no existe en docs/componentes/`);
    }
  }
}

function verificarMapeo(inv) {
  for (const f of inv.fichas) {
    const mapeo = inv.mapeo[f.slug];
    const tablero = inv.tableros[f.slug];
    if (!mapeo || !tablero) continue; // ya reportado en integridad

    for (const seccion of inv.secciones) {
      const etiqueta = inv.SECCIONES[seccion].label;
      const vinculo = mapeo.vinculos[seccion];
      const postIts = tablero.tarjetas[seccion] ?? [];
      const variantes = new Set(postIts.map((p) => p.variante));
      const donde = `${mapeo.nombre} › ${etiqueta}`;

      if (vinculo === 'mandatorio') {
        if (!variantes.has('mandatorio')) {
          error(`${donde}: el mapeo dice «mandatorio» pero el tablero no tiene ningún post-it mandatorio`);
        }
      } else if (vinculo === 'opcional') {
        if (postIts.length === 0) {
          error(`${donde}: el mapeo dice «opcional» pero el tablero no tiene post-its`);
        } else if (variantes.has('mandatorio')) {
          error(`${donde}: el mapeo dice «opcional» pero el tablero tiene post-its mandatorios`);
        }
      } else if (vinculo === null) {
        if (postIts.length > 0) {
          const titulos = postIts.map((p) => `«${p.titulo}»`).join(', ');
          error(`${donde}: el mapeo no declara vínculo pero el tablero tiene post-its (${titulos})`);
        }
      } else {
        error(`${donde}: vínculo desconocido en el mapeo: ${JSON.stringify(vinculo)}`);
      }

      const celda = f.tabla[seccion];
      if (celda === undefined) {
        error(`${donde}: la tabla de observaciones de la ficha no tiene fila para esta sección`);
      } else if (!(celda in VINCULO_TABLA)) {
        error(`${donde}: la tabla de la ficha dice «${celda}» (se espera Siempre, Opcional o No)`);
      } else if (VINCULO_TABLA[celda] !== vinculo) {
        error(
          `${donde}: la tabla de la ficha dice «${celda}» y el mapeo dice «${vinculo ?? 'sin vínculo'}»`,
        );
      }
    }
  }
}

function verificarImagenes(inv) {
  const referenciadas = new Set();
  for (const [slug, galeria] of Object.entries(inv.ejemplos)) {
    for (const img of galeria.imagenes ?? []) {
      const donde = `src/data/ejemplos/${slug}.ts › ${img.src}`;
      if (!img.src || !existe(join('static', img.src))) {
        error(`${donde}: el archivo no existe en static/`);
      }
      if (!img.alt || !img.alt.trim()) error(`${donde}: falta \`alt\``);
      if (!img.caption || !img.caption.trim()) error(`${donde}: falta \`caption\``);
      if (img.src) referenciadas.add(basename(img.src));
    }
  }
  for (const archivo of inv.imagenesEnStatic) {
    if (!referenciadas.has(archivo)) {
      advertencia(`static/img/ejemplos/${archivo} no está referenciada por ninguna galería`);
    }
  }
  if (inv.atribuciones !== null) {
    for (const archivo of referenciadas) {
      if (!inv.atribuciones.includes(archivo)) {
        advertencia(`${archivo} no aparece en ${ARCHIVO_ATRIBUCIONES}`);
      }
    }
  }
}

function verificarEnlaces(inv) {
  const validos = new Set(['/docs/etiquetas']);
  for (const f of inv.fichas) validos.add(`/docs/componentes/${f.slug}`);
  for (const id of inv.docsGenerales) validos.add(`/docs/${id}`);
  for (const tag of Object.keys(inv.tagsYml ?? {})) {
    validos.add(`/docs/etiquetas/${inv.tagsYml[tag].permalink ?? slugEtiqueta(tag)}`);
  }

  const archivos = [];
  const recorrer = (dir) => {
    for (const nombre of readdirSync(join(RAIZ, dir))) {
      const ruta = join(dir, nombre);
      if (statSync(join(RAIZ, ruta)).isDirectory()) recorrer(ruta);
      else if (/\.(mdx?|tsx?)$/.test(nombre)) archivos.push(ruta.split(sep).join('/'));
    }
  };
  recorrer('docs');
  recorrer('src');
  archivos.push('docusaurus.config.ts');

  for (const ruta of archivos) {
    for (const enlace of extraerEnlacesDocs(leer(ruta))) {
      if (!validos.has(enlace)) error(`${ruta}: el enlace ${enlace} no apunta a ninguna página del catálogo`);
    }
  }
}

function verificarCifras(inv) {
  const n = inv.fichas.length;
  const fuentes = [
    ['src/pages/index.tsx', inv.home],
    ['docs/sobre-el-catalogo.mdx', inv.sobreElCatalogo],
  ];
  // Del CHANGELOG solo cuenta la primera sección de versión (la vigente).
  const m = inv.changelog.match(/^## \[[^\]]+\][\s\S]*?(?=^## \[|(?![\s\S]))/m);
  if (m) fuentes.push(['CHANGELOG.md (sección vigente)', m[0]]);

  for (const [nombre, texto] of fuentes) {
    for (const mencion of mencionesDeCantidad(texto)) {
      if (mencion.n !== n) {
        error(`${nombre}: dice «${mencion.texto}» pero hay ${n} fichas en docs/componentes/`);
      }
    }
  }
}

function verificarEncabezados(inv) {
  const sinId = inv.fichas.filter((f) => {
    const h2ConId = [...f.texto.matchAll(/^## .*\{#[^}]+\}\s*$/gm)].length;
    return h2ConId < f.h2s.length;
  });
  if (sinId.length === 0) return;
  const msg =
    sinId.length === inv.fichas.length
      ? `ninguna ficha lleva \`{#id}\` explícito en sus H2 (${sinId.length} fichas)`
      : `${sinId.length} fichas sin \`{#id}\` explícito en todos sus H2: ${sinId.map((f) => f.slug).join(', ')}`;
  (ENCABEZADOS_CON_ID_ES_ERROR ? error : advertencia)(msg);
}

// ─── Ejecución ──────────────────────────────────────────────────────────────

const BLOQUES = [
  ['Estructura de la ficha', verificarEstructura],
  ['Vocabulario (etiquetas)', verificarVocabulario],
  ['Integridad de archivos', verificarIntegridad],
  ['Mapeo coherente', verificarMapeo],
  ['Imágenes', verificarImagenes],
  ['Enlaces internos', verificarEnlaces],
  ['Cifras', verificarCifras],
  ['Encabezados', verificarEncabezados],
];

async function main() {
  verificarNode();
  const inicio = performance.now();
  const inv = await cargarInventario();

  for (const [nombre, fn] of BLOQUES) {
    bloqueActual = nombre;
    fn(inv);
  }

  const porBloque = (lista, nombre) => lista.filter((x) => x.bloque === nombre);
  console.log(`Verificación del catálogo · ${inv.fichas.length} fichas\n`);
  for (const [nombre] of BLOQUES) {
    const e = porBloque(errores, nombre);
    const a = porBloque(advertencias, nombre);
    const icono = e.length ? '✖' : a.length ? '⚠' : '✔';
    console.log(`${icono} ${nombre}`);
    for (const x of e) console.log(`    error: ${x.msg}`);
    for (const x of a) console.log(`    aviso: ${x.msg}`);
  }

  const ms = Math.round(performance.now() - inicio);
  console.log(
    `\n${errores.length} error${errores.length === 1 ? '' : 'es'}, ` +
      `${advertencias.length} advertencia${advertencias.length === 1 ? '' : 's'} · ${ms} ms`,
  );
  process.exit(errores.length ? 1 : 0);
}

main().catch((e) => {
  console.error(`\nEl script no pudo completar la verificación: ${e.message}`);
  process.exit(2);
});
