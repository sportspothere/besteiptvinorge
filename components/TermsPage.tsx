"use client";

import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import LegalPage from "@/components/LegalPage";
import { useLang } from "@/lib/lang-context";
import { termsSections } from "@/lib/terms";

const whatsapp = "https://wa.me/447460010370?text=Hei%21%20Jeg%20har%20et%20sp%C3%B8rsm%C3%A5l%20om%20vilk%C3%A5rene.";

export default function TermsPage() {
  const { theme } = useLang();
  const dark = theme === "dark";
  const muted = dark ? "text-slate-400" : "text-slate-600";
  const panel = dark ? "border-white/10 bg-[#0b1020]" : "border-slate-200 bg-white";
  const button = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400";
  return <LegalPage
    title="Vilkår for bruk"
    eyebrow="Tydelige vilkår. Trygge valg."
    subtitle="Les våre vilkår for abonnement, betaling, bruk av tjenesten og dine rettigheter som kunde."
    contentId="terms-content" sections={termsSections}
    intro={<>
            <p className={`leading-relaxed ${muted}`}>Velkommen til Beste IPTV Norge. Disse vilkårene forklarer hvordan tjenesten vår fungerer, hvilke regler som gjelder for abonnementene våre, og hvilke rettigheter og plikter du har som kunde. Vi anbefaler at du leser vilkårene før du bestiller et abonnement eller starter en gratis prøveperiode.</p>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold"><a href="/refusjonspolicy" className="text-blue-500 underline underline-offset-4">Les refusjonspolicyen</a><a href="/personvernerklaering" className="text-blue-500 underline underline-offset-4">Les personvernerklæringen</a></div>
    </>}
    renderSection={id => <>
              {id === "bestilling" && <a href="/#pricing" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-500 hover:underline">Se abonnementer og priser <ArrowRight size={16} /></a>}
              {id === "proveperiode" && <a href="/tilbud" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-500 hover:underline">Les om gratis prøveperiode <ArrowRight size={16} /></a>}
              {id === "kundens-ansvar" && <div id="personvern" className={`mt-6 scroll-mt-28 rounded-xl border p-4 text-sm leading-relaxed ${panel}`}><h3 className="mb-2 font-semibold">Personvern</h3><p className={muted}>Les om hvordan opplysningene dine behandles og hvilke valg du har i <a href="/personvernerklaering" className="text-blue-500 underline underline-offset-4">personvernerklæringen</a>.</p></div>}
              {id === "refusjon" && <div className="mt-6 rounded-2xl bg-gradient-to-br from-[#00205B] to-[#27132e] p-6 text-white"><ShieldCheck size={27} className="mb-3 text-blue-200" aria-hidden="true" /><h3 className="text-xl font-bold">30 dager med ekstra trygghet</h3><p className="mt-2 text-sm leading-relaxed text-blue-100/80">Garantien gjelder ditt første betalte abonnement, fra aktiveringsdatoen.</p><a href="/refusjonspolicy" className="mt-4 inline-flex items-center gap-2 text-sm font-bold underline underline-offset-4">Se hele refusjonspolicyen <ArrowRight size={16} /></a></div>}
              {id === "kontakt" && <div className="mt-6"><h3 className="text-lg font-bold">Har du spørsmål om vilkårene våre?</h3><div className="mt-5 flex flex-wrap gap-3"><a href={whatsapp} className={`${button} bg-gradient-to-r from-[#00205B] to-[#BA0C2F] text-white`}><MessageCircle size={18} />Kontakt oss på WhatsApp</a><a href="/#contact" className={`${button} border ${dark ? "border-white/15 hover:bg-white/5" : "border-slate-200 hover:bg-slate-50"}`}>Åpne kontaktskjema</a></div></div>}
    </>}
  />;
}
