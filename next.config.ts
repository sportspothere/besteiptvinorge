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
  experimental: {
    optimizeCss: true,
  },
};
export default nextConfig;
