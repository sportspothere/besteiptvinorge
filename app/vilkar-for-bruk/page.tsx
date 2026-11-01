import type { Metadata } from "next";
import TermsPage from "@/components/TermsPage";
import { siteUrl } from "@/lib/seo";

const title = "Vilkår for bruk | Beste IPTV Norge";
const description = "Les vilkårene for Beste IPTV Norge. Informasjon om IPTV-abonnement, betaling, aktivering, gratis prøveperiode, refusjon og kundens rettigheter.";

export const metadata: Metadata = {
  title, description,
  // Keep the unapproved draft out of search results. Set approval date and
  // remove this override only after the items in TERMS_REVIEW.md are resolved.
  robots: { index: false, follow: true },
  ...(siteUrl ? { alternates: { canonical: `${siteUrl}/vilkar-for-bruk` } } : {}),
  openGraph: { title, description, locale: "nb_NO", type: "website", ...(siteUrl ? { url: `${siteUrl}/vilkar-for-bruk` } : {}) },
  twitter: { card: "summary_large_image", title, description },
};

export default function Terms() {
  return <TermsPage />;
}
