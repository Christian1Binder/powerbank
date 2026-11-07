import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile, access} from 'node:fs/promises';
import {resolve} from 'node:path';
const root=new URL('../',import.meta.url);
const html=await readFile(new URL('index.html',root),'utf8');
test('All local links, assets and fragment targets resolve',async()=>{
  const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
  assert.equal(new Set(ids).size,ids.length,'Duplicate HTML IDs');
  for(const [,href] of html.matchAll(/(?:href|src)="([^"]+)"/g)){
    if(href==='#'||/^(https?:|data:)/.test(href))continue;
    if(href.startsWith('#'))assert.ok(ids.includes(href.slice(1)),`Missing target ${href}`);
    else await access(new URL(href,root));
  }
});
test('Pack drawing represents exactly 12 cells and three series bridges',async()=>{
  const svg=await readFile(new URL('assets/4s3p.svg',root),'utf8');
  assert.equal((svg.match(/height="135"/g)||[]).length,12);
  assert.equal((svg.match(/stroke-linejoin="round"/g)||[]).length,3);
});
