import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Spotlight } from "../ui/spotlight-new";

const roles = [
  "ECE Undergraduate",
  "Embedded Systems Enthusiast",
  "FPGA & Verilog Developer",
  "PCB Designer",
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

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black antialiased"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,200,80,0.05) 0%, transparent 70%)",
        }}
      />

      <Spotlight variant="static" />

      <div className="container mx-auto px-4 z-10 text-center">
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

        <motion.p
          className="text-base md:text-lg text-muted-foreground mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isVisible ? (scrolled ? 0 : 1) : 0,
            y: isVisible ? 0 : 20,
          }}
          transition={{ duration: 0.4, delay: 0.35 }}
        >
          Building hardware that works — from FSM logic to PCB layout.
        </motion.p>

        <motion.div
          className="flex flex-row gap-4 justify-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isVisible ? (scrolled ? 0 : 1) : 0,
            y: isVisible ? 0 : 20,
          }}
          transition={{ duration: 0.4, delay: 0.45 }}
        >
          <button
            onClick={() => scrollTo("projects")}
            className="w-36 h-11 flex items-center justify-center rounded-md bg-white text-black font-semibold text-sm cursor-pointer"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="w-36 h-11 flex items-center justify-center rounded-md font-semibold text-sm text-white cursor-pointer"
            style={{ border: "1px solid rgba(255,255,255,0.4)" }}
          >
            Hire Me
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? (scrolled ? 0 : 1) : 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <button onClick={() => scrollTo("about")} className="inline-block animate-bounce cursor-pointer bg-transparent border-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;