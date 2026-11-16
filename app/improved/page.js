import { ImprovedView } from "../views";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Improved problems",
  description: "Open problems in quantum mechanics with recent partial progress, with source-linked evidence.",
  path: "/improved",
});

export default function Page() {
  return <ImprovedView />;
}
