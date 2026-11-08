"use client";

import { Fragment, useEffect, useMemo, useState } from "react";
import { MathText } from "./components/Math";
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
import { PROPOSALS, SECONDARY_PROPOSALS, PROPOSALS_META, PROPOSAL_COUNT } from "./data/proposals";

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
  if (parts[0] === "new-problems") return { view: "new-problems" };
  if (parts[0] === "np" && parts[1]) return { view: "proposal", key: parts[1] };
  if (parts[0] === "similar" || parts[0] === "about") return { view: "similar" };
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
const LEAN_TITLE = "The main theorem is formalized in Lean according to its authors; the Lean build was not rerun here.";
function LeanBadge({ lean }) {
  if (!lean) return null;
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

function EvidenceList({ items, progressLabels = false }) {
  return (
    <ul className="evidence-list">
      {items.map((item, i) => (
        <li key={i}>
          {item.lean && <LeanBadge lean={{ note: "Formalized in Lean according to the authors; the Lean build was not rerun here." }} />}{item.lean && " "}<span className={`badge ev-${item.kind}`} title={EVIDENCE_KINDS[item.kind]?.desc}>{progressLabels && item.kind === "preprint" ? "Preprint claimed progress" : (EVIDENCE_KINDS[item.kind]?.label || item.kind)}</span>
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
        {crumbs && <a className="gh-link home-link" href="#">← Home</a>}
        <h1 className="title">Open Problems in Quantum Mechanics for AI Agents</h1>
        <p className="subtitle">
          A literature-reviewed catalogue for human researchers and AI agents:
          precise questions, research programmes, known results and the work
          still to do. Corrections and contributions are welcome.
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
        <a className="gh-link about-link" href="#similar">Similar projects</a>
        <span className="powered-by">Powered by Astra &amp; Opus 5.5</span>
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
  const leanVerified = PROBLEMS.filter((p) => p.lean);

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
                {leanVerified.length > 0 && (
                  <div className="stat stat-lean" title={`Claimed solutions whose main theorem is formalized in Lean according to the authors: ${leanVerified.map((p) => p.id).join(", ")}`}>
                    <div className="n">{leanVerified.length}</div><div className="l">Lean verified</div>
                  </div>
                )}
              </div>
              <button className="cta-sharp" onClick={() => go("sharp")}>
                <span aria-hidden="true">🔥</span> See all {nSharp} sharp problems
              </button>
            </div>
            <a className="box box-new" href="#new-problems">
              <div className="box-kicker">New page</div>
              <h2>New problems suggested by AI</h2>
              <p>{PROPOSAL_COUNT} candidate successor questions opened by the 2026 claimed resolutions and {SECONDARY_PROPOSALS.length} secondary leads. Not counted; not yet catalogue entries.</p>
              <span className="box-cta">Browse the proposals <span aria-hidden="true">→</span></span>
            </a>
          </div>

          <div className="review-note">
            <b>Last update · {LITERATURE_UPDATE.label}.</b> {LITERATURE_UPDATE.ids.length - 22} entries updated and 22 new entries added.
            <ul>
              <li>Independent <a href="#p/N2">second proof that dimension six has only three MUBs</a>; experts have engaged with the <a href="#p/M5">Haldane-gap proof</a>.</li>
              <li>OpenAI's announced <a href="#p/QF1">4D Yang–Mills existence proof</a> is not public and does not claim the mass gap.</li>
              <li>Checked against <a href="#similar">similar catalogues</a> (QIQCOP Zoo, IQOQI Vienna): shared problems are now cross-referenced on each page. This found an all-dimension <a href="#p/N1">SIC existence claim</a>, now “Claimed solved”, and added <a href="#p/A20">PARITY ∉ QAC0</a> and eleven other questions.</li>
              <li>Ten classic quant-ph questions added: <a href="#p/B17">Néel order in the 2D spin-½ Heisenberg antiferromagnet</a> (claimed proved on 2 November 2026), the <a href="#p/B18">3D Heisenberg ferromagnet</a>, <a href="#p/A31">unitary synthesis</a>, the <a href="#p/A30">quantum Hamming bound</a>, <a href="#p/B16">3D self-correcting memory</a>, <a href="#p/A26">Quantum Max-Cut</a>, <a href="#p/A29">public-key quantum money</a> and three more.</li>
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
                    <td><StatusBadge s={p.status} />{p.lean && <div style={{ marginTop: 6 }}><LeanBadge lean={p.lean} /></div>}</td>
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
                    <td>{status ? <HorizonBadge h={p.horizon} /> : <StatusBadge s={p.status} />}{p.lean && <div style={{ marginTop: 6 }}><LeanBadge lean={p.lean} /></div>}</td>
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
            <LeanBadge lean={p.lean} />
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
                  {p.archive.targets.map((target) => <li key={target}><a href={`#p/${target}`}>{target} · {getProblem(target)?.title}</a></li>)}
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
                <EvidenceList items={g.items} progressLabels={g.progressLabels} />
              </div>
            ))
          ) : (
            <>
              <h4>Evidence &amp; scope</h4>
              <EvidenceList items={[...p.evidence].sort((a, b) => (a.kind === "withdrawn") - (b.kind === "withdrawn"))} />
            </>
          ))}

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

          {(() => {
            const list = problemsByCat(p.cat);
            const i = list.findIndex((x) => x.id === p.id);
            if (i < 0) return null;
            const prev = list[i - 1];
            const next = list[i + 1];
            return (
              <nav className="proposal-pager" aria-label={`Other entries in ${cat.name}`}>
                {prev ? <a href={`#p/${prev.id}`}>← {prev.id} · {prev.title}</a> : <span />}
                {next ? <a href={`#p/${next.id}`}>{next.id} · {next.title} →</a> : <span />}
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

const ALL_PROPOSALS = PROPOSALS.flatMap((g) => g.items.map((it) => ({ ...it, cat: g.cat, catName: g.name })));

function ProposalView({ pkey }) {
  const idx = ALL_PROPOSALS.findIndex((it) => it.key === pkey);
  if (idx < 0) return <NotFound />;
  const it = ALL_PROPOSALS[idx];
  const prev = ALL_PROPOSALS[idx - 1];
  const next = ALL_PROPOSALS[idx + 1];
  const baseline = it.baseline ? it.baseline.split(/;\s+/).map((s) => s.trim().replace(/\.$/, "").replace(/(?<!\[)arXiv:((?:\d{4}\.\d{4,5}|[a-z-]+\/\d{7})(?:v\d+)?)/g, "[arXiv:$1](https://arxiv.org/abs/$1)")).filter(Boolean) : [];
  return (
    <>
      <Header crumbs={[{ label: "New problems suggested by AI", to: "new-problems" }, { label: it.key }]} />
      <section className="body">
        <div className="container detail">
          <button className="back" onClick={() => go("new-problems")}>← New problems suggested by AI</button>
          <div className="badge-row" style={{ margin: "6px 0 2px" }}>
            <span className="badge" style={{ color: "var(--muted)" }}>{it.key}</span>
            <HorizonBadge h={it.horizon} />
            <span className="badge st-proposed" title="Candidate question, not a catalogue entry"><span className="dot" style={{ background: "var(--muted-2)" }} />Proposed</span>
          </div>
          <h2>{it.title}</h2>

          <div className="xref-block">
            <h4>Grows out of</h4>
            {it.extends.length > 0 ? (
              <ul className="refs xref-list">
                {it.extends.map((id) => <li key={id}><a href={`#p/${id}`}>{id} · {getProblem(id)?.title}</a></li>)}
              </ul>
            ) : <p className="review-meta">No specific catalogue entry.</p>}
          </div>

          <div className="statement"><MathText text={it.statement} /></div>

          <h4>Why it is open now</h4>
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

          {baseline.length > 0 && (
            <>
              <h4>Baseline literature</h4>
              <ul className="refs">{baseline.map((b, i) => <li key={i}><MathText text={b} /></li>)}</ul>
            </>
          )}

          {it.caveat && (<><h4>Caveats</h4><div className="context"><Paras text={it.caveat} /></div></>)}
          {it.ai && (<><h4>Reported AI use</h4><div className="context"><Paras text={it.ai} /></div></>)}

          <p className="disclaimer">Suggested by AI on {PROPOSALS_META.label} ({it.catName}). Not a catalogue entry: no status, not counted, awaiting human selection and critical review. <a href={PROPOSALS_META.reportUrl} target="_blank" rel="noreferrer">Full proposal with verification marks →</a></p>

          <nav className="proposal-pager" aria-label="Other proposals">
            {prev ? <a href={`#np/${prev.key}`}>← {prev.key} · {prev.title}</a> : <span />}
            {next ? <a href={`#np/${next.key}`}>{next.key} · {next.title} →</a> : <span />}
          </nav>
        </div>
      </section>
      <Footer />
    </>
  );
}

function NewProblemsView() {
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
          <p className="intro">Proposed {PROPOSALS_META.label} · {PROPOSAL_COUNT} priority candidates and {SECONDARY_PROPOSALS.length} secondary leads</p>
          <p>We prompted an AI model (Fable 5.1, high effort) to suggest new open problems, starting from the current catalogue and its own knowledge of the literature. It produced {PROPOSAL_COUNT} priority candidates and {SECONDARY_PROPOSALS.length} secondary leads. These suggestions await human selection and critical review. They are not catalogue entries: they carry no status and are not counted.</p>
          <p>Horizons use the same badges as the catalogue, and “extends” links each suggestion to the entries it grows out of. Click a row to open the full page of a suggestion: motivation, baseline literature and caveats.</p>
          <p>Each suggestion was then checked by a separate AI literature review (8 November 2026), which verified the cited sources and searched for prior answers. Its verdict is shown under the status: open and substantive, open but modest, or under review. These verdicts are not human-refereed.</p>
          <p><a href={PROPOSALS_META.reportUrl} target="_blank" rel="noreferrer">Read the full proposal with verification marks and caveats →</a></p>
          <nav className="proposal-nav" aria-label="Areas">
            {PROPOSALS.map((g) => <a key={g.cat} href={`#new-problems`} onClick={(e) => scrollTo(e, g.cat)}>{g.name} ({g.items.length})</a>)}
            <a href="#new-problems" onClick={(e) => scrollTo(e, "secondary")}>Secondary leads ({SECONDARY_PROPOSALS.length})</a>
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
                        <tr onClick={(event) => { if (!event.target.closest("a")) go(`np/${it.key}`); }}>
                          <td className="id">{it.key}</td>
                          <td className="stmt">
                            <div style={{ fontWeight: 600, marginBottom: 4 }}><a href={`#np/${it.key}`} className="row-title">{it.title}</a></div>
                            <div style={{ color: "var(--muted)", fontSize: 13 }}>
                              <MathText text={truncate(it.statement, 150)} />
                            </div>
                            {it.extends.length > 0 && <div className="proposal-extends" style={{ fontSize: 12, marginTop: 4 }}>extends {it.extends.map((id, i) => <span key={id}>{i > 0 ? ", " : ""}<a href={`#p/${id}`}>{id}</a></span>)}</div>}
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
              <li key={it.key}>
                <b>{it.key} · {it.title}</b>
                {it.extends.length > 0 && <span className="proposal-extends"> extends {it.extends.map((id, i) => <span key={id}>{i > 0 ? ", " : ""}<a href={`#p/${id}`}>{id}</a></span>)}</span>}
                <p><MathText text={it.note} /></p>
              </li>
            ))}
          </ul>
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
      <Header crumbs={[{ label: "Not found" }]} />
      <section className="body"><div className="container"><p>Not found. <a href="#">Back home</a>.</p></div></section>
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

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <span>Open Problems in Quantum Mechanics for AI Agents · {PROBLEMS.length} active entries · LaTeX rendered with KaTeX.</span>
        <div className="footer-meta">
          <span className="footer-resources">
            <span className="footer-author">Jean-Philippe Bruneton</span>
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
  if (route.view === "new-problems") return <NewProblemsView />;
  if (route.view === "proposal") return <ProposalView pkey={route.key} />;
  if (route.view === "similar") return <SimilarProjectsView />;
  return <Home />;
}
