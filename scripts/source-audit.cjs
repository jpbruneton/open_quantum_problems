// Read-only catalogue inspection and reproducible import of the lexical inventory.
// Usage: node scripts/source-audit.cjs <references.jsonl> <output-directory>
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
const catalogue = fs.readdirSync(path.join(root, 'app/data')).filter(f => /^cat-.*\.js$/.test(f)).sort().flatMap(f => {
  const context = {};
  const source = fs.readFileSync(path.join(root, 'app/data', f), 'utf8').replace(/export const \w+ =/, 'globalThis.entries =');
  vm.runInNewContext(source, context, { filename: f });
  return context.entries.map(p => ({ id: p.id, title: p.title, statement: p.statement, archive: !!p.archive, source: `app/data/${f}` }));
});
const categoryTexts = [...new Set(catalogue.map(p => p.source))].map(source => ({ source, text: fs.readFileSync(path.join(root, source), 'utf8') }));
if (!process.argv[2]) {
  for (const p of catalogue) console.log(`${p.id} | ${p.title}${p.archive ? ' [archive]' : ''}`);
} else {
  const bytes = fs.readFileSync(process.argv[2]);
  const rows = bytes.toString('utf8').trim().split(/\r?\n/).map(JSON.parse);
  const sources = rows.filter(r => ['recueil_titre', 'recueil_resume'].includes(r.groupe)).map(r => ({
    ...r,
    // Exact citations are navigation aids, not a semantic duplicate verdict.
    citedBy: categoryTexts.filter(p => p.text.includes(r.arxiv_id)).map(p => p.source),
  }));
  const out = path.resolve(process.argv[3]);
  fs.mkdirSync(out, { recursive: true });
  fs.writeFileSync(path.join(out, 'sources.jsonl'), sources.map(r => JSON.stringify(r)).join('\n') + '\n');
  fs.writeFileSync(path.join(out, 'catalogue-baseline.json'), JSON.stringify(catalogue, null, 2) + '\n');
  fs.writeFileSync(path.join(out, 'import.json'), JSON.stringify({ sha256: crypto.createHash('sha256').update(bytes).digest('hex'), lexicalReferences: rows.length, collectionCandidates: sources.length, catalogueEntries: catalogue.length, activeEntries: catalogue.filter(p => !p.archive).length }, null, 2) + '\n');
  console.log(`Imported ${sources.length} collection candidates; ${catalogue.filter(p => !p.archive).length} active catalogue entries. No catalogue changes.`);
}
