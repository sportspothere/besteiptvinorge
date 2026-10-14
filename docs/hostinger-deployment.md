# Hostinger deployment

The supplied failed deployment log shows a Turbopack PostCSS worker crash. The build script now explicitly uses Next.js's supported Webpack bundler. The npm audit findings in that log are separate from this build failure; dependencies were not automatically upgraded or force-fixed.

For Hostinger's **Next.js web app** integration:

- Repository: `sportspothere/besteiptvinorge`, branch `main`.
- Build command: `npm run build`.
- Output directory: `.next`.
- Start command, if requested: `npm start`.
- Node version: use Hostinger's supported Node 22 setting.
- Leave `STATIC_EXPORT` unset or set it to `false`.
- Domain: `besteiptvinorge.com`; `SITE_URL` is already in `.env.production`.

The default build now generates the normal Next.js server output expected by this hosting flow. Content remains prerendered; the design and routes are unchanged. Indexing stays disabled by default; the prior business-fact review is still outstanding.

For **manual static hosting** in `public_html`, run `npm run build:static` and upload the contents of `out/`. Do not use `npm start` with a static export. The two build modes are alternatives; run the appropriate command for your host.

Validation is local, not confirmation of a successful Hostinger deployment. After fetching the updated commit, retry Hostinger's deployment and check the new log. No automatic redeploy was requested through Hostinger tools; a connected GitHub integration may redeploy automatically on push.

Local verification passed for the Webpack build, its integrated TypeScript check, and `node scripts/check-hostinger.cjs`. The server check starts the actual Next.js production server and verifies homepage 200, purchased-domain canonical metadata, current noindex behavior, crawl files, social image and a real 404 response. The static export and existing SEO checks also pass. Hostinger's Linux/Node 22 environment has not been reproduced locally.
