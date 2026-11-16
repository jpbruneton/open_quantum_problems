import { notFound } from "next/navigation";
import { PROPOSALS } from "../../data/proposals";
import { ProposalView } from "../../views";
import { pageMetadata } from "../../seo";

export const dynamicParams = false;

const ALL_PROPOSALS = PROPOSALS.flatMap((g) => g.items.map((it) => ({ ...it, catName: g.name })));
const find = (key) => ALL_PROPOSALS.find((it) => it.key === key || it.formerly === key);

// Former identifiers (P1–P81) keep their pages; their canonical URL is the current key.
export function generateStaticParams() {
  return ALL_PROPOSALS.flatMap((it) => [it.key, it.formerly].filter(Boolean)).map((key) => ({ key }));
}

export function generateMetadata({ params }) {
  const it = find(params.key);
  if (!it) return {};
  return pageMetadata({
    title: `${it.key} · ${it.title} (proposed problem)`,
    description: `Candidate open problem suggested by AI, not a catalogue entry (${it.catName}). ${it.statement}`,
    path: `/np/${it.key}`,
  });
}

export default function Page({ params }) {
  if (!find(params.key)) notFound();
  return <ProposalView pkey={params.key} />;
}
