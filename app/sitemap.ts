import type { MetadataRoute } from "next";
import { indexable, siteUrl } from "@/lib/seo";
import { articles } from "@/lib/blog";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!indexable || !siteUrl) return [];
  return ["/", "/refusjonspolicy", "/personvernerklaering", "/dmca", "/blogg", "/slik-bruker-du-iptv", ...articles.map(a => `/blogg/${a.slug}`)].map(path => ({ url: `${siteUrl}${path}` }));
}
