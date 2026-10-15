"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  const isNight = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isNight ? "Switch to day mode" : "Switch to night mode"}
      title={isNight ? "Day mode" : "Night mode"}
      className="px-btn px-btn-ghost px-btn-icon"
    >
      {isNight ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
