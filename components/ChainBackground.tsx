"use client";

import { useEffect, useRef } from "react";

// Animated background: pixel "blocks" drift around, nearby ones link up,
// and small transaction packets hop along the links.
type Node = { x: number; y: number; vx: number; vy: number; size: number };
type Packet = { a: number; b: number; t: number; speed: number };

const LINK_DIST = 170;
const PX = 2; // snap everything to a 2px grid for a crunchy look

function readColor(name: string) {
  const v = getComputedStyle(document.documentElement).getPropertyValue(`--c-${name}`).trim();
  return `rgb(${v.split(/\s+/).join(",")}`;
}

export default function ChainBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let colors = { line: "", accent: "", accent2: "" };
    const loadColors = () => {
      colors = { line: readColor("line"), accent: readColor("accent"), accent2: readColor("accent2") };
    };
    loadColors();
    const themeObserver = new MutationObserver(loadColors);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    let w = 0;
    let h = 0;
    let nodes: Node[] = [];
    let packets: Packet[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingEnabled = false;

      const count = Math.min(46, Math.floor((w * h) / 26000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        size: 6 + Math.floor(Math.random() * 3) * 2,
      }));
      packets = [];
    };
    resize();
    window.addEventListener("resize", resize);

    const snap = (n: number) => Math.round(n / PX) * PX;
    let frame = 0;
    let raf = 0;

    const draw = () => {
      frame++;
      ctx.clearRect(0, 0, w, h);

      if (!reduceMotion) {
        for (const n of nodes) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;
        }
      }

      // Links (dotted pixel lines)
      const links: [number, number][] = [];
      ctx.fillStyle = colors.line;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist > LINK_DIST) continue;
          links.push([i, j]);
          ctx.globalAlpha = 0.55 * (1 - dist / LINK_DIST);
          const steps = Math.floor(dist / 6);
          for (let s = 0; s <= steps; s++) {
            const t = s / steps;
            ctx.fillRect(snap(a.x + (b.x - a.x) * t), snap(a.y + (b.y - a.y) * t), PX, PX);
          }
        }
      }

      // Blocks
      ctx.globalAlpha = 0.7;
      for (const n of nodes) {
        const x = snap(n.x - n.size / 2);
        const y = snap(n.y - n.size / 2);
        ctx.fillStyle = colors.line;
        ctx.fillRect(x, y, n.size, n.size);
        ctx.fillStyle = colors.accent2;
        ctx.fillRect(x + 2, y + 2, 2, 2);
      }

      // Spawn + move transaction packets
      if (!reduceMotion && links.length && frame % 24 === 0 && packets.length < 14) {
        const [a, b] = links[Math.floor(Math.random() * links.length)];
        packets.push({ a, b, t: 0, speed: 0.012 + Math.random() * 0.015 });
      }
      ctx.globalAlpha = 1;
      ctx.fillStyle = colors.accent;
      packets = packets.filter((p) => {
        p.t += p.speed;
        const a = nodes[p.a];
        const b = nodes[p.b];
        if (!a || !b || p.t >= 1) return false;
        ctx.fillRect(snap(a.x + (b.x - a.x) * p.t) - 2, snap(a.y + (b.y - a.y) * p.t) - 2, 4, 4);
        return true;
      });

      if (!reduceMotion) raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-60"
    />
  );
}
