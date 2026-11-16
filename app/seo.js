// Per-page metadata helpers for the static routes (titles, descriptions, canonical URLs).
export const SITE_URL = "https://openquantumproblems.com";
export const SITE_NAME = "Open Quantum Problems";

const TEX_SYMBOLS = {
  ge: "≥", geq: "≥", le: "≤", leq: "≤", neq: "≠", ne: "≠", approx: "≈", sim: "∼", simeq: "≃", equiv: "≡",
  dots: "…", ldots: "…", cdots: "⋯", cdot: "·", times: "×", otimes: "⊗", oplus: "⊕", pm: "±",
  infty: "∞", to: "→", rightarrow: "→", mapsto: "↦", in: "∈", notin: "∉", subset: "⊂", subseteq: "⊆",
  langle: "⟨", rangle: "⟩", partial: "∂", nabla: "∇", hbar: "ℏ", sum: "∑", prod: "∏", int: "∫", sqrt: "√",
  alpha: "α", beta: "β", gamma: "γ", delta: "δ", epsilon: "ε", varepsilon: "ε", lambda: "λ", mu: "μ",
  rho: "ρ", sigma: "σ", tau: "τ", phi: "φ", varphi: "φ", psi: "ψ", omega: "ω", theta: "θ", eta: "η", chi: "χ", xi: "ξ", nu: "ν", kappa: "κ",
  Gamma: "Γ", Delta: "Δ", Lambda: "Λ", Sigma: "Σ", Phi: "Φ", Psi: "Ψ", Omega: "Ω", Theta: "Θ",
};

// Readable approximation of inline LaTeX for meta descriptions.
function texToText(m) {
  return m
    .replace(/\\(?:mathrm|mathbb|mathcal|mathsf|mathbf|mathfrak|operatorname|text|textrm|textit|boldsymbol)\{([^{}]*)\}/g, "$1")
    .replace(/\\(?:mathrm|mathbb|mathcal|mathsf|mathbf|mathfrak|operatorname|boldsymbol)\s*/g, "")
    .replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, "($1)/($2)")
    .replace(/\\(left|right|big|Big|bigg|Bigg)\b/g, "")
    .replace(/\\([A-Za-z]+)/g, (_, w) => TEX_SYMBOLS[w] ?? w)
    .replace(/\\[,;:! ]/g, " ")
    .replace(/\\([{}|])/g, "$1")
    .replace(/[_^]\{([^{}]*)\}/g, "$1")
    .replace(/[_^]/g, "")
    .replace(/[{}]/g, "");
}

// Plain text for meta descriptions: drop math delimiters and markdown links/bold.
export function plainText(s, n = 200) {
  let t = String(s || "")
    .replace(/\[([^\]]+)\]\((?:[^()\s]|\([^()\s]*\))+\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\$\$([^$]*)\$\$|\$([^$]*)\$/g, (_, a, b) => texToText(a ?? b))
    .replace(/\s+/g, " ")
    .trim();
  if (t.length > n) t = t.slice(0, t.lastIndexOf(" ", n) > 0 ? t.lastIndexOf(" ", n) : n) + "…";
  return t;
}

export function pageMetadata({ title, description, path }) {
  const desc = plainText(description, 200);
  return {
    title,
    description: desc,
    alternates: { canonical: path },
    openGraph: { type: "article", url: `${SITE_URL}${path}`, siteName: SITE_NAME, title, description: desc,
      images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: SITE_NAME }] },
    twitter: { card: "summary_large_image", creator: "@_quantumphy_", title, description: desc,
      images: [`${SITE_URL}/twitter-image`] },
  };
}
