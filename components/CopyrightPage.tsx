"use client";

import { ArrowRight, Check, FileSearch, ListChecks, MessageCircle, Scale, ShieldCheck } from "lucide-react";
import LegalPage from "@/components/LegalPage";
import { useLang } from "@/lib/lang-context";
import { copyrightChecklist, copyrightSections, copyrightUpdated } from "@/lib/copyright";

const whatsapp = "https://wa.me/447460010370?text=Hei%21%20Jeg%20%C3%B8nsker%20%C3%A5%20sende%20en%20henvendelse%20om%20opphavsrett.";

export default function CopyrightPage() {
  const { theme } = useLang();
  const dark = theme === "dark";
  const muted = dark ? "text-slate-400" : "text-slate-600";
  const panel = dark ? "border-white/10 bg-[#0b1020]" : "border-slate-200 bg-white";
  const link = "text-sm font-semibold text-blue-500 underline underline-offset-4";
  const button = "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400";

  return <LegalPage title="Opphavsrett og DMCA" contentId="copyright-content"
    eyebrow="Vi respekterer opphavsrett og immaterielle rettigheter"
    subtitle="Vi tar opphavsrett på alvor og ønsker å behandle henvendelser om mulig rettighetsbrudd på en tydelig, rettferdig og ansvarlig måte."
    headingClassName="text-3xl sm:text-4xl lg:text-5xl"
    updated={copyrightUpdated} sections={copyrightSections}
    highlights={<div className="grid gap-4 sm:grid-cols-3">{[
      { icon: ShieldCheck, title: "Respekt for opphavsrett", text: "Tydelige prinsipper for eget materiale og andres rettigheter." },
      { icon: MessageCircle, title: "Enkel rapportering", text: "Send en henvendelse via kontaktkanalene du allerede finner på nettsiden." },
      { icon: Scale, title: "Rettferdig behandling", text: "Klagen og relevant dokumentasjon vurderes ut fra saken og gjeldende regler." },
    ].map(({ icon: Icon, title, text }) => <div key={title} className={`rounded-2xl border p-5 ${panel}`}><Icon size={22} className="mb-3 text-blue-400" aria-hidden="true" /><h2 className="font-semibold">{title}</h2><p className={`mt-2 text-sm leading-relaxed ${muted}`}>{text}</p></div>)}</div>}
    intro={<><p className={`leading-relaxed ${muted}`}>Denne siden forklarer hvordan du melder fra om mulige opphavsrettsbrudd, hva klagen bør inneholde og hvordan vi vurderer henvendelser. Den gjelder både materiale på nettstedet og innhold som gjøres tilgjengelig gjennom tjenesten.</p><div className="mt-5 flex flex-wrap gap-x-6 gap-y-3"><a href="#send-klage" className={link}>Slik rapporterer du</a><a href="/vilkar-for-bruk" className={link}>Vilkår for bruk</a><a href="/personvernerklaering" className={link}>Personvernerklæring</a></div></>}
    renderSection={id => <>
      {id === "send-klage" && <><ol className="mt-6 grid gap-3">{[
        { icon: FileSearch, title: "Identifiser innholdet", text: "Beskriv hvilket opphavsrettslig beskyttet materiale du mener er brukt uten tillatelse." },
        { icon: ListChecks, title: "Oppgi hvor innholdet finnes", text: "Oppgi en direkte lenke til materialet eller tilstrekkelig informasjon til at vi kan identifisere innholdet det gjelder." },
        { icon: MessageCircle, title: "Send inn klagen", text: "Send henvendelsen gjennom vår offisielle kontaktkanal sammen med nødvendig dokumentasjon." },
      ].map(({ icon: Icon, title, text }, index) => <li key={title} className={`flex items-start gap-4 rounded-xl border p-4 sm:p-5 ${panel}`}><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-400/10 text-sm font-semibold text-blue-400" aria-hidden="true">{index + 1}</span><div className="min-w-0 flex-1"><h3 className="text-sm font-bold sm:text-base">{title}</h3><p className={`mt-2 text-sm leading-relaxed ${muted}`}>{text}</p></div><Icon size={19} className="hidden shrink-0 text-blue-400 sm:block" aria-hidden="true" /></li>)}</ol><a href="/#contact" className={`${button} mt-5 bg-gradient-to-r from-[#00205B] to-[#BA0C2F] text-white`}>Send en opphavsrettsklage <ArrowRight size={16} /></a></>}
      {id === "klagens-innhold" && <><ul className="mt-6 space-y-3">{copyrightChecklist.map(text => <li key={text} className={`flex items-start gap-3 rounded-xl border p-4 text-sm leading-relaxed ${panel}`}><Check size={17} className="mt-0.5 shrink-0 text-blue-400" aria-hidden="true" /><span>{text}</span></li>)}</ul><a href="/personvernerklaering" className={`mt-5 inline-block ${link}`}>Les om behandling av personopplysninger</a></>}
      {id === "innsigelse" && <a href={whatsapp} className={`mt-5 inline-block ${link}`}>Kontakt oss om en innsigelse</a>}
      {id === "tv-og-strommeinnhold" && <a href="/vilkar-for-bruk#opphavsrett" className={`mt-5 inline-block ${link}`}>Les vilkårene om opphavsrett og lovlig bruk</a>}
      {id === "kontakt-opphavsrett" && <div className="mt-6 rounded-2xl bg-gradient-to-br from-[#00205B] to-[#27132e] p-6 text-white"><ShieldCheck size={27} className="mb-3 text-blue-200" aria-hidden="true" /><h3 className="text-xl font-bold">Har du spørsmål om opphavsrett?</h3><p className="mt-3 text-sm leading-relaxed text-blue-100/80">Er du rettighetshaver, representant eller har du spørsmål om innhold på nettstedet vårt? Ta gjerne kontakt med oss, så vurderer vi henvendelsen din.</p><div className="mt-5 flex flex-wrap gap-3"><a href={whatsapp} className={`${button} bg-white text-[#00205B]`}>Kontakt oss om opphavsrett <ArrowRight size={16} /></a><a href="/#contact" className={`${button} border border-white/30 hover:bg-white/10`}>Åpne kontaktskjema</a></div></div>}
    </>}
  />;
}
