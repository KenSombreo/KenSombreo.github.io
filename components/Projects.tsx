"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ExternalLink, ShieldCheck } from "lucide-react";
import { SiNestjs, SiNextdotjs, SiTypescript, SiMongodb, SiProxmox, SiNginx } from "react-icons/si";
import { BlockHeader } from "./Block";
import { useInView } from "./useInView";

// Maps a tech tag string to its brand icon + color.
// Falls back to a plain text tag if a tag isn't in this list.
const TECH_ICONS: Record<string, { icon: React.ElementType; color?: string }> = {
  NestJS: { icon: SiNestjs, color: undefined },
  NextJS: { icon: SiNextdotjs },
  TypeScript: { icon: SiTypescript, color: undefined },
  MongoDB: { icon: SiMongodb, color: undefined },
  Proxmox: { icon: SiProxmox, color: undefined },
  FortiGate: { icon: ShieldCheck, color: undefined },
  Nginx: { icon: SiNginx, color: undefined },
};

type Project = {
  title: string;
  role: string;
  description: string;
  link?: string;
  cta?: string;
  tech: string[];
  image: string;
};

const projects: Project[] = [
  {
    title: "Blockscanner",
    role: "Full-Stack Developer",
    description: "Blockchain explorer for real-time transactions and node data.",
    link: "https://node.xode.net/",
    tech: ["NestJS", "NextJS", "MongoDB"],
    image: "/projects/blockscanner.png",
  },
  {
    title: "Xaver Mining",
    role: "Full-Stack Developer",
    description: "Mining dashboard for rewards, node performance and account activity.",
    link: "https://app.xav.it.com/",
    tech: ["NestJS", "NextJS", "MongoDB"],
    image: "/projects/xaver.png",
  },
  {
    title: "Vesting",
    role: "Frontend Developer",
    description: "Token vesting schedules and claim workflows.",
    link: "https://vesting.xode.net/",
    tech: ["NextJS"],
    image: "/projects/vesting.png",
  },
  {
    title: "Multipayx API",
    role: "Backend Developer",
    description: "Payment API powering token swaps and fiat on/off-ramps.",
    link: "https://swap-api.multipayx.net/",
    tech: ["NestJS", "MongoDB"],
    image: "/projects/multipayx.png",
  },
  {
    title: "Xode Nodes",
    role: "Blockchain Infrastructure",
    description: "Deploying and monitoring the collator, RPC and archive nodes behind the Xode network.",
    link: "https://telemetry.polkadot.io/#list/0xb2985e778bb748c70e450dcc084cc7da79fe742cc23d3b040abd7028187de69c",
    cta: "Live Telemetry",
    tech: ["Collator", "RPC", "Archive"],
    image: "/projects/xode-nodes.png",
  },
  {
    title: "Server & Infra",
    role: "Systems & DevOps",
    description: "End-to-end server management, from bare metal to production.",
    tech: ["Proxmox", "FortiGate", "Nginx"],
    image: "/projects/infrastructure.png",
  },
  {
    title: "Sheloure",
    role: "Fullstack Developer",
    description: "Dress rental platform with smooth browsing and booking.",
    link: "https://shelourecloset.site/",
    tech: ["NextJS", "NestJS", "MongoDB"],
    image: "/projects/sheloure.png",
  },
];

function ProjectCard({ project, index, peers }: { project: Project; index: number; peers: number }) {
  const { title, role, description, link, cta, tech, image } = project;
  const Wrapper = link ? "a" : "div";
  const linkProps = link ? { href: link, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Wrapper {...linkProps} className={`px-card group flex h-full flex-col ${link ? "px-hover" : ""}`}>
      {/* Node status bar */}
      <div className="flex items-center justify-between border-b-4 border-line px-4 py-1.5 font-term text-lg text-muted">
        <span className="flex items-center gap-2">
          <span className="led h-2 w-2 bg-accent" />
          NODE <span className="text-accent">{String(index + 1).padStart(2, "0")}</span>
        </span>
        <span>
          {peers} peer{peers === 1 ? "" : "s"}
        </span>
      </div>

      {/* Thumbnail fills the square; description slides in on hover */}
      <div className="relative min-h-0 flex-1 overflow-hidden bg-bg">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-bg/90 p-6 text-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <p className="text-sm leading-6 text-fg">{description}</p>
          {link && (
            <span className="px-btn px-btn-primary">
              {cta ?? "View"}
              <ArrowUpRight size={14} />
            </span>
          )}
        </div>
      </div>

      {/* Title + stack */}
      <div className="border-t-4 border-line px-4 py-3">
        <h3 className="truncate font-pixel text-[11px] leading-5 text-fg">{title}</h3>
        <p className="font-term text-base leading-5 text-accent">{role}</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {tech.map((tag) => {
            const meta = TECH_ICONS[tag];
            return (
              <span key={tag} className="px-tag">
                {meta && <meta.icon size={13} color={meta.color} />}
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}

type Link = { a: number; b: number; x1: number; y1: number; x2: number; y2: number };

// Measures the rendered cards and links each one to its nearest neighbour
// on the right (same row) and below (same column), so the mesh rewires
// itself at every breakpoint.
function useNodeLinks(count: number) {
  const gridRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [links, setLinks] = useState<Link[]>([]);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const measure = () => {
      const boxes = nodeRefs.current.slice(0, count).map((el) =>
        el ? { x: el.offsetLeft, y: el.offsetTop, w: el.offsetWidth, h: el.offsetHeight } : null
      );
      const next: Link[] = [];
      boxes.forEach((p, a) => {
        if (!p) return;
        let right = -1;
        let below = -1;
        boxes.forEach((q, b) => {
          if (!q || a === b) return;
          if (Math.abs(q.y - p.y) < 8 && q.x > p.x && (right < 0 || q.x < boxes[right]!.x)) right = b;
          if (Math.abs(q.x - p.x) < 8 && q.y > p.y && (below < 0 || q.y < boxes[below]!.y)) below = b;
        });
        if (right >= 0) {
          const q = boxes[right]!;
          const y = p.y + p.h / 2;
          next.push({ a, b: right, x1: p.x + p.w, y1: y, x2: q.x, y2: y });
        }
        if (below >= 0) {
          const q = boxes[below]!;
          const x = p.x + p.w / 2;
          next.push({ a, b: below, x1: x, y1: p.y + p.h, x2: x, y2: q.y });
        }
      });
      setLinks(next);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(grid);
    return () => ro.disconnect();
  }, [count]);

  return { gridRef, nodeRefs, links };
}

export default function Projects() {
  const { ref, inView } = useInView<HTMLElement>(0.05);
  const { gridRef, nodeRefs, links } = useNodeLinks(projects.length);
  const [active, setActive] = useState<number | null>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const peers = (i: number) => links.filter((l) => l.a === i || l.b === i).length;

  return (
    <section id="projects" ref={ref} className={`relative py-12 ${inView ? "in-view" : ""}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <BlockHeader height={2} label="projects.log">
            THINGS I&apos;VE <span className="text-brand">BUILT</span>
          </BlockHeader>
          <a
            href="https://github.com/KenSombreo"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal inline-flex items-center gap-2 font-term text-xl text-accent hover:underline"
          >
            &gt; view all on github
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Flex-wrap + centred so a short last row sits in the middle */}
        <div ref={gridRef} className="relative mt-12 flex flex-wrap justify-center gap-12">
          {projects.map((project, i) => (
            <div
              key={project.title}
              ref={(el) => {
                nodeRefs.current[i] = el;
              }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className="reveal aspect-square w-full max-w-[380px] p-1 sm:w-[calc((100%-3rem)/2)] lg:w-[calc((100%-6rem)/3)]"
              style={{ transitionDelay: `${100 + (i % 3) * 120}ms` }}
            >
              <ProjectCard project={project} index={i} peers={peers(i)} />
            </div>
          ))}

          {/* Network links between nodes */}
          <svg
            aria-hidden
            className={`pointer-events-none absolute inset-0 h-full w-full overflow-visible transition-opacity duration-700 ${
              inView ? "opacity-100" : "opacity-0"
            }`}
            shapeRendering="crispEdges"
          >
            {links.map((l, k) => {
              const hot = active !== null && (l.a === active || l.b === active);
              const color = hot ? "rgb(var(--c-accent))" : "rgb(var(--c-line))";
              return (
                <g key={k}>
                  <line
                    x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
                    stroke={color}
                    strokeWidth={4}
                    strokeDasharray="4 4"
                    className="link-flow"
                  />
                  {/* Ports where the link plugs into each node */}
                  <rect x={l.x1 - 5} y={l.y1 - 5} width={10} height={10} fill={hot ? "rgb(var(--c-accent))" : "rgb(var(--c-panel))"} stroke={color} strokeWidth={2} />
                  <rect x={l.x2 - 5} y={l.y2 - 5} width={10} height={10} fill={hot ? "rgb(var(--c-accent))" : "rgb(var(--c-panel))"} stroke={color} strokeWidth={2} />
                  {/* Transaction packet */}
                  {!reduceMotion && (
                    <rect x={-3} y={-3} width={6} height={6} fill={hot ? "rgb(var(--c-accent2))" : "rgb(var(--c-accent))"}>
                      <animateMotion
                        dur={`${1.6 + (k % 4) * 0.35}s`}
                        begin={`${(k * 0.4) % 2}s`}
                        repeatCount="indefinite"
                        path={k % 2 ? `M${l.x2},${l.y2} L${l.x1},${l.y1}` : `M${l.x1},${l.y1} L${l.x2},${l.y2}`}
                      />
                    </rect>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}
