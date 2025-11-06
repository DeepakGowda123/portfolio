import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Download, Send, Terminal, ExternalLink } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const contactMethods = [
    {
      id: "email",
      icon: Mail,
      title: "Email",
      value: "deepak.gowda1215@gmail.com",
      href: "mailto:deepak.gowda1215@gmail.com",
      gradient: "from-blue-500 to-cyan-500",
      action: "Send Message"
    },
    {
      id: "linkedin",
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/deepak-a-s-7a2aa3264/",
      gradient: "from-blue-600 to-blue-400",
      action: "View Profile"
    },
    {
      id: "github",
      icon: Github,
      title: "GitHub",
      value: "Check out my code",
      href: "https://github.com/DeepakGowda123",
      gradient: "from-gray-600 to-gray-400",
      action: "View Repos"
    },
    {
      id: "resume",
      icon: Download,
      title: "Resume",
      value: "Download my CV",
      href: "/DeepakGowda_Resume.pdf",
      gradient: "from-green-500 to-emerald-500",
      action: "Download PDF",
      download: true
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(16,185,129,0.05),transparent_50%)]" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-4 font-mono text-sm">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-primary">Contact</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg font-mono max-w-2xl mx-auto mb-6">
            <span className="text-primary">POST /api/v1/contact</span> — Actively seeking backend opportunities
          </p>
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-green-500/30 bg-green-500/10 backdrop-blur-sm">
            <div className="relative">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75" />
            </div>
            <span className="text-green-500 font-mono font-semibold text-sm">Available for immediate opportunities</span>
          </div>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            const isHovered = hoveredCard === method.id;
            
            return (
              <Card
                key={method.id}
                onMouseEnter={() => setHoveredCard(method.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative p-6 border-2 border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${method.gradient}`} />
                
                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${method.gradient} shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-bold text-lg font-mono">{method.title}</h3>
                        <div className={`w-2 h-2 rounded-full ${isHovered ? 'bg-green-500 animate-pulse' : 'bg-muted-foreground/30'} transition-colors`} />
                      </div>
                      <p className="text-sm text-muted-foreground break-all">{method.value}</p>
                    </div>
                  </div>

                  <a
                    href={method.href}
                    {...(method.download ? { download: "DeepakGowda_Resume.pdf" } : { target: "_blank", rel: "noopener noreferrer" })}
                    className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-all group/btn"
                  >
                    <span className="text-sm font-mono font-medium">{method.action}</span>
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                </div>

                {/* Progress bar on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${method.gradient} transform origin-left transition-transform duration-500 ${
                      isHovered ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <Card className="p-8 md:p-12 border-2 border-primary/30 bg-gradient-to-br from-card to-secondary/30 animate-fade-in" style={{ animationDelay: "500ms" }}>
          <div className="text-center max-w-2xl mx-auto">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
                <Send className="w-4 h-4 text-primary" />
                <span className="text-sm font-mono text-primary">Quick Connect</span>
              </div>
              <h3 className="text-3xl font-bold mb-3">Ready to Build Something Great?</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm actively looking for <span className="text-foreground font-semibold">Backend Engineer</span> roles where I can contribute, learn, and grow. If you're building something exciting, let's talk!
              </p>
            </div>

            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all group"
              asChild
            >
              <a href="mailto:deepak.gowda1215@gmail.com">
                <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Send Me a Message
              </a>
            </Button>

            {/* Response Footer */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="font-mono text-sm text-left bg-secondary/50 p-4 rounded-lg">
                <p className="text-green-500 mb-2">
                  <span className="text-muted-foreground">$ curl -X GET</span> https://deepak.dev/status
                </p>
                <p className="text-muted-foreground">
                  <span className="text-primary">&#123;</span>
                  <br />
                  <span className="ml-4">"status": <span className="text-green-500">"available"</span>,</span>
                  <br />
                  <span className="ml-4">"role": <span className="text-blue-400">"Backend Engineer"</span>,</span>
                  <br />
                  <span className="ml-4">"response_time": <span className="text-yellow-500">"&lt; 24hrs"</span>,</span>
                  <br />
                  <span className="ml-4">"enthusiasm": <span className="text-purple-400">"maximum"</span></span>
                  <br />
                  <span className="text-primary">&#125;</span>
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Social Proof */}
        <div className="mt-8 text-center animate-fade-in" style={{ animationDelay: "700ms" }}>
          <p className="text-xs text-muted-foreground font-mono mb-3">
            Open to relocation • Available for full-time roles • Fast responder
          </p>
          <div className="flex justify-center gap-4">
            {["Backend", "Full-Stack", "Remote", "Hybrid"].map((tag, i) => (
              <span 
                key={i}
                className="px-3 py-1 bg-primary/5 text-primary rounded-full text-xs font-mono border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};