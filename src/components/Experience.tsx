import { Building2, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Engineer – Reliability / Instrumentation & Control",
    company: "Guru Gobind Singh Refinery (HMEL)",
    location: "Punjab, India",
    period: "2023",
    type: "Full-time",
    responsibilities: [
      "Implemented Reliability-Centered Maintenance (RCM) strategies for critical refinery assets",
      "Performed SIL verification for 100+ Safety Instrumented Functions using exSILentia",
      "Managed Asset Performance Management for 1000+ field instruments",
      "Conducted valve diagnostics and maintenance using Emerson ValveLink",
      "Led IIoT steam-trap monitoring implementation for predictive maintenance",
      "Performed RCA, FMEA analysis, and shutdown planning activities",
      "Managed CMMS and MRO spares inventory optimization",
      "Ensured compliance with high-risk industrial safety practices (LOTO, permits, JSA)",
    ],
    skills: ["RCM", "SIL Verification", "APM", "FMEA", "IIoT", "CMMS"],
  },
];

const internships = [
  {
    title: "DevOps / Software Engineering Intern",
    company: "Huru / Yenom Technologies",
    period: "2022",
    responsibilities: [
      "Developed and maintained CI/CD pipelines for automated deployments",
      "Implemented cloud infrastructure automation solutions",
    ],
    skills: ["CI/CD", "Cloud", "DevOps"],
  },
  {
    title: "Engineering Intern",
    company: "National Fertilizers Limited (NFL)",
    period: "2021",
    responsibilities: [
      "Gained hands-on experience in instrumentation systems and plant maintenance",
      "Assisted in calibration and troubleshooting of field instruments",
    ],
    skills: ["Instrumentation", "Plant Maintenance"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Main Experience */}
        <div className="mb-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-card rounded-xl card-shadow p-6 sm:p-8 animate-fade-in"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Building2 size={16} className="text-primary" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
                <Badge variant="secondary" className="self-start">
                  {exp.type}
                </Badge>
              </div>

              <div className="space-y-3 mb-6">
                {exp.responsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm leading-relaxed">{resp}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Internships */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-6">Internships</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {internships.map((intern, index) => (
              <div
                key={index}
                className="bg-card rounded-xl card-shadow p-6 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="font-semibold text-foreground mb-2">{intern.title}</h4>
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                  <span className="font-medium">{intern.company}</span>
                  <span>•</span>
                  <span>{intern.period}</span>
                </div>
                <div className="space-y-2 mb-4">
                  {intern.responsibilities.map((resp, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground">
                      • {resp}
                    </p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {intern.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
