import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Database, Server, Smartphone, Brain, Shield, Leaf, CheckCircle2, Code2, Terminal } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: "mindsync",
    title: "MindSync",
    tagline: "ADHD Wellness Assistant",
    emoji: "🧠",
    description: "Full-stack ML-powered Android app for ADHD subtype prediction and adaptive focus tracking.",
    tech: ["Flutter", "Firebase", "Flask", "ML", "REST API"],
    highlights: [
      "Engineered Flask API for real-time ML model inference",
      "Implemented Firebase NoSQL for live data synchronization",
      "Built responsive Flutter dashboard with mood analytics"
    ],
    architecture: ["Mobile Client", "Flask Backend", "ML Pipeline", "Firebase RT-DB"],
    icon: Brain,
    gradient: "from-purple-500 to-pink-500",
    status: "Production",
    github: "#",
    demo: "#"
  },
  {
    id: "grovo",
    title: "Grovo",
    tagline: "Agriculture & Labor Platform",
    emoji: "🌾",
    description: "Full-stack mobile marketplace connecting farmers, vendors, and laborers with secure payments.",
    tech: ["Flutter", "Firebase Auth", "Firestore", "Razorpay"],
    highlights: [
      "Developed Flutter frontend with multi-role authentication",
      "Integrated Razorpay payment gateway for secure transactions",
      "Designed CRUD workflows for verified listings"
    ],
    architecture: ["Mobile Client", "Firebase Auth", "Firestore", "Payment API"],
    icon: Leaf,
    gradient: "from-green-500 to-emerald-500",
    status: "Production",
    github: "#",
    demo: "#"
  },
  {
    id: "trustguardai",
    title: "TrustGuardAI",
    tagline: "Ethical AI Ad Engine",
    emoji: "🛡️",
    description: "Hackathon project filtering emotionally manipulative advertisements using AI-powered detection.",
    tech: ["FastAPI", "React.js", "Supabase", "ML Agents"],
    highlights: [
      "Built decoupled FastAPI backend and React frontend",
      "Created EmpathyEngine & TrustFlow+ AI agents",
      "Deployed on Render (backend) and Vercel (frontend)"
    ],
    architecture: ["React Client", "FastAPI Server", "AI Agents", "Supabase DB"],
    icon: Shield,
    gradient: "from-blue-500 to-cyan-500",
    status: "Demo",
    github: "#",
    demo: "#"
  }
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-4 font-mono text-sm">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-primary">Projects</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Production Systems
          </h2>
          <p className="text-muted-foreground text-lg font-mono max-w-2xl mx-auto">
            <span className="text-primary">GET /api/v1/projects</span> — Full-stack applications I've built
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isSelected = selectedProject === project.id;
            
            return (
              <Card 
                key={project.id}
                onMouseEnter={() => setSelectedProject(project.id)}
                onMouseLeave={() => setSelectedProject(null)}
                className="group relative p-6 border-2 border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${project.gradient}`} />
                
                {/* Top Bar - Like Code Editor */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-secondary/50 border-b border-border flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground ml-2">
                    {project.id}.tsx
                  </span>
                </div>

                <div className="relative z-10 mt-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-green-500 animate-pulse' : 'bg-muted-foreground/30'}`} />
                      <span className="text-[10px] font-mono text-muted-foreground">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="mb-3">
                    <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors flex items-center gap-2">
                      <span className="text-xl">{project.emoji}</span>
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-mono">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Architecture Flow */}
                  <div className="mb-4 p-3 rounded-lg bg-secondary/50 border border-border/50">
                    <p className="text-[10px] font-mono text-muted-foreground mb-2">Architecture:</p>
                    <div className="flex items-center gap-2 flex-wrap">
                      {project.architecture.map((component, i) => (
                        <div key={i} className="flex items-center gap-1">
                          <span className="text-xs font-mono text-primary">{component}</span>
                          {i < project.architecture.length - 1 && (
                            <span className="text-muted-foreground">→</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-4 space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-primary/10 text-primary rounded text-[11px] font-mono font-medium border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-border/50">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 font-mono text-xs group/btn"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3.5 h-3.5 mr-2 group-hover/btn:rotate-12 transition-transform" />
                        Code
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 font-mono text-xs bg-primary/90 hover:bg-primary group/btn"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3.5 h-3.5 mr-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </Card>
            );
          })}
        </div>

        {/* API Response Footer */}
        <div className="mt-12 p-6 rounded-xl border-2 border-border bg-card/50 backdrop-blur-sm font-mono text-sm animate-fade-in" style={{ animationDelay: "500ms" }}>
          <div className="flex items-start gap-3">
            <Code2 className="w-5 h-5 text-green-500 mt-0.5" />
            <div className="flex-1">
              <p className="text-green-500 mb-1">200 OK</p>
              <p className="text-muted-foreground text-xs">
                <span className="text-primary">&#123;</span> "projects": 3, "status": "success", "message": "All systems deployed and operational" <span className="text-primary">&#125;</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};