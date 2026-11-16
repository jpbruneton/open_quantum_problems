import { TrendsView } from "../views";
import { pageMetadata } from "../seo";

// Draft page: reachable at /trends, kept out of search engines and the sitemap until published.
export const metadata = {
  ...pageMetadata({
    title: "Quantum trends",
    description: "Rising and declining topics in quant-ph, November 2024 to November 2026, and where the catalogue stands.",
    path: "/trends",
  }),
  robots: { index: false, follow: true },
};

export default function Page() {
  return <TrendsView />;
}
