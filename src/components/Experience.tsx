import { Card } from "@/components/ui/card";
import { Briefcase, MapPin, Calendar, Code2, CheckCircle2, TrendingUp } from "lucide-react";

// ADD NEW EXPERIENCES HERE
const experiences = [
  {
    id: "cheal-intern",
    role: "Research & Development Intern",
    company: "Centre for Healthcare Engineering and Learning",
    companyShort: "(cHEAL)",
    location: "Bangalore, India",
    duration: "Mar 2025 – Present",
    isActive: true,
    project: {
      name: "MindSync",
      description: "Leading full-stack development of an ML-driven ADHD wellness application from architecture to deployment."
    },
    achievements: [
      {
        title: "Backend Development",
        desc: "Built RESTful Flask backend for ML inference and recommendation engine with optimized response times"
      },
      {
        title: "Real-time Data Sync",
        desc: "Integrated Firebase (NoSQL) for seamless real-time data synchronization across Flutter mobile client"
      },
      {
        title: "Feature Development",
        desc: "Delivered adaptive focus insights, live mood analytics, and personalized task tracking system"
      }
    ],
    technologies: ["Flutter", "Firebase", "Flask", "Machine Learning", "REST APIs", "NoSQL", "Python", "Real-time Sync"],
    metrics: [
      { label: "Role Scope", value: "Full-Stack" },
      { label: "Integration", value: "ML + API" },
      { label: "Duration", value: "9+ months" }
    ],
    gradient: "from-blue-500 to-cyan-500"
  }
  
  // TO ADD MORE EXPERIENCES, COPY THE TEMPLATE BELOW:
  /*
  {
    id: "unique-id",
    role: "Your Job Title",
    company: "Company Name",
    companyShort: "(Short Name)", // optional
    location: "City, Country",
    duration: "Month Year – Month Year",
    isActive: false,  // true if current, false if past
    project: {
      name: "Project Name",
      description: "Brief project description"
    },
    achievements: [
      {
        title: "Achievement Title",
        desc: "Achievement description"
      }
    ],
    technologies: ["Tech1", "Tech2", "Tech3"],
    metrics: [
      { label: "Metric 1", value: "Value 1" },
      { label: "Metric 2", value: "Value 2" },
      { label: "Metric 3", value: "Value 3" }
    ],
    gradient: "from-green-500 to-emerald-500"
  }
  */
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-4 font-mono text-sm">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-primary">Experience</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-muted-foreground text-lg font-mono max-w-2xl mx-auto">
            Building production systems and learning from real-world challenges
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-blue-400 to-transparent transform md:-translate-x-1/2" />
          
          {/* Experience Cards - Loop through all experiences */}
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative animate-fade-in mb-12" style={{ animationDelay: `${index * 200}ms` }}>
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform md:-translate-x-1/2 shadow-lg shadow-primary/50">
                {exp.isActive && <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" />}
              </div>

              {/* Content Card - Alternating sides on desktop */}
              <div className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                <Card className="p-8 border-2 border-border bg-card hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/10 group">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${exp.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <Briefcase className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                            {exp.role}
                          </h3>
                          <p className="text-lg text-foreground/90 font-semibold mb-2">
                            {exp.company}
                          </p>
                          {exp.companyShort && (
                            <p className="text-sm text-muted-foreground font-mono">{exp.companyShort}</p>
                          )}
                        </div>
                        {exp.isActive && (
                          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-xs font-mono text-green-500">Active</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground font-mono">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Focus */}
                  {exp.project && (
                    <div className="mb-6 p-4 rounded-lg bg-primary/5 border-l-4 border-primary">
                      <div className="flex items-start gap-3">
                        <Code2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-1">Primary Project: {exp.project.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {exp.project.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Key Achievements */}
                  {exp.achievements.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        Key Contributions
                      </h4>
                      <div className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-3 group/item p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                            <div>
                              <p className="font-medium text-sm mb-1">{achievement.title}</p>
                              <p className="text-sm text-muted-foreground leading-relaxed">{achievement.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tech Stack Used */}
                  {exp.technologies.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-mono font-medium border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Impact Metrics */}
                  {exp.metrics.length > 0 && (
                    <div className="pt-6 border-t border-border grid grid-cols-3 gap-4 text-center">
                      {exp.metrics.map((metric, i) => (
                        <div key={i}>
                          <p className="text-2xl font-bold text-primary font-mono">{metric.value}</p>
                          <p className="text-xs text-muted-foreground font-mono mt-1">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </Card>
              </div>
            </div>
          ))}

          {/* Future Timeline Indicator */}
          <div className="relative mt-12 animate-fade-in" style={{ animationDelay: `${experiences.length * 200 + 200}ms` }}>
            <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-muted-foreground/30 rounded-full border-4 border-background transform md:-translate-x-1/2" />
            <div className="ml-8 md:ml-0 md:w-[calc(50%-2rem)] md:mr-auto">
              <div className="p-6 rounded-lg border-2 border-dashed border-border bg-secondary/30">
                <p className="text-center text-muted-foreground font-mono text-sm">
                  <span className="text-primary">→</span> Next chapter: Backend Engineer role at a product company
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};