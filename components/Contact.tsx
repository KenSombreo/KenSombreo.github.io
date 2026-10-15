"use client";

import { Mail, Phone, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { BlockHeader } from "./Block";
import { useInView } from "./useInView";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "kenlemsombreo.liloan@gmail.com",
    href: "mailto:kenlemsombreo.liloan@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+63 994 074 5520",
    href: "tel:+639940745520",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Ken Lemuel Sombreo",
    href: "https://www.linkedin.com/in/ken-lemuel-sombreo-a4ba9116a/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/KenSombreo",
    href: "https://github.com/KenSombreo",
  },
];

export default function Contact() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section id="contact" ref={ref} className={`relative py-12 ${inView ? "in-view" : ""}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <BlockHeader height={3} label="contact.sh">
          LET&apos;S <span className="text-brand">CONNECT</span>
        </BlockHeader>

        <p className="reveal mt-6 max-w-xl text-base leading-7 text-muted" style={{ transitionDelay: "100ms" }}>
          Open to full-time roles, freelance work and DevOps or blockchain
          projects. Based in Cebu, Philippines.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {channels.map(({ icon: Icon, label, value, href }, i) => {
            const external = href.startsWith("http");
            return (
              <div key={label} className="reveal" style={{ transitionDelay: `${150 + i * 90}ms` }}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="px-card px-hover group m-1 flex items-center gap-4 p-5"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-accent/10 text-accent">
                    <Icon size={22} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-pixel text-[10px] text-muted">{label}</span>
                    <span className="mt-2 block truncate font-term text-xl text-fg">{value}</span>
                  </span>
                  <ArrowUpRight size={20} className="shrink-0 text-accent transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
