"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { X, ShoppingBag, ChevronDown, Check, MessageCircle, Send, Mail, ArrowLeft } from "lucide-react";
import { useLang } from "@/lib/lang-context";

export type OrderOffer = { name: string; devices: number; price: number; kind?: "trial" };

const COUNTRIES = ["Norge", "Sverige", "Danmark", "Finland", "Tyskland", "Frankrike", "USA", "Italia"];

export default function OrderForm({ offer, onClose }: { offer: OrderOffer; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const countryButton = useRef<HTMLButtonElement>(null);
  const [country, setCountry] = useState("");
  const [countriesOpen, setCountriesOpen] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [orderMessage, setOrderMessage] = useState("");
  const choiceHeading = useRef<HTMLHeadingElement>(null);
  const { theme } = useLang();
  const dark = theme === "dark";
  const trial = offer.kind === "trial";

  useEffect(() => {
    if (orderMessage) {
      dialog.current?.scrollTo({ top: 0 });
      choiceHeading.current?.focus();
    }
  }, [orderMessage]);

  useEffect(() => {
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    for (const input of Array.from(form.querySelectorAll("input"))) {
      input.value = input.value.trim();
      input.setCustomValidity("");
      if (input.name === "fullName" && (input.value.length < 2 || !/\p{L}/u.test(input.value))) {
        input.setCustomValidity("Skriv inn fullt navn med minst to tegn.");
      }
      if (input.name === "phone") {
        const digits = input.value.replace(/\D/g, "");
        if (!/^\+?[\d\s().-]+$/.test(input.value) || digits.length < 7 || digits.length > 15) {
          input.setCustomValidity("Skriv et gyldig telefonnummer med 7–15 sifre, gjerne med landskode.");
        }
      }
    }
    if (!form.reportValidity()) return;
    if (!COUNTRIES.includes(country)) {
      setCountryError(true);
      countryButton.current?.focus();
      return;
    }
    const data = new FormData(form);
    const message = [
      trial ? "Hei! Jeg ønsker å aktivere en gratis IPTV-prøveperiode på 24 timer." : `Hei! Jeg ønsker å kjøpe IPTV-abonnementet ${offer.name}.`,
      `Antall enheter: ${offer.devices}`,
      `Oppgitt pris: ${offer.price} kr`,
      "",
      `Fullt navn: ${data.get("fullName")}`,
      `E-post: ${data.get("email")}`,
      `Telefonnummer: ${data.get("phone")}`,
      `Land: ${data.get("country")}`,
    ].join("\n");
    setCountriesOpen(false);
    setOrderMessage(message);
  }

  const inputClass = `mt-2 w-full rounded-xl border px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#4d9de0] ${dark ? "border-white/15 bg-white/5 text-white" : "border-slate-200 bg-slate-50 text-slate-900"}`;

  return (
    <dialog
      ref={dialog}
      onCancel={onClose}
      onClick={event => { if (event.target === event.currentTarget) onClose(); }}
      aria-labelledby="order-title"
      aria-describedby="order-description"
      className={`m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-lg overflow-y-auto rounded-3xl border p-0 shadow-2xl backdrop:bg-black/70 backdrop:backdrop-blur-sm ${dark ? "border-white/10 bg-[#0b1024] text-white" : "border-slate-200 bg-white text-slate-900"}`}
    >
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <h2 ref={choiceHeading} tabIndex={-1} id="order-title" className="text-2xl font-bold outline-none">{trial ? (orderMessage ? "Hvor vil du be om aktivering?" : "Prøv gratis i 24 timer") : (orderMessage ? "Hvordan vil du bestille?" : "Bestill abonnement")}</h2>
          <button type="button" onClick={onClose} aria-label="Lukk skjema" className="rounded-full p-2 hover:bg-slate-400/15 focus-visible:ring-2 focus-visible:ring-[#4d9de0]"><X size={20} /></button>
        </div>
        <div className="my-5 rounded-2xl bg-gradient-to-r from-[#00205B] to-[#1a3a8f] p-4 text-white">
          <p className="font-bold">{offer.name}</p>
          <p className="mt-1 text-sm text-slate-200">{offer.devices} {offer.devices === 1 ? "enhet" : "enheter"} · {offer.price} kr</p>
        </div>
        <p id="order-description" className={`mb-5 text-sm ${dark ? "text-gray-400" : "text-slate-500"}`}>{trial ? (orderMessage ? "Velg WhatsApp, Telegram eller Gmail. Meldingen ber om aktivering av din gratis prøveperiode på 24 timer. Se over og send den til oss." : "Fyll inn opplysningene dine og velg hvordan du vil kontakte oss for å aktivere 24 timer gratis IPTV.") : (orderMessage ? "Velg WhatsApp, Telegram eller e-post. Bestillingen og opplysningene dine legges inn i meldingen. Se over og send den for å kontakte oss." : "Fyll inn opplysningene dine. Deretter velger du om du vil bestille via WhatsApp, Telegram eller e-post.")}</p>
        {orderMessage && <div className="space-y-3">
          <a href={`https://wa.me/447460010370?text=${encodeURIComponent(orderMessage)}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#087d48] to-[#159c61] px-5 py-4 font-bold text-white shadow-lg transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"><MessageCircle size={21} />Skriv på WhatsApp</a>
          <a href={`https://t.me/linkedshop?text=${encodeURIComponent(orderMessage)}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#096da6] to-[#087fac] px-5 py-4 font-bold text-white shadow-lg transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"><Send size={21} />Skriv på Telegram</a>
          <a href={`https://mail.google.com/mail/?hl=no&view=cm&fs=1&to=bouhamidi.sal%40gmail.com&su=${encodeURIComponent(`${trial ? "Gratis IPTV-test" : "IPTV-bestilling"}: ${offer.name}`)}&body=${encodeURIComponent(orderMessage)}`} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center gap-3 rounded-full border px-5 py-4 font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-400 ${dark ? "border-rose-400/50 text-rose-300 hover:bg-rose-400/10" : "border-rose-300 text-[#BA0C2F] hover:bg-rose-50"}`}><Mail size={21} />Skriv på Gmail</a>
          <p className={`pt-4 text-center text-sm ${dark ? "text-slate-400" : "text-slate-500"}`}>Har du ikke WhatsApp eller Telegram? Skriv til<br /><span className={`break-all font-semibold ${dark ? "text-slate-200" : "text-slate-800"}`}>bouhamidi.sal@gmail.com</span></p>
          <button type="button" onClick={() => {
            setOrderMessage("");
            requestAnimationFrame(() => dialog.current?.querySelector<HTMLInputElement>('input[name="fullName"]')?.focus());
          }} className="mx-auto flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:underline focus-visible:ring-2 focus-visible:ring-[#4d9de0]"><ArrowLeft size={16} />Endre opplysninger</button>
        </div>}
        <div hidden={!!orderMessage}>
        <form noValidate onSubmit={submit} onInput={event => {
          if (event.target instanceof HTMLInputElement) event.target.setCustomValidity("");
        }} className="space-y-4">
          <label className="block text-sm font-medium">Fullt navn<input className={inputClass} name="fullName" autoComplete="name" required maxLength={120} /></label>
          <label className="block text-sm font-medium">E-post<input className={inputClass} name="email" type="email" autoComplete="email" required maxLength={254} /></label>
          <label className="block text-sm font-medium">Telefonnummer<input className={inputClass} name="phone" type="tel" autoComplete="tel" placeholder="+47 123 45 678" required minLength={6} maxLength={40} /></label>
          <div className="text-sm font-medium" onBlur={event => {
            if (!event.currentTarget.contains(event.relatedTarget)) setCountriesOpen(false);
          }} onKeyDown={event => {
            if (event.key === "Escape" && countriesOpen) {
              event.preventDefault();
              event.stopPropagation();
              setCountriesOpen(false);
              countryButton.current?.focus();
            }
          }}>
            <label id="country-label" htmlFor="country-picker">Land</label>
            <input type="hidden" name="country" value={country} />
            <button ref={countryButton} id="country-picker" type="button" aria-haspopup="listbox" aria-expanded={countriesOpen} aria-controls="country-options" aria-labelledby="country-label country-value" aria-invalid={countryError} aria-describedby={countryError ? "country-error" : undefined}
              onClick={() => setCountriesOpen(value => !value)}
              onKeyDown={event => {
                if (event.key === "ArrowDown" || event.key === "ArrowUp") {
                  event.preventDefault();
                  setCountriesOpen(true);
                  requestAnimationFrame(() => document.getElementById(`country-option-${Math.max(0, COUNTRIES.indexOf(country))}`)?.focus());
                }
              }}
              className={`${inputClass} flex items-center justify-between gap-3 text-left ${countriesOpen ? "ring-2 ring-[#4d9de0]" : ""}`}>
              <span id="country-value" className={country ? "" : dark ? "text-slate-400" : "text-slate-500"}>{country || "Velg land"}</span>
              <ChevronDown size={18} className={`shrink-0 transition-transform ${countriesOpen ? "rotate-180" : ""}`} />
            </button>
            {countriesOpen && <div id="country-options" role="listbox" aria-labelledby="country-label" className={`mt-2 max-h-52 overflow-y-auto rounded-xl border p-1.5 shadow-lg ${dark ? "border-white/15 bg-[#151d35] text-slate-100" : "border-slate-200 bg-white text-slate-900"}`}>
              {COUNTRIES.map((option, index) => <button key={option} id={`country-option-${index}`} type="button" role="option" aria-selected={country === option}
                onClick={() => { setCountry(option); setCountryError(false); setCountriesOpen(false); countryButton.current?.focus(); }}
                onKeyDown={event => {
                  let next = index;
                  if (event.key === "ArrowDown") next = (index + 1) % COUNTRIES.length;
                  else if (event.key === "ArrowUp") next = (index - 1 + COUNTRIES.length) % COUNTRIES.length;
                  else if (event.key === "Home") next = 0;
                  else if (event.key === "End") next = COUNTRIES.length - 1;
                  else return;
                  event.preventDefault();
                  document.getElementById(`country-option-${next}`)?.focus();
                }}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left outline-none transition ${country === option ? "bg-[#00205B] text-white" : dark ? "hover:bg-white/10 focus:bg-white/10" : "hover:bg-slate-100 focus:bg-slate-100"}`}>
                {option}{country === option && <Check size={16} />}
              </button>)}
            </div>}
            {countryError && <p id="country-error" role="alert" className={`mt-2 text-xs ${dark ? "text-rose-300" : "text-red-600"}`}>Velg et land for å fortsette.</p>}
          </div>
          <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#00205B] to-[#BA0C2F] px-5 py-3.5 font-bold text-white transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#4d9de0] focus-visible:ring-offset-2"><ShoppingBag size={18} />{trial ? "Be om gratis aktivering" : "Bestill n\u00e5"}</button>
        </form>
        </div>
      </div>
    </dialog>
  );
}
