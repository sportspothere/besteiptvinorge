import type { Metadata } from "next";
import InstallationHub from "@/components/InstallationHub";
import { siteUrl, installationIndexable } from "@/lib/seo";
const title = "IPTV Installasjonsguide – Slik setter du opp IPTV";
const description = "Velg enhet, IPTV-app og tilkobling i veiviseren. Få stegvis hjelp til M3U, Xtream Codes, MAC og portaloppsett, eller les en fast installasjonsguide.";
export const metadata: Metadata = {
  title, description,
  robots: { index: installationIndexable, follow: true },
  ...(siteUrl ? { alternates: { canonical: `${siteUrl}/slik-bruker-du-iptv` } } : {}),
  openGraph: { title, description, locale: "nb_NO", type: "website", ...(siteUrl ? { url: `${siteUrl}/slik-bruker-du-iptv` } : {}) },
  twitter: { card: "summary_large_image", title, description },
};
export default function Guide() { return <InstallationHub />; }
