"use client";

import { useEffect, useMemo, useState } from "react";
import { MathText } from "./components/Math";
import {
  CATEGORIES,
  PROBLEMS,
  ARCHIVED_PROBLEMS,
  REVIEW,
  LITERATURE_UPDATE,
  EVIDENCE_KINDS,
  WATCHLIST,
  HORIZONS,
  STATUSES,
  problemsByCat,
  getProblem,
  getCategory,
  consolidatedInto,
} from "./data/problems";

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
  if (parts[0] === "review") return { view: "review" };
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
    <span className={`badge st-${s}`} title={`Status: ${STATUSES[s].label}`}>
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
        <a className="gh-link review-link" href="#review">Review &amp; evidence policy</a>
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
  const nSolved = PROBLEMS.filter((p) => p.status === "solved").length;
  const nImproved = PROBLEMS.filter((p) => p.status === "improved").length;

  return (
    <>
      <Header />
      <section className="body">
        <div className="container">
          <p className="last-updated">Literature update: {LITERATURE_UPDATE.label} · Full review: {REVIEW.label}</p>
          <div className="stats-row">
            <div className="stats">
              <div className="stat"><div className="n">{total}</div><div className="l">Active entries</div></div>
              <div className="stat"><div className="n">{CATEGORIES.length}</div><div className="l">Areas</div></div>
              <div className="stat"><div className="n">{nSharp}</div><div className="l">Sharp questions</div></div>
              <div className="stat"><div className="n">{nImproved}</div><div className="l">Improved</div></div>
              <div className="stat"><div className="n">{nSolved}</div><div className="l">Solved</div></div>
            </div>
            <button className="cta-sharp" onClick={() => go("sharp")}>
              ⚡ See all {nSharp} sharp problems
            </button>
          </div>

          <div className="review-note">
            <b>Latest literature update.</b> {LITERATURE_UPDATE.ids.length} entries updated, including
            {" "}<a href="#p/C4">a claimed general strong converse</a> and
            {" "}<a href="#p/C5">private-capacity superactivation</a>. New results are attributed
            preprint claims. <a href="#review">Sources &amp; scope →</a>
          </div>
          <div className="review-note">
            <b>Full catalogue review.</b> All {REVIEW.reviewed} original entries reassessed;
            {" "}{REVIEW.added} questions added or promoted. Merged entries and background pages
            remain accessible but are excluded from active counts. <a href="#review">What changed →</a>
          </div>

          <p className="intro" style={{ marginTop: 26 }}>
            Each problem carries a <b>horizon</b> badge indicating what would
            count as progress:
          </p>
          <div className="legend">
            {Object.entries(HORIZONS).map(([k, v]) => (
              <span className="item" key={k}>
                <span className="dot" style={{ background: `var(--${k})` }} />
                <b style={{ color: "var(--text)" }}>{v.label}</b>&nbsp;— {v.desc}
              </span>
            ))}
          </div>
          <p className="disclaimer">
            <b>Evidence matters:</b> “Improved” records partial progress, which may
            include a preprint claim; it does not mean the problem is solved or
            the proof independently verified. Author-reported AI use is recorded
            separately from mathematical status. No disclosure does not mean no AI use.
          </p>

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
                  <th style={{ width: 110 }}>Status</th>
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

// ---------- sharp problems (all categories) ----------
function SharpView() {
  const [q, setQ] = useState("");

  const rows = useMemo(() => {
    let ps = PROBLEMS.filter((p) => p.horizon === "sharp");
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
  }, [q]);

  return (
    <>
      <Header crumbs={[{ label: "Sharp problems" }]} />
      <section className="body">
        <div className="container">
          <p className="intro">
            Sharp problems: a single proof or counterexample closes them.
            These are the cleanest targets for a solution.
          </p>

          <div className="toolbar">
            <input
              aria-label="Filter sharp questions"
              placeholder="Filter by keyword…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th style={{ width: 56 }}>ID</th>
                  <th style={{ width: 170 }}>Area</th>
                  <th>Problem</th>
                  <th style={{ width: 110 }}>Status</th>
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
                    <td><StatusBadge s={p.status} /></td>
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
          <p>A targeted check of recent arXiv submissions updated {LITERATURE_UPDATE.ids.length} entries:
            {" "}{LITERATURE_UPDATE.ids.map((id, i) => <span key={id}>{i > 0 ? ", " : ""}<a href={`#p/${id}`}>{id}</a></span>)}.
            The remaining entries retain their earlier review dates. This is a literature and scope check, not an independent verification of the proofs.</p>
          <p>C4 now records a claimed resolution for all finite-dimensional memoryless channels, pending independent assessment.
            C5 records claimed superactivation of operational private capacity. Both retain “Improved”; no entry was promoted to “Solved” in this update.</p>
          <p><a href={LITERATURE_UPDATE.reportUrl} target="_blank" rel="noreferrer">Read the dated update, source versions and remaining questions →</a></p>
          <p className="intro">Full catalogue review · {REVIEW.label}</p>
          <p>All {REVIEW.reviewed} original entries were reassessed. The review recommended retaining 27, reframing 74, consolidating nine and moving one broad methods proposal to background. Twelve missing or underexposed questions have now been added or promoted.</p>
          <p>There are currently {PROBLEMS.length} active entries across {CATEGORIES.length} areas. Stable IDs are never renumbered: the gaps in a category’s numbering reflect consolidation, not missing pages.</p>
          <p><a href={REVIEW.reportUrl} target="_blank" rel="noreferrer">Read the complete audit and its four source-linked appendices →</a></p>

          <h4>How to read a problem</h4>
          <p>The statement specifies the target and assumptions. The context separates known results, solved subcases and the open residual. A sharp question has a definite resolution; an incremental target, programme or conceptual issue need not.</p>
          <p>“Improved” means relevant progress is recorded, including a claimed resolution awaiting assessment; it does not mean every result has been independently validated. A restricted theorem does not settle a broader question. Computational hardness, uncomputability and failure of a particular method are different claims.</p>
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

function NotFound() {
  return (
    <>
      <Header />
      <section className="body"><div className="container"><p>Not found. <a href="#">Back home</a>.</p></div></section>
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
          <span className="astra-credit">powered by Astra</span>
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

export default function Page() {
  const route = useHashRoute();
  if (route.view === "category") return <CategoryView key={route.slug} slug={route.slug} />;
  if (route.view === "problem") return <ProblemView id={route.id} />;
  if (route.view === "sharp") return <SharpView />;
  if (route.view === "review") return <ReviewView />;
  return <Home />;
}
