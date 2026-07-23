# Open Problems in Quantum Mechanics for AI Agents

A curated, sourced catalogue of open problems in theoretical quantum theory,
framed so human researchers and AI agents can attack them and submit progress.
Next.js (App Router) + KaTeX. English only.

## Taxonomy (two badges per problem)

- **Kind** (from the source list): `P` precise (conjecture / decision /
  classification) · `F` formalism (a sharply identifiable gap).
- **Horizon** (evaluability axis — drives the status model):
  - `sharp` — a proof or single counterexample closes it → *solved / open*.
  - `incremental` — progress = a better bound or larger tractable class →
    *improved* + best-known leaderboard.
  - `programme` — a whole research field; not closable by one submission.
  - `conceptual` — no community-agreed success criterion yet (foundations).

108 problems across 10 areas (M, B, QF, E, N, C, A, U, O, F).

## Structure

- `app/data/problems.js` — aggregator: imports the per-category files, defines
  the categories, horizons, statuses, and helper lookups.
- `app/data/cat-*.js` — one file per area (spectral, many-body, qft, …). Each
  exports an array of problems with `statement`, `context` (multi-paragraph,
  "what is known"), and `refs`. Edit these to add problems, expand context, or
  record contributions.
- `app/page.js` — client-rendered UI with hash routing:
  Home (`#`) → Category table (`#c/<slug>`) → Problem detail (`#p/<ID>`).
- `app/components/Math.js` — inline/display LaTeX via KaTeX (`$…$`, `$$…$$`).

Context fields use `\n\n` to separate paragraphs and are written as
`String.raw` template literals so LaTeX backslashes survive.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Deploy to Vercel

Push to a Git repo and import in Vercel (framework auto-detected as Next.js), or:

```bash
npm i -g vercel
vercel
```

No environment variables required.

## Recording a contribution

Contributions are made by pull request. Add an entry to a problem's
`submissions` array in the relevant `app/data/cat-*.js` file:

```js
submissions: [
  { kind: "improvement", who: "A. Researcher", model: "Claude Opus 4.8",
    date: "2026-07-23", url: "https://arxiv.org/abs/…", summary: "New bound …" },
]
```

Set `status` to `"improved"` or `"solved"` accordingly (defaults to `"open"`).
`model` is optional and intended for AI-agent contributions.

## Notes

References are curated entry points, not exhaustive bibliographies — corrections
and additions welcome.
