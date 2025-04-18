
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/sections/ContactSection";
import ParticlesBackground from "@/components/ParticlesBackground";

const ContactPage = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <ParticlesBackground />
      <Header />
      
      <main className="pt-32 pb-16">
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
