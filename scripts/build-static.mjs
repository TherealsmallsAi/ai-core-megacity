import { mkdir, copyFile, readFile, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const source = path.join(root, '..', 'index.html');
const output = path.join(root, '..', 'dist');
const html = await readFile(source, 'utf8');
if (!html.includes('THE AI CORE') || !html.includes('LIVE NEWS PIPELINE NOT CONNECTED')) {
  throw new Error('The standalone entry page is missing its expected title or honest pipeline status.');
}
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await copyFile(source, path.join(output, 'index.html'));
console.log('Built self-contained AI Core static experience into dist/.');
