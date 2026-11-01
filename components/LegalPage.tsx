"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ChevronDown, FileText } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import { useLang } from "@/lib/lang-context";

export type LegalSection = { id: string; title: string; paragraphs: readonly string[] };
type Props = {
  title: string; eyebrow: string; subtitle: string; contentId: string;
  sections: readonly LegalSection[]; intro: ReactNode; updated?: string;
  highlights?: ReactNode; renderSection?: (id: string) => ReactNode;
  headingClassName?: string;
};

export default function LegalPage({ title, eyebrow, subtitle, contentId, sections, intro, updated, highlights, renderSection, headingClassName = "text-3xl sm:text-5xl lg:text-6xl" }: Props) {
  const { theme } = useLang();
  const dark = theme === "dark";
  const [active, setActive] = useState(sections[0].id);
  const [menuOpen, setMenuOpen] = useState(false);
  const muted = dark ? "text-slate-400" : "text-slate-600";
  const panel = dark ? "border-white/10 bg-[#0b1020]" : "border-slate-200 bg-white";
  const menuId = `${contentId.replace(/-content$/, "")}-mobile-contents`;
  useEffect(() => {
    const update = () => {
      let current = sections[0].id;
      for (const { id } of sections) {
        const top = document.getElementById(id)?.getBoundingClientRect().top;
        if (top !== undefined && top <= 180) current = id;
      }
      setActive(current);
    };
    update(); window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [sections]);
  const contents = (mobile = false) => <ol className="space-y-1">{sections.map(({ id, title: label }, index) => <li key={id}>
    <a href={`#${id}`} onClick={() => { setActive(id); if (mobile) setMenuOpen(false); }} aria-current={active === id ? "location" : undefined}
      className={`flex items-start gap-3 rounded-xl px-3 py-2.5 text-xs leading-relaxed transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400 ${active === id ? dark ? "bg-blue-400/10 text-blue-200" : "bg-blue-50 text-[#00205B]" : `${muted} hover:bg-blue-400/5 hover:text-blue-500`}`}>
      <span className="w-4 shrink-0 font-semibold tabular-nums">{String(index + 1).padStart(2, "0")}</span><span>{label}</span>
    </a>
  </li>)}</ol>;

  return <div className={dark ? "min-h-screen bg-[#050510] text-slate-100" : "min-h-screen bg-slate-50 text-slate-900"}>
    <a href={`#${contentId}`} className="skip-link">Hopp til innhold</a>
    <Navbar standalone />
    <main id={contentId} tabIndex={-1} className="pt-28">
      <header className="relative overflow-hidden border-b border-slate-400/15 px-4 pb-12 pt-7 sm:pb-16 sm:pt-12">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#00205B]/15 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-48 right-1/4 h-80 w-80 rounded-full bg-[#BA0C2F]/5 blur-3xl" />
        <div className="relative mx-auto max-w-6xl">
          <nav aria-label="Brødsmuler" className={`mb-9 text-sm ${muted}`}><ol className="flex flex-wrap gap-3"><li><a href="/" className="hover:text-blue-500 hover:underline">Hjem</a></li><li aria-hidden="true">→</li><li aria-current="page">{title}</li></ol></nav>
          <div className="flex items-start justify-between gap-8"><div className="min-w-0 max-w-3xl">
            <p className={`mb-4 text-xs font-bold uppercase tracking-[0.2em] ${dark ? "text-blue-300" : "text-[#00205B]"}`}>{eyebrow}</p>
            <h1 className={`font-orbitron break-words font-black tracking-tight ${headingClassName}`}>{title}</h1>
            <p className={`mt-5 max-w-2xl text-lg leading-relaxed ${muted}`}>{subtitle}</p>
            {updated && <p className={`mt-5 text-xs ${muted}`}>Sist oppdatert: <time dateTime={updated}>{new Intl.DateTimeFormat("nb-NO", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${updated}T12:00:00Z`))}</time></p>}
          </div><span className={`hidden rounded-3xl border p-6 sm:block ${panel}`}><FileText size={42} className="text-blue-400" aria-hidden="true" /></span></div>
        </div>
      </header>
      {highlights && <div className="mx-auto max-w-6xl px-4 pt-8">{highlights}</div>}
      <div className="mx-auto grid max-w-6xl items-start gap-8 px-4 py-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12 lg:py-12">
        <aside className={`sticky top-24 hidden max-h-[calc(100dvh-7rem)] overflow-y-auto rounded-2xl border p-4 lg:block ${panel}`}><nav aria-label="Innhold på siden"><p className="mb-3 px-3 text-xs font-bold uppercase tracking-widest">På denne siden</p>{contents()}</nav></aside>
        <div className="min-w-0">
          <nav aria-label="Innhold på siden, mobil" className={`mb-6 rounded-2xl border lg:hidden ${panel}`}>
            <button type="button" aria-controls={menuId} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} className="flex w-full items-center justify-between gap-3 rounded-2xl p-4 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400">På denne siden <ChevronDown size={18} className={`transition ${menuOpen ? "rotate-180" : ""}`} /></button>
            <div id={menuId} hidden={!menuOpen} className="max-h-80 overflow-auto px-2 pb-3">{contents(true)}</div>
          </nav>
          <div className={`mb-8 rounded-2xl border p-6 sm:p-8 ${panel}`}>{intro}</div>
          <div className={`divide-y rounded-3xl border px-5 sm:px-8 ${dark ? "divide-white/10 border-white/10 bg-white/[0.02]" : "divide-slate-200 border-slate-200 bg-white"}`}>
            {sections.map(({ id, title: label, paragraphs }, index) => <section key={id} id={id} aria-labelledby={`${id}-title`} className="scroll-mt-28 py-8 sm:py-10">
              <div className="mb-5 flex items-start gap-3"><span aria-hidden="true" className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-semibold ${dark ? "bg-blue-400/10 text-blue-300" : "bg-blue-50 text-[#00205B]"}`}>{index + 1}</span><h2 id={`${id}-title`} className="text-xl font-bold leading-snug sm:text-2xl">{label}</h2></div>
              <div className={`space-y-4 text-[15px] leading-7 ${muted}`}>{paragraphs.map(p => <p key={p}>{p}</p>)}</div>
              {renderSection?.(id)}
            </section>)}
          </div>
        </div>
      </div>
    </main>
  </div>;
}
