"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, ShieldCheck, X } from "lucide-react";
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
import Portrait3D from "./Portrait3D";

// Icons inherit the text color so the palette stays monochrome.
const techStack = [
  { name: "Angular", icon: SiAngular, color: undefined },
  { name: "Next.js", icon: SiNextdotjs, color: undefined },
  { name: "NestJS", icon: SiNestjs, color: undefined },
  { name: "MongoDB", icon: SiMongodb, color: undefined },
  { name: "MySQL", icon: SiMysql, color: undefined },
  { name: "Nginx", icon: SiNginx, color: undefined },
  { name: "Proxmox", icon: SiProxmox, color: undefined },
  { name: "Docker", icon: SiDocker, color: undefined },
  { name: "FortiGate", icon: ShieldCheck, color: undefined },
  { name: "GitHub Actions", icon: SiGithubactions, color: undefined },
  { name: "Postman", icon: SiPostman, color: undefined },
];

const ROLES = ["Software Engineer", "DevOps Engineer", "Blockchain Dev"];
const RESUME_PATH = "/resume.pdf";

// Types each role out, pauses, deletes it, moves to the next.
function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let delay = deleting ? 45 : 90;
    if (!deleting && text === word) delay = 1800;
    if (deleting && text === "") delay = 300;

    const id = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else setText(word.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);
    return () => clearTimeout(id);
  }, [text, deleting, index, words]);

  return text;
}

const delay = (ms: number) => ({ ["--d" as string]: `${ms}ms` });

export default function Hero() {
  const [showResume, setShowResume] = useState(false);
  const role = useTypewriter(ROLES);

  useEffect(() => {
    if (!showResume) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setShowResume(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showResume]);

  return (
    <>
      <section id="home" className="relative pt-32 sm:pt-36 lg:pt-44">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.25fr_1fr]">
          {/* Text */}
          <div className="text-center lg:text-left">
            <div className="rise inline-flex items-center gap-3 border-2 border-dashed border-accent/60 px-3 py-1 font-term text-lg text-accent" style={delay(100)}>
              <span className="led h-2 w-2 bg-accent" />
              NODE ONLINE · open to work
            </div>

            <p className="rise mt-8 font-term text-2xl text-muted" style={delay(200)}>
              &gt; hello_world
            </p>

            <h1 className="rise mt-3 font-pixel text-3xl leading-tight text-fg sm:text-5xl sm:leading-tight" style={delay(300)}>
              <span className="glitch" data-text="KEN SOMBREO">
                KEN SOMBREO
              </span>
            </h1>

            <p className="rise mt-6 h-8 font-pixel text-xs leading-8 text-accent sm:text-base" style={delay(400)}>
              {role}
              <span className="cursor-block" />
            </p>

            <p className="rise mx-auto mt-6 max-w-lg text-base leading-7 text-muted lg:mx-0" style={delay(500)}>
              I build scalable web apps, ship them to production, and keep
              blockchain nodes running around the clock.
            </p>

            <div className="rise mt-10 flex flex-col justify-center gap-5 sm:flex-row lg:justify-start" style={delay(600)}>
              <a href="#projects" className="px-btn px-btn-primary group">
                View Projects
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <button type="button" onClick={() => setShowResume(true)} className="px-btn px-btn-ghost">
                <Download size={16} />
                Resume
              </button>
            </div>

            <div className="rise mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start" style={delay(700)}>
              <a href="https://github.com/KenSombreo" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="px-btn px-btn-ghost px-btn-icon">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/ken-lemuel-sombreo-a4ba9116a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="px-btn px-btn-ghost px-btn-icon">
                <Linkedin size={18} />
              </a>
              <a href="mailto:kenlemsombreo.liloan@gmail.com" aria-label="Email" className="px-btn px-btn-ghost px-btn-icon">
                <Mail size={18} />
              </a>
              <span className="ml-1 flex items-center gap-2 font-term text-xl text-muted">
                <MapPin size={16} /> Cebu, PH
              </span>
            </div>
          </div>

          {/* Photo as the genesis block */}
          <div className="rise w-full" style={delay(400)}>
            <Portrait3D />
          </div>
        </div>

        {/* Tech ticker */}
        <div className="ticker rise mt-16 overflow-hidden border-y-4 border-line bg-panel/70 py-3" style={delay(800)}>
          <div className="ticker-track">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
                {techStack.map(({ name, icon: Icon, color }) => (
                  <span key={name} className="flex items-center gap-2 px-6 font-term text-xl text-fg">
                    <Icon size={16} color={color} />
                    {name.toUpperCase()}
                    <span className="text-accent">▲</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume preview */}
      {showResume && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-bg/80 p-3 backdrop-blur-sm sm:p-6"
          onClick={() => setShowResume(false)}
        >
          <div
            className="px-card flex h-[88vh] w-full max-w-3xl flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b-4 border-line px-4 py-3">
              <h3 className="font-pixel text-[10px] text-fg">RESUME.PDF</h3>
              <button
                type="button"
                onClick={() => setShowResume(false)}
                aria-label="Close preview"
                className="p-1 text-muted hover:text-accent"
              >
                <X size={20} />
              </button>
            </div>
            <iframe src={RESUME_PATH} title="Resume Preview" className="w-full flex-1 bg-white" />
            <div className="flex justify-end gap-4 border-t-4 border-line px-4 py-4">
              <button type="button" onClick={() => setShowResume(false)} className="px-btn px-btn-ghost">
                Close
              </button>
              <a href={RESUME_PATH} download className="px-btn px-btn-primary">
                <Download size={14} />
                Download
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
