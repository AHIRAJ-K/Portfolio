
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import QuickLinksSection from "@/components/sections/QuickLinksSection";
import ParticlesBackground from "@/components/ParticlesBackground";

const Index = () => {
  // Force dark mode by adding the class to the html element
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <ParticlesBackground />
      <Header />
      
      <main>
        <HeroSection />
        <AboutSection />
        <QuickLinksSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
