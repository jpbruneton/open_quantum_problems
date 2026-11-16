import { SharpView } from "../views";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Open sharp problems in quantum mechanics",
  description: "Open sharp problems: precise questions in quantum mechanics that a single proof or counterexample would close.",
  path: "/sharp",
});

export default function Page() {
  return <SharpView />;
}
