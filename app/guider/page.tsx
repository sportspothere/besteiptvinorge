import type { Metadata } from "next";
import InstallationHub from "@/components/InstallationHub";
import { installationIndexable, siteUrl } from "@/lib/seo";
const title = "IPTV-guider | Enheter, apper og tilkobling";
const description = "Finn norske installasjonsguider for Samsung, LG, Android TV, Fire TV, iPhone, VLC, IBO Player, TiviMate, Formuler og MAG.";
export const metadata: Metadata = {
  title, description, robots: { index: installationIndexable, follow: true },
  ...(siteUrl ? { alternates: { canonical: `${siteUrl}/guider` } } : {}),
  openGraph: { title, description, locale: "nb_NO", type: "website", ...(siteUrl ? { url: `${siteUrl}/guider` } : {}) },
};
export default function Guides() { return <InstallationHub catalogue />; }
