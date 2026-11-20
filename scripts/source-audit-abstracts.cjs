// Stream the local corpus; retain only the collection candidates, without rewriting decisions.
// Usage: node scripts/source-audit-abstracts.cjs <corpus.jsonl> <audit-directory>
const fs = require('node:fs');
const path = require('node:path');
const readline = require('node:readline');
async function main() {
  const out = path.resolve(process.argv[3]);
  const sources = fs.readFileSync(path.join(out, 'sources.jsonl'), 'utf8').trim().split(/\r?\n/).map(JSON.parse);
  const wanted = new Set(sources.map(s => s.arxiv_id));
  const found = new Map();
  for await (const line of readline.createInterface({ input: fs.createReadStream(process.argv[2]), crlfDelay: Infinity })) {
    if (!line.trim()) continue;
    const r = JSON.parse(line);
    if (wanted.has(r.arxiv_id)) found.set(r.arxiv_id, r);
  }
  const missing = [...wanted].filter(id => !found.has(id));
  if (missing.length) throw new Error(`Missing corpus records: ${missing.join(', ')}`);
  fs.writeFileSync(path.join(out, 'abstracts.jsonl'), sources.map(s => JSON.stringify(found.get(s.arxiv_id))).join('\n') + '\n');
  console.log(`Extracted ${found.size} complete abstracts in inventory order.`);
}
main().catch(e => { console.error(e); process.exitCode = 1; });
