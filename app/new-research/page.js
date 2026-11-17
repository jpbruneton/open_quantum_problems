import { NewResearchView } from "../views";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "New Research",
  description: "Research notes, exact certificates and reproducible checks arising from the Open Quantum Problems catalogue.",
  path: "/new-research",
});

export default function Page() {
  return <NewResearchView />;
}
