import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, FileText, Briefcase, GraduationCap, Wrench, FolderOpen, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "About", href: "/#about", icon: FileText },
  { name: "Experience", href: "/#experience", icon: Briefcase },
  { name: "Education", href: "/#education", icon: GraduationCap },
  { name: "Projects", href: "/#projects", icon: FolderOpen },
  { name: "Skills", href: "/#skills", icon: Wrench },
  { name: "Contact", href: "/#contact", icon: Mail },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container-narrow">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 font-semibold text-lg text-foreground hover:text-primary transition-colors"
          >
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">NS</span>
            </div>
            <span className="hidden sm:inline">Navtaaz Singh</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                {item.name}
              </button>
            ))}
            <Button variant="hero" size="sm" className="ml-2" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md transition-colors",
                      "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    )}
                  >
                    <Icon size={18} />
                    {item.name}
                  </button>
                );
              })}
              <div className="pt-2 px-4">
                <Button variant="hero" className="w-full" asChild>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
