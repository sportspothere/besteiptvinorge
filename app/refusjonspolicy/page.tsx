import type { Metadata } from "next";
import RefundPolicy from "@/components/RefundPolicy";
import { siteUrl } from "@/lib/seo";

const title = "Refusjonspolicy | 30 dagers pengene-tilbake-garanti";
const description = "Les vår refusjonspolicy og få informasjon om 30 dagers pengene-tilbake-garanti, refusjonsforespørsler og tilbakebetaling.";

export const metadata: Metadata = {
  title, description,
  ...(siteUrl ? { alternates: { canonical: `${siteUrl}/refusjonspolicy` } } : {}),
  openGraph: { title, description, locale: "nb_NO", type: "website", ...(siteUrl ? { url: `${siteUrl}/refusjonspolicy` } : {}) },
  twitter: { card: "summary_large_image", title, description },
};

export default function RefundPage() {
  return <RefundPolicy />;
}
