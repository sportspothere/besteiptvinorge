"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/sections/Navbar";
import { ArrowLeft, Check, MessageCircle, Mail } from "lucide-react";
import { useLang } from "@/lib/lang-context";

export default function ThankYou() {
  const channel = useSearchParams().get("channel");
  const whatsapp = channel === "whatsapp";
  const email = channel === "email";
  const service = whatsapp ? "WhatsApp" : email ? "Gmail" : null;
  const { theme } = useLang();
  const dark = theme === "dark";

  return <><Navbar standalone /><main className={`flex min-h-screen items-center justify-center px-4 pb-12 pt-28 ${dark ? "bg-[#04040e] text-white" : "bg-slate-50 text-slate-900"}`}>
    <section aria-labelledby="thank-you-title" className={`w-full max-w-xl overflow-hidden rounded-3xl border shadow-xl ${dark ? "border-white/10 bg-[#0b1024]" : "border-slate-200 bg-white"}`}>
      <div className="h-1.5 bg-gradient-to-r from-[#00205B] to-[#BA0C2F]" />
      <div className="p-7 text-center sm:p-10">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500"><Check size={32} /></div>
        <p className={`mb-3 text-xs font-bold uppercase tracking-[0.2em] ${dark ? "text-blue-300" : "text-[#00205B]"}`}>Beste IPTV i Norge</p>
        <h1 id="thank-you-title" className="text-3xl font-bold sm:text-4xl">Takk for din interesse!</h1>
        <p className={`mt-5 leading-relaxed ${dark ? "text-slate-300" : "text-slate-600"}`}>{service ? `Fullfør bestillingen ved å sende den ferdig utfylte meldingen i ${service} i den nye fanen.` : "Fullfør bestillingen ved å sende den ferdig utfylte meldingen i den nye fanen."}</p>
        <div className={`mt-6 rounded-2xl p-5 text-left text-sm leading-relaxed ${dark ? "bg-white/5 text-slate-300" : "bg-slate-50 text-slate-600"}`}>
          <div className="mb-3 flex items-center gap-2">{whatsapp ? <MessageCircle size={18} /> : email ? <Mail size={18} /> : <Check size={18} />}<span className="font-semibold">Hva skjer videre?</span></div>
          <p>{whatsapp ? "Når du har sendt meldingen i WhatsApp, svarer vi deg der og hjelper deg med abonnementet eller din gratis prøveperiode." : email ? "Når du har sendt e-posten, svarer vi deg på e-post og hjelper deg med abonnementet eller din gratis prøveperiode." : "Når du har sendt meldingen, kan vi hjelpe deg med abonnementet eller din gratis prøveperiode."} Denne siden bekrefter ikke at meldingen er sendt eller mottatt.</p>
          <p className="mt-3">Åpnet ikke den nye fanen? Gå tilbake til bestillingen og velg kontaktmåte igjen.</p>
        </div>
        <div className="mt-7 flex flex-col items-center gap-4">
          <Link href="/" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#00205B] to-[#BA0C2F] px-7 py-3.5 font-bold text-white transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-blue-400"><ArrowLeft size={17} />Tilbake til forsiden</Link>
          <button type="button" onClick={() => window.history.back()} className="rounded-lg px-3 py-2 text-sm underline underline-offset-4 focus-visible:ring-2 focus-visible:ring-blue-400">Tilbake til bestillingen</button>
        </div>
      </div>
    </section>
  </main></>;
}
