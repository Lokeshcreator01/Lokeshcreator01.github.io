import { ExternalLink, Cloud, Sparkles, Video, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    title: "MoonDrive",
    icon: Cloud,
    desc: "Cloud file management app connecting Google Drive, OneDrive & Dropbox via secure OAuth 2.0 authentication.",
    tags: ["Flutter", "Dart", "OAuth 2.0", "REST APIs", "Cloud Storage"],
    gradient: "from-blue-600/20 via-cyan-500/10 to-transparent",
    iconBg: "from-blue-500 to-cyan-400",
  },
  {
    title: "SkillPath AI",
    icon: Sparkles,
    desc: "Core branding design and dynamic, fluid splash screen animations for an AI-powered mobile learning platform.",
    tags: ["Flutter", "Animation", "UI/UX", "Branding"],
    gradient: "from-purple-600/20 via-pink-500/10 to-transparent",
    iconBg: "from-purple-500 to-pink-400",
  },
  {
    title: "ECHO SENSE",
    icon: Video,
    desc: "Smart video recorder with live emotion capture & real-time facial analysis, built for Anna University.",
    tags: ["Flutter", "Computer Vision", "AI/ML", "University"],
    gradient: "from-amber-600/20 via-orange-500/10 to-transparent",
    iconBg: "from-amber-500 to-orange-400",
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="scroll-mt-20 py-20 md:py-28 relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div ref={ref} className="container mx-auto px-4 md:px-8">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-primary">Projects</h2>
          <h3 className="mb-12 text-center text-3xl font-bold text-foreground sm:text-4xl">
            Featured <span className="text-gradient">Work</span>
          </h3>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`group relative flex flex-col rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-primary/40 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.15)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              {/* Gradient header area */}
              <div className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${p.gradient}`}>
                {/* Animated rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-24 w-24 rounded-full border border-primary/10 transition-transform duration-700 group-hover:scale-150 group-hover:opacity-0" />
                  <div className="absolute h-32 w-32 rounded-full border border-primary/5 transition-transform duration-700 group-hover:scale-150 group-hover:opacity-0 [transition-delay:100ms]" />
                </div>
                <div className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${p.iconBg} text-background shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl`}>
                  <p.icon size={28} />
                </div>
                {/* Corner decoration */}
                <div className="absolute top-3 right-3 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight size={18} className="text-primary" />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h4 className="mb-2 text-lg font-bold text-foreground group-hover:text-gradient transition-all duration-300">{p.title}</h4>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-xs font-medium text-primary transition-colors group-hover:bg-primary/10">
                      {t}
                    </span>
                  ))}
                </div>
                <Button variant="heroOutline" size="sm" className="w-full group/btn">
                  View Project <ExternalLink size={14} className="transition-transform group-hover/btn:translate-x-0.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
