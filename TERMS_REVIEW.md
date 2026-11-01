# Terms page: review before publication

Implemented route: `/vilkar-for-bruk`. The page remains explicitly noindex
until the items below are resolved. The owner removed its visible draft notice.
No publication-approval date has been asserted. Set the actual approval date
as the displayed last-updated date when publication is approved.

## Owner confirmations needed

- Confirm manual versus automatic renewal, expiry behavior, cancellation process,
  applicable deadlines and any renewal charges or notices. Section 8 identifies
  the unresolved renewal arrangement instead of asserting a system that is absent.
- Owner confirmed during implementation: displayed plan prices are the total
  payable; customers order through the website or WhatsApp and receive a secure
  payment link; subscriptions start after payment confirmation. Suspected fraud
  or unverifiable orders may be cancelled with any payment refunded. No card
  brand, payment provider or specific payment method has been invented.
- Privacy page now exists at `/personvernerklaering`. Terms and footer link to it.
  See `PRIVACY_REVIEW.md` for unresolved controller, retention and provider details.
- Review content distribution rights and authorizations for Norway. The terms
  state the provider's responsibility without asserting particular licences.
- Supply/verify the contracting business's legal identity and required contact
  information. No company registration, address or governing-law clause was invented.
- Approve the contractual text and its consumer-law application before publishing;
  record the actual approval date and remove the noindex override.
  Add the approved route to `app/sitemap.ts` at that time.

## Existing facts preserved

- Plans: 1, 3, 6 and 12 months; 1 or 2 devices. Prices and order behavior unchanged.
- User's brief specifies the simultaneous device limit follows purchased devices.
  Homepage FAQ now reflects that rule instead of leaving it unresolved.
- Free trial: 24 hours, one device, 0 kr, separate from a paid purchase.
- Guarantee matches `/refusjonspolicy`: first paid subscription, request within
  30 days of activation, original payment method, normally 5–7 business days after
  approval, access ends on approved refund; renewals can qualify for unresolved
  technical problems; troubleshooting is optional under the guarantee.
- Support stays focused on WhatsApp per the owner's earlier instruction.
  The owner removed the previous support email; contact form opens WhatsApp.
- Homepage FAQ was corrected where it still said trials/refund terms were unconfirmed.

## Research and verification

The supplied reference `https://ukiptvsubscription.net/terms` could not be fetched.
The page uses the owner's requested 14-part structure and original Norwegian copy.

Consumer-rights wording was checked against primary sources:
- https://lovdata.no/lov/2022-06-17-56/kap5
- https://www.regjeringen.no/no/dokumenter/prop.-50-ls-20222023/id2966742/?ch=8
- https://www.regjeringen.no/no/dokumenter/prop.-66-ls-20212022/id2903751/?ch=16

The page does not assert automatic loss of withdrawal rights on activation,
cap liability at the subscription price, or remove mandatory consumer rights.
