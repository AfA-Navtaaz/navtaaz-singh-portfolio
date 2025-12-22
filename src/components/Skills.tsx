import { Code2, BarChart3, Shield, Settings, FileText, Database } from "lucide-react";

const skillCategories = [
  {
    title: "Optimization & OR",
    icon: BarChart3,
    skills: ["Pyomo", "Gurobi", "CBC", "OR-Tools", "Linear Programming", "MILP"],
  },
  {
    title: "Decision Analysis",
    icon: Database,
    skills: ["PrecisionTree", "@RISK", "Decision Trees", "AHP", "Monte Carlo Simulation"],
  },
  {
    title: "Reliability & Safety",
    icon: Shield,
    skills: ["RCM", "FMEA", "FTA", "RCA", "SIL Verification", "exSILentia"],
  },
  {
    title: "Industrial Systems",
    icon: Settings,
    skills: ["APM", "CMMS", "Industrial IIoT", "Emerson ValveLink", "DCS", "PLC"],
  },
  {
    title: "Programming & Data",
    icon: Code2,
    skills: ["Python", "Excel", "SQL", "Data Analysis", "Automation"],
  },
  {
    title: "Documentation",
    icon: FileText,
    skills: ["LaTeX", "Technical Reports", "Presentations", "Process Documentation"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-card rounded-xl card-shadow p-6 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
