"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLang } from "@/lib/lang-context";
import { footerGroups } from "@/lib/footer-links";
import { CookieSettingsButton } from "@/components/CookieConsent";

export default function Footer() {
  const { theme } = useLang();
  const dark = theme === "dark";
  const [year, setYear] = useState<string | null>(null);
  useEffect(() => {
    setYear(new Intl.DateTimeFormat("nb-NO", { year: "numeric", timeZone: "Africa/Casablanca" }).format(new Date()));
  }, []);
  const focus = "rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400";

  return <footer className={`border-t px-5 pb-7 pt-12 sm:px-6 sm:pt-16 ${dark ? "border-white/10 bg-[#050510]" : "border-slate-200 bg-slate-50"}`}>
    <div className="mx-auto max-w-7xl">
      <div className="grid items-start gap-10 pb-10 lg:grid-cols-[160px_minmax(0,1fr)] lg:gap-12 lg:pb-14">
        <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-5">
          <a href="/" aria-label="Beste IPTV Norge – forsiden" className={`shrink-0 ${focus}`}>
            <Image src="/logo/logo.png" alt="Beste IPTV Norge" width={96} height={96} className="h-20 w-20 rounded-xl object-contain sm:h-24 sm:w-24" unoptimized />
          </a>
          <p className={`max-w-52 text-sm leading-relaxed ${dark ? "text-slate-400" : "text-slate-600"}`}>TV over internett.<br />Guider, abonnement og hjelp samlet på ett sted.</p>
        </div>
        <div className="grid gap-x-7 gap-y-8 min-[380px]:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {footerGroups.map((group, i) => <nav key={group.title} aria-labelledby={`footer-group-${i}`}>
            <h2 id={`footer-group-${i}`} className={`mb-3 text-xs font-bold uppercase leading-5 tracking-[0.12em] min-[380px]:min-h-10 ${dark ? "text-slate-100" : "text-[#00205B]"}`}>{group.title}</h2>
            <ul>{group.links.map(({ label, href }) => <li key={label}><a href={href} className={`flex min-h-11 w-fit items-center py-2 text-sm leading-relaxed transition-colors ${focus} ${dark ? "text-slate-400 hover:text-[#4d9de0]" : "text-slate-600 hover:text-[#BA0C2F]"}`}>{label}</a></li>)}</ul>
          </nav>)}
        </div>
      </div>
      <div className={`flex flex-col gap-4 border-t pt-6 text-xs leading-relaxed sm:flex-row sm:items-center sm:justify-between ${dark ? "border-white/10 text-slate-400" : "border-slate-200 text-slate-600"}`}>
        <p>© {year && `${year} `}Beste IPTV Norge. Alle rettigheter forbeholdt.</p>
        <CookieSettingsButton className={`w-fit text-left underline-offset-4 transition-colors hover:text-blue-400 hover:underline ${focus}`} />
      </div>
    </div>
  </footer>;
}
