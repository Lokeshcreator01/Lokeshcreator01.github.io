import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-border/50 bg-background/90 backdrop-blur-xl shadow-[0_4px_30px_hsl(var(--background)/0.5)]" : "bg-transparent"}`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <a href="#" className="text-lg font-bold tracking-tight text-foreground group">
          <span className="text-gradient">Lokesh</span>{" "}
          <span className="transition-colors group-hover:text-primary">G.</span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative rounded-md px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-primary after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-0 after:-translate-x-1/2 after:bg-primary after:transition-all after:duration-300 hover:after:w-2/3"
            >
              {l.label}
            </a>
          ))}
          <Button variant="hero" size="sm" className="ml-4" asChild>
            <a href="#contact">Hire Me</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="text-foreground md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border/30 bg-background/95 backdrop-blur-xl md:hidden animate-fade-in">
          <div className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-primary/5 hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <Button variant="hero" size="sm" className="mt-2" asChild>
              <a href="#contact" onClick={() => setOpen(false)}>Hire Me</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
