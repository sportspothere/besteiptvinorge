"use client";

import { ArrowRight, Eye, ShieldCheck, SlidersHorizontal } from "lucide-react";
import LegalPage from "@/components/LegalPage";
import { CookieSettingsButton } from "@/components/CookieConsent";
import { useLang } from "@/lib/lang-context";
import { privacyRights, privacySections, privacyUpdated } from "@/lib/privacy";

const whatsapp = "https://wa.me/447460010370?text=Hei%21%20Jeg%20har%20et%20sp%C3%B8rsm%C3%A5l%20om%20personvern.";

export default function PrivacyPage() {
  const { theme } = useLang();
  const dark = theme === "dark";
  const muted = dark ? "text-slate-400" : "text-slate-600";
  const panel = dark ? "border-white/10 bg-[#0b1020]" : "border-slate-200 bg-white";
  const link = "text-sm font-semibold text-blue-500 underline underline-offset-4";
  return <LegalPage title="Personvernerklæring" eyebrow="Personvernet ditt er viktig for oss" contentId="privacy-content"
    headingClassName="text-[clamp(1.25rem,6vw,1.875rem)] sm:text-4xl lg:text-6xl"
    updated={privacyUpdated} sections={privacySections}
    subtitle="Vi ønsker at du skal føle deg trygg når du besøker nettstedet vårt eller bruker tjenestene våre. Her forklarer vi hvordan personopplysningene dine behandles, hvorfor vi trenger dem, og hvilke rettigheter du har."
    highlights={<div className="grid gap-4 sm:grid-cols-3">{[
      { icon: Eye, title: "Åpenhet", text: "Tydelig informasjon om hvordan personopplysninger brukes." },
      { icon: ShieldCheck, title: "Sikkerhet", text: "Informasjon om beskyttelse av opplysninger og hva du bør unngå å dele." },
      { icon: SlidersHorizontal, title: "Kontroll", text: "Rettighetene dine, personvernvalg og hvordan du kontakter oss." },
    ].map(({ icon: Icon, title, text }) => <div key={title} className={`rounded-2xl border p-5 ${panel}`}><Icon size={22} className="mb-3 text-blue-400" aria-hidden="true" /><h2 className="font-semibold">{title}</h2><p className={`mt-2 text-sm leading-relaxed ${muted}`}>{text}</p></div>)}</div>}
    intro={<><p className={`leading-relaxed ${muted}`}>Her finner du informasjon om opplysningene du deler med oss, tjenestene som mottar dem og valgene du har. Du kan bruke nettsiden og kontakte oss uten å godta valgfri markedsføringssporing.</p><div className="mt-5 flex flex-wrap gap-x-6 gap-y-3"><CookieSettingsButton className={link} /><a href="/vilkar-for-bruk" className={link}>Vilkår for bruk</a><a href="/refusjonspolicy" className={link}>Refusjonspolicy</a></div></>}
    renderSection={id => <>
      {id === "betaling" && <div className="mt-5 flex flex-wrap gap-4"><a href="https://www.bunq.com/documents/privacy-policy" className={link}>Personvern hos bunq</a><a href="https://www.binance.com/en/about-legal/privacy-portal" className={link}>Personvern hos Binance</a></div>}
      {id === "deling" && <a href="https://www.whatsapp.com/legal/privacy-policy-eea" className={`mt-5 inline-block ${link}`}>Personvern hos WhatsApp</a>}
      {id === "informasjonskapsler" && <div className="mt-6 space-y-4">
        <div className="overflow-x-auto rounded-xl border border-slate-400/20"><table className="w-full text-left text-xs leading-relaxed"><caption className={`p-4 text-left font-semibold ${muted}`}>Lagring som brukes på nettsiden</caption><thead className={dark ? "bg-white/5" : "bg-slate-50"}><tr>{["Teknologi", "Formål", "Varighet"].map(t => <th key={t} scope="col" className="px-3 py-3">{t}</th>)}</tr></thead><tbody className={`divide-y divide-slate-400/20 ${muted}`}>
          {[["privacy_consent_v1", "Nødvendig: husker personvernvalget i localStorage.", "180 dager"], ["theme", "Funksjonelt: husker temaet du velger i localStorage.", "Til endring eller sletting"], ["promo_dismissed", "Funksjonelt: husker at WhatsApp-panelet er lukket, i sessionStorage.", "Nettleserøkten"], ["Meta Pixel / _fbp, _fbc", "Valgfri markedsføring: besøk og annonsemåling, bare etter samtykke.", "Bestemmes av Meta; kontrolleres mot aktiv leverandørkonfigurasjon"]].map(([name, purpose, duration]) => <tr key={name}><th scope="row" className="break-all px-3 py-3 font-medium">{name}</th><td className="px-3 py-3">{purpose}</td><td className="px-3 py-3">{duration}</td></tr>)}
        </tbody></table></div>
        <CookieSettingsButton className="rounded-full border border-blue-400/30 px-5 py-3 text-sm font-semibold text-blue-500 hover:bg-blue-400/10 focus-visible:outline focus-visible:outline-2" />
      </div>}
      {id === "dine-rettigheter" && <div className="mt-6 grid gap-3 sm:grid-cols-2">{privacyRights.map(([title, text]) => <article key={title} className={`rounded-xl border p-4 ${panel}`}><h3 className="text-sm font-bold">{title}</h3><p className={`mt-2 text-sm leading-relaxed ${muted}`}>{text}</p></article>)}</div>}
      {id === "kontakt-personvern" && <div className="mt-6 rounded-2xl bg-gradient-to-br from-[#00205B] to-[#27132e] p-6 text-white"><ShieldCheck size={27} className="mb-3 text-blue-200" aria-hidden="true" /><h3 className="text-xl font-bold">Har du spørsmål om personvernet ditt?</h3><p className="mt-3 text-sm leading-relaxed text-blue-100/80">Vi hjelper deg med spørsmål og forespørsler om rettighetene dine.</p><div className="mt-5 flex flex-wrap gap-3"><a href="/#contact" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#00205B]">Kontakt oss <ArrowRight size={16} /></a><a href="/vilkar-for-bruk" className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold hover:bg-white/10">Se våre vilkår</a></div><a href={whatsapp} className="mt-5 inline-block text-sm font-semibold text-blue-200 underline underline-offset-4">Kontakt oss direkte på WhatsApp</a></div>}
    </>}
  />;
}
