"use client";

import { useEffect, useRef, useState } from "react";
import { fakeHash } from "./Block";

// Cut-out portrait standing in front of a pixel "genesis block".
// The whole scene tilts toward the cursor; layers sit at different
// depths (translateZ) so the subject and floating blocks parallax.
export default function Portrait3D() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    setEnabled(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const onMove = (e: React.MouseEvent) => {
    if (!enabled || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: -py * 14, y: px * 18 });
  };

  const depth = (z: number) => ({ transform: `translateZ(${z}px)` });

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="relative mx-auto h-[400px] w-full max-w-[300px] sm:h-[480px] sm:max-w-[360px] lg:h-[540px] lg:max-w-[400px]"
      style={{ perspective: "1100px" }}
    >
      <div
        className="relative h-full w-full transition-transform duration-200 ease-out"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        {/* Back plate: the block */}
        <div className="px-card absolute inset-x-0 bottom-0 top-[22%] overflow-hidden" style={depth(0)}>
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(rgb(var(--c-line) / .5) 2px, transparent 2px), linear-gradient(90deg, rgb(var(--c-line) / .5) 2px, transparent 2px)",
              backgroundSize: "24px 24px",
            }}
          />
          {/* Spotlight so the subject separates from the dark plate */}
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(circle at 50% 35%, rgb(var(--c-fg) / .16), transparent 65%)" }}
          />
        </div>

        {/* Subject: pops out above the block */}
        <div className="pointer-events-none absolute inset-x-0 bottom-[40px] top-0 flex justify-center" style={depth(50)}>
          <img
            src="/picture-cutout.webp"
            alt="Ken Sombreo"
            className="h-full w-auto object-contain object-bottom"
            style={{ filter: "drop-shadow(10px 10px 0 rgb(0 0 0 / .55))" }}
          />
        </div>

        {/* Front ledge with the block hash, sits in front of the subject */}
        <div
          className="absolute inset-x-0 bottom-0 border-4 border-line bg-panel px-3 py-1.5 font-term text-lg text-muted"
          style={depth(80)}
        >
          hash <span className="text-accent">{fakeHash("ken-sombreo", 16)}</span>
        </div>

        {/* Floating labels / blocks at different depths */}
        <div className="absolute -left-3 top-[24%] sm:-left-6" style={depth(110)}>
          <span className="bob block bg-accent px-2 py-1 font-pixel text-[9px] leading-4 text-on-accent">
            BLOCK #0000
          </span>
        </div>
        <div className="absolute -right-2 top-[44%] sm:-right-5" style={depth(130)}>
          <span className="bob block border-2 border-line bg-panel px-2 py-1 font-term text-lg leading-5 text-fg" style={{ animationDelay: "0.6s" }}>
            ● GENESIS
          </span>
        </div>
        <div className="absolute left-[8%] top-[8%]" style={depth(160)}>
          <span className="bob block h-4 w-4 bg-accent2" style={{ animationDelay: "0.3s" }} />
        </div>
        <div className="absolute right-[10%] top-[14%]" style={depth(90)}>
          <span className="bob block h-3 w-3 bg-accent" style={{ animationDelay: "1s" }} />
        </div>
        <div className="absolute -left-4 bottom-[20%]" style={depth(140)}>
          <span className="bob block h-5 w-5 border-4 border-accent2" style={{ animationDelay: "1.4s" }} />
        </div>
      </div>
    </div>
  );
}
