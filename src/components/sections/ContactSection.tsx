
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "@/components/ui/sonner";
import { 
  Linkedin, 
  Github, 
  Mail, 
  Phone, 
  MapPin,
  Send
} from "lucide-react";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const contactInfo = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/ahiraj-k",
      link: "https://linkedin.com/in/ahiraj-k",
      color: "text-[#0077B5]",
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "github.com/ahiraj-k",
      link: "https://github.com/ahiraj-k",
      color: "text-white",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "ahiraj.me@gmail.com",
      link: "mailto:ahiraj.me@gmail.com",
      color: "text-primary",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 8078030167",
      link: "tel:+918078030167",
      color: "text-accent",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Calicut, Kerala, India",
      link: "https://maps.google.com/?q=Calicut,Kerala,India",
      color: "text-secondary",
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    // Open email client with pre-filled email
    const mailtoLink = `mailto:ahiraj.me@gmail.com?subject=Contact from ${name}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailtoLink;
    
    toast.success("Opening email client...");
  };

  return (
    <section id="contact" ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-2xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Feel free to reach out for collaborations, opportunities, or just a friendly chat about electronics and technology.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <Card className="bg-card border-border p-6">
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className={`p-3 rounded-full bg-muted ${item.color}`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">{item.label}</p>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <Card className="bg-card border-border p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Input 
                      name="name"
                      placeholder="Your Name" 
                      required
                      className="border-border bg-muted/20 focus:border-primary" 
                    />
                  </div>
                  
                  <div>
                    <Input 
                      name="email"
                      type="email" 
                      placeholder="Your Email" 
                      required
                      className="border-border bg-muted/20 focus:border-primary" 
                    />
                  </div>
                  
                  <div>
                    <Textarea 
                      name="message"
                      placeholder="Your Message" 
                      required
                      className="min-h-32 border-border bg-muted/20 focus:border-primary" 
                    />
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground hover-glow"
                >
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
