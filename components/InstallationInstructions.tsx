"use client";

import { ArrowRight, ExternalLink, ShieldCheck } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { devices, players, methods, installationSteps, supportUrl, type MethodId } from "@/lib/installation";

export default function InstallationInstructions({ device, player, method, embedded = false }: { device: string; player: string; method: MethodId; embedded?: boolean }) {
  const { theme } = useLang(); const dark = theme === "dark";
  const p = players.find(p => p.id === player); const d = devices.find(d => d.id === device);
  const steps = installationSteps(device, player, method);
  if (!p || !d || !steps.length) return null;
  const Title = embedded ? "h3" : "h2"; const StepTitle = embedded ? "h4" : "h3";
  const muted = dark ? "text-slate-400" : "text-slate-600";
  return <div className="min-w-0" data-installation-result>
    <Title className="text-xl font-bold leading-snug sm:text-2xl">{p.name} på {d.name}</Title>
    <p className={`mt-3 text-sm leading-relaxed ${muted}`}>{methods[method].name} · {p.version}</p>
    <figure className={`my-6 rounded-2xl border p-4 sm:p-5 ${dark ? "border-white/10 bg-white/[0.03]" : "border-slate-200 bg-slate-50"}`}>
      <div className="grid grid-cols-1 items-center gap-2 sm:grid-cols-[1fr_auto_1fr_auto_1fr]">{[d.name, p.name, "Ditt autoriserte innhold"].map((text, i) => <div key={text} className="contents">{i > 0 && <ArrowRight size={16} className="mx-auto rotate-90 text-[#00205B] dark:text-[#F5B335] sm:rotate-0" aria-hidden="true" />}<p className="rounded-xl border border-[#F5B335]/25 px-3 py-3 text-center text-xs font-semibold">{text}</p></div>)}</div>
      <figcaption className={`mt-3 text-xs leading-relaxed ${muted}`}>Forenklet illustrasjon av oppsettet. Dette er ikke et skjermbilde av appen.</figcaption>
    </figure>
    <div className={`mb-6 rounded-xl border p-4 text-sm leading-relaxed ${dark ? "border-[#F5B335]/25 bg-[#F5B335]/5 text-slate-300" : "border-[#00205B]/15 bg-[#00205B]/5 text-slate-700"}`}><ShieldCheck size={20} className="mb-2 text-[#00205B] dark:text-[#F5B335]" aria-hidden="true" />En app-lisens og et IPTV-abonnement er forskjellige kjøp. Bare legg til innhold du har rett til å bruke. Kontroller modell, butikktilgjengelighet og din tilgang før du kjøper en app.</div>
    <div className="mb-6 flex flex-wrap gap-4 text-sm font-semibold text-[#00205B] dark:text-[#F5B335]"><a href={p.download} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 underline underline-offset-4">Offisiell app/nettside <ExternalLink size={14} /></a><a href={p.source} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 underline underline-offset-4">Utgiverens dokumentasjon <ExternalLink size={14} /></a></div>
    <ol className="space-y-4">{steps.map((step, i) => <li key={step.title} className={`flex min-w-0 items-start gap-3 rounded-2xl border p-4 sm:gap-4 sm:p-5 ${dark ? "border-white/10 bg-white/[0.02]" : "border-slate-200 bg-white"}`}><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F5B335]/10 text-xs font-bold text-[#00205B] dark:text-[#F5B335]" aria-hidden="true">{i + 1}</span><div className="min-w-0"><StepTitle className="break-words text-base font-bold">{step.title}</StepTitle><p className={`mt-2 text-sm leading-7 ${muted}`}>{step.text}</p></div></li>)}</ol>
    <a href={supportUrl(device, player, method)} className="mt-7 inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#00205B] to-[#BA0C2F] px-5 py-3 text-sm font-bold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5B335]"><span>Få hjelp med dette oppsettet</span><ArrowRight size={16} className="shrink-0" /></a>
  </div>;
}
