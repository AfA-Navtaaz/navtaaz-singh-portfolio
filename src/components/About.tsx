import { Target, TrendingUp, Shield, BarChart3 } from "lucide-react";

const highlights = [
  {
    icon: Shield,
    title: "Reliability Engineering",
    description: "RCM, SIL verification, FMEA, and asset performance management in refinery operations",
  },
  {
    icon: TrendingUp,
    title: "Operations Research",
    description: "Mathematical optimization, MILP modeling, and decision analysis for complex systems",
  },
  {
    icon: BarChart3,
    title: "Supply Chain Analytics",
    description: "Distribution management, vehicle routing optimization, and lean engineering principles",
  },
  {
    icon: Target,
    title: "Industrial Systems",
    description: "IIoT implementation, CMMS, instrumentation & control systems integration",
  },
];

export function About() {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a Master's student in Industrial Engineering at Dalhousie University with hands-on experience 
            in reliability and instrumentation engineering from the energy sector. My expertise bridges 
            traditional industrial engineering with data-driven decision making and optimization.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group p-6 bg-card rounded-xl card-shadow hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
