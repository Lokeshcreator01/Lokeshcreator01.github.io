import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, MapPin, ArrowUpRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { ref, isVisible } = useScrollReveal();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="scroll-mt-20 py-20 md:py-28 relative overflow-hidden">
      <div className="pointer-events-none absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px]" />

      <div ref={ref} className="container mx-auto px-4 md:px-8">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-primary">Contact</h2>
          <h3 className="mb-4 text-center text-3xl font-bold text-foreground sm:text-4xl">
            Let's <span className="text-gradient">Connect</span>
          </h3>
          <p className="mx-auto mb-10 max-w-md text-center text-muted-foreground">
            Have a project in mind? Let's build something amazing together.
          </p>
        </div>

        <div className={`mx-auto max-w-2xl grid gap-8 md:grid-cols-[1fr_1.5fr] transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Contact info */}
          <div className="flex flex-col gap-4">
            <a
              href="mailto:aglokihelpline@gmail.com"
              className="group flex items-center gap-3 rounded-xl border border-border/40 bg-card/50 backdrop-blur-sm p-4 transition-all duration-300 hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-[0_0_20px_hsl(var(--primary)/0.1)]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Mail size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="text-sm font-medium text-foreground truncate">aglokihelpline@gmail.com</div>
              </div>
              <ArrowUpRight size={14} className="text-muted-foreground transition-colors group-hover:text-primary" />
            </a>

            <div className="flex items-center gap-3 rounded-xl border border-border/40 bg-card/50 backdrop-blur-sm p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MapPin size={18} />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Location</div>
                <div className="text-sm font-medium text-foreground">India</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="bg-card/50 backdrop-blur-sm border-border/40 focus:border-primary/50 transition-all duration-300 focus:shadow-[0_0_15px_hsl(var(--primary)/0.1)]"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="bg-card/50 backdrop-blur-sm border-border/40 focus:border-primary/50 transition-all duration-300 focus:shadow-[0_0_15px_hsl(var(--primary)/0.1)]"
            />
            <Textarea
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="resize-none bg-card/50 backdrop-blur-sm border-border/40 focus:border-primary/50 transition-all duration-300 focus:shadow-[0_0_15px_hsl(var(--primary)/0.1)]"
            />
            <Button variant="hero" size="lg" type="submit" className="group">
              <Send size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /> Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
