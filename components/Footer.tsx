import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t-4 border-line bg-panel/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-4 py-8 sm:flex-row sm:px-6">
        <p className="font-term text-lg text-muted">
          <span className="font-pixel text-[10px] text-fg">
            KEN<span className="text-accent">.</span>
          </span>{" "}
          © {new Date().getFullYear()} · built block by block
        </p>
        <a href="#home" className="px-btn px-btn-ghost group">
          Top
          <ArrowUp size={14} className="transition-transform group-hover:-translate-y-1" />
        </a>
      </div>
    </footer>
  );
}
