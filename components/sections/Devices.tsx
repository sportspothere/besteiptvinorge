"use client";
import { motion } from "framer-motion";
import { Tv2, Smartphone, Tablet, Monitor, Box, Flame } from "lucide-react";
import { useLang } from "@/lib/lang-context";

const DEVICES = [
  { icon: Tv2,        label: "Smart TV",  sub: "Samsung - LG - Sony" },
  { icon: Smartphone, label: "Mobil",     sub: "iOS og Android" },
  { icon: Tablet,     label: "Nettbrett", sub: "iPad og Android" },
  { icon: Monitor,    label: "PC / Mac",  sub: "Windows og macOS" },
  { icon: Flame,      label: "Firestick", sub: "Amazon Fire TV" },
  { icon: Box,        label: "MAG Box",   sub: "Set-Top Box" },
];

export default function Devices() {
  const { theme } = useLang();
  const dark = theme === "dark";

  return (
    <section
      id="devices"
      className={`py-24 relative ${dark ? "bg-[#050510]" : "bg-slate-50"}`}
      aria-labelledby="devices-heading"
    >
      <div className="max-w-6xl mx-auto px-4">

        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="devices-heading" className="font-orbitron font-black text-4xl md:text-5xl gradient-text mb-6">
            Sjekk enheten din før bestilling
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${dark ? "text-gray-400" : "text-slate-600"}`}>
            Enhetene nedenfor er eksempler, ikke en bekreftet støtteliste. Oppgi modell, operativsystem og app for å avklare kompatibilitet.
          </p>
        </motion.div>

        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4" role="list">
          {DEVICES.map((d, i) => {
            const Icon = d.icon;
            const color = i % 2 === 0 ? "#00205B" : "#BA0C2F";
            return (
              <motion.li
                key={i}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -4, scale: 1.03 }}
                className={`rounded-2xl p-5 flex flex-col items-center text-center gap-3 transition-all cursor-default border ${
                  dark ? "bg-white/4 border-white/8" : "bg-white border-gray-100"
                }`}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: `${color}15` }}
                  aria-hidden="true"
                >
                  <Icon size={28} style={{ color }} />
                </div>
                <div>
                  <div className={`text-sm font-semibold ${dark ? "text-white" : "text-slate-800"}`}>
                    {d.label}
                  </div>
                  <div className={`text-xs mt-0.5 ${dark ? "text-gray-400" : "text-slate-500"}`}>
                    {d.sub}
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>

      </div>


    </section>
  );
}
