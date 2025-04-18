
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { CodeIcon, BrainCircuit, GraduationCap, Mail } from "lucide-react";

const QuickLinksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const links = [
    {
      title: "Projects",
      icon: <CodeIcon className="h-8 w-8 text-primary" />,
      description: "See my latest work",
      to: "/projects",
    },
    {
      title: "Skills",
      icon: <BrainCircuit className="h-8 w-8 text-primary" />,
      description: "My technical expertise",
      to: "/skills",
    },
    {
      title: "Experience",
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      description: "My journey so far",
      to: "/experience",
    },
    {
      title: "Contact Me",
      icon: <Mail className="h-8 w-8 text-primary" />,
      description: "Get in touch with me",
      to: "/contact",
    },
  ];

  // Animation variants
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
    <section id="quick-links" ref={ref} className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {links.map((link, index) => (
            <motion.div
              key={link.title}
              variants={item}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="relative overflow-hidden"
            >
              <Link
                to={link.to}
                className="cursor-pointer"
              >
                <div 
                  className="h-44 rounded-2xl bg-card p-6 flex flex-col justify-center items-center text-center border border-border transition-all duration-300"
                >
                  <div className="mb-4">{link.icon}</div>
                  <h3 className="text-xl font-bold mb-1">{link.title}</h3>
                  <p className="text-sm text-muted-foreground">{link.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default QuickLinksSection;
