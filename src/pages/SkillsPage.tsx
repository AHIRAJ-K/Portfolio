
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SkillsSection from "@/components/sections/SkillsSection";
import ParticlesBackground from "@/components/ParticlesBackground";

const SkillsPage = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <ParticlesBackground />
      <Header />
      
      <main className="pt-32 pb-16">
        <SkillsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default SkillsPage;
