// R10 + R15: en cada ficha de componente, mueve el bloque "## Ejemplos" + <Galeria>
// al inicio (bajo el alias) e inserta <FichaTags /> con los chips de etiquetas arriba.
// Transformación idempotente: si ya tiene <FichaTags />, salta el archivo.
import {readdir, readFile, writeFile} from 'node:fs/promises';
import {join, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const dir = join(dirname(fileURLToPath(import.meta.url)), '..', 'docs', 'componentes');
const files = (await readdir(dir)).filter((f) => f.endsWith('.mdx'));

let ok = 0;
const problemas = [];

for (const file of files) {
  const path = join(dir, file);
  let src = await readFile(path, 'utf8');
  const nl = src.includes('\r\n') ? '\r\n' : '\n';

  if (src.includes('<FichaTags')) {
    console.log(`SKIP  ${file} (ya migrado)`);
    continue;
  }

  // 1. Capturar la variable del Galeria.
  const gal = src.match(/<Galeria data=\{(\w+)\} \/>/);
  if (!gal) {
    problemas.push(`${file}: no se encontró <Galeria data={...} />`);
    continue;
  }
  const varName = gal[1];

  // 2. Añadir import de FichaTags tras el import del componente Galeria.
  const impGaleria = "import Galeria from '@site/src/components/Galeria';";
  if (!src.includes(impGaleria)) {
    problemas.push(`${file}: no se encontró el import de Galeria`);
    continue;
  }
  src = src.replace(
    impGaleria,
    impGaleria + nl + "import FichaTags from '@site/src/components/FichaTags';",
  );

  // 3. Eliminar el bloque "## Ejemplos" + <Galeria> de su posición actual.
  const bloqueViejoRe = new RegExp(
    `## Ejemplos\\r?\\n\\r?\\n<Galeria data=\\{${varName}\\} />\\r?\\n\\r?\\n`,
  );
  if (!bloqueViejoRe.test(src)) {
    problemas.push(`${file}: no se encontró el bloque Ejemplos esperado`);
    continue;
  }
  src = src.replace(bloqueViejoRe, '');

  // 4. Insertar <FichaTags /> + bloque Ejemplos justo tras el alias.
  const aliasRe = /(<span className=\{styles\.aliases\}>.*?<\/span>\r?\n)/s;
  if (!aliasRe.test(src)) {
    problemas.push(`${file}: no se encontró el alias span`);
    continue;
  }
  const bloqueNuevo =
    `$1${nl}<FichaTags />${nl}${nl}## Ejemplos${nl}${nl}` +
    `<Galeria data={${varName}} />${nl}`;
  src = src.replace(aliasRe, bloqueNuevo);

  await writeFile(path, src, 'utf8');
  console.log(`OK    ${file}  (var: ${varName})`);
  ok++;
}

console.log(`\n${ok} archivos migrados.`);
if (problemas.length) {
  console.error('\nPROBLEMAS:\n' + problemas.join('\n'));
  process.exit(1);
}
