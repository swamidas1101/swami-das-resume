import { Mail, MapPin, Phone, Download, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero pt-20 md:pt-0">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 md:left-20 w-48 md:w-72 h-48 md:h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 md:right-20 w-64 md:w-96 h-64 md:h-96 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-300" />
        <div className="absolute top-1/2 left-1/3 w-48 md:w-64 h-48 md:h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Subtle pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-8 md:py-0">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
            {/* Profile Image */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-elevated relative">
                <img 
                  src={profilePhoto} 
                  alt="Ladi Swami Das" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative rings */}
              <div className="absolute -inset-3 rounded-full border-2 border-primary/10 animate-pulse" />
              <div className="absolute -inset-6 rounded-full border border-primary/5 hidden sm:block" />
              
              {/* Status badge on image */}
              <motion.div 
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-card shadow-card border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs md:text-sm font-medium text-foreground whitespace-nowrap">Available for work</span>
              </motion.div>
            </motion.div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Name */}
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="text-foreground">LADI </span>
                <span className="text-gradient">SWAMI DAS</span>
              </motion.h1>

              {/* Title */}
              <motion.p 
                className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 md:mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Senior Software Engineer / Full Stack Developer
              </motion.p>

              {/* Contact info */}
              <motion.div 
                className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-2 sm:gap-4 mb-6 md:mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <a 
                  href="tel:+918142129176" 
                  className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-mono text-xs sm:text-sm">+91-8142129176</span>
                </a>
                <a 
                  href="mailto:LSDAS1101@gmail.com" 
                  className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="font-mono text-xs sm:text-sm">LSDAS1101@gmail.com</span>
                </a>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs sm:text-sm">India</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Button size="lg" className="gap-2 shadow-glow text-sm md:text-base">
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
                <Button variant="outline" size="lg" className="gap-2 text-sm md:text-base" asChild>
                  <a 
                    href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="gap-2 text-sm md:text-base">
                  <Mail className="w-4 h-4" />
                  Get In Touch
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Experience highlights */}
          <motion.div 
            className="mt-12 md:mt-20 grid grid-cols-3 gap-3 md:gap-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="text-center glass rounded-xl md:rounded-2xl p-4 md:p-6">
              <div className="text-2xl md:text-4xl font-bold text-gradient mb-1">6+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center glass rounded-xl md:rounded-2xl p-4 md:p-6">
              <div className="text-2xl md:text-4xl font-bold text-gradient mb-1">10+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center glass rounded-xl md:rounded-2xl p-4 md:p-6">
              <div className="text-2xl md:text-4xl font-bold text-gradient mb-1">5+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Enterprise Clients</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="w-5 h-8 md:w-6 md:h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2 animate-bounce">
          <div className="w-1 h-1.5 md:h-2 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
