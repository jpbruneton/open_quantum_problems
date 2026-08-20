"use client";

import { useEffect, useMemo, useState } from "react";
import { MathText } from "./components/Math";
import {
  CATEGORIES,
  PROBLEMS,
  HORIZONS,
  STATUSES,
  problemsByCat,
  getProblem,
  getCategory,
} from "./data/problems";

// ---------- tiny hash router ----------
function useHashRoute() {
  const [hash, setHash] = useState("");
  useEffect(() => {
    const read = () => setHash(window.location.hash.replace(/^#/, ""));
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);
  const parts = hash.split("/").filter(Boolean);
  if (parts[0] === "c" && parts[1]) return { view: "category", slug: parts[1] };
  if (parts[0] === "p" && parts[1]) return { view: "problem", id: parts[1] };
  if (parts[0] === "sharp") return { view: "sharp" };
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
        <h1 className="title">Open Problems in Quantum Mechanics for AI Agents</h1>
        <p className="subtitle">
          An initial list compiled by AI, meant to be reviewed and discussed
          along the way by human researchers and AI agents — who can also
          attack the problems, record progress, and submit improvements or
          solutions.
        </p>
        {crumbs && (
          <nav className="crumbs">
            <a onClick={() => go("")}>Home</a>
            {crumbs.map((c, i) => (
              <span key={i}>
                <span className="sep">/</span>
                {c.to ? <a onClick={() => go(c.to)}>{c.label}</a> : <span>{c.label}</span>}
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
          <p className="last-updated">Last updated: 20 August 2026</p>
          <div className="stats-row">
            <div className="stats">
              <div className="stat"><div className="n">{total}</div><div className="l">Problems</div></div>
              <div className="stat"><div className="n">{CATEGORIES.length}</div><div className="l">Areas</div></div>
              <div className="stat"><div className="n">{nSharp}</div><div className="l">Sharp (solvable)</div></div>
              <div className="stat"><div className="n">{nImproved}</div><div className="l">Improved</div></div>
              <div className="stat"><div className="n">{nSolved}</div><div className="l">Solved</div></div>
            </div>
            <button className="cta-sharp" onClick={() => go("sharp")}>
              ⚡ See all {nSharp} sharp problems
            </button>
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
            <b>Disclaimer:</b> We do not claim that the solutions or improvements
            listed here are all AI-generated. Provenance notes reproduce author
            disclosures or attributed public accounts where available; they are
            not independent determinations by this catalogue.
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
                <div className="card" key={c.slug} onClick={() => go(`c/${c.slug}`)}>
                  <div className="code">{ps.length} problems · IDs {c.code}1–{c.code}{ps.length}</div>
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
                </div>
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
              placeholder="Filter by keyword…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <span className={`chip ${horizon === "all" ? "active" : ""}`} onClick={() => setHorizon("all")}>All horizons</span>
            {Object.keys(HORIZONS).map((h) => (
              <span key={h} className={`chip ${horizon === h ? "active" : ""}`} onClick={() => setHorizon(h)}>
                {HORIZONS[h].label}
              </span>
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
                  <tr key={p.id} onClick={() => go(`p/${p.id}`)}>
                    <td className="id">{p.id}</td>
                    <td className="stmt">
                      <div style={{ fontWeight: 600, marginBottom: 4 }}>{p.title}</div>
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
                  <tr key={p.id} onClick={() => go(`p/${p.id}`)}>
                    <td className="id">{p.id}</td>
                    <td style={{ color: "var(--muted)", fontSize: 13 }}>{getCategory(p.cat).name}</td>
                    <td className="stmt">
                      <div style={{ fontWeight: 600, marginBottom: 4 }}>{p.title}</div>
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

  return (
    <>
      <Header crumbs={[{ label: cat.name, to: `c/${cat.slug}` }, { label: p.id }]} />
      <section className="body">
        <div className="container detail">
          <button className="back" onClick={() => go(`c/${cat.slug}`)}>← {cat.name}</button>
          <div className="badge-row" style={{ margin: "6px 0 2px" }}>
            <span className="badge" style={{ color: "var(--muted)" }}>{p.id}</span>
            <HorizonBadge h={p.horizon} />
            <StatusBadge s={p.status} />
          </div>
          <h2>{p.title}</h2>

          <div className="statement"><MathText text={p.statement} /></div>

          <h4>Context &amp; what is known</h4>
          <div className="context">
            {String(p.context).split(/\n\n+/).map((para, i) => (
              <p key={i}><MathText text={para.trim()} /></p>
            ))}
          </div>

          <h4>References</h4>
          <ul className="refs">
            {p.refs.map((rf, i) => (
              <li key={i}>
                {rf.url ? <a href={rf.url} target="_blank" rel="noreferrer">{rf.label}</a> : rf.label}
              </li>
            ))}
          </ul>

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
                No recorded contributions yet. {p.horizon === "sharp"
                  ? "A complete proof or a single counterexample resolves this problem."
                  : p.horizon === "incremental"
                  ? "An improved bound, a larger tractable class, or a new construction counts as progress."
                  : p.horizon === "programme"
                  ? "This is a long-horizon programme — substantive partial progress or a new sub-result counts."
                  : "This is a conceptual problem without a single agreed success criterion — a new argument, framework, or no-go result counts."}
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

function NotFound() {
  return (
    <>
      <Header />
      <section className="body"><div className="container"><p>Not found. <a onClick={() => go("")}>Back home</a>.</p></div></section>
      <Footer />
    </>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        Open Problems in Quantum Mechanics for AI Agents · {PROBLEMS.length} problems ·
        LaTeX rendered with KaTeX · references are curated entry points, corrections welcome.
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
  if (route.view === "category") return <CategoryView slug={route.slug} />;
  if (route.view === "problem") return <ProblemView id={route.id} />;
  if (route.view === "sharp") return <SharpView />;
  return <Home />;
}
