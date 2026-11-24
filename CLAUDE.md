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

- Catalogue scope (maintainer, 20 November 2026): do not add problems whose central subject is string theory, string compactifications, or the swampland programme. General quantum gravity, field-theoretic supergravity, holography, and gauge-theory confinement are not excluded merely by their connections or terminology. The maintainer explicitly chose to retain the existing quantum-gravity catalogue, including QG2 and QG4; do not archive or rewrite these entries on scope grounds.
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
- Every paper that is cited or linked (in a manuscript, an entry README, a site card or a catalogue entry) must have been read in full, not only its abstract, listing or search snippet. A work that cannot be read in full from the session (paywall, book, blocked page, PDF cut by the reading tool) is not cited; add it to the maintained list `manual_todo.md` at the root of this repository with the note concerned and the claim it would support, so the maintainer can download it into `oqmresearch/docs/references-pdf/`. Record the full reading in the note's literature audit.
- Never cite or link a withdrawn work (maintainer, 24 November 2026): a retracted article, a withdrawn arXiv preprint, or a draft, issue or pull request that its authors closed or withdrew. Withdrawal means its authors no longer stand behind it, so it supports nothing, not even "the question has been raised". This applies to manuscripts, entry READMEs, site cards and catalogue entries. Check a source's status (arXiv comments and versions, retraction notices, issue or pull-request state) before citing it; if a cited work is later withdrawn, remove the citation and recompile.
- Provide a serious, sufficiently broad, and verified bibliography. Prefer primary sources; include the foundational literature, the closest antecedents, and the relevant current work rather than citing only a few convenient papers. Check every title, author list, venue, year, identifier, version, and link against the source itself. Each citation must support a specific statement in the text, and the Related work discussion must explain the relationship instead of merely listing references. Do not cite a work that has only been seen through a search snippet, secondary summary, or unverified metadata record.

## Priority checks in public repositories

- Public GitHub repositories that resolve arXiv conjectures have already contained proofs of our results before us. Search them in every survey (when selecting conjectures) and before publishing any New Research note, alongside the literature and every arXiv version of the source.
- `the-omega-institute/trureturing` (https://github.com/the-omega-institute/trureturing), often with Lean formalisations. Antecedents found so far: issue #11700 and PR #11708 (photon-added majorization, arXiv:2312.02066), issue #11475 and PR #11566 (structured negativity, arXiv:2209.03909), PR #19362 (root-fidelity Holevo bound). Search issues and pull requests, open and closed, for the source's arXiv identifier (`gh api -X GET search/issues -f q='repo:the-omega-institute/trureturing <arXiv id>'`), then read the pull request and its Lean file.
- Add any other public repository of this kind to this list as soon as it yields an antecedent. The maintained list also lives in `oqmresearch/CLAUDE.md`.

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

## Recurring checks

- Weekly: check arXiv's answer to every trackback recorded in `scripts/arxiv-trackbacks.sent.json` (sent with `scripts/arxiv-trackbacks.cjs`). For each `arxivId`, open `https://arxiv.org/tb/<arxivId>` and the "Blog links" box of `https://arxiv.org/abs/<arxivId>`, and report to the maintainer which trackbacks are visible (accepted) and which are still absent. arXiv moderates trackbacks, so a missing link can mean either pending or rejected; after about four weeks, report a still-absent trackback as probably rejected. Do not resend a trackback without the maintainer's agreement.
- After each deployment that adds or changes pages: submit the affected URLs to IndexNow (Bing and partner engines) with `NODE_USE_ENV_PROXY=1 node scripts/indexnow.cjs --send --since=<date>` (URLs whose sitemap `lastModified` is on or after that date) or `--send --only=<paths>`. Run it a dry run first (without `--send`), and only once the deployment is live. The key file is `public/01515a7efa454252ae0b7a3600e9f757.txt`; each submission and its HTTP status are logged in `scripts/indexnow.sent.json`.
