import { NewProblemsView } from "../views";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "New problems suggested by AI",
  description: "Candidate successor questions in quantum mechanics suggested by AI after the 2026 claimed resolutions, with critical review. Not catalogue entries.",
  path: "/new-problems",
});

export default function Page() {
  return <NewProblemsView />;
}
