import { Target, Briefcase, Code2, Server, Database, Cloud } from "lucide-react";
import { motion } from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const highlights = [
    {
      icon: Code2,
      title: "Frontend Expert",
      description: "Strong expertise in Angular (1.x to 19) and modern web technologies"
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Hands-on experience with Java, Spring Boot, and RESTful APIs"
    },
    {
      icon: Briefcase,
      title: "Financial Systems",
      description: "Extensive experience in banking, treasury, and investment platforms"
    },
    {
      icon: Database,
      title: "Data Systems",
      description: "Experience with ETL reporting and transaction-based systems"
    },
    {
      icon: Cloud,
      title: "Cloud Native",
      description: "Red Hat Linux and OpenShift-based deployments"
    },
    {
      icon: Target,
      title: "Agile Delivery",
      description: "Proven experience in Agile/Scrum delivery models"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 relative" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading text-2xl md:text-4xl">
            <span className="text-gradient">About</span> Me
          </h2>
          <p className="section-subheading max-w-2xl mx-auto text-sm md:text-lg">
            Building enterprise-grade applications with precision and passion
          </p>
        </motion.div>

        {/* Career Objective */}
        <motion.div 
          className="max-w-4xl mx-auto mb-10 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="glass-strong rounded-xl md:rounded-2xl p-5 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center">
                  <Target className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold">Career Objective</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                To work in a challenging and large-scale enterprise software environment where I can 
                effectively utilize my experience in Angular-based frontend systems, Java and Spring Boot 
                backend services, financial and data-intensive platforms, and cloud-native deployments, 
                while contributing to scalable, reliable, and high-performance applications.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {highlights.map((item) => (
            <motion.div 
              key={item.title}
              variants={itemVariants}
              className="glass rounded-xl p-4 md:p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <h3 className="text-base md:text-lg font-semibold mb-1.5 md:mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-xs md:text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
