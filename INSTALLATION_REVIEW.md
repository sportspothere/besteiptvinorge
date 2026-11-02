# Installation wizard and guide hub

The installation page now uses one structured device/player/method catalogue
for both the interactive wizard and prerendered guide articles. No accounts or
credentials are collected; selection state stays in React memory. Support URLs
contain device/app/method labels only. No new dependencies or fake screenshots.

## Coverage and validation boundaries

- Six device groups, 22 specific device/unknown choices.
- IBO Player original: Samsung Tizen and LG webOS, MAC/Device Key + M3U.
  The source identifies iboiptv.com as official. Pro variants are not conflated.
- SmartOne: its documented Smart TV, Android TV and Fire OS platforms; the
  documented M3u Playlist upload workflow is used. Store/model availability
  must still be checked. No unofficial APK mirror or sideloading code is offered.
- TiviMate by Armobsoft FZE: Android TV/Google TV devices, M3U and Xtream.
  Not offered on iPhone, ordinary Android phones/tablets, Samsung Tizen or LG.
- VLC by VideoLAN: desktop, Android mobile and iOS network playback, with
  separate menu instructions. No Xtream account or integrated EPG is promised.
- MYTVOnline 2, 3 and 4: only Formuler with the matching installed generation;
  different documented connection menus for portal, XC and M3U.
- MAG: only compatible Linux/WebKit embedded portal interfaces. The page
  explicitly excludes automatically applying these steps to Google TV models.
- Smarters Player Lite (WHMCS SMARTERS) listing is verified in Norwegian App
  Store, including Apple TV and M3U. Its current screen-by-screen login flow is
  not verified; the wizard therefore does not recommend it. Its guide is an
  identification/compatibility article, not a fabricated installation recipe.
- IBO Pro variants, BOB, HOT IPTV, Hot Player (separate products), XCIPTV,
  GSE, OTT Navigator and IPTV Extreme remain explicitly pending manual review.
- Apple TV and other/unknown platforms without an approved recipe get support
  guidance. The registry can add a recipe once availability and actual flow
  have been verified. No unsupported combination generates instructions.

Publisher documentation verifies platform and workflow, not the site's own
subscription compatibility with every app. The UI preserves that distinction.
Owner must confirm exact service access types, device model/region/firmware and
each future app version. No physical player hardware was available for testing.

## Content and SEO

15 permanent guides under `/guider/`, plus a crawlable `/guider` directory and
the interactive `/slik-bruker-du-iptv` hub. Each article has its own introduction,
practical distinctions, metadata, canonical, breadcrumbs/JSON-LD, related guides
and support/hub links. Instructions are prerendered without needing selections
or JavaScript. Blogs now link to relevant device/method guides.

The existing whole-site indexing default remains unchanged. Production
installation pages are explicitly indexable when SITE_URL is set, SITE_ENV is
not staging and SEO_GUIDES_INDEXING is not false. Sitemap and robots sitemap
discovery include these routes independently of the older global SEO_INDEXING
switch. Set SEO_GUIDES_INDEXING=false for a deployment that must not index them.
Search-engine indexing/ranking itself is not guaranteed.

## Primary sources checked on 2 November 2026

- https://iboiptv.com/support
- https://frontend.iboplayer.com/faq
- https://smartone-iptv.com/
- https://smartone-iptv.com/plugin/smart_one/main_generate
- https://smartone-iptv.com/iptv-application-for-amazon-firetv
- https://play.google.com/store/apps/details?id=ar.tvplayer.tv
- https://tivimate.com/
- https://apps.apple.com/no/app/smarters-player-lite/id1628995509
- https://docs.videolan.me/vlc-user/desktop/3.0/en/basic/media.html
- https://laviedegeorge.videolan.me/vlc-user/3.0/en/gettingstarted/interface/android/index.html
- https://docs.videolan.me/vlc-user/ios/3.X/en/gettingstarted/media_synchronization.html
- https://github.com/videolan/vlc-ios/blob/master/Resources/fr.lproj/Localizable.strings
- https://support.formuler.tv/kb/article/63-how-to-set-up-portals-on-mytvonline-mac-id-xc-m3u/
- https://wiki.infomir.eu/eng/set-top-box/stb-linux-webkit/embedded-portal/system-settings

Some official sites are client-rendered or blocked by the web reader; search
index extracts were used where available. We did not substitute reseller
activation pages for verified official domains.

## Verification completed

- Static production build and integrated TypeScript check passed. The ordinary
  local staging build also passed and correctly kept guides noindex.
- Production export: guide robots metadata is index/follow, the 17 installation
  URLs are included in sitemap.xml, and robots.txt advertises that sitemap.
- Five persisted regression tests pass with `node --test tests/installation.test.cjs`.
- Exhaustive catalogue check: 37 supported recipe combinations; unsupported
  device/player/method combinations return no instructions.
- Browser journeys passed for Samsung/IBO, LG/SmartOne, Android TV/TiviMate,
  Fire TV/SmartOne, iPhone/VLC, Android mobile/VLC, Windows/VLC, macOS/VLC,
  all three MYTVOnline generations and MAG portal.
- Unknown device and Apple TV correctly produce support guidance, not fabricated
  recipes. Back preserves choices, changing devices clears incompatible choices,
  and restart clears the selection. Keyboard Enter selection works.
- Dark/light layouts checked at 320, 390, 768 and 1280 px. Screenshots inspected.
- All 15 permanent pages have one H1, unique titles/descriptions, canonicals,
  prerendered content, breadcrumbs/JSON-LD; 32 internal destinations and anchors
  passed. No browser exceptions or credential fields were found.

Browser verification uses the local export and does not contact IPTV servers,
submit real credentials or verify playback of the owner's actual subscription.

## Form-style design revision

- The wizard starts with “Velg min enhet”; device choices remain collapsed until
  the visitor starts. Eight category tiles cover all 22 devices.
- Device selection opens the player screen automatically. A player with one
  supported connection method opens its guide immediately; multiple methods
  reveal a connection screen. Unsupported choices open WhatsApp help.
- Circular progress indicators, navy panels, red completed steps and gold active
  steps/buttons follow the existing brand. Guide cards use the same palette.
- The revised static build and five regression tests pass. Browser verification
  passes 12 automatic journeys, back/reset, support fallbacks, keyboard selection,
  no credential fields and dark/light layouts at 320/390/768/1280 px, with no
  browser exceptions. Mobile screenshots were inspected.
- Source publication does not verify the live hosting deployment.

### Smart TV player selection update

All Smart TV models now show IBO Player, SmartOne IPTV, BOB Player, TiviMate,
IPTV Smarters, HOT IPTV and XCIPTV before the other-app/help choices. The display
catalogue is separate from verified recipe compatibility. Choices without a
verified recipe open support and include the selected app in the WhatsApp message.
TiviMate's platform note remains visible on Samsung and LG.
Completed progress circles now use a subtle gold outline/checkmark on navy (or
pale gold in light mode), with a gold connector; the active circle stays gold.
Six data regression tests and the static build pass.

The complete seven-player selection now appears for all 22 devices, across all
eight category tiles. Device-specific players (VLC, MYTVOnline and MAG portal)
remain available after these choices without duplicates. Notes use device-neutral
wording. Recipe compatibility and WhatsApp fallback behavior remain unchanged.
Regression coverage checks the player list and specialist apps for every device.
