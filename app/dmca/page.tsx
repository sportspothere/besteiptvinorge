import type { Metadata } from "next";
import CopyrightPage from "@/components/CopyrightPage";
import { siteUrl } from "@/lib/seo";

const title = "Opphavsrett og DMCA | Beste IPTV Norge";
const description = "Les hvordan Beste IPTV Norge håndterer opphavsrett, DMCA-henvendelser og rapportering av mulige brudd på immaterielle rettigheter.";
export const metadata: Metadata = {
  title, description,
  ...(siteUrl ? { alternates: { canonical: `${siteUrl}/dmca` } } : {}),
  openGraph: { title, description, locale: "nb_NO", type: "website", ...(siteUrl ? { url: `${siteUrl}/dmca` } : {}) },
  twitter: { card: "summary_large_image", title, description },
};
export default function Copyright() { return <CopyrightPage />; }
