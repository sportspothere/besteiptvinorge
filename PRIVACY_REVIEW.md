# Privacy implementation and owner follow-up

Privacy route: `/personvernerklaering`. Text updated on 1 November 2026,
the actual editing date, not an asserted historical publication date.
No draft/approval banner was added, following the owner's earlier preference.

## Verified from the project

- Contact form: name, email, message. Opens a WhatsApp URL with the encoded text.
- Trial/order form: full name, email, phone, country; plan, period, device count,
  price. Prepares a message; customer opens WhatsApp and sends it there.
- No app API routes, customer database, payment gateway SDK, email sender,
  newsletter system or separate analytics service was found.
- Customer fields live in page/form memory, not localStorage. The WhatsApp URL
  can appear in browser history and WhatsApp drafts: disclosed on the page.
- Browser storage: `theme` in localStorage, `promo_dismissed` in sessionStorage.
- Existing Meta Pixel ID `1681468993112360` previously loaded unconditionally,
  including a noscript tracking image. Both unconditional paths were removed.
- New consent controls: default off, equally styled accept/reject/customize,
  marketing toggle off by default, settings links in the common footer and
  custom checkout/trial/thank-you flows, versioned local choice expiring at 180
  days. New consent required when the record is invalid, expired or missing.
- Pixel loads only after positive consent. Automatic event configuration is
  disabled; the explicitly configured event is PageView. No form field data is
  passed as custom tracking parameters. Actual Meta account settings and its
  library behavior require independent review.
- Withdrawal revokes Meta consent, expires accessible `_fbp`/`_fbc` first-party
  cookies, and reloads to unload the library and cancel pending requests. Consent
  changes sync to other open tabs. Previously sent data and Meta third-party
  cookies cannot be erased by this code; that limitation is disclosed.
- Consent is kept locally, not on a central consent-log server.
- Docs/workflow identify Hostinger as the intended host; active hosting and
  provider log settings are not verified. Next.js config declares security
  headers; static hosting requires equivalent host configuration.

## Confirmed by the owner during this task

- Business name supplied: `besteiptvinorge`; country: Norway.
- Payment services: bank bunq and Binance. Not assumed to be website SDK
  integrations: team sends payment links after website/WhatsApp order enquiries.
- Plan prices are total payable; activation follows payment confirmation.

## Still requiring owner confirmation

1. Full legal identity of the controller, legal form and business address.
   The policy identifies the supplied name/country and states the remaining gap.
2. Actual hosting entity, infrastructure/account-activation providers, processing
   locations and all subprocessors. Review contracts/DPAs and controller roles.
3. Exact bunq/Binance service and contracting entity, data fields received/stored,
   transaction references and refund records. No assertion that full card data
   is never stored anywhere in the payment chain or that certifications apply.
4. International transfers and lawful safeguards for each service, including
   WhatsApp and Meta. No blanket SCC/adequacy claim was invented. Consent to a
   pixel does not establish an international transfer mechanism.
5. Fixed retention/deletion schedules for accounts, orders, payments, support,
   infrastructure/security logs and any external marketing/consent records.
6. Documented legitimate-interest assessments; actual accounting obligations.
7. Age eligibility and child-data procedures; no 18+ rule or age verification
   was invented, and the terms retain their current age-neutral wording.
8. Actual access controls, incident handling, backup and update practices.
9. Any off-site advertising communications and opt-out processes.
10. Meta account configuration, accessible cookie lifetimes and provider data
    retention; whether optional marketing should stay enabled at all pending
    controller/transfer review. Page consent alone is not certification of
    complete privacy compliance.

## Primary sources consulted

The supplied reference URL was unavailable; Norwegian wording is original and
follows the owner's requested 14 sections.

- https://www.datatilsynet.no/
- https://lovdata.no/lov/2024-12-13-76/%C2%A713-1
- https://lovdata.no/dokument/NL/lov/2018-06-15-38/kapiii
- https://www.bunq.com/documents/privacy-policy
- https://www.binance.com/en/about-legal/privacy-portal
- https://www.whatsapp.com/legal/privacy-policy-eea

Legal layout was extracted from the existing terms component without redesign;
terms now link to the actual privacy page. Policy includes rights, per-purpose
legal bases, local storage details and a real last-updated date. Existing prices,
plan options and WhatsApp workflow are preserved.
