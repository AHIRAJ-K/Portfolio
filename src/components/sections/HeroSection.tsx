import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "../ParticlesBackground";
import { Spotlight } from "../ui/spotlight-new";

const roles = [
  "Embedded Systems Engineer",
  "FPGA Developer",
  "PCB Designer",
  "ECE Undergraduate",
];

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Typing effect
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 30);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black/[0.96] antialiased bg-grid-white/[0.02]"
    >
      <ParticlesBackground />
      <Spotlight variant="static" />

      <div className="container mx-auto px-4 z-10 text-center">
        {/* Name */}
        <motion.h1
          className="text-7xl md:text-8xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible ? (scrolled ? -40 : 0) : 20,
            x: scrolled ? -100 : 0,
            scale: scrolled ? 0.7 : 1,
          }}
          transition={{ duration: 0.4 }}
        >
          AHIRAJ K
        </motion.h1>

        {/* Typing subtitle */}
        <motion.div
          className="text-xl md:text-2xl text-muted-foreground mb-6 h-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isVisible ? (scrolled ? 0 : 1) : 0,
            y: isVisible ? 0 : 20,
          }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <span>{displayed}</span>
          <span className="inline-block w-0.5 h-5 bg-white ml-1 animate-pulse" />
        </motion.div>

        {/* One liner */}
        <motion.p
          className="text-base md:text-lg text-muted-foreground/70 mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isVisible ? (scrolled ? 0 : 1) : 0,
            y: isVisible ? 0 : 20,
          }}
          transition={{ duration: 0.4, delay: 0.35 }}
        >
          Building hardware that works — from FSM logic to PCB layout.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isVisible ? (scrolled ? 0 : 1) : 0,
            y: isVisible ? 0 : 20,
          }}
          transition={{ duration: 0.4, delay: 0.45 }}
        >
          
            href="#projects"
            className="px-6 py-3 rounded-md bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors"
          >
            View Projects
          </a>
          
            href="#contact"
            className="px-6 py-3 rounded-md border border-white/20 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Down arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? (scrolled ? 0 : 1) : 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <a href="#about" className="inline-block animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white/40"
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