import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InstallationGuideArticle from "@/components/InstallationGuideArticle";
import { installationGuides, findInstallationGuide } from "@/lib/installation-guides";
import { installationIndexable, siteUrl } from "@/lib/seo";
type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return installationGuides.map(g => ({ slug: g.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guide = findInstallationGuide((await params).slug); if (!guide) notFound();
  const title = `${guide.title} | Beste IPTV Norge`;
  return { title, description: guide.description, robots: { index: installationIndexable, follow: true },
    ...(siteUrl ? { alternates: { canonical: `${siteUrl}/guider/${guide.slug}` } } : {}),
    openGraph: { title, description: guide.description, type: "article", locale: "nb_NO", ...(siteUrl ? { url: `${siteUrl}/guider/${guide.slug}` } : {}) },
  };
}
export default async function Guide({ params }: Props) {
  const guide = findInstallationGuide((await params).slug); if (!guide) notFound();
  const breadcrumb = siteUrl ? { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hjem", item: `${siteUrl}/` },
    { "@type": "ListItem", position: 2, name: "Installasjonsguider", item: `${siteUrl}/guider` },
    { "@type": "ListItem", position: 3, name: guide.title, item: `${siteUrl}/guider/${guide.slug}` },
  ] } : null;
  return <>{breadcrumb && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb).replace(/</g, "\\u003c") }} />}<InstallationGuideArticle guide={guide} /></>;
}
