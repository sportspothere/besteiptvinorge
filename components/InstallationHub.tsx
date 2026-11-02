"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, ChevronDown, ShieldCheck } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import InstallationWizard from "@/components/InstallationWizard";
import { useLang } from "@/lib/lang-context";
import { installationGuides } from "@/lib/installation-guides";
import { installationFaq, installationProblems } from "@/lib/installation-help";
import { supportUrl } from "@/lib/installation";

export default function InstallationHub({ catalogue = false }: { catalogue?: boolean }) {
  const { theme } = useLang(); const dark = theme === "dark";
  const muted = dark ? "text-slate-400" : "text-slate-600";
  const panel = dark ? "border-white/10 bg-[#080f21]" : "border-slate-200 bg-white";
  return <div className={dark ? "bg-[#050510] text-slate-100" : "bg-slate-50 text-slate-900"}>
    <a href="#installation-content" className="skip-link">Hopp til innhold</a><Navbar standalone />
    <main id="installation-content" tabIndex={-1} className="mx-auto max-w-6xl px-4 pb-20 pt-32 sm:px-6 sm:pt-40">
      <nav aria-label="Brødsmuler" className={`mb-7 text-xs ${muted}`}><ol className="flex flex-wrap gap-2"><li><Link href="/">Hjem</Link></li><li aria-hidden="true">→</li><li aria-current="page">{catalogue ? "Installasjonsguider" : "IPTV-installasjon"}</li></ol></nav>
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#00205B] dark:text-[#F5B335]">Et oppsett som passer til enheten din</p>
      <h1 className="font-orbitron max-w-4xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">{catalogue ? "Installasjonsguider for IPTV" : "Slik installerer du IPTV på din enhet"}</h1>
      <p className={`mt-5 max-w-2xl text-lg leading-relaxed ${muted}`}>{catalogue ? "Les en fast veiledning for enheten, spilleren eller tilkoblingsmetoden din. Alle sidene kan åpnes direkte uten å bruke veiviseren." : "Velg enheten og IPTV-appen du bruker, så viser vi deg hvordan du kommer i gang – steg for steg."}</p>
      <div className={`mb-9 mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs ${muted}`}><span className="inline-flex min-h-9 items-center gap-2"><ShieldCheck size={15} className="text-[#00205B] dark:text-[#F5B335]" />Ingen innlogging for å lese</span><span className="inline-flex min-h-9 items-center gap-2"><BookOpen size={15} className="text-[#00205B] dark:text-[#F5B335]" />Private opplysninger blir i appen din</span></div>
      {!catalogue ? <InstallationWizard /> : <Link href="/slik-bruker-du-iptv#veiviser" className="mb-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#00205B] px-5 py-3 text-sm font-bold text-white">Finn riktig guide med veiviseren <ArrowRight size={16} /></Link>}
      <section id="guidebibliotek" className="mt-14 scroll-mt-28" aria-labelledby="guide-library-title"><div className="mb-6 flex flex-wrap items-end justify-between gap-4"><div><h2 id="guide-library-title" className="text-2xl font-bold">Finn guiden din direkte</h2><p className={`mt-3 max-w-2xl text-sm leading-relaxed ${muted}`}>Les om Samsung, LG, Android TV, iPhone, PC og andre oppsett. Appstøtte, modell og tilgang må passe sammen.</p></div>{!catalogue && <Link href="/guider" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#00205B] dark:text-[#F5B335]">Alle guider <ArrowRight size={16} /></Link>}</div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{installationGuides.map(g => <article key={g.slug} className={`flex min-w-0 flex-col rounded-2xl border p-5 transition hover:border-[#F5B335]/50 ${panel}`}><h3 className="text-base font-bold leading-relaxed"><Link href={`/guider/${g.slug}`} className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5B335]">{g.title}</Link></h3><p className={`mt-3 text-xs leading-6 ${muted}`}>{g.description}</p><Link href={`/guider/${g.slug}`} aria-label={`Les: ${g.title}`} className="mt-auto inline-flex min-h-11 items-center gap-2 pt-4 text-xs font-semibold text-[#00205B] dark:text-[#F5B335]">Les veiledningen <ArrowRight size={15} /></Link></article>)}</div>
      </section>
      {!catalogue && <>
        <section id="feilsoking" className="mt-14 scroll-mt-28" aria-labelledby="troubleshooting-title"><h2 id="troubleshooting-title" className="mb-3 text-2xl font-bold">Få hjelp når noe stopper opp</h2><p className={`mb-6 max-w-2xl text-sm leading-relaxed ${muted}`}>Finn symptomet først. Feilen kan ligge i appen, kontoen, innholdskilden eller forbindelsen.</p><div className="grid gap-4 sm:grid-cols-2">{installationProblems.map(problem => <article key={problem.title} className={`rounded-2xl border p-5 ${panel}`}><h3 className="font-bold">{problem.title}</h3><p className={`mt-3 text-sm leading-7 ${muted}`}>{problem.text}</p><a href={supportUrl()} className="mt-3 inline-flex min-h-11 items-center gap-2 text-xs font-semibold text-[#00205B] dark:text-[#F5B335]">Kontakt oss om problemet <ArrowRight size={14} /></a></article>)}</div></section>
        <section className="mx-auto mt-14 max-w-3xl" aria-labelledby="installation-faq"><h2 id="installation-faq" className="mb-6 text-2xl font-bold">Spørsmål om IPTV-oppsett</h2><div className={`rounded-2xl border px-5 sm:px-7 ${panel}`}>{installationFaq.map(([q, a]) => <details key={q} className="group border-b border-slate-400/15 last:border-0"><summary className="flex cursor-pointer list-none items-start justify-between gap-3 py-5 text-sm font-semibold [&::-webkit-details-marker]:hidden"><h3>{q}</h3><ChevronDown size={17} className="mt-0.5 shrink-0 text-[#00205B] dark:text-[#F5B335] transition group-open:rotate-180" /></summary><p className={`pb-5 text-sm leading-7 ${muted}`}>{a}</p></details>)}</div></section>
      </>}
      <section className="mt-14 rounded-3xl bg-gradient-to-br from-[#00205B] to-[#27132e] p-6 text-white sm:p-9"><h2 className="text-2xl font-bold">Vi hjelper deg videre</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-blue-100/80">Er du usikker på modell, app eller tilkobling? Fortell oss hva du bruker. Ikke send passord eller private spillelistelenker i den første meldingen.</p><div className="mt-5 flex flex-wrap gap-3"><a href={supportUrl()} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#00205B]">Kontakt oss på WhatsApp <ArrowRight size={16} className="shrink-0" /></a><a href="/#contact" className="inline-flex min-h-11 items-center rounded-full border border-white/30 px-5 py-3 text-sm font-semibold">Åpne kontaktskjema</a></div></section>
      <nav aria-label="Mer informasjon" className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#00205B] dark:text-[#F5B335]">{[["/", "Hjem"], ["/#pricing", "Abonnement og priser"], ["/tilbud", "Gratis prøveperiode"], ["/blogg", "Blogg"], ["/#faq", "Flere spørsmål og svar"], ["/vilkar-for-bruk", "Vilkår for bruk"]].map(([href, text]) => <Link key={href} href={href} className="inline-flex min-h-11 items-center underline underline-offset-4">{text}</Link>)}</nav>
    </main>
  </div>;
}
