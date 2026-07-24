"use client";

import { useState } from "react";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ShieldCheck,
  X,
} from "lucide-react";
import {
  SiAngular,
  SiNextdotjs,
  SiNestjs,
  SiMongodb,
  SiMysql,
  SiNginx,
  SiProxmox,
  SiDocker,
  SiGithubactions,
  SiPostman,
} from "react-icons/si";

// Tech stack shown below the hero copy.
// Each entry pairs an icon with its brand color, matching the
// "logo chip" pattern (icon + label in a bordered pill).
const techStack = [
  { name: "Angular", icon: SiAngular, color: "#DD0031" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Nginx", icon: SiNginx, color: "#009639" },
  { name: "Proxmox", icon: SiProxmox, color: "#E57000" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  // react-icons/simple-icons has no Fortinet/FortiGate glyph yet,
  // so this uses a generic shield as a stand-in — swap for a real
  // FortiGate SVG under /public if you have one.
  { name: "FortiGate", icon: ShieldCheck, color: "#EE3124" },
  { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
];

const RESUME_PATH = "/resume.pdf";

export default function Hero() {
  const [showResume, setShowResume] = useState(false);

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes typing {
          from { width: 0; }
          to { width: 18ch; } /* Exactly 18 characters including space */
        }
        @keyframes blink {
          50% { border-color: transparent; }
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.7s ease forwards;
        }
        .animate-typing {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: 3px solid #a3e635;
          width: 0;
          animation: typing 2s steps(18, end) forwards,
                     blink 0.7s step-end infinite;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-600 { animation-delay: 600ms; }
        .delay-700 { animation-delay: 700ms; }
        .delay-800 { animation-delay: 800ms; }
      `}</style>

      <section
        id="home"
        className="relative overflow-hidden pt-40 pb-28"
      >
        {/* Background Glow */}
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-olive/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(163,184,91,.12),transparent_55%)]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 lg:px-8">

          {/* LEFT */}
          <div>
            {/* Badge */}
            <div className="inline-flex animate-fade-in-up delay-100 items-center gap-3 rounded-full border border-olive/20 bg-white/[0.04] px-5 py-2 backdrop-blur-xl">
              <span className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-white/70">
                Available for Opportunities
              </span>
            </div>

            {/* Heading */}
            <p className="animate-fade-in-up delay-200 mt-8 text-6xl font-black tracking-tight text-white lg:text-7xl">
              Hello<span className="text-olive">.</span>
            </p>

            <h2 className="animate-fade-in-up delay-300 mt-4 text-3xl font-semibold text-white/90 lg:text-4xl">
              I&apos;m Ken Lemuel
            </h2>

            {/* Software Engineer with typing effect */}
            <h1 className="animate-fade-in-up delay-400 mt-5 text-5xl font-black leading-tight text-olive lg:text-7xl">
              <span className="animate-typing">Software Engineer</span>
            </h1>

            {/* Description — updated text */}
            <p className="animate-fade-in-up delay-500 mt-8 max-w-xl text-lg leading-8 text-white/60">
              I develop scalable, secure, and modern web applications that deliver exceptional user experiences.
            </p>

            {/* Buttons */}
            <div className="animate-fade-in-up delay-600 mt-10 flex flex-wrap gap-5">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-xl bg-olive px-7 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-olive/30"
              >
                View Projects
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <button
                type="button"
                onClick={() => setShowResume(true)}
                className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-7 py-4 font-semibold text-white backdrop-blur-xl transition hover:border-olive hover:text-olive"
              >
                <Download size={18} />
                Download Resume
              </button>
            </div>

            {/* Social */}
            <div className="animate-fade-in-up delay-700 mt-10 flex items-center gap-4">
              <a
                href="https://github.com/KenSombreo"
                target="_blank"
                className="rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-olive hover:bg-olive/10"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/ken-lemuel-sombreo-a4ba9116a/"
                target="_blank"
                className="rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-olive hover:bg-olive/10"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="mailto:kenlemsombreo.liloan@gmail.com"
                className="rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-olive hover:bg-olive/10"
              >
                <Mail size={20} />
              </a>

              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white/60">
                <MapPin size={18} />
                Philippines
              </div>
            </div>

            {/* Tech Stack */}
            <div className="animate-fade-in-up delay-800 mt-10 flex flex-wrap gap-3">
              {techStack.map(({ name, icon: Icon, color }) => (
                <div
                  key={name}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-xl transition hover:border-olive/40"
                >
                  <Icon size={18} color={color} />
                  <span className="text-sm font-medium text-white/80">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — profile image with fade-in */}
          <div className="relative mx-auto hidden w-full max-w-[560px] items-center justify-center lg:flex animate-fade-in-up delay-300">
            <div className="absolute h-[520px] w-[520px] rounded-full bg-olive/20 blur-[120px]" />
            <div className="absolute -left-10 top-16 h-40 w-40 rounded-full border border-olive/20" />
            <div className="absolute -right-8 bottom-16 h-28 w-28 rounded-full border border-white/10" />

            <div className="group relative">
              <div className="absolute inset-0 rounded-[42px] bg-gradient-to-br from-olive/30 via-olive/10 to-transparent blur-3xl transition duration-700 group-hover:scale-110" />
              <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#11161F] shadow-[0_25px_80px_rgba(0,0,0,.45)]">
                <img
                  src="/picture.png"
                  alt="Ken Lemuel"
                  className="h-[640px] w-[480px] object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Resume preview modal */}
      {showResume && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setShowResume(false)}
        >
          <div
            className="relative flex h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#11161F] shadow-[0_25px_80px_rgba(0,0,0,.5)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <h3 className="font-semibold text-white">Resume Preview</h3>
              <button
                type="button"
                onClick={() => setShowResume(false)}
                aria-label="Close preview"
                className="rounded-lg p-2 text-white/60 transition hover:bg-white/10 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Viewer — native PDF embed, works on localhost and in prod */}
            <div className="flex-1 bg-white">
              <iframe
                src={RESUME_PATH}
                title="Resume Preview"
                className="h-full w-full"
              />
            </div>

            {/* Footer — the actual download action */}
            <div className="flex items-center justify-end gap-3 border-t border-white/10 px-6 py-4">
              <button
                type="button"
                onClick={() => setShowResume(false)}
                className="rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium text-white/70 transition hover:text-white"
              >
                Close
              </button>
              <a
                href={RESUME_PATH}
                download
                className="inline-flex items-center gap-2 rounded-xl bg-olive px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-105 hover:shadow-lg hover:shadow-olive/30"
              >
                <Download size={16} />
                Download
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}