import { Card } from "@/components/ui/card";
import { GraduationCap, Target, Lightbulb, Rocket, Zap, Code2, Database, Layers } from "lucide-react";

export const About = () => {
  const coreValues = [
    { label: "Ownership", value: 95 },
    { label: "Speed", value: 90 },
    { label: "Learning", value: 98 },
    { label: "Impact", value: 88 }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-secondary/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.05),transparent_50%)]" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-4 font-mono text-sm">
            <Code2 className="w-4 h-4 text-primary" />
            <span className="text-primary">About</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            ./whoami
          </h2>
          <p className="text-muted-foreground text-lg font-mono max-w-2xl mx-auto">
            Backend engineer who thinks in systems, not just code
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Main Profile Card */}
          <Card className="lg:col-span-2 p-8 border-2 border-border bg-card hover:border-primary/30 transition-all animate-fade-in">
            <div className="space-y-6">
              {/* Education */}
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 mt-1 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 font-mono">Background</h3>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    <span className="text-foreground font-semibold">MCA graduate</span> from PES University, Bengaluru. Backend-focused software engineer passionate about building systems that are <span className="text-primary font-medium">fast, reliable, and intelligently designed</span>.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    I thrive in <span className="text-foreground font-medium">startup-style environments</span> where speed, ownership, and learning matter more than titles.
                  </p>
                </div>
              </div>

              <div className="h-px bg-border" />

              {/* What I'm Looking For */}
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 mt-1 group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 font-mono">Currently Seeking</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    <span className="text-foreground font-semibold">Backend Engineer</span> or <span className="text-foreground font-semibold">Full Stack Developer</span> roles where I can:
                  </p>
                  <div className="space-y-2">
                    {[
                      "Build production-grade backend systems & scalable APIs",
                      "Learn system design & distributed systems principles",
                      "Contribute to AI-driven or high-performance teams",
                      "Grow alongside strong engineers who push boundaries"
                    ].map((goal, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Zap className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{goal}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="h-px bg-border" />

              {/* Philosophy */}
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 mt-1 group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 font-mono">Philosophy</h3>
                  <blockquote className="border-l-4 border-primary pl-4 py-2 bg-primary/5 rounded-r-lg">
                    <p className="text-foreground leading-relaxed italic font-medium">
                      "I might not know everything today — but give me time and context, and I'll learn anything."
                    </p>
                  </blockquote>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    I'm a <span className="text-foreground font-medium">relentless learner</span> who approaches every challenge with curiosity, grit, and the belief that complex problems are just puzzles waiting to be solved.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Side Stats Card */}
          <div className="space-y-6">
            {/* Core Values */}
            <Card className="p-6 border-2 border-border bg-card hover:border-primary/30 transition-all animate-fade-in" style={{ animationDelay: "200ms" }}>
              <h3 className="text-lg font-bold mb-4 font-mono flex items-center gap-2">
                <Rocket className="w-5 h-5 text-primary" />
                Core Values
              </h3>
              <div className="space-y-4">
                {coreValues.map((value, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-mono text-muted-foreground">{value.label}</span>
                      <span className="text-xs font-mono text-primary">{value.value}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${value.value}%`,
                          animationDelay: `${i * 200}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Tech Focus */}
            <Card className="p-6 border-2 border-border bg-card hover:border-primary/30 transition-all animate-fade-in" style={{ animationDelay: "400ms" }}>
              <h3 className="text-lg font-bold mb-4 font-mono flex items-center gap-2">
                <Layers className="w-5 h-5 text-primary" />
                Focus Areas
              </h3>
              <div className="space-y-3">
                {[
                  { icon: Database, label: "Backend Systems", color: "text-blue-500" },
                  { icon: Layers, label: "API Design", color: "text-green-500" },
                  { icon: Zap, label: "Performance", color: "text-yellow-500" },
                  { icon: Code2, label: "Clean Code", color: "text-purple-500" }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors group/item">
                      <Icon className={`w-5 h-5 ${item.color} group-hover/item:scale-110 transition-transform`} />
                      <span className="text-sm font-mono">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="p-6 border-2 border-border bg-gradient-to-br from-card to-secondary/50 hover:border-primary/30 transition-all animate-fade-in" style={{ animationDelay: "600ms" }}>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-primary font-mono">3+</p>
                  <p className="text-xs text-muted-foreground font-mono mt-1">Projects</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary font-mono">10+</p>
                  <p className="text-xs text-muted-foreground font-mono mt-1">Technologies</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary font-mono">1</p>
                  <p className="text-xs text-muted-foreground font-mono mt-1">Internship</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary font-mono">∞</p>
                  <p className="text-xs text-muted-foreground font-mono mt-1">Curiosity</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom highlight */}
        <div className="p-6 rounded-xl border-2 border-primary/30 bg-primary/5 backdrop-blur-sm animate-fade-in" style={{ animationDelay: "800ms" }}>
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-primary/20">
              <Rocket className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-foreground mb-1">Ready to Build & Learn</p>
              <p className="text-sm text-muted-foreground font-mono">
                Looking for teams that value curiosity, speed, and building things that matter. Let's create something amazing together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};