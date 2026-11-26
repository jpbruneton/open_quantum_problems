# Open Problems in Quantum Mechanics for AI Agents

A literature-reviewed catalogue of open problems in quantum theory, for human researchers and AI agents. Each entry gives a precise question, its standard reference, the progress made so far, any claimed solution, and what remains open.

**Website: https://openquantumproblems.com/**

The site has three parts:

1. **[Known open problems](#1-known-open-problems)**: the catalogue of open problems recognized in the literature, with their progress and claimed solutions.
2. **[New problems suggested by AI](#2-new-problems-suggested-by-ai)**: candidate questions formulated by AI from the catalogue.
3. **[New Research](https://openquantumproblems.com/new-research)**: focused research notes with public manuscripts, exact certificates, and reproducible checkers. Their canonical source bundles are indexed in [`research/`](research/README.md).

All new research starts in the private `oqmresearch` repository, which holds exploratory notes, calculations, and literature audits. The public research entries are maintained here under `research/entries/`.

## 1. Known open problems

Open problems that are already posed in the literature, from long-standing conjectures to recent questions raised by the authors of new results.

- **230 active entries** across fourteen areas: spectral theory, many-body physics, quantum field theory, undecidability, entanglement, nonlocality, channels and Shannon theory, complexity and algorithms, open systems, foundations, semiclassical gravity, holography, quantum gravity and renormalization. Ten further archive and background pages keep old links working.
- **Entry pages** follow one structure:
  - statement;
  - Definition, with one well-known, pre-AI reference;
  - Lean formulation, when available, with links describing the exact question, special case or bound encoded;
  - Progress;
  - Claimed solution, when there is one, with what it claims and its caveats;
  - What remains open;
  - the evidence grouped by role (previous progress, challenged claims);
  - references and author-reported AI use.
- **Horizon** says what kind of question it is:
  - *sharp*: the domain, hypotheses and resolution criterion are defined; a proof or counterexample settles the full stated target;
  - *incremental*: progress means better bounds or larger tractable classes;
  - *programme*: several distinct research targets;
  - *conceptual*: the framework, admissible class or resolution criterion still needs to be fixed.

  A proof in a subclass or a solution to one listed subproblem is partial progress unless that restricted question is the entry's explicit target. The [20 November horizon audit](docs/reviews/2026-11-20-correction-log.md) applies this criterion to all 44 active entries in foundations, semiclassical gravity, holography, quantum gravity and renormalization.
- **Status** says how far it has gone:
  - *open*;
  - *improved*: partial progress is recorded;
  - *claimed solved*: a full resolution has been announced but not independently assessed.

  At present 95 entries are open, 98 improved and 37 claimed solved. No entry is marked *solved*: the catalogue retains these resolutions as claims pending independent assessment of their proofs.
- **Lean verified** (gold badge): reserved for `claimed-solved` entries whose full claimed solution is formalized in Lean according to its authors. The Lean builds are not rerun by the maintainer, and a formal proof does not replace refereeing of the definitions it formalizes. Formalizations of partial progress or conditional results are described in the evidence without this badge.
- **Cross-references.** Links under each title point to the same question or related subproblems in the [QIQCOP Zoo](https://qiqc-op.com/) and the [IQOQI Vienna list of open quantum problems](https://oqp.iqoqi.oeaw.ac.at/); scope notes distinguish related tasks where needed. Where Google DeepMind's [Formal Conjectures](https://github.com/google-deepmind/formal-conjectures) has a Lean statement of the problem, it is linked too.
- **Sources of problems.** Besides the literature itself, the catalogue has been checked against:
  - every open problem of the IQOQI Vienna list;
  - the five problems of Horodecki et al., [PRX Quantum 3, 010101 (2022)](https://doi.org/10.1103/PRXQuantum.3.010101);
  - Lewin's six problems on Coulomb systems, [C. R. Physique 26 (2025)](https://doi.org/10.5802/crphys.249).

  Problems that were not added, and why, are listed in the dated reports.

## 2. New problems suggested by AI

Candidate questions selected or formulated with AI assistance. Some are explicitly posed by the cited authors. They sit outside the catalogue counts.

- **[New problems suggested by AI](https://openquantumproblems.com/new-problems).**
  - **What they are:** 49 retained priority questions and 21 secondary leads. The [19 November selection report](docs/reviews/2026-11-19-proposal-selection.md) records an individual decision for all 79 original listings, including the nine withdrawals. They were formulated or selected with AI assistance from the catalogue and the literature. Each explains its motivation and relation to previous results.
  - **What each page shows:** the motivation, the baseline literature, and the verdict of a separate AI literature review. The review verified the cited sources and searched for earlier answers. The assessments distinguish substantive, modest and narrow questions and identify cases awaiting verification.
  - **Later batches:** the original batches included six candidates in gravity and holography (9 November 2026), and eleven reformulated or partly inferred questions from a semantic map of the 2024–2026 quant-ph corpus (16 November 2026), each with a caveat saying what is inferred. The same map gave 36 catalogue entries.
  - **Sources:** the full proposal, with its verification marks, is in [`docs/reviews/2026-11-08-new-problems-proposal.md`](docs/reviews/2026-11-08-new-problems-proposal.md); the 16 November batch is in [`docs/reviews/2026-11-16-new-problems-carte-v2.md`](docs/reviews/2026-11-16-new-problems-carte-v2.md).
  - **Formulation review (17 November):** the 44 candidates of the first two batches and all 24 secondary leads were expanded using the preliminary research notes; the eleven recent candidates were also reviewed, with seven clarified. Models, conventions, quantifiers, resolution criteria and intermediate targets are described in the [revision report](docs/reviews/2026-11-17-proposal-formulations.md). This is distinct from a fresh literature-status review.
  - **Identifiers:** a tier letter, the area code and a number: P for a priority candidate (PE2), S for a secondary lead (SB1). A proposal promoted to the catalogue takes the next free entry number in its area. Former priority keys still resolve to the same records; see [`docs/reviews/2026-11-09-proposal-identifiers.md`](docs/reviews/2026-11-09-proposal-identifiers.md).

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
  - `kind` is one of `published`, `preprint`, `numerical`, `conjecture`, or `challenged`. Withdrawn or retracted works are never cited.
  - `role` is one of `claimed-solution`, `claim-input` or `progress`.
  - Only progress dated before the earliest claimed solution is listed under "Previous progress".
- `provenance`: `{ summary, url, version? }` for author-reported AI use.
- `lean`: on a `claimed-solved` entry only, `{ url, note }` when the main theorem of its claimed solution is formalized in Lean according to the authors; on an evidence item, `lean: true` records formalization, but only a claimed solution of a `claimed-solved` entry can display the badge.
- `app/data/lean-formulations.js` lists sources for the “Lean formulation” section by problem ID. Each link names its scope. When only the authors’ description is available, the label identifies the paper as the source.
- `relations`: `{ id, type }`, where `type` is `parent`, `benchmark`, `reduction` or `related`.
- `archive`: `{ kind: "merged" | "background", targets, reason }`. Archived pages stay addressable but are not counted.
- `reviewedAt` and `LITERATURE_UPDATES` (in `problems.js`) record the latest literature update for each entry. Documentary corrections are recorded separately in the dated correction logs; `CORRECTION_LOG` points to the latest published one, while `CORRECTION_LOGS` retains their history. Corrections do not reset literature-review dates.
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

To cite a single entry, link its page, for example `https://openquantumproblems.com/p/N1`, and give the access date, since entries change between updates. The source code and full history are at https://github.com/jpbruneton/open_quantum_problems.

## Related projects

- [Quantum Information and Quantum Computation Open Problem Zoo (QIQCOP Zoo)](https://qiqc-op.com/)
- [IQOQI Vienna: Open Quantum Problems](https://oqp.iqoqi.oeaw.ac.at/)
- [Google DeepMind: Formal Conjectures](https://github.com/google-deepmind/formal-conjectures), Lean statements of open conjectures, including the IQOQI problems
- OpenFrontiers included 114 entries from this catalogue in its October 2026 research corpus. Its separate mathematics benchmark contains 200 problems with Lean 4 statements. [Project site](https://openfrontiers.vercel.app/) · [Paper](https://arxiv.org/abs/2610.37739) · [Datasets](https://huggingface.co/collections/FlippyDora/openfrontiers)

## Maintainer

Jean-Philippe Bruneton, Université Paris Cité · X: [@_quantumphy_](https://x.com/_quantumphy_)
