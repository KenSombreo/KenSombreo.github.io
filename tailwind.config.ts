import type { Config } from "tailwindcss";

// Theme colors are CSS variables (see app/globals.css) so night/day mode
// can swap the whole palette by flipping <html data-theme>.
const v = (name: string) => `rgb(var(--c-${name}) / <alpha-value>)`;

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: v("bg"),
        panel: v("panel"),
        line: v("line"),
        fg: v("fg"),
        muted: v("muted"),
        accent: v("accent"),
        accent2: v("accent2"),
        accent3: v("accent3"),
        "on-accent": v("on-accent"),
      },

      fontFamily: {
        pixel: ["var(--font-pixel)", "monospace"],
        term: ["var(--font-term)", "monospace"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        sans: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
