"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import { useLang } from "@/lib/lang-context";
import { articles, type BlogArticle as Article } from "@/lib/blog";

export default function BlogArticle({ article }: { article: Article }) {
  const { theme } = useLang();
  const dark = theme === "dark";
  const muted = dark ? "text-slate-400" : "text-slate-600";
  const panel = dark ? "border-white/10 bg-[#0b1020]" : "border-slate-200 bg-white";
  const related = articles.filter(a => article.related.includes(a.slug));
  return <div className={dark ? "bg-[#050510] text-slate-100" : "bg-slate-50 text-slate-900"}>
    <a href="#article-content" className="skip-link">Hopp til innhold</a><Navbar standalone />
    <main id="article-content" tabIndex={-1} className="mx-auto max-w-4xl px-4 pb-20 pt-36 sm:px-6 sm:pt-40">
      <Link href="/blogg" className={`mb-8 inline-flex min-h-11 items-center gap-2 text-sm hover:text-blue-500 ${muted}`}><ArrowLeft size={16} />Tilbake til bloggen</Link>
      <article>
        <header><p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-blue-500">{article.category}</p><h1 className="font-orbitron text-2xl font-black leading-snug sm:text-4xl">{article.title}</h1><p className={`mt-5 text-lg leading-relaxed ${muted}`}>{article.excerpt}</p></header>
        <nav aria-label="I denne artikkelen" className={`my-8 rounded-2xl border p-5 sm:p-6 ${panel}`}><p className="mb-3 text-sm font-bold">I denne artikkelen</p><ul className="space-y-1">{article.sections.map(s => <li key={s.id}><a href={`#${s.id}`} className="inline-flex min-h-11 items-center text-sm font-medium text-blue-500 hover:underline focus-visible:outline focus-visible:outline-2">{s.title}</a></li>)}</ul></nav>
        <div className="space-y-9">{article.sections.map(s => <section id={s.id} key={s.id} aria-labelledby={`${s.id}-heading`} className="scroll-mt-28"><h2 id={`${s.id}-heading`} className="mb-4 text-xl font-bold sm:text-2xl">{s.title}</h2><div className={`space-y-4 text-[15px] leading-7 ${muted}`}>{s.paragraphs.map(p => <p key={p}>{p}</p>)}{s.bullets && <ul className="list-disc space-y-2 pl-5">{s.bullets.map(b => <li key={b}>{b}</li>)}</ul>}</div></section>)}</div>
        <aside className="mt-10 rounded-2xl bg-gradient-to-br from-[#00205B] to-[#27132e] p-6 text-white"><h2 className="text-xl font-bold">Ta neste steg i ditt tempo</h2><p className="mt-3 text-sm leading-relaxed text-blue-100/80">Se oppsettet samlet, utforsk abonnementene eller spør oss på WhatsApp.</p><div className="mt-5 flex flex-wrap gap-x-6 gap-y-4 text-sm font-semibold"><Link href="/slik-bruker-du-iptv" className="underline underline-offset-4">Installasjonsguide</Link><a href="/#pricing" className="underline underline-offset-4">Abonnement og priser</a><a href="/#contact" className="underline underline-offset-4">Kontakt oss</a><Link href="/refusjonspolicy" className="underline underline-offset-4">Refusjonspolicy</Link></div></aside>
      </article>
      <section aria-labelledby="related-title" className="mt-12"><h2 id="related-title" className="mb-5 text-xl font-bold">Les også</h2><div className="grid gap-4 sm:grid-cols-2">{related.map(a => <Link key={a.slug} href={`/blogg/${a.slug}`} className={`rounded-2xl border p-5 transition hover:border-blue-400/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400 ${panel}`}><p className="mb-3 text-xs text-blue-500">{a.category}</p><h3 className="font-semibold leading-relaxed">{a.title}</h3><ArrowRight size={18} className="mt-4 text-blue-500" aria-hidden="true" /></Link>)}</div></section>
    </main>
  </div>;
}
