# Footer, setup guide and blog

The existing logo remains next to four link columns on desktop. Smaller widths
use a logo row above two link columns, or one column on narrow phones. The
footer uses the existing brand colors and theme, clear focus indicators and
44 px minimum-height navigation links. Its copyright year is set after mount
using the user's time zone, so the initial client/server markup matches.

There is one global footer in `app/layout.tsx`. Page-specific footers were removed
from the homepage, legal layout, refund page and trial landing page. Checkout,
thank-you and not-found pages now also receive the same global footer. No
payment, price, subscription or contact-form behavior was changed.

## New destinations

- `/slik-bruker-du-iptv`: eight steps covering prerequisites, plan choice,
  activation, app installation, account/M3U entry where supported, playback,
  troubleshooting and WhatsApp support.
- `/blogg`: featured article, responsive cards, four categories, local search,
  useful no-results/reset state. Search does not send queries to a service.
- `/blogg/hvordan-fungerer-iptv`
- `/blogg/sette-opp-iptv-pa-smart-tv`
- `/blogg/hva-bor-du-sjekke-for-du-velger-iptv`
- `/blogg/iptv-fryser-eller-stopper`

Article content lives in `lib/blog.ts`; adding an entry adds its listing,
generated detail route and sitemap entry. No author identities, publication
dates, reviews, certifications or unsupported performance guarantees were added.
No image downloads, new tracking, APIs or dependencies were introduced.

New routes have unique Norwegian metadata and canonicals. Sitemap registration
respects the existing `indexable` setting; indexing configuration was not changed.
The existing unapproved terms route remains excluded from the sitemap.

## Compatibility limitations

The repository has no verified service-specific device/app compatibility matrix.
The guide and Smart TV article explicitly require model/app confirmation before
installation. Manufacturer app-store instructions are general platform guidance,
not a promise that a particular IPTV app works with this subscription. There are
no invented app names, credentials, server addresses, example playlists or screenshots.
Exact app screens and supported models still require owner confirmation.

Primary references for the generic technical instructions:

- https://www.samsung.com/us/support/answer/ANS10005205/
- https://support.google.com/googletv/answer/10050570?hl=en-au
- https://support.google.com/googletv/answer/10070482?hl=en-GB

Generic advice is conditional; no sideloading, region changes or factory resets
are recommended. The trial, payment-link flow and 30-day guarantee wording align
with the owner's previously confirmed information and existing policy pages.

## Verification

Production static build and TypeScript check passed. Browser checks passed at
320, 390, 768 and 1280 px in dark and light themes: four/two/one-column footer,
original logo, one footer per page, current year, all internal destinations and
anchors, metadata, four article routes, search, category filtering, no-results
reset, article navigation and cookie settings. No browser exceptions occurred.
Screenshots were inspected for the footer and blog. No price data changed.
