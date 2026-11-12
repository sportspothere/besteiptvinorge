"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import { useLang } from "@/lib/lang-context";
import { articles, type Block, type BlogArticle as Article } from "@/lib/blog";
import { installationGuides } from "@/lib/installation-guides";

function Blocks({ blocks, dark, panel }: { blocks: Block[]; dark: boolean; panel: string }) {
  const strong = dark ? "text-slate-100" : "text-slate-900";
  return <>{blocks.map((b, i) => {
    if ("table" in b) return <div key={i} className={`overflow-x-auto rounded-xl border ${panel}`}><table className="w-full min-w-[480px] border-collapse text-left text-sm"><thead><tr>{b.table.head.map(h => <th key={h} scope="col" className={`border-b px-4 py-3 font-semibold ${strong} ${dark ? "border-white/10" : "border-slate-200"}`}>{h}</th>)}</tr></thead><tbody>{b.table.rows.map((r, ri) => <tr key={ri} className={`border-b last:border-0 ${dark ? "border-white/5" : "border-slate-100"}`}>{r.map((c, ci) => ci === 0 && b.table.head.length > 2 ? <th key={ci} scope="row" className={`px-4 py-3 align-top font-semibold ${strong}`}>{c}</th> : <td key={ci} className="px-4 py-3 align-top">{c}</td>)}</tr>)}</tbody></table></div>;
    if ("list" in b) { const L = b.ordered ? "ol" : "ul"; return <L key={i} className={`${b.ordered ? "list-decimal" : "list-disc"} space-y-2 pl-5`}>{b.list.map(x => <li key={x}>{x}</li>)}</L>; }
    if ("note" in b) return <p key={i} className={`rounded-xl border-l-4 border-blue-500 px-5 py-4 ${dark ? "bg-blue-400/10 text-slate-200" : "bg-blue-50 text-slate-800"}`}>{b.note}</p>;
    if ("label" in b) return <p key={i} className={`font-semibold ${strong}`}>{b.label}</p>;
    if ("links" in b) return <ul key={i} className="list-disc space-y-2 pl-5">{b.links.map(l => <li key={l.href}><a href={l.href} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline-offset-4 hover:underline">{l.label}</a></li>)}</ul>;
    return <p key={i}>{b.lead && <strong className={strong}>{b.lead} </strong>}{b.p}</p>;
  })}</>;
}

export default function BlogArticle({ article }: { article: Article }) {
  const { theme } = useLang();
  const dark = theme === "dark";
  const muted = dark ? "text-slate-400" : "text-slate-600";
  const panel = dark ? "border-white/10 bg-[#0b1020]" : "border-slate-200 bg-white";
  const strong = dark ? "text-slate-100" : "text-slate-900";
  const related = articles.filter(a => article.related.includes(a.slug));
  const guideSlugs: Record<string, string[]> = {
    "hvordan-fungerer-iptv": ["iptv-m3u-spilleliste", "iptv-xtream-codes"],
    "sette-opp-iptv-pa-smart-tv": ["iptv-samsung-smart-tv", "iptv-lg-smart-tv", "iptv-android-tv"],
    "hva-bor-du-sjekke-for-du-velger-iptv": ["tivimate-oppsett", "ibo-player-oppsett"],
    "iptv-fryser-eller-stopper": ["iptv-m3u-spilleliste", "iptv-xtream-codes"],
    "beste-iptv-norge": ["tivimate-oppsett", "ibo-player-oppsett", "iptv-samsung-smart-tv", "iptv-lg-smart-tv", "iptv-android-tv"],
  };
  const guides = installationGuides.filter(g => guideSlugs[article.slug]?.includes(g.slug));
  return <div className={dark ? "bg-[#050510] text-slate-100" : "bg-slate-50 text-slate-900"}>
    <a href="#article-content" className="skip-link">Hopp til innhold</a><Navbar standalone />
    <main id="article-content" tabIndex={-1} className="mx-auto max-w-4xl px-4 pb-20 pt-36 sm:px-6 sm:pt-40">
      <Link href="/blogg" className={`mb-8 inline-flex min-h-11 items-center gap-2 text-sm hover:text-blue-500 ${muted}`}><ArrowLeft size={16} />Tilbake til bloggen</Link>
      <article>
        <header><p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-blue-500">{article.category}</p><h1 className="font-orbitron text-2xl font-black leading-snug sm:text-4xl">{article.title}</h1><p className={`mt-5 text-lg leading-relaxed ${muted}`}>{article.excerpt}</p>{article.hero && <figure className="my-8"><img src={article.hero.src} alt={article.hero.alt} width={article.hero.width} height={article.hero.height} fetchPriority="high" decoding="async" className="h-auto w-full rounded-2xl" />{article.hero.caption && <figcaption className={`mt-3 text-center text-xs ${muted}`}>{article.hero.caption}</figcaption>}</figure>}{article.intro && <div className={`mt-6 space-y-4 text-[15px] leading-7 ${muted}`}><Blocks blocks={article.intro} dark={dark} panel={panel} /></div>}</header>
        <nav aria-label="I denne artikkelen" className={`my-8 rounded-2xl border p-5 sm:p-6 ${panel}`}><p className="mb-3 text-sm font-bold">I denne artikkelen</p><ul className="space-y-1">{article.sections.map(s => <li key={s.id}><a href={`#${s.id}`} className="inline-flex min-h-11 items-center text-sm font-medium text-blue-500 hover:underline focus-visible:outline focus-visible:outline-2">{s.title}</a></li>)}</ul></nav>
        <div className="space-y-9">{article.sections.map(s => <section id={s.id} key={s.id} aria-labelledby={`${s.id}-heading`} className="scroll-mt-28"><h2 id={`${s.id}-heading`} className="mb-4 text-xl font-bold sm:text-2xl">{s.title}</h2><div className={`space-y-4 text-[15px] leading-7 ${muted}`}>{s.paragraphs.map(p => <p key={p}>{p}</p>)}{s.bullets && <ul className="list-disc space-y-2 pl-5">{s.bullets.map(b => <li key={b}>{b}</li>)}</ul>}{s.blocks && <Blocks blocks={s.blocks} dark={dark} panel={panel} />}{s.subsections?.map(sub => <div key={sub.id} id={sub.id} className="scroll-mt-28 space-y-4 pt-3"><h3 className={`text-lg font-bold sm:text-xl ${strong}`}>{sub.title}</h3><Blocks blocks={sub.blocks} dark={dark} panel={panel} /></div>)}{s.faq && <div className="space-y-5">{s.faq.map(f => <div key={f.q}><h3 className={`mb-2 text-base font-bold sm:text-lg ${strong}`}>{f.q}</h3><p>{f.a}</p></div>)}</div>}</div></section>)}</div>
        <aside className="mt-10 rounded-2xl bg-gradient-to-br from-[#00205B] to-[#27132e] p-6 text-white"><h2 className="text-xl font-bold">Ta neste steg i ditt tempo</h2><p className="mt-3 text-sm leading-relaxed text-blue-100/80">Se oppsettet samlet, utforsk abonnementene eller spør oss på WhatsApp.</p><div className="mt-5 flex flex-wrap gap-x-6 gap-y-4 text-sm font-semibold"><Link href="/slik-bruker-du-iptv" className="underline underline-offset-4">Installasjonsguide</Link><a href="/#pricing" className="underline underline-offset-4">Abonnement og priser</a><a href="/#contact" className="underline underline-offset-4">Kontakt oss</a><Link href="/refusjonspolicy" className="underline underline-offset-4">Refusjonspolicy</Link></div></aside>
        <nav aria-label="Installasjonsguider til denne artikkelen" className={`mt-7 rounded-2xl border p-5 ${panel}`}><h2 className="mb-3 font-bold">Følg oppsettet steg for steg</h2><ul className="space-y-2">{guides.map(g => <li key={g.slug}><Link href={`/guider/${g.slug}`} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-blue-500 hover:underline">{g.title}<ArrowRight size={15} className="shrink-0" /></Link></li>)}</ul></nav>
      </article>
      <section aria-labelledby="related-title" className="mt-12"><h2 id="related-title" className="mb-5 text-xl font-bold">Les også</h2><div className="grid gap-4 sm:grid-cols-2">{related.map(a => <Link key={a.slug} href={`/blogg/${a.slug}`} className={`rounded-2xl border p-5 transition hover:border-blue-400/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400 ${panel}`}><p className="mb-3 text-xs text-blue-500">{a.category}</p><h3 className="font-semibold leading-relaxed">{a.title}</h3><ArrowRight size={18} className="mt-4 text-blue-500" aria-hidden="true" /></Link>)}</div></section>
    </main>
  </div>;
}
