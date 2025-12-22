import { GraduationCap, Award, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const education = [
  {
    degree: "Master of Engineering – Industrial Engineering (Co-op)",
    institution: "Dalhousie University",
    location: "Halifax, Canada",
    period: "2025 – Present",
    grade: "A+ / A grades in core IE courses",
    courses: [
      "Decision Analysis & Risk Modeling",
      "Operations Research & Optimization",
      "Distribution & Logistics Management",
      "Lean Engineering & Process Improvement",
      "Supply Chain Management",

    ],
    current: true,
  },
  {
    degree: "Bachelor of Technology – Instrumentation & Control Engineering (Honours)",
    institution: "NIT Jalandhar",
    location: "Punjab, India",
    period: "2019 – 2023",
    grade: "CGPA: 8.49 / 10",
    minor: "Computer Science & Engineering",
    courses: [
      "Control Systems",
      "Process Instrumentation",
      "Industrial Automation",
    ],
    current: false,
  },
];

export function Education() {
  return (
    <section id="education" className="section-padding bg-muted/30">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Education
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative bg-card rounded-xl card-shadow p-6 sm:p-8 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {edu.current && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-accent text-accent-foreground">Current</Badge>
                </div>
              )}

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap size={24} className="text-primary" />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 pr-20">
                    {edu.degree}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-2 text-muted-foreground mb-4">
                    <span className="font-medium text-foreground">{edu.institution}</span>
                    <span>•</span>
                    <span>{edu.location}</span>
                    <span>•</span>
                    <span>{edu.period}</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Award size={16} className="text-accent" />
                      <span className="text-sm font-medium text-foreground">{edu.grade}</span>
                    </div>
                    {edu.minor && (
                      <div className="flex items-center gap-2">
                        <BookOpen size={16} className="text-accent" />
                        <span className="text-sm text-muted-foreground">Minor: {edu.minor}</span>
                      </div>
                    )}
                  </div>

                  {edu.courses && (
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-2">Key Courses:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course) => (
                          <Badge key={course} variant="secondary" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
