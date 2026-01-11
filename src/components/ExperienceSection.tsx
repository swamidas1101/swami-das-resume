import { Building2, Calendar, Users, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";

interface Project {
  name: string;
  description: string;
  technologies: string[];
  teamSize?: number;
  responsibilities: string[];
}

interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  description: string;
  projects: Project[];
}

const experiences: Experience[] = [
  {
    company: "Virtusa Consultancy Services",
    location: "Hyderabad",
    role: "Senior Software Engineer / Full Stack Developer",
    period: "October 2021 – Present",
    description: "Worked on mission-critical banking and financial platforms where data accuracy, audit compliance, performance, and reliability are key system requirements.",
    projects: [
      {
        name: "CDA – Common Data Acquisition",
        description: "Centralized enterprise platform for ETL teams and operational users, providing unified interface for data acquisition, reconciliation, reporting, and monitoring.",
        technologies: ["Angular 19", "Java", "Spring Boot", "REST APIs", "MySQL", "MongoDB", "Red Hat OpenShift"],
        teamSize: 8,
        responsibilities: [
          "Designed and developed Java Spring Boot backend services for reporting and transaction modules",
          "Implemented REST APIs consumed by Angular dashboards and reports",
          "Developed backend logic for ETL report aggregation, validation, and reconciliation",
          "Worked on bulk upload workflows with validation, error handling, and audit tracking",
          "Supported deployment and configuration activities using Red Hat OpenShift"
        ]
      },
      {
        name: "MOPO – Money Position",
        description: "Financial system used to monitor and manage money positions across cities, supporting intra-city and inter-city transactions for liquidity management.",
        technologies: ["Angular 19", "Java", "Spring Boot", "REST APIs", "MySQL"],
        teamSize: 6,
        responsibilities: [
          "Developed backend services using Java and Spring Boot",
          "Implemented business logic for money position calculation and validation",
          "Designed REST APIs for transaction and reporting modules",
          "Worked extensively on report generation with focus on accuracy and performance"
        ]
      },
      {
        name: "TIMS – Treasury & Investment Management System",
        description: "Enterprise platform supporting treasury operations, investment tracking, forecasting, and transaction updates for Citi Bank.",
        technologies: ["Angular 11", "Bootstrap", "Ant Design", "HTML", "CSS", "SQL Server"],
        teamSize: 16,
        responsibilities: [
          "Developed Angular UI components for treasury and investment workflows",
          "Converted complex wireframes into reusable and maintainable UI modules",
          "Integrated REST APIs for real-time and analytical financial data",
          "Ensured responsive design and cross-browser compatibility"
        ]
      }
    ]
  },
  {
    company: "Autocon India Private Limited",
    location: "Kochi",
    role: "Software Engineer",
    period: "July 2020 – September 2021",
    description: "Worked on enterprise and banking-related web applications with a focus on Angular-based frontend development and API integration.",
    projects: [
      {
        name: "BANCA – Mashreq Bank (Dubai)",
        description: "Role-based enterprise application acting as integration platform between Mashreq Bank and insurance providers with strict access control.",
        technologies: ["Angular", "Bootstrap", "Ant Design", "REST APIs"],
        responsibilities: [
          "Developed Angular UI modules for multiple user roles",
          "Implemented responsive layouts using Bootstrap and Ant Design",
          "Integrated REST APIs for secure data exchange"
        ]
      },
      {
        name: "TPA Client (Automobile Domain)",
        description: "Internal enterprise application for managing automobile master data including manufacturers, dealers, models, variants, and body parts.",
        technologies: ["Angular", "Bootstrap", "REST APIs"],
        responsibilities: [
          "Developed Angular UI screens based on business requirements",
          "Implemented responsive layouts using Bootstrap",
          "Integrated REST APIs for CRUD operations"
        ]
      }
    ]
  },
  {
    company: "Splenta Technologies",
    location: "Bangalore (Client: Geojit Technologies, Kochi)",
    role: "UI Developer",
    period: "March 2019 – June 2020",
    description: "Worked at client location as a UI Developer while being on Splenta Technologies payroll.",
    projects: [
      {
        name: "SPICE – Backbone of Geojit Financial Systems",
        description: "Large back-office system for trading operations, depository services, risk management, insurance, accounts, and client-net modules.",
        technologies: ["Angular", "jQuery", "REST APIs"],
        responsibilities: [
          "Developed Angular and jQuery-based UI screens for back-office operations",
          "Worked on trading, risk management, and depository modules",
          "Integrated REST APIs for financial data visualization"
        ]
      },
      {
        name: "SMARTFOLIOS",
        description: "Investment platform providing direct equity investment with flexible entry/exit, no lock-in period, and portfolio reshuffling.",
        technologies: ["Angular", "Bootstrap", "JavaScript", "jQuery"],
        responsibilities: [
          "Developed responsive UI dashboards using Angular and Bootstrap",
          "Implemented client-side data binding using JavaScript and jQuery"
        ]
      },
      {
        name: "LIME – Mobile Application",
        description: "Hybrid mobile application for employee communication, announcements, events, contests, and internal engagement.",
        technologies: ["Angular", "Cordova"],
        responsibilities: [
          "Developed mobile UI components using Angular",
          "Integrated REST APIs for dynamic content",
          "Built APKs using Cordova plugins"
        ]
      }
    ]
  }
];

const ExperienceSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.05 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <section id="experience" className="py-16 md:py-24 relative" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading text-2xl md:text-4xl">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto text-sm md:text-lg">
            Building enterprise solutions across banking, finance, and technology sectors
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div 
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {experiences.map((exp, expIndex) => (
            <motion.div 
              key={exp.company} 
              className="relative pl-6 md:pl-8 pb-8 md:pb-12 last:pb-0"
              variants={itemVariants}
            >
              {/* Timeline line */}
              {expIndex !== experiences.length - 1 && (
                <div className="absolute left-[5px] top-3 bottom-0 w-[2px] bg-border" />
              )}
              
              {/* Timeline dot */}
              <div className="timeline-dot absolute left-0 top-1.5" />

              {/* Company Card */}
              <div className="glass-strong rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 mb-4 md:mb-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 md:gap-4 mb-3 md:mb-4">
                  <div>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground">
                      {exp.company}
                    </h3>
                    <p className="text-primary font-medium text-sm md:text-base">{exp.role}</p>
                  </div>
                  <div className="flex flex-row sm:flex-col items-start sm:items-end gap-2 sm:gap-1 text-xs md:text-sm">
                    <div className="flex items-center gap-1.5 md:gap-2 text-muted-foreground">
                      <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-2 text-muted-foreground">
                      <Building2 className="w-3 h-3 md:w-4 md:h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm md:text-base">{exp.description}</p>
              </div>

              {/* Projects */}
              <div className="space-y-3 md:space-y-4 ml-0 md:ml-4">
                {exp.projects.map((project) => (
                  <motion.div 
                    key={project.name}
                    className="glass rounded-lg md:rounded-xl p-4 md:p-6 border-l-2 border-primary/50 hover:border-primary transition-colors"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 md:gap-3 mb-2 md:mb-3">
                      <h4 className="text-base md:text-lg font-semibold">{project.name}</h4>
                      {project.teamSize && (
                        <div className="flex items-center gap-1 text-xs md:text-sm text-muted-foreground">
                          <Users className="w-3 h-3 md:w-4 md:h-4" />
                          <span>Team: {project.teamSize}</span>
                        </div>
                      )}
                    </div>
                    <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4">{project.description}</p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="skill-badge text-[10px] md:text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-1.5 md:space-y-2">
                      {project.responsibilities.slice(0, 3).map((resp, i) => (
                        <li key={i} className="flex items-start gap-1.5 md:gap-2 text-xs md:text-sm text-muted-foreground">
                          <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-primary shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
