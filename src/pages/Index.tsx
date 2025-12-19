import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Navtaaz Singh | Industrial Engineering & Reliability Engineer</title>
        <meta 
          name="description" 
          content="M.Eng Industrial Engineering student at Dalhousie University with expertise in reliability engineering, operations research, and supply chain analytics. Seeking Summer 2025 Co-op opportunities." 
        />
        <meta name="keywords" content="Industrial Engineering, Reliability Engineering, Operations Research, Supply Chain, Co-op, Dalhousie University" />
        <link rel="canonical" href="https://navtaazsingh.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
