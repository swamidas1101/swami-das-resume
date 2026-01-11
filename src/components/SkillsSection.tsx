import { Code, Server, Database, Settings, Smartphone, Brain, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const SkillsSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.05 });

  const currentlyLearning = [
    {
      icon: Brain,
      title: "Python & GenAI",
      skills: [
        "Python",
        "LangChain",
        "LlamaIndex",
        "OpenAI API",
        "Hugging Face",
        "Transformers",
        "PyTorch",
        "TensorFlow"
      ]
    },
    {
      icon: Sparkles,
      title: "Agentic AI",
      skills: [
        "AutoGen",
        "CrewAI",
        "LangGraph",
        "AgentGPT",
        "Semantic Kernel",
        "RAG Pipelines",
        "Vector Databases",
        "Prompt Engineering"
      ]
    }
  ];

  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Technologies",
      skills: [
        "Angular (1.x - 19)",
        "React",
        "React Native",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "SCSS",
        "Tailwind CSS",
        "Bootstrap",
        "Ant Design",
        "NG-Zorro-Antd",
        "AG Grid",
        "jQuery",
        "AJAX",
        "JSON"
      ]
    },
    {
      icon: Server,
      title: "Backend Technologies",
      skills: [
        "Java (JDK 8/11/17)",
        "Spring Boot",
        "Spring MVC",
        "RESTful Web Services",
        "Node.js"
      ]
    },
    {
      icon: Database,
      title: "Databases",
      skills: [
        "MySQL",
        "SQL Server",
        "MongoDB"
      ]
    },
    {
      icon: Settings,
      title: "DevOps & Tools",
      skills: [
        "Red Hat Enterprise Linux",
        "Red Hat OpenShift",
        "Docker",
        "CI/CD",
        "Git",
        "Bitbucket",
        "SVN",
        "JIRA",
        "Postman",
        "VS Code",
        "Bower",
        "Gulp",
        "Yarn"
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: [
        "Apache Cordova",
        "Ionic Framework",
        "React Native"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
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
    <section id="skills" className="py-16 md:py-24 relative bg-secondary/30" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-60 md:w-80 h-60 md:h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-60 md:w-80 h-60 md:h-80 bg-accent/10 rounded-full blur-3xl" />
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
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto text-sm md:text-lg">
            A comprehensive toolkit for building enterprise applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              variants={itemVariants}
              className={`glass-strong rounded-xl md:rounded-2xl p-4 md:p-8 hover:shadow-glow transition-all duration-500 ${
                index === skillCategories.length - 1 && skillCategories.length % 2 !== 0 
                  ? 'sm:col-span-2 sm:max-w-xl sm:mx-auto' 
                  : ''
              }`}
            >
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                  <category.icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="skill-badge text-xs md:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Currently Learning Section */}
        <motion.div 
          className="mt-10 md:mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-6 md:mb-10">
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              Currently <span className="text-gradient">Learning</span>
            </h3>
            <p className="text-muted-foreground text-sm md:text-base">Expanding my expertise in AI and automation</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            {currentlyLearning.map((category, index) => (
              <motion.div 
                key={category.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="glass-strong rounded-xl md:rounded-2xl p-4 md:p-8 border-2 border-dashed border-primary/30 hover:border-primary/50 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-gradient-primary text-primary-foreground text-[10px] md:text-xs font-semibold px-2 md:px-3 py-1 rounded-bl-lg">
                  Learning
                </div>
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 mt-2">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                    <category.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-2 md:px-3 py-1 md:py-1.5 text-xs md:text-sm font-medium rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-700 border border-purple-200 hover:border-purple-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
