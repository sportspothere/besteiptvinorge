import type { Metadata } from "next";
import AdLanding from "@/components/AdLanding";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Prøv IPTV gratis i 24 timer | Beste IPTV i Norge",
  description: "Be om en gratis IPTV-prøveperiode på 24 timer. Fyll inn skjemaet og kontakt oss på WhatsApp, Telegram eller Gmail for aktivering.",
  robots: { index: false, follow: true },
  ...(siteUrl ? { alternates: { canonical: `${siteUrl}/tilbud` } } : {}),
};

export default function OfferPage() {
  return <AdLanding />;
}
