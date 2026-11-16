import { FilteredProblemsView } from "../views";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Lean verified problems",
  description: "Claimed solutions whose main theorem is formalized in Lean according to their authors.",
  path: "/lean-verified",
});

export default function Page() {
  return <FilteredProblemsView leanOnly />;
}
