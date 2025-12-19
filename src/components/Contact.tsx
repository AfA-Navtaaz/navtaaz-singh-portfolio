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
            I'm actively seeking <span className="font-semibold text-foreground">Summer 2025 Co-op opportunities</span> in 
            Industrial Engineering, Reliability, Operations Research, or Supply Chain Analytics. 
            I'd love to discuss how my skills can contribute to your team.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:navtaaz@dal.ca">
                <Mail size={20} />
                navtaaz@dal.ca
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="https://linkedin.com/in/navtaazsingh" target="_blank" rel="noopener noreferrer">
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
