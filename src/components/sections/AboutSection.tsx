
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LinkedinIcon, FileText } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" ref={ref} className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="font-bold mb-6 text-5xl">About Me</h2>
            
            <p className="text-muted-foreground mb-6">
              Hi there! I'm AHIRAJ K, an Electronics & Communication Engineering student passionate about technology and innovation. 
              I specialize in designing and developing electronic systems and solutions to real-world problems.
            </p>
            
            <p className="text-muted-foreground mb-8">
              With a strong foundation in both hardware and software, I enjoy exploring the intersection of these fields to create meaningful projects. 
              I'm constantly learning and expanding my skills in embedded systems, circuit design, and signal processing.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:translate-y-0"
                onClick={() => {
                  window.open('https://your-resume-link.com', '_blank');

                }}
              >
                <FileText className="mr-2 h-4 w-4" />
                Resume
              </Button>
              
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:translate-y-0"
                onClick={() => window.open('https://www.linkedin.com/in/ahiraj-k', '_blank')}
              >
                <LinkedinIcon className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <motion.div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-primary" initial={{
            scale: 0.8,
            opacity: 0
          }} animate={isInView ? {
            scale: 1,
            opacity: 1
          } : {
            scale: 0.8,
            opacity: 0
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }}>
                <img 
                  src="https://github.com/AHIRAJ-K/Portfolio/blob/main/Images/PROFILE.jpg?raw=true" // <-- replace with actual image path
                  alt="Ahiraj K" 
                  className="w-full h-full object-cover" 
                />

              <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
