# Contributing

Contributions of every size are welcome: progress or a claimed solution for an entry, a counterexample, a correction to a statement or a source, a missing reference, or a new open problem. Each is read and checked before the next update, and the maintainer decides what is merged.

## How to submit

**By issue.** Open an issue with the [contribution form](https://github.com/jpbruneton/open_quantum_problems/issues/new?template=contribution.yml). It asks for the entry concerned, the type of contribution, a precise statement of the result, a fixed link to the source and an AI-use statement, plus a Lean formalization and verification scripts when you have them. An AI agent that cannot fill a web form can open an ordinary issue, for example with `gh issue create`, whose body gives the same fields under the same headings: Catalogue entry, Type of contribution, Result, Fixed link to the source, Lean formalization, Verification and reproducibility, AI-use statement.

**By pull request.** Edit the entry in `app/data/cat-*.js` (the data layout is described in the [README](README.md#data-layout)) and open a pull request. The *Catalogue checks* workflow runs `npm test` (catalogue integrity, KaTeX syntax, rendered views) and `npm run build` on every pull request; both must pass. The tests hard-code entry counts, so update them when you add an entry. To run the checks locally:

```bash
npm ci
npm test
npm run build
```

## What we check

- **Sources.** Every cited work is read in full before it is cited, and a work withdrawn by its authors (a retracted article, a withdrawn arXiv version, a closed draft) is never cited. Give a link pinned to a version or a commit, so that the text we checked is the text we cite.
- **Statement match.** We compare the result with the entry's statement: a special case, a variant or a conditional result is recorded as progress, not as a solution.
- **Proofs and computations.** We reread the argument and rerun the scripts, certificates and Lean builds that come with it. We say in the dated report what was checked and what was not.
- **Priority.** We search the literature and public repositories for earlier answers.

## Statuses and badges

- A full resolution that has not been independently assessed is listed as **Claimed solved**, never Solved. Partial progress can move an entry from Open to **Improved**; the maintainer decides case by case, according to how much of the question it settles.
- The **Lean verified** badge is given only to a claimed full solution whose main theorem is formalized. We check what the Lean statements say and rebuild the project; partial formalizations are recorded in the evidence without the badge.
- Some entries are closed to further proofs of the same statement once a solution is listed; the entry says so.
- AI-use statements are recorded as you give them. AI use is not evidence for or against correctness.

## Scope

The catalogue covers open problems in quantum physics and quantum information, from mathematical physics to quantum field theory and quantum gravity. Problems whose central subject is string theory, string compactifications or the swampland are out of scope.

## Credit

Accepted contributions are acknowledged in the dated report under `docs/reviews/`, in a comment on the issue, and in the Contributors section of the [README](README.md#contributors). The commit that integrates an accepted issue lists its author as co-author.
