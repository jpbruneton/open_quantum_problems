"use client";

import { Fragment, useEffect, useMemo, useState } from "react";
import { MathText } from "./components/Math";
import {
  CATEGORIES,
  PROBLEMS,
  ARCHIVED_PROBLEMS,
  REVIEW,
  LITERATURE_UPDATE,
  LITERATURE_UPDATES,
  CORRECTION_LOG,
  EVIDENCE_KINDS,
  WATCHLIST,
  HORIZONS,
  STATUSES,
  problemsByCat,
  getProblem,
  getCategory,
  consolidatedInto,
} from "./data/problems";
import { PROPOSALS, SECONDARY_PROPOSALS, PROPOSALS_META, PROPOSAL_COUNT, NEW_RESULTS } from "./data/proposals";

// ---------- tiny hash router ----------
function useHashRoute() {
  const [hash, setHash] = useState("");
  useEffect(() => {
    const read = () => {
      setHash(window.location.hash.replace(/^#/, ""));
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);
  const parts = hash.split("/").filter(Boolean);
  if (parts[0] === "c" && parts[1]) return { view: "category", slug: parts[1] };
  if (parts[0] === "p" && parts[1]) return { view: "problem", id: parts[1] };
  if (parts[0] === "sharp") return { view: "sharp" };
  if (parts[0] === "improved") return { view: "improved" };
  if (parts[0] === "claimed-solved") return { view: "claimed-solved" };
  if (parts[0] === "review") return { view: "review" };
  if (parts[0] === "new-problems") return { view: "new-problems" };
  if (parts[0] === "about") return { view: "about" };
  return { view: "home" };
}
function go(to) {
  window.location.hash = to;
  window.scrollTo({ top: 0, behavior: "instant" });
}

// ---------- badges ----------
function HorizonBadge({ h }) {
  return (
    <span className={`badge h-${h}`} title={HORIZONS[h].desc}>
      <span className="dot" style={{ background: `var(--${h})` }} />
      {HORIZONS[h].label}
    </span>
  );
}
function StatusBadge({ s }) {
  return (
    <span className={`badge st-${s}`} title={STATUSES[s].desc}>
      <span className="dot" style={{ background: `var(--${s})` }} />
      {STATUSES[s].label}
    </span>
  );
}

// ---------- header ----------
function Header({ crumbs }) {
  return (
    <header className="site-header">
      <div className="container inner">
        <h1 className="title">Open Problems in Quantum Mechanics for AI Agents</h1>
        <p className="subtitle">
          A literature-reviewed catalogue for human researchers and AI agents:
          precise questions, research programmes, known results and the work
          still to do. Corrections and contributions are welcome.
        </p>
        <div className="header-links">
        <a
          className="gh-link"
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
        <span className="gh-link powered-by">Powered by Astra &amp; Opus 5.5</span>
        <a className="gh-link about-link" href="#about">About &amp; similar projects</a>
        </div>
        {crumbs && (
          <nav className="crumbs">
            <a href="#">Home</a>
            {crumbs.map((c, i) => (
              <span key={i}>
                <span className="sep">/</span>
                {c.to ? <a href={`#${c.to}`}>{c.label}</a> : <span>{c.label}</span>}
              </span>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

// ---------- home ----------
function Home() {
  const total = PROBLEMS.length;
  const nSharp = PROBLEMS.filter((p) => p.horizon === "sharp").length;
  const nImproved = PROBLEMS.filter((p) => p.status === "improved").length;
  const nClaimedSolved = PROBLEMS.filter((p) => p.status === "claimed-solved").length;

  return (
    <>
      <Header />
      <section className="body">
        <div className="container">
          <div className="two-boxes">
            <div className="box box-current">
              <div className="box-kicker">This page</div>
              <h2>Known open problems</h2>
              <p>{total} literature-reviewed entries across {CATEGORIES.length} areas, each with its status and evidence.</p>
              <div className="stats">
                <div className="stat"><div className="n">{total}</div><div className="l">Active entries</div></div>
                <div className="stat"><div className="n">{nSharp}</div><div className="l">Sharp questions</div></div>
                <a className="stat stat-link" href="#improved" aria-label={`See all ${nImproved} improved problems`}>
                  <div className="n">{nImproved}</div><div className="l">Improved <span aria-hidden="true">→</span></div>
                </a>
                <a className="stat stat-link stat-claimed" href="#claimed-solved" aria-label={`See all ${nClaimedSolved} claimed solved problems`}>
                  <div className="n">{nClaimedSolved}</div><div className="l">Claimed solved <span aria-hidden="true">→</span></div>
                </a>
              </div>
              <button className="cta-sharp" onClick={() => go("sharp")}>
                ⚡ See all {nSharp} sharp problems
              </button>
            </div>
            <a className="box box-new" href="#new-problems">
              <div className="box-kicker">New page</div>
              <h2>New problems suggested by AI</h2>
              <p>{PROPOSAL_COUNT} candidate successor questions opened by the 2026 claimed resolutions, {SECONDARY_PROPOSALS.length} secondary leads, and {NEW_RESULTS.length} new result found on the way. Not counted; not yet catalogue entries.</p>
              <span className="box-cta">Browse the proposals <span aria-hidden="true">→</span></span>
            </a>
          </div>

          <div className="review-note">
            <b>Last update · {LITERATURE_UPDATE.label}.</b> {LITERATURE_UPDATE.ids.length - 11} entries updated and 11 new entries added.
            <ul>
              <li>Independent <a href="#p/N2">second proof that dimension six has only three MUBs</a>; experts have engaged with the <a href="#p/M5">Haldane-gap proof</a>.</li>
              <li>OpenAI's announced <a href="#p/QF1">4D Yang–Mills existence proof</a> is not public and does not claim the mass gap.</li>
              <li>Checked against <a href="#about">similar catalogues</a> (QIQCOP Zoo, IQOQI Vienna): shared problems are now cross-referenced on each page. This found an all-dimension <a href="#p/N1">SIC existence claim</a>, now “Claimed solved”, and added <a href="#p/A20">PARITY ∉ QAC0</a> and ten other questions.</li>
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
              <li><span className="dot" style={{ background: "var(--claimed-solved)" }} /> <a href="#claimed-solved"><b>Claimed solved</b></a>: full resolution awaiting independent assessment.</li>
              <li><span className="dot" style={{ background: "var(--solved)" }} /> <b>Solved</b>: established. Zero entries are Solved: no claimed resolution has yet been independently verified or fully machine-checked.</li>
            </ul>
          </div>

          <div className="grid">
            {CATEGORIES.map((c) => {
              const ps = problemsByCat(c.slug);
              const counts = {
                sharp: ps.filter((p) => p.horizon === "sharp").length,
                incremental: ps.filter((p) => p.horizon === "incremental").length,
                programme: ps.filter((p) => p.horizon === "programme").length,
                conceptual: ps.filter((p) => p.horizon === "conceptual").length,
              };
              return (
                <a className="card" key={c.slug} href={`#c/${c.slug}`}>
                  <div className="code">{ps.length} active entries · {c.code} series</div>
                  <h3>{c.name}</h3>
                  <p>{c.blurb}</p>
                  <div className="foot">
                    <div className="mini-bars">
                      {Object.entries(counts).map(([k, n]) =>
                        n > 0 ? (
                          <span
                            key={k}
                            className="mini-bar"
                            title={`${n} ${HORIZONS[k].label}`}
                            style={{ width: 10 + n * 8, background: `var(--${k})` }}
                          />
                        ) : null
                      )}
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
  const [q, setQ] = useState("");
  const [horizon, setHorizon] = useState("all");

  const rows = useMemo(() => {
    let ps = problemsByCat(slug);
    if (horizon !== "all") ps = ps.filter((p) => p.horizon === horizon);
    if (q.trim()) {
      const s = q.toLowerCase();
      ps = ps.filter(
        (p) =>
          p.title.toLowerCase().includes(s) ||
          p.id.toLowerCase().includes(s) ||
          p.statement.toLowerCase().includes(s)
      );
    }
    return ps;
  }, [slug, q, horizon]);

  if (!cat) return <NotFound />;

  return (
    <>
      <Header crumbs={[{ label: cat.name }]} />
      <section className="body">
        <div className="container">
          <p className="intro">{cat.blurb}</p>

          <div className="toolbar">
            <input
              aria-label="Filter category entries"
              placeholder="Filter by keyword…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <button className={`chip ${horizon === "all" ? "active" : ""}`} aria-pressed={horizon === "all"} onClick={() => setHorizon("all")}>All horizons</button>
            {Object.keys(HORIZONS).map((h) => (
              <button key={h} className={`chip ${horizon === h ? "active" : ""}`} aria-pressed={horizon === h} onClick={() => setHorizon(h)}>
                {HORIZONS[h].label}
              </button>
            ))}
          </div>

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
                  <tr key={p.id} onClick={(event) => { if (!event.target.closest("a")) go(`p/${p.id}`); }}>
                    <td className="id">{p.id}</td>
                    <td className="stmt">
                      <div style={{ fontWeight: 600, marginBottom: 4 }}><a href={`#p/${p.id}`}>{p.title}</a></div>
                      <div style={{ color: "var(--muted)", fontSize: 13 }}>
                        <MathText text={truncate(p.statement, 150)} />
                      </div>
                    </td>
                    <td><HorizonBadge h={p.horizon} /></td>
                    <td><StatusBadge s={p.status} /></td>
                  </tr>
                ))}
                {rows.length === 0 && (
                  <tr><td colSpan={4} style={{ color: "var(--muted)" }}>No problems match the filter.</td></tr>
                )}
              </tbody>
            </table>
          </div>
          {ARCHIVED_PROBLEMS.some((p) => p.cat === slug) && (
            <div className="note">
              Related merged entries and background:
              <ul className="related-links">
                {ARCHIVED_PROBLEMS.filter((p) => p.cat === slug).map((p) => (
                  <li key={p.id}><a href={`#p/${p.id}`}>{p.id} · {p.title}</a></li>
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

function FilteredProblemsView({ status = null }) {
  const [q, setQ] = useState("");
  const label = status ? STATUSES[status].label : "Sharp";

  const rows = useMemo(() => {
    let ps = PROBLEMS.filter((p) => status ? p.status === status : p.horizon === "sharp");
    if (q.trim()) {
      const s = q.trim().toLowerCase();
      ps = ps.filter(
        (p) =>
          p.title.toLowerCase().includes(s) ||
          p.id.toLowerCase().includes(s) ||
          p.statement.toLowerCase().includes(s)
      );
    }
    return ps;
  }, [q, status]);

  return (
    <>
      <Header crumbs={[{ label: `${label} problems` }]} />
      <section className="body">
        <div className="container">
          <p className="intro">
            {status
              ? STATUSES[status].desc
              : "Sharp problems: a single proof or counterexample closes them. These are the cleanest targets for a solution."}
          </p>

          <div className="toolbar">
            <input
              aria-label={status ? `Filter ${label.toLowerCase()} problems` : "Filter sharp questions"}
              placeholder="Filter by keyword…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>

          {status && <p className="review-meta" role="status">{rows.length} {label.toLowerCase()} {rows.length === 1 ? "problem" : "problems"}</p>}
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
                  <tr key={p.id} onClick={(event) => { if (!event.target.closest("a")) go(`p/${p.id}`); }}>
                    <td className="id">{p.id}</td>
                    <td style={{ color: "var(--muted)", fontSize: 13 }}>{getCategory(p.cat).name}</td>
                    <td className="stmt">
                      <div style={{ fontWeight: 600, marginBottom: 4 }}><a href={`#p/${p.id}`}>{p.title}</a></div>
                      <div style={{ color: "var(--muted)", fontSize: 13 }}>
                        <MathText text={truncate(p.statement, 150)} />
                      </div>
                    </td>
                    <td>{status ? <HorizonBadge h={p.horizon} /> : <StatusBadge s={p.status} />}</td>
                  </tr>
                ))}
                {rows.length === 0 && (
                  <tr><td colSpan={4} style={{ color: "var(--muted)" }}>No problems match the filter.</td></tr>
                )}
              </tbody>
            </table>
          </div>
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
          <button className="back" onClick={() => go(`c/${cat.slug}`)}>← {cat.name}</button>
          <div className="badge-row" style={{ margin: "6px 0 2px" }}>
            <span className="badge" style={{ color: "var(--muted)" }}>{p.id}</span>
            <HorizonBadge h={p.horizon} />
            {p.archive ? <span className="badge">{p.archive.kind === "merged" ? "Merged entry" : "Background"}</span> : <StatusBadge s={p.status} />}
          </div>
          <h2>{p.title}</h2>
          <p className="review-meta">Literature reviewed {p.reviewedAt} · <a href="#review">Scope &amp; verification limits</a></p>

          {p.archive && (
            <aside className="archive-note" aria-label="Catalogue disposition">
              <b>{p.archive.kind === "merged" ? "Consolidated, not separately counted." : "Background, not an open-problem entry."}</b>
              <p>{p.archive.reason}</p>
              {p.archive.targets.length > 0 && (
                <ul className="related-links">
                  {p.archive.targets.map((target) => <li key={target}><a href={`#p/${target}`}>{target} · {getProblem(target)?.title}</a></li>)}
                </ul>
              )}
            </aside>
          )}

          <div className="statement"><MathText text={p.statement} /></div>

          <h4>{p.archive ? "Retained context & background" : "Known results & open residual"}</h4>
          <div className="context">
            {String(p.context).split(/\n\n+/).map((para, i) => (
              <p key={i}><MathText text={para.trim()} /></p>
            ))}
          </div>

          {p.evidence.length > 0 && (
            <>
              <h4>Evidence &amp; scope</h4>
              <ul className="evidence-list">
                {p.evidence.map((item, i) => (
                  <li key={i}>
                    <span className={`badge ev-${item.kind}`} title={EVIDENCE_KINDS[item.kind]?.desc}>{EVIDENCE_KINDS[item.kind]?.label || item.kind}</span>
                    <p><MathText text={item.summary} /></p>
                    <a href={item.url} target="_blank" rel="noreferrer">Source{item.version ? ` · ${item.version}` : ""}{item.date ? ` · ${item.date}` : ""}</a>
                  </li>
                ))}
              </ul>
            </>
          )}

          {(p.relations.length > 0 || children.length > 0) && (
            <>
              <h4>Related questions &amp; consolidated subproblems</h4>
              <ul className="related-links">
                {p.relations.map((rel, i) => <li key={`rel-${i}`}><a href={`#p/${rel.id}`}>{rel.id} · {getProblem(rel.id)?.title}</a> <span className="relation-type">({rel.type})</span></li>)}
                {children.filter((child) => !p.relations.some((rel) => rel.id === child.id)).map((child) => <li key={child.id}><a href={`#p/${child.id}`}>{child.id} · {child.title}</a> <span className="relation-type">(consolidated here)</span></li>)}
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

          {p.catalogues.length > 0 && (
            <>
              <h4>In other catalogues</h4>
              <ul className="refs xref-list">
                {p.catalogues.map((x, i) => (
                  <li key={i}>
                    <b>{x.catalogue}</b>: <a href={x.url} target="_blank" rel="noreferrer">{x.title}</a>
                    {x.status ? ` (${x.status})` : ""}{x.note ? <> — <MathText text={x.note} /></> : null}
                  </li>
                ))}
              </ul>
            </>
          )}

          {p.provenance.length > 0 && (
            <>
              <h4>Author-reported provenance</h4>
              <p className="review-meta">These are attributed disclosures, not independent determinations of authorship or proof correctness.</p>
              <ul className="refs">
                {p.provenance.map((item, i) => <li key={i}><MathText text={item.summary} />{" "}<a href={item.url} target="_blank" rel="noreferrer">Disclosure{item.version ? ` · ${item.version}` : ""}</a></li>)}
              </ul>
            </>
          )}

          <h4>Contributions</h4>
          <div className="submissions">
            {p.submissions && p.submissions.length > 0 ? (
              <table>
                <thead>
                  <tr><th>Type</th><th>By</th><th>Model</th><th>Date</th><th>Summary</th></tr>
                </thead>
                <tbody>
                  {p.submissions.map((s, i) => (
                    <tr key={i}>
                      <td>{s.kind}</td>
                      <td>{s.who}</td>
                      <td>{s.model || "—"}</td>
                      <td>{s.date}</td>
                      <td>{s.url ? <a href={s.url} target="_blank" rel="noreferrer">{s.summary}</a> : s.summary}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="empty">
                {p.archive ? "This page is retained for reference. Submit updates to its linked parent entries or the catalogue background." : <>No recorded contributions yet. {p.horizon === "sharp"
                  ? "A complete proof or a single counterexample resolves this problem."
                  : p.horizon === "incremental"
                  ? "An improved bound, a larger tractable class, or a new construction counts as progress."
                  : p.horizon === "programme"
                  ? "This is a long-horizon programme — substantive partial progress or a new sub-result counts."
                  : "This is a conceptual problem without a single agreed success criterion — a new argument, framework, or no-go result counts."}</>}
                {" "}Contributions are made by pull request to the project repository.
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

// ---------- review policy and non-counted background ----------
function ReviewView() {
  return (
    <>
      <Header crumbs={[{ label: "Catalogue review" }]} />
      <section className="body">
        <div className="container detail">
          <h2>Clear questions. Explicit evidence.</h2>
          <p className="intro">Latest literature update · {LITERATURE_UPDATE.label}</p>
          <p>A targeted check of arXiv manuscripts submitted up to 5 November 2026, of the OpenAI Math Release update of
            29 October, and of related announcements updated {LITERATURE_UPDATE.ids.length} entries:
            {" "}{LITERATURE_UPDATE.ids.map((id, i) => <span key={id}>{i > 0 ? ", " : ""}<a href={`#p/${id}`}>{id}</a></span>)}.
            The remaining entries retain their earlier review dates. This is a literature and scope check, not an independent verification of the proofs.</p>
          <p>No status changes. N2 (MUBs in dimension six) gains an independent second proof: a topological, interval-arithmetic
            and partly Lean-formalized argument that also classifies every mutually unbiased triple. For M5 (Haldane gap), Tasaki's notes endorse the analytic argument while leaving its
            numerics unchecked, and two papers build on the method. Both entries stay <a href="#claimed-solved">“Claimed solved”</a>
            {" "}until peer review or an independent rerun of the certificates.</p>
          <p>OpenAI announced on 26 October a 4D Yang–Mills (and QCD) existence proof. A committee chaired by David Gross holds the
            proof and will release it after review. The announcement excludes the mass gap and no manuscript is public, so QF1 stays open.
            Other progress: a classical-oracle separation of MA and StoqMA (A9), oracle classical verification beyond PH (A19),
            further loss-based simulation of BosonSampling (A12), correlated catalysis (E11), continuity of distillable entanglement (E9),
            all-to-all Gibbs-sampler mixing (O10), chiral-gauge follow-ups including Witten's (QF5) and
            neural-network evidence for a Dirac spin liquid on the kagome lattice (B15). QIP 2027 decisions are due on 30 November.</p>
          <p><a href={LITERATURE_UPDATE.reportUrl} target="_blank" rel="noreferrer">Read the dated update, source versions and remaining questions →</a></p>
          <p>Earlier literature updates: {LITERATURE_UPDATES.slice(1).map((update, i) => <span key={update.date}>
            {i > 0 ? " · " : ""}<a href={update.reportUrl} target="_blank" rel="noreferrer">{update.label}</a>
          </span>)}</p>
          <p className="intro">Source and consistency corrections · {CORRECTION_LOG.label}</p>
          <p>A follow-up audit of every cited source corrected mislabelled or mislinked references,
            a missing AI-use disclosure, stale version pointers, reader-facing editing notes, status and
            horizon inconsistencies, and added missing baseline results. Problem statements, IDs and
            review dates are unchanged.
            {" "}<a href={CORRECTION_LOG.reportUrl} target="_blank" rel="noreferrer">Read the correction log →</a></p>
          <p className="intro">Full catalogue review · {REVIEW.label}</p>
          <p>All {REVIEW.reviewed} original entries were reassessed. The review recommended retaining 27, reframing 74, consolidating nine and moving one broad methods proposal to background. Twelve missing or underexposed questions have now been added or promoted.</p>
          <p>There are currently {PROBLEMS.length} active entries across {CATEGORIES.length} areas. Stable IDs are never renumbered: the gaps in a category’s numbering reflect consolidation, not missing pages.</p>
          <p><a href={REVIEW.reportUrl} target="_blank" rel="noreferrer">Read the complete audit and its four source-linked appendices →</a></p>

          <h4>How to read a problem</h4>
          <p>The statement specifies the target and assumptions. The context separates known results, solved subcases and the open residual. A sharp question has a definite resolution; an incremental target, programme or conceptual issue need not.</p>
          <p>“Improved” records partial progress on the stated problem. “Claimed solved” records a full resolution awaiting independent assessment. “Solved” is reserved for an established resolution. A restricted theorem can resolve a subcase while the broader entry remains “Improved”. Computational hardness, uncomputability and failure of a particular method are different claims.</p>
          <ul className="evidence-list">
            {Object.entries(EVIDENCE_KINDS).map(([kind, info]) => <li key={kind}><span className={`badge ev-${kind}`}>{info.label}</span><p>{info.desc}</p></li>)}
          </ul>
          <p>AI-use disclosures are versioned provenance, separate from mathematical status. No disclosure is not evidence of no AI use. This literature audit is not an independent proof verification or an exhaustive review of every paper in quantum science; corrections remain welcome.</p>

          <h4>Merged entries &amp; background</h4>
          <p>These pages preserve their references and original links, but are excluded from active counts and the sharp-question list.</p>
          <ul className="archive-list">
            {ARCHIVED_PROBLEMS.map((p) => (
              <li key={p.id}>
                <a href={`#p/${p.id}`}>{p.id} · {p.title}</a>
                <p>{p.archive.reason}</p>
                {p.archive.targets.length > 0 && <span>Continue with {p.archive.targets.map((id, i) => <span key={id}>{i > 0 ? ", " : ""}<a href={`#p/${id}`}>{id}</a></span>)}</span>}
              </li>
            ))}
          </ul>

          <h4>Research watchlist — not yet counted as open problems</h4>
          <p>These candidates need a further scoped status check before promotion. In particular, a deferred proof in a recent manuscript is not automatically an established open problem.</p>
          <ul className="archive-list">
            {WATCHLIST.map((item) => <li key={item.title}><b>{item.title}</b><p>{item.summary}</p><a href={item.url} target="_blank" rel="noreferrer">Starting source</a></li>)}
          </ul>
          <h4>Contributing an update</h4>
          <p>Include the exact statement affected, its assumptions, a stable DOI or arXiv link and the version/date checked. Distinguish submission, revision, acceptance and publication dates. Explain what remains open and link related entries instead of counting the same advance repeatedly.</p>
        </div>
      </section>
      <Footer />
    </>
  );
}

function NewProblemsView() {
  const [open, setOpen] = useState(() => new Set());
  const toggle = (key) => setOpen((prev) => {
    const next = new Set(prev);
    if (next.has(key)) next.delete(key); else next.add(key);
    return next;
  });
  const scrollTo = (e, cat) => {
    e.preventDefault();
    const el = document.getElementById(`np-${cat}`);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Header crumbs={[{ label: "New problems suggested by AI" }]} />
      <section className="body">
        <div className="container">
          <h2>New problems suggested by AI</h2>
          <p className="intro">Proposed {PROPOSALS_META.label} · {PROPOSAL_COUNT} priority candidates, {SECONDARY_PROPOSALS.length} secondary leads and {NEW_RESULTS.length} new result · not counted as catalogue entries</p>
          <p>Each candidate is a successor question: what the 2026 claimed resolutions and recorded progress now leave open. They carry no status, are not counted in the catalogue, and await human selection. Horizons use the same badges as the catalogue; “extends” links the entries they grow out of. Click a row to show the motivation, baseline and caveats.</p>
          <p>{PROPOSALS_META.method}</p>
          <p><a href={PROPOSALS_META.reportUrl} target="_blank" rel="noreferrer">Read the full proposal with verification marks and caveats →</a></p>
          <nav className="proposal-nav" aria-label="Areas">
            {PROPOSALS.map((g) => <a key={g.cat} href={`#new-problems`} onClick={(e) => scrollTo(e, g.cat)}>{g.name} ({g.items.length})</a>)}
            <a href="#new-problems" onClick={(e) => scrollTo(e, "secondary")}>Secondary leads ({SECONDARY_PROPOSALS.length})</a>
            <a href="#new-problems" className="nav-results" onClick={(e) => scrollTo(e, "results")}>New results ({NEW_RESULTS.length})</a>
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
                        <tr onClick={(event) => { if (!event.target.closest("a")) toggle(it.key); }} aria-expanded={open.has(it.key)}>
                          <td className="id">{it.key}</td>
                          <td className="stmt">
                            <div style={{ fontWeight: 600, marginBottom: 4 }}>{it.title}</div>
                            <div style={{ color: "var(--muted)", fontSize: 13 }}>
                              {open.has(it.key) ? <MathText text={it.statement} /> : <MathText text={truncate(it.statement, 150)} />}
                            </div>
                            {it.extends.length > 0 && <div className="proposal-extends" style={{ fontSize: 12, marginTop: 4 }}>extends {it.extends.map((id, i) => <span key={id}>{i > 0 ? ", " : ""}<a href={`#p/${id}`}>{id}</a></span>)}</div>}
                          </td>
                          <td><HorizonBadge h={it.horizon} /></td>
                          <td><span className="badge st-proposed" title="Candidate question, not a catalogue entry"><span className="dot" style={{ background: "var(--muted-2)" }} />Proposed</span></td>
                        </tr>
                        {open.has(it.key) && (
                          <tr className="proposal-detail-row">
                            <td />
                            <td colSpan={3} className="proposal-detail">
                              <p><b>Why now.</b> <MathText text={it.why} /></p>
                              {it.baseline && <p className="proposal-meta"><b>Baseline.</b> {it.baseline}</p>}
                              {it.ai && <p className="proposal-meta"><b>Reported AI use.</b> {it.ai}</p>}
                              {it.caveat && <p className="proposal-meta proposal-caveat"><b>Caveat.</b> {it.caveat}</p>}
                            </td>
                          </tr>
                        )}
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
              <li key={it.key}>
                <b>{it.key} · {it.title}</b>
                {it.extends.length > 0 && <span className="proposal-extends"> extends {it.extends.map((id, i) => <span key={id}>{i > 0 ? ", " : ""}<a href={`#p/${id}`}>{id}</a></span>)}</span>}
                <p><MathText text={it.note} /></p>
              </li>
            ))}
          </ul>
          <h3 id="np-results">New results suggested by AI</h3>
          <p>Small theorems reached while assessing proposed conjectures. They are proof sketches, not refereed results, and each one states what it leaves open.</p>
          {NEW_RESULTS.map((it) => (
            <article key={it.key} className="proposal proposal-result">
              <div className="badge-row">
                <span className="proposal-key">{it.key}</span>
                <span className="badge st-claimed-solved"><span className="dot" style={{ background: "var(--claimed-solved)" }} />Proof sketch</span>
                {it.extends.length > 0 && <span className="proposal-extends">related to {it.extends.map((id, i) => <span key={id}>{i > 0 ? ", " : ""}<a href={`#p/${id}`}>{id}</a></span>)}</span>}
              </div>
              <h4>{it.title}</h4>
              <p className="proposal-meta">{it.status}</p>
              <p><b>Setting.</b> <MathText text={it.setting} /></p>
              <div className="statement"><MathText text={it.statement} /></div>
              <p><b>Sketch.</b> <MathText text={it.sketch} /></p>
              <p><b>What remains open.</b> <MathText text={it.open} /></p>
              <p className="proposal-meta"><b>Context.</b> {it.baseline}</p>
            </article>
          ))}
          <p className="disclaimer">These proposals were produced by an AI-assisted review and checked against the cited sources, not refereed. A candidate becomes a catalogue entry only after a human curator assigns an ID, statement and baseline through the usual review process.</p>
        </div>
      </section>
      <Footer />
    </>
  );
}

function NotFound() {
  return (
    <>
      <Header />
      <section className="body"><div className="container"><p>Not found. <a href="#">Back home</a>.</p></div></section>
      <Footer />
    </>
  );
}

// ---------- about & similar projects ----------
const AUTHOR_LINKS = [
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=_IWT-z0AAAAJ&hl=en&oi=sra" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jean-philippe-bruneton-a5014822/" },
  { label: "X", href: "https://x.com/_quantumphy_" },
  { label: "GitHub", href: "https://github.com/jpbruneton" },
];
const BOOKS = [
  { title: "Quantum Mechanics — A Modern Introduction", href: "https://quantumlectures.org", desc: "A free, rigorous course on quantum mechanics, from foundational experiments to Hilbert spaces, the postulates and their applications, with worked exercises (English and French)." },
  { title: "Thermodynamics — Elementary and Advanced", href: "https://learnthermo.org", desc: "A free course from the foundational principles to differential geometry, non-equilibrium and quantum thermodynamics, with a library of worked exercises (French, English and more)." },
];
const SIMILAR_PROJECTS = [
  { name: "QIQCOP Zoo", href: "https://qiqc-op.com/", desc: "Quantum Information and Quantum Computation Open Problem Zoo: about 220 audited problems in quantum information, computation, communication, cryptography and error correction, marked Solved or Unsolved, with a public JSON API (source on GitHub: Naixu-Guo/quantum-open-problems). Entries shared with this catalogue are cross-referenced on each problem page." },
  { name: "Open Quantum Problems (IQOQI Vienna)", href: "https://oqp.iqoqi.oeaw.ac.at/open-quantum-problems", desc: "The historical list started by Reinhard Werner, maintained by IQOQI Vienna: about thirty classic questions in entanglement, foundations, communication and complexity, with a separate page of solved problems." },
  { name: "QMBL — Quantum Many-Body Leaderboard", href: "https://github.com/quantum-many-body-leaderboard/open-problems", desc: "A record book of the best verified ground-state energies for hundreds of many-body models without an exact solution (Hubbard, J1–J2, electron gases, hydrogen chains…), designed as a benchmark for scientists and AI systems." },
  { name: "OpenProblemBench", href: "https://arxiv.org/abs/2610.11118", desc: "A benchmark of 82 literature-grounded open problems in mathematics and theoretical physics, including quantum information, used to evaluate AI models on research-level questions (Li et al., October 2026)." },
  { name: "Erdős problems", href: "https://www.erdosproblems.com/", desc: "The database of Paul Erdős's problems that inspired the format of this catalogue: precise statements, status and references. Mathematics rather than physics." },
  { name: "FrontierMath: Open Problems (Epoch AI)", href: "https://epoch.ai/latest/benchmarking-ai-on-unsolved-math-problems", desc: "Unsolved research mathematics problems with computationally verifiable answers, used to benchmark AI systems." },
];

function AboutView() {
  return (
    <>
      <Header crumbs={[{ label: "About & similar projects" }]} />
      <section className="body">
        <div className="container detail">
          <h2>About</h2>
          <p>This catalogue is maintained by <b>Jean-Philippe Bruneton</b>, a physicist at Université Paris Cité, France. His research interests include the laws of gravitation, quantum mechanics and its foundations, and symbolic regression as a machine-learning task. The catalogue is written and reviewed with AI assistance (Astra and Claude Opus 5.5); every update is documented in a dated report, and corrections are welcome through GitHub.</p>
          <div className="about-links">
            {AUTHOR_LINKS.map((l) => <a key={l.label} href={l.href} target="_blank" rel="noreferrer">{l.label}</a>)}
          </div>
          <h3>Course books by the same author</h3>
          <ul className="similar-list">
            {BOOKS.map((b) => (
              <li key={b.href}><h4><a href={b.href} target="_blank" rel="noreferrer">{b.title}</a></h4><p>{b.desc}</p></li>
            ))}
          </ul>
          <h3>Similar projects</h3>
          <p>Other catalogues of open problems, in quantum physics or aimed at AI systems. This catalogue differs by its breadth (spectral theory, many-body physics, QFT, foundations, open systems and undecidability as well as quantum information), by its separate “Claimed solved” status for announced resolutions, and by recording authors' AI-use disclosures.</p>
          <ul className="similar-list">
            {SIMILAR_PROJECTS.map((s) => (
              <li key={s.href}><h4><a href={s.href} target="_blank" rel="noreferrer">{s.name}</a></h4><p>{s.desc}</p></li>
            ))}
          </ul>
          <p><a href="#review">Review &amp; evidence policy →</a></p>
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
          <a href="#review">Evidence policy &amp; catalogue review</a>
          <span className="footer-resources">
            <a href="https://quantumlectures.org/en">Quantum Lectures</a>
            <a className="footer-resource-secondary" href="https://learnthermo.org/">LearnThermo</a>
          </span>
          <span className="astra-credit">powered by Astra &amp; Opus 5.5</span>
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

// Silent, fire-and-forget visit counter: one beacon per page load (hash
// navigation doesn't reload, so it counts site visits). See docs/page-views.md.
function usePageViewBeacon() {
  useEffect(() => {
    const payload = JSON.stringify({ slug: "home" });
    if (navigator.sendBeacon) {
      navigator.sendBeacon("/api/views", new Blob([payload], { type: "application/json" }));
    } else {
      fetch("/api/views", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: payload,
        keepalive: true,
      }).catch(() => {});
    }
  }, []);
}

export default function Page() {
  usePageViewBeacon();
  const route = useHashRoute();
  if (route.view === "category") return <CategoryView key={route.slug} slug={route.slug} />;
  if (route.view === "problem") return <ProblemView id={route.id} />;
  if (route.view === "sharp") return <SharpView />;
  if (route.view === "improved") return <ImprovedView />;
  if (route.view === "claimed-solved") return <ClaimedSolvedView />;
  if (route.view === "review") return <ReviewView />;
  if (route.view === "new-problems") return <NewProblemsView />;
  if (route.view === "about") return <AboutView />;
  return <Home />;
}
