import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticle from "@/components/BlogArticle";
import { articles, getArticle } from "@/lib/blog";
import { siteUrl } from "@/lib/seo";
export const dynamicParams = false;
export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })); }
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticle((await params).slug);
  if (!article) notFound();
  const title = `${article.title} | Beste IPTV Norge`;
  return {
    title, description: article.excerpt,
    ...(siteUrl ? { alternates: { canonical: `${siteUrl}/blogg/${article.slug}` } } : {}),
    openGraph: { title, description: article.excerpt, locale: "nb_NO", type: "article", ...(siteUrl ? { url: `${siteUrl}/blogg/${article.slug}` } : {}) },
    twitter: { card: "summary_large_image", title, description: article.excerpt },
  };
}
export default async function ArticlePage({ params }: Props) {
  const article = getArticle((await params).slug);
  if (!article) notFound();
  return <BlogArticle article={article} />;
}
