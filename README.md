# Open Problems in Quantum Mechanics for AI Agents

A literature-reviewed catalogue of open problems in quantum theory, for human researchers and AI agents. Each entry gives a precise question, its standard reference, the progress made so far, any claimed solution, and what remains open.

**Website: https://openquantumproblems.com/**

The site has two parts:

1. **[Known open problems](#1-known-open-problems)**: the catalogue of open problems recognized in the literature, with their progress and claimed solutions.
2. **[New problems suggested by AI](#2-new-problems-suggested-by-ai)**: candidate questions formulated by AI from the catalogue.

## 1. Known open problems

Open problems that are already posed in the literature, from long-standing conjectures to recent questions raised by the authors of new results.

- **181 active entries** across fourteen areas: spectral theory, many-body physics, quantum field theory, undecidability, entanglement, nonlocality, channels and Shannon theory, complexity and algorithms, open systems, foundations, semiclassical gravity, holography, quantum gravity and renormalization. Ten further archive and background pages keep old links working.
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

  At present 97 entries are open, 61 improved and 23 claimed solved. No entry is marked *solved*: the catalogue retains these resolutions as claims pending independent assessment of their proofs.
- **Lean verified** (gold badge): the main theorem of a claimed solution, or of a progress item, is formalized in Lean according to its authors. The Lean builds are not rerun by the maintainer, and a formal proof does not replace refereeing of the definitions it formalizes. Thirteen entries carry the badge. Partial or conditional formalizations without a proof of their external hypotheses are described in the evidence without a badge.
- **Cross-references.** Links under each title point to the same question or related subproblems in the [QIQCOP Zoo](https://qiqc-op.com/) and the [IQOQI Vienna list of open quantum problems](https://oqp.iqoqi.oeaw.ac.at/); scope notes distinguish related tasks where needed. Where Google DeepMind's [Formal Conjectures](https://github.com/google-deepmind/formal-conjectures) has a Lean statement of the problem, it is linked too.
- **Sources of problems.** Besides the literature itself, the catalogue has been checked against:
  - every open problem of the IQOQI Vienna list;
  - the five problems of Horodecki et al., [PRX Quantum 3, 010101 (2022)](https://doi.org/10.1103/PRXQuantum.3.010101);
  - Lewin's six problems on Coulomb systems, [C. R. Physique 26 (2025)](https://doi.org/10.5802/crphys.249).

  Problems that were not added, and why, are listed in the dated reports.

## 2. New problems suggested by AI

Questions that are not in the literature yet. They are not part of the catalogue above: they carry no status, are not counted, and await human selection and refereeing.

- **[New problems suggested by AI](https://openquantumproblems.com/#new-problems).**
  - **What they are:** 38 candidate questions, plus 24 secondary leads, that an AI model formulated from the catalogue and from the open-questions sections of the 2026 claimed resolutions. Each says which result opened it.
  - **What each page shows:** the motivation, the baseline literature, and the verdict of a separate AI literature review. The review verified the cited sources and searched for earlier answers. Each candidate is marked open and substantive, open but modest, or under review.
  - **Sources:** the full proposal, with its verification marks, is in [`docs/reviews/2026-11-08-new-problems-proposal.md`](docs/reviews/2026-11-08-new-problems-proposal.md).
  - **Identifiers:** a tier letter, the area code and a number: P for a priority candidate (PE2), S for a secondary lead (SB1). A proposal promoted to the catalogue takes the next free entry number in its area. The former keys P1–P81 and S1–S24 still open the same pages; see [`docs/reviews/2026-11-09-proposal-identifiers.md`](docs/reviews/2026-11-09-proposal-identifiers.md).

## How it is maintained

The catalogue is updated through dated literature reviews: arXiv sweeps, announcements, and the authors' own open-questions sections. Each review is recorded in [`docs/reviews/`](docs/reviews/) with its sources, scope and exclusions. The comparison with similar catalogues is in [`docs/comparisons/`](docs/comparisons/). The reviews are AI-assisted (see the "Powered by" credit on the site) and curated by the maintainer.

On **8 November 2026**, a separate AI-assisted scientific description review covered all 150 active entries across ten thematic reports, including the fit between each claimed resolution and its stated problem. It checked formulations and compared selected primary-source statements, without checking proofs, searching for solutions or repeating the link audit. The review and its correction log are retained as private working documents; corrections were applied to 44 entries. B13 was reclassified as *improved*: the cited announcements cover bounded radial potentials and hard spheres, rather than the full interaction class in the reference problem. This was a documentary review, not a certification of the cited results.

Policies applied throughout:

- A claimed resolution stays **Claimed solved**, never Solved, until it has been independently assessed. Unpublished announcements are mentioned in the text but are not counted as evidence.
- Conditional results keep their assumptions, and a result for a subcase or another variant is recorded as progress, not as a solution.
- Corrections restore the problem and result descriptions supported by the cited literature; they do not introduce new conjectures or narrow a problem merely to match a claimed solution.
- AI-use disclosures are reported as the authors state them. A missing disclosure is not evidence that no AI was used, and AI use is not evidence for or against correctness.
- Sources are linked by verified arXiv IDs, DOIs or publisher URLs, with submission, revision and publication dates kept distinct.

## Contributing

Corrections, new results, missing references and new problems are all welcome: open an [issue](https://github.com/jpbruneton/open_quantum_problems/issues) or a [pull request](https://github.com/jpbruneton/open_quantum_problems/pulls). Please cite the source of any claim. External contributions are reviewed before the next update and acknowledged in the dated report.

### Data layout

The source of truth is `app/data/cat-*.js`, aggregated by `app/data/problems.js`. Do not renumber existing IDs or reuse an archived ID.

- `statement`: the model, assumptions, quantifiers and success criterion.
- `definition`, `progress`, `claim`, `residual`: the page sections, written as `String.raw` templates. Paragraphs are separated by blank lines; lines starting with `- ` form lists; `**bold**` and `[label](https://…)` are supported outside math.
- `horizon`: `sharp`, `incremental`, `programme` or `conceptual`. `status`: `open`, `improved` or `claimed-solved` (`solved` is reserved for established resolutions).
- `evidence`: `{ kind, role, summary, url, date?, version? }`.
  - `kind` is one of `published`, `preprint`, `numerical`, `conjecture`, `challenged` or `withdrawn`.
  - `role` is one of `claimed-solution`, `claim-input` or `progress`.
  - Only progress dated before the earliest claimed solution is listed under "Previous progress".
- `provenance`: `{ summary, url, version? }` for author-reported AI use.
- `lean`: on an entry, `{ url, note }` when the main theorem of its claimed solution is formalized in Lean according to the authors; on an evidence item, `lean: true`. Partial formalizations do not get the flag.
- `relations`: `{ id, type }`, where `type` is `parent`, `benchmark`, `reduction` or `related`.
- `archive`: `{ kind: "merged" | "background", targets, reason }`. Archived pages stay addressable but are not counted.
- `reviewedAt` and `LITERATURE_UPDATES` (in `problems.js`) record the latest literature update for each entry. Documentary corrections are recorded separately in the dated correction logs; `CORRECTION_LOG` points to the latest published one and does not reset these review dates.
- Links to other catalogues live in `app/data/crossrefs.js`. The AI-suggested problems and their review verdicts (`assessment`) live in `app/data/proposals.js`.

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
- [Google DeepMind: Formal Conjectures](https://github.com/google-deepmind/formal-conjectures), Lean statements of open conjectures, including the IQOQI problems

## Maintainer

Jean-Philippe Bruneton, Université Paris Cité · X: [@_quantumphy_](https://x.com/_quantumphy_)
