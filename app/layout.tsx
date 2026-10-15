import type { Metadata } from "next";
import "./globals.css";
import { Press_Start_2P, VT323, JetBrains_Mono } from "next/font/google";

const pixel = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
});

const term = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-term",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Ken Lemuel — Software Engineer",
  description: "Portfolio of Ken Lemuel.",
};

// Runs before paint: applies the saved theme (night by default) and skips
// the boot screen if it already played this session, so neither flashes.
const initScript = `(function(){try{var d=document.documentElement;d.dataset.theme=localStorage.getItem('theme')==='light'?'light':'dark';if(sessionStorage.getItem('booted'))d.dataset.booted='1';}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: initScript }} />
      </head>
      <body
        className={`${pixel.variable} ${term.variable} ${mono.variable} font-mono antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
