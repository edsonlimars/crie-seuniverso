import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pages } from './app.js';

const projectRoot = resolve(import.meta.dirname);
const outputRoutes = [
  ['/', 'dist/index.html'],
  ['/sites-estrategicos', 'dist/sites-estrategicos/index.html'],
  ['/como-funciona', 'dist/como-funciona/index.html'],
  ['/sobre', 'dist/sobre/index.html']
];

const headerSignature = 'Clareza de posicionamento<br />para profissionais liberais.';
const footerSignature = 'Clareza de posicionamento para profissionais liberais.';

for (const [route, relativePath] of outputRoutes) {
  const filePath = resolve(projectRoot, relativePath);
  let html = await readFile(filePath, 'utf8');
  const content = pages[route]();

  html = html.replace(
    /<main id="conteudo" tabindex="-1"><\/main>/,
    `<main id="conteudo" tabindex="-1">${content}</main>`
  );
  html = html.replace(
    /(<a class="brand header-brand"[\s\S]*?<span>)[\s\S]*?(<\/span>)/,
    `$1${headerSignature}$2`
  );
  html = html.replace(
    /(<footer>[\s\S]*?<p>)[\s\S]*?(<\/p>)/,
    `$1${footerSignature}$2`
  );

  await writeFile(filePath, html, 'utf8');
  console.log(`Pré-render conclu: ${route} -> ${relativePath}`);
}
