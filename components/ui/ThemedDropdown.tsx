"use client";

import { useId, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { useLang } from "@/lib/lang-context";

export default function ThemedDropdown({ label, value, selectedLabel, options, disabled = false, onChange }: {
  label: string;
  value: string;
  selectedLabel?: string;
  options: { value: string; label: string }[];
  disabled?: boolean;
  onChange: (value: string) => void;
}) {
  const id = useId();
  const trigger = useRef<HTMLButtonElement>(null);
  const list = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const { theme } = useLang();
  const dark = theme === "dark";
  function focusOption(index: number) {
    requestAnimationFrame(() => list.current?.querySelectorAll<HTMLButtonElement>('[role="option"]')[index]?.focus());
  }
  return <div className="min-w-0 text-sm font-medium" onBlur={event => {
    if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
  }} onKeyDown={event => {
    if (event.key === "Escape" && open) {
      event.preventDefault(); event.stopPropagation(); setOpen(false); trigger.current?.focus();
    }
  }}>
    <label id={`${id}-label`} htmlFor={id}>{label}</label>
    <button ref={trigger} id={id} type="button" disabled={disabled} aria-haspopup="listbox" aria-expanded={open && !disabled} aria-controls={`${id}-options`} aria-labelledby={`${id}-label ${id}-value`}
      onClick={() => setOpen(current => !current)} onKeyDown={event => {
        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
          event.preventDefault(); setOpen(true); focusOption(Math.max(0, options.findIndex(option => option.value === value)));
        }
      }}
      className={`mt-2 flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left outline-hidden transition focus:ring-2 focus:ring-[#4d9de0] disabled:cursor-not-allowed disabled:opacity-60 ${dark ? "border-white/15 bg-white/5 text-white" : "border-slate-200 bg-slate-50 text-slate-900"} ${open && !disabled ? "ring-2 ring-[#4d9de0]" : ""}`}>
      <span id={`${id}-value`}>{selectedLabel ?? options.find(option => option.value === value)?.label}</span>
      <ChevronDown size={18} className={`shrink-0 transition-transform ${open && !disabled ? "rotate-180" : ""}`} />
    </button>
    {open && !disabled && <div ref={list} id={`${id}-options`} role="listbox" aria-labelledby={`${id}-label`} className={`mt-2 max-h-52 overflow-y-auto rounded-xl border p-1.5 shadow-lg ${dark ? "border-white/15 bg-[#151d35] text-slate-100" : "border-slate-200 bg-white text-slate-900"}`}>
      {options.map((option, index) => <button key={option.value} type="button" role="option" aria-selected={value === option.value}
        onClick={() => { onChange(option.value); setOpen(false); trigger.current?.focus(); }}
        onKeyDown={event => {
          let next: number;
          if (event.key === "ArrowDown") next = (index + 1) % options.length;
          else if (event.key === "ArrowUp") next = (index - 1 + options.length) % options.length;
          else if (event.key === "Home") next = 0;
          else if (event.key === "End") next = options.length - 1;
          else return;
          event.preventDefault(); focusOption(next);
        }}
        className={`flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-left outline-hidden transition ${value === option.value ? "bg-[#00205B] text-white" : dark ? "hover:bg-white/10 focus:bg-white/10" : "hover:bg-slate-100 focus:bg-slate-100"}`}>
        {option.label}{value === option.value && <Check size={16} className="shrink-0" />}
      </button>)}
    </div>}
  </div>;
}
