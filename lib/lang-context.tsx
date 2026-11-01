"use client";
import { createContext, useContext, useState, useLayoutEffect, ReactNode } from "react";

type Lang = "no";
type Theme = "light" | "dark";

interface AppCtx {
  lang: Lang;
  toggleLang: () => void;
  isRTL: boolean;
  theme: Theme;
  toggleTheme: () => void;
}

const AppContext = createContext<AppCtx>({
  lang: "no", toggleLang: () => {}, isRTL: false,
  theme: "dark", toggleTheme: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useLayoutEffect(() => {
    let initial: Theme = "dark";
    try {
      if (localStorage.getItem("theme") === "light") initial = "light";
    } catch {
      // Keep the default when browser storage is unavailable.
    }
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Theme switching still works when browser storage is unavailable.
    }
    setTheme(next);
  };

  return (
    <AppContext.Provider value={{ lang: "no", toggleLang: () => {}, isRTL: false, theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export const useLang = () => useContext(AppContext);
