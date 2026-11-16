"use client";

import { useEffect, useRef, useState } from "react";

// Keyword (and optional horizon) filter over a server-rendered table.
// Rows carry data-search (lowercased text) and data-horizon; the catalogue data
// itself is never shipped to the browser.
export default function ProblemFilter({ ariaLabel, horizons = null, countLabel = null, total, children }) {
  const ref = useRef(null);
  const [q, setQ] = useState("");
  const [horizon, setHorizon] = useState("all");
  const [count, setCount] = useState(total);

  useEffect(() => {
    const box = ref.current;
    if (!box) return;
    const s = q.trim().toLowerCase();
    let n = 0;
    box.querySelectorAll("tr[data-search]").forEach((tr) => {
      const show = (horizon === "all" || tr.dataset.horizon === horizon) && (!s || tr.dataset.search.includes(s));
      tr.hidden = !show;
      if (show) n += 1;
    });
    const empty = box.querySelector("tr[data-empty]");
    if (empty) empty.hidden = n > 0;
    setCount(n);
  }, [q, horizon]);

  return (
    <>
      <div className="toolbar">
        <input aria-label={ariaLabel} placeholder="Filter by keyword…" value={q} onChange={(e) => setQ(e.target.value)} />
        {horizons && (
          <>
            <button className={`chip ${horizon === "all" ? "active" : ""}`} aria-pressed={horizon === "all"} onClick={() => setHorizon("all")}>All horizons</button>
            {Object.entries(horizons).map(([h, label]) => (
              <button key={h} className={`chip ${horizon === h ? "active" : ""}`} aria-pressed={horizon === h} onClick={() => setHorizon(h)}>{label}</button>
            ))}
          </>
        )}
      </div>
      {countLabel && <p className="review-meta" role="status">{count} {countLabel} {count === 1 ? "problem" : "problems"}</p>}
      <div ref={ref}>{children}</div>
    </>
  );
}
