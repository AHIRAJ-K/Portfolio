import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Spotlight } from "../ui/spotlight-new";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

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
      {/* Circuit trace background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Top left traces */}
          <polyline points="0,80 60,80 60,140 120,140" fill="none" stroke="#00cc55" strokeWidth="1" filter="url(#glow)" />
          <polyline points="0,160 40,160 40,220 100,220 100,280" fill="none" stroke="#00cc55" strokeWidth="1" filter="url(#glow)" />
          <polyline points="60,0 60,40 120,40 120,80" fill="none" stroke="#00cc55" strokeWidth="1" filter="url(#glow)" />
          <circle cx="60" cy="80" r="3" fill="#00cc55" filter="url(#glow)" />
          <circle cx="120" cy="140" r="3" fill="#00cc55" filter="url(#glow)" />
          <circle cx="100" cy="220" r="3" fill="#00cc55" filter="url(#glow)" />
          <circle cx="120" cy="40" r="3" fill="#00cc55" filter="url(#glow)" />

          {/* Top right traces */}
          <polyline points="1400,60 1340,60 1340,120 1280,120" fill="none" stroke="#00cc55" strokeWidth="1" filter="url(#glow)" />
          <polyline points="1400,180 1360,180 1360,240 1300,240 1300,300" fill="none" stroke="#00cc55" strokeWidth="1" filter="url(#glow)" />
          <polyline points="1340,0 1340,40 1280,40 1280,80" fill="none" stroke="#00cc55" strokeWidth="1" filter="url(#glow)" />
          <circle cx="1340" cy="60" r="3" fill="#00cc55" filter="url(#glow)" />
          <circle cx="1280" cy="120" r="3" fill="#00cc55" filter="url(#glow)" />
          <circle cx="1300" cy="240" r="3" fill="#00cc55" filter="url(#glow)" />

          {/* Bottom left traces */}
          <polyline points="0,620 80,620 80,560 160,560" fill="none" stroke="#00cc55" strokeWidth="1" filter="url(#glow)" />
          <polyline points="0,700 60,700 60,660 120,660 120,600" fill="none" stroke="#00cc55" strokeWidth="1" filter="url(#glow)" />
          <polyline points="80,768 80,720 140,720 140,660" fill="none" stroke="#00cc55" strokeWidth="1" filter="url(#glow)" />
          <circle cx="80" cy="620" r="3" fill="#00cc55" filter="url(#glow)" />
          <circle cx="160" cy="560" r="3" fill="#00cc55" filter="url(#glow)" />
          <circle cx="120" cy="660" r="3" fill="#00cc55" filter="url(#glow)" />

          {/* Bottom right traces */}
          <polyline points="1400,620 1320,620 1320,560 1240,560" fill="none" stroke="#00cc55" strokeWidth="1" filter="url(#glow)" />
          <polyline points="1400,700 1340,700 1340,660 1280,660 1280,600" fill="none" stroke="#00cc55" strokeWidth="1" filter="url(#glow)" />
          <polyline points="1320,768 1320,720 1260,720 1260,660" fill="none" stroke="#00cc55" strokeWidth="1" filter="url(#glow)" />
          <circle cx="1320" cy="620" r="3" fill="#00cc55" filter="url(#glow)" />
          <circle cx="1240" cy="560" r="3" fill="#00cc55" filter="url(#glow)" />
          <circle cx="1280" cy="660" r="3" fill="#00cc55" filter="url(#glow)" />

          {/* Pulsing vias at corners */}
          <circle cx="120" cy="140" r="6" fill="#00cc55" opacity="0.2" filter="url(#glow)">
            <animate attributeName="r" values="4;9;4" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="1280" cy="120" r="6" fill="#00cc55" opacity="0.2" filter="url(#glow)">
            <animate attributeName="r" values="4;9;4" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0;0.4" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="160" cy="560" r="6" fill="#00cc55" opacity="0.2" filter="url(#glow)">
            <animate attributeName="r" values="4;9;4" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="1240" cy="560" r="6" fill="#00cc55" opacity="0.2" filter="url(#glow)">
            <animate attributeName="r" values="4;9;4" dur="2.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0;0.4" dur="2.2s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      {/* Center radial glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,180,70,0.07) 0%, transparent 70%)",
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
          Building hardware that works, from FSM logic to PCB layout.
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
            onClick={() => navigate("/projects")}
            className="w-36 h-11 flex items-center justify-center rounded-md bg-white text-black font-semibold text-sm cursor-pointer"
          >
            View Projects
          </button>
          <button
            onClick={() => navigate("/contact")}
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
          <button
            onClick={() => scrollTo("about")}
            className="inline-block animate-bounce cursor-pointer bg-transparent border-none"
          >
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
