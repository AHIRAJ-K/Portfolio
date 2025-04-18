
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ParticlesBackground from "@/components/ParticlesBackground";

const ExperiencePage = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <ParticlesBackground />
      <Header />
      
      <main className="pt-32 pb-16">
        <ExperienceSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default ExperiencePage;
