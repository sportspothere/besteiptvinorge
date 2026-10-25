import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  // Hostinger's Next.js hosting serves .next using next start.
  // Keep manual public_html uploads available through npm run build:static.
  output: process.env.STATIC_EXPORT === "true" ? "export" : undefined,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
  poweredByHeader: false,
  // Static exports must configure equivalent headers on their web host.
  ...(process.env.STATIC_EXPORT === "true" ? {} : {
    async headers() {
      return [{
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Content-Security-Policy", value: "base-uri 'self'; object-src 'none'; frame-ancestors 'none'" },
        ],
      }];
    },
  }),
};
export default nextConfig;
