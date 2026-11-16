"use client";

import { useEffect } from "react";

// Old links used a hash router (#p/A23, #c/spectral, #np/PU2, #improved…).
// Send them to the matching static page so shared links keep working.
const HASH_ROUTES = /^\/?((?:p|c|np)\/[^/?#]+|sharp|improved|claimed-solved|lean-verified|new-problems|similar)\/?$/;

function redirectLegacyHash() {
  const hash = window.location.hash.replace(/^#/, "");
  if (!hash) return false;
  if (hash === "about") {
    window.location.replace("/similar");
    return true;
  }
  const m = hash.match(HASH_ROUTES);
  if (!m) return false;
  window.location.replace(`/${m[1]}`);
  return true;
}

// Silent visit counter (see docs/page-views.md): one beacon per browser session,
// since every page is now a full load.
function sendVisitBeacon() {
  try {
    if (sessionStorage.getItem("oqm:visit")) return;
    sessionStorage.setItem("oqm:visit", "1");
  } catch {
    // storage unavailable: count this load
  }
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
}

// Table rows with data-href open their page when clicked outside a link.
function onRowClick(event) {
  if (event.defaultPrevented || event.button !== 0 || event.target.closest("a, button, input")) return;
  const row = event.target.closest("tr[data-href]");
  if (!row) return;
  if (event.metaKey || event.ctrlKey) window.open(row.dataset.href, "_blank");
  else window.location.href = row.dataset.href;
}

export default function ClientEffects() {
  useEffect(() => {
    if (redirectLegacyHash()) return;
    sendVisitBeacon();
    window.addEventListener("hashchange", redirectLegacyHash);
    document.addEventListener("click", onRowClick);
    return () => {
      window.removeEventListener("hashchange", redirectLegacyHash);
      document.removeEventListener("click", onRowClick);
    };
  }, []);
  return null;
}
