"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Moon, Sun, Tv, Gift, Clock } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import Pricing from "@/components/sections/Pricing";
import { useRouter } from "next/navigation";

export default function AdLanding() {
  const { theme, toggleTheme } = useLang();
  const router = useRouter();
  const dark = theme === "dark";
  const muted = dark ? "text-slate-400" : "text-slate-600";

  return (
    <div className={dark ? "min-h-screen bg-[#04040e] text-white" : "min-h-screen bg-white text-slate-900"}>
      <a href="#main-content" className="skip-link">Hopp til innhold</a>
      <div className="h-1.5 bg-gradient-to-r from-[#BA0C2F] via-[#00205B] to-[#BA0C2F]" />
      <header className={`border-b ${dark ? "border-white/10" : "border-slate-100"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link href="/" aria-label="Beste IPTV i Norge – forsiden" className="flex items-center gap-3 rounded-lg focus-visible:ring-2 focus-visible:ring-[#4d9de0]">
            <Image src="/logo/logo.png" alt="" width={40} height={40} className="h-10 w-10 rounded-lg object-contain" unoptimized />
            <span className="text-sm font-bold sm:text-base">Beste IPTV i Norge</span>
          </Link>
          <div className="flex items-center gap-3 sm:gap-5">
            <button type="button" onClick={toggleTheme} aria-label={dark ? "Bytt til lyst tema" : "Bytt til mørkt tema"} className={`rounded-full p-2.5 focus-visible:ring-2 focus-visible:ring-[#4d9de0] ${dark ? "bg-white/10 text-yellow-300" : "bg-slate-100 text-slate-600"}`}>{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
            <a href="#pricing" className="rounded-full bg-[#00205B] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#1a3a8f] focus-visible:ring-2 focus-visible:ring-[#4d9de0]">Se priser</a>
          </div>
        </div>
      </header>
      <main id="main-content" tabIndex={-1}>
        <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:py-24">
          <div aria-hidden="true" className={`pointer-events-none absolute -right-32 top-0 h-[36rem] w-[36rem] rounded-full blur-3xl ${dark ? "bg-blue-900/20" : "bg-blue-100/60"}`} />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <p className={`mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${dark ? "text-blue-300" : "text-[#00205B]"}`}><Tv size={17} />IPTV-abonnement i Norge</p>
              <div className={`mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold ${dark ? "border-amber-300/30 bg-amber-300/10 text-amber-200" : "border-amber-300 bg-amber-50 text-amber-900"}`}><Gift size={17} />Gratis prøveperiode · 24 timer</div>
              <h1 className="max-w-2xl text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">Din neste TV-opplevelse.<br /><span className="gradient-text">Prøv gratis i 24 timer.</span></h1>
              <p className={`mt-6 max-w-xl text-lg leading-relaxed ${muted}`}>Bli kjent med IPTV før du velger abonnement. Be om en gratis prøveperiode, og kontakt oss på WhatsApp, Telegram eller Gmail for aktivering.</p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button type="button" onClick={() => router.push("/checkout?duration=trial&devices=1")} className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#F5B335] to-[#FFC84A] px-7 py-4 font-bold text-[#0f1e4a] shadow-[0_8px_32px_rgba(245,179,53,0.35)] transition hover:-translate-y-1 hover:brightness-105 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-4"><Gift size={21} />Prøv gratis i 24 timer<ArrowRight size={19} /></button>
                <a href="#pricing" className="rounded-full px-4 py-3 text-sm font-semibold underline underline-offset-4 focus-visible:ring-2 focus-visible:ring-[#4d9de0]">Se abonnement og priser</a>
              </div>
              <ul className={`mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm ${muted}`}>
                {["24 timer gratis", "0 kr for prøveperioden", "Tre kontaktmåter"].map(item => <li key={item} className="flex items-center gap-2"><Check size={15} className={dark ? "text-blue-300" : "text-[#00205B]"} />{item}</li>)}
              </ul>
            </div>
            <div className={`rounded-3xl border p-6 shadow-xl sm:p-8 ${dark ? "border-white/10 bg-[#0b1024]" : "border-slate-200 bg-white"}`}>
              <div className="mb-6 flex items-center justify-between border-b border-slate-400/20 pb-6"><div><p className={`text-xs font-bold uppercase tracking-widest ${muted}`}>Din gratis prøveperiode</p><p className="mt-2 text-5xl font-black">24<span className={`ml-2 text-lg font-medium ${muted}`}>timer</span></p></div><span className="rounded-2xl bg-amber-400/15 p-4 text-amber-500"><Clock size={34} /></span></div>
              <h2 className="mt-3 text-2xl font-bold">Slik kommer du i gang</h2>
              <ol className="mt-7 space-y-6">
                {[
                  ["Be om en gratis prøveperiode", "Trykk på knappen og fyll inn opplysningene dine."],
                  ["Fyll inn opplysningene dine", "Vi trenger navn, e-post, telefonnummer og land."],
                  ["Send forespørselen om aktivering", "Velg WhatsApp, Telegram eller Gmail. Meldingen er ferdig utfylt – se over og send den til oss."],
                ].map(([title, description], index) => <li key={title} className="flex gap-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#00205B] text-sm font-bold text-white">{index + 1}</span><div><h3 className="font-bold">{title}</h3><p className={`mt-1 text-sm leading-relaxed ${muted}`}>{description}</p></div></li>)}
              </ol>
              <p className={`mt-7 border-t pt-5 text-xs leading-relaxed ${dark ? "border-white/10 text-slate-400" : "border-slate-100 text-slate-500"}`}>Prøveperioden aktiveres etter kontakt med oss. Skjemaet sender en forespørsel og aktiverer ikke tilgangen automatisk.</p>
            </div>
          </div>
        </section>
        <Pricing />
        <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <h2 className="mb-7 text-2xl font-bold sm:text-3xl">Før du bestiller</h2>
          {[
            ["Hvordan får jeg 24 timer gratis?", "Trykk på «Prøv gratis i 24 timer», fyll inn skjemaet og send forespørselen via WhatsApp, Telegram eller Gmail. Vi hjelper deg med aktivering."],
            ["Hvordan sender jeg bestillingen?", "Trykk på «Bestill nå» ved ønsket abonnement. Fyll inn skjemaet og velg WhatsApp, Telegram eller e-post. Du sender meldingen selv i tjenesten du velger."],
            ["Må jeg ha WhatsApp?", "Nei. Du kan også kontakte oss på Telegram eller sende e-post via Gmail. E-postadressen vår er bouhamidi.sal@gmail.com."],
            ["Hva bør jeg avklare først?", "Be om bekreftet totalpris, innholdsoversikt, støtte for enheten din og vilkår for levering, fornyelse og oppsigelse før du betaler."],
          ].map(([question, answer]) => <details key={question} className={`border-b py-5 ${dark ? "border-white/10" : "border-slate-200"}`}><summary className="cursor-pointer font-semibold focus-visible:ring-2 focus-visible:ring-[#4d9de0]">{question}</summary><p className={`mt-3 text-sm leading-relaxed ${muted}`}>{answer}</p></details>)}
        </section>
      </main>
      <footer className={`border-t px-4 py-8 ${dark ? "border-white/10" : "border-slate-200"}`}>
        <div className={`mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm sm:flex-row ${muted}`}><p>Beste IPTV i Norge</p><Link href="/" className="underline underline-offset-4">Besøk hovedsiden</Link></div>
      </footer>
    </div>
  );
}
