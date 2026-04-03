import { Smartphone, Shield, Zap, Code2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const highlights = [
  { icon: Smartphone, title: "Cross-Platform", desc: "Beautiful apps for iOS & Android from a single codebase.", color: "from-blue-500/20 to-cyan-500/20" },
  { icon: Zap, title: "High-Performance", desc: "Optimized 60fps experiences that users love.", color: "from-amber-500/20 to-orange-500/20" },
  { icon: Shield, title: "Secure Architecture", desc: "Cyber security foundations & secure data handling.", color: "from-emerald-500/20 to-green-500/20" },
  { icon: Code2, title: "Clean Code", desc: "Modular, maintainable code with best practices.", color: "from-purple-500/20 to-pink-500/20" },
];

const stats = [
  { value: "3+", label: "Projects Built" },
  { value: "5+", label: "Technologies" },
  { value: "2024", label: "B.Tech Graduate" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="scroll-mt-20 py-20 md:py-28 relative overflow-hidden">
      {/* Decorative bg */}
      <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />

      <div ref={ref} className="container mx-auto px-4 md:px-8">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-primary">About Me</h2>
          <h3 className="mb-6 text-center text-3xl font-bold text-foreground sm:text-4xl">
            Crafting Mobile <span className="text-gradient">Experiences</span>
          </h3>
          <p className="mx-auto mb-12 max-w-2xl text-center leading-relaxed text-muted-foreground">
            I'm a passionate Flutter developer dedicated to building high-performance, cross-platform mobile applications.
            With a B.Tech in Information Technology and a strong foundational interest in Cyber Security, I architect apps
            that are not only beautiful and fluid but also secure by design.
          </p>
        </div>

        {/* Stats row */}
        <div className={`mx-auto mb-12 flex max-w-md justify-center gap-8 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-extrabold text-gradient">{s.value}</div>
              <div className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className={`group relative rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm p-6 text-center transition-all duration-500 hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              {/* Gradient bg on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${h.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
              <div className="relative z-10">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]">
                  <h.icon size={24} />
                </div>
                <h4 className="mb-2 font-semibold text-foreground">{h.title}</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
