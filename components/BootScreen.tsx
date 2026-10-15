"use client";

import { useEffect, useState } from "react";

// "Mining genesis block" intro. Visibility/timing is pure CSS (.boot in
// globals.css); JS only scrambles the nonce and marks the session as booted.
export default function BootScreen() {
  const [nonce, setNonce] = useState("00000000");

  useEffect(() => {
    try {
      sessionStorage.setItem("booted", "1");
    } catch {}
    const id = setInterval(() => {
      setNonce(Math.floor(Math.random() * 0xffffffff).toString(16).padStart(8, "0"));
    }, 60);
    const stop = setTimeout(() => clearInterval(id), 1500);
    return () => {
      clearInterval(id);
      clearTimeout(stop);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="boot fixed inset-0 z-[100] flex items-center justify-center bg-bg px-6"
    >
      <div className="w-full max-w-sm">
        <p className="font-pixel text-[10px] leading-5 text-accent">
          &gt; MINING GENESIS BLOCK<span className="cursor-block" />
        </p>
        <div className="mt-5 h-5 border-4 border-line p-0.5">
          <div className="boot-bar h-full bg-brand" />
        </div>
        <p className="mt-4 font-term text-xl text-muted">nonce: 0x{nonce}</p>
      </div>
    </div>
  );
}
