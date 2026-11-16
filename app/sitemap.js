import { ALL_PROBLEMS, CATEGORIES, LITERATURE_UPDATE } from "./data/problems";
import { PROPOSALS } from "./data/proposals";
import { SITE_URL } from "./seo";

// One URL per page; former proposal identifiers are left out (their canonical is the current key).
export default function sitemap() {
  const lastModified = LITERATURE_UPDATE.date;
  const paths = [
    "/", "/new-problems", "/sharp", "/improved", "/claimed-solved", "/lean-verified", "/similar",
    ...CATEGORIES.map((c) => `/c/${c.slug}`),
    ...ALL_PROBLEMS.map((p) => `/p/${p.id}`),
    ...PROPOSALS.flatMap((g) => g.items.map((it) => `/np/${it.key}`)),
  ];
  return paths.map((path) => ({ url: `${SITE_URL}${path}`, lastModified }));
}
