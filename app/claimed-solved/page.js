import { ClaimedSolvedView } from "../views";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Claimed solved problems",
  description: "Open problems in quantum mechanics with an announced full resolution awaiting independent assessment.",
  path: "/claimed-solved",
});

export default function Page() {
  return <ClaimedSolvedView />;
}
