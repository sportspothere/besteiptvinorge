"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import InstallationInstructions from "@/components/InstallationInstructions";
import { useLang } from "@/lib/lang-context";
import { installationGuides, type InstallationGuide } from "@/lib/installation-guides";
import { supportUrl } from "@/lib/installation";

export default function InstallationGuideArticle({ guide }: { guide: InstallationGuide }) {
  const { theme } = useLang(); const dark = theme === "dark";
  const muted = dark ? "text-slate-400" : "text-slate-600";
  const panel = dark ? "border-white/10 bg-[#080f21]" : "border-slate-200 bg-white";
  return <div className={dark ? "bg-[#050510] text-slate-100" : "bg-slate-50 text-slate-900"}>
    <a href="#guide-content" className="skip-link">Hopp til innhold</a><Navbar standalone />
    <main id="guide-content" tabIndex={-1} className="mx-auto max-w-4xl px-4 pb-20 pt-32 sm:px-6 sm:pt-40">
      <nav aria-label="Brødsmuler" className={`mb-7 text-xs leading-relaxed ${muted}`}><ol className="flex flex-wrap gap-2"><li><Link href="/">Hjem</Link></li><li aria-hidden="true">→</li><li><Link href="/guider">Installasjonsguider</Link></li><li aria-hidden="true">→</li><li aria-current="page">{guide.title}</li></ol></nav>
      <article><header><p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-[#00205B] dark:text-[#F5B335]">Praktisk installasjonsguide</p><h1 className="font-orbitron text-2xl font-black leading-snug sm:text-4xl">{guide.title}</h1><p className={`mt-5 text-lg leading-relaxed ${muted}`}>{guide.intro}</p><p className={`mt-4 text-xs ${muted}`}>Kilder kontrollert: <time dateTime="2026-11-02">2. november 2026</time></p></header>
        <div className="my-8 space-y-7">{guide.sections.map(s => <section key={s.title}><h2 className="mb-3 text-xl font-bold">{s.title}</h2><p className={`text-sm leading-7 ${muted}`}>{s.text}</p></section>)}</div>
        {guide.slug === "iptv-smarters-oppsett" && <a href="https://apps.apple.com/no/app/smarters-player-lite/id1628995509" className="mb-6 inline-flex min-h-11 items-center text-sm font-semibold text-[#00205B] dark:text-[#F5B335] underline">Kontrollert Smarters Player Lite-oppføring i App Store</a>}
        {guide.setup && <section className={`rounded-3xl border p-4 sm:p-7 ${panel}`}><InstallationInstructions {...guide.setup} /></section>}
        <aside className="mt-8 rounded-2xl bg-gradient-to-br from-[#00205B] to-[#27132e] p-6 text-white"><h2 className="text-xl font-bold">Trenger du et annet oppsett?</h2><p className="mt-3 text-sm leading-7 text-blue-100/80">Veiviseren viser andre dokumenterte kombinasjoner. Bruk feilsøkingen hvis appen er satt opp, men avspillingen ikke fungerer.</p><div className="mt-5 flex flex-wrap gap-x-6 gap-y-4 text-sm font-semibold"><Link href="/slik-bruker-du-iptv#veiviser" className="underline underline-offset-4">Åpne veiviseren</Link><Link href="/slik-bruker-du-iptv#feilsoking" className="underline underline-offset-4">Se feilsøking</Link><a href={supportUrl(guide.setup?.device, guide.setup?.player)} className="underline underline-offset-4">Kontakt oss</a><a href="/#pricing" className="underline underline-offset-4">Se abonnementer</a></div></aside>
      </article>
      <section className="mt-10" aria-labelledby="related-guides"><h2 id="related-guides" className="mb-5 text-xl font-bold">Relaterte guider</h2><div className="grid gap-3 sm:grid-cols-2">{installationGuides.filter(g => guide.related.includes(g.slug)).map(g => <Link key={g.slug} href={`/guider/${g.slug}`} className={`flex min-h-20 items-center justify-between gap-3 rounded-xl border p-4 text-sm font-semibold hover:border-[#F5B335]/50 ${panel}`}>{g.title}<ArrowRight size={16} className="shrink-0 text-[#00205B] dark:text-[#F5B335]" /></Link>)}</div></section>
    </main>
  </div>;
}
