import { notFound } from "next/navigation";
import { PRIORITY_RECORDS } from "../../data/proposals";
import { ProposalView } from "../../views";
import { pageMetadata } from "../../seo";

export const dynamicParams = false;

const find = (key) => PRIORITY_RECORDS.find((it) => it.key === key || it.formerly === key);

// Former identifiers (P1–P81) keep their pages; their canonical URL is the current key.
export function generateStaticParams() {
  return PRIORITY_RECORDS.flatMap((it) => [it.key, it.formerly].filter(Boolean)).map((key) => ({ key }));
}

export function generateMetadata({ params }) {
  const it = find(params.key);
  if (!it) return {};
  return pageMetadata({
    title: `${it.key} · ${it.title} (${it.withdrawal ? "withdrawn proposal" : "proposed problem"})`,
    description: it.withdrawal
      ? `${it.title}. Withdrawn in the 19 November 2026 selection review. Read the reason, sources and original question.`
      : `Candidate open problem suggested by AI, not a catalogue entry (${it.catName}). ${it.statement}`,
    path: `/np/${it.key}`,
  });
}

export default function Page({ params }) {
  if (!find(params.key)) notFound();
  return <ProposalView pkey={params.key} />;
}
