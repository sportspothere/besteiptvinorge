"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Check, Moon, Sun, ShoppingBag } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { PLANS } from "@/lib/offers";
import OrderForm from "@/components/OrderForm";
import ThemedDropdown from "@/components/ui/ThemedDropdown";

export default function Checkout() {
  const params = useSearchParams();
  const router = useRouter();
  const { theme, toggleTheme } = useLang();
  const dark = theme === "dark";
  const trial = params.get("duration") === "trial";
  const plan = PLANS.find(item => item.id === params.get("duration")) ?? PLANS[0];
  const devices = !trial && params.get("devices") === "2" ? 2 : 1;
  const price = trial ? 0 : plan.prices[devices === 2 ? "two" : "one"];
  const name = trial ? "Gratis IPTV-test – 24 timer" : plan.name;
  const muted = dark ? "text-slate-400" : "text-slate-500";
  const panel = dark ? "border-white/10 bg-[#0b1024]" : "border-slate-200 bg-white";

  function update(duration: string, count: number) {
    const next = new URLSearchParams(params.toString());
    next.set("duration", duration);
    next.set("devices", String(duration === "trial" ? 1 : count));
    router.replace(`/checkout?${next.toString()}`, { scroll: false });
  }

  return <div className={`min-h-screen ${dark ? "bg-[#04040e] text-white" : "bg-slate-50 text-slate-900"}`}>
    <div className="h-1 bg-gradient-to-r from-[#00205B] to-[#BA0C2F]" />
    <header className={`border-b ${panel}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3 rounded-lg focus-visible:ring-2 focus-visible:ring-blue-400"><Image src="/logo/logo.png" alt="" width={36} height={36} unoptimized /><span className="text-sm font-bold">Beste IPTV i Norge</span></Link>
        <button type="button" onClick={toggleTheme} aria-label={dark ? "Bytt til lyst tema" : "Bytt til mørkt tema"} className="rounded-full bg-slate-400/10 p-2.5 focus-visible:ring-2 focus-visible:ring-blue-400">{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
      </div>
    </header>
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <Link href="/#pricing" className={`inline-flex items-center gap-2 rounded text-sm hover:underline ${muted}`}><ArrowLeft size={16} />Tilbake til abonnementene</Link>
      <div className="mb-8 mt-6"><p className={`mb-2 text-xs font-bold uppercase tracking-[0.2em] ${dark ? "text-blue-300" : "text-[#00205B]"}`}>Din bestilling</p><h1 className="text-3xl font-bold sm:text-4xl">{trial ? "Prøv IPTV gratis i 24 timer" : "Velg abonnementet som passer deg"}</h1><p className={`mt-3 max-w-2xl leading-relaxed ${muted}`}>Velg periode og antall enheter, fyll inn opplysningene dine og send forespørselen på din foretrukne kontaktmåte.</p></div>
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className={`min-w-0 overflow-hidden rounded-3xl border ${panel}`}>
          <section className="px-6 pt-6 sm:px-8 sm:pt-8" aria-labelledby="subscription-heading">
            <h2 id="subscription-heading" className="text-lg font-bold">1. Tilpass abonnementet</h2>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
              <ThemedDropdown label="Varighet" value={trial ? "trial" : plan.id} options={[{ value: "trial", label: "24 timer \u2013 gratis" }, ...PLANS.map(item => ({ value: item.id, label: item.name }))]} onChange={value => update(value, devices)} />
              <ThemedDropdown label="Antall enheter" value={String(devices)} disabled={trial} options={[{ value: "1", label: "1 enhet" }, { value: "2", label: "2 enheter" }]} onChange={value => update(trial ? "trial" : plan.id, Number(value))} />
            </div>
            {trial && <p className={`mt-3 text-xs ${muted}`}>Gratis prøveperiode gjelder én enhet.</p>}
          </section>
          <OrderForm embedded offer={{ name, devices, price, ...(trial ? { kind: "trial" as const } : {}) }} />
        </div>
        <aside aria-labelledby="summary-heading" className={`rounded-3xl border p-6 lg:sticky lg:top-6 ${panel}`}>
          <div className="flex items-center gap-3"><ShoppingBag size={21} className={dark ? "text-blue-300" : "text-[#00205B]"} /><h2 id="summary-heading" className="text-xl font-bold">Din bestilling</h2></div>
          <dl className="mt-6 space-y-4 text-sm"><div className="flex justify-between gap-3"><dt className={muted}>Varighet</dt><dd className="text-right font-semibold">{name}</dd></div><div className="flex justify-between gap-3"><dt className={muted}>Antall enheter</dt><dd className="font-semibold">{devices}</dd></div></dl>
          <div className={`mt-6 border-t pt-6 ${dark ? "border-white/10" : "border-slate-200"}`} aria-live="polite" aria-atomic="true"><p className={`text-sm ${muted}`}>{trial ? "Gratis prøveperiode" : "Pris for valgt periode"}</p><p className="mt-2 text-4xl font-black">{price}<span className={`ml-2 text-lg font-medium ${muted}`}>kr</span></p></div>
          <p className={`mt-4 text-xs leading-relaxed ${muted}`}>{trial ? "Send forespørselen for å avtale aktivering av 24 timer gratis IPTV." : "Oppgitt pris må bekreftes. Avklar totalpris, innhold og vilkår før betaling."}</p>
          <div className={`mt-6 border-t pt-5 text-sm ${dark ? "border-white/10" : "border-slate-200"}`}><p className="flex items-center gap-2"><Check size={16} className="text-emerald-500" />WhatsApp, Telegram eller Gmail</p><p className={`mt-3 text-xs leading-relaxed ${muted}`}>Ingen betaling trekkes på denne siden. Du ser over og sender meldingen selv.</p></div>
        </aside>
      </div>
    </main>
  </div>;
}
