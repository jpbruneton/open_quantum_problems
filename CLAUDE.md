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
