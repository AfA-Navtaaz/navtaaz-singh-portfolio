import { Link } from "react-router-dom";
import { ArrowRight, BarChart2, Truck, Leaf, ThermometerSun, Droplets, TreeDeciduous } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: "wastewater-decision-analysis",
    title: "Decision Analysis – Wastewater Environmental Protection",
    description: "Applied decision analysis techniques (AHP, decision trees, fault trees) to evaluate wastewater treatment alternatives under uncertainty, supported by Monte Carlo reliability simulations to quantify risk and decision robustness.",
    icon: Droplets,
    tags: ["AHP", "Decision Trees", "Fault Trees Analysis", "Monte Carlo Simulation", "EVPI"],
    color: "accent",
  },
  {
    id: "mfvrp-lez",
    title: "MFVRP-LEZ: Mixed Fleet Vehicle Routing Problem",
    description: "Reimplemented a MILP optimization model for mixed electric and conventional vehicle fleets with Low Emission Zone constraints, solved using Python, Pyomo, Gurobi, and CBC solvers.",
    icon: Truck,
    tags: ["MILP", "Python", "Pyomo", "Gurobi", "Vehicle Routing"],
    color: "primary",
  },
  // {
  //   id: "vehicle-routing-distribution",
  //   title: "Vehicle Routing & Distribution Optimization",
  //   description: "Developed optimization models achieving 15-20% improvements in cost and time efficiency for distribution networks through advanced routing algorithms.",
  //   icon: BarChart2,
  //   tags: ["Optimization", "Distribution", "Cost Reduction", "Efficiency"],
  //   color: "accent",
  // },
  {
    id: "smagri",
    title: "SMAGRI – Smart Agriculture Monitoring",
    description: "Designed and implemented a sensor-based smart agriculture monitoring system for real-time data acquisition, analytics, and automated reporting, enabling data-driven decision-making for crop and environmental conditions.",
    icon: TreeDeciduous,
    tags: ["Industrial IoT", "Sensors", "Data Analytics", "Smart Agriculture"],
    color: "primary",
  },
  {
    id: "rack-room-humidity",
    title: "Rack Room Humidity Monitoring",
    description: "Implemented an environmental risk monitoring system for electrical and PLC rooms to track humidity conditions, supporting reliability improvement and preventive maintenance by reducing moisture-related failure risks.",
    icon: ThermometerSun,
    tags: ["Environmental Monitoring", "Reliability Engineering", "Preventive Maintenance"],
    color: "accent",
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of academic and professional projects demonstrating expertise in 
            optimization, decision analysis, and industrial systems.
          </p>
        </div>

        <div className="grid gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group block bg-card rounded-xl card-shadow hover-lift overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                      project.color === "primary" 
                        ? "bg-primary/10 group-hover:bg-primary/20" 
                        : "bg-accent/10 group-hover:bg-accent/20"
                    }`}>
                      <Icon size={24} className={project.color === "primary" ? "text-primary" : "text-accent"} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <ArrowRight size={20} className="flex-shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mt-2 mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
