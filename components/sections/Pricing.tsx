"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Tv, Monitor, Zap, Shield, ShieldCheck, Headphones, RotateCcw } from "lucide-react";
import Link from "next/link";
import { PLANS } from "@/lib/offers";
import { useLang } from "@/lib/lang-context";

export default function Pricing() {
  const { theme } = useLang();
  const dark = theme === "dark";
  const [devices, setDevices] = useState<"one" | "two">("one");

  return (
    <section
      id="pricing"
      className={`py-24 px-4 relative ${dark ? "bg-[#04040e]" : "bg-slate-50"}`}
    >
      {dark && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
            style={{ background: "radial-gradient(circle, #00205B, transparent)" }} />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
            style={{ background: "radial-gradient(circle, #F5B335, transparent)" }} />
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className={`inline-block text-xs font-bold tracking-[0.3em] uppercase mb-3 px-4 py-1.5 rounded-full ${
            dark ? "bg-[#00205B]/20 text-[#4d9de0]" : "bg-[#00205B]/10 text-[#00205B]"
          }`}>
            🇳🇴 Abonnement
          </span>
          <h2 className="font-orbitron font-black text-4xl md:text-5xl gradient-text mb-4">
            Abonnement hos Beste IPTV Norge
          </h2>
          <p className={`text-lg max-w-xl mx-auto ${dark ? "text-gray-400" : "text-slate-500"}`}>
            Velg beste IPTV for dine behov ut fra varighet og antall enheter. Prisene nedenfor er totalbeløpet for valgt plan. Les om innhold og vilkår før bestilling.
          </p>
        </motion.div>

        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={() => setDevices("one")}
            aria-pressed={devices === "one"}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00205B] ${
              devices === "one"
                ? "bg-[#00205B] text-white shadow-md"
                : dark ? "text-gray-400 hover:text-white" : "text-slate-500 hover:text-slate-800"
            }`}
          >
            <Tv size={16} aria-hidden="true" /> 1 Enhet
          </button>

          <button
            onClick={() => setDevices(d => d === "one" ? "two" : "one")}
            aria-label={devices === "two" ? "Bytt til 1 enhet" : "Bytt til 2 enheter"}
            aria-pressed={devices === "two"}
            className={`relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00205B] ${
              devices === "two" ? "bg-[#BA0C2F]" : "bg-slate-300"
            }`}
          >
            <motion.div
              animate={{ x: devices === "two" ? 28 : 4 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="absolute top-1 w-5 h-5 rounded-full bg-white shadow-md"
            />
          </button>

          <button
            onClick={() => setDevices("two")}
            aria-pressed={devices === "two"}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#BA0C2F] ${
              devices === "two"
                ? "bg-[#BA0C2F] text-white shadow-md"
                : dark ? "text-gray-400 hover:text-white" : "text-slate-500 hover:text-slate-800"
            }`}
          >
            <Monitor size={16} aria-hidden="true" /> 2 Enheter
          </button>
        </motion.div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
          style={{ alignItems: "stretch", paddingTop: 40 }}
        >
          {PLANS.map((plan, i) => {
            const price = plan.prices[devices];

            if (plan.gold) {
              return (
                <motion.div
                  key={plan.id}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  style={{ transform: "translateY(-40px)", display: "flex", flexDirection: "column" }}
                >
                  <motion.div
                    whileHover={{ scale: 1.025, transition: { duration: 0.18 } }}
                    className="rounded-3xl overflow-hidden flex flex-col flex-1"
                    style={{
                      background: "linear-gradient(160deg, #162A67 0%, #1a3278 50%, #0f1e4a 100%)",
                      boxShadow: "0 24px 64px rgba(245,179,53,0.3), 0 0 0 1.5px rgba(245,179,53,0.55)",
                    }}
                  >
                    <div
                      className="w-full py-2.5 text-center text-xs font-black tracking-widest uppercase shrink-0"
                      style={{ background: "linear-gradient(90deg,#F5B335,#FFC84A,#F5B335)", color: "#0f1e4a" }}
                    >
                      Årsabonnement
                    </div>

                    <div className="p-7 flex flex-col flex-1">
                      <div>
                        <div className="text-xl font-bold uppercase tracking-wide mb-2" style={{ color: "#F5B335" }}>
                          {plan.name}
                        </div>
                        <div
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black mb-5"
                          style={{ background: "rgba(245,179,53,0.15)", border: "1px solid rgba(245,179,53,0.4)", color: "#FFC84A" }}
                        >
                          Avklar innhold og vilkår
                        </div>

                        <div className="mb-5">
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={`12m-${devices}`}
                              initial={false}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 8 }}
                              transition={{ duration: 0.18 }}
                              className="flex items-start gap-1"
                            >
                              <span className="font-orbitron font-black leading-none"
                                style={{ fontSize: "clamp(2.8rem,5vw,3.5rem)", color: "#FFC84A" }}>
                                {price}
                              </span>
                              <span className="font-bold text-2xl mt-1" style={{ color: "rgba(245,179,53,0.65)" }}>kr</span>
                            </motion.div>
                          </AnimatePresence>
                          <div className="text-sm font-medium mt-1" style={{ color: "rgba(245,179,53,0.6)" }}>{plan.period}</div>
                          <div className="text-xs mt-1.5 font-semibold" style={{ color: "rgba(245,179,53,0.8)" }}>
                            Totalpris for hele perioden
                          </div>
                        </div>

                        <Link
                          href={`/checkout?duration=${plan.id}&devices=${devices === "one" ? 1 : 2}`}
                          className="block w-full text-center py-3.5 rounded-2xl font-black text-sm mb-4 transition-all hover:scale-[1.02] active:scale-[0.98]"
                          style={{
                            background: "linear-gradient(90deg,#F5B335,#FFC84A,#F5B335)",
                            color: "#0f1e4a",
                            boxShadow: "0 6px 24px rgba(245,179,53,0.45)",
                            letterSpacing: "0.04em",
                          }}
                        >
                          Bestill n&aring;
                        </Link>

                        <div
                          className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl mb-4 text-xs font-semibold"
                          style={{ background: "rgba(245,179,53,0.1)", border: "1px solid rgba(245,179,53,0.25)", color: "#FFC84A" }}
                        >
                          <Shield size={13} style={{ color: "#F5B335", flexShrink: 0 }} />
                          <span>Avklar levering og vilkår for refusjon</span>
                        </div>

                        <div className="h-px mb-5" style={{ background: "rgba(245,179,53,0.15)" }} />
                      </div>

                      <ul className="space-y-2.5 flex-1">
                        {plan.features.map((f, j) => (
                          <li key={j} className="flex items-start gap-2.5">
                            <span className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                              style={{ background: "rgba(245,179,53,0.2)" }}>
                              <Check size={9} strokeWidth={3.5} style={{ color: "#F5B335" }} />
                            </span>
                            <span className="text-sm leading-snug text-slate-200">{f}</span>
                          </li>
                        ))}
                      </ul>

                      <div
                        className="mt-5 flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold shrink-0"
                        style={{ background: "rgba(245,179,53,0.08)", border: "1px solid rgba(245,179,53,0.2)", color: "#FFC84A" }}
                      >
                        <Zap size={13} style={{ color: "#F5B335", flexShrink: 0 }} />
                        <span>Les vilkår for fornyelse</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={plan.id}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <motion.div
                  whileHover={{ scale: 1.025, transition: { duration: 0.18 } }}
                  className="rounded-3xl overflow-hidden flex flex-col flex-1"
                  style={{
                    background: dark ? "rgba(255,255,255,0.04)" : "#ffffff",
                    border: dark ? "1px solid rgba(255,255,255,0.08)" : "1px solid #e8edf2",
                    boxShadow: dark ? "0 4px 20px rgba(0,0,0,0.3)" : "0 4px 20px rgba(0,0,0,0.06)",
                  }}
                >
                  <div className="p-7 flex flex-col flex-1">
                    <div>
                      <div className="text-xl font-bold uppercase tracking-wide mb-4"
                        style={{ color: dark ? "#e2e8f0" : "#0f172a" }}>
                        {plan.name}
                      </div>

                      <div className="mb-5">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={`${plan.id}-${devices}`}
                            initial={false}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.18 }}
                            className="flex items-start gap-1"
                          >
                            <span className="font-orbitron font-black leading-none"
                              style={{ fontSize: "clamp(2.8rem,5vw,3.5rem)", color: dark ? "#fff" : "#0f172a" }}>
                              {price}
                            </span>
                            <span className={`font-bold text-2xl mt-1 ${dark ? "text-gray-400" : "text-slate-400"}`}>kr</span>
                          </motion.div>
                        </AnimatePresence>
                        <div className={`text-sm font-medium mt-1 ${dark ? "text-gray-400" : "text-slate-500"}`}>
                          {plan.period}
                        </div>
                        {plan.savings && (
                          <div className={`text-xs mt-1.5 font-semibold ${dark ? "text-gray-400" : "text-slate-500"}`}>
                            {plan.savings} sammenlignet med månedlig
                          </div>
                        )}
                      </div>

                      <Link
                          href={`/checkout?duration=${plan.id}&devices=${devices === "one" ? 1 : 2}`}
                        className="block w-full text-center py-3.5 rounded-2xl font-black text-sm mb-5 transition-all hover:scale-[1.02] active:scale-[0.98]"
                        style={{
                          background: "linear-gradient(90deg,#00205B 0%,#1a3a8f 50%,#00205B 100%)",
                          color: "#fff",
                          boxShadow: "0 4px 14px rgba(0,32,91,0.3)",
                        }}
                      >
                        Bestill n&aring;
                      </Link>

                      <div className={`h-px mb-5 ${dark ? "bg-white/[0.08]" : "bg-slate-100"}`} />
                    </div>

                    <ul className="space-y-2.5 flex-1">
                      {plan.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <span className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 bg-green-100">
                            <Check size={9} strokeWidth={3.5} className="text-green-600" />
                          </span>
                          <span className={`text-sm leading-snug ${dark ? "text-gray-300" : "text-slate-600"}`}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <aside aria-labelledby="guarantee-title" className={`mt-8 rounded-2xl border p-6 sm:p-8 ${dark ? "border-white/10 bg-white/[0.03]" : "border-[#00205B]/10 bg-blue-50/60"}`}>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <span className="w-fit shrink-0 rounded-xl bg-blue-500/10 p-3 text-blue-500"><ShieldCheck size={26} aria-hidden="true" /></span>
            <div>
              <h3 id="guarantee-title" className={`text-lg font-bold ${dark ? "text-white" : "text-[#00205B]"}`}>Prøv IPTV med ekstra trygghet</h3>
              <p className={`mt-2 max-w-3xl text-sm leading-relaxed ${dark ? "text-gray-400" : "text-slate-600"}`}>Vi ønsker at du skal være trygg på valget ditt. Derfor tilbyr vi 30 dagers pengene-tilbake-garanti på ditt første betalte abonnement dersom tjenesten ikke fungerer for deg.</p>
              <ul className={`mt-4 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium ${dark ? "text-gray-300" : "text-slate-600"}`}>
                {[[ShieldCheck, "30 dagers pengene-tilbake-garanti"], [Headphones, "Enkel kontakt med kundeservice"], [RotateCcw, "Trygg refusjonsprosess"]].map(([Icon, text]) => {
                  const TrustIcon = Icon as typeof ShieldCheck;
                  return <li key={String(text)} className="flex items-center gap-2"><TrustIcon size={16} className="shrink-0 text-blue-500" aria-hidden="true" />{String(text)}</li>;
                })}
              </ul>
              <Link href="/refusjonspolicy" className="mt-5 inline-block text-sm font-semibold text-blue-500 underline underline-offset-4 hover:text-blue-400">Les vår refusjonspolicy</Link>
            </div>
          </div>
        </aside>

        <motion.div
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mt-6"
        >
          {["Sikker betalingslenke", "Sjekk fornyelse og bindingstid", "Be om vilkår for oppsigelse, angrerett og klage"].map((item, i) => (
            <span key={i} className={`text-sm font-medium ${dark ? "text-gray-400" : "text-slate-500"}`}>{item}</span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
