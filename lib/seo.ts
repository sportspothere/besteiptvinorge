import type { Metadata } from "next";

// Static export: these settings are evaluated at BUILD time, never per request.
const rawUrl = process.env.SITE_URL?.trim();
function productionOrigin(value: string | undefined): string | undefined {
  if (!value) return undefined;
  const url = new URL(value);
  if (url.protocol !== "https:" || url.username || url.password ||
      url.pathname !== "/" || url.search || url.hash ||
      /^(localhost|127\.|\[::1\])/.test(url.hostname)) {
    throw new Error("SITE_URL must be a public HTTPS origin without path, credentials, query or fragment.");
  }
  return url.origin;
}
export const siteUrl = productionOrigin(rawUrl);
export const indexable = process.env.SITE_ENV === "production" && process.env.SEO_INDEXING === "true";
if (indexable && !siteUrl) throw new Error("Indexable production builds require SITE_URL.");

export const homeTitle = "IPTV i Norge – abonnement og oppsett | Beste IPTV i Norge";
export const homeDescription = "Vurderer du TV over internett? Finn informasjon om abonnement, enheter og oppsett hos Beste IPTV i Norge, og spørsmål du bør avklare før du bestiller.";

export const siteMetadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: homeTitle,
  description: homeDescription,
  robots: { index: indexable, follow: true },
  openGraph: {
    title: homeTitle, description: homeDescription, siteName: "Beste IPTV i Norge",
    locale: "nb_NO", type: "website",
    ...(siteUrl ? { images: [{ url: `${siteUrl}/social-card.png`, width: 1200, height: 630, alt: "Beste IPTV i Norge" }] } : {}),
  },
  twitter: { card: "summary_large_image", title: homeTitle, description: homeDescription,
    ...(siteUrl ? { images: [`${siteUrl}/social-card.png`] } : {}),
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=20261020-logo", sizes: "16x16 32x32 48x48", type: "image/x-icon" },
      { url: "/logo/favicon-32.png?v=20261020-logo", sizes: "32x32", type: "image/png" },
      { url: "/logo/favicon-192.png?v=20261020-logo", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=20261020-logo",
    apple: { url: "/logo/apple-touch-icon.png?v=20261020-logo", sizes: "180x180", type: "image/png" },
  },
};

export const homeMetadata: Metadata = {
  ...siteMetadata,
  ...(siteUrl ? { alternates: { canonical: `${siteUrl}/` },
    openGraph: { ...siteMetadata.openGraph, url: `${siteUrl}/` } } : {}),
};
