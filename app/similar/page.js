import { SimilarProjectsView } from "../views";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Similar projects",
  description: "Other catalogues of open problems in quantum physics or aimed at AI systems.",
  path: "/similar",
});

export default function Page() {
  return <SimilarProjectsView />;
}
