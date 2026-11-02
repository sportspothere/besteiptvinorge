import type { MetadataRoute } from "next";
import { indexable, installationIndexable, siteUrl } from "@/lib/seo";
import { articles } from "@/lib/blog";
import { installationGuides } from "@/lib/installation-guides";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];
  const pages = indexable ? ["/", "/refusjonspolicy", "/personvernerklaering", "/dmca", "/blogg", ...articles.map(a => `/blogg/${a.slug}`)] : [];
  if (installationIndexable) pages.push("/slik-bruker-du-iptv", "/guider", ...installationGuides.map(g => `/guider/${g.slug}`));
  return pages.map(path => ({ url: `${siteUrl}${path}` }));
}
