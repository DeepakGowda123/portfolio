import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Terminal, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  
  const terminalLines = [
    { command: "$ whoami", output: "Deepak A S - Backend Developer" },
    { command: "$ cat status.txt", output: "Available for Backend/Full-Stack roles" },
    { command: "$ echo $PHILOSOPHY", output: '"Give me a system, and I\'ll figure it out."' }
  ];

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentLineIndex >= terminalLines.length) return;

    const currentLine = terminalLines[currentLineIndex];
    const fullText = `${currentLine.command}\n${currentLine.output}`;
    
    if (displayedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    } else if (currentLineIndex < terminalLines.length - 1) {
      const timeout = setTimeout(() => {
        setDisplayedText(displayedText + "\n\n");
        setCurrentLineIndex(prev => prev + 1);
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [displayedText, currentLineIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-secondary/20">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto">
          {/* Status Badge */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-primary/30 bg-primary/5 backdrop-blur-sm">
              <div className="relative">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75" />
              </div>
              <span className="text-primary font-mono font-semibold tracking-wide">SYSTEM STATUS: OPERATIONAL • SEEKING OPPORTUNITIES</span>
            </div>
          </div>

          {/* Terminal Window */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="bg-card border-2 border-border rounded-xl overflow-hidden shadow-2xl shadow-primary/10">
              {/* Terminal Header */}
              <div className="bg-secondary/50 px-6 py-3 border-b border-border flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm font-mono">
                  <Terminal className="w-4 h-4" />
                  <span>deepak@portfolio:~</span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-8 font-mono text-sm min-h-[240px] bg-gradient-to-br from-card to-secondary/20">
                <div className="space-y-2 text-foreground/90">
                  {displayedText.split('\n').map((line, i) => (
                    <div key={i} className="leading-relaxed">
                      {line.startsWith('$') ? (
                        <span className="text-primary font-semibold flex items-center gap-2">
                          <ChevronRight className="w-4 h-4" />
                          {line}
                        </span>
                      ) : (
                        <span className="text-green-400 ml-6">{line}</span>
                      )}
                    </div>
                  ))}
                  {currentLineIndex < terminalLines.length && (
                    <span className={`inline-block w-2 h-4 bg-primary ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent tracking-tight">
              Deepak A S
            </h1>
            
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
              <p className="text-xl md:text-2xl text-muted-foreground font-mono">
                <span className="text-primary">&lt;</span>
                Backend Engineer
                <span className="text-primary"> /&gt;</span>
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
            </div>
            
            <p className="text-base text-muted-foreground/80 font-mono max-w-2xl mx-auto">
              MCA Graduate • PES University • Building scalable systems with Java, Python & AI
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: "600ms" }}>
            <Button 
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
            >
              <Terminal className="w-5 h-5 mr-2" />
              ./view-projects
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="border-2 border-primary/30 hover:border-primary hover:bg-primary/10 font-mono font-semibold"
            >
              <Mail className="w-5 h-5 mr-2" />
              ./get-in-touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center animate-fade-in" style={{ animationDelay: "800ms" }}>
            <a
              href="https://github.com/DeepakGowda123"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-lg border border-border bg-card hover:border-primary/50 hover:bg-card/80 transition-all hover:scale-110"
            >
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                /github
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/deepak-a-s-7a2aa3264/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-lg border border-border bg-card hover:border-primary/50 hover:bg-card/80 transition-all hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                /linkedin
              </span>
            </a>
            <a
              href="mailto:deepak.gowda1215@gmail.com"
              className="group relative p-4 rounded-lg border border-border bg-card hover:border-primary/50 hover:bg-card/80 transition-all hover:scale-110"
            >
              <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                /email
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};