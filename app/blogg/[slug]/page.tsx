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
  const title = article.metaTitle ?? `${article.title} | Beste IPTV Norge`;
  const description = article.metaDescription ?? article.excerpt;
  return {
    title, description,
    ...(siteUrl ? { alternates: { canonical: `${siteUrl}/blogg/${article.slug}` } } : {}),
    openGraph: { title, description, locale: "nb_NO", type: "article", ...(siteUrl ? { url: `${siteUrl}/blogg/${article.slug}` } : {}), ...(article.hero ? { images: [{ url: article.hero.src, width: article.hero.width, height: article.hero.height, alt: article.hero.alt }] } : {}) },
    twitter: { card: "summary_large_image", title, description },
  };
}
export default async function ArticlePage({ params }: Props) {
  const article = getArticle((await params).slug);
  if (!article) notFound();
  const faq = article.sections.flatMap(s => s.faq ?? []);
  const faqLd = faq.length ? { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) } : null;
  return <>{faqLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd).replace(/</g, "\\u003c") }} />}<BlogArticle article={article} /></>;
}
