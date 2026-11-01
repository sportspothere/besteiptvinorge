"use client";

import { ArrowRight, Check, ChevronDown, CreditCard, Headphones, MessageCircle, ShieldCheck } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import { useLang } from "@/lib/lang-context";

const WHATSAPP_URL = "https://wa.me/447460010370?text=Hei%21%20Jeg%20har%20et%20sp%C3%B8rsm%C3%A5l%20om%20refusjon.";

const faq = [
  ["Hvor lenge har jeg på meg til å be om refusjon?", "Send forespørselen innen 30 dager etter at ditt første betalte abonnement ble aktivert. Fristen begrenser ikke rettigheter du har etter loven."],
  ["Hvordan sender jeg en refusjonsforespørsel?", "Kontakt oss på WhatsApp, enten direkte eller via kontaktskjemaet på nettsiden. Oppgi e-postadresse eller brukernavn og en kort beskrivelse av problemet."],
  ["Hvor lang tid tar det å få pengene tilbake?", "Etter at refusjonen er godkjent, tar tilbakebetalingen normalt 5–7 virkedager. Tiden avhenger av betalingsleverandøren og banken din."],
  ["Må jeg prøve teknisk support først?", "Nei. Vi hjelper deg gjerne med å løse problemet, men du trenger ikke å godta teknisk hjelp før du ber om refusjon under garantien."],
  ["Gjelder garantien alle abonnementer?", "Alle betalte abonnementsplaner omfattes når det er ditt første betalte abonnement. Garantien gjelder de første 30 dagene etter aktivering."],
  ["Kan jeg få refusjon ved fornyelse?", "En fornyelse kan også kvalifisere dersom tekniske problemer ikke kan løses av kundeservice. Kontakt oss for en vurdering. Lovfestede rettigheter gjelder uansett."],
  ["Hva skjer med abonnementet mitt etter en refusjon?", "Når refusjonen er godkjent, avsluttes tilgangen til abonnementet refusjonen gjelder."],
  ["Koster den gratis prøveperioden noe?", "Nei, den gratis prøveperioden koster 0 kr. Det er derfor ingen betaling å refundere. Bruk gjerne prøveperioden til å sjekke enheten og nettforbindelsen din."],
];

export default function RefundPolicy() {
  const { theme } = useLang();
  const dark = theme === "dark";
  const muted = dark ? "text-slate-400" : "text-slate-600";
  const card = `rounded-3xl border p-6 sm:p-9 ${dark ? "border-white/10 bg-white/[0.035]" : "border-slate-200/80 bg-white shadow-sm"}`;
  const button = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500";

  return (
    <div className={dark ? "bg-[#050510] text-slate-100" : "bg-slate-50 text-slate-900"}>
      <a href="#refund-content" className="skip-link">Hopp til innhold</a>
      <Navbar standalone />
      <main id="refund-content" className="pt-28" tabIndex={-1}>
        <section className="relative overflow-hidden px-4 pb-16 pt-10 sm:pt-16">
          <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#00205B]/10 blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <a href="/" className={`text-sm hover:underline ${muted}`}>Hjem <span aria-hidden="true" className="px-2">/</span> Refusjonspolicy</a>
              <p className="mb-4 mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#BA0C2F]">Din trygghet er viktig for oss</p>
              <h1 className="font-orbitron text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">Refusjonspolicy <span className="mt-3 block gradient-text">30 dagers pengene-tilbake-garanti</span></h1>
              <p className={`mt-6 max-w-xl text-lg leading-relaxed ${muted}`}>Vi ønsker at du skal være fornøyd med IPTV-tjenesten vår. Derfor tilbyr vi 30 dagers pengene-tilbake-garanti dersom tjenesten ikke fungerer for deg.</p>
              <a href={WHATSAPP_URL} className={`${button} mt-7 bg-gradient-to-r from-[#00205B] to-[#BA0C2F] text-white shadow-lg shadow-blue-950/15`}>Kontakt oss om refusjon <ArrowRight size={17} /></a>
            </div>
            <div className={`${card} relative overflow-hidden`}>
              <div className="mb-6 flex items-center justify-between"><span className="rounded-2xl bg-[#00205B]/10 p-3 text-blue-500"><ShieldCheck size={30} /></span><span className={`text-xs font-semibold uppercase tracking-widest ${muted}`}>Ekstra trygghet</span></div>
              <p className="text-8xl font-black tracking-tighter">30<span className={`ml-3 text-xl font-medium tracking-normal ${muted}`}>dager</span></p>
              <p className={`mb-7 mt-2 text-sm ${muted}`}>Fra aktivering av ditt første betalte abonnement</p>
              <ul className="space-y-4 border-t border-slate-400/20 pt-6">{["30 dagers garanti", "Enkel refusjonsprosess", "Trygg tilbakebetaling"].map(text => <li key={text} className="flex items-center gap-3 text-sm font-medium"><Check size={18} className="text-emerald-500" />{text}</li>)}</ul>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-4 pb-20">
          <nav aria-label="Innhold på siden" className={`mb-12 flex flex-wrap gap-2 border-y border-slate-400/20 py-5 text-sm ${muted}`}>
            {[["#garanti", "Garantien"], ["#slik", "Slik gjør du"], ["#abonnementer", "Hvem omfattes?"], ["#rettigheter", "Dine rettigheter"], ["#sporsmal", "Spørsmål og svar"]].map(([href, text]) => <a key={href} href={href} className="rounded-full px-4 py-2 transition hover:bg-blue-500/10 hover:text-blue-500 focus-visible:outline focus-visible:outline-2">{text}</a>)}
          </nav>

          <section id="garanti" className={`${card} scroll-mt-32`}>
            <h2 className="text-2xl font-bold sm:text-3xl">30 dagers pengene-tilbake-garanti</h2>
            <div className={`mt-5 max-w-3xl space-y-4 leading-relaxed ${muted}`}>
              <p>Vi ønsker at du skal føle deg trygg når du velger tjenesten vår. Dersom IPTV-tjenesten ikke fungerer for deg, kan du be om refusjon innen 30 dager etter at abonnementet ble aktivert.</p>
              <p>Når refusjonsforespørselen er godkjent, tilbakebetaler vi pengene til den opprinnelige betalingsmetoden. Tilgangen til det aktuelle abonnementet avsluttes ved godkjent refusjon.</p>
              <p>Garantien er en ekstra kundefordel og kommer i tillegg til dine lovfestede forbrukerrettigheter.</p>
            </div>
          </section>

          <section id="slik" className="scroll-mt-32 py-16">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#BA0C2F]">En enkel prosess</p>
            <h2 className="mb-8 text-2xl font-bold sm:text-3xl">Slik ber du om refusjon</h2>
            <div className="grid gap-5 md:grid-cols-3">
              {[
                { icon: MessageCircle, title: "Kontakt oss", text: "Send oss en melding på WhatsApp innen 30 dager etter at abonnementet ble aktivert. Du kan også bruke kontaktskjemaet vårt, som åpner WhatsApp." },
                { icon: Headphones, title: "Send bestillingsinformasjonen", text: "Oppgi e-postadressen eller brukernavnet som er knyttet til bestillingen, og beskriv problemet kort. Vi hjelper deg gjerne først, men du er ikke forpliktet til å godta teknisk hjelp før du ber om refusjon." },
                { icon: CreditCard, title: "Få pengene tilbake", text: "Når refusjonen er godkjent, tilbakeføres beløpet til den opprinnelige betalingsmetoden. Dette tar normalt 5–7 virkedager, avhengig av betalingsleverandøren og banken din." },
              ].map(({ icon: Icon, title, text }, i) => <article key={title} className={`${card} transition duration-200 hover:-translate-y-1 hover:border-blue-500/40`}>
                <div className="mb-6 flex items-center justify-between"><Icon size={25} className="text-blue-500" /><span className={`font-orbitron text-sm ${muted}`}>0{i + 1}</span></div>
                <h3 className="mb-3 text-lg font-bold">{title}</h3><p className={`text-sm leading-relaxed ${muted}`}>{text}</p>
                {i === 0 && <div className="mt-5 flex flex-wrap gap-3"><a href="/#contact" className="text-sm font-semibold text-blue-500 underline underline-offset-4">Åpne kontaktskjema</a><a href={WHATSAPP_URL} className="inline-flex items-center gap-1 text-sm font-semibold text-blue-500 underline underline-offset-4"><MessageCircle size={14} />Kontakt oss</a></div>}
                {i === 1 && <p className={`mt-4 text-xs leading-relaxed ${muted}`}>Ikke send passord eller betalingskortopplysninger.</p>}
              </article>)}
            </div>
          </section>

          <div className="grid gap-6 lg:grid-cols-2">
            <section id="abonnementer" className={`${card} scroll-mt-32`}>
              <h2 className="mb-5 text-2xl font-bold">Hvilke abonnementer omfattes?</h2>
              <ul className={`space-y-4 text-sm leading-relaxed ${muted}`}>
                <li><strong className={dark ? "text-white" : "text-slate-900"}>Ditt første abonnement:</strong> Alle betalte abonnementsplaner omfattes av garantien de første 30 dagene etter aktivering av ditt første betalte abonnement.</li>
                <li><strong className={dark ? "text-white" : "text-slate-900"}>Fornyelser:</strong> Kan også kvalifisere for refusjon når tekniske problemer ikke kan løses av kundeservice.</li>
                <li><strong className={dark ? "text-white" : "text-slate-900"}>Gratis prøveperiode:</strong> Har ingen kjøpskostnad og dermed ingen betaling å refundere. Vi anbefaler å teste tjenesten med enheten og nettforbindelsen din før kjøp.</li>
              </ul>
              <a href="/tilbud" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-500 hover:underline">Utforsk gratis prøveperiode <ArrowRight size={16} /></a>
            </section>
            <section className={card}>
              <h2 className="mb-5 text-2xl font-bold">Når kan vi avslå en refusjonsforespørsel?</h2>
              <ul className={`list-disc space-y-4 pl-5 text-sm leading-relaxed ${muted}`}>
                <li>Forespørselen sendes mer enn 30 dager etter aktivering, med mindre lovfestede rettigheter gir grunnlag for kravet.</li>
                <li>Kontoen er stengt på grunn av et dokumentert brudd på vilkårene, som uautorisert videresalg eller deling utover antall kjøpte enheter.</li>
                <li>Det foreligger dokumentasjon på svindel, bevisst misbruk eller misbruk av garantien.</li>
              </ul>
              <p className={`mt-5 text-sm leading-relaxed ${muted}`}>Disse unntakene gjelder den frivillige garantien. De begrenser ikke ufravikelige forbrukerrettigheter.</p>
            </section>
          </div>

          <section id="rettigheter" className={`${card} mt-6 scroll-mt-32 border-l-4 border-l-[#00205B]`}>
            <ShieldCheck className="mb-4 text-blue-500" size={28} />
            <h2 className="text-2xl font-bold">Dine rettigheter som forbruker</h2>
            <div className={`mt-4 max-w-3xl space-y-4 text-sm leading-relaxed ${muted}`}>
              <p>Den frivillige 30-dagersgarantien kommer i tillegg til rettigheter du kan ha etter norsk lov, blant annet angrerettloven og digitalytelsesloven der disse gjelder. Reglene om angrerett avhenger av avtalen og om lovens vilkår er oppfylt. Aktivering alene betyr ikke at du automatisk mister angreretten.</p>
              <p>Ved mangler kan du ha krav på retting, prisavslag eller heving etter lovens vilkår. Fristen og unntakene i garantien begrenser ikke slike krav. Lovfestede krav behandles etter gjeldende regler, også når disse gir andre frister for tilbakebetaling.</p>
            </div>
          </section>

          <section id="sporsmal" className="mx-auto max-w-3xl scroll-mt-32 py-16">
            <h2 className="mb-3 text-center text-2xl font-bold sm:text-3xl">Spørsmål og svar</h2>
            <p className={`mb-8 text-center ${muted}`}>Det viktigste om garantien og tilbakebetalingen.</p>
            <div className={card}>{faq.map(([q, a]) => <details key={q} className="group border-b border-slate-400/20 last:border-0">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 [&::-webkit-details-marker]:hidden"><h3>{q}</h3><ChevronDown size={18} className="shrink-0 text-blue-500 transition group-open:rotate-180" /></summary>
              <p className={`pb-5 text-sm leading-relaxed ${muted}`}>{a}</p>
            </details>)}</div>
          </section>

          <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#00205B] via-[#081d45] to-[#650d2c] px-6 py-12 text-center text-white sm:px-12">
            <MessageCircle size={30} className="mx-auto mb-5 text-blue-200" />
            <h2 className="text-2xl font-bold sm:text-3xl">Trenger du hjelp? Vi er her for deg.</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-blue-100/80">Har du spørsmål om abonnementet ditt, opplever tekniske problemer eller ønsker å be om refusjon? Kontakt oss, så hjelper vi deg videre.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3"><a href={WHATSAPP_URL} className={`${button} bg-white text-[#00205B]`}>Kontakt kundeservice <ArrowRight size={17} /></a><a href="/#pricing" className={`${button} border border-white/30 hover:bg-white/10`}>Se våre abonnementer</a></div>
          </section>
        </div>
      </main>
    </div>
  );
}
