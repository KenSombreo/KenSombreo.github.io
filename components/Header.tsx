"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const START_HEIGHT = 1_284_903;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [height, setHeight] = useState(START_HEIGHT);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    // A new "block" every 6s, like a real chain.
    const id = setInterval(() => setHeight((h) => h + 1), 6000);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(id);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 rise">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`px-card mt-4 flex h-16 items-center justify-between gap-4 px-4 sm:px-5 ${
            scrolled ? "bg-panel" : "bg-panel/80 backdrop-blur"
          }`}
        >
          {/* Logo */}
          <a href="#home" className="group flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center bg-brand font-pixel text-[11px] text-on-accent transition-transform duration-150 group-hover:-rotate-6">
              KS
            </span>
            <span className="hidden font-pixel text-[10px] leading-5 text-fg sm:block">
              KEN<span className="text-accent">.</span>SOMBREO
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group font-term text-xl text-muted transition-colors hover:text-accent"
              >
                <span className="opacity-0 transition-opacity group-hover:opacity-100">&gt;</span>
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Live block height */}
            <span className="hidden items-center gap-2 font-term text-lg text-muted md:flex">
              <span className="led h-2 w-2 bg-accent" />
              #{height.toLocaleString("en-US")}
            </span>

            <ThemeToggle />

            <a href="/resume.pdf" className="px-btn px-btn-primary hidden lg:inline-flex">
              CV
            </a>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="px-btn px-btn-ghost px-btn-icon lg:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            open ? "mt-5 max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="px-card m-1 flex flex-col p-4">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 font-term text-2xl text-muted hover:bg-accent/10 hover:text-accent"
              >
                &gt; {item.name}
              </a>
            ))}
            <a href="/resume.pdf" className="px-btn px-btn-primary mt-4">
              Download CV
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
