// Shared blockchain-flavoured bits: section headers styled as blocks,
// and the animated chain link that joins one section to the next.

// Deterministic fake hash so server and client render the same string.
export function fakeHash(seed: string, length = 10) {
  let h = 2166136261;
  let out = "";
  for (let i = 0; out.length < length; i++) {
    h ^= seed.charCodeAt(i % seed.length) + i;
    h = Math.imul(h, 16777619) >>> 0;
    out += h.toString(16).padStart(8, "0");
  }
  return "0x" + out.slice(0, length);
}

export function BlockHeader({
  height,
  label,
  children,
}: {
  height: number;
  label: string;
  children: React.ReactNode;
}) {
  const num = String(height).padStart(4, "0");
  return (
    <div className="reveal">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-term text-lg text-muted">
        <span className="bg-brand px-2 py-0.5 font-pixel text-[10px] leading-5 text-on-accent">
          BLOCK #{num}
        </span>
        <span>{label}</span>
      </div>
      <h2 className="mt-6 font-pixel text-xl leading-relaxed text-fg sm:text-3xl sm:leading-relaxed">
        {children}
      </h2>
    </div>
  );
}

export function ChainLink() {
  return (
    <div aria-hidden className="relative mx-auto flex h-14 w-6 justify-center" style={{ ["--chain-h" as string]: "56px" }}>
      <div className="h-full w-0 border-l-4 border-dotted border-line" />
      <span className="packet absolute top-0 h-3 w-3 bg-accent" />
    </div>
  );
}
