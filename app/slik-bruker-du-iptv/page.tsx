import type { Metadata } from "next";
import SetupGuide from "@/components/SetupGuide";
import { siteUrl } from "@/lib/seo";
const title = "Slik bruker du IPTV | Installasjon og oppsett";
const description = "Kom i gang med IPTV steg for steg. Les om abonnement, aktivering, kompatible apper, M3U, avspilling og feilsøking på enheten din.";
export const metadata: Metadata = {
  title, description,
  ...(siteUrl ? { alternates: { canonical: `${siteUrl}/slik-bruker-du-iptv` } } : {}),
  openGraph: { title, description, locale: "nb_NO", type: "website", ...(siteUrl ? { url: `${siteUrl}/slik-bruker-du-iptv` } : {}) },
  twitter: { card: "summary_large_image", title, description },
};
export default function Guide() { return <SetupGuide />; }
