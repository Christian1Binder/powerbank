import {cp, mkdir, rm} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
const dist = `${root}dist`;
await rm(dist, {recursive:true, force:true});
await mkdir(dist, {recursive:true});
for (const name of ['index.html','styles.css','app.js','calculations.js','assets']) {
  await cp(`${root}${name}`, `${dist}/${name}`, {recursive:true});
}
console.log('Static website built in dist/. No dependencies needed.');
