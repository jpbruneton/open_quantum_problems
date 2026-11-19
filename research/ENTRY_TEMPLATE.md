# Title

One paragraph stating the mathematical result and its scope.

## Public files

- `manuscript/<slug>.tex` — canonical LaTeX source.
- `manuscript/<slug>.pdf` — compiled manuscript.
- `checks/<checker>.py` — minimal independent or complementary verification.
- `data/<certificate>.json` — exact input certificate.
- `data/<verification>.json` — generated verification record.

## Reproduce

Run from the repository root:

```text
python research/entries/<slug>/checks/<checker>.py
```

List all runtime dependencies and give any additional test command here. Checkers must read from `data/`, write generated records to `data/`, and remain independent of the private research workspace.

## Scope

State separately what is proved analytically, what is checked computationally, and what is or is not established about bibliographic priority.

Before publication, link the manuscript's verification section directly to the public checker and certificate files, update the site's dossier URL, compile the PDF into `manuscript/`, and mirror that PDF into `public/research/`.
