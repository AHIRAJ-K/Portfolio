
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ParticlesBackground from "@/components/ParticlesBackground";

const ProjectsPage = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <ParticlesBackground />
      <Header />
      
      <main className="pt-32 pb-16">
        <ProjectsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectsPage;
