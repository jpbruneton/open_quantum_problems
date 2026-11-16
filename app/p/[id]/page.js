import { notFound } from "next/navigation";
import { ALL_PROBLEMS, getProblem, getCategory } from "../../data/problems";
import { ProblemView } from "../../views";
import { pageMetadata } from "../../seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return ALL_PROBLEMS.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }) {
  const p = getProblem(params.id);
  if (!p) return {};
  return pageMetadata({
    title: `${p.id} · ${p.title}`,
    description: `${getCategory(p.cat).name}. ${p.statement}`,
    path: `/p/${p.id}`,
  });
}

export default function Page({ params }) {
  if (!getProblem(params.id)) notFound();
  return <ProblemView id={params.id} />;
}
