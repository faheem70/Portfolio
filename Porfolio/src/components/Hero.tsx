import { Github, Linkedin, Code2, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="space-y-4">
            <p className="text-lg sm:text-xl text-muted-foreground font-medium">
              Hi, I'm
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold gradient-text">
              Faheem Akhtar
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground">
              Software Developer
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Building scalable and secure web applications with Node.js, NestJS,
              ReactJS, PostgreSQL, and MongoDB
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="gradient-primary text-white border-0 shadow-glow hover:shadow-elegant transition-all duration-300"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#projects">View Projects</a>
            </Button>
          </div>

          <div className="flex gap-6 justify-center items-center pt-4">
            <a
              href="https://github.com/faheemakhtar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors duration-200"
              aria-label="GitHub Profile"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com/in/faheem-akhtar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://leetcode.com/faheemakhtar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors duration-200"
              aria-label="LeetCode Profile"
            >
              <Code2 size={28} />
            </a>
            <a
              href="mailto:faheemakhtar19730@gmail.com"
              className="text-foreground/60 hover:text-primary transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors duration-200 animate-bounce"
          aria-label="Scroll to About section"
        >
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  );
};
