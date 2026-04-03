import { Github, Linkedin, Heart } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/30 bg-card/30 backdrop-blur-sm py-8">
    <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-8">
      <p className="text-sm text-muted-foreground flex items-center gap-1.5">
        Built with <Heart size={14} className="text-red-400 animate-pulse" /> by{" "}
        <span className="text-gradient font-semibold">Lokesh G.</span>
      </p>
      <div className="flex items-center gap-3">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/40 text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary hover:shadow-[0_0_15px_hsl(var(--primary)/0.15)] hover:-translate-y-0.5"
        >
          <Github size={18} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/40 text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary hover:shadow-[0_0_15px_hsl(var(--primary)/0.15)] hover:-translate-y-0.5"
        >
          <Linkedin size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
