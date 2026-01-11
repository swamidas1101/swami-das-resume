import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="contact" className="py-16 md:py-24 relative" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading text-2xl md:text-4xl">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto text-sm md:text-lg">
            Ready to collaborate on your next enterprise project
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="glass-strong rounded-2xl md:rounded-3xl p-5 md:p-8 lg:p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute -top-20 -right-20 w-48 md:w-64 h-48 md:h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-48 md:w-64 h-48 md:h-64 bg-primary/5 rounded-full blur-3xl" />

            <div className="relative grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Contact Info */}
              <motion.div 
                className="space-y-6 md:space-y-8"
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Let's Connect</h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    I'm always interested in discussing new opportunities, challenging projects, 
                    and innovative solutions in the enterprise software space.
                  </p>
                </div>

                <div className="space-y-4 md:space-y-6">
                  <a 
                    href="mailto:LSDAS1101@gmail.com"
                    className="flex items-center gap-3 md:gap-4 group"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-muted-foreground">Email</p>
                      <p className="font-medium group-hover:text-primary transition-colors text-sm md:text-base">
                        LSDAS1101@gmail.com
                      </p>
                    </div>
                  </a>

                  <a 
                    href="tel:+918142129176"
                    className="flex items-center gap-3 md:gap-4 group"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium group-hover:text-primary transition-colors text-sm md:text-base">
                        +91-8142129176
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-muted-foreground">Location</p>
                      <p className="font-medium text-sm md:text-base">India</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div 
                className="flex flex-col justify-center items-center text-center md:items-start md:text-left space-y-4 md:space-y-6"
                initial={{ opacity: 0, x: 20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow animate-pulse-glow">
                  <Send className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground" />
                </div>
                <h4 className="text-lg md:text-xl font-semibold">Ready to start a conversation?</h4>
                <p className="text-muted-foreground text-sm md:text-base">
                  Whether you have a project in mind or just want to chat about technology, 
                  I'd love to hear from you.
                </p>
                <Button size="lg" className="gap-2 text-sm md:text-base">
                  <Mail className="w-4 h-4" />
                  Send Message
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
