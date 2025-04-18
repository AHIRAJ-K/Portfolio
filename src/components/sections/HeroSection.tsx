
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "../ParticlesBackground";
import { Spotlight } from "../ui/spotlight-new";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black/[0.96] antialiased bg-grid-white/[0.02]"
    >
      <ParticlesBackground />
      <Spotlight variant="static" />
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.h1
          className="text-7xl md:text-8xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isVisible ? 1 : 0, 
            y: isVisible ? (scrolled ? -40 : 0) : 20,
            x: scrolled ? -100 : 0,
            scale: scrolled ? 0.7 : 1
          }}
          transition={{ duration: 0.4 }}
        >
          AHIRAJ K
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isVisible ? (scrolled ? 0 : 1) : 0, 
            y: isVisible ? 0 : 20 
          }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Electronics & Communication Engineering Student
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? (scrolled ? 0 : 1) : 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <a
            href="#about"
            className="inline-block animate-float"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
