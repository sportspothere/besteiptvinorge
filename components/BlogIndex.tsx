"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Search } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import { useLang } from "@/lib/lang-context";
import { articles, blogCategories, type BlogArticle } from "@/lib/blog";

const searchable = (value: string) => value.normalize("NFD").replace(/\p{M}/gu, "").toLocaleLowerCase("nb-NO");

export default function BlogIndex() {
  const { theme } = useLang();
  const dark = theme === "dark";
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Alle");
  const muted = dark ? "text-slate-400" : "text-slate-600";
  const panel = dark ? "border-white/10 bg-[#0b1020]" : "border-slate-200 bg-white";
  const featured = !query.trim() && category === "Alle" ? articles[0] : null;
  const filtered = articles.filter(a => (category === "Alle" || category === a.category) && searchable([a.title, a.excerpt, ...a.sections.flatMap(s => [s.title, ...s.paragraphs, ...(s.bullets ?? [])])].join(" ")).includes(searchable(query.trim())));
  const grid = featured ? filtered.filter(a => a.slug !== featured.slug) : filtered;
  const card = (article: BlogArticle) => <article key={article.slug} className={`flex flex-col rounded-2xl border p-6 transition hover:-translate-y-1 hover:border-blue-400/40 ${panel}`}>
    <span className="mb-5 w-fit rounded-full bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-500">{article.category}</span>
    <h3 className="text-xl font-bold leading-snug"><Link href={`/blogg/${article.slug}`} className="rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400">{article.title}</Link></h3>
    <p className={`mb-6 mt-3 text-sm leading-relaxed ${muted}`}>{article.excerpt}</p>
    <Link href={`/blogg/${article.slug}`} aria-label={`Les: ${article.title}`} className="mt-auto inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-blue-500 hover:underline">Les artikkelen <ArrowRight size={16} /></Link>
  </article>;

  return <div className={dark ? "min-h-screen bg-[#050510] text-slate-100" : "min-h-screen bg-slate-50 text-slate-900"}>
    <a href="#blog-content" className="skip-link">Hopp til innhold</a><Navbar standalone />
    <main id="blog-content" tabIndex={-1} className="px-4 pb-20 pt-36 sm:px-6 sm:pt-40">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-blue-500">Guider og gode råd</p>
        <h1 className="font-orbitron max-w-3xl text-3xl font-black leading-tight sm:text-5xl">Gjør TV-hverdagen enklere</h1>
        <p className={`mt-5 max-w-2xl text-lg leading-relaxed ${muted}`}>Bli kjent med IPTV, finn hjelp til oppsett og få praktiske råd når avspillingen stopper. Her finner du artikler du kan bruke før og etter bestilling.</p>
        <div className="mb-8 mt-9 flex flex-col gap-5">
          <label className={`relative block max-w-xl rounded-full border ${panel}`}><span className="sr-only">Søk i artikler</span><Search size={19} className={`pointer-events-none absolute left-4 top-3.5 ${muted}`} aria-hidden="true" /><input type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Søk etter oppsett, enheter eller feilsøking" className="w-full rounded-full bg-transparent py-3 pl-12 pr-4 text-sm outline-none focus-visible:ring-2 focus-visible:ring-blue-400" /></label>
          <div role="group" aria-label="Artikkelkategorier" className="flex flex-wrap gap-2">{["Alle", ...blogCategories].map(label => <button type="button" key={label} aria-pressed={category === label} onClick={() => setCategory(label)} className={`min-h-11 rounded-full border px-4 py-2 text-xs font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 ${category === label ? "border-[#00205B] bg-[#00205B] text-white" : `${panel} ${muted} hover:border-blue-400/50`}`}>{label}</button>)}</div>
        </div>
        <p role="status" className={`mb-5 text-xs ${muted}`}>{filtered.length} {filtered.length === 1 ? "artikkel" : "artikler"}</p>
        {featured && <section aria-labelledby="featured-title" className="mb-8 overflow-hidden rounded-3xl bg-gradient-to-br from-[#00205B] via-[#0b2045] to-[#48132c] text-white">
          <div className="grid items-center gap-8 p-6 sm:p-9 lg:grid-cols-[1.5fr_1fr]">
            <div><p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-blue-200">Start her · Utvalgt guide</p><h2 id="featured-title" className="text-2xl font-bold leading-tight sm:text-3xl">{featured.title}</h2><p className="mt-4 max-w-xl text-sm leading-relaxed text-blue-100/80">{featured.excerpt}</p><Link href={`/blogg/${featured.slug}`} className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#00205B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300">Les guiden <ArrowRight size={16} /></Link></div>
            <div className="hidden rounded-2xl border border-white/15 bg-white/5 p-7 lg:block"><BookOpen size={36} className="mb-6 text-blue-200" aria-hidden="true" /><p className="text-xl font-semibold">Forstå det grunnleggende.</p><p className="mt-3 text-sm leading-relaxed text-blue-100/75">Hva du trenger, hvordan delene henger sammen og hva du bør sjekke før du velger.</p></div>
          </div>
        </section>}
        <section aria-label="Artikler"><h2 className="sr-only">{featured ? "Flere nyttige artikler" : "Søkeresultater"}</h2><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{grid.map(card)}</div>
          {!filtered.length && <div className={`rounded-2xl border p-8 text-center ${panel}`}><h3 className="text-lg font-bold">Ingen artikler passer søket</h3><p className={`mt-2 text-sm ${muted}`}>Prøv et annet søkeord eller vis alle kategorier.</p><button type="button" onClick={() => { setQuery(""); setCategory("Alle"); }} className="mt-5 min-h-11 rounded-full border border-blue-400/40 px-5 text-sm font-semibold text-blue-500 focus-visible:outline focus-visible:outline-2">Nullstill søk</button></div>}
        </section>
        <aside className={`mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border p-6 sm:flex-row sm:items-center ${panel}`}><div><h2 className="font-bold">Klar for å sette opp tjenesten?</h2><p className={`mt-2 text-sm ${muted}`}>Følg installasjonsguiden steg for steg.</p></div><Link href="/slik-bruker-du-iptv" className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-semibold text-blue-500 hover:underline">Åpne installasjonsguiden <ArrowRight size={16} /></Link></aside>
      </div>
    </main>
  </div>;
}
