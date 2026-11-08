# Open Problems in Quantum Mechanics for AI Agents

A literature-reviewed catalogue of open problems in quantum theory, for human researchers and AI agents. Each entry gives a precise question, its standard reference, the progress made so far, any claimed solution, and what remains open.

**Website: https://openquantumproblems.com/**

The site has two parts:

1. **[Known open problems](#1-known-open-problems)**: the catalogue of open problems recognized in the literature, with their progress and claimed solutions.
2. **[New problems suggested by AI](#2-new-problems-suggested-by-ai)**: candidate questions formulated by AI from the catalogue.

## 1. Known open problems

Open problems that are already posed in the literature, from long-standing conjectures to recent questions raised by the authors of new results.

- **135 active entries** across ten areas: spectral theory, many-body physics, quantum field theory, undecidability, entanglement, nonlocality, channels and Shannon theory, complexity and algorithms, open systems, and foundations. Ten further archive and background pages keep old links working.
- **Entry pages** follow one structure:
  - statement;
  - Definition, with one well-known, pre-AI reference;
  - Progress;
  - Claimed solution, when there is one, with what it claims and its caveats;
  - What remains open;
  - the evidence grouped by role (previous progress, challenged claims, withdrawn claims);
  - references and author-reported AI use.
- **Horizon** says what kind of question it is:
  - *sharp*: a proof or a single counterexample closes it;
  - *incremental*: progress means better bounds or larger tractable classes;
  - *programme*: a whole research field;
  - *conceptual*.
- **Status** says how far it has gone:
  - *open*;
  - *improved*: partial progress is recorded;
  - *claimed solved*: a full resolution has been announced but not independently assessed.

  No entry is marked *solved*: none of the claimed resolutions has yet been independently verified or fully machine-checked.
- **Cross-references.** Entries shared with the [QIQCOP Zoo](https://qiqc-op.com/) or the [IQOQI Vienna list of open quantum problems](https://oqp.iqoqi.oeaw.ac.at/) link to them under the title.

## 2. New problems suggested by AI

Questions that are not in the literature yet. They are not part of the catalogue above: they carry no status, are not counted, and await human selection and refereeing.

- **[New problems suggested by AI](https://openquantumproblems.com/#new-problems).**
  - **What they are:** 38 candidate questions, plus 24 secondary leads, that an AI model formulated from the catalogue and from the open-questions sections of the 2026 claimed resolutions. Each says which result opened it.
  - **What each page shows:** the motivation, the baseline literature, and the verdict of a separate AI literature review. The review verified the cited sources and searched for earlier answers. Each candidate is marked open and substantive, open but modest, or under review.
  - **Sources:** the full proposal, with its verification marks, is in [`docs/reviews/2026-11-08-new-problems-proposal.md`](docs/reviews/2026-11-08-new-problems-proposal.md).

## How it is maintained

The catalogue is updated through dated literature reviews: arXiv sweeps, announcements, and the authors' own open-questions sections. Each review is recorded in [`docs/reviews/`](docs/reviews/) with its sources, scope and exclusions. The comparison with similar catalogues is in [`docs/comparisons/`](docs/comparisons/). The reviews are AI-assisted (see the "Powered by" credit on the site) and curated by the maintainer.

Policies applied throughout:

- A claimed resolution stays **Claimed solved**, never Solved, until it has been independently assessed. Unpublished announcements are mentioned in the text but are not counted as evidence.
- Conditional results keep their assumptions, and a result for a subcase or another variant is recorded as progress, not as a solution.
- AI-use disclosures are reported as the authors state them. A missing disclosure is not evidence that no AI was used, and AI use is not evidence for or against correctness.
- Sources are linked by verified arXiv IDs, DOIs or publisher URLs, with submission, revision and publication dates kept distinct.

## Contributing

Corrections, new results, missing references and new problems are all welcome: open an [issue](https://github.com/jpbruneton/open_quantum_problems/issues) or a [pull request](https://github.com/jpbruneton/open_quantum_problems/pulls). Please cite the source of any claim. External contributions are reviewed before the next update and acknowledged in the dated report.

### Data layout

The source of truth is `app/data/cat-*.js`, aggregated by `app/data/problems.js`. Do not renumber existing IDs or reuse an archived ID. `main.tex` is a historical manuscript, not an export of the current site.

- `statement`: the model, assumptions, quantifiers and success criterion.
- `definition`, `progress`, `claim`, `residual`: the page sections, written as `String.raw` templates. Paragraphs are separated by blank lines; lines starting with `- ` form lists; `**bold**` and `[label](https://…)` are supported outside math.
- `horizon`: `sharp`, `incremental`, `programme` or `conceptual`. `status`: `open`, `improved` or `claimed-solved` (`solved` is reserved for established resolutions).
- `evidence`: `{ kind, role, summary, url, date?, version? }`.
  - `kind` is one of `published`, `preprint`, `numerical`, `conjecture`, `challenged` or `withdrawn`.
  - `role` is one of `claimed-solution`, `claim-input` or `progress`.
  - Only progress dated before the earliest claimed solution is listed under "Previous progress".
- `provenance`: `{ summary, url, version? }` for author-reported AI use.
- `relations`: `{ id, type }`, where `type` is `parent`, `benchmark`, `reduction` or `related`.
- `archive`: `{ kind: "merged" | "background", targets, reason }`. Archived pages stay addressable but are not counted.
- `reviewedAt` and `LITERATURE_UPDATES` (in `problems.js`) record which update last touched each entry.
- Links to other catalogues live in `app/data/crossrefs.js`. The AI-suggested problems and their reviews live in `app/data/proposals.js`.

### Development

```bash
npm install
npm run dev     # local preview
npm test        # catalogue integrity, KaTeX syntax, rendered views
npm run build   # production build
```

`npm test` and `npm run build` must both pass before a change is merged. The tests hard-code entry counts, so update them when adding entries.

## How to cite

To cite the catalogue:

```bibtex
@misc{open_quantum_problems,
  title = {Open Problems in Quantum Mechanics for AI Agents},
  author = {Bruneton, Jean-Philippe},
  howpublished = {\url{https://openquantumproblems.com/}},
  year = {2026},
  note = {Accessed YYYY-MM-DD}
}
```

To cite a single entry, link its page, for example `https://openquantumproblems.com/#p/N1`, and give the access date, since entries change between updates. The source code and full history are at https://github.com/jpbruneton/open_quantum_problems.

## Related projects

- [Quantum Information and Quantum Computation Open Problem Zoo (QIQCOP Zoo)](https://qiqc-op.com/)
- [IQOQI Vienna: Open Quantum Problems](https://oqp.iqoqi.oeaw.ac.at/)

## Maintainer

Jean-Philippe Bruneton, Université Paris Cité.
