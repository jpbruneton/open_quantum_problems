# Instructions for AI sessions working on this repository

## Before any update: external pull requests and issues first

Before starting any literature update, catalogue change or site change:

1. Run `git fetch` and look at `origin/main`: other sessions (local or cloud) may have pushed work.
2. List open external contributions:
   - `gh pr list --state open`
   - `gh issue list --state open`
3. Read each one (`gh pr view N`, `gh pr diff N`, `gh issue view N`), check the sources it cites, and **discuss it with the maintainer first**. Summarize what it does, what is wrong or missing, and what you recommend. Do not merge, close or comment on GitHub before the maintainer agrees.
4. Only then start the requested update. Record accepted contributions in the dated report under `docs/reviews/`, and thank contributors in a short GitHub comment that explains any edits made on merge.

## Working conventions

- `npm test` (catalogue integrity, KaTeX, rendered views) and `npm run build` must pass before committing.
- Commit and push only when the maintainer asks.
- Statuses: a full resolution that is announced but not independently assessed is "Claimed solved", never "Solved". An unpublished announcement goes in the entry's context only, not in its evidence.
- The “Lean verified” badge applies only to `claimed-solved` entries whose full claimed solution is formalized. Partial progress may mention Lean in its evidence, but must not receive this badge or appear in the Lean verified list.
- AI-use disclosures go in `provenance`; their absence is not evidence of no AI use.
- Cross-references to other catalogues (QIQCOP Zoo, IQOQI Vienna) live in `app/data/crossrefs.js`.
- The tests hard-code entry counts (total, active, claimed-solved list). Update them when adding entries.
- Write LaTeX backslashes with an editor tool, not through shell heredocs, which can alter escapes such as `\t` in `\times`.
- Parallel work (subagents) must write its results to temporary files incrementally, question by question, so that nothing is lost if a run is stopped or a usage limit is hit. Never keep results only in the agent's final report.
- Limit on parallel agents: at most 3 at a time when the session runs on Fable; at most 9 when it runs on Opus 5.5.

## LaTeX research-note style

- Write in idiomatic, native-level English unless the maintainer requests another language.
- Begin both the abstract and the Introduction with a short, self-contained context overview in plain language. Before introducing the paper's notation or technical formulation, tell the reader what objects are being studied, what the underlying phenomenon or obstruction is, and what concrete question the note answers. A reader from the broader field should be able to explain the problem after these opening sentences. Then state the main result, first in conceptual terms and then, when useful, in its exact technical form.
- Use the simplest representative example when it materially clarifies the setting. The example must illuminate the general question rather than delay it, and the text must say explicitly which feature of the example the result measures or generalizes.
- When the subject permits it, open with an Introduction that explains the setting, the mathematical question, why it matters, and the main result. Follow with Related work, Results, proofs or methods, limitations, and references as appropriate. Adapt this structure to the argument instead of creating empty or artificial sections.
- Build a continuous argument. Organize the prose around claims, reasons, and consequences, not around the chronology of the search or an inventory of facts that happened to be found.
- Prefer prose to itemized or numbered lists. Use enumeration only when the objects are genuinely discrete or the order is mathematically important.
- Define every symbol before or at its first use. Spell out every acronym at first use, and avoid acronyms that save little space.
- Give exact quantities whenever available and add a useful decimal approximation when it materially helps interpretation.
- Begin paragraphs with a substantive claim or a clear logical connection. Avoid vague announcements such as "We now discuss" or "It is worth noting".
- State the positive claim directly. Avoid rhetorical templates such as "it is not X, it is Y", unnecessary negations, and defensive asides.
- Keep provenance and computational history concise. Include only information needed to assess, reproduce, or correctly qualify the mathematics; do not narrate the discovery process unless it is itself relevant.
- Separate mathematical verification from bibliographic priority, and qualify originality claims precisely without repetitive disclaimers.
- Provide a serious, sufficiently broad, and verified bibliography. Prefer primary sources; include the foundational literature, the closest antecedents, and the relevant current work rather than citing only a few convenient papers. Check every title, author list, venue, year, identifier, version, and link against the source itself. Each citation must support a specific statement in the text, and the Related work discussion must explain the relationship instead of merely listing references. Do not cite a work that has only been seen through a search snippet, secondary summary, or unverified metadata record.

## Published research-note layout

- Start and continue all new research in the private `oqmresearch` repository. Keep working notes, calculations, and literature audits there. Use `docs/research/bilans/` for dated explorations and the corresponding `docs/research/` subdirectory for work on a specific problem.
- The former `OQM/newresults/` archive now lives in `oqmresearch/docs/research/bilans/2026-11-17-newresults/`; do not recreate it here. A note becomes a public research entry in OQM only under `research/entries/<slug>/`.
- Every public entry must contain `README.md`, `manuscript/` for the `.tex` and compiled `.pdf`, `checks/` for the minimal runnable Python verification, and `data/` for exact certificates and generated verification records. Use a stable descriptive slug, not a date or an internal lead number.
- `research/entries/<slug>/` is the canonical citable source. `public/research/` contains deployment mirrors of PDFs only; do not treat it as the source archive.
- Keep the public bundle minimal and self-contained. Keep search scripts, exploratory notes, logs, caches, and superseded certificates in `oqmresearch`.
- The entry README must state the result, map every public file to its role, give commands runnable from the repository root, list dependencies, and distinguish analytic proof, computational verification, and bibliographic priority.
- Python checkers must resolve inputs relative to their entry directory and write generated records into `data/`. They must run without access to the private workspace or historical archive.
- The manuscript's verification section must link directly to the relevant public Python checker files and exact certificate on GitHub. The site button `Source, certificate and checks` must link to the canonical entry directory.
- Start a new public entry from `research/ENTRY_TEMPLATE.md` and preserve this layout for later notes.
