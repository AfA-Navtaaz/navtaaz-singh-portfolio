import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ExternalLink, CheckCircle2, Target, Lightbulb, BarChart2, Truck, Droplets, TreeDeciduous, ThermometerSun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const projectsData = {
  "wastewater-decision-analysis": {
    title: "Decision Analysis – Wastewater Environmental Protection",
    subtitle: "Multi-criteria decision framework for sustainable wastewater management",
    icon: Droplets,
    tags: ["AHP", "Decision Trees", "Fault Trees", "Monte Carlo", "EVPI", "Sensitivity Analysis"],
    overview: "Applied comprehensive decision analysis methodologies to evaluate wastewater treatment alternatives for environmental protection. This project integrated multiple quantitative techniques to support strategic infrastructure decisions.",
    objectives: [
      "Evaluate multiple wastewater treatment alternatives using structured decision frameworks",
      "Quantify uncertainty through probabilistic analysis and Monte Carlo simulation",
      "Calculate Expected Value of Perfect Information (EVPI) for key decision factors",
      "Perform sensitivity analysis to identify critical parameters",
    ],
    methodology: [
      "Analytic Hierarchy Process (AHP) for multi-criteria evaluation",
      "Decision tree modeling for sequential decision analysis",
      "Fault tree analysis for system reliability assessment",
      "Monte Carlo simulation for uncertainty quantification",
      "EVPI calculations for information value assessment",
    ],
    outcomes: [
      "Comprehensive decision framework for infrastructure planning",
      "Quantified risk profiles for each treatment alternative",
      "Identification of key sensitivity parameters",
      "Recommendations for optimal treatment strategy",
    ],
    tools: ["PrecisionTree", "@RISK", "Excel", "Statistical Analysis"],
  },
  "mfvrp-lez": {
    title: "MFVRP-LEZ: Mixed Fleet Vehicle Routing Problem",
    subtitle: "Optimization model for EV and ICE vehicle routing with Low Emission Zone constraints",
    icon: Truck,
    tags: ["MILP", "Python", "Pyomo", "Gurobi", "CBC", "Vehicle Routing", "Optimization"],
    overview: "Reimplemented and extended the Mixed Fleet Vehicle Routing Problem with Low Emission Zone (LEZ) considerations based on the Bruglieri et al. model. This optimization framework addresses the complex scheduling of electric and conventional vehicles while considering environmental regulations.",
    objectives: [
      "Implement MILP formulation for mixed EV/ICE fleet routing",
      "Incorporate Low Emission Zone toll and access constraints",
      "Model charging station locations and EV range limitations",
      "Minimize total operational costs including tolls and energy consumption",
    ],
    methodology: [
      "Mathematical formulation using Mixed Integer Linear Programming",
      "Implementation in Python using Pyomo optimization framework",
      "Solution using Gurobi and CBC commercial/open-source solvers",
      "Comparative analysis of EV vs ICE routing strategies",
    ],
    outcomes: [
      "Functional optimization model with proven solution quality",
      "Insights into EV integration strategies for logistics fleets",
      "Cost-benefit analysis of LEZ compliance alternatives",
      "Computational performance benchmarks across solvers",
    ],
    tools: ["Python", "Pyomo", "Gurobi", "CBC", "NumPy", "Pandas"],
  },
  "vehicle-routing-distribution": {
    title: "Vehicle Routing & Distribution Optimization",
    subtitle: "Achieving 15-20% efficiency improvements in distribution networks",
    icon: BarChart2,
    tags: ["Optimization", "Distribution", "Cost Reduction", "Efficiency", "Operations Research"],
    overview: "Developed and implemented advanced vehicle routing optimization models to improve distribution network efficiency. The project focused on real-world applicability and measurable cost/time savings.",
    objectives: [
      "Optimize delivery routes for multi-vehicle distribution networks",
      "Minimize total travel distance and time",
      "Balance vehicle capacity utilization",
      "Reduce operational costs while maintaining service levels",
    ],
    methodology: [
      "Vehicle Routing Problem (VRP) formulation and variants",
      "Heuristic and metaheuristic solution approaches",
      "Constraint handling for capacity and time windows",
      "Performance benchmarking against baseline solutions",
    ],
    outcomes: [
      "15-20% improvement in cost and time efficiency",
      "Reduced fuel consumption and vehicle wear",
      "Improved customer service through better scheduling",
      "Scalable solution framework for various network sizes",
    ],
    tools: ["Python", "OR-Tools", "Excel", "Data Visualization"],
  },
  "smagri": {
    title: "SMAGRI – Smart Agriculture Monitoring System",
    subtitle: "IoT-based sensor network for precision agriculture",
    icon: TreeDeciduous,
    tags: ["IoT", "Sensors", "Data Analytics", "Agriculture", "Automation"],
    overview: "Designed and implemented a comprehensive smart agriculture monitoring system that leverages IoT sensors for real-time data acquisition, automated analytics, and actionable reporting for farm management.",
    objectives: [
      "Deploy sensor network for environmental monitoring",
      "Enable real-time data acquisition and transmission",
      "Develop analytics dashboard for farm insights",
      "Automate reporting and alert generation",
    ],
    methodology: [
      "Sensor selection and network architecture design",
      "Data acquisition system development",
      "Cloud-based data storage and processing",
      "Analytics and visualization dashboard creation",
    ],
    outcomes: [
      "Functional IoT monitoring system deployment",
      "Real-time visibility into field conditions",
      "Data-driven decision support for farmers",
      "Reduced manual monitoring requirements",
    ],
    tools: ["IoT Sensors", "Microcontrollers", "Cloud Platforms", "Data Analytics"],
  },
  "rack-room-humidity": {
    title: "Rack Room Humidity Monitoring Project",
    subtitle: "Environmental risk monitoring for critical electrical infrastructure",
    icon: ThermometerSun,
    tags: ["Environmental Monitoring", "Reliability", "Preventive Maintenance", "Risk Management"],
    overview: "Implemented an environmental monitoring system for electrical and PLC control rooms to mitigate humidity-related risks. The project focused on reliability engineering principles and preventive maintenance strategies.",
    objectives: [
      "Monitor humidity levels in critical electrical enclosures",
      "Prevent moisture-related equipment failures",
      "Implement early warning systems for environmental excursions",
      "Support preventive maintenance scheduling",
    ],
    methodology: [
      "Environmental risk assessment for electrical equipment",
      "Sensor placement optimization for effective monitoring",
      "Alarm threshold determination based on equipment specifications",
      "Integration with maintenance management systems",
    ],
    outcomes: [
      "Reduced equipment failures due to humidity",
      "Improved reliability of control systems",
      "Data-driven maintenance scheduling",
      "Extended equipment service life",
    ],
    tools: ["Environmental Sensors", "SCADA Integration", "Data Analysis", "CMMS"],
  },
};

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? projectsData[projectId as keyof typeof projectsData] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Button asChild>
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  const Icon = project.icon;

  return (
    <>
      <Helmet>
        <title>{project.title} | Navtaaz Singh</title>
        <meta name="description" content={project.overview} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="container-narrow">
            {/* Back Button */}
            <Link 
              to="/#projects" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={18} />
              <span>Back to Projects</span>
            </Link>

            {/* Header */}
            <div className="mb-12 animate-fade-in">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon size={28} className="text-primary" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                    {project.title}
                  </h1>
                  <p className="text-lg text-muted-foreground">{project.subtitle}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {/* Overview */}
                <section className="bg-card rounded-xl card-shadow p-6 sm:p-8 animate-fade-in">
                  <h2 className="text-xl font-semibold text-foreground mb-4">Overview</h2>
                  <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
                </section>

                {/* Objectives */}
                <section className="bg-card rounded-xl card-shadow p-6 sm:p-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                  <div className="flex items-center gap-3 mb-4">
                    <Target size={20} className="text-primary" />
                    <h2 className="text-xl font-semibold text-foreground">Objectives</h2>
                  </div>
                  <ul className="space-y-3">
                    {project.objectives.map((objective, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Methodology */}
                <section className="bg-card rounded-xl card-shadow p-6 sm:p-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <div className="flex items-center gap-3 mb-4">
                    <Lightbulb size={20} className="text-primary" />
                    <h2 className="text-xl font-semibold text-foreground">Methodology</h2>
                  </div>
                  <ul className="space-y-3">
                    {project.methodology.map((method, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center flex-shrink-0">
                          {idx + 1}
                        </span>
                        <span className="text-muted-foreground">{method}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Tools */}
                <section className="bg-card rounded-xl card-shadow p-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  <h3 className="font-semibold text-foreground mb-4">Tools & Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span key={tool} className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">
                        {tool}
                      </span>
                    ))}
                  </div>
                </section>

                {/* Outcomes */}
                <section className="bg-card rounded-xl card-shadow p-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  <h3 className="font-semibold text-foreground mb-4">Key Outcomes</h3>
                  <ul className="space-y-3">
                    {project.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 size={16} className="text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* CTA */}
                <div className="bg-primary/5 rounded-xl p-6 border border-primary/10 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                  <h3 className="font-semibold text-foreground mb-2">Interested in this project?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    I'd be happy to discuss the details and methodology.
                  </p>
                  <Button variant="hero" size="sm" className="w-full" asChild>
                    <a href="mailto:navtaazsingh02@gmail.com">Get in Touch</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ProjectDetail;
