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

const techStack = [
  { name: "Angular", icon: SiAngular, color: "#DD0031" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Nginx", icon: SiNginx, color: "#009639" },
  { name: "Proxmox", icon: SiProxmox, color: "#E57000" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
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
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
     @keyframes typing {
  from { clip-path: inset(0 100% 0 0); }
  to { clip-path: inset(0 0 0 0); }
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
  white-space: nowrap;
  clip-path: inset(0 100% 0 0);
  animation: typing 2s steps(18, end) forwards, blink 0.7s step-end infinite;
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
        className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28"
      >
        {/* Background Glow */}
        <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-olive/10 blur-[100px] sm:h-[700px] sm:w-[700px] sm:blur-[140px]" />
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

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">

          {/* IMAGE */}
          <div className="relative mx-auto flex w-full max-w-[240px] items-center justify-center animate-fade-in-up delay-200 lg:order-last lg:max-w-[560px] lg:delay-300">
            <div className="absolute h-[220px] w-[220px] rounded-full bg-olive/20 blur-[80px] sm:h-[320px] sm:w-[320px] lg:h-[520px] lg:w-[520px] lg:blur-[120px]" />
            <div className="absolute -left-6 top-8 hidden h-40 w-40 rounded-full border border-olive/20 sm:-left-10 sm:top-16 lg:block" />
            <div className="absolute -right-4 bottom-8 hidden h-28 w-28 rounded-full border border-white/10 sm:-right-8 sm:bottom-16 lg:block" />

            <div className="group relative w-full">
              <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-olive/30 via-olive/10 to-transparent blur-2xl transition duration-700 group-hover:scale-110 lg:rounded-[42px] lg:blur-3xl" />
              <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#11161F] shadow-[0_15px_50px_rgba(0,0,0,.45)] lg:rounded-[40px] lg:shadow-[0_25px_80px_rgba(0,0,0,.45)]">
                <img
                  src="/picture.png"
                  alt="Ken Sombreo"
                  className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[400px] lg:h-[640px] lg:w-[480px]"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/20 to-transparent sm:h-48" />
              </div>
            </div>
          </div>

          {/* LEFT / TEXT CONTENT */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex animate-fade-in-up delay-100 items-center gap-2 rounded-full border border-olive/20 bg-white/[0.04] px-4 py-1.5 backdrop-blur-xl sm:gap-3 sm:px-5 sm:py-2">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse sm:h-2.5 sm:w-2.5" />
              <span className="text-xs text-white/70 sm:text-sm">
                Available for Opportunities
              </span>
            </div>

            {/* Heading */}
            <p className="animate-fade-in-up delay-200 mt-6 text-4xl font-black tracking-tight text-white sm:mt-8 sm:text-5xl lg:text-7xl">
              Hello<span className="text-olive">.</span>
            </p>

            <h2 className="animate-fade-in-up delay-300 mt-3 text-2xl font-semibold text-white/90 sm:mt-4 sm:text-3xl lg:text-4xl">
              I&apos;m Ken Sombreo
            </h2>

            <h1 className="animate-fade-in-up delay-400 mt-4 text-2xl font-black leading-tight text-olive sm:mt-5 sm:text-4xl lg:text-6xl">
              <span className="animate-typing">Software Engineer</span>
            </h1>

            {/* Description */}
            <p className="animate-fade-in-up delay-500 mx-auto mt-6 max-w-xl text-base leading-7 text-white/60 sm:mt-8 sm:text-lg sm:leading-8 lg:mx-0">
              I develop scalable, secure, and modern web applications that deliver exceptional user experiences.
            </p>

            {/* Buttons */}
            <div className="animate-fade-in-up delay-600 mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-5 lg:justify-start">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-olive px-6 py-3.5 font-semibold text-black transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-olive/30 sm:px-7 sm:py-4"
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
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 font-semibold text-white backdrop-blur-xl transition hover:border-olive hover:text-olive sm:px-7 sm:py-4"
              >
                <Download size={18} />
                Download Resume
              </button>
            </div>

            {/* Social */}
            <div className="animate-fade-in-up delay-700 mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10 sm:gap-4 lg:justify-start">
              <a
                href="https://github.com/KenSombreo"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5 transition hover:border-olive hover:bg-olive/10 sm:p-4"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ken-lemuel-sombreo-a4ba9116a/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5 transition hover:border-olive hover:bg-olive/10 sm:p-4"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:kenlemsombreo.liloan@gmail.com"
                className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5 transition hover:border-olive hover:bg-olive/10 sm:p-4"
              >
                <Mail size={20} />
              </a>
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white/60 sm:px-5 sm:py-4 sm:text-base">
                <MapPin size={18} />
                Philippines
              </div>
            </div>

            {/* Tech Stack */}
            <div className="animate-fade-in-up delay-800 mt-8 flex flex-wrap justify-center gap-2 sm:mt-10 sm:gap-3 lg:justify-start">
              {techStack.map(({ name, icon: Icon, color }) => (
                <div
                  key={name}
                  className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 backdrop-blur-xl transition hover:border-olive/40 sm:gap-2 sm:px-4 sm:py-3"
                >
                  <Icon size={16} color={color} className="sm:h-[18px] sm:w-[18px]" />
                  <span className="text-xs font-medium text-white/80 sm:text-sm">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resume preview modal */}
      {showResume && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3 backdrop-blur-sm sm:p-4"
          onClick={() => setShowResume(false)}
        >
          <div
            className="relative flex h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#11161F] shadow-[0_25px_80px_rgba(0,0,0,.5)] sm:h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-6 sm:py-4">
              <h3 className="text-sm font-semibold text-white sm:text-base">Resume Preview</h3>
              <button
                type="button"
                onClick={() => setShowResume(false)}
                aria-label="Close preview"
                className="rounded-lg p-2 text-white/60 transition hover:bg-white/10 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Viewer */}
            <div className="flex-1 bg-white">
              <iframe
                src={RESUME_PATH}
                title="Resume Preview"
                className="h-full w-full"
              />
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-3 border-t border-white/10 px-4 py-3 sm:px-6 sm:py-4">
              <button
                type="button"
                onClick={() => setShowResume(false)}
                className="rounded-xl border border-white/10 px-4 py-2 text-sm font-medium text-white/70 transition hover:text-white sm:px-5 sm:py-2.5"
              >
                Close
              </button>
              <a
                href={RESUME_PATH}
                download
                className="inline-flex items-center gap-2 rounded-xl bg-olive px-4 py-2 text-sm font-semibold text-black transition hover:scale-105 hover:shadow-lg hover:shadow-olive/30 sm:px-5 sm:py-2.5"
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