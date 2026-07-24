"use client";

import {
  ArrowUp,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/10">

      {/* Glow */}

      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-olive/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-3">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-black text-white">
              Ken<span className="text-olive">.</span>
            </h2>

            <p className="mt-5 max-w-sm leading-8 text-white/60">
              Software Engineer specializing in modern web
              applications, DevOps, cloud infrastructure,
              and blockchain technologies.
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="text-lg font-bold text-white">
              Navigation
            </h3>

            <div className="mt-6 flex flex-col gap-4">

              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Projects", "#projects"],
                ["Contact", "#contact"],
              ].map(([name, href]) => (

                <a
                  key={name}
                  href={href}
                  className="text-white/60 transition hover:text-olive"
                >
                  {name}
                </a>

              ))}

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-lg font-bold text-white">
              Connect
            </h3>

            <div className="mt-6 flex gap-4">

              <a
                href="https://github.com/KenSombreo"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-olive hover:bg-olive/10"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/ken-lemuel-sombreo-a4ba9116a/"
                target="_blank"
                rel="noopener noreferrer"
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

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-12 border-t border-white/10" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Ken Lemuel. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white transition hover:border-olive hover:text-olive"
          >
            Back to Top

            <ArrowUp
              size={16}
              className="transition group-hover:-translate-y-1"
            />

          </a>

        </div>

      </div>

    </footer>
  );
}