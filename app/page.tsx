import BootScreen from "@/components/BootScreen";
import ChainBackground from "@/components/ChainBackground";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ChainLink } from "@/components/Block";

export default function Home() {
  return (
    <main className="min-h-screen">
      <BootScreen />
      <ChainBackground />
      <Header />
      <Hero />
      <ChainLink />
      <About />
      <ChainLink />
      <Projects />
      <ChainLink />
      <Contact />
      <Footer />
    </main>
  );
}
