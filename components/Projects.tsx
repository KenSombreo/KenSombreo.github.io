"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import {
  SiNestjs,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
} from "react-icons/si";

// Maps a tech tag string to its brand icon + color.
// Falls back to a plain text pill if a tag isn't in this list.
const TECH_ICONS: Record<string, { icon: React.ElementType; color: string }> = {
  NestJS: { icon: SiNestjs, color: "#E0234E" },
  NextJS: { icon: SiNextdotjs, color: "#FFFFFF" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
};

// NOTE: descriptions below are placeholder copy expanded from your
// original one-liners — swap in the real project details when ready.
const projects = [
  {
    title: "Blockscanner",
    role: "Full-Stack Developer",
    description:
      "A blockchain explorer for tracking on-chain activity, transactions, and node data in real time.",
    link: "https://node.xode.net/",
    tech: ["NestJS", "NextJS"],
    image: "/projects/blockscanner.png",
  },
  {
    title: "Xaver Mining",
    role: "Full-Stack Developer",
    description:
      "A mining operations dashboard for tracking rewards, node performance, and account activity.",
    link: "https://app.xav.it.com/",
    tech: ["NestJS", "NextJS"],
    image: "/projects/xaver.png",
  },
  {
    title: "Vesting",
    role: "Frontend Developer",
    description:
      "A web app for managing token vesting schedules and claim workflows.",
    link: "https://vesting.xode.net/",
    tech: ["NextJS"],
    image: "/projects/vesting.png",
  },
  {
    title: "Multipayx API",
    role: "Backend Developer",
    description:
      "A payment API powering token swaps and fiat on/off-ramp integrations.",
    link: "https://swap-api.multipayx.net/",
    secondaryLink: "https://ramp-api.multipayx.net/",
    tech: ["NestJS"],
    image: "/projects/multipayx.png",
  },
  {
  title: "Sheloure",
  role: "Frontend Developer",
  description:
    "A modern web platform for renting dresses, offering a seamless browsing and booking experience with a polished, responsive interface.",
  link: "https://sheloure.tail49a855.ts.net/",
  tech: ["NextJS"],
  image: "/projects/sheloure.png",
},
{
  title: "Auracam",
  role: "Frontend Developer",
  description:
    "An intuitive rental platform for cameras and photography gear, making it easy to find, compare, and book the perfect equipment.",
  link: "#",
  tech: ["NextJS"],
  image: "/projects/auracam.png",
},
];

const INFRA_TOOLS = [
  { label: "Proxmox", bg: "bg-orange-500", glyph: "X" },
  { label: "Fortigate", bg: "bg-red-600", glyph: "▦" },
  { label: "Nginx", bg: "bg-emerald-600", glyph: "N" },
];

const MAX_VISIBLE_TAGS = 3;

export default function Projects() {
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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        /* === Entrance animations === */
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(50px) scale(0.96);
          transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .in-view .animate-on-scroll {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* === Delay classes === */
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }
        .delay-400 { transition-delay: 400ms; }
        .delay-500 { transition-delay: 500ms; }
        .delay-600 { transition-delay: 600ms; }
        .delay-700 { transition-delay: 700ms; }
        .delay-800 { transition-delay: 800ms; }
        .delay-900 { transition-delay: 900ms; }

        /* === Background glow pulse === */
        @keyframes glowPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
          50% { transform: translate(-50%, -50%) scale(1.15); opacity: 1; }
        }
        .glow-pulse {
          animation: glowPulse 6s ease-in-out infinite;
        }

        /* === Card hover === */
        .project-card {
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
                      border-color 0.3s ease,
                      box-shadow 0.4s ease;
        }
        .project-card:hover {
          transform: translateY(-6px) scale(1.01);
          border-color: #a3b85c;
          box-shadow: 0 20px 60px rgba(163, 184, 92, 0.08);
        }

        /* === Image zoom on hover === */
        .project-image {
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .project-card:hover .project-image {
          transform: scale(1.06);
        }

       /* === Hover View Project overlay === */
        .project-overlay {
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .project-card:hover .project-overlay {
          opacity: 1;
        }
        .project-overlay-btn {
          transform: translateY(10px);
          transition: transform 0.35s ease;
        }
        .project-card:hover .project-overlay-btn {
          transform: translateY(0);
        }

        /* === Number badge === */
        .project-badge {
          background: linear-gradient(135deg, #1a7a3e, #a3b85c);
        }

        /* === Infrastructure icon hover === */
        .infra-icon {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .infra-icon:hover {
          transform: translateY(-3px) scale(1.1);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
        }

        /* === Link hover === */
        .view-all-link {
          transition: gap 0.3s ease, color 0.3s ease;
        }
        .view-all-link:hover {
          gap: 0.75rem;
          color: #ffffff;
        }

        /* === Tech tag hover === */
        .tech-tag {
          transition: all 0.3s ease;
        }
        .tech-tag:hover {
          border-color: #a3b85c;
          color: #a3b85c;
          background: rgba(163, 184, 92, 0.06);
        }

        /* === Xode / Infrastructure section entrance === */
        .split-row {
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .in-view .split-row {
          opacity: 1;
          transform: translateY(0);
        }
        .split-row {
          opacity: 0;
          transform: translateY(30px);
        }
      `}</style>

      <section
        id="projects"
        ref={sectionRef}
        className={`relative py-24 ${isVisible ? "in-view" : ""}`}
      >
        {/* Animated background glow */}
        <div className="absolute left-0 top-40 -z-10 h-[400px] w-[400px] rounded-full bg-olive/10 blur-[140px] glow-pulse" />

        <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
          {/* Heading row */}
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="animate-on-scroll delay-100">
              <span className="text-xs font-semibold tracking-[0.15em] text-olive">
                PROJECTS
              </span>
              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                Things I&apos;ve<span className="text-olive"> Built</span>
              </h2>
            </div>

            <a
              href="https://github.com/KenSombreo"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-on-scroll delay-100 view-all-link inline-flex items-center gap-1 text-sm font-medium text-olive hover:underline"
            >
              View All Projects
              <ExternalLink size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Project cards — big, featured, 2-up */}
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => {
              const delay = 200 + index * 100;
              const visibleTags = project.tech.slice(0, MAX_VISIBLE_TAGS);
              const hiddenCount = project.tech.length - visibleTags.length;

              return (
                <a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`animate-on-scroll delay-${Math.min(
                    delay,
                    900
                  )} project-card group block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl`}
                >
                  {/* Thumbnail */}
                  <div className="relative h-64 w-full overflow-hidden bg-panel2 sm:h-72">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image h-full w-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />

                    {/* Number badge */}
                    <span className="project-badge absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-base font-bold text-white shadow-lg">
                      {index + 1}
                    </span>

                    {/* Hover overlay */}
                    <div className="project-overlay absolute inset-0 flex items-center justify-center bg-black/60">
                      <span className="project-overlay-btn inline-flex items-center gap-2 rounded-full bg-olive px-6 py-3 text-sm font-semibold text-black">
                        View Project
                        <ArrowUpRight size={16} />
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-olive/80">
                      {project.role}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-white/60">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      {visibleTags.map((tag) => {
                        const meta = TECH_ICONS[tag];
                        return (
                          <span
                            key={tag}
                            className="tech-tag inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50"
                          >
                            {meta && <meta.icon size={13} color={meta.color} />}
                            {tag}
                          </span>
                        );
                      })}
                      {hiddenCount > 0 && (
                        <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/40">
                          +{hiddenCount} more
                        </span>
                      )}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Xode Nodes / Server & Infrastructure — same featured card treatment */}
          <div className="split-row mt-8 grid gap-8 md:grid-cols-2">
            {/* Xode Nodes — clickable out to telemetry, no raw URL shown */}
            <a
              href="https://telemetry.polkadot.io/#list/0xb2985e778bb748c70e450dcc084cc7da79fe742cc23d3b040abd7028187de69c"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card group block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
            >
              <div className="relative h-64 w-full overflow-hidden bg-panel2 sm:h-72">
                <img
                  src="/projects/xode-nodes.png"
                  alt="Xode Nodes"
                  className="project-image h-full w-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="project-overlay absolute inset-0 flex items-center justify-center bg-black/60">
                  <span className="project-overlay-btn inline-flex items-center gap-2 rounded-full bg-olive px-6 py-3 text-sm font-semibold text-black">
                    View Live Telemetry
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white">Xode Nodes</h3>
                <p className="mt-1 text-xs font-medium text-olive/80">
                  Blockchain Infrastructure
                </p>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  I deploy, run, and monitor the node infrastructure behind
                  the Xode network — collator nodes that produce blocks, RPC
                  nodes that serve public API traffic, and archive nodes that
                  keep the full historical chain data available. I&apos;m
                  responsible for provisioning, uptime monitoring, and
                  security hardening to keep the network live around the
                  clock.
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {["Collator Nodes", "RPC Nodes", "Archive Nodes"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="tech-tag rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </a>

            {/* Server & Infrastructure — self-managed, no external link */}
            <div className="project-card overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
              <div className="relative h-64 w-full overflow-hidden bg-panel2 sm:h-72">
                <img
                  src="/projects/infrastructure.png"
                  alt="Server & Infrastructure"
                  className="project-image h-full w-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white">
                  Server &amp; Infrastructure
                </h3>
                <p className="mt-1 text-xs font-medium text-olive/80">
                  Systems &amp; DevOps
                </p>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  I manage the server infrastructure end-to-end — provisioning
                  and virtualizing hosts with Proxmox, securing network
                  perimeter and traffic with Fortigate firewalls, and
                  configuring Nginx as a reverse proxy and load balancer for
                  everything I deploy. That covers the full path from
                  bare-metal setup to production deployment and ongoing
                  monitoring.
                </p>

                <div className="mt-5 flex items-center gap-3">
                  {INFRA_TOOLS.map(({ label, bg, glyph }) => (
                    <span
                      key={label}
                      title={label}
                      className={`infra-icon flex h-9 w-9 items-center justify-center rounded-lg ${bg} text-sm font-bold text-white`}
                    >
                      {glyph}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}