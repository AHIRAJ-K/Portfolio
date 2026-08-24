import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const projects = [
    {
      id: 1,
      title: "4-Bit Digital Lock System",
      description: "Designed a 4-bit digital lock in Verilog HDL with unlock, alarm, and reset states. Implemented using FSM logic and verified functionality with a Verilog testbench in Xilinx Vivado.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      tags: ["Verilog", "Xilinx Vivado", "FSM", "HDL"],
      link: "https://github.com/AHIRAJ-K/digital-lock-verilog",
    },
    {
      id: 2,
      title: "Data Transfer Using LiFi",
      description: "Developed a light-based data communication system using LiFi technology. Transmits data through modulated light signals and receives it via a photodetector, demonstrating optical wireless communication.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      tags: ["Embedded C", "Arduino", "LiFi", "Optical Communication"],
      link: "https://github.com/AHIRAJ-K/data-transfer-using-lifi",
    },
    {
      id: 3,
      title: "Laser Security System",
      description: "Built a laser-based intruder detection system using an 8051 microcontroller. The system triggers a buzzer and LED alert when the laser beam path is interrupted.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      tags: ["8051 Microcontroller", "Embedded C", "Keil uVision"],
      link: "#",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" ref={ref} className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Projects
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-2xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hardware and embedded systems projects — designed, built, and tested.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="bg-card rounded-xl overflow-hidden border border-border hover-glow transition-all duration-300 flex flex-col h-full"
              whileHover={{ y: -10 }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  size="sm"
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  onClick={() => {
                    if (project.link === "#") {
                      alert("GitHub link coming soon!");
                    } else {
                      window.open(project.link, "_blank");
                    }
                  }}
                >
                  View Project
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;