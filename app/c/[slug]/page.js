import { notFound } from "next/navigation";
import { CATEGORIES, getCategory } from "../../data/problems";
import { CategoryView } from "../../views";
import { pageMetadata } from "../../seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const c = getCategory(params.slug);
  if (!c) return {};
  return pageMetadata({ title: `${c.name}: open problems`, description: c.blurb, path: `/c/${c.slug}` });
}

export default function Page({ params }) {
  if (!getCategory(params.slug)) notFound();
  return <CategoryView slug={params.slug} />;
}
