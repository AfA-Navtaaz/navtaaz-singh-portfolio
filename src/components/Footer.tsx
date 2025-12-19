import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-muted/30">
      <div className="container-narrow">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Navtaaz Singh. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart size={14} className="text-accent" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
