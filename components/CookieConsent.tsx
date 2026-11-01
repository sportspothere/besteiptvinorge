"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { ShieldCheck, X } from "lucide-react";
import { useLang } from "@/lib/lang-context";

const KEY = "privacy_consent_v1";
const MAX_AGE = 180 * 24 * 60 * 60 * 1000;
type Choice = { version: 1; marketing: boolean; updatedAt: number };
type Pixel = ((...args: unknown[]) => void) & { queue: unknown[][]; loaded: boolean; version: string; push?: Pixel; callMethod?: (...args: unknown[]) => void };
type PixelWindow = Window & { fbq?: Pixel; _fbq?: Pixel };
const SettingsContext = createContext<() => void>(() => {});

function readChoice(): Choice | null {
  try {
    const value = JSON.parse(localStorage.getItem(KEY) || "null");
    if (value?.version === 1 && typeof value.marketing === "boolean" && typeof value.updatedAt === "number" && value.updatedAt <= Date.now() && Date.now() - value.updatedAt < MAX_AGE) return value;
  } catch { /* Optional tracking remains disabled if storage is unavailable. */ }
  return null;
}

function clearMetaCookies() {
  const host = location.hostname.split(".");
  const domains = ["", ...host.map((_, i) => `; domain=${host.slice(i).join(".")}`)];
  const paths = ["/", ...location.pathname.split("/").filter(Boolean).map((_, i, parts) => `/${parts.slice(0, i + 1).join("/")}`)];
  for (const name of ["_fbp", "_fbc"]) for (const domain of domains) for (const path of paths) {
    document.cookie = `${name}=; max-age=0; path=${path}${domain}; SameSite=Lax`;
  }
}

function loadPixel() {
  if (document.getElementById("consented-meta-pixel")) return;
  const target = window as PixelWindow;
  if (!target.fbq) {
    const pixel = function (...args: unknown[]) {
      if (pixel.callMethod) pixel.callMethod(...args);
      else pixel.queue.push(args);
    } as Pixel;
    pixel.queue = []; pixel.loaded = true; pixel.version = "2.0"; pixel.push = pixel;
    target.fbq = target._fbq = pixel;
  }
  target.fbq("consent", "grant");
  target.fbq("set", "autoConfig", false, "1681468993112360");
  target.fbq("init", "1681468993112360");
  target.fbq("track", "PageView");
  const script = document.createElement("script");
  script.id = "consented-meta-pixel"; script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);
}

export function CookieSettingsButton({ className }: { className?: string }) {
  const open = useContext(SettingsContext);
  return <button type="button" onClick={open} className={className}>Innstillinger for informasjonskapsler</button>;
}

export default function CookieConsent({ children }: { children: ReactNode }) {
  const { theme } = useLang();
  const dark = theme === "dark";
  const [ready, setReady] = useState(false);
  const [choice, setChoice] = useState<Choice | null>(null);
  const [marketing, setMarketing] = useState(false);
  const [settings, setSettings] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const muted = dark ? "text-slate-400" : "text-slate-600";
  const panel = dark ? "border-white/15 bg-[#0b1020] text-slate-100" : "border-slate-200 bg-white text-slate-900";
  const button = `rounded-full border px-4 py-2.5 text-sm font-semibold transition hover:bg-blue-400/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 ${dark ? "border-white/20" : "border-slate-300"}`;

  useEffect(() => {
    const saved = readChoice(); setChoice(saved); setReady(true);
    if (!saved?.marketing) clearMetaCookies();
  }, []);
  useEffect(() => { if (ready && choice?.marketing) loadPixel(); }, [ready, choice]);
  useEffect(() => {
    if (settings) dialog.current?.showModal();
    else dialog.current?.close();
  }, [settings]);
  useEffect(() => {
    const sync = (event: StorageEvent) => {
      if (event.key !== KEY && event.key !== null) return;
      const saved = readChoice();
      if (!saved?.marketing && (window as PixelWindow).fbq) {
        (window as PixelWindow).fbq?.("consent", "revoke"); clearMetaCookies(); location.reload();
      } else setChoice(saved);
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  const openSettings = () => { setMarketing(choice?.marketing ?? false); setSettings(true); };
  const save = (allow: boolean) => {
    const saved: Choice = { version: 1, marketing: allow, updatedAt: Date.now() };
    try { localStorage.setItem(KEY, JSON.stringify(saved)); } catch { /* Choice still applies for this page visit. */ }
    setSettings(false);
    if (!allow) {
      const pixel = (window as PixelWindow).fbq;
      pixel?.("consent", "revoke"); clearMetaCookies();
      // Reload to unload the third-party library and cancel pending requests.
      if (pixel) { location.reload(); return; }
    }
    setChoice(saved);
  };

  return <SettingsContext.Provider value={openSettings}>
    {children}
    {ready && !choice && !settings && <section aria-label="Valg for informasjonskapsler" className={`fixed inset-x-3 bottom-3 z-[80] mx-auto max-h-[75dvh] max-w-3xl overflow-auto rounded-2xl border p-5 shadow-2xl sm:p-6 ${panel}`}>
      <div className="flex items-start gap-3"><ShieldCheck size={23} className="shrink-0 text-blue-400" aria-hidden="true" /><div><h2 className="text-lg font-bold">Ditt personvern, ditt valg</h2><p className={`mt-2 text-sm leading-relaxed ${muted}`}>Vi husker valgene dine for tema og informasjonskapsler. Hvis du samtykker, bruker vi Meta Pixel til å måle besøk og annonser. Du kan avvise markedsføring og bruke nettsiden som vanlig. <a href="/personvernerklaering#informasjonskapsler" className="text-blue-500 underline underline-offset-4">Les om informasjonskapsler</a>.</p></div></div>
      <div className="mt-5 flex flex-wrap gap-2"><button type="button" onClick={() => save(true)} className={button}>Godta alle</button><button type="button" onClick={() => save(false)} className={button}>Avvis valgfrie</button><button type="button" onClick={openSettings} className={button}>Tilpass valg</button></div>
    </section>}
    <dialog ref={dialog} aria-labelledby="cookie-settings-title" onCancel={() => setSettings(false)} className={`m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-lg overflow-auto rounded-3xl border p-6 shadow-2xl backdrop:bg-black/70 sm:p-8 ${panel}`}>
      <div className="flex items-start justify-between gap-3"><h2 id="cookie-settings-title" className="text-xl font-bold">Dine personvernvalg</h2><button type="button" onClick={() => setSettings(false)} aria-label="Lukk innstillinger for informasjonskapsler" className="rounded-full p-1.5 hover:bg-slate-400/10 focus-visible:outline focus-visible:outline-2"><X size={20} /></button></div>
      <p className={`mt-3 text-sm leading-relaxed ${muted}`}>Valgfrie verktøy er avslått til du godtar dem. Du kan endre valget når som helst i bunnmenyen.</p>
      <div className="my-5 space-y-4">
        <div className="rounded-xl border border-slate-400/20 p-4"><h3 className="text-sm font-bold">Nødvendig lagring og valgte funksjoner</h3><p className={`mt-2 text-xs leading-relaxed ${muted}`}>Husker samtykkevalget, temaet du velger og om du lukker WhatsApp-panelet. Disse brukes ikke til annonsering.</p></div>
        <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-400/20 p-4"><input type="checkbox" checked={marketing} onChange={e => setMarketing(e.target.checked)} className="mt-1 h-4 w-4 shrink-0 accent-blue-500" /><span><span className="text-sm font-bold">Markedsføring – Meta Pixel</span><span className={`mt-2 block text-xs leading-relaxed ${muted}`}>Måler sidebesøk og annonseeffekt. Meta mottar blant annet tekniske opplysninger og besøkte nettadresser. Kan innebære behandling utenfor EØS.</span></span></label>
      </div>
      <p className={`mb-5 text-xs leading-relaxed ${muted}`}>Ingen separat statistikktjeneste er installert. <a href="/personvernerklaering" className="text-blue-500 underline">Les personvernerklæringen</a>.</p>
      <div className="flex flex-wrap gap-2"><button type="button" onClick={() => save(true)} className={button}>Godta alle</button><button type="button" onClick={() => save(false)} className={button}>Avvis valgfrie</button><button type="button" onClick={() => save(marketing)} className={button}>Lagre valg</button></div>
    </dialog>
  </SettingsContext.Provider>;
}
