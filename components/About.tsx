"use client";

import { Code2, ServerCog, Database, Network, Boxes } from "lucide-react";
import { BlockHeader } from "./Block";
import { useInView } from "./useInView";

const stats = [
  { value: "2 YRS", label: "Experience" },
  { value: "10+", label: "Projects" },
  { value: "6+", label: "Nodes" },
];

const skills = [
  {
    icon: Code2,
    title: "Software Engineering",
    desc: "Next.js, NestJS and TypeScript apps with scalable backends.",
  },
  {
    icon: Boxes,
    title: "Blockchain",
    desc: "dApps plus RPC, archive and collator node operations.",
  },
  {
    icon: ServerCog,
    title: "DevOps",
    desc: "Docker, CI/CD, Nginx and automated Linux deployments.",
  },
  {
    icon: Database,
    title: "Infrastructure",
    desc: "Proxmox virtualization, monitoring and high availability.",
  },
  {
    icon: Network,
    title: "Networking",
    desc: "FortiGate firewalls, reverse proxies and connectivity.",
  },
];

export default function About() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section id="about" ref={ref} className={`relative py-12 ${inView ? "in-view" : ""}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <BlockHeader height={1} label="about.me">
          WHO <span className="text-brand">I AM</span>
        </BlockHeader>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          {/* Bio + stats */}
          <div className="reveal" style={{ transitionDelay: "100ms" }}>
            <p className="text-base leading-8 text-muted">
              Software Engineer with <span className="font-bold text-fg">2 years</span> of
              experience across web development, backend architecture, DevOps
              and blockchain infrastructure. I like building things that scale
              and keeping them running in production.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-5">
              {stats.map((s) => (
                <div key={s.label} className="px-card px-hover m-1 p-4 text-center">
                  <p className="font-pixel text-sm text-accent sm:text-base">{s.value}</p>
                  <p className="mt-3 font-term text-lg text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skill blocks */}
          <div className="grid gap-6 sm:grid-cols-2">
            {skills.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`reveal ${i === skills.length - 1 ? "sm:col-span-2" : ""}`}
                style={{ transitionDelay: `${150 + i * 90}ms` }}
              >
                <div className="px-card px-hover group m-1 flex h-full items-start gap-4 p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-accent/10 text-accent transition-transform duration-150 group-hover:-rotate-6 group-hover:scale-110">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h3 className="font-pixel text-[11px] leading-5 text-fg">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
