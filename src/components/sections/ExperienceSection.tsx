import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BriefcaseIcon, GraduationCap } from "lucide-react";

interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: "education" | "work";
}

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const experiences: TimelineItem[] = [
    {
      id: 1,
      title: "Your Next Achievement",
      organization: "Institution Name",
      period: "Start Date - End Date",
      description: "Add your description here. This could be about your achievements, responsibilities, or key learnings during this period.",
      type: "education",
    },
    {
      id: 2,
      title: "B.Tech in Electronics and Communication Engineering",
      organization: "Rajiv Gandhi Institute of Technology (RIT)",
      period: "2023 - Present",
      description: "Specializing in digital electronics, communication systems, and VLSI. Developed expertise in circuit simulation, HDL design, and embedded C programming. Demonstrated strong teamwork, problem‑solving, and communication skills.",
      type: "education",
    },
    {
      id: 3,
      title: "Higher Secondary Education",
      organization: "Sevamandir Post Basic HSS",
      period: "2020 - 2022",
      description: "Completed Higher Secondary Education with a focus on Computer Science, gaining a solid foundation in programming, mathematics, and science, and preparing for further studies in Electronics and Communication Engineering.",
      type: "education",
    }
  ];

  return (
    <section id="experience" ref={ref} className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Experience
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-2xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            My educational background and professional journey in the field of Electronics & Communication Engineering.
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border"></div>

          <div className="relative z-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`mb-16 flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                } relative`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`w-full md:w-6/12 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div
                    className={`p-8 rounded-lg border border-border bg-card hover:scale-105 transition-all duration-300 ${
                      exp.type === "education" ? "hover:border-secondary" : "hover:border-accent"
                    }`}
                  >
                    <div className="flex items-center mb-4">
                      <div
                        className={`p-3 rounded-md mr-4 ${
                          exp.type === "education"
                            ? "bg-secondary/10 text-secondary"
                            : "bg-accent/10 text-accent"
                        }`}
                      >
                        {exp.type === "education" ? (
                          <GraduationCap size={24} />
                        ) : (
                          <BriefcaseIcon size={24} />
                        )}
                      </div>
                      <span className="text-base font-medium text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      {exp.organization}
                    </p>
                    <p className="text-base">{exp.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 ${
                    exp.type === "education"
                      ? "border-secondary bg-background"
                      : "border-accent bg-background"
                  }`}
                ></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
