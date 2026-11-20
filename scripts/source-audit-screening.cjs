// Render the editorial screening notes; does not infer scientific verdicts from keywords.
const fs = require('node:fs');
const path = require('node:path');
const out = path.resolve(process.argv[2]);
const sources = fs.readFileSync(path.join(out, 'sources.jsonl'), 'utf8').trim().split(/\r?\n/).map(JSON.parse);
const notes = JSON.parse(fs.readFileSync(path.join(out, 'source-notes.json'), 'utf8'));
const result = sources.map(s => {
  const note = notes[s.arxiv_id];
  return {
    arxiv_id: s.arxiv_id, title: s.titre, url: s.url,
    reading: note?.reading || 'title-and-complete-abstract',
    selectionOutcome: note?.outcome || 'not-promoted-after-abstract-screening',
    note: note?.note || 'Aucun ajout significatif indépendant suffisamment établi au tri du résumé. Les problèmes internes ne sont pas tous extraits ni déclarés résolus ; source hors sélection actuelle.',
  };
});
fs.writeFileSync(path.join(out, 'source-screening.json'), JSON.stringify(result, null, 2) + '\n');
fs.writeFileSync(path.join(out, 'source-screening.md'), '# Tri des 192 sources\n\nTous les résumés ont été lus. « Sections ciblées » ne signifie pas lecture intégrale. « Non promu » est une décision éditoriale pour cette liste, pas un statut scientifique des problèmes du papier.\n\n| Source | Lecture | Décision | Note |\n|---|---|---|---|\n' + result.map(s => `| [${s.arxiv_id}: ${s.title.replaceAll('|', '\\|')}](${s.url}) | ${s.reading} | ${s.selectionOutcome} | ${s.note} |`).join('\n') + '\n');
console.log(JSON.stringify({sources: result.length, targetedSections: result.filter(r => r.reading.includes('targeted')).length, withIndividualNotes: Object.keys(notes).length}));
