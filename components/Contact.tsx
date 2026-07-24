"use client";

import { useEffect, useRef, useState } from "react";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

export default function Contact() {
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
      `}</style>

      <section
        id="contact"
        ref={sectionRef}
        className={`relative py-32 ${isVisible ? "in-view" : ""}`}
      >
        {/* Background glow */}
        <div className="absolute right-0 top-20 h-[450px] w-[450px] rounded-full bg-olive/10 blur-[140px]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Heading */}
          <div className="animate-on-scroll delay-100 max-w-2xl">
            <span className="rounded-full border border-olive/30 bg-olive/10 px-5 py-2 text-sm font-medium text-olive">
              Contact
            </span>
            <h2 className="mt-8 text-5xl font-black text-white lg:text-6xl">
              Let's Build
              <span className="text-olive"> Something Together.</span>
            </h2>
            <p className="mt-8 text-lg leading-9 text-white/60">
              Whether you have a project, an opportunity, or simply want
              to connect, feel free to reach out. I'm always interested
              in discussing software engineering, DevOps, blockchain,
              and innovative technology.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="mt-20 grid gap-8 md:grid-cols-2">
            {/* Email */}
            <a
              href="mailto:kenlemsombreo.liloan@gmail.com"
              className="animate-on-scroll delay-200 group rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-olive"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <div className="rounded-2xl bg-olive/10 p-4 text-olive">
                    <Mail size={28} />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Email</p>
                    <h3 className="mt-1 text-xl font-bold text-white">
                      kenlemsombreo.liloan
                      <br />
                      @gmail.com
                    </h3>
                  </div>
                </div>
                <ArrowUpRight className="text-olive transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+639940745520"
              className="animate-on-scroll delay-300 group rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-olive"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <div className="rounded-2xl bg-olive/10 p-4 text-olive">
                    <Phone size={28} />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Phone</p>
                    <h3 className="mt-1 text-xl font-bold text-white">
                      +63 994 074 5520
                    </h3>
                  </div>
                </div>
                <ArrowUpRight className="text-olive transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ken-lemuel-sombreo-a4ba9116a/"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-on-scroll delay-400 group rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-olive"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <div className="rounded-2xl bg-olive/10 p-4 text-olive">
                    <Linkedin size={28} />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">LinkedIn</p>
                    <h3 className="mt-1 text-xl font-bold text-white">
                      Ken Lemuel
                    </h3>
                  </div>
                </div>
                <ArrowUpRight className="text-olive transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/KenSombreo"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-on-scroll delay-500 group rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-olive"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <div className="rounded-2xl bg-olive/10 p-4 text-olive">
                    <Github size={28} />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">GitHub</p>
                    <h3 className="mt-1 text-xl font-bold text-white">
                      github.com/KenSombreo
                    </h3>
                  </div>
                </div>
                <ArrowUpRight className="text-olive transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </a>
          </div>

          {/* Location */}
          <div className="animate-on-scroll delay-300 mt-12 flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
            <div className="rounded-2xl bg-olive/10 p-4 text-olive">
              <MapPin size={28} />
            </div>
            <div>
              <p className="text-sm text-white/50">Location</p>
              <h3 className="mt-1 text-xl font-bold text-white">
                Cebu, Philippines
              </h3>
            </div>
          </div>

          {/* Contact Form + CTA */}
          <div className="mt-20 grid gap-10 lg:grid-cols-2">
            {/* Form */}
            <div className="animate-on-scroll delay-200 rounded-[36px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl">
              <h3 className="text-3xl font-black text-white">Send a Message</h3>
              <p className="mt-4 text-white/60">
                Have an opportunity or project in mind? I'd love to hear from you.
              </p>
              <form className="mt-10 space-y-6">
                <div>
                  <label className="mb-2 block text-sm text-white/60">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition focus:border-olive"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-white/60">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@email.com"
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition focus:border-olive"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-white/60">Subject</label>
                  <input
                    type="text"
                    placeholder="Project Inquiry"
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition focus:border-olive"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-white/60">Message</label>
                  <textarea
                    rows={6}
                    placeholder="Tell me about your project..."
                    className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition focus:border-olive"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-2xl bg-olive py-4 text-lg font-semibold text-black transition hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right side */}
            <div className="space-y-8">
              {/* Availability */}
              <div className="animate-on-scroll delay-300 rounded-[36px] border border-white/10 bg-gradient-to-br from-olive/10 to-transparent p-10">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />
                  </span>
                  <p className="font-semibold text-white">Available for Opportunities</p>
                </div>
                <h3 className="mt-8 text-4xl font-black text-white">
                  Let's create something amazing.
                </h3>
                <p className="mt-6 leading-8 text-white/60">
                  I'm currently open to full-time positions, freelance work,
                  software engineering projects, DevOps consulting,
                  blockchain development, and infrastructure management.
                </p>
              </div>

              {/* Services */}
              <div className="animate-on-scroll delay-400 rounded-[36px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl">
                <h3 className="text-2xl font-bold text-white">Services</h3>
                <div className="mt-8 space-y-4">
                  {[
                    "✔ Full Stack Web Development",
                    "✔ Backend API Development",
                    "✔ DevOps & Server Deployment",
                    "✔ Docker & Linux Administration",
                    "✔ Blockchain Infrastructure",
                    "✔ Cloud & Networking",
                  ].map((service) => (
                    <div
                      key={service}
                      className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white/80"
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="animate-on-scroll delay-500 mt-24 rounded-[40px] border border-olive/20 bg-gradient-to-r from-olive/10 via-transparent to-olive/10 px-10 py-16 text-center">
            <h2 className="text-5xl font-black text-white">
              Ready to start your next project?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
              Whether it's a modern web application, blockchain platform,
              backend system, or infrastructure deployment,
              I'm ready to help bring your ideas to life.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-5">
              <a
                href="mailto:kenlemsombreo.liloan@gmail.com"
                className="rounded-xl bg-olive px-8 py-4 font-semibold text-black transition hover:scale-105"
              >
                Email Me
              </a>
              <a
                href="https://github.com/KenSombreo"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-white/[0.03] px-8 py-4 font-semibold text-white transition hover:border-olive hover:text-olive"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}