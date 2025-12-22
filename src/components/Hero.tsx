import { MapPin, Calendar, ArrowDown } from "lucide-react";
// import { ArrowDown, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import profilePhoto from "@/assets/profile-photo.jpg";

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.03)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.05)_0%,transparent_50%)]" />
      
      <div className="container-narrow relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Profile Photo */}
          <div className="mb-8 animate-scale-in">
            <div className="relative inline-block">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-lg mx-auto">
                <img 
                  src={profilePhoto} 
                  alt="Navtaaz Singh - Industrial Engineer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Status indicator */}
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-accent rounded-full border-4 border-background flex items-center justify-center">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-foreground opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-foreground"></span>
                </span>
              </div>
            </div>
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 animate-fade-in">
            <span className="text-sm font-medium text-accent">
              🎯 Open to Summer 2025 Co-op | Industrial Engineering
            </span>
          </div>

          {/* Name & Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Navtaaz Singh
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Reliability & Asset Management | Supply Chain & Operational Analytics
          </p>

          {/* Location & Education */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-1.5">
              <MapPin size={16} className="text-primary" />
              <span>M.Eng Industrial Engineering (Co-op), Dalhousie University</span>
              
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-border" />
            <div className="flex items-center gap-1.5">
              <Calendar size={16} className="text-primary" />
              <span>Halifax, Canada</span>
            </div>
          </div>

          {/* Focus Areas */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {["Reliability & Asset Performance Management (APM)", "Supply Chain Analytics", "Operations Research & Optimization", "Decision Analysis & Risk Modeling"].map((tag) => (
              <Badge key={tag} variant="secondary" className="px-3 py-1 text-sm font-medium">
                {tag}
              </Badge>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Button variant="hero" size="lg" onClick={scrollToProjects}>
              View My Work
            </Button>
            <Button variant="heroOutline" size="lg" onClick={scrollToContact}>
              Get in Touch
            </Button>
          </div>
        </div>

{/* Scroll Indicator */}
<div
  className="absolute left-1/2 bottom-16 -translate-x-1/2 animate-fade-in"
  style={{ animationDelay: "0.8s" }}
>
  <button
    onClick={scrollToProjects}
    className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
    aria-label="Scroll down"
  >
    <span className="text-xs font-medium uppercase tracking-wider">
      Scroll
    </span>
    <ArrowDown size={20} className="animate-bounce" />
  </button>
</div>

      </div>
    </section>
  );
}
