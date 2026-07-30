"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .header-container {
          animation: fadeInDown 0.6s ease forwards;
        }
      `}</style>

      <header className="fixed inset-x-0 top-0 z-50 header-container">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className={`
              mt-5 flex h-20 items-center justify-between rounded-2xl border border-white/5 px-8 backdrop-blur-xl
              transition-all duration-500 ease-out
              ${
                scrolled
                  ? "bg-[#0a0a0f]/90 shadow-2xl shadow-black/30 border-white/10"
                  : "bg-white/[0.03] border-white/5"
              }
            `}
          >
            {/* Logo */}
            <a href="#home" className="group flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-olive text-lg font-black text-black shadow-lg shadow-olive/30 transition-all duration-300 group-hover:scale-105">
                KS
              </div>
              <div>
                <h1 className="text-lg font-bold text-white">
                  Ken <span className="text-olive">Sombreo</span>
                </h1>
                <p className="text-xs text-white/50">Software Engineer</p>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-12 lg:flex">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group relative text-sm font-medium text-white/80 transition duration-300 hover:text-white"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-olive transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Resume Button */}
            <div className="hidden lg:flex">
              <a
                href="/resume.pdf"
                className="rounded-xl border border-olive/30 bg-olive px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-olive/30"
              >
                Download CV
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="rounded-lg border border-white/10 p-2 text-white lg:hidden"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`overflow-hidden transition-all duration-500 lg:hidden ${
              open ? "mt-4 max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="rounded-2xl border border-white/5 bg-[#10151E]/95 backdrop-blur-xl">
              <nav className="flex flex-col p-6">
                {links.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-4 py-4 text-white/80 transition hover:bg-white/5 hover:text-olive"
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="/resume.pdf"
                  className="mt-4 rounded-xl bg-olive py-3 text-center font-semibold text-black"
                >
                  Download CV
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}