import { Mail, Linkedin, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow">
        <div className="max-w-2xl mx-auto text-center">
          <Badge className="mb-6 bg-accent/10 text-accent border-accent/20">
            Open to Opportunities
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full" />
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            I’m open to <span className="font-semibold text-foreground">Summer 2025 co-op opportunities</span> in Industrial Engineering, Reliability, Operations Research, and Supply Chain Analytics. 
            I enjoy working on data-driven, real-world problems and would be glad to discuss how my experience can add value to your team.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:navtaazsingh02@gmail.com">
                <Mail size={20} />
                Email Me
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="https://www.linkedin.com/in/navtaaz-singh-20b357186/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
                LinkedIn Profile
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin size={16} className="text-primary" />
            <span>Halifax, Nova Scotia, Canada</span>
          </div>
        </div>
      </div>
    </section>
  );
}
