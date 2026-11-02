import type { MetadataRoute } from "next";
import { indexable, installationIndexable, siteUrl } from "@/lib/seo";
export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots {
  // Let crawlers read staging noindex. Robots exclusion alone cannot remove URLs.
  return { rules: { userAgent: "*", allow: "/" },
    ...((indexable || installationIndexable) && siteUrl ? { sitemap: `${siteUrl}/sitemap.xml` } : {}) };
}
