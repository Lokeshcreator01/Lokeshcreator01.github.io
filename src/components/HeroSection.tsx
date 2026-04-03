import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, ChevronDown } from "lucide-react";
import ParticleField from "./ParticleField";
import { useEffect, useState } from "react";

const roles = ["Flutter Developer", "Mobile App Architect", "UI/UX Enthusiast", "Cross-Platform Expert"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (displayed.length < currentRole.length) {
        timeout = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-16">
      <ParticleField />

      {/* Gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[100px] animate-pulse_glow" />
        <div className="absolute -bottom-32 -right-32 h-[600px] w-[600px] rounded-full bg-accent/8 blur-[120px] animate-pulse_glow [animation-delay:2s]" />
        <div className="absolute left-1/2 top-1/3 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-primary/5 blur-[80px] animate-float" />
      </div>

      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.4) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Status badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 opacity-0 animate-fade-up">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="font-mono text-xs tracking-wider text-primary">AVAILABLE FOR WORK</span>
        </div>

        <h1 className="mb-3 text-5xl font-extrabold leading-tight tracking-tight text-foreground opacity-0 animate-fade-up [animation-delay:0.15s] sm:text-6xl lg:text-7xl">
          Hi, I'm <span className="text-gradient">Lokesh G.</span>
        </h1>

        {/* Typing effect */}
        <div className="mb-6 h-8 opacity-0 animate-fade-up [animation-delay:0.3s]">
          <span className="font-mono text-lg text-primary sm:text-xl">
            {displayed}
            <span className="animate-pulse text-primary">|</span>
          </span>
        </div>

        <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-muted-foreground opacity-0 animate-fade-up [animation-delay:0.4s] sm:text-lg">
          B.Tech Information Technology Graduate — crafting pixel-perfect,
          high-performance mobile experiences with Flutter &amp; Dart.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 opacity-0 animate-fade-up [animation-delay:0.55s] sm:flex-row">
          <Button variant="hero" size="lg" className="group relative overflow-hidden" asChild>
            <a href="#projects">
              <span className="relative z-10 flex items-center gap-2">
                View My Work <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
              </span>
              <span className="absolute inset-0 -z-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] opacity-0 transition-opacity duration-500 group-hover:opacity-100 animate-shimmer" />
            </a>
          </Button>
          <Button variant="heroOutline" size="lg" className="group" asChild>
            <a href="#contact">
              <Mail size={16} className="transition-transform group-hover:-rotate-12" /> Contact Me
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up [animation-delay:1s]">
        <a href="#about" className="flex flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-primary">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={18} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
