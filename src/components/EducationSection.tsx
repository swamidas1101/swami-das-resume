import { GraduationCap, Award, Languages } from "lucide-react";
import { motion } from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const EducationSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const languages = ["English", "Hindi", "Telugu", "Oriya"];

  return (
    <section id="education" className="py-16 md:py-24 relative bg-secondary/30" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading text-2xl md:text-4xl">
            Education & <span className="text-gradient">Languages</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4 md:gap-8">
          {/* Education Card */}
          <motion.div 
            className="glass-strong rounded-xl md:rounded-2xl p-5 md:p-8 hover:shadow-glow transition-all duration-500"
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-primary flex items-center justify-center mb-4 md:mb-6 shadow-glow">
              <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-1.5 md:mb-2">Master of Computer Applications</h3>
            <p className="text-primary font-medium mb-1 text-sm md:text-base">MCA</p>
            <p className="text-muted-foreground mb-3 md:mb-4 text-sm md:text-base">BPUT, Gunupur, Odisha</p>
            <div className="flex items-center gap-2 md:gap-3">
              <Award className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              <span className="text-base md:text-lg font-semibold">CGPA: 8.9</span>
            </div>
          </motion.div>

          {/* Languages Card */}
          <motion.div 
            className="glass-strong rounded-xl md:rounded-2xl p-5 md:p-8 hover:shadow-glow transition-all duration-500"
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-primary flex items-center justify-center mb-4 md:mb-6 shadow-glow">
              <Languages className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Languages</h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {languages.map((lang, index) => (
                <motion.span 
                  key={lang}
                  className="px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl bg-secondary text-foreground font-medium border border-border hover:border-primary/50 transition-colors text-sm md:text-base"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  {lang}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
