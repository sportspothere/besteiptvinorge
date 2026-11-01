"use client";

import Link from "next/link";
import { ArrowRight, Check, Monitor, Smartphone, Tv2 } from "lucide-react";
import LegalPage from "@/components/LegalPage";
import { useLang } from "@/lib/lang-context";
import { setupSections } from "@/lib/setup-guide";

export default function SetupGuide() {
  const { theme } = useLang();
  const dark = theme === "dark";
  const muted = dark ? "text-slate-400" : "text-slate-600";
  const panel = dark ? "border-white/10 bg-[#0b1020]" : "border-slate-200 bg-white";
  const link = "inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-blue-500 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400";
  return <LegalPage title="Slik bruker du IPTV" eyebrow="Fra oppsett til første TV-kveld" contentId="setup-content" sections={setupSections}
    headingClassName="text-3xl sm:text-4xl lg:text-5xl"
    subtitle="En praktisk guide til abonnement, aktivering, app og avspilling. Start med enheten din, og følg trinnene i ditt eget tempo."
    intro={<><p className={`leading-relaxed ${muted}`}>Et godt oppsett starter med riktig kombinasjon av enhet, app og tilgang. Denne guiden samler fremgangsmåten. Konkrete appvalg og støtte for din modell må bekreftes av kundeservice.</p><ul className={`mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm ${muted}`}>{["Avklar enheten", "Velg abonnement", "Test avspillingen"].map(text => <li key={text} className="flex items-center gap-2"><Check size={16} className="text-blue-500" aria-hidden="true" />{text}</li>)}</ul></>}
    renderSection={id => <>
      {id === "for-du-starter" && <Link href="/tilbud" className={`mt-4 ${link}`}>Les om gratis prøveperiode <ArrowRight size={16} /></Link>}
      {id === "velg-abonnement" && <a href="/#pricing" className={`mt-4 ${link}`}>Se abonnementer og priser <ArrowRight size={16} /></a>}
      {id === "installer-app" && <div className="mt-6 space-y-3">{[
        { icon: Tv2, title: "Smart TV: sjekk plattformen først", text: "På Samsung-modeller med appstøtte brukes TV-ens appområde til å finne og installere apper. På Google TV kan du søke etter appen på TV-en og velge installasjon. Andre TV-systemer har andre menyer. Kontroller modell og appstøtte før du følger en produsentveiledning." },
        { icon: Smartphone, title: "Mobil og nettbrett: bruk den offisielle butikken", text: "Når appen er avklart for din iOS- eller Android-enhet, søk etter den i enhetens offisielle appbutikk og kontroller utgiver. Følg appens egen dokumentasjon for innlogging og eventuelle tilleggskostnader." },
        { icon: Monitor, title: "PC, Mac og TV-bokser: avklar app og tilgangstype", text: "Bekreft operativsystem, app og hvilken type innlogging som brukes. Installer gjennom appens offisielle distribusjonskanal etter at støtten er avklart. Ikke anta at alle bokser eller nettlesere kan åpne samme tilgang." },
      ].map(({ icon: Icon, title, text }) => <article key={title} className={`rounded-xl border p-5 ${panel}`}><Icon size={22} className="mb-3 text-blue-400" aria-hidden="true" /><h3 className="text-sm font-bold sm:text-base">{title}</h3><p className={`mt-2 text-sm leading-relaxed ${muted}`}>{text}</p></article>)}<Link href="/blogg/sette-opp-iptv-pa-smart-tv" className={link}>Les mer om Smart TV <ArrowRight size={16} /></Link></div>}
      {id === "feilsoking" && <Link href="/blogg/iptv-fryser-eller-stopper" className={`mt-4 ${link}`}>Åpne guiden til feilsøking <ArrowRight size={16} /></Link>}
      {id === "fa-hjelp" && <div className="mt-6 rounded-2xl bg-gradient-to-br from-[#00205B] to-[#27132e] p-6 text-white"><h3 className="text-xl font-bold">Vi hjelper deg videre</h3><p className="mt-3 text-sm leading-relaxed text-blue-100/80">Fortell oss hvilken enhet du bruker og hva du trenger hjelp til.</p><div className="mt-5 flex flex-wrap gap-3"><a href="https://wa.me/447460010370?text=Hei%21%20Jeg%20trenger%20hjelp%20med%20IPTV-oppsett." className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#00205B]">Kontakt oss på WhatsApp <ArrowRight size={16} /></a><a href="/#contact" className="inline-flex min-h-11 items-center rounded-full border border-white/30 px-5 py-3 text-sm font-semibold hover:bg-white/10">Åpne kontaktskjema</a></div></div>}
    </>}
  />;
}
