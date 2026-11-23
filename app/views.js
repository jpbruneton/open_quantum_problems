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
import { PROPOSALS, SECONDARY_PROPOSALS, PROPOSALS_META, PROPOSALS_META_NEW_AREAS, PROPOSALS_META_CARTE_V2, PROPOSALS_FORMULATION_REVIEW, PROPOSAL_COUNT, PRIORITY_RECORDS, WITHDRAWN_PROPOSALS, SELECTION_REPORT, proposalBatch } from "./data/proposals";

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
      items: evidence.filter((e) => e.kind !== "withdrawn" && e.kind !== "challenged" && e.role !== "claimed-solution" && e.role !== "claim-input" && (!cutoff || !e.date || e.date < cutoff)) },
    { key: "challenged", label: "Challenged claims", items: evidence.filter((e) => e.kind === "challenged") },
    { key: "withdrawn", label: "Withdrawn claims", items: evidence.filter((e) => e.kind === "withdrawn") },
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
              <p>Twelve research notes, several settling published conjectures, with downloadable manuscripts, exact certificates, reproducible checks and links to the relevant literature.</p>
              <span className="box-cta">Read the research notes <span aria-hidden="true">→</span></span>
            </a>
          </div>

          <div className="review-note">
            <b>Last update · {LITERATURE_UPDATE.label}.</b> Three entries become “Claimed solved”; the items below them date from the updates of 20 and 21 November (nine new questions and literature updates, including the gr-qc and hep-th catch-up since 1 August). The selected evidence papers were read in full, including appendices.
            <ul>
              <li><a href="/p/N20">Kirkwood–Dirac positivity for finite abelian Fourier pairs</a> is now “Claimed solved” by a <a href="/new-research">research note of this site</a>: mixtures of pure KD-positive states exhaust the KD-positive states only for cyclic groups of prime-power order. The claim is ours and awaits independent assessment.</li>
              <li><a href="/p/O12">The triplet conjecture for the Markovian Mpemba effect</a> and <a href="/p/F17">the extremality of Fock-bounded beam-splitter states</a> are now “Claimed solved” in the negative, by counterexamples published only as GitHub pull requests of the trureturing repository. Exact recomputations made for this catalogue reproduce both counterexamples.</li>
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
              <EvidenceList status={p.status} items={[...p.evidence].sort((a, b) => (a.kind === "withdrawn") - (b.kind === "withdrawn"))} />
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

          <p className="review-meta"><a href={SELECTION_REPORT + "#" + it.key.toLowerCase()}>Selection decision and sources · 19 November 2026</a></p>
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
          <p className="intro">Proposed 8–16 November 2026 · {PROPOSAL_COUNT} priority candidates and {SECONDARY_PROPOSALS.length} secondary leads</p>
          <p>These questions were selected or formulated with AI assistance. The <a href={SELECTION_REPORT}>19 November selection report</a> gives a decision, rationale and source for each of the 79 original listings. {WITHDRAWN_PROPOSALS.length} were withdrawn. Proposals are outside the catalogue and are not counted among its active entries.</p>
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
                <a href={SELECTION_REPORT + "#" + it.key.toLowerCase()}>Selection decision and sources</a>
              </li>
            ))}
          </ul>
          <details className="proposal-group">
            <summary>Withdrawn proposals ({WITHDRAWN_PROPOSALS.length})</summary>
            <ul className="archive-list">{WITHDRAWN_PROPOSALS.map(it => (
              <li key={it.key} id={it.key}>
                <b>{it.statement ? <a href={`/np/${it.key}`}>{it.key} · {it.title}</a> : it.key + " · " + it.title}</b>
                <div className="context"><Paras text={it.withdrawal} /></div>
                <a href={SELECTION_REPORT + "#" + it.key.toLowerCase()}>Selection decision and sources</a>
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
const NEW_RESEARCH_NOTES = [
  {
    title: "Kirkwood–Dirac positivity for finite abelian groups",
    meta: "Research note · classification, computer-assisted proof · 23 November 2026 (first version on Z₃ × Z₃: 17 November 2026)",
    pdf: "/research/kd-z3x3.pdf",
    dossier: "https://github.com/jpbruneton/open_quantum_problems/tree/main/research/entries/kd-z3x3",
    summary: "For the position and Fourier bases of a finite abelian group G, the pure states with a nonnegative Kirkwood–Dirac distribution are known. The note proves that every KD-positive state is a mixture of them if and only if G is cyclic of prime-power order. The “if” part is due to De Bièvre, Langrenez and Radchenko, who left the other groups open apart from Z₆ and Z₂ × Z₂. This settles catalogue entry N20, pending independent assessment.",
    result: "Subgroup and quotient embeddings preserve the trace-norm distance to the pure-state hull, which reduces the question to Z_p × Z_q with p, q prime. There the four product bases form a CHSH scenario: an explicit Bell-type witness is nonnegative on every pure KD-positive state and negative on an explicit KD-positive state for all pairs outside a list of eight. Z₂ × Z₂ is settled by hand, six pairs by states with exact rational KD tables whose positive definiteness is certified in ball arithmetic, and Z₃ × Z₃ by a state certified in rational arithmetic alone, at trace-norm distance at least 111/20000 from the hull. The result refutes the conjecture of Yang et al. for every dimension pq and proves that Spriet's ordering condition is necessary for finite groups.",
    refs: [
      { label: "De Bièvre, Langrenez & Radchenko, Fourier positivity for finite abelian groups (Ann. Henri Poincaré 2026)", doi: "https://doi.org/10.1007/s00023-025-01614-7", arxiv: "https://arxiv.org/abs/2501.12252v2", note: "Classifies the pure KD-positive states (Theorem 3.1), proves hull equality for cyclic prime-power groups (Theorem 6.1), gives numerical counterexamples for Z₆ and Z₂ × Z₂ (Section 7), and states the general abelian case as open (Section 8)." },
      { label: "Langrenez, Arvidsson-Shukur & De Bièvre, Geometry of the KD-positive states (J. Math. Phys. 2024)", doi: "https://doi.org/10.1063/5.0164672", arxiv: "https://arxiv.org/abs/2306.00086v1", note: "First study of mixed KD-positive states; hull equality for the discrete Fourier transform in prime dimension; a spin-one pair of bases with KD-positive states outside the pure-state hull." },
      { label: "Yang, Yao, Geng, Wang & Chen, Geometry of KD classical states for the discrete Fourier transform (J. Phys. A 2024)", doi: "https://doi.org/10.1088/1751-8121/ad819a", arxiv: "https://arxiv.org/abs/2404.09399v2", note: "Hull equality in dimension p²; conjectures it in every dimension and believes it for dimension pq, which the note refutes." },
      { label: "Cai, Yang & Zheng, KD classical states and directed graphs (2026 preprint)", arxiv: "https://arxiv.org/abs/2603.13863v1", note: "Second proof of the prime-power case; states the structure in general dimension as open." },
      { label: "Burkat & Strelchuk, KD positivity-preserving unitaries (Phys. Rev. A 2026)", doi: "https://doi.org/10.1103/rsy9-12fx", arxiv: "https://arxiv.org/abs/2502.11784v4", note: "Records in Appendix D that hull equality for d = pq ≠ 6 was an open question." },
      { label: "Thio et al., KD nonpositivity is a necessary resource for quantum computing (Phys. Rev. Lett. 2026)", doi: "https://doi.org/10.1103/x819-898d", arxiv: "https://arxiv.org/abs/2506.08092v2", note: "Exotic KD-positive states for multiqubit groups Z₂ⁿ, found by a facet search." },
      { label: "Spriet, KD positivity on second-countable LCA groups (J. Fourier Anal. Appl. 2026)", doi: "https://doi.org/10.1007/s00041-026-10309-4", arxiv: "https://arxiv.org/abs/2507.23628v3", note: "Extends the pure-state classification and conjectures that hull equality holds when the compact open subgroups are totally ordered, possibly only then." },
      { label: "Langrenez, De Bièvre & Arvidsson-Shukur, Convex roofs witnessing KD nonpositivity (J. Phys. A 2025)", doi: "https://doi.org/10.1088/1751-8121/add58f", arxiv: "https://arxiv.org/abs/2407.04558", note: "Faithful convex-roof witness of the pure-state hull and a spin-one KD-positive state outside it." },
      { label: "Langrenez et al., Almost sure minimality of experiments with classical KD representations (Phys. Rev. A 2026)", doi: "https://doi.org/10.1103/v7z4-qsz8", arxiv: "https://arxiv.org/abs/2405.17557v2", note: "For almost every pair of bases the KD-positive states are exactly the mixtures of basis states." },
    ],
  },
  {
    title: "Exact ensemble-steering defect under partial environmental access",
    meta: "Research note · exact value in a model · 17 November 2026, revised 19 November 2026",
    pdf: "/research/steering-localization.pdf",
    dossier: "https://github.com/jpbruneton/open_quantum_problems/tree/main/research/entries/steering-localization",
    summary: "How much steering power is lost when part of a purification escapes into a hidden environment? For a two-branch state with branch weights p, q and hidden-record overlap κ, the worst-case ensemble-preparation error is exactly (1 − κ)√(pq).",
    result: "The note proves this minimax value with an explicit binary target ensemble and a two-outcome measurement; for orthogonal hidden records it reduces to half the known ℓ₁ coherence of assistance of a qubit. It computes the matching conditional-expectation defect q√(1 − κ²), turns the formula into matching spatial bounds as Bob gains access to a growing segment of a controlled-rotation chain, and realizes the state as the unique ground state of a gapped quasi-local Hamiltonian. The proofs are short and use standard tools; no general theory of partial steering is claimed.",
    refs: [
      { label: "Kirkpatrick, The Schrödinger–HJW theorem (2006)", doi: "https://doi.org/10.1007/s10702-006-1852-1", arxiv: "https://arxiv.org/abs/quant-ph/0305068v3", note: "States and traces the history of the theorem that an observer holding the whole purifier can prepare every decomposition of a mixed state." },
      { label: "Wiseman, Jones & Doherty, Steering, entanglement, nonlocality, and the EPR paradox (2007)", doi: "https://doi.org/10.1103/PhysRevLett.98.140402", arxiv: "https://arxiv.org/abs/quant-ph/0612147v3", note: "Gives the operational definition of steering and its strict place between entanglement and Bell nonlocality." },
      { label: "Jevtic, Pusey, Jennings & Rudolph, Quantum steering ellipsoids (2014)", doi: "https://doi.org/10.1103/PhysRevLett.113.020402", arxiv: "https://arxiv.org/abs/1303.4724v2", note: "Shows that every entangled two-qubit state steers completely within its ellipsoid; the note's defect also counts targets outside it." },
      { label: "Zhao, Ma, Quan, Fan & Pereira, ℓ₁-norm coherence of assistance (2019)", doi: "https://doi.org/10.1103/PhysRevA.100.012315", arxiv: "https://arxiv.org/abs/2002.03823", note: "Proves the Cauchy–Schwarz bound and the optimal binary ensemble that the note's result reduces to when the hidden records are orthogonal." },
      { label: "Blume-Kohout & Zurek, Quantum Darwinism: entanglement, branches, and redundantly stored information (2006)", doi: "https://doi.org/10.1103/PhysRevA.73.062310", arxiv: "https://arxiv.org/abs/quant-ph/0505031", note: "Introduces the branch states and products of decoherence factors that the spatial model also uses." },
      { label: "Zurek, Quantum Darwinism (2009)", doi: "https://doi.org/10.1038/nphys1202", arxiv: "https://arxiv.org/abs/0903.5082", note: "Places environmental records and access to environment fragments in their broader measurement-theory context." },
    ],
  },
  {
    title: "Local discrimination of maximally entangled two-qubit states",
    meta: "Research note · exact optimum · 18 November 2026",
    pdf: "/research/local-discrimination-entangled-qubits.pdf",
    dossier: "https://github.com/jpbruneton/open_quantum_problems/tree/main/research/entries/local-discrimination-entangled-qubits",
    summary: "How well can two distant parties identify one of k maximally entangled two-qubit states? The optimum over separable measurements is (1 + sin 2Θ)/k, where Θ is the angular radius of the smallest cone containing the states, viewed as lines in R⁴; it saturates at the known trace bound 2/k for Θ ≥ π/4.",
    result: "The note proves this formula, which is also the optimum over positive-partial-transpose measurements, and gives a separate exact formula for protocols with a single classical message. One message is optimal for every family of at most three states, which fixes the LOCC optimum there, and is strictly weaker for four states on a tetrahedron. For the five equiangular states of Wei, Cobucci and Tavakoli, one bit reaches the known upper bound 2/5 exactly, above the value of about 0.395 that their numerical search had found without communication and had not improved with one-way protocols.",
    refs: [
      { label: "Wei, Cobucci & Tavakoli, Nonprojective Bell-state measurements (2024)", doi: "https://doi.org/10.1103/PhysRevA.110.042206", arxiv: "https://arxiv.org/abs/2405.03872v1", note: "Constructs the five equiangular maximally entangled states and reports the numerical local values (Section VIII of the preprint) that the note settles with one message." },
      { label: "Nathanson, Distinguishing bipartitite orthogonal states using LOCC: Best and worst cases (2005)", doi: "https://doi.org/10.1063/1.1914731", arxiv: "https://arxiv.org/abs/quant-ph/0411110", note: "Lemma 8 bounds the LOCC success for k maximally entangled states by D/k without assuming orthogonality, the trace bound reached by the note's formula." },
      { label: "Bandyopadhyay & Nathanson, Tight bounds on the distinguishability of quantum states under separable measurements (2013)", doi: "https://doi.org/10.1103/PhysRevA.88.052313", arxiv: "https://arxiv.org/abs/1306.2712", note: "Lemma 2 gives the overlap bound for PPT operators behind the trace bound 2/k." },
      { label: "Virmani et al., Optimal local discrimination of two multipartite pure states (2001)", doi: "https://doi.org/10.1016/S0375-9601(01)00484-4", arxiv: "https://arxiv.org/abs/quant-ph/0102073", note: "Covers the case of two states, which the formula recovers." },
      { label: "Bandyopadhyay et al., Limitations on separable measurements by convex optimization (2015)", doi: "https://doi.org/10.1109/TIT.2015.2417755", arxiv: "https://arxiv.org/abs/1408.6981", note: "Gives exact values for three or four orthogonal Bell states, the orthogonal cases of the formula." },
      { label: "Chitambar, Duan & Hsieh, When do LOCC suffice for two-qubit state discrimination? (2014)", doi: "https://doi.org/10.1109/TIT.2013.2295356", arxiv: "https://arxiv.org/abs/1308.1737", note: "Shows that almost all triples of pure two-qubit states cannot be discriminated optimally by LOCC." },
      { label: "Nathanson, Three maximally entangled states can require two-way LOCC (2013)", doi: "https://doi.org/10.1103/PhysRevA.88.062316", arxiv: "https://arxiv.org/abs/1310.4220", note: "Exhibits a gap between one-way and two-way LOCC for orthogonal states in higher dimensions." },
      { label: "Bandyopadhyay, Ghosh & Kar, LOCC distinguishability of unilaterally transformable quantum states (2011)", doi: "https://doi.org/10.1088/1367-2630/13/12/123013", arxiv: "https://arxiv.org/abs/1102.0841", note: "Relates perfect one-way local discrimination to the perfect discrimination of the generating unitaries." },
      { label: "Deconinck & Terhal, Qubit state discrimination (2010)", doi: "https://doi.org/10.1103/PhysRevA.81.062304", arxiv: "https://arxiv.org/abs/1002.4388", note: "States the discrimination duality and reduces equally likely pure qubit states to the smallest enclosing ball used for the receiver's measurement." },
      { label: "Bae & Hwang, Minimum-error discrimination of qubit states: Methods, solutions, and properties (2013)", doi: "https://doi.org/10.1103/PhysRevA.87.012334", arxiv: "https://arxiv.org/abs/1204.2313", note: "Gives the Bloch-sphere geometry of minimum-error qubit discrimination with equal priors." },
    ],
  },
  {
    title: "Real three-qubit states need at most three CZ gates",
    meta: "Research note · conjecture refuted · 19 November 2026",
    pdf: "/research/real-three-qubit-states-three-cz.pdf",
    dossier: "https://github.com/jpbruneton/open_quantum_problems/tree/main/research/entries/real-three-qubit-states-three-cz",
    summary: "Real three-qubit states can be prepared with a real circuit of single-qubit R_y rotations and controlled-Z gates. The note shows that three CZ gates always suffice, refuting a conjecture that four are sometimes necessary.",
    result: "Every real three-qubit state is prepared from |000⟩ with R_y rotations and the three gates CZ₀₁, CZ₁₂, CZ₀₁, so a line of three qubits suffices, and three is optimal. The states reachable with two CZ gates are exactly those for which one correlation ⟨Y_iY_k⟩ vanishes, that is, for which some pair of qubits has zero rebit concurrence; this gives the exact CZ count of every real state, and almost every state needs exactly three. This refutes the conjecture of Perdomo, Castaneda and Vogeler that four CZ gates are optimal. Through Wootters's rebit three-tangle, 4Δ = 4 det ρ₀ − E₀₁² − E₀₂², which explains why the sign of Cayley's hyperdeterminant Δ does not govern the count: Wootters's state ½(|000⟩ − |011⟩ − |101⟩ − |110⟩), with Δ = −1/4, needs exactly three.",
    refs: [
      { label: "Perdomo, Castaneda, Vogeler, Preparation of three-qubit states (arXiv 2022; Int. J. Quantum Inf. 2025)", doi: "https://doi.org/10.1142/S0219749924500461", arxiv: "https://arxiv.org/abs/2201.03724", note: "Proves that four CZ gates suffice for real three-qubit states, that three suffice when the hyperdeterminant is nonnegative, and conjectures that four is optimal; this note refutes the conjecture." },
      { label: "Žnidarič, Giraud, Georgeot, Optimal number of controlled-NOT gates to generate a three-qubit state (2008)", doi: "https://doi.org/10.1103/PhysRevA.77.032320", arxiv: "https://arxiv.org/abs/0711.4021", note: "Shows that three CNOT gates suffice with complex local gates, and describes the complex counterpart of the two-gate class; this note obtains three with real rotations, on a line of qubits." },
      { label: "Caves, Fuchs, Rungta, Entanglement of formation of an arbitrary state of two rebits (2001)", doi: "https://doi.org/10.1023/A:1012215309321", arxiv: "https://arxiv.org/abs/quant-ph/0009063", note: "Introduces the rebit concurrence |tr(ρ Y⊗Y)|; the note's correlations ⟨Y_iY_k⟩ are its signed pairwise versions." },
      { label: "Wootters, The rebit three-tangle and its relation to two-qubit entanglement (2014)", doi: "https://doi.org/10.1088/1751-8113/47/42/424037", arxiv: "https://arxiv.org/abs/1402.2219", note: "Shows that the rebit three-tangle equals four times Cayley's hyperdeterminant and can be negative; its monogamy relation links the criterion Δ ≥ 0 to the pairwise correlations." },
      { label: "Coffman, Kundu, Wootters, Distributed entanglement (2000)", doi: "https://doi.org/10.1103/PhysRevA.61.052306", arxiv: "https://arxiv.org/abs/quant-ph/9907047", note: "Defines the three-tangle, equal to 4|Δ| for a pure three-qubit state." },
      { label: "Wootters, Entanglement sharing in real-vector-space quantum theory (2012)", doi: "https://doi.org/10.1007/s10701-010-9488-1", arxiv: "https://arxiv.org/abs/1007.1479", note: "Exhibits the three-rebit state with every pair maximally entangled, which is the note's example with negative hyperdeterminant." },
      { label: "Wei, Di, Decomposition of orthogonal matrix and synthesis of two-qubit and three-qubit orthogonal gates (2012)", arxiv: "https://arxiv.org/abs/1203.0722", note: "Synthesizes real two-qubit gates with two CNOT gates and R_y rotations; real circuit synthesis had addressed gates rather than state preparation." },
      { label: "Perdomo, Canonical representation of three-qubit states with real amplitudes (2021)", doi: "https://doi.org/10.1088/1751-8121/ac2e27", arxiv: "https://arxiv.org/abs/2012.14031", note: "Reduces real three-qubit states by local rotations to a four-parameter canonical form, without addressing CZ counts." },
      { label: "Lee, Kim, Three-qubit-state preparation: Classification and explicit circuits (2026)", doi: "https://doi.org/10.1103/5bw6-339b", arxiv: "https://arxiv.org/abs/2603.00845", note: "Classifies three-qubit states and gives explicit circuits with general rotations; it does not treat CZ counts for real circuits." },
      { label: "Kristjuhan, Berry, Quantum phase estimation with optimal confidence interval using three control qubits (arXiv v1, 2026)", arxiv: "https://arxiv.org/abs/2601.16474v1", note: "Uses real three-qubit state preparation as a subroutine without a two-qubit gate count; the note bounds that cost by three CZ gates." },
    ],
  },
  {
    title: "Spectra of particle-reduced fermionic density operators",
    meta: "Research note · conjecture settled (true for p = 1, false for p ≥ 2, corrected by p!) · 19 November 2026",
    pdf: "/research/fermionic-particle-reductions.pdf",
    dossier: "https://github.com/jpbruneton/open_quantum_problems/tree/main/research/entries/fermionic-particle-reductions",
    summary: "Amosov and Filippov conjectured that removing p particles from a pure fermionic state with their map Φ gives an operator with the same spectrum as the p-particle reduced density operator. The note settles the conjecture for every pure state on the Fock space, with no assumption on particle number or parity. At fixed particle number the duality and the factorial normalization were already known; the new content is the variable-particle-number identity and the correction of the conjecture.",
    result: "For every pure state ρ on the Fock space of n fermionic modes and every p, Spec Φᵖ(ρ) = p! Spec ρₚ, zero eigenvalues included. The conjecture therefore holds for p = 1 and fails for every p ≥ 2 unless both operators vanish; the minimal counterexample is the two-mode state |11⟩, where ρ₂ has spectrum {1,0,0,0} and Φ²(ρ) has spectrum {2,0,0,0}. The two operators are complementary outputs of the completely positive map with Kraus operators a_{s_p}⋯a_{s_1}. At fixed particle number N, Proposition 4 of the source is corrected to Φ^{N−p}(ρ) = (N−p)! ρₚ, the normalization already used by Gigena, Di Tullio and Rossignoli.",
    refs: [
      { label: "Amosov & Filippov, Spectral properties of reduced fermionic density operators and parity superselection rule (2017)", doi: "https://doi.org/10.1007/s11128-016-1467-9", arxiv: "https://arxiv.org/abs/1512.01828", note: "Defines ρₚ and Φ on the Fock space and states the conjecture settled here; its fixed-N Proposition 4 needs the factor (N−p)!. It attributes the fixed-N spectral duality to Carlson and Keller." },
      { label: "Gigena, Di Tullio & Rossignoli, Many-body entanglement in fermion systems (2021)", doi: "https://doi.org/10.1103/PhysRevA.103.052424", arxiv: "https://arxiv.org/abs/2012.13785", note: "Shows that the M- and (N−M)-body density operators of a pure N-fermion state share their spectrum up to zero eigenvalues, and writes the M-body operator with the prefactor 1/(N−M)!, the fixed-N form of the factorial correction; does not treat variable particle number." },
    ],
  },
  {
    title: "Exact PPT distillation from the Zhu–Wang qutrit support",
    meta: "Research note · exact optimum · 19 November 2026",
    pdf: "/research/exact-ppt-distillation-qutrit.pdf",
    dossier: "https://github.com/jpbruneton/open_quantum_problems/tree/main/research/entries/exact-ppt-distillation-qutrit",
    summary: "Zhu and Wang used a rank-three two-qutrit support to show that the min-Rains relative entropy is not tight for exact entanglement distillation under PPT operations; they bounded the one-copy optimum only from below and gave no achievability bound. The note computes that optimum exactly and determines how much exact entanglement one to four copies can yield. Exact values were previously known only for antisymmetric supports, where the optimum equals the min-Rains quantity.",
    result: "The one-copy semidefinite program has value W₀(P) = √177/(7+√177) = (177 − 7√177)/128 ≈ 0.65524, attained by an explicit effect; a phase symmetry of the support reduces the problem to six parameters. With the Zhu–Wang witness, the largest exact maximally entangled output from n copies of any state on this support has dimension 1, 2, 3 and 5 for n = 1, 2, 3, 4, so four joint copies beat two separate two-copy runs. The asymptotic rate lies in [log₂(1 + 7/√177), log₂(391/250)) ≈ [0.6099, 0.6452).",
    refs: [
      { label: "Zhu and Wang, The min-Rains relative entropy is not tight for exact PPT entanglement distillation (2026)", arxiv: "https://arxiv.org/abs/2608.12135", note: "Defines the qutrit support and the witness upper bound used here; computes the one-copy optimum exactly only for antisymmetric supports (Appendix B), not for this support." },
      { label: "Wang and Duan, Improved semidefinite programming upper bound on distillable entanglement (2016)", doi: "https://doi.org/10.1103/PhysRevA.94.050301", arxiv: "https://arxiv.org/abs/1601.07940", note: "Semidefinite programs for exact PPT distillation underlying the one-copy quantity W₀." },
      { label: "Wang and Duan, Nonadditivity of Rains' bound for distillable entanglement (2017)", doi: "https://doi.org/10.1103/PhysRevA.95.062322", arxiv: "https://arxiv.org/abs/1605.00348", note: "Introduces the bound later called the min-Rains relative entropy and asks whether it equals the exact PPT distillable entanglement." },
      { label: "Matthews and Winter, Pure-state transformations and catalysis under operations that completely preserve positivity of partial transpose (2008)", doi: "https://doi.org/10.1103/PhysRevA.78.012317", arxiv: "https://arxiv.org/abs/0801.4322", note: "For pure states the exact PPT distillable entanglement is the min-entropy of the Schmidt coefficients." },
      { label: "Fang, Wang, Tomamichel and Duan, Non-asymptotic entanglement distillation (2019)", doi: "https://doi.org/10.1109/TIT.2019.2914688", arxiv: "https://arxiv.org/abs/1706.06221", note: "One-shot and second-order theory of PPT distillation at nonzero error; the zero-error case reduces to Wang–Duan." },
      { label: "Rains, Bound on distillable entanglement (1999)", doi: "https://doi.org/10.1103/PhysRevA.60.179", arxiv: "https://arxiv.org/abs/quant-ph/9809082", note: "Extends the relative-entropy bound on distillable entanglement to PPT operations." },
      { label: "Rains, A semidefinite program for distillable entanglement (2001)", doi: "https://doi.org/10.1109/18.959270", arxiv: "https://arxiv.org/abs/quant-ph/0008047", note: "Semidefinite program for PPT distillation fidelity and the Rains bound." },
      { label: "Horodecki, Horodecki and Horodecki, Mixed-state entanglement and distillation (1998)", doi: "https://doi.org/10.1103/PhysRevLett.80.5239", arxiv: "https://arxiv.org/abs/quant-ph/9801069", note: "PPT states are undistillable, the basis of partial-transpose bounds." },
    ],
  },
  {
    title: "The variance of a sum of independent quantum errors",
    meta: "Research note · conjecture settled under centring, refuted without · 19 November 2026",
    pdf: "/research/variance-sum-quantum-errors.pdf",
    dossier: "https://github.com/jpbruneton/open_quantum_problems/tree/main/research/entries/variance-sum-quantum-errors",
    summary: "Lacalle and Pozo Coronado conjectured that the variances of two independent quantum errors combine as V₁₂ = V₁ + V₂ − V₁V₂/2. The note shows that the answer depends on whether the errors are centred on the error-free state. The underlying multiplicativity of mean operators is elementary and classical; the note's contribution is the role of centring, an exact correction term and explicit counterexamples.",
    result: "The rule is equivalent to multiplicativity of the mean overlap m = 1 − V/2, and it holds for any number of independent centred errors, isotropic or not, in both the gate and the transport definitions of the sum; an exact identity gives the correction −2⟨w₂, u₁⟩ in general. Without centring it fails: two independent errors on the circle with density (1 + sin θ)/(2π) give V₁₂ = 5/2 instead of 2, contradicting the source's Theorem 3, and two over-rotations R_x(2π/3) of one qubit give 3 instead of 3/2. The companion fidelity formula follows in the transport model when the second error has an isotropic second moment; the gate model remains open here.",
    refs: [
      { label: "Lacalle, Pozo Coronado, Variance of the sum of independent quantum computing errors (2019)", doi: "https://doi.org/10.26421/QIC19.15-16-3", arxiv: "https://arxiv.org/abs/2412.15800", note: "Source of the conjecture; proves the isotropic case, a special case of the centred one, and states the circle theorem refuted here." },
      { label: "Lacalle, Pozo Coronado, Martín-Cuevas, Fidelity of the sum of independent quantum computing errors (2026)", doi: "https://doi.org/10.1007/s11128-025-05037-5", note: "Restates the variance conjecture as open and poses the twin fidelity conjecture, proved here in the transport model under an isotropic second moment." },
      { label: "Kueng, Long, Doherty, Flammia, Comparing experiments to the fault-tolerance threshold (2016)", doi: "https://doi.org/10.1103/PhysRevLett.117.170502", arxiv: "https://arxiv.org/abs/1510.05653", note: "Shows that errors of equal average size can differ greatly in worst-case effect, coherent errors appearing to produce the largest gap." },
      { label: "Carignan-Dugas, Wallman, Emerson, Bounding the average gate fidelity of composite channels using the unitarity (2019)", doi: "https://doi.org/10.1088/1367-2630/ab1800", arxiv: "https://arxiv.org/abs/1610.05296", note: "Infidelity accumulates linearly for stochastic errors and up to quadratically for coherent ones; the biased over-rotation counterexample is an instance of this coherent accumulation." },
    ],
  },
  {
    title: "Momentum Rényi and Tsallis entropies behind hard walls: the threshold 1/(2(m+1))",
    meta: "Research note · conjecture proved; particular thresholds due to Olendski · 19 November 2026",
    pdf: "/research/momentum-renyi-threshold.pdf",
    dossier: "https://github.com/jpbruneton/open_quantum_problems/tree/main/research/entries/momentum-renyi-threshold",
    summary: "Olendski found the momentum-entropy thresholds 1/4 (Dirichlet) and 1/2 (Neumann, Robin, mixed) for the one-dimensional well from explicit formulas, and conjectured that 1/2 is the threshold of every one-dimensional non-Dirichlet system. The note turns the classical mechanism behind these values, endpoint jumps governing Fourier decay, into a two-sided existence criterion with a divergence rate, and deduces the conjecture for hard-wall Schrödinger eigenfunctions.",
    result: "If the zero-extended wave function first jumps in its derivative of order m, then ∫γ(p)^α dp is finite exactly for α > α_TH = 1/(2(m+1)); the divergence at and below the threshold with two walls rests on a positive-density bound for the interfering leading coefficient. The Rényi entropy diverges like ln(1/(α − α_TH))/(1 − α_TH) at the threshold, with an explicit rate. For eigenfunctions of a Schrödinger operator with integrable potential between hard walls only m = 0 or 1 can occur, so α_TH = 1/4 when both walls are Dirichlet and α_TH = 1/2 otherwise, for every level and for real or complex Robin lengths; the threshold value itself is excluded. The same dichotomy holds on a half-line.",
    refs: [
      { label: "Olendski, Rényi and Tsallis entropies of the Dirichlet and Neumann one-dimensional quantum wells (2020)", doi: "https://doi.org/10.1002/qua.26220", arxiv: "https://arxiv.org/abs/2003.04351", note: "Finds the thresholds 1/4 and 1/2 by a comparison test on explicit formulas and states the conjecture proved here." },
      { label: "Olendski, Rényi and Tsallis entropies: three analytic examples (2019)", doi: "https://doi.org/10.1088/1361-6404/aaf45c", arxiv: "https://arxiv.org/abs/1811.09089", note: "Treats the attractive Robin wall on the half-line in closed form; the note recovers it as a half-line case." },
      { label: "Aptekarev, Dehesa, Sánchez-Moreno & Tulyakov, Rényi entropy of the infinite well potential in momentum space and Dirichlet-like trigonometric functionals (2012)", doi: "https://doi.org/10.1007/s10910-011-9950-0", arxiv: "https://arxiv.org/abs/1305.4743", note: "Closed-form momentum entropic moments of the Dirichlet well for integer orders, leaving non-integer orders open." },
      { label: "Olendski, Quantum-information theory of a Dirichlet ring with Aharonov–Bohm field (2022)", doi: "https://doi.org/10.1140/epjp/s13360-022-02627-5", arxiv: "https://arxiv.org/abs/2202.04692", note: "Finds the disk threshold 2/5 for a Dirichlet annulus, independent of the inner radius, consistent with a threshold fixed at the boundary." },
      { label: "Bialynicki-Birula, Formulation of the uncertainty relations in terms of the Rényi entropies (2006)", doi: "https://doi.org/10.1103/PhysRevA.74.052101", arxiv: "https://arxiv.org/abs/quant-ph/0608116", note: "Rényi uncertainty relation with conjugate orders 1/α + 1/β = 2, in which the momentum order ranges over (1/2, ∞)." },
    ],
  },
  {
    title: "A Mpemba mode invisible to every strict reduction",
    meta: "Research note · explicit construction · 19 November 2026",
    pdf: "/research/locally-invisible-mpemba-mode.pdf",
    dossier: "https://github.com/jpbruneton/open_quantum_problems/tree/main/research/entries/locally-invisible-mpemba-mode",
    summary: "In the Mpemba effect a state farther from equilibrium relaxes sooner, because late-time relaxation is set by the slowest mode of the dynamics. The note gives a local, primitive qubit-chain dynamics whose slowest mode cannot be seen in the reduced state of any strict subset of sites.",
    result: "For n ≥ 2 qubits and 0 < ε < 1, the Lindbladian Σⱼ D[XⱼXⱼ₊₁] + ε D[X₁] + Σⱼ D[Zⱼ] has spectrum {−2(m + εb)} with multiplicity C(2n−1, m), a unique stationary state, and the global parity Z₁⋯Zₙ as its unique slowest mode at rate 2ε. The state (𝟙 + αZ₁⋯Zₙ)/2ⁿ looks maximally mixed on every strict subsystem at all times, yet it is overtaken by (𝟙 + βXₙ)/2ⁿ, β > α, at time log(β/α)/(2 − 2ε). Any observable sensitive to the slow amplitude, including a single-observable Mpemba witness, must act on all n sites.",
    refs: [
      { label: "Lu & Raz, Nonequilibrium thermodynamics of the Markovian Mpemba effect and its inverse (2017)", doi: "https://doi.org/10.1073/pnas.1701264114", arxiv: "https://arxiv.org/abs/1609.05271", note: "Formulates the Mpemba effect for Markovian dynamics, the setting used here." },
      { label: "Carollo, Lasanta & Lesanovsky, Exponentially accelerated approach to stationarity in Markovian open quantum systems through the Mpemba effect (2021)", doi: "https://doi.org/10.1103/PhysRevLett.127.060401", arxiv: "https://arxiv.org/abs/2103.05020", note: "Removes the slowest-mode component by a unitary rotation; in this example removal is local while detection is global." },
      { label: "Choquehuanca, Obando, Sarandy & de Paula, Witnessing the quantum Mpemba effect with a single observable (2026)", arxiv: "https://arxiv.org/abs/2607.12163", note: "Single-observable Mpemba witness illustrated on one qubit; the note shows such a witness can be forced to have full support in a local many-body chain." },
    ],
  },
  {
    title: "Covariance data cannot bound the Schmidt number, even at fixed energy",
    meta: "Research note · no-go example · 19 November 2026",
    pdf: "/research/schmidt-number-separable-covariance.pdf",
    dossier: "https://github.com/jpbruneton/open_quantum_problems/tree/main/research/entries/schmidt-number-separable-covariance",
    summary: "A pure state of arbitrarily large Schmidt rank can have exactly the same quadrature means, covariance matrix and mean photon number as a separable state, with an energy bound independent of the rank. Low-order moment criteria therefore cannot certify Schmidt numbers uniformly over all states.",
    result: "For r ≥ 2 and spacing m, the pure state Σ_{j<r} √p_j |mj, mj⟩ (Schmidt rank r) and the separable mixture Σ_{j<r} p_j |mj, mj⟩⟨mj, mj| share every quadrature moment of degree below 2m and their mean photon number 2m Σ_j j p_j; with m = 2 this covers means, covariance matrices and third moments. With weights p_j ∝ z^j the mean photon number stays below 2m z/(1−z) for every r, and the moment ⟨a^m b^m⟩ of degree 2m tells the states apart. At mean photon number E the r-th reduced eigenvalue of any pure state is at most E/(r(r−1)), so the obstruction relies on small Schmidt coefficients.",
    refs: [
      { label: "Terhal, Horodecki, Schmidt number for density matrices (2000)", doi: "https://doi.org/10.1103/PhysRevA.61.040301", arxiv: "https://arxiv.org/abs/quant-ph/9911117", note: "Defines the Schmidt number of mixed states." },
      { label: "Duan, Giedke, Cirac, Zoller, Inseparability criterion for continuous variable systems (2000)", doi: "https://doi.org/10.1103/PhysRevLett.84.2722", arxiv: "https://arxiv.org/abs/quant-ph/9908056", note: "Second-moment entanglement criterion for two modes." },
      { label: "Simon, Peres-Horodecki separability criterion for continuous variable systems (2000)", doi: "https://doi.org/10.1103/PhysRevLett.84.2726", arxiv: "https://arxiv.org/abs/quant-ph/9909044", note: "Covariance-matrix form of the partial-transpose criterion, necessary and sufficient for two-mode Gaussian states." },
      { label: "Shchukin, Vogel, Inseparability criteria for continuous bipartite quantum states (2005)", doi: "https://doi.org/10.1103/PhysRevLett.95.230502", arxiv: "https://arxiv.org/abs/quant-ph/0508132", note: "Hierarchy of moment conditions of all orders; the example is detected only by moments of degree at least 2m." },
    ],
  },
  {
    title: "How many incoherent Kraus operators?",
    meta: "Research note · new lower bound and qutrit construction · 19 November 2026",
    pdf: "/research/incoherent-kraus-operators.pdf",
    dossier: "https://github.com/jpbruneton/open_quantum_problems/tree/main/research/entries/incoherent-kraus-operators",
    summary: "Incoherent operations in the resource theory of coherence must be written with Kraus operators that each keep diagonal states diagonal. The note asks how many such operators are needed beyond the qubit, where Rana and Lewenstein showed in 2018 that the answer is four.",
    result: "A generic incoherent completely positive map on a d-dimensional system needs at least ⌈d²(d²−d+1)/(2d−1)⌉ incoherent Kraus operators: 4, 13 and 30 for d = 2, 3, 4, growing like d³/2 against the Choi rank d². Individual operations with such a gap were known; the bound shows that from d = 3 on it holds on an open set. For the qutrit, an exact integer rank certificate shows that thirteen operators cover an open set of incoherent maps, so 13 is attained, and also an open set of incoherent channels. The qubit value four, due to Rana and Lewenstein (2018), is re-derived with a short fixed-point argument on the Choi matrix; the generic lower bound for trace-preserving operations remains a conjecture.",
    refs: [
      { label: "Rana and Lewenstein, Optimal decomposition of incoherent qubit channel (2018)", doi: "https://doi.org/10.1088/1751-8121/aad8c8", arxiv: "https://arxiv.org/abs/1807.01676", note: "First proves that four incoherent Kraus operators suffice and are optimal for every incoherent qubit channel, by decomposing the Choi matrix into rank-one blocks, and gives individual operations whose incoherent length exceeds the Choi rank; the note re-derives the qubit case by a fixed-point argument." },
      { label: "Streltsov, Rana, Boes and Eisert, Structure of the resource theory of quantum coherence (2017)", doi: "https://doi.org/10.1103/PhysRevLett.119.140402", arxiv: "https://arxiv.org/abs/1705.04189", note: "Proves the first upper bounds (five for a qubit, 39 for a qutrit) by classifying incoherent operators by type, and asks whether four suffice for a qubit; the types are the maximal cliques of the note's graph." },
      { label: "Qiao et al., The reduction of the number of incoherent Kraus operations for qutrit systems (2020)", doi: "https://doi.org/10.1209/0295-5075/129/60006", arxiv: "https://arxiv.org/abs/2005.01083", note: "Gives a second proof of the qubit value four and the qutrit upper bound 32, the best known." },
      { label: "Winter and Yang, Operational resource theory of coherence (2016)", doi: "https://doi.org/10.1103/PhysRevLett.116.120404", arxiv: "https://arxiv.org/abs/1506.07975", note: "Defines strictly incoherent operations and characterizes incoherent Kraus operators by an index function." },
      { label: "Baumgratz, Cramer and Plenio, Quantifying coherence (2014)", doi: "https://doi.org/10.1103/PhysRevLett.113.140401", arxiv: "https://arxiv.org/abs/1311.0275", note: "Defines incoherent operations through incoherent Kraus decompositions." },
      { label: "Choi, Completely positive linear maps on complex matrices (1975)", doi: "https://doi.org/10.1016/0024-3795(75)90075-0", note: "The Choi matrix on which the clique formulation is built." },
    ],
  },
  {
    title: "Leakage threshold for the Margenau–Hill state of a post-selected system",
    meta: "Research note · exact threshold · 19 November 2026",
    pdf: "/research/postselection-leakage-threshold.pdf",
    dossier: "https://github.com/jpbruneton/open_quantum_problems/tree/main/research/entries/postselection-leakage-threshold",
    summary: "Between a preparation and a post-selection, the Margenau–Hill combination of the past state and the future effect can fail to be positive. The note computes exactly how much leakage through an imperfect post-selection restores positivity.",
    result: "For a density matrix ρ and the leaky effect E = P + η(1 − P), write ρ in blocks A, C, D relative to the projector P and let κ = ‖A^{+1/2} C D^{+1/2}‖. Then κ ≤ 1 and (Eρ + ρE)/2 is positive semidefinite if and only if η ≥ η_crit = (1 − √(1 − κ²))/(1 + √(1 − κ²)) ≈ κ²/4, in any finite dimension, with an explicit negative vector below the threshold. The threshold is below one exactly when rank ρ = rank A + rank D, so pure states with weight in both subspaces need η = 1; for a qubit with Bloch vector (4/5, 0, 0), η_crit = 1/4.",
    refs: [
      { label: "Kam, Wong, Forbidden subspaces in quantum state smoothing (2026)", arxiv: "https://arxiv.org/abs/2609.17307", note: "Shows that the Margenau–Hill operator is not positive when the subspace forbidden by the effect is not invariant under the state; this note quantifies how much leakage removes the obstruction and recovers the converse at zero leakage." },
      { label: "Guevara, Wiseman, Quantum state smoothing (2015)", doi: "https://doi.org/10.1103/PhysRevLett.115.180407", arxiv: "https://arxiv.org/abs/1503.02799", note: "Introduces quantum state smoothing, the setting in which a filtered state and a retrofiltered effect are combined." },
    ],
  },
];

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
