import { Card } from "@/components/ui/card";
import { Database, Server, Code, Cloud, Cpu, Layers, GitBranch, Lock, Zap, Box } from "lucide-react";
import { useState } from "react";

const skills = [
  {
    category: "Backend Core",
    icon: Server,
    color: "from-blue-500 to-cyan-500",
    items: ["Java", "Python", "Spring Boot", "Flask", "FastAPI"],
    description: "Building robust server-side logic"
  },
  {
    category: "Databases",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    items: ["MySQL", "Firebase Firestore", "Supabase", "SQL & NoSQL"],
    description: "Data persistence & modeling"
  },
  {
    category: "APIs & Integration",
    icon: Layers,
    color: "from-purple-500 to-pink-500",
    items: ["REST APIs", "Microservices", "Kafka (basic)", "API Design"],
    description: "System communication layer"
  },
  {
    category: "Frontend",
    icon: Code,
    color: "from-orange-500 to-red-500",
    items: ["React.js", "Flutter", "Responsive Design"],
    description: "Building user interfaces"
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    color: "from-cyan-500 to-blue-500",
    items: ["AWS (basic)", "Firebase", "Render", "Vercel"],
    description: "Deployment & infrastructure"
  },
  {
    category: "AI/ML Integration",
    icon: Cpu,
    color: "from-violet-500 to-purple-500",
    items: ["ML Inference APIs", "Recommendation Systems", "AI-driven Features"],
    description: "Intelligent system design"
  },
  {
    category: "Architecture",
    icon: Box,
    color: "from-indigo-500 to-blue-500",
    items: ["System Design", "TDD", "Clean Architecture", "Scalability"],
    description: "Building for growth"
  },
  {
    category: "Version Control",
    icon: GitBranch,
    color: "from-pink-500 to-rose-500",
    items: ["Git", "GitHub", "Code Review", "CI/CD Basics"],
    description: "Collaboration & deployment"
  }
];

export const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-4 font-mono text-sm">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-primary">Tech Stack</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            System Components
          </h2>
          <p className="text-muted-foreground text-lg font-mono max-w-2xl mx-auto">
            <span className="text-primary">//</span> Technologies I use to build production systems
          </p>
        </div>

        {/* Architecture Diagram Hint */}
        <div className="flex items-center justify-center gap-4 mb-12 text-muted-foreground/50 font-mono text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500/30" />
            <span>Backend Layer</span>
          </div>
          <div className="h-px w-8 bg-muted-foreground/20" />
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500/30" />
            <span>Data Layer</span>
          </div>
          <div className="h-px w-8 bg-muted-foreground/20" />
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500/30" />
            <span>Integration Layer</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <Card 
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative p-6 border-2 border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Animated gradient background on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${skill.color}`} />
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  {/* Icon and Title */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} transform group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center gap-1 font-mono text-xs text-muted-foreground">
                      <div className={`w-2 h-2 rounded-full ${isHovered ? 'bg-green-500' : 'bg-muted-foreground/30'} transition-colors`} />
                      <span>{isHovered ? 'active' : 'ready'}</span>
                    </div>
                  </div>

                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors font-mono">
                    {skill.category}
                  </h3>
                  
                  <p className="text-xs text-muted-foreground mb-4 font-mono">
                    <span className="text-primary">//</span> {skill.description}
                  </p>

                  {/* Skills Grid */}
                  <div className="space-y-2">
                    {skill.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm group/item"
                      >
                        <div className="w-1 h-1 rounded-full bg-primary group-hover/item:bg-green-500 transition-colors" />
                        <span className="text-muted-foreground group-hover/item:text-foreground transition-colors font-mono text-xs">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Loading bar animation */}
                  <div className="mt-4 h-1 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} transform origin-left transition-transform duration-500 ${
                        isHovered ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* System Status Footer */}
        <div className="mt-16 p-6 rounded-xl border-2 border-border bg-card/50 backdrop-blur-sm animate-fade-in" style={{ animationDelay: "600ms" }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-primary/10">
                <Lock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold font-mono text-sm">Core Strengths</p>
                <p className="text-xs text-muted-foreground font-mono">Fast learner • Problem solver • System thinker</p>
              </div>
            </div>
            <div className="flex gap-3 text-xs font-mono">
              <div className="px-4 py-2 rounded-full bg-green-500/10 text-green-500 border border-green-500/30">
                ✓ Backend Focus
              </div>
              <div className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/30">
                ✓ Full-Stack Ready
              </div>
              <div className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-500 border border-purple-500/30">
                ✓ AI Integration
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};