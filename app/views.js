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
          Each entry records a question, its status, evidence and references.
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
              <p>Sixteen research notes, several settling published conjectures, with downloadable manuscripts, exact certificates, reproducible checks and links to the relevant literature.</p>
              <span className="box-cta">Read the research notes <span aria-hidden="true">→</span></span>
            </a>
          </div>

          <div className="review-note">
            <b>Last update · {LITERATURE_UPDATE.label}.</b> A map of the 2024–2026 quant-ph literature found nine active theoretical themes with no entry, and papers the catalogue did not yet cite.
            <ul>
              <li>36 new entries on graph states and quantum walks, magic and stabilizer entropies, quasiprobabilities, non-Hermitian spectra, monitored circuits and designs, steering and measurements, Hamiltonian simulation and QSP, QAOA and DQI, and time crystals and quantum thermodynamics. Three are “Claimed solved”: <a href="/p/E23">LU equivalence of graph states</a>, <a href="/p/A46">spatial search on the 2D grid</a> and <a href="/p/A47">lattice Lindbladian simulation</a>. Eleven partly inferred questions were added to the <a href="/new-problems">AI-suggested problems</a>.</li>
              <li>Two existing entries are now “Claimed solved”: a first superlinear lower bound, Ω(n<sup>13/12</sup>), for <a href="/p/A23">quantum triangle finding</a>, and a negative answer to Tsirelson’s question on the <a href="/p/N13">semialgebraicity of quantum correlations</a>.</li>
              <li>Seven existing entries are now “Improved”: <a href="/p/A26">Quantum Max-Cut</a>, <a href="/p/A28">structure learning from Gibbs states</a>, <a href="/p/B3">PEPS contraction</a>, <a href="/p/M6">gap stability</a>, <a href="/p/M7">PEPS parent gaps</a>, <a href="/p/N5">dimension of nonlocal correlations</a> and <a href="/p/O2">master-equation error bounds</a>. Partial progress was also added to <a href="/p/O3">certified strong-coupling dynamics</a>.</li>
            </ul>
          </div>

          <div className="legend-block">
            <p><b>Four different horizons:</b></p>
            <ul className="horizon-list">
              {Object.entries(HORIZONS).map(([k, v]) => (
                <li key={k}><span className="dot" style={{ background: `var(--${k})` }} /> <b>{v.label}</b>: {v.desc}</li>
              ))}
            </ul>
            <p><b>Status</b> says how far it has gone:</p>
            <ul className="horizon-list">
              <li><span className="dot" style={{ background: "var(--improved)" }} /> <b>Improved</b>: partial progress.</li>
              <li><span className="dot" style={{ background: "var(--claimed-solved)" }} /> <a href="/claimed-solved"><b>Claimed solved</b></a>: full resolution awaiting independent assessment.</li>
              <li><span className="dot" style={{ background: "var(--solved)" }} /> <b>Solved</b>: established. Zero entries are Solved: the catalogue records these resolutions as claims pending independent assessment.</li>
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
              : "Open sharp problems: a single proof or counterexample closes them. Excludes claimed solved and Lean verified entries."}
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
    title: "Kirkwood–Dirac positivity on Z₃ × Z₃",
    meta: "Research note · exact certificate · 17 November 2026",
    pdf: "/research/kd-z3x3.pdf",
    dossier: "https://github.com/jpbruneton/open_quantum_problems/tree/main/research/entries/kd-z3x3",
    summary: "Kirkwood–Dirac positivity on Z₃ × Z₃ has genuinely mixed structure: an explicit positive state exists beyond the convex hull generated by every pure KD-positive state.",
    result: "The separation is proved by constructing the state explicitly, establishing strict KD positivity and positive definiteness, and giving an exact rational witness against all 54 pure KD-positive states. Reproducible exact-arithmetic checkers verify the certificate.",
    refs: [
      { label: "Arvidsson-Shukur et al., Properties and applications of the KD distribution (2024)", doi: "https://doi.org/10.1088/1367-2630/ada05d", arxiv: "https://arxiv.org/abs/2403.18899v2", note: "Provides the broader physical and mathematical context for KD quasiprobabilities." },
      { label: "De Bièvre, Langrenez & Radchenko, Fourier positivity for finite abelian groups (2025)", doi: "https://doi.org/10.1007/s00023-025-01614-7", arxiv: "https://arxiv.org/abs/2501.12252v2", note: "Classifies the pure KD-positive states used by the certificate and settles the cyclic prime-power cases." },
      { label: "Langrenez, Arvidsson-Shukur & De Bièvre, Geometry of KD-positive states (2024)", doi: "https://doi.org/10.1063/5.0164672", arxiv: "https://arxiv.org/abs/2306.00086", note: "Introduces the convex-geometric setting and earlier exotic mixed states." },
      { label: "Langrenez, De Bièvre & Arvidsson-Shukur, Convex-roof witnesses (2025)", doi: "https://doi.org/10.1088/1751-8121/add58f", arxiv: "https://arxiv.org/abs/2407.04558", note: "Develops general witnesses for separation from the pure KD-positive hull." },
      { label: "Thio et al., KD nonpositivity as a quantum-computing resource (2026)", doi: "https://doi.org/10.1103/x819-898d", arxiv: "https://arxiv.org/abs/2506.08092v2", note: "Provides known qubit families of exotic states and related facet searches." },
      { label: "Spriet, KD positivity on second-countable LCA groups (2026)", arxiv: "https://arxiv.org/abs/2507.23628v3", note: "Places the finite-group classification question in its broader ordered-subgroup context." },
    ],
    citation: {
      bibtex: `@misc{bruneton2026kdz3x3,
  author = {Jean-Philippe Bruneton},
  title = {An exact KD-positive state outside the pure-state hull for the Fourier pair on Z3 x Z3},
  year = {2026},
  url = {https://openquantumproblems.com/research/kd-z3x3.pdf}
}`,
    },
  },
  {
    title: "Exact ensemble-steering defect under partial environmental access",
    meta: "Research note · exact minimax model · 17 November 2026",
    pdf: "/research/steering-localization.pdf",
    dossier: "https://github.com/jpbruneton/open_quantum_problems/tree/main/research/entries/steering-localization",
    summary: "A two-branch model gives an exact steering defect and a computable spatial decay as an observer gains access to a growing part of the environment.",
    result: "The note evaluates the worst-case loss of steering exactly by identifying an optimal target ensemble and measurement. It then turns this formula into sharp spatial decay bounds as more of the environment becomes accessible, and realizes the model as the unique ground state of a gapped quasi-local Hamiltonian.",
    refs: [
      { label: "Hughston, Jozsa & Wootters, Classification of quantum ensembles (1993)", doi: "https://doi.org/10.1016/0375-9601(93)90880-9", note: "Supplies the measurement construction for every decomposition of a density matrix." },
      { label: "Wiseman, Jones & Doherty, Steering, entanglement and nonlocality (2007)", doi: "https://doi.org/10.1103/PhysRevLett.98.140402", arxiv: "https://arxiv.org/abs/quant-ph/0612147v3", note: "Gives the operational definition and hierarchy of quantum steering." },
      { label: "Uola et al., Quantum steering (2020)", doi: "https://doi.org/10.1103/RevModPhys.92.015001", arxiv: "https://arxiv.org/abs/1903.06663v3", note: "Reviews steering definitions, structural results, witnesses and applications." },
      { label: "Jevtic et al., Quantum steering ellipsoids (2014)", doi: "https://doi.org/10.1103/PhysRevLett.113.020402", arxiv: "https://arxiv.org/abs/1303.4724", note: "Develops the geometry of qubit states accessible through steering." },
      { label: "Blume-Kohout & Zurek, Quantum Darwinism (2006)", doi: "https://doi.org/10.1103/PhysRevA.73.062310", arxiv: "https://arxiv.org/abs/quant-ph/0505031", note: "Provides the branch-state and decoherence-factor framework used by the spatial model." },
      { label: "Zurek, Quantum Darwinism (2009)", doi: "https://doi.org/10.1038/nphys1202", arxiv: "https://arxiv.org/abs/0903.5082", note: "Places environmental records and partial access in their broader measurement-theory context." },
      { label: "van Luijk et al., Steering and state-preserving conditional expectations (2026)", arxiv: "https://arxiv.org/abs/2608.10783", note: "Establishes the structural equivalence that motivates the conditional-expectation comparison." },
      { label: "Wallick & Wilming, A nonabelian anyon violates Haag duality (2026)", arxiv: "https://arxiv.org/abs/2609.01267", note: "Shows that a gapped anyonic sector can violate Haag duality and steering." },
    ],
    citation: {
      bibtex: `@misc{bruneton2026steering,
  author = {Jean-Philippe Bruneton},
  title = {Exact ensemble-steering defect under partial environmental access},
  year = {2026},
  url = {https://openquantumproblems.com/research/steering-localization.pdf}
}`,
    },
  },
  {
    title: "Local discrimination of maximally entangled two-qubit states",
    meta: "Research note · exact optimum · 18 November 2026",
    pdf: "/research/local-discrimination-entangled-qubits.pdf",
    dossier: "https://github.com/jpbruneton/open_quantum_problems/tree/main/research/entries/local-discrimination-entangled-qubits",
    summary: "How well can two distant parties identify one of k maximally entangled two-qubit states? The optimum over separable measurements is (1 + sin 2Θ)/k, where Θ is the angular radius of the smallest cone containing the states, viewed as lines in R⁴; it saturates at 2/k for Θ ≥ π/4.",
    result: "The note proves this formula, which is also the optimum over positive-partial-transpose measurements, and gives a separate exact formula for protocols with a single classical message. One message is optimal for every family of at most three states, which fixes the LOCC optimum there, and is strictly weaker for four states on a tetrahedron. For the five equiangular states of Wei, Cobucci and Tavakoli, one bit reaches exactly 2/5, above the 0.3936 at which their numerical one-way search had stopped.",
    refs: [
      { label: "Wei, Cobucci & Tavakoli, Nonprojective Bell-state measurements (2024)", doi: "https://doi.org/10.1103/PhysRevA.110.042206", arxiv: "https://arxiv.org/abs/2405.03872", note: "Constructs the five equiangular maximally entangled states and reports the numerical local values that the note settles." },
      { label: "Virmani et al., Optimal local discrimination of two multipartite pure states (2001)", doi: "https://doi.org/10.1016/S0375-9601(01)00484-4", arxiv: "https://arxiv.org/abs/quant-ph/0102073", note: "Covers the case of two states, which the formula recovers." },
      { label: "Bandyopadhyay et al., Limitations on separable measurements by convex optimization (2015)", doi: "https://doi.org/10.1109/TIT.2015.2417755", arxiv: "https://arxiv.org/abs/1408.6981", note: "Gives the separable optimum for three or four orthogonal Bell states, the orthogonal cases of the formula." },
      { label: "Chitambar, Duan & Hsieh, When do LOCC suffice for two-qubit state discrimination? (2014)", doi: "https://doi.org/10.1109/TIT.2013.2295356", arxiv: "https://arxiv.org/abs/1308.1737", note: "Shows that almost all triples of pure two-qubit states cannot be discriminated optimally by LOCC." },
      { label: "Nathanson, Three maximally entangled states can require two-way LOCC (2013)", doi: "https://doi.org/10.1103/PhysRevA.88.062316", arxiv: "https://arxiv.org/abs/1310.4220", note: "Exhibits a gap between one-way and two-way LOCC for orthogonal states in higher dimensions." },
      { label: "Bandyopadhyay, Ghosh & Kar, LOCC distinguishability of unilaterally transformable quantum states (2011)", doi: "https://doi.org/10.1088/1367-2630/13/12/123013", arxiv: "https://arxiv.org/abs/1102.0841", note: "Relates one-way local discrimination to the discrimination of the generating unitaries." },
      { label: "Bae & Hwang, Minimum-error discrimination of qubit states (2013)", doi: "https://doi.org/10.1103/PhysRevA.87.012334", arxiv: "https://arxiv.org/abs/1204.2313", note: "Supplies the Bloch-sphere geometry used for the receiver's measurement." },
    ],
    citation: {
      bibtex: `@misc{bruneton2026localdiscrimination,
  author = {Jean-Philippe Bruneton},
  title = {Local discrimination of maximally entangled two-qubit states: the separable optimum and when one message attains it},
  year = {2026},
  url = {https://openquantumproblems.com/research/local-discrimination-entangled-qubits.pdf}
}`,
    },
  },
  {
    title: "Real three-qubit states need at most three CZ gates",
    meta: "Research note · conjecture refuted · 19 November 2026",
    pdf: "/research/real-three-qubit-states-three-cz.pdf",
    dossier: "https://github.com/jpbruneton/open_quantum_problems/tree/main/research/entries/real-three-qubit-states-three-cz",
    summary: "Real three-qubit states can be prepared with a real circuit of single-qubit R_y rotations and controlled-Z gates. The note shows that three CZ gates always suffice, refuting a conjecture that four are sometimes necessary.",
    result: "Every real three-qubit state is prepared from |000⟩ with R_y rotations and the three gates CZ₀₁, CZ₁₂, CZ₀₁, so a line of three qubits suffices, and three is optimal. The states reachable with two CZ gates are exactly those for which one correlation ⟨Y_iY_k⟩ vanishes, which gives the exact CZ count of every real state; almost every state needs exactly three. This refutes the conjecture of Perdomo, Castaneda and Vogeler that four CZ gates are optimal, and shows that the sign of Cayley's hyperdeterminant does not govern the count: the state ½(|000⟩ − |011⟩ − |101⟩ − |110⟩), with hyperdeterminant −1/4, needs exactly three.",
    refs: [
      { label: "Perdomo, Castaneda, Vogeler, Preparation of 3-qubit states (2022)", arxiv: "https://arxiv.org/abs/2201.03724", note: "Proves that four CZ gates suffice for real three-qubit states, that three suffice when the hyperdeterminant is nonnegative, and conjectures that four is optimal; this note refutes the conjecture." },
      { label: "Žnidarič, Giraud, Georgeot, How many CNOT gates does it take to generate a three-qubit state? (2008)", doi: "https://doi.org/10.1103/PhysRevA.77.032320", arxiv: "https://arxiv.org/abs/0711.4021", note: "Shows that three CNOT gates suffice with complex local gates; this note obtains the same count with real rotations only." },
      { label: "Perdomo, Schmidt representation of 3-qubits with real amplitudes (2020)", doi: "https://doi.org/10.1088/1751-8121/ac2e27", arxiv: "https://arxiv.org/abs/2012.14031", note: "Gives a canonical form of real three-qubit states under local orthogonal gates, without addressing CZ counts." },
      { label: "Lee, Kim, Three-Qubit State Preparation: Classification and Explicit Circuits (2026)", doi: "https://doi.org/10.1103/5bw6-339b", arxiv: "https://arxiv.org/abs/2603.00845", note: "Classifies three-qubit states and gives explicit circuits with general rotations; it does not treat CZ counts for real circuits." },
      { label: "Gomez, New Methods and Frameworks for Quantum State Preparation in Modern Quantum Systems (2026)", arxiv: "https://arxiv.org/abs/2608.16937", note: "Records the parameter-counting lower bound of two for real three-qubit circuits and notes that no tight bound is known; this note shows the worst case is three." },
    ],
    citation: {
      bibtex: `@misc{bruneton2026realthreecz,
  author = {Jean-Philippe Bruneton},
  title = {Every real three-qubit state can be prepared with rotations and three {CZ} gates},
  year = {2026},
  url = {https://openquantumproblems.com/research/real-three-qubit-states-three-cz.pdf}
}`,
    },
  },
  {
    title: "Photon-added squeezed vacua: one photon per mode is majorized by k photons per mode",
    meta: "Research note · independent proof and extensions · 19 November 2026",
    pdf: "/research/photon-added-squeezed-majorization.pdf",
    dossier: "https://github.com/jpbruneton/open_quantum_problems/tree/main/research/entries/photon-added-squeezed-majorization",
    summary: "Adding k photons to each mode of a two-mode squeezed vacuum gives a state more entangled, in the strong sense of majorization, than adding a single photon to each mode, for every k ≥ 2. Van Herstraeten, Cerf, Guha and Gagatsos had conjectured this after checking k ≤ 8. A proof of the strong form for all k, formalized in Lean, was posted on 1 October 2026 in the public repository the-omega-institute/trureturing (pull request #11708). This note gives an independent closed-form proof and extends it to unequal photon additions.",
    result: "For every k ≥ 2 and every squeezing parameter λ ∈ (0,1), σ^{1,1} ≻ σ^{k,k}, in the strong form conjectured by the authors: all coefficients of their Toeplitz matrix are nonnegative (in fact at least 1). The proof is the closed form N_kk(x)/N_11(x) = A_k(x)/((1−x²)(1−x)^{2k−3}) with A_k(x) = Σ_j C(k,j)² x^j. The same criterion proves σ^{0,m} ≻ σ^{k,l} whenever k+l ≥ m, including the numerically observed σ^{0,l} ≻ σ^{k,l}, and an exact computation at λ = 1/16 shows that σ^{3,3} and σ^{4,4} are incomparable.",
    refs: [
      { label: "Van Herstraeten, Cerf, Guha, Gagatsos, Majorization theoretical approach to entanglement enhancement via local filtration (2024)", doi: "https://doi.org/10.1103/PhysRevA.110.042430", arxiv: "https://arxiv.org/abs/2312.02066", note: "States the conjecture σ^{1,1} ≻ σ^{k,k}, proves it for 2 ≤ k ≤ 8 and introduces the Toeplitz construction used here." },
      { label: "Nielsen, Conditions for a class of entanglement transformations (1999)", doi: "https://doi.org/10.1103/PhysRevLett.83.436", arxiv: "https://arxiv.org/abs/quant-ph/9811053", note: "Majorization criterion for conversion of pure bipartite states by local operations and classical communication." },
      { label: "Marshall, Olkin, Arnold, Inequalities: Theory of Majorization and Its Applications (2011)", doi: "https://doi.org/10.1007/978-0-387-68276-1", note: "Standard reference on majorization, stochastic matrices and Schur-concave functions." },
      { label: "García-Patrón, Navarrete-Benlloch, Lloyd, Shapiro, Cerf, Majorization theory approach to the Gaussian channel minimum entropy conjecture (2012)", doi: "https://doi.org/10.1103/PhysRevLett.108.110505", arxiv: "https://arxiv.org/abs/1111.1986", note: "Majorization ladder of Fock states through a quantum-limited amplifier, the special case k = 0 of the extension proved here." },
    ],
    citation: {
      bibtex: `@misc{bruneton2026photonaddedmajorization,
  author = {Jean-Philippe Bruneton},
  title = {Photon addition to a two-mode squeezed vacuum: a single photon per mode is majorized by any larger addition},
  year = {2026},
  url = {https://openquantumproblems.com/research/photon-added-squeezed-majorization.pdf}
}`,
    },
  },
  {
    title: "Spectra of particle-reduced fermionic density operators",
    meta: "Research note · conjecture settled (true for p = 1, false for p ≥ 2, corrected by p!) · 19 November 2026",
    pdf: "/research/fermionic-particle-reductions.pdf",
    dossier: "https://github.com/jpbruneton/open_quantum_problems/tree/main/research/entries/fermionic-particle-reductions",
    summary: "Amosov and Filippov conjectured that removing p particles from a pure fermionic state with their map Φ gives an operator with the same spectrum as the p-particle reduced density operator. The note settles the conjecture for every pure state on the Fock space, with no assumption on particle number or parity.",
    result: "For every pure state ρ on the Fock space of n fermionic modes and every p, Spec Φᵖ(ρ) = p! Spec ρₚ, zero eigenvalues included. The conjecture therefore holds for p = 1 and fails for every p ≥ 2 unless both operators vanish; the minimal counterexample is the two-mode state |11⟩, where ρ₂ has spectrum {1,0,0,0} and Φ²(ρ) has spectrum {2,0,0,0}. The two operators are complementary outputs of the completely positive map with Kraus operators a_{s_p}⋯a_{s_1}. At fixed particle number N, Proposition 4 of the source is corrected to Φ^{N−p}(ρ) = (N−p)! ρₚ.",
    refs: [
      { label: "Amosov & Filippov, Spectral properties of reduced fermionic density operators and parity superselection rule (2017)", doi: "https://doi.org/10.1007/s11128-016-1467-9", arxiv: "https://arxiv.org/abs/1512.01828", note: "Defines ρₚ and Φ on the Fock space and states the conjecture settled here; its fixed-N Proposition 4 needs the factor (N−p)!." },
      { label: "Carlson & Keller, Eigenvalues of density matrices (1961)", doi: "https://doi.org/10.1103/PhysRev.121.659", note: "The fixed-particle-number duality between p- and (N−p)-particle reductions that the note extends to the whole Fock space." },
      { label: "Gigena, Di Tullio & Rossignoli, Many-body entanglement in fermion systems (2021)", doi: "https://doi.org/10.1103/PhysRevA.103.052424", arxiv: "https://arxiv.org/abs/2012.13785", note: "Writes M-body density operators at fixed N with the prefactor 1/(N−M)!, which is the factorial correction proved here; does not treat variable particle number." },
    ],
    citation: {
      bibtex: `@misc{bruneton2026fermionicreductions,
  author = {Jean-Philippe Bruneton},
  title = {Spectra of particle-reduced fermionic density operators: the Amosov--Filippov conjecture holds up to a factor $p!$},
  year = {2026},
  url = {https://openquantumproblems.com/research/fermionic-particle-reductions.pdf}
}`,
    },
  },
  {
    title: "Structured negativity versus negativity",
    meta: "Research note · conjecture refuted · 19 November 2026",
    pdf: "/research/structured-negativity.pdf",
    dossier: "https://github.com/jpbruneton/open_quantum_problems/tree/main/research/entries/structured-negativity",
    summary: "Kumari and Adhikari conjectured that their structured negativity, a physically implementable entanglement quantifier, coincides with the negativity whenever the partial transpose has d(d−1)/2 negative eigenvalues. The conjecture holds for two qubits and fails for two qutrits; a pure two-qutrit counterexample equivalent to the one below was posted on 30 September 2026 in the public repository the-omega-institute/trureturing (issue #11475). This note adds an exact criterion for equality and counterexamples in every dimension d ≥ 3.",
    result: "The structured negativity equals d times the absolute value of the most negative eigenvalue of the partial transpose, so N = N_S exactly when the sum of the negative eigenvalues equals d(d−1)/2 times the most negative one. The pure two-qutrit state (2|00⟩+2|11⟩+|22⟩)/3 has three negative eigenvalues but N = 8/9 and N_S = 4/3. States built from the symmetric subspace of 2(d−1) qubits have (d−1)² equal negative eigenvalues, saturate N ≤ 2(1−1/d)N_S in every dimension, and give N > N_S for every d ≥ 3.",
    refs: [
      { label: "Kumari, Adhikari, Structured negativity (2022)", doi: "https://doi.org/10.1016/j.aop.2022.169113", arxiv: "https://arxiv.org/abs/2209.03909", note: "Defines the structured negativity, proves N ≤ 2(1−1/d)N_S and states the conjecture refuted here." },
      { label: "Horodecki, Ekert, Direct detection of quantum entanglement (2002)", doi: "https://doi.org/10.1103/PhysRevLett.89.127902", arxiv: "https://arxiv.org/abs/quant-ph/0111064", note: "Introduces the structural physical approximation on which the structured negativity is built." },
      { label: "Vidal, Werner, A computable measure of entanglement (2002)", doi: "https://doi.org/10.1103/PhysRevA.65.032314", arxiv: "https://arxiv.org/abs/quant-ph/0102117", note: "Establishes the negativity as an entanglement monotone." },
      { label: "Rana, Negative eigenvalues of partial transposition (2013)", doi: "https://doi.org/10.1103/PhysRevA.87.054301", arxiv: "https://arxiv.org/abs/1304.6775", note: "Bounds the number of negative eigenvalues of the partial transpose by (m−1)(n−1); used for the two-qubit case." },
      { label: "Johnston, Non-positive-partial-transpose subspaces (2013)", doi: "https://doi.org/10.1103/PhysRevA.87.064302", arxiv: "https://arxiv.org/abs/1305.0257", note: "Shows the bound (m−1)(n−1) is attained, without controlling the eigenvalues; the note's family attains it with all negative eigenvalues equal." },
      { label: "Jiang, Qiu, Yu, Spectral bounds for the partial transpose (2026)", arxiv: "https://arxiv.org/abs/2609.06617", note: "Introduces Ky Fan k-negativities; in their language the structured negativity is d times the first one." },
    ],
    citation: {
      bibtex: `@misc{bruneton2026structurednegativity,
  author = {Jean-Philippe Bruneton},
  title = {Structured negativity and negativity: an exact criterion for their equality},
  year = {2026},
  url = {https://openquantumproblems.com/research/structured-negativity.pdf}
}`,
    },
  },
  {
    title: "Exact PPT distillation from the Zhu–Wang qutrit support",
    meta: "Research note · exact optimum · 19 November 2026",
    pdf: "/research/exact-ppt-distillation-qutrit.pdf",
    dossier: "https://github.com/jpbruneton/open_quantum_problems/tree/main/research/entries/exact-ppt-distillation-qutrit",
    summary: "For the two-qutrit support used by Zhu and Wang to show that the min-Rains bound is not tight for exact PPT distillation, the note computes the one-copy optimum exactly and determines how much exact entanglement one to four copies can yield.",
    result: "The one-copy semidefinite program has value W₀(P) = √177/(7+√177) = (177 − 7√177)/128 ≈ 0.65524, attained by an explicit effect; a phase symmetry of the support reduces the problem to six parameters. With the Zhu–Wang witness, the largest exact maximally entangled output from n copies of any state on this support has dimension 1, 2, 3 and 5 for n = 1, 2, 3, 4, so four joint copies beat two separate two-copy runs. The asymptotic rate lies in [log₂(1 + 7/√177), log₂(391/250)) ≈ [0.6099, 0.6452).",
    refs: [
      { label: "Zhu and Wang, The min-Rains relative entropy is not tight for exact PPT entanglement distillation (2026)", arxiv: "https://arxiv.org/abs/2608.12135", note: "Defines the qutrit support and the witness upper bound used here; it does not compute the one-copy optimum." },
      { label: "Wang and Duan, Improved semidefinite programming upper bound on distillable entanglement (2016)", doi: "https://doi.org/10.1103/PhysRevA.94.050301", arxiv: "https://arxiv.org/abs/1601.07940", note: "Semidefinite programs for exact PPT distillation underlying the one-copy quantity W₀." },
      { label: "Wang and Duan, Nonadditivity of Rains' bound for distillable entanglement (2017)", doi: "https://doi.org/10.1103/PhysRevA.95.062322", arxiv: "https://arxiv.org/abs/1605.00348", note: "Introduces the bound later called the min-Rains relative entropy." },
      { label: "Fang, Wang, Tomamichel and Duan, Non-asymptotic entanglement distillation (2019)", doi: "https://doi.org/10.1109/TIT.2019.2914688", arxiv: "https://arxiv.org/abs/1706.06221", note: "One-shot and finite-copy theory of distillation under PPT operations." },
      { label: "Rains, A semidefinite program for distillable entanglement (2000)", arxiv: "https://arxiv.org/abs/quant-ph/0008047", note: "PPT-operation relaxation and semidefinite bound on distillable entanglement." },
      { label: "Horodecki, Horodecki and Horodecki, Mixed-state entanglement and distillation (1998)", doi: "https://doi.org/10.1103/PhysRevLett.80.5239", arxiv: "https://arxiv.org/abs/quant-ph/9801069", note: "PPT states are undistillable, the basis of partial-transpose bounds." },
      { label: "Bennett, DiVincenzo, Smolin and Wootters, Mixed-state entanglement and quantum error correction (1996)", doi: "https://doi.org/10.1103/PhysRevA.54.3824", arxiv: "https://arxiv.org/abs/quant-ph/9604024", note: "Introduces entanglement distillation of mixed states." },
    ],
    citation: {
      bibtex: `@misc{bruneton2026pptqutrit,
  author = {Jean-Philippe Bruneton},
  title = {Exact {PPT} entanglement distillation from the {Zhu--Wang} qutrit support: the one-copy optimum and the first four output dimensions},
  year = {2026},
  url = {https://openquantumproblems.com/research/exact-ppt-distillation-qutrit.pdf}
}`,
    },
  },
  {
    title: "The root-fidelity matrix bounds the Holevo quantity of three qubit states",
    meta: "Research note · conjecture proved for qubits, open for d ≥ 3 · 19 November 2026",
    pdf: "/research/fidelity-matrix-holevo-bound.pdf",
    dossier: "https://github.com/jpbruneton/open_quantum_problems/tree/main/research/entries/fidelity-matrix-holevo-bound",
    summary: "Fannes, de Melo, Roga and Życzkowski conjectured that the Holevo quantity of three quantum states is bounded by the entropy of the 3×3 matrix built from the probabilities and the square roots of the pairwise fidelities. The note proves this for any three qubit states, pure or mixed, with arbitrary probabilities.",
    result: "For any K qubit states with probabilities pᵢ and fidelities Fᵢⱼ, χ ≤ h((1 + √(1 − 4e₂))/2) with e₂ = Σ_{i<j} pᵢpⱼ(1 − Fᵢⱼ), with equality exactly when all states are pure or all are equal. For K = 3, e₂ is the second invariant of the root-fidelity matrix C, and an integral formula for 3×3 entropies gives h((1 + √(1 − 4e₂))/2) ≤ S(C), which proves the conjecture for qubits. In any dimension the conjecture holds whenever the three states are the image of a pure triple with the same fidelities under a positive trace-preserving map; for qubits this map exists but is not completely positive. The case d ≥ 3 remains open; numerical searches in d = 3, 4, 5 found no counterexample.",
    refs: [
      { label: "Fannes, de Melo, Roga & Życzkowski, Matrices of fidelities for ensembles of quantum states and the Holevo quantity (2012)", doi: "https://doi.org/10.26421/QIC12.5-6-8", arxiv: "https://arxiv.org/abs/1104.2271", note: "States the conjecture, proves positivity of the root-fidelity matrix and the pure-state case; the note proves the qubit case." },
      { label: "Roga, Fannes & Życzkowski, Universal bounds for the Holevo quantity, coherent information and the Jensen-Shannon divergence (2010)", doi: "https://doi.org/10.1103/PhysRevLett.105.040505", note: "Proves the two-state fidelity bound, which the qubit theorem of the note recovers for K = 2." },
      { label: "Roga, Entropy of quantum channel in the theory of quantum information (2011)", arxiv: "https://arxiv.org/abs/1108.5065", note: "Thesis proving the case of two pure and one mixed qubit state with equal probabilities, contained in the note's result." },
      { label: "Zhang, Wu & Fei, Universal upper bound for the Holevo information induced by a quantum operation (2012)", doi: "https://doi.org/10.1016/j.physleta.2012.10.014", arxiv: "https://arxiv.org/abs/1110.5979", note: "Proves the conjecture under a cocycle condition on the polar decompositions; recovered by the note's sufficient criterion." },
      { label: "Müller-Hermes & Reeb, Monotonicity of the quantum relative entropy under positive maps (2017)", doi: "https://doi.org/10.1007/s00023-017-0550-9", arxiv: "https://arxiv.org/abs/1512.06117", note: "Supplies the monotonicity under positive, not completely positive, maps used in the sufficient criterion." },
    ],
    citation: {
      bibtex: `@misc{bruneton2026fidelityholevo,
  author = {Jean-Philippe Bruneton},
  title = {The root-fidelity matrix bounds the Holevo quantity of any three qubit states},
  year = {2026},
  url = {https://openquantumproblems.com/research/fidelity-matrix-holevo-bound.pdf}
}`,
    },
  },
  {
    title: "The variance of a sum of independent quantum errors",
    meta: "Research note · conjecture settled under centring, refuted without · 19 November 2026",
    pdf: "/research/variance-sum-quantum-errors.pdf",
    dossier: "https://github.com/jpbruneton/open_quantum_problems/tree/main/research/entries/variance-sum-quantum-errors",
    summary: "Lacalle and Pozo Coronado conjectured that the variances of two independent quantum errors combine as V₁₂ = V₁ + V₂ − V₁V₂/2. The note shows that the answer depends on whether the errors are centred on the error-free state.",
    result: "The rule is equivalent to multiplicativity of the mean overlap m = 1 − V/2, and it holds for any number of independent centred errors, isotropic or not, in both the gate and the transport definitions of the sum; an exact identity gives the correction −2⟨w₂, u₁⟩ in general. Without centring it fails: two independent errors on the circle with density (1 + sin θ)/(2π) give V₁₂ = 5/2 instead of 2, contradicting the source's Theorem 3, and two over-rotations R_x(2π/3) of one qubit give 3 instead of 3/2. The companion fidelity formula follows in the transport model when the second error has an isotropic second moment.",
    refs: [
      { label: "Lacalle, Pozo Coronado, Variance of the sum of independent quantum computing errors (2019)", doi: "https://doi.org/10.26421/QIC19.15-16-3", arxiv: "https://arxiv.org/abs/2412.15800", note: "Source of the conjecture; proves the isotropic case, whose proof the note shortens, and states the circle theorem refuted here." },
      { label: "Lacalle, Pozo Coronado, Martín-Cuevas, Fidelity of the sum of independent quantum computing errors (2026)", doi: "https://doi.org/10.1007/s11128-025-05037-5", note: "Restates the variance conjecture as open and poses the twin fidelity conjecture proved here in the transport model under an isotropic second moment." },
      { label: "Kueng, Long, Doherty, Flammia, Comparing experiments to the fault-tolerance threshold (2016)", doi: "https://doi.org/10.1103/PhysRevLett.117.170502", arxiv: "https://arxiv.org/abs/1510.05653", note: "Shows that coherent errors behave very differently from stochastic ones of equal average size, the phenomenon behind the biased-rotation counterexample." },
    ],
    citation: {
      bibtex: `@misc{bruneton2026variancesum,
  author = {Jean-Philippe Bruneton},
  title = {The variance of a sum of independent quantum errors: a proof for centred errors and counterexamples without centring},
  year = {2026},
  url = {https://openquantumproblems.com/research/variance-sum-quantum-errors.pdf}
}`,
    },
  },
  {
    title: "Momentum Rényi and Tsallis entropies behind hard walls: the threshold 1/(2(m+1))",
    meta: "Research note · conjecture proved · 19 November 2026",
    pdf: "/research/momentum-renyi-threshold.pdf",
    dossier: "https://github.com/jpbruneton/open_quantum_problems/tree/main/research/entries/momentum-renyi-threshold",
    summary: "Olendski conjectured that the momentum Rényi and Tsallis entropies of every one-dimensional non-Dirichlet system exist exactly for α above 1/2. The note proves a general existence criterion based on the first derivative of the wave function that jumps at a hard wall, and deduces the conjecture for hard-wall Schrödinger eigenfunctions.",
    result: "If the zero-extended wave function first jumps in its derivative of order m, then ∫γ(p)^α dp is finite exactly for α > α_TH = 1/(2(m+1)), and the Rényi entropy diverges like ln(1/(α − α_TH))/(1 − α_TH) at the threshold, with an explicit rate. For eigenfunctions of a Schrödinger operator with integrable potential between hard walls only m = 0 or 1 can occur, so α_TH = 1/4 when both walls are Dirichlet and α_TH = 1/2 otherwise, for every level and for real or complex Robin lengths. The threshold value itself is excluded. The same dichotomy holds on a half-line.",
    refs: [
      { label: "Olendski, Rényi and Tsallis entropies of the Dirichlet and Neumann one-dimensional quantum wells (2020)", doi: "https://doi.org/10.1002/qua.26220", arxiv: "https://arxiv.org/abs/2003.04351", note: "Finds thresholds 1/4 and 1/2 from explicit formulas and states the conjecture proved here." },
      { label: "Olendski, Rényi and Tsallis entropies: three analytic examples (2019)", doi: "https://doi.org/10.1088/1361-6404/aaf45c", arxiv: "https://arxiv.org/abs/1811.09089", note: "Treats the attractive Robin wall, whose closed form the note recovers as a half-line case." },
      { label: "Olendski, Quantum information measures of the Dirichlet and Neumann hyperspherical dots (2021)", doi: "https://doi.org/10.1140/epjp/s13360-021-01366-3", arxiv: "https://arxiv.org/abs/2103.13094", note: "Finds d/(d+3) and d/(d+1) for balls, which match the heuristic d/(d+1+2m) but are not covered by the proof." },
      { label: "Olendski, One-dimensional pseudoharmonic oscillator: classical remarks and quantum-information theory (2023)", arxiv: "https://arxiv.org/abs/2304.06428", note: "Finds a threshold for a wall-singular potential that matches the fractional extension 1/(2(ν+1)), which the note leaves unproved." },
      { label: "Erdélyi, Asymptotic representations of Fourier integrals and the method of stationary phase (1955)", doi: "https://doi.org/10.1137/0103002", note: "Classical theory of endpoint asymptotics of Fourier integrals underlying the leading-term lemma." },
    ],
    citation: {
      bibtex: `@misc{bruneton2026momentumrenyi,
  author = {Jean-Philippe Bruneton},
  title = {Momentum R\'enyi and Tsallis entropies behind hard walls: the existence threshold $1/(2(m+1))$},
  year = {2026},
  url = {https://openquantumproblems.com/research/momentum-renyi-threshold.pdf}
}`,
    },
  },
  {
    title: "Covers of bivariate bicycle codes",
    meta: "Research note · partial results on a conjecture · 19 November 2026",
    pdf: "/research/bivariate-bicycle-coverings.pdf",
    dossier: "https://github.com/jpbruneton/open_quantum_problems/tree/main/research/entries/bivariate-bicycle-coverings",
    summary: "Enlarging the torus of a bivariate bicycle code by a factor h gives an h-fold cover, and Symons, Rajput and Browne conjectured that its distance satisfies d ≤ d_h ≤ h·d. The note proves new parts of this conjecture for covers whose degree is a power of two, where the known arguments fail.",
    result: "Using the exact sequence 0 → Q → Q̃ → Q → 0 of a double cover over F₂, the note proves k ≤ k_h ≤ h·k for power-of-two covers, with the kernel of the transfer of dimension exactly k − k₂/2 for a double cover. It proves d_h ≥ min(d, s), where s is the least weight of a nonzero stabiliser, so the conjectured lower bound holds whenever s ≥ d: for 805 of the 836 inequivalent small base codes and for the [[72,12,6]] code. It also proves d₂ ≤ 2d when k₂ = 2k, and an example [[42,4,6]] → [[84,4,10]] shows that the transfer alone cannot give the upper bound in general; exact scans of about 200,000 covers find no counterexample.",
    refs: [
      { label: "Symons, Rajput, Browne, Sequences of bivariate bicycle codes from covering graphs (2025)", arxiv: "https://arxiv.org/abs/2511.13560", note: "Source of the conjecture; proves the odd-degree bounds that this note complements for degrees that are powers of two." },
      { label: "Bravyi et al., High-threshold and low-overhead fault-tolerant quantum memory (2024)", doi: "https://doi.org/10.1038/s41586-024-07107-7", arxiv: "https://arxiv.org/abs/2308.07915", note: "Introduces bivariate bicycle codes and the rank equality used in the proofs; its [[72,12,6]], [[90,8,10]] and [[108,8,10]] codes are tested here." },
      { label: "Hirasaki, Lee, Lifting lifted product codes (2026)", arxiv: "https://arxiv.org/abs/2607.28621", note: "Extends the odd-index bounds to lifted product codes and leaves even index open; the exact sequence here handles index two." },
      { label: "Sabo, Can, Marquis, Spectral theory of semisimple bivariate bicycle codes (2026)", arxiv: "https://arxiv.org/abs/2608.27565", note: "Gives an independent algebraic treatment of the dimension of cover codes; it does not use the exact sequence employed here." },
    ],
    citation: {
      bibtex: `@misc{bruneton2026bbcovers,
  author = {Jean-Philippe Bruneton},
  title = {Covers of bivariate bicycle codes: partial results on the distance conjecture for power-of-two covers},
  year = {2026},
  url = {https://openquantumproblems.com/research/bivariate-bicycle-coverings.pdf}
}`,
    },
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
      { label: "Lindblad, On the generators of quantum dynamical semigroups (1976)", doi: "https://doi.org/10.1007/BF01608499", note: "Standard form of the Markovian generator used in the construction." },
    ],
    citation: {
      bibtex: `@misc{bruneton2026mpembamode,
  author = {Jean-Philippe Bruneton},
  title = {A Mpemba mode invisible to every strict reduction},
  year = {2026},
  url = {https://openquantumproblems.com/research/locally-invisible-mpemba-mode.pdf}
}`,
    },
  },
  {
    title: "Covariance data cannot bound the Schmidt number, even at fixed energy",
    meta: "Research note · no-go example · 19 November 2026",
    pdf: "/research/schmidt-number-separable-covariance.pdf",
    dossier: "https://github.com/jpbruneton/open_quantum_problems/tree/main/research/entries/schmidt-number-separable-covariance",
    summary: "A pure state of arbitrarily large Schmidt rank can have exactly the same quadrature means, covariance matrix and mean photon number as a separable state, with an energy bound independent of the rank. Low-order moment criteria therefore cannot certify Schmidt numbers uniformly over all states.",
    result: "For r ≥ 2 and spacing m, the pure state Σ_{j<r} √p_j |mj, mj⟩ (Schmidt rank r) and the separable mixture Σ_{j<r} p_j |mj, mj⟩⟨mj, mj| share every quadrature moment of degree below 2m and their mean photon number 2m Σ_j j p_j; with m = 2 this covers means, covariance matrices and third moments. With weights p_j ∝ z^j the mean photon number stays below 2m z/(1−z) for every r, and the moment ⟨a^m b^m⟩ of degree 2m tells the states apart. At mean photon number E the r-th reduced eigenvalue of any pure state is at most E/(r(r−1)), so the obstruction relies on small Schmidt coefficients.",
    refs: [
      { label: "Mishra, Morelli, Baksová, Rembold, Friis, Certification of high-dimensional entanglement in continuous-variable systems (2026)", arxiv: "https://arxiv.org/abs/2610.03113", note: "Derives Schmidt-number witnesses from first and second moments; the note shows that no such criterion can work uniformly at bounded energy." },
      { label: "Terhal, Horodecki, Schmidt number for density matrices (2000)", doi: "https://doi.org/10.1103/PhysRevA.61.040301", arxiv: "https://arxiv.org/abs/quant-ph/9911117", note: "Defines the Schmidt number of mixed states." },
      { label: "Duan, Giedke, Cirac, Zoller, Inseparability criterion for continuous variable systems (2000)", doi: "https://doi.org/10.1103/PhysRevLett.84.2722", arxiv: "https://arxiv.org/abs/quant-ph/9908056", note: "Second-moment entanglement criterion for two modes." },
      { label: "Simon, Peres-Horodecki separability criterion for continuous variable systems (2000)", doi: "https://doi.org/10.1103/PhysRevLett.84.2726", arxiv: "https://arxiv.org/abs/quant-ph/9909044", note: "Covariance-matrix form of the partial-transpose criterion, necessary and sufficient for two-mode Gaussian states." },
      { label: "Shchukin, Vogel, Inseparability criteria for continuous bipartite quantum states (2005)", doi: "https://doi.org/10.1103/PhysRevLett.95.230502", arxiv: "https://arxiv.org/abs/quant-ph/0508132", note: "Hierarchy of moment conditions of all orders; the example is detected only by moments of degree at least 2m." },
      { label: "Yi, Li, Zhu, Certifying entanglement dimensionality by k-reduction moments (2026)", doi: "https://doi.org/10.1103/cc1n-gmj1", arxiv: "https://arxiv.org/abs/2501.15360", note: "Finite-dimensional certification from nonlinear reduction moments, to which this obstruction does not apply." },
    ],
    citation: {
      bibtex: `@misc{bruneton2026schmidtcovariance,
  author = {Jean-Philippe Bruneton},
  title = {Separable states with the low-order moments of states of arbitrary Schmidt rank at bounded energy},
  year = {2026},
  url = {https://openquantumproblems.com/research/schmidt-number-separable-covariance.pdf}
}`,
    },
  },
  {
    title: "How many incoherent Kraus operators?",
    meta: "Research note · new lower bound and qutrit construction · 19 November 2026",
    pdf: "/research/incoherent-kraus-operators.pdf",
    dossier: "https://github.com/jpbruneton/open_quantum_problems/tree/main/research/entries/incoherent-kraus-operators",
    summary: "Incoherent operations in the resource theory of coherence must be written with Kraus operators that each keep diagonal states diagonal. The note asks how many such operators are needed beyond the qubit, where the answer four was already known.",
    result: "A generic incoherent completely positive map on a d-dimensional system needs at least ⌈d²(d²−d+1)/(2d−1)⌉ incoherent Kraus operators: 4, 13 and 30 for d = 2, 3, 4, growing like d³/2 against the Choi rank d². For the qutrit, an exact integer rank certificate shows that thirteen operators cover an open set of incoherent maps, so 13 is attained, and also an open set of incoherent channels. The qubit value four, known from Qiao et al. (2020), is re-derived with a short fixed-point argument; the generic lower bound for trace-preserving operations remains a conjecture.",
    refs: [
      { label: "Streltsov, Rana, Boes and Eisert, Structure of the resource theory of quantum coherence (2017)", doi: "https://doi.org/10.1103/PhysRevLett.119.140402", arxiv: "https://arxiv.org/abs/1705.04189", note: "Proves that five incoherent Kraus operators suffice for a qubit and asks whether four suffice." },
      { label: "Qiao et al., The reduction of the number of incoherent Kraus operations for qutrit systems (2020)", doi: "https://doi.org/10.1209/0295-5075/129/60006", arxiv: "https://arxiv.org/abs/2005.01083", note: "Shows four suffice for a qubit and gives the qutrit upper bound 32; the note re-derives the qubit case by another route." },
      { label: "Baumgratz, Cramer and Plenio, Quantifying coherence (2014)", doi: "https://doi.org/10.1103/PhysRevLett.113.140401", arxiv: "https://arxiv.org/abs/1311.0275", note: "Defines incoherent operations through incoherent Kraus decompositions." },
      { label: "Streltsov, Adesso and Plenio, Quantum coherence as a resource (2017)", doi: "https://doi.org/10.1103/RevModPhys.89.041003", arxiv: "https://arxiv.org/abs/1609.02439", note: "Review of the classes of free operations in coherence theory." },
      { label: "Choi, Completely positive linear maps on complex matrices (1975)", doi: "https://doi.org/10.1016/0024-3795(75)90075-0", note: "The Choi matrix on which the clique formulation is built." },
      { label: "Bochnak, Coste and Roy, Real Algebraic Geometry (1998)", doi: "https://doi.org/10.1007/978-3-662-03718-8", note: "Dimension theory of semialgebraic sets used in the generic lower bound." },
    ],
    citation: {
      bibtex: `@misc{bruneton2026incoherentkraus,
  author = {Jean-Philippe Bruneton},
  title = {How many incoherent {Kraus} operators? {A} generic lower bound in every dimension and thirteen for the qutrit},
  year = {2026},
  url = {https://openquantumproblems.com/research/incoherent-kraus-operators.pdf}
}`,
    },
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
      { label: "Margenau, Hill, Correlation between measurements in quantum theory (1961)", doi: "https://doi.org/10.1143/PTP.26.722", note: "Source of the symmetrized operator ordering whose positivity is studied here." },
      { label: "Aharonov, Bergmann, Lebowitz, Time symmetry in the quantum process of measurement (1964)", doi: "https://doi.org/10.1103/PhysRev.134.B1410", note: "Foundational time-symmetric description of pre- and post-selected systems." },
    ],
    citation: {
      bibtex: `@misc{bruneton2026leakage,
  author = {Jean-Philippe Bruneton},
  title = {How much leakage makes the {Margenau--Hill} state of a post-selected system positive},
  year = {2026},
  url = {https://openquantumproblems.com/research/postselection-leakage-threshold.pdf}
}`,
    },
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
            <b>Research notes published here.</b> The stated mathematical results are proved exactly and accompanied by reproducible checks. Each note states the extent of its literature search; unless a note says otherwise, no direct antecedent for its specific results was found. Several notes settle conjectures posed in published papers.
          </div>
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
                <div className="research-citation">
                  <h4>To cite this work</h4>
                  <div className="citation-format">
                    <span>BibTeX</span>
                    <pre><code>{note.citation.bibtex}</code></pre>
                  </div>
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
