"use client";

import { useEffect, useRef, useState } from "react";
import {
  Code2,
  ServerCog,
  Database,
  Network,
  Boxes,
  BrainCircuit,
} from "lucide-react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style
  dangerouslySetInnerHTML={{
    __html: `
      @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&display=swap');

      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(40px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-on-scroll {
        opacity: 0;
        transform: translateY(40px);
        transition: opacity 0.7s ease, transform 0.7s ease;
      }
      .in-view .animate-on-scroll {
        opacity: 1;
        transform: translateY(0);
      }
      .delay-100 { transition-delay: 100ms; }
      .delay-200 { transition-delay: 200ms; }
      .delay-300 { transition-delay: 300ms; }
      .delay-400 { transition-delay: 400ms; }
      .delay-500 { transition-delay: 500ms; }
      .delay-600 { transition-delay: 600ms; }
      .delay-700 { transition-delay: 700ms; }
      .delay-800 { transition-delay: 800ms; }
      .delay-900 { transition-delay: 900ms; }
      .delay-1000 { transition-delay: 1000ms; }

      .signature {
        font-family: 'Dancing Script', 'Brush Script MT', 'Great Vibes', 'Pacifico', cursive;
        font-size: 2.25rem;
        font-weight: 600;
        color: #a3b85c;
        letter-spacing: 0.02em;
        line-height: 1.2;
      }
      @media (min-width: 640px) {
        .signature {
          font-size: 3rem;
        }
      }
    `,
  }}
/>

      <section
        id="about"
        ref={sectionRef}
        className={`relative py-32 transition-all duration-700 ${isVisible ? "in-view" : ""}`}
      >
        {/* Background Glow */}
        <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-olive/10 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[34px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl lg:p-10">
            <div className="grid gap-14 lg:grid-cols-[1.1fr_auto_1.4fr]">

              {/* LEFT */}
              <div className="animate-on-scroll delay-100">
                <span className="inline-flex rounded-full border border-olive/30 bg-olive/10 px-5 py-2 text-sm font-semibold text-olive">
                  ABOUT ME
                </span>

                <h2 className="mt-8 text-5xl font-black leading-tight text-white">
                  Who
                  <span className="text-olive"> I Am</span>
                </h2>

                <p className="mt-8 leading-8 text-white/60">
                  I&apos;m a Software Engineer specializing in modern web
                  development, backend architecture, DevOps,
                  blockchain technologies, Linux infrastructure,
                  and production deployments.
                </p>

                <p className="mt-8 leading-8 text-white/60">
                  With <span className="text-white font-semibold">2 years</span> of
                  professional experience, I enjoy building scalable
                  applications, automating deployments, maintaining
                  blockchain nodes, and solving real-world engineering
                  problems.
                </p>

                {/* Small Stats — removed 99% uptime */}
                <div className="mt-12 grid grid-cols-2 gap-5">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">
                    <h3 className="text-3xl font-black text-olive">2 years</h3>
                    <p className="mt-2 text-sm text-white/50">Experience</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">
                    <h3 className="text-3xl font-black text-olive">10+</h3>
                    <p className="mt-2 text-sm text-white/50">Projects</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">
                    <h3 className="text-3xl font-black text-olive">6+</h3>
                    <p className="mt-2 text-sm text-white/50">Nodes</p>
                  </div>
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="relative hidden justify-center lg:flex">
                <div className="w-px bg-white/10" />
                <span className="absolute top-16 h-4 w-4 rounded-full bg-olive shadow-[0_0_20px_rgba(163,184,92,.9)]" />
                <span className="absolute bottom-16 h-4 w-4 rounded-full bg-olive shadow-[0_0_20px_rgba(163,184,92,.9)]" />
              </div>

              {/* RIGHT — 6 cards in 2 columns */}
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    icon: <Code2 size={26} />,
                    title: "Software Engineer",
                    desc: "Building modern web applications using Next.js, NestJS, TypeScript and scalable backend architectures.",
                  },
                  {
                    icon: <ServerCog size={26} />,
                    title: "DevOps",
                    desc: "Automating deployments, Docker containers, Linux servers, Nginx reverse proxy and CI/CD workflows.",
                  },
                  {
                    icon: <Boxes size={26} />,
                    title: "Blockchain Developer",
                    desc: "Developing blockchain applications and maintaining RPC, Archive and Collator nodes.",
                  },
                  {
                    icon: <Database size={26} />,
                    title: "Infrastructure",
                    desc: "Managing Proxmox virtualization, production servers, monitoring and high-availability systems.",
                  },
                  {
                    icon: <Network size={26} />,
                    title: "Networking",
                    desc: "Experience with networking fundamentals, Fortigate firewalls, reverse proxies and server connectivity.",
                  },
                  {
                    icon: <BrainCircuit size={26} />,
                    title: "Problem Solver",
                    desc: "Passionate about designing efficient solutions, optimizing performance and solving complex technical challenges.",
                  },
                ].map((item, index) => {
                  const delay = 200 + index * 100;
                  return (
                    <div
                      key={item.title}
                      className={`animate-on-scroll delay-${Math.min(delay, 1000)} group rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-olive hover:bg-white/[0.05]`}
                    >
                      <div className="flex items-start gap-5">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-olive/20 bg-olive/10 text-olive transition group-hover:scale-110">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {item.title}
                          </h3>
                          <p className="mt-3 leading-7 text-white/60">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}