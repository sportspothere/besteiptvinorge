import type { Metadata } from "next";
import PrivacyPage from "@/components/PrivacyPage";
import { siteUrl } from "@/lib/seo";

const title = "Personvernerklæring | Beste IPTV Norge";
const description = "Les hvordan Beste IPTV Norge behandler personopplysninger, beskytter kundedata, bruker informasjonskapsler og ivaretar dine personvernrettigheter.";
export const metadata: Metadata = {
  title, description,
  ...(siteUrl ? { alternates: { canonical: `${siteUrl}/personvernerklaering` } } : {}),
  openGraph: { title, description, locale: "nb_NO", type: "website", ...(siteUrl ? { url: `${siteUrl}/personvernerklaering` } : {}) },
  twitter: { card: "summary_large_image", title, description },
};
export default function Privacy() { return <PrivacyPage />; }
