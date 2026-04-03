import { Code2, Palette, Globe, Lock, Smartphone, Database, Layers, Terminal, Cpu } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const skills = [
  { name: "Flutter", icon: Smartphone, level: 90 },
  { name: "Dart", icon: Code2, level: 85 },
  { name: "UI/UX Design", icon: Palette, level: 80 },
  { name: "REST APIs", icon: Globe, level: 85 },
  { name: "OAuth 2.0", icon: Lock, level: 75 },
  { name: "Cross-Platform", icon: Layers, level: 88 },
  { name: "Secure Data", icon: Database, level: 70 },
  { name: "Git & CLI", icon: Terminal, level: 80 },
  { name: "Problem Solving", icon: Cpu, level: 85 },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="scroll-mt-20 py-20 md:py-28 relative overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px]" />

      <div ref={ref} className="container mx-auto px-4 md:px-8">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-primary">Skills</h2>
          <h3 className="mb-12 text-center text-3xl font-bold text-foreground sm:text-4xl">
            My <span className="text-gradient">Tech Stack</span>
          </h3>
        </div>

        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <div
              key={s.name}
              className={`group relative flex items-center gap-4 rounded-xl border border-border/40 bg-card/50 backdrop-blur-sm p-4 transition-all duration-500 hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${200 + i * 80}ms` }}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)]">
                <s.icon size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium text-foreground">{s.name}</span>
                  <span className="text-xs text-muted-foreground font-mono">{s.level}%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-secondary/80 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                    style={{ width: isVisible ? `${s.level}%` : "0%" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
