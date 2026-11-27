import { Fragment } from "react";
import { MathText } from "./components/Math";
import ProblemFilter from "./components/ProblemFilter";
import {
  CATEGORIES,
  PROBLEMS,
  ARCHIVED_PROBLEMS,
  LITERATURE_UPDATE,
  EVIDENCE_KINDS,
  HORIZONS,
  STATUSES,
  problemsByCat,
  getProblem,
  getCategory,
  consolidatedInto,
} from "./data/problems";
import { TRENDS } from "./data/trends-data";
import { PROPOSALS, SECONDARY_PROPOSALS, PROPOSALS_META, PROPOSALS_META_NEW_AREAS, PROPOSALS_META_CARTE_V2, PROPOSALS_FORMULATION_REVIEW, PROPOSAL_COUNT, PRIORITY_RECORDS, WITHDRAWN_PROPOSALS, SELECTION_REPORT, PROPOSALS_EVIDENCE_REVIEW, proposalBatch } from "./data/proposals";
import { NEW_RESEARCH_NOTES } from "./data/research-notes";

// Server components only: the catalogue is rendered to HTML and never shipped as JavaScript.
// Rows with data-href are clickable through a delegated handler in components/ClientEffects.js.
const searchText = (p) => `${p.id} ${p.title} ${p.statement}`.toLowerCase();

// ---------- badges ----------
function HorizonBadge({ h }) {
  return (
    <span className={`badge h-${h}`} title={HORIZONS[h].desc}>
      <span className="dot" style={{ background: `var(--${h})` }} />
      {HORIZONS[h].label}
    </span>
  );
}
const LEAN_TITLE = "Reserved for claimed solved entries: the main theorem of the full claimed solution is formalized in Lean according to its authors; the Lean build was not rerun here.";
function isLeanVerified(p) {
  return p.status === "claimed-solved" && Boolean(p.lean);
}
function LeanBadge({ lean, status }) {
  if (!isLeanVerified({ lean, status })) return null;
  const inner = <span className="badge lean-badge" title={lean.note || LEAN_TITLE}>Lean verified</span>;
  return lean.url ? <a href={lean.url} target="_blank" rel="noreferrer" className="lean-link">{inner}</a> : inner;
}

function StatusBadge({ s }) {
  return (
    <span className={`badge st-${s}`} title={STATUSES[s].desc}>
      <span className="dot" style={{ background: `var(--${s})` }} />
      {STATUSES[s].label}
    </span>
  );
}

// ---------- problem text helpers ----------
// Paragraphs split on blank lines; a paragraph whose lines all start with "- " becomes a list.
function Paras({ text }) {
  return String(text || "").split(/\n\n+/).map((para, i) => {
    const lines = para.trim().split("\n");
    const isItem = (l) => l.trim().startsWith("- ");
    const list = (items) => <ul className="context-list">{items.map((l, j) => <li key={j}><MathText text={l.trim().slice(2)} /></li>)}</ul>;
    if (lines.every(isItem)) return <div key={i}>{list(lines)}</div>;
    if (lines.length > 1 && !isItem(lines[0]) && lines.slice(1).every(isItem)) {
      return <div key={i}><p className="list-lead"><MathText text={lines[0].trim()} /></p>{list(lines.slice(1))}</div>;
    }
    return <p key={i}><MathText text={para.trim()} /></p>;
  });
}

// Structured entries: the claimed solution is described in the "Claimed solution" text itself,
// so its sources are not listed again. "Previous progress" keeps only progress sources dated
// before the earliest claimed solution; later partial results are not listed.
function evidenceGroups(evidence) {
  const claimDates = evidence.filter((e) => e.role === "claimed-solution" && e.date).map((e) => e.date).sort();
  const cutoff = claimDates[0];
  return [
    { key: "progress", label: "Previous progress", progressLabels: true,
      items: evidence.filter((e) => e.kind !== "challenged" && e.role !== "claimed-solution" && e.role !== "claim-input" && (!cutoff || !e.date || e.date < cutoff)) },
    { key: "challenged", label: "Challenged claims", items: evidence.filter((e) => e.kind === "challenged") },
  ];
}

function EvidenceList({ items, status, progressLabels = false }) {
  return (
    <ul className="evidence-list">
      {items.map((item, i) => (
        <li key={i}>
          {item.lean && <LeanBadge status={item.role === "claimed-solution" ? status : null} lean={{ note: "Formalized in Lean according to the authors; the Lean build was not rerun here." }} />}{item.lean && " "}<span className={`badge ev-${item.kind}`} title={EVIDENCE_KINDS[item.kind]?.desc}>{progressLabels && item.kind === "preprint" ? "Preprint claimed progress" : (EVIDENCE_KINDS[item.kind]?.label || item.kind)}</span>
          <p><MathText text={item.summary} /></p>
          <a href={item.url} target="_blank" rel="noreferrer">Source{item.version ? ` · ${item.version}` : ""}{item.date ? ` · ${item.date}` : ""}</a>
        </li>
      ))}
    </ul>
  );
}

// ---------- header ----------
function Header({ crumbs }) {
  return (
    <header className="site-header">
      <div className="container inner">
        {crumbs && <a className="gh-link home-link" href="/">← Home</a>}
        <h1 className="title">Open Problems in Quantum Mechanics for AI Agents</h1>
        <p className="subtitle">
          A literature-reviewed catalogue for human researchers and AI agents.
          Entries give the question, status, evidence and references.
          Where available, we link to Lean statements and verified proofs on their original sites.
          Corrections and contributions are welcome.
        </p>
        <div className="header-links">
        <a
          className="gh-link gh-blue"
          href="https://github.com/jpbruneton/open_quantum_problems"
          target="_blank"
          rel="noreferrer"
        >
          <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
              0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53
              .63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95
              0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0
              1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15
              0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38
              A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/>
          </svg>
          <span>GitHub</span>
        </a>
        <a className="gh-link about-link" href="/similar">Similar projects</a>
        {TRENDS_PUBLISHED && <a className="gh-link about-link" href="/trends">Quantum trends</a>}
        <span className="monitoring-since">Monitoring since July 2026</span>
        <span className="powered-by">Powered by Astra &amp; Opus 5.5</span>
        </div>
        {crumbs && (
          <nav className="crumbs">
            <a href="/">Home</a>
            {crumbs.map((c, i) => (
              <span key={i}>
                <span className="sep">/</span>
                {c.to ? <a href={`/${c.to}`}>{c.label}</a> : <span>{c.label}</span>}
              </span>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

// ---------- home ----------
function isOpenSharp(p) {
  return p.horizon === "sharp" && p.status !== "claimed-solved" && !isLeanVerified(p);
}

function Home() {
  const total = PROBLEMS.length;
  const nSharp = PROBLEMS.filter((p) => p.horizon === "sharp").length;
  const nOpenSharp = PROBLEMS.filter(isOpenSharp).length;
  const nImproved = PROBLEMS.filter((p) => p.status === "improved").length;
  const nClaimedSolved = PROBLEMS.filter((p) => p.status === "claimed-solved").length;
  const leanVerified = PROBLEMS.filter(isLeanVerified);

  return (
    <>
      <Header />
      <section className="body">
        <div className="container">
          <div className="home-boxes">
            <div className="box box-current">
              <div className="box-kicker">This page</div>
              <h2>Known open problems</h2>
              <p>{total} literature-reviewed entries across {CATEGORIES.length} areas, each with its status and evidence.</p>
              <div className="stats">
                <div className="stat"><div className="n">{total}</div><div className="l">Active entries</div></div>
                <div className="stat"><div className="n">{nSharp}</div><div className="l">Sharp questions</div></div>
                <a className="stat stat-link" href="/improved" aria-label={`See all ${nImproved} improved problems`}>
                  <div className="n">{nImproved}</div><div className="l">Improved <span aria-hidden="true">→</span></div>
                </a>
                <a className="stat stat-link stat-claimed" href="/claimed-solved" aria-label={`See all ${nClaimedSolved} claimed solved problems`}>
                  <div className="n">{nClaimedSolved}</div><div className="l">Claimed solved <span aria-hidden="true">→</span></div>
                </a>
                {leanVerified.length > 0 && (
                  <a className="stat stat-link stat-lean" href="/lean-verified" aria-label={`See all ${leanVerified.length} Lean verified problems`} title={`Claimed solutions whose main theorem is formalized in Lean according to the authors: ${leanVerified.map((p) => p.id).join(", ")}`}>
                    <div className="n">{leanVerified.length}</div><div className="l">Lean verified <span aria-hidden="true">→</span></div>
                  </a>
                )}
              </div>
              <div className="sharp-cta-row">
                <a className="cta-sharp" href="/sharp">
                  <span aria-hidden="true">🔥</span> See open sharp problems ({nOpenSharp})
                </a>
              </div>
            </div>
            <a className="box box-new" href="/new-problems">
              <div className="box-kicker">New page</div>
              <h2>New problems suggested by AI</h2>
              <p>{PROPOSAL_COUNT} candidate questions, mostly opened by the 2026 claimed resolutions, and {SECONDARY_PROPOSALS.length} secondary leads. Not counted; not yet catalogue entries.</p>
              <span className="box-cta">Browse the proposals <span aria-hidden="true">→</span></span>
            </a>
            <a className="box box-science" href="/new-research">
              <div className="box-kicker">Research notes</div>
              <h2>New Research</h2>
              <p>Thirteen research notes, several settling published conjectures, with downloadable manuscripts, exact certificates, reproducible checks and links to the relevant literature.</p>
              <span className="box-cta">Read the research notes <span aria-hidden="true">→</span></span>
            </a>
          </div>

          <div className="review-note">
            <b>Last update · {LITERATURE_UPDATE.label}.</b> Four entries become “Claimed solved” and three more are updated from the arXiv announcements of 20 and 23 November; the items below them date from the updates of 20 and 21 November (nine new questions and literature updates, including the gr-qc and hep-th catch-up since 1 August). The selected evidence papers were read in full, including appendices.
            <ul>
              <li><a href="/p/N20">Kirkwood–Dirac positivity for finite abelian Fourier pairs</a> is now “Claimed solved” by a <a href="/new-research">research note of this site</a>: mixtures of pure KD-positive states exhaust the KD-positive states only for cyclic groups of prime-power order. The claim is ours and awaits independent assessment.</li>
              <li>A second <a href="/new-research">research note</a> proves that the Shannon entropies of the five mutually unbiased bases of a ququart sum to at least 7 bits, the value found numerically in 2017, and identifies the forty minimizing states. This answers the dimension-four question of proposal <a href="/np/PN4">PN4</a>, pending independent assessment.</li>
              <li><a href="/p/O12">The triplet conjecture for the Markovian Mpemba effect</a> and <a href="/p/F17">the extremality of Fock-bounded beam-splitter states</a> are now “Claimed solved” in the negative, by counterexamples published only as GitHub pull requests of the trureturing repository. Exact recomputations made for this catalogue reproduce both counterexamples.</li>
              <li><a href="/p/E26">The Krenn–Gu conjecture on GHZ graphs</a> is now “Claimed solved” by a proof posted on GitHub with a Lean 4 formalization, found through Krenn et al. (arXiv:2611.26300). Evidence was also updated for <a href="/p/A3">QMA versus QCMA</a>, <a href="/p/C2">the thermal attenuator</a> and <a href="/p/O10">Gibbs sampling beyond high temperature</a>.</li>
              <li><a href="/p/E21">Gaussian optimality of entanglement of formation</a> is now “Claimed solved” for arbitrary finite multimode bipartitions. The same preprint adds multimode Gaussian channel results to <a href="/p/C10">C10</a>, which remains “Improved”.</li>
              <li>Four entries become “Improved”: <a href="/p/B12">long-range propagation</a> in the Frobenius norm, <a href="/p/H4">python’s lunch decoding</a> in a Haar-oracle model, <a href="/p/QG4">nonsupersymmetric AdS stability</a> within a scalar effective theory, and <a href="/p/R3">renormalization-group flows</a> with a positive semidefinite metric. Their broader residual questions remain.</li>
              <li>Further results concern <a href="/p/B16">3D passive memory</a>, <a href="/p/N2">dimension-six MUBs</a>, <a href="/p/N3">restricted dimension-ten MUBs</a>, <a href="/p/O2">master-equation errors</a>, <a href="/p/F8">finite-resource frames</a> and <a href="/p/B15">the kagome spin liquid</a>. The kagome evidence is numerical and its status stays “Open”.</li>
              <li>Eight more entries become “Improved”: <a href="/p/QF11">local QFT measurements</a>, <a href="/p/QG8">de Sitter scalar equilibrium</a>, <a href="/p/QG3">flat-space charge completeness</a>, <a href="/p/G1">radiation algebras and the Page curve</a>, <a href="/p/H1">modular spectral gaps</a>, <a href="/p/QG7">no-boundary integration cycles</a>, <a href="/p/F14">causal nonlinear dynamics</a> and <a href="/p/QG6">gravitational quantum witnesses</a>. All retain their broader open targets. Evidence was also updated for <a href="/p/G3">quantum cosmic censorship</a>, <a href="/p/QF5">chiral gauge theory</a> and <a href="/p/QF7">infrared-finite scattering</a>.</li>
              <li>New entries: <a href="/p/A49">seven-qubit codes</a>, <a href="/p/A50">Golay-state preparation</a>, <a href="/p/B23">XXZ domain-wall fluctuations</a>, <a href="/p/M19">the Lieb–Oxford constant</a>, <a href="/p/M20">Kohn–Sham representability</a>, <a href="/p/E30">separability testing</a>, <a href="/p/A51">parent-Hamiltonian learning</a>, <a href="/p/A52">Hamiltonian learning at fixed minimum time</a> and <a href="/p/A53">query–space tradeoffs</a>. Exact-certificate context was updated for <a href="/p/A24">stabilizer rank</a> and <a href="/p/C11">depolarizing-channel capacity</a>. <a href={LITERATURE_UPDATE.reportUrl}>Read the sources, scope and full-text audit</a>.</li>
            </ul>
          </div>

          <div className="legend-block">
            <p><b>Four different horizons:</b></p>
            <ul className="horizon-list">
              {Object.entries(HORIZONS).map(([k, v]) => (
                <li key={k}><span className="dot" style={{ background: `var(--${k})` }} /> <b>{v.label}</b>: {v.desc}</li>
              ))}
            </ul>
          </div>

          <div className="grid">
            {CATEGORIES.map((c, _, all) => {
              const maxCatSize = Math.max(...all.map((x) => problemsByCat(x.slug).length));
              const ps = problemsByCat(c.slug);
              const counts = {
                sharp: ps.filter((p) => p.horizon === "sharp").length,
                incremental: ps.filter((p) => p.horizon === "incremental").length,
                programme: ps.filter((p) => p.horizon === "programme").length,
                conceptual: ps.filter((p) => p.horizon === "conceptual").length,
              };
              return (
                <a className="card" key={c.slug} href={`/c/${c.slug}`}>
                  <div className="code">{ps.length} active entries · {c.code} series</div>
                  <h3>{c.name}</h3>
                  <p>{c.blurb}</p>
                  <div className="foot">
                    <div className="mini-bars-track">
                      <div className="mini-bars" style={{ width: `${Math.round((100 * ps.length) / maxCatSize)}%` }}>
                        {Object.entries(counts).map(([k, n]) =>
                          n > 0 ? (
                            <span
                              key={k}
                              className="mini-bar"
                              title={`${n} ${HORIZONS[k].label}`}
                              style={{ flexGrow: n, background: `var(--${k})` }}
                            />
                          ) : null
                        )}
                      </div>
                    </div>
                    <span className="count">Open →</span>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="note">
            Corrections and additions are welcome.
            <p>“Claimed solved” means the authors report a complete solution to the problem. We keep that label until independent experts have reviewed the solution and confirmed that it settles the question.</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

// ---------- category table ----------
function CategoryView({ slug }) {
  const cat = getCategory(slug);
  if (!cat) return <NotFound />;
  const rows = problemsByCat(slug);

  return (
    <>
      <Header crumbs={[{ label: cat.name }]} />
      <section className="body">
        <div className="container">
          <p className="intro">{cat.blurb}</p>

          <ProblemFilter ariaLabel="Filter category entries" horizons={Object.fromEntries(Object.entries(HORIZONS).map(([k, v]) => [k, v.label]))} total={rows.length}>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th style={{ width: 56 }}>ID</th>
                  <th>Problem</th>
                  <th style={{ width: 130 }}>Horizon</th>
                  <th style={{ width: 150 }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((p) => (
                  <tr key={p.id} data-href={`/p/${p.id}`} data-search={searchText(p)} data-horizon={p.horizon}>
                    <td className="id">{p.id}</td>
                    <td className="stmt">
                      <div style={{ fontWeight: 600, marginBottom: 4 }}><a href={`/p/${p.id}`}>{p.title}</a></div>
                      <div style={{ color: "var(--muted)", fontSize: 13 }}>
                        <MathText text={truncate(p.statement, 150)} />
                      </div>
                    </td>
                    <td><HorizonBadge h={p.horizon} /></td>
                    <td><StatusBadge s={p.status} />{isLeanVerified(p) && <div style={{ marginTop: 6 }}><LeanBadge status={p.status} lean={p.lean} /></div>}</td>
                  </tr>
                ))}
                <tr data-empty="" hidden={rows.length > 0}><td colSpan={4} style={{ color: "var(--muted)" }}>No problems match the filter.</td></tr>
              </tbody>
            </table>
          </div>
          </ProblemFilter>
          {ARCHIVED_PROBLEMS.some((p) => p.cat === slug) && (
            <div className="note">
              Related merged entries and background:
              <ul className="related-links">
                {ARCHIVED_PROBLEMS.filter((p) => p.cat === slug).map((p) => (
                  <li key={p.id}><a href={`/p/${p.id}`}>{p.id} · {p.title}</a></li>
                ))}
              </ul>
              These pages retain their original links and are not counted above.
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

// ---------- filtered problems (all categories) ----------
function SharpView() {
  return <FilteredProblemsView />;
}

function ImprovedView() {
  return <FilteredProblemsView status="improved" />;
}

function ClaimedSolvedView() {
  return <FilteredProblemsView status="claimed-solved" />;
}

function FilteredProblemsView({ status = null, leanOnly = false }) {
  const label = leanOnly ? "Lean verified" : status ? STATUSES[status].label : "Open sharp";
  const rows = PROBLEMS.filter((p) => leanOnly ? isLeanVerified(p) : status ? p.status === status : isOpenSharp(p));

  return (
    <>
      <Header crumbs={[{ label: `${label} problems` }]} />
      <section className="body">
        <div className="container">
          <p className="intro">
            {leanOnly ? LEAN_TITLE : status
              ? STATUSES[status].desc
              : "Open sharp problems have a defined domain and resolution criterion: a proof or counterexample settles the stated target. Excludes claimed solved and Lean verified entries."}
          </p>

          <ProblemFilter ariaLabel={`Filter ${label.toLowerCase()} problems`} countLabel={label.toLowerCase()} total={rows.length}>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th style={{ width: 56 }}>ID</th>
                  <th style={{ width: 170 }}>Area</th>
                  <th>Problem</th>
                  <th style={{ width: 150 }}>{status ? "Horizon" : "Status"}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((p) => (
                  <tr key={p.id} data-href={`/p/${p.id}`} data-search={searchText(p)} data-horizon={p.horizon}>
                    <td className="id">{p.id}</td>
                    <td style={{ color: "var(--muted)", fontSize: 13 }}>{getCategory(p.cat).name}</td>
                    <td className="stmt">
                      <div style={{ fontWeight: 600, marginBottom: 4 }}><a href={`/p/${p.id}`}>{p.title}</a></div>
                      <div style={{ color: "var(--muted)", fontSize: 13 }}>
                        <MathText text={truncate(p.statement, 150)} />
                      </div>
                    </td>
                    <td>{status ? <HorizonBadge h={p.horizon} /> : <StatusBadge s={p.status} />}{isLeanVerified(p) && <div style={{ marginTop: 6 }}><LeanBadge status={p.status} lean={p.lean} /></div>}</td>
                  </tr>
                ))}
                <tr data-empty="" hidden={rows.length > 0}><td colSpan={4} style={{ color: "var(--muted)" }}>No problems match the filter.</td></tr>
              </tbody>
            </table>
          </div>
          </ProblemFilter>
        </div>
      </section>
      <Footer />
    </>
  );
}

// ---------- problem detail ----------
function ProblemView({ id }) {
  const p = getProblem(id);
  if (!p) return <NotFound />;
  const cat = getCategory(p.cat);
  const children = consolidatedInto(p.id);

  return (
    <>
      <Header crumbs={[{ label: cat.name, to: `c/${cat.slug}` }, { label: p.id }]} />
      <section className="body">
        <div className="container detail">
          <a className="back" href={`/c/${cat.slug}`}>← {cat.name}</a>
          <div className="badge-row" style={{ margin: "6px 0 2px" }}>
            <span className="badge" style={{ color: "var(--muted)" }}>{p.id}</span>
            <HorizonBadge h={p.horizon} />
            {p.archive ? <span className="badge">{p.archive.kind === "merged" ? "Merged entry" : "Background"}</span> : <StatusBadge s={p.status} />}
            <LeanBadge status={p.status} lean={p.lean} />
          </div>
          <h2>{p.title}</h2>
          {p.statusNote && (
            <aside className="status-note" aria-label="Why this status">
              <b>Why this status.</b> <MathText text={p.statusNote} />
            </aside>
          )}

          <div className="xref-block">
            <h4>In other catalogues</h4>
            {p.catalogues.length > 0 ? (
              <>
              <ul className="refs xref-list">
                {p.catalogues.map((x, i) => (
                  <li key={i}>
                    <b>{x.catalogue}</b>: <a href={x.url} target="_blank" rel="noreferrer">{x.title}</a>
                    {x.note ? <> — <MathText text={x.note} /></> : null}
                  </li>
                ))}
              </ul>
              </>
            ) : (
              <p className="review-meta">Not found in other catalogues.</p>
            )}
          </div>

          {p.archive && (
            <aside className="archive-note" aria-label="Catalogue disposition">
              <b>{p.archive.kind === "merged" ? "Consolidated, not separately counted." : "Background, not an open-problem entry."}</b>
              <p>{p.archive.reason}</p>
              {p.archive.targets.length > 0 && (
                <ul className="related-links">
                  {p.archive.targets.map((target) => <li key={target}><a href={`/p/${target}`}>{target} · {getProblem(target)?.title}</a></li>)}
                </ul>
              )}
            </aside>
          )}

          <div className="statement"><MathText text={p.statement} /></div>

          {p.definition ? (
            <>
              <h4>Definition</h4>
              <div className="context"><Paras text={p.definition} /></div>
              {p.leanFormulations.length > 0 && (
                <>
                  <h4>Lean formulation</h4>
                  <ul className="refs">
                    {p.leanFormulations.map(({ label, url }) => (
                      <li key={url}><a href={url} target="_blank" rel="noreferrer">{label}</a></li>
                    ))}
                  </ul>
                </>
              )}
              {p.progress && (<><h4>Progress</h4><div className="context"><Paras text={p.progress} /></div></>)}
              {p.claim && (<><h4>Claimed solution</h4><div className="context claim-block"><Paras text={p.claim} /></div></>)}
              {p.residual && (<><h4>What remains open</h4><div className="context"><Paras text={p.residual} /></div></>)}
            </>
          ) : (
            <>
              <h4>{p.archive ? "Retained context & background" : "Known results & open residual"}</h4>
              <div className="context"><Paras text={p.context} /></div>
            </>
          )}

          {p.evidence.length > 0 && (p.evidence.some((e) => e.role) ? (
            evidenceGroups(p.evidence).map((g) => g.items.length > 0 && (
              <div key={g.key}>
                <h4>{g.label}</h4>
                <EvidenceList status={p.status} items={g.items} progressLabels={g.progressLabels} />
              </div>
            ))
          ) : (
            <>
              <h4>Evidence &amp; scope</h4>
              <EvidenceList status={p.status} items={p.evidence} />
            </>
          ))}

          {(p.relations.length > 0 || children.length > 0) && (
            <>
              <h4>Related questions &amp; consolidated subproblems</h4>
              <ul className="related-links">
                {p.relations.map((rel, i) => <li key={`rel-${i}`}><a href={`/p/${rel.id}`}>{rel.id} · {getProblem(rel.id)?.title}</a> <span className="relation-type">({rel.type})</span></li>)}
                {children.filter((child) => !p.relations.some((rel) => rel.id === child.id)).map((child) => <li key={child.id}><a href={`/p/${child.id}`}>{child.id} · {child.title}</a> <span className="relation-type">(consolidated here)</span></li>)}
              </ul>
            </>
          )}

          <h4>References</h4>
          <ul className="refs">
            {p.refs.map((rf, i) => (
              <li key={i}>
                {rf.url ? <a href={rf.url} target="_blank" rel="noreferrer">{rf.label}</a> : rf.label}
              </li>
            ))}
          </ul>

          {p.provenance.length > 0 && (
            <>
              <h4>Author-reported provenance</h4>
              <p className="review-meta">These are attributed disclosures, not independent determinations of authorship or proof correctness.</p>
              <ul className="refs">
                {p.provenance.map((item, i) => <li key={i}><MathText text={item.summary} />{" "}<a href={item.url} target="_blank" rel="noreferrer">Disclosure{item.version ? ` · ${item.version}` : ""}</a></li>)}
              </ul>
            </>
          )}

          {(() => {
            const list = problemsByCat(p.cat);
            const i = list.findIndex((x) => x.id === p.id);
            if (i < 0) return null;
            const prev = list[i - 1];
            const next = list[i + 1];
            return (
              <nav className="proposal-pager" aria-label={`Other entries in ${cat.name}`}>
                {prev ? <a href={`/p/${prev.id}`}>← {prev.id} · {prev.title}</a> : <span />}
                {next ? <a href={`/p/${next.id}`}>{next.id} · {next.title} →</a> : <span />}
              </nav>
            );
          })()}
        </div>
      </section>
      <Footer />
    </>
  );
}

// ---------- new problems suggested by AI ----------
const VERDICTS = {
  "open-substantive": { label: "Open, substantive", desc: "Genuinely open and non-trivial." },
  "open-minor": { label: "Open, modest", desc: "Open, but a modest technical extension of known results." },
  "open-narrow": { label: "Open, narrow scope", desc: "Open question restricted to a narrow class of models." },
  evident: { label: "Routine or false", desc: "A routine consequence of known results, or a conjecture that turns out to be false." },
  known: { label: "Already known", desc: "Already answered in the literature." },
  "ill-posed": { label: "Ill-posed", desc: "Not well defined as written." },
  "under-review": { label: "Under review", desc: "Status being checked." },
};

function VerdictBadge({ a }) {
  if (!a) return null;
  const v = VERDICTS[a.verdict] || { label: a.verdict };
  return <span className={`badge verdict verdict-${a.verdict}`} title={v.desc}>{v.label}</span>;
}

const ALL_PROPOSALS = PRIORITY_RECORDS.filter(it => !it.withdrawal);

function ProposalView({ pkey }) {
  const it = PRIORITY_RECORDS.find(item => item.key === pkey || item.formerly === pkey);
  if (!it) return <NotFound />;
  const idx = ALL_PROPOSALS.indexOf(it);
  const prev = ALL_PROPOSALS[idx - 1];
  const next = idx >= 0 ? ALL_PROPOSALS[idx + 1] : undefined;
  const baseline = it.baseline ? it.baseline.split(/;\s+/).map((s) => s.trim().replace(/\.$/, "").replace(/(?<!\[)arXiv:((?:\d{4}\.\d{4,5}|[a-z-]+\/\d{7})(?:v\d+)?)/g, "[arXiv:$1](https://arxiv.org/abs/$1)")).filter(Boolean) : [];
  return (
    <>
      <Header crumbs={[{ label: "New problems suggested by AI", to: "new-problems" }, { label: it.key }]} />
      <section className="body">
        <div className="container detail">
          <a className="back" href="/new-problems">← New problems suggested by AI</a>
          <div className="badge-row" style={{ margin: "6px 0 2px" }}>
            <span className="badge" style={{ color: "var(--muted)" }} title={it.formerly ? `Formerly ${it.formerly}` : undefined}>{it.key}</span>
            <HorizonBadge h={it.horizon} />
            <span className="badge st-proposed">{it.withdrawal ? "Withdrawn from selection" : "Proposed"}</span>
          </div>
          <h2>{it.title}</h2>
          {it.formerly && <p className="review-meta">Formerly {it.formerly}</p>}

          <div className="xref-block">
            <h4>Grows out of</h4>
            {it.extends.length > 0 ? (
              <ul className="refs xref-list">
                {it.extends.map((id) => <li key={id}><a href={`/p/${id}`}>{id} · {getProblem(id)?.title}</a></li>)}
              </ul>
            ) : <p className="review-meta">No specific catalogue entry.</p>}
          </div>

          {it.withdrawal && (<><h4>Reason for withdrawal · 19 November 2026</h4><div className="context"><Paras text={it.withdrawal} /></div><h4>Original question</h4></>)}
          <div className="statement"><Paras text={it.statement} /></div>

          {!it.withdrawal && <>
          <h4>Research context</h4>
          <div className="context"><Paras text={it.why} /></div>

          {it.assessment && (
            <>
              <h4>Critical review</h4>
              <div className="context review-block">
                <p><VerdictBadge a={it.assessment} />{it.assessment.confidence && <span className="review-meta"> · confidence {it.assessment.confidence}</span>}</p>
                <Paras text={it.assessment.summary} />
              </div>
            </>
          )}

          </>}
          {baseline.length > 0 && (
            <>
              <h4>Baseline literature</h4>
              <ul className="refs">{baseline.map((b, i) => <li key={i}><MathText text={b} /></li>)}</ul>
            </>
          )}

          {!it.withdrawal && it.caveat && (<><h4>Caveats</h4><div className="context"><Paras text={it.caveat} /></div></>)}
          {it.ai && (<><h4>Reported AI use</h4><div className="context"><Paras text={it.ai} /></div></>)}

          <p className="review-meta"><a href={PROPOSALS_EVIDENCE_REVIEW.reportUrl + "#" + it.key.toLowerCase()}>Selection decision and sources · 27 November 2026</a></p>
          <p className="disclaimer">Suggested by AI on {proposalBatch(it).label} ({it.catName}). Outside the catalogue and its counts. <a href={proposalBatch(it).reportUrl} target="_blank" rel="noreferrer">Full proposal with verification marks →</a></p>

          <nav className="proposal-pager" aria-label="Other proposals">
            {prev ? <a href={`/np/${prev.key}`}>← {prev.key} · {prev.title}</a> : <span />}
            {next ? <a href={`/np/${next.key}`}>{next.key} · {next.title} →</a> : <span />}
          </nav>
        </div>
      </section>
      <Footer />
    </>
  );
}

function NewProblemsView() {
  return (
    <>
      <Header crumbs={[{ label: "New problems suggested by AI" }]} />
      <section className="body">
        <div className="container">
          <h2>New problems suggested by AI</h2>
          <p className="intro">Reviewed {PROPOSALS_EVIDENCE_REVIEW.label} · {PROPOSAL_COUNT} priority candidates and {SECONDARY_PROPOSALS.length} secondary leads</p>
          <p>The <a href={PROPOSALS_EVIDENCE_REVIEW.reportUrl}>27 November review</a> compares each proposal with the catalogue and research notes. PN4 now asks for the exact entropy minimum in dimension five. The new questions concern <a href="/np/PE5">two-way local discrimination</a> and <a href="/np/PN6">three-copy measurement precision</a>. Proposals are not counted among catalogue entries.</p>
          <p>The <a href={SELECTION_REPORT}>19 November selection</a> records the original 79 decisions, including the {WITHDRAWN_PROPOSALS.length} withdrawals.</p>
          <p>Open a priority question to read its statement, literature and assessment. “Extends” links to the catalogue problem that motivated it. Priority identifiers begin with P and secondary leads with S. Earlier priority identifiers still open their original records.</p>
          <p>The <a href={PROPOSALS_META.reportUrl}>8 November review</a> started from the catalogue, the <a href={PROPOSALS_META_NEW_AREAS.reportUrl}>9 November review</a> covered gravity and holography, and the <a href={PROPOSALS_META_CARTE_V2.reportUrl}>16 November review</a> drew on a map of recent quantum research. The <a href={PROPOSALS_FORMULATION_REVIEW.reportUrl}>17 November revision</a> specified models and resolution criteria. Scientific assessments and selection decisions are AI-assisted and await independent review.</p>
          <nav className="proposal-nav" aria-label="Areas">
            {PROPOSALS.map((g) => <a key={g.cat} href={`#np-${g.cat}`}>{g.name} ({g.items.length})</a>)}
            <a href="#np-secondary">Secondary leads ({SECONDARY_PROPOSALS.length})</a>
          </nav>
          {PROPOSALS.map((g) => (
            <section key={g.cat} id={`np-${g.cat}`} className="proposal-group">
              <h3>{g.name}</h3>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th style={{ width: 56 }}>ID</th>
                      <th>Problem</th>
                      <th style={{ width: 130 }}>Horizon</th>
                      <th style={{ width: 150 }}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {g.items.map((it) => (
                      <Fragment key={it.key}>
                        <tr data-href={`/np/${it.key}`}>
                          <td className="id">{it.key}</td>
                          <td className="stmt">
                            <div style={{ fontWeight: 600, marginBottom: 4 }}><a href={`/np/${it.key}`} className="row-title">{it.title}</a></div>
                            <div style={{ color: "var(--muted)", fontSize: 13 }}>
                              <MathText text={truncate(it.statement, 150)} />
                            </div>
                            {it.extends.length > 0 && <div className="proposal-extends" style={{ fontSize: 12, marginTop: 4 }}>extends {it.extends.map((id, i) => <span key={id}>{i > 0 ? ", " : ""}<a href={`/p/${id}`}>{id}</a></span>)}</div>}
                          </td>
                          <td><HorizonBadge h={it.horizon} /></td>
                          <td>
                            <span className="badge st-proposed" title="Candidate question, not a catalogue entry"><span className="dot" style={{ background: "var(--muted-2)" }} />Proposed</span>
                            {it.assessment && <div style={{ marginTop: 6 }}><VerdictBadge a={it.assessment} /></div>}
                          </td>
                        </tr>
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}
          <h3 id="np-secondary">Secondary leads</h3>
          <p>Sharp but with thinner baselines, lower confidence that they are open, or overlapping an existing entry.</p>
          <ul className="archive-list">
            {SECONDARY_PROPOSALS.map((it) => (
              <li key={it.key} id={it.key}>
                <b title={it.formerly ? `Formerly ${it.formerly}` : undefined}>{it.key} · {it.title}</b>
                {it.extends.length > 0 && <span className="proposal-extends"> extends {it.extends.map((id, i) => <span key={id}>{i > 0 ? ", " : ""}<a href={`/p/${id}`}>{id}</a></span>)}</span>}
                <div className="context"><Paras text={it.note} /></div>
                <a href={PROPOSALS_EVIDENCE_REVIEW.reportUrl + "#" + it.key.toLowerCase()}>Selection decision and sources</a>
              </li>
            ))}
          </ul>
          <details className="proposal-group">
            <summary>Withdrawn proposals ({WITHDRAWN_PROPOSALS.length})</summary>
            <ul className="archive-list">{WITHDRAWN_PROPOSALS.map(it => (
              <li key={it.key} id={it.key}>
                <b>{it.statement ? <a href={`/np/${it.key}`}>{it.key} · {it.title}</a> : it.key + " · " + it.title}</b>
                <div className="context"><Paras text={it.withdrawal} /></div>
                <a href={PROPOSALS_EVIDENCE_REVIEW.reportUrl + "#" + it.key.toLowerCase()}>Selection decision and sources</a>
              </li>
            ))}</ul>
          </details>
          <p className="disclaimer">These proposals were produced by an AI-assisted review and checked against the cited sources, not refereed. A candidate becomes a catalogue entry only after a human curator assigns an ID, statement and baseline through the usual review process.</p>
        </div>
      </section>
      <Footer />
    </>
  );
}

// ---------- quantum trends (draft) ----------
// Draft page: reachable at /trends but not linked from the home page while
// TRENDS_PUBLISHED is false.
const TRENDS_PUBLISHED = false;

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function monthLabel(yymm) {
  return `${MONTH_NAMES[Number(yymm.slice(2)) - 1]} 20${yymm.slice(0, 2)}`;
}
function fmtGrowth(g) {
  return `×${g.toFixed(2)}`;
}
function fmtInt(n) {
  return n.toLocaleString("en-US");
}

// Diverging bar on a log2 scale, centred on ×1 (follows the overall volume).
function GrowthBar({ g }) {
  const w = 120, mid = w / 2, max = 1.05; // log2 range shown on each side
  const v = Math.max(-max, Math.min(max, Math.log2(g)));
  const len = Math.max(2, Math.abs(v) / max * mid);
  const x = v >= 0 ? mid : mid - len;
  return (
    <span className="growth-cell">
      <svg width={w} height={12} viewBox={`0 0 ${w} 12`} aria-hidden="true">
        <rect x={x} y={2} width={len} height={8} rx={2} fill={v >= 0 ? "var(--sharp)" : "var(--accent-2)"} />
        <line x1={mid} x2={mid} y1={0} y2={12} stroke="var(--muted-2)" strokeWidth={1} />
      </svg>
      <span className="growth-num">{fmtGrowth(g)}</span>
    </span>
  );
}

// Monthly share of the corpus (papers per thousand), with the year boundary marked.
function Sparkline({ counts, totals, months, split }) {
  const w = 132, h = 30, pad = 2;
  const shares = counts.map((c, i) => (1000 * c) / totals[i]);
  const top = Math.max(...shares) || 1;
  const xs = (i) => pad + (i * (w - 2 * pad)) / (shares.length - 1);
  const ys = (s) => h - pad - (s / top) * (h - 2 * pad);
  const pts = shares.map((s, i) => `${xs(i).toFixed(1)},${ys(s).toFixed(1)}`).join(" ");
  const splitIdx = months.indexOf(split);
  const peak = shares.indexOf(top);
  const label = `Monthly share of the corpus, ${monthLabel(months[0])} to ${monthLabel(months[months.length - 1])}. Peak ${top.toFixed(1)}‰ in ${monthLabel(months[peak])}.`;
  return (
    <svg className="spark" width={w} height={h} viewBox={`0 0 ${w} ${h}`} role="img" aria-label={label}>
      <title>{label}</title>
      {splitIdx > 0 && <line x1={xs(splitIdx)} x2={xs(splitIdx)} y1={0} y2={h} stroke="var(--border)" strokeWidth={1} strokeDasharray="2 2" />}
      <polyline points={pts} fill="none" stroke="var(--accent)" strokeWidth={1.5} strokeLinejoin="round" />
    </svg>
  );
}

function TrendEntries({ entries }) {
  const cat = entries.filter((e) => e.kind === "catalogue");
  const prop = entries.filter((e) => e.kind === "proposal");
  if (!entries.length) return <span className="trend-none">none</span>;
  return (
    <span className="trend-entries">
      {cat.map((e, i) => <span key={e.id}>{i > 0 ? ", " : ""}<a href={`/p/${e.id}`} title={getProblem(e.id)?.title || e.title}>{e.id}</a></span>)}
      {prop.length > 0 && <span className="trend-props">{cat.length ? " · " : ""}proposals {prop.map((e, i) => <span key={e.id}>{i > 0 ? ", " : ""}<a href={`/np/${e.id}`} title={e.title}>{e.id}</a></span>)}</span>}
    </span>
  );
}

function TrendTable({ topics, meta, showEntries = true }) {
  const splitMonth = meta.split.slice(2, 4) + meta.split.slice(5, 7);
  return (
    <div className="table-wrap">
      <table className="trend-table">
        <thead>
          <tr>
            <th>Topic</th>
            <th style={{ width: 110 }}>Papers<br /><span className="th-sub">year 1 → year 2</span></th>
            <th style={{ width: 190 }}>Relative growth</th>
            <th style={{ width: 150 }}>Monthly share</th>
            {showEntries && <th style={{ width: 190 }}>Nearby entries</th>}
          </tr>
        </thead>
        <tbody>
          {topics.map((t) => (
            <tr key={t.cluster} className="trend-row">
              <td>
                <div className="trend-label">{t.label}</div>
                <div className="trend-terms">{t.terms.slice(0, 4).join(" · ")}</div>
              </td>
              <td className="num">{fmtInt(t.year1)} → {fmtInt(t.year2)}</td>
              <td><GrowthBar g={t.growth} /></td>
              <td><Sparkline counts={t.monthly} totals={meta.monthlyTotal} months={meta.months} split={splitMonth} /></td>
              {showEntries && <td><TrendEntries entries={t.entries} /></td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TrendsView() {
  const { meta, rising, declining, gaps, flagged, zones, source } = TRENDS;
  return (
    <>
      <Header crumbs={[{ label: "Quantum trends" }]} />
      <section className="body">
        <div className="container">
          {!TRENDS_PUBLISHED && <div className="draft-banner"><b>Draft.</b> This page is not linked from the site yet. Figures and wording may change.</div>}
          <h2>Quantum trends</h2>
          <p className="intro">What quant-ph has been writing about, {monthLabel("2411")} to {monthLabel("2611")}, compared with the catalogue snapshot built on {source.builtOn}.</p>
          <p>We grouped the titles and abstracts of every arXiv paper first submitted with the quant-ph category (primary or cross-list) between 10 November 2024 and 10 November 2026 into topics, then compared year 1 with year 2 (split on {meta.split}). Total volume grew from {fmtInt(meta.year1)} to {fmtInt(meta.year2)} papers (×{meta.volumeGrowth.toFixed(2)}), so growth figures below are <b>relative</b>: ×1 means a topic kept pace with quant-ph as a whole, ×2 means its share doubled.</p>
          <p className="disclaimer">The grouping compares <b>words, not meaning</b>: papers on the same question in different vocabulary can land in different topics, and a shared writing style can create a topic of its own. Counts measure arXiv activity, not importance. Topic names were written by hand from each group’s characteristic terms and example papers.</p>

          <div className="stats trend-stats">
            <div className="stat"><div className="n">{fmtInt(meta.papers)}</div><div className="l">Papers</div></div>
            <div className="stat"><div className="n">{meta.topics}</div><div className="l">Topics</div></div>
            <div className="stat"><div className="n">{meta.zones}</div><div className="l">Areas</div></div>
            <div className="stat"><div className="n">×{meta.volumeGrowth.toFixed(2)}</div><div className="l">Volume, year 2 / year 1</div></div>
          </div>

          <nav className="proposal-nav" aria-label="Sections">
            <a href="#tr-rising">Rising</a>
            <a href="#tr-declining">Declining</a>
            <a href="#tr-areas">By area</a>
            <a href="#tr-gaps">Gaps in the snapshot</a>
            <a href="#tr-method">Method</a>
          </nav>

          <section id="tr-rising" className="proposal-group">
            <h3>Rising topics</h3>
            <p>Topics of at least 80 papers whose share of quant-ph grew most. Error correction dominates: qLDPC codes, decoders and fault-tolerant compilation all grow by half or more, while Gibbs sampling and Hamiltonian learning extend a line of rigorous algorithmic work. Quantum query complexity has the sharpest rise, concentrated in September and October 2026. The same topic and Gibbs sampling also peaked in September–October 2025, which points to a seasonal effect (conference submission deadlines) amplifying the trend; it is not yet clear how much of the 2026 spike is a lasting shift.</p>
            <TrendTable topics={rising} meta={meta} />
            <p className="trend-caption">Relative growth: share in year 2 over share in year 1, smoothed by 5 papers; bars on a log scale centred on ×1. Monthly share: papers per thousand in the corpus, December 2024 to October 2026 (partial first and last months left out); the dashed line marks the start of year 2. “Nearby entries” are catalogue entries and proposals whose text falls closest to the topic in the same word space: a proximity of vocabulary, not proof that the papers address the problem.</p>
          </section>

          <section id="tr-declining" className="proposal-group">
            <h3>Declining topics</h3>
            <p>Topics whose share fell most. Most still grow in absolute numbers; they simply did not keep pace with the field. Generic quantum machine learning, time crystals and Majorana zero modes are the clearest cases among theory topics.</p>
            <TrendTable topics={declining} meta={meta} />
          </section>

          <section id="tr-areas" className="proposal-group">
            <h3>By area</h3>
            <p>The {meta.zones} broad areas found at a coarser grouping, by size. The last column counts the catalogue entries (active or archived) in the {source.builtOn} snapshot whose text falls in each area. Experimental and platform areas (optics, atoms, superconducting circuits) are large and nearly absent from that snapshot, as expected for a list of theoretical problems; the more telling gaps are theoretical, below.</p>
            <div className="table-wrap">
              <table className="trend-table">
                <thead>
                  <tr>
                    <th>Area</th>
                    <th style={{ width: 120 }}>Papers</th>
                    <th style={{ width: 190 }}>Relative growth</th>
                    <th style={{ width: 120 }}>Snapshot entries</th>
                  </tr>
                </thead>
                <tbody>
                  {zones.map((z) => (
                    <tr key={z.zone} className="trend-row">
                      <td><div className="trend-label">{z.label}</div><div className="trend-terms">{z.topics} topic{z.topics > 1 ? "s" : ""}</div></td>
                      <td className="num">{fmtInt(z.papers)}</td>
                      <td><GrowthBar g={z.growth} /></td>
                      <td className="num">{z.entries}{z.proposals > 0 && <span className="trend-terms"> + {z.proposals} proposal{z.proposals > 1 ? "s" : ""}</span>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="trend-caption">Area growth is the unsmoothed ratio of shares. The flagged topic below is left out of its area.</p>
          </section>

          <section id="tr-gaps" className="proposal-group">
            <h3>Theory gaps in the {source.builtOn} snapshot</h3>
            <p>Mostly theoretical topics (judged from a sample of annotated papers) with no catalogue entry or proposal nearby in that snapshot. The table records historical coverage: later additions include <a href="/p/A35">quantum walks</a>, <a href="/p/A39">magic-state distillation</a>, <a href="/p/B20">monitored circuits</a>, <a href="/p/A48">quantum signal processing</a> and the <a href="/p/O12">Mpemba effect</a>. The map has not been recomputed with these additions.</p>
            <TrendTable topics={gaps} meta={meta} showEntries={false} />
          </section>

          <section id="tr-reading" className="proposal-group">
            <h3>Literature review following the map</h3>
            <div className="review-note trend-pending">
              <b>16 November 2026 update.</b> A subsequent review using a separate semantic map added 36 catalogue entries and eleven proposals. <a href={PROPOSALS_META_CARTE_V2.reportUrl} target="_blank" rel="noreferrer">Read the questions, sources and verification report</a>. The historical tables above retain the earlier word-based map.
            </div>
          </section>

          <section id="tr-flagged" className="proposal-group">
            <h3>Flagged groups</h3>
            <ul className="archive-list">
              {flagged.map((f) => (
                <li key={f.cluster}><b>{f.label}</b> <span className="trend-terms">({fmtInt(f.year1)} → {fmtInt(f.year2)} papers)</span><p>{f.note}</p></li>
              ))}
            </ul>
          </section>

          <section id="tr-method" className="proposal-group">
            <h3>Method</h3>
            <ul className="context-list">
              <li>Corpus: {fmtInt(meta.papers)} titles and abstracts from the arXiv API (quant-ph, primary or cross-list, first submitted 10 November 2024 to 10 November 2026).</li>
              <li>Representation: TF-IDF on words and word pairs (title counted twice, formulas removed), reduced to 256 dimensions. No language model or semantic embedding was used.</li>
              <li>Topics: Leiden community detection on the 15-nearest-neighbour graph, at two resolutions ({meta.topics} topics, {meta.zones} areas).</li>
              <li>Catalogue placement: the {meta.catalogueItems} catalogue entries and proposals in the snapshot built on {source.builtOn} were projected into the same space and attached to the majority topic of their 10 nearest papers. This placement predates the 16 November additions.</li>
              <li>Topic and area names, and the selection of topics shown, were made by hand by an AI-assisted analysis and have not been reviewed by a domain expert.</li>
            </ul>
            <p>Data and code: {source.path} in the project’s research repository (commit {source.commit}, not yet public), built {source.builtOn}.</p>
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
}

function NotFound() {
  return (
    <>
      <Header crumbs={[{ label: "Not found" }]} />
      <section className="body"><div className="container"><p>Not found. <a href="/">Back home</a>.</p></div></section>
      <Footer />
    </>
  );
}

// ---------- similar projects ----------
const SIMILAR_PROJECTS = [
  { name: "QIQCOP Zoo", href: "https://qiqc-op.com/", desc: "Quantum Information and Quantum Computation Open Problem Zoo: about 220 audited problems in quantum information, computation, communication, cryptography and error correction, marked Solved or Unsolved, with a public JSON API (source on GitHub: Naixu-Guo/quantum-open-problems). Entries shared with this catalogue are cross-referenced on each problem page." },
  { name: "Open Quantum Problems (IQOQI Vienna)", href: "https://oqp.iqoqi.oeaw.ac.at/open-quantum-problems", desc: "The historical list started by Reinhard Werner, maintained by IQOQI Vienna: about thirty classic questions in entanglement, foundations, communication and complexity, with a separate page of solved problems." },
  { name: "QMBL — Quantum Many-Body Leaderboard", href: "https://github.com/quantum-many-body-leaderboard/open-problems", desc: "A record book of the best verified ground-state energies for hundreds of many-body models without an exact solution (Hubbard, J1–J2, electron gases, hydrogen chains…), designed as a benchmark for scientists and AI systems." },
  { name: "OpenProblemBench", href: "https://arxiv.org/abs/2610.11118", desc: "A benchmark of 82 literature-grounded open problems in mathematics and theoretical physics, including quantum information, used to evaluate AI models on research-level questions (Li et al., October 2026)." },
  { name: "OpenFrontiers", href: "https://openfrontiers.vercel.app/", desc: "A searchable index spanning mathematics, physics, computer science and other fields. Its October 2026 corpus includes 114 entries from this catalogue. The accompanying mathematics benchmark contains 200 problems with Lean 4 statements." },
  { name: "Erdős problems", href: "https://www.erdosproblems.com/", desc: "The database of Paul Erdős's problems that inspired the format of this catalogue: precise statements, status and references. Mathematics rather than physics." },
  { name: "FrontierMath: Open Problems (Epoch AI)", href: "https://epoch.ai/latest/benchmarking-ai-on-unsolved-math-problems", desc: "Unsolved research mathematics problems with computationally verifiable answers, used to benchmark AI systems." },
];

function SimilarProjectsView() {
  return (
    <>
      <Header crumbs={[{ label: "Similar projects" }]} />
      <section className="body">
        <div className="container detail">
          <h2>Similar projects</h2>
          <p>Other catalogues of open problems, in quantum physics or aimed at AI systems. This catalogue differs by its breadth (spectral theory, many-body physics, QFT, foundations, open systems and undecidability as well as quantum information), by its separate “Claimed solved” status for announced resolutions, and by recording authors' AI-use disclosures.</p>
          <ul className="similar-list">
            {SIMILAR_PROJECTS.map((s) => (
              <li key={s.href}><h4><a href={s.href} target="_blank" rel="noreferrer">{s.name}</a></h4><p>{s.desc}</p></li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}

// ---------- new research ----------
function NewResearchView() {
  return (
    <>
      <Header crumbs={[{ label: "New Research" }]} />
      <section className="body">
        <div className="container detail new-science-page">
          <h2>New Research</h2>
          <div className="science-caution">
            <b>About the research notes published here.</b> Each note gives an exact proof of its mathematical results, with reproducible checks available on <a href="https://github.com/jpbruneton/open_quantum_problems/tree/main/research/entries" target="_blank" rel="noreferrer">GitHub</a>. Each note describes the scope of its literature search. Unless otherwise stated, the search found no earlier work establishing the same results. Several notes settle conjectures posed in published papers.
          </div>
          <section className="research-citation">
            <h4>To cite this work</h4>
            <p>Use the example below for the Kirkwood–Dirac note. For another note, replace the citation key, title, year and PDF URL.</p>
            <div className="citation-format">
              <span>BibTeX</span>
              <pre><code>{String.raw`@misc{bruneton2026kdz3x3,
  author = {Jean-Philippe Bruneton},
  title = {{Kirkwood--Dirac} positive states of finite abelian {Fourier} pairs: mixtures of pure states exhaust them only for cyclic groups of prime-power order},
  year = {2026},
  url = {https://openquantumproblems.com/research/kd-z3x3.pdf}
}`}</code></pre>
            </div>
          </section>
          <div className="research-list">
            {NEW_RESEARCH_NOTES.map((note) => (
              <article className="research-note" key={note.dossier}>
                <div className="science-meta">{note.meta}</div>
                <h3>{note.title}</h3>
                <p className="research-summary">{note.summary}</p>
                <p className="research-result"><b>Main result.</b> {note.result}</p>
                <div className="research-actions">
                  <a className="research-pdf" href={note.pdf} target="_blank" rel="noreferrer">Read the PDF <span aria-hidden="true">↗</span></a>
                  <a className="research-files" href={note.dossier} target="_blank" rel="noreferrer">Source, certificate and checks <span aria-hidden="true">↗</span></a>
                </div>
                <div className="research-refs">
                  <div className="research-refs-label">References</div>
                  <ul>
                    {note.refs.map((ref) => (
                      <li key={ref.label}>
                        <span className="research-ref-label">{ref.label}</span>
                        {ref.doi && <>{" · "}<a href={ref.doi} target="_blank" rel="noreferrer">doi:{ref.doi.replace("https://doi.org/", "")}</a></>}
                        {ref.arxiv && <>{" · "}<a href={ref.arxiv} target="_blank" rel="noreferrer">arXiv:{ref.arxiv.replace("https://arxiv.org/abs/", "").replace(/v\d+$/, "")}</a></>}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <span>Open Problems in Quantum Mechanics for AI Agents · {PROBLEMS.length} active entries · LaTeX rendered with KaTeX.</span>
        <div className="footer-meta">
          <span className="footer-resources">
            <span className="footer-author">Jean-Philippe Bruneton</span>
            <a href="https://x.com/_quantumphy_" target="_blank" rel="noreferrer me">X: @_quantumphy_</a>
            <a href="https://quantumlectures.org/en">Quantum Lectures</a>
            <a href="https://learnthermo.org/">LearnThermo</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

function truncate(s, n) {
  if (s.length <= n) return s;
  // avoid cutting inside a $...$ span
  let cut = s.slice(0, n);
  const dollars = (cut.match(/\$/g) || []).length;
  if (dollars % 2 !== 0) {
    const next = s.indexOf("$", n);
    if (next !== -1) cut = s.slice(0, next + 1);
  }
  return cut + "…";
}

export { Home, CategoryView, SharpView, ImprovedView, ClaimedSolvedView, FilteredProblemsView, ProblemView, NewProblemsView, ProposalView, TrendsView, NotFound, SimilarProjectsView, NewResearchView, truncate, ALL_PROPOSALS };
