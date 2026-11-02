"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Monitor, RotateCcw, Smartphone, Tv2, Box, HelpCircle, Flame, Radio, Layers, Sparkles, Play } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { devices, players, methods, availablePlayers, playerChoices, supportUrl, type MethodId } from "@/lib/installation";
import InstallationInstructions from "@/components/InstallationInstructions";

const categories = [
  { id: "fire", name: "Fire TV Stick", icon: Flame, ids: ["fire-tv"] },
  { id: "streaming", name: "TV-boks og strømming", icon: Box, ids: ["android-box", "shield", "chromecast", "apple-tv"] },
  { id: "tv", name: "Smart TV", icon: Tv2, ids: ["samsung", "lg", "android-tv", "google-tv", "other-tv"] },
  { id: "mobile", name: "Mobil og nettbrett", icon: Smartphone, ids: ["android-phone", "android-tablet", "iphone", "ipad"] },
  { id: "computer", name: "PC og Mac", icon: Monitor, ids: ["windows", "mac", "linux"] },
  { id: "mag", name: "MAG-boks", icon: Radio, ids: ["mag"] },
  { id: "formuler", name: "Formuler", icon: Layers, ids: ["formuler"] },
  { id: "other", name: "Annen enhet", icon: HelpCircle, ids: ["other-receiver", "other", "unknown"] },
];

export default function InstallationWizard() {
  const { theme } = useLang(); const dark = theme === "dark";
  const [started, setStarted] = useState(false);
  const [stage, setStage] = useState(0); const [group, setGroup] = useState("");
  const [device, setDevice] = useState(""); const [player, setPlayer] = useState("");
  const [method, setMethod] = useState<MethodId | "">("");
  const heading = useRef<HTMLHeadingElement>(null); const mounted = useRef(false);
  useEffect(() => {
    if (mounted.current) { heading.current?.focus({ preventScroll: true }); heading.current?.scrollIntoView({ block: "nearest", behavior: "smooth" }); }
    else mounted.current = true;
  }, [stage, started, group]);
  const options = availablePlayers(device); const chosenPlayer = players.find(p => p.id === player);
  const choices = playerChoices(device);
  const selectedName = choices.find(p => p.id === player)?.name;
  const chosenDevice = devices.find(d => d.id === device); const supportOnly = !!player && !options.some(p => p.id === player);
  const multipleMethods = !supportOnly && (chosenPlayer?.methods.length ?? 0) > 1;
  const stages = [{ id: 0, label: "Enhet" }, { id: 1, label: "Spiller" }, ...(multipleMethods ? [{ id: 2, label: "Tilkobling" }] : []), { id: 3, label: "Din guide" }];
  const current = stages.findIndex(s => s.id === stage);
  const muted = dark ? "text-slate-400" : "text-slate-600";
  const accent = dark ? "text-[#F5B335]" : "text-[#00205B]";
  const goldButton = "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F5B335] to-[#FFC84A] px-6 py-3 text-sm font-bold text-[#00205B] shadow-lg shadow-black/10 transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#BA0C2F]";
  const card = (active: boolean) => `group min-h-28 w-full rounded-2xl border p-4 text-left transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5B335] ${active ? dark ? "border-[#F5B335] bg-[#F5B335]/10" : "border-[#BA0C2F] bg-[#BA0C2F]/5" : dark ? "border-white/10 bg-white/[0.025] hover:-translate-y-0.5 hover:border-[#F5B335]/60 hover:bg-white/5" : "border-slate-200 bg-white shadow-sm hover:-translate-y-0.5 hover:border-[#BA0C2F]/50 hover:shadow-md"}`;
  const restart = () => { setStarted(false); setStage(0); setGroup(""); setDevice(""); setPlayer(""); setMethod(""); };
  const selectDevice = (id: string) => { if (id !== device) { setDevice(id); setPlayer(""); setMethod(""); } setStage(1); };
  const selectPlayer = (id: string) => {
    setPlayer(id); const selected = options.find(p => p.id === id);
    if (!selected) { setMethod(""); setStage(3); }
    else if (selected.methods.length === 1) { setMethod(selected.methods[0]); setStage(3); }
    else { if (id !== player) setMethod(""); setStage(2); }
  };
  const back = () => { if (stage === 3) setStage(multipleMethods ? 2 : 1); else if (stage === 2) setStage(1); else if (stage === 1) setStage(0); else if (group) setGroup(""); else setStarted(false); };

  return <section aria-label="Interaktiv installasjonsveiviser" className={`relative scroll-mt-28 overflow-hidden rounded-3xl border ${dark ? "border-white/10 bg-[#080f21] shadow-2xl shadow-black/20" : "border-slate-200 bg-white shadow-xl shadow-[#00205B]/5"}`} id="veiviser">
    <div aria-hidden="true" className="h-1 bg-gradient-to-r from-[#00205B] via-[#BA0C2F] to-[#F5B335]" />
    {!started ? <div className="relative p-6 sm:p-10">
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#BA0C2F]/10 blur-3xl" />
      <div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center"><div className="max-w-xl">
        <span className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${dark ? "bg-[#F5B335]/10" : "bg-[#00205B]/5"}`}><Sparkles size={24} className={accent} /></span>
        <h2 ref={heading} tabIndex={-1} className="text-2xl font-bold outline-none sm:text-3xl">Klar for å komme i gang?</h2>
        <p className={`mt-3 text-sm leading-7 ${muted}`}>Finn enheten din, velg spilleren du bruker og få en guide til akkurat ditt oppsett. Vi viser deg ett steg om gangen.</p>
        <p className={`mt-4 text-xs ${muted}`}>Ingen innlogging. Ingen passord å fylle ut.</p>
      </div><button type="button" data-start onClick={() => setStarted(true)} className={`${goldButton} w-full shrink-0 md:w-auto`}>Velg min enhet <ArrowRight size={18} /></button></div>
    </div> : <div className="p-4 sm:p-8 lg:p-10">
      <div className="mb-7 flex items-center justify-between gap-3"><p aria-live="polite" className={`text-xs font-semibold ${muted}`}>Steg {current + 1} av {stages.length}</p><button type="button" onClick={restart} className={`inline-flex min-h-11 items-center gap-2 rounded-lg px-2 text-xs font-semibold ${accent}`}><RotateCcw size={14} />Start på nytt</button></div>
      <ol aria-label="Fremdrift" className="mb-9 flex">{stages.map((s, i) => <li key={s.id} aria-current={s.id === stage ? "step" : undefined} className="relative flex flex-1 flex-col items-center gap-2 text-center">
        {i < stages.length - 1 && <span aria-hidden="true" className={`absolute left-1/2 top-[19px] h-0.5 w-full ${i < current ? "bg-[#F5B335]/45" : dark ? "bg-white/10" : "bg-slate-200"}`} />}
        <span className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-bold ${i === current ? "border-[#F5B335] bg-[#F5B335] text-[#00205B] shadow-md shadow-[#F5B335]/15" : i < current ? dark ? "border-[#F5B335]/40 bg-[#142039] text-[#F5B335]" : "border-[#F5B335]/60 bg-[#FFF6DF] text-[#00205B]" : dark ? "border-white/15 bg-[#080f21] text-slate-500" : "border-slate-200 bg-white text-slate-400"}`}>{i < current ? <Check size={18} /> : i + 1}</span>
        <span className={`relative text-[11px] font-semibold sm:text-xs ${i === current ? accent : muted}`}>{s.label}</span>
      </li>)}</ol>
      <div key={`${stage}-${group}`} className="installation-step">
        <h2 ref={heading} tabIndex={-1} className="scroll-mt-28 text-xl font-bold leading-snug outline-none sm:text-2xl">{[group ? "Velg din enhet" : "Hvilken enhet vil du bruke?", "Velg din IPTV-spiller", "Hvordan vil du koble til?", supportOnly ? "La oss hjelpe deg videre" : "Alt klart. Her er guiden din."][stage]}</h2>
        <p className={`mb-6 mt-3 text-sm leading-relaxed ${muted}`}>{stage === 0 ? group ? "Velg modellen eller operativsystemet som passer. Du går automatisk videre til spillerne." : "Start med en kategori. Vi finner spillerne som passer til enheten din." : stage === 1 ? "Velg appen du bruker. Du går videre når du klikker på en spiller." : stage === 2 ? "Velg typen tilgang du har fått. Du skal ikke skrive inn innloggingsopplysningene dine her." : "Følg stegene i ditt eget tempo. Private opplysninger legges bare inn i appen eller på utgiverens offisielle nettside."}</p>
        {stage > 0 && <div className={`mb-6 flex flex-wrap items-center gap-2 rounded-xl p-3 text-xs ${dark ? "bg-white/5 text-slate-300" : "bg-slate-50 text-slate-600"}`}><Tv2 size={16} className={accent} /><span>{chosenDevice?.name}</span>{player && <><span aria-hidden="true">/</span><span>{selectedName ?? (player === "help" ? "Hjelp til å velge" : "Annen app")}</span></>}{method && <><span aria-hidden="true">/</span><span>{methods[method].name}</span></>}</div>}
        {stage === 0 && (!group ? <div role="group" aria-label="Enhetskategorier" className="grid grid-cols-2 gap-3 lg:grid-cols-4">{categories.map(c => <button key={c.id} type="button" data-category={c.id} onClick={() => { setGroup(c.id); if (c.ids.length === 1) selectDevice(c.ids[0]); }} className={`${card(false)} flex flex-col items-center justify-center gap-3 text-center sm:min-h-32`}><c.icon size={29} strokeWidth={1.6} className={accent} aria-hidden="true" /><span className="text-xs font-bold sm:text-sm">{c.name}</span></button>)}</div> : <div role="group" aria-label="Enhet" className="grid gap-3 sm:grid-cols-2">{devices.filter(d => categories.find(c => c.id === group)?.ids.includes(d.id)).map(d => <button key={d.id} type="button" data-device={d.id} aria-pressed={device === d.id} onClick={() => selectDevice(d.id)} className={card(device === d.id)}><span className="flex items-center justify-between gap-3 text-sm font-bold">{d.name}<ArrowRight size={17} className={`shrink-0 ${accent}`} /></span>{d.note && <span className={`mt-2 block text-xs leading-6 ${muted}`}>{d.note}</span>}</button>)}</div>)}
        {stage === 1 && <>{!options.length && <p role="status" className={`mb-4 text-sm leading-7 ${muted}`}>Vi har ingen verifisert oppskrift for denne enheten ennå. Vi hjelper deg med å avklare modell og app.</p>}<div role="group" aria-label="Tilgjengelige apper" className="grid gap-3 sm:grid-cols-2">{choices.map(p => <button key={p.id} type="button" data-player={p.id} aria-pressed={player === p.id} onClick={() => selectPlayer(p.id)} className={card(player === p.id)}><Play size={22} className={`mb-3 ${accent}`} aria-hidden="true" /><span className="block text-sm font-bold">{p.name}</span><span className={`mt-2 block text-xs leading-6 ${muted}`}>{p.note}</span></button>)}{[["other", "Jeg bruker en annen app"], ["help", "Hjelp meg å velge spiller"]].map(([id, label]) => <button key={id} type="button" data-player={id} aria-pressed={player === id} onClick={() => selectPlayer(id)} className={card(player === id)}><HelpCircle size={22} className={`mb-3 ${accent}`} aria-hidden="true" /><span className="text-sm font-bold">{label}</span></button>)}</div><p className={`mt-4 text-xs leading-6 ${muted}`}>Tilgjengelighet kan variere med modell, region og appversjon. Kontroller appbutikken på enheten din før du kjøper en lisens.</p></>}
        {stage === 2 && <div role="group" aria-label="Tilkoblingsmetoder" className="grid gap-3 sm:grid-cols-2">{chosenPlayer?.methods.map(id => <button key={id} type="button" data-method={id} aria-pressed={method === id} onClick={() => { setMethod(id); setStage(3); }} className={card(method === id)}><span className="block text-sm font-bold">{methods[id].name}</span><span className={`mt-2 block text-xs leading-6 ${muted}`}>{methods[id].description}</span><span className={`mt-3 block text-xs leading-6 ${muted}`}>Du trenger: {methods[id].fields.join(", ")}</span></button>)}</div>}
        {stage === 3 && (supportOnly ? <div data-support-result className={`rounded-2xl border p-5 sm:p-7 ${dark ? "border-[#F5B335]/20 bg-[#F5B335]/5" : "border-slate-200 bg-slate-50"}`}><HelpCircle size={28} className={`mb-4 ${accent}`} /><h3 className="text-lg font-bold">Finn riktig oppsett sammen med oss</h3><p className={`mt-3 text-sm leading-7 ${muted}`}>Finn modellnavn, operativsystem og appens navn og utgiver. Send oss disse opplysningene på WhatsApp, så hjelper vi deg videre. Du trenger ikke sende passord eller private spillelistelenker.</p><a href={supportUrl(device, player)} className={`${goldButton} mt-5`}>Kontakt oss på WhatsApp <ArrowRight size={16} className="shrink-0" /></a></div> : method && <InstallationInstructions device={device} player={player} method={method} embedded />)}
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-400/15 pt-5"><button type="button" onClick={back} className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-slate-400/25 px-4 py-2 text-sm font-semibold transition hover:border-[#BA0C2F]"><ArrowLeft size={16} />Tilbake</button><p className={`text-xs ${muted}`}>{stage === 3 ? "Du kan gå tilbake og endre valgene dine." : "Klikk på et valg for å gå videre."}</p></div>
    </div>}
  </section>;
}
