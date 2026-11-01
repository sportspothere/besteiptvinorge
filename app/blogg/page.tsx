import type { Metadata } from "next";
import BlogIndex from "@/components/BlogIndex";
import { siteUrl } from "@/lib/seo";
const title = "IPTV-blogg | Guider, oppsett og gode råd";
const description = "Les praktiske IPTV-guider på norsk. Lær om abonnement, Smart TV, installasjon og feilsøking, og finn svar før og etter bestilling.";
export const metadata: Metadata = {
  title, description,
  ...(siteUrl ? { alternates: { canonical: `${siteUrl}/blogg` } } : {}),
  openGraph: { title, description, locale: "nb_NO", type: "website", ...(siteUrl ? { url: `${siteUrl}/blogg` } : {}) },
  twitter: { card: "summary_large_image", title, description },
};
export default function Blog() { return <BlogIndex />; }
