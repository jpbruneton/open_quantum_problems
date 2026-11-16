# Site and scientific description corrections on 16 November 2026

Eight findings from the review of the 9–16 November changes have been addressed. These are documentary and site corrections. No entry was added, renumbered or reclassified, and literature-review dates remain unchanged. Before editing, `origin/main` was synchronized and open GitHub issues and pull requests were checked; there were none.

## Scientific descriptions

- **O13:** the Margolus–Levitin branch now uses the initial charging energy above `min spec(H_c)`. Without that offset, adding a scalar multiple of the identity changes the advertised rate without changing the charging trajectory. The description of [Sun–Lu–Jin](https://arxiv.org/html/2605.16935v1), Eq. (3), separately identifies their cyclic-subspace energy offset and rate. Their claimed frontier is stated in that convention, which would imply the entry's coarser bound. The status remains Improved, with the missing supplementary proof steps still explicit. The offset in the standard speed bound is described by [Margolus–Levitin](https://arxiv.org/abs/quant-ph/9710043).
- **A37:** removed the damped conjugate pair as a suggested nonresonant Siegel case. At positive damping it belongs to the Poincaré domain; at zero damping it has a cubic resonance. The residual now requests a purely imaginary spectrum satisfying the entry's nonresonance and Diophantine hypotheses.
- **QG8:** relaxation is asked for as a function of mass, coupling and Hubble scale. The `sqrt(lambda) H` scale is restricted to the massless or interaction-dominated regime; positive light masses dominating the interaction instead give the massive scale `m²/H`. See [Starobinsky–Yokoyama](https://arxiv.org/pdf/astro-ph/9407016), Eq. (87), and the massless setting of [Cohen et al.](https://arxiv.org/html/2106.09728v2).

`CORRECTION_LOG` points to this report. `CORRECTION_LOGS` also retains the [10 November corrections](2026-11-10-correction-log.md), including their affected IDs and dates, so that a newer narrow correction does not discard the earlier review history.

## Site behavior and editorial context

- Static page metadata explicitly includes the common Open Graph and Twitter images. Per-page titles, descriptions and canonical URLs are preserved.
- Legacy hash routes are handled after mount as well as on initial load. Ordinary section anchors remain local, and event listeners are removed on unmount.
- PA8's existing `open-narrow` assessment now has the label “Open, narrow scope”, an explanation and a matching badge style. Its scientific assessment is unchanged.
- Quantum trends explicitly compares the catalogue snapshot built on 15 November. Its gap and area tables are presented as historical, with links to entries added afterward. The page distinguishes its word-based map from the later semantic map and links the completed 16 November review. The numerical snapshot is preserved; the page remains an unlinked, non-indexed draft.
- The proposals introduction distinguishes the review dates of the 8, 9 and 16 November batches and links all three reports.

## Validation

The 15 catalogue and rendering tests pass, including regressions for legacy hash navigation and social-image metadata on entry, category and former proposal routes. The production build generates all 358 pages successfully. The generated HTML is checked for images, updated scientific notation, the PA8 verdict, dated snapshot context and the three proposal reports. No mathematical proof or Lean build was certified by this correction pass.
