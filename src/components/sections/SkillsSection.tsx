
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Skill type definition
interface Skill {
  name: string;
  icon: string;
}

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Updated Programming Languages with fixed logos
  const programmingLanguages: Skill[] = [
    {
      name: "C/C++",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    },
    {
      name: "MATLAB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg"
    },
    {
      name: "Embedded C",
      icon: "https://github.com/AHIRAJ-K/Portfolio/blob/main/Logos/Embedded%20C.png?raw=true" // Using a chip icon for Embedded C
    },
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    },
    {
      name: "Verilog",
      icon: "https://api.iconify.design/simple-icons:v.svg?color=%230d9488"
    }
  ];

  // Updated Software & Tools with reliable icons
  const tools: Skill[] = [
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
    },
    {
      name: "Arduino IDE",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg"
    },
    {
      name: "Keil uVision",
      icon: "https://github.com/AHIRAJ-K/Portfolio/blob/main/Logos/Keil.png?raw=true" // Using a microcontroller icon
    },
    {
      name: "TINA",
      icon: "https://github.com/AHIRAJ-K/Portfolio/blob/main/Logos/tina-logo.png?raw=true" // Using a circuit icon
    },
    {
      name: "Xilinx Vivado",
      icon: "https://github.com/AHIRAJ-K/Portfolio/blob/main/Logos/Vivado.png?raw=true" // Using a developer board icon
    },
    {
      name: "Proteus",
      icon: "https://github.com/AHIRAJ-K/Portfolio/blob/main/Logos/proteus.png?raw=true" // Using a circuit board icon
    },
    {
      name: "Tinkercad",
      icon: "https://github.com/AHIRAJ-K/Portfolio/blob/main/Logos/TINKERCAD.png?raw=true" // Using a tools icon
    },
    {
      name: "Photoshop",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
    },
    {
      name: "Illustrator",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg"
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
    }
  ];

  // Updated Soft Skills with colorful, meaningful icons
  const softSkills: Skill[] = [
    {
      name: "Teamwork",
      icon: "https://api.iconify.design/material-symbols:groups.svg?color=%23F97316" // Orange
    },
    {
      name: "Communication",
      icon: "https://api.iconify.design/material-symbols:chat-bubble.svg?color=%238B5CF6" // Purple
    },
    {
      name: "Problem Solving",
      icon: "https://api.iconify.design/material-symbols:lightbulb.svg?color=%2310B981" // Green
    },
    {
      name: "Time Management",
      icon: "https://api.iconify.design/material-symbols:schedule.svg?color=%230EA5E9" // Sky Blue
    },
    {
      name: "Adaptability",
      icon: "https://api.iconify.design/material-symbols:change-circle.svg?color=%23D946EF" // Magenta
    },
    {
      name: "Quick Learner",
      icon: "https://api.iconify.design/material-symbols:rocket-launch.svg?color=%23EF4444" // Red
    }
  ];

  // Render skill cards with actual images
  const renderSkillCards = (skills: Skill[]) => {
    return (
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {skills.map(skill => (
          <motion.div
            key={skill.name}
            variants={item}
            whileHover={{
              y: -5,
              scale: 1.05
            }}
            className="bg-card rounded-lg p-4 flex flex-col items-center justify-center border border-border hover:border-primary/50 transition-all duration-300"
          >
            <div className="w-12 h-12 mb-3 flex items-center justify-center">
              <img
                src={skill.icon}
                alt={`${skill.name} logo`}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-sm font-medium text-center">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    );
  };

  // Animation variants
  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  const item = {
    hidden: {
      opacity: 0,
      scale: 0.9
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="skills" ref={ref} className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={isInView ? {
              opacity: 1,
              y: 0
            } : {
              opacity: 0,
              y: 20
            }}
            transition={{
              duration: 0.5
            }}
            className="font-bold mb-4 text-6xl"
          >
            Skills
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={isInView ? {
              opacity: 1,
              y: 0
            } : {
              opacity: 0,
              y: 20
            }}
            transition={{
              duration: 0.5,
              delay: 0.1
            }}
          >
            My technical expertise and professional capabilities in the field of Electronics & Communication Engineering.
          </motion.p>
        </div>

        <div className="space-y-16">
          {/* Programming Languages */}
          <div>
            <motion.h3
              className="text-2xl font-bold mb-6 text-primary"
              initial={{
                opacity: 0,
                x: -20
              }}
              animate={isInView ? {
                opacity: 1,
                x: 0
              } : {
                opacity: 0,
                x: -20
              }}
              transition={{
                duration: 0.5
              }}
            >
              Programming Languages
            </motion.h3>
            {renderSkillCards(programmingLanguages)}
          </div>

          {/* Software & Tools */}
          <div>
            <motion.h3
              className="text-2xl font-bold mb-6 text-secondary"
              initial={{
                opacity: 0,
                x: -20
              }}
              animate={isInView ? {
                opacity: 1,
                x: 0
              } : {
                opacity: 0,
                x: -20
              }}
              transition={{
                duration: 0.5,
                delay: 0.1
              }}
            >
              Software & Tools
            </motion.h3>
            {renderSkillCards(tools)}
          </div>

          {/* Soft Skills */}
          <div>
            <motion.h3
              className="text-2xl font-bold mb-6 text-accent"
              initial={{
                opacity: 0,
                x: -20
              }}
              animate={isInView ? {
                opacity: 1,
                x: 0
              } : {
                opacity: 0,
                x: -20
              }}
              transition={{
                duration: 0.5,
                delay: 0.2
              }}
            >
              Soft Skills
            </motion.h3>
            {renderSkillCards(softSkills)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
