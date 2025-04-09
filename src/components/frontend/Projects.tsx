"use client";
import React from "react";
import { FaLaptopCode, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";
import { Tab } from "@headlessui/react";
import { ProjectsData } from "@/constants/Projects";
import { FreelanceProjectsData } from "@/constants/FreelanceProjects";
import ProjectCard from "../ProjectCard";

// Update to match your actual data structure
type ProjectDataType = {
  title: string;
  description: string;
  tech: string;
  link: string;
  // Add any other fields that exist in your actual data
};

const ProjectsSection = () => {
  // Create animated stars like in previous components
  const generateStars = (count:any) => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2
    }));
  };

  const smallStars = generateStars(50);
  const mediumStars = generateStars(25);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const projectVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const galaxyVariants = {
    initial: { opacity: 0.3, scale: 1, rotate: 0 },
    animate: {
      opacity: [0.3, 0.5, 0.3],
      scale: [1, 1.05, 1],
      rotate: [0, 5, 0],
      transition: { duration: 20, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const nebulaVariants = {
    initial: { opacity: 0.2, scale: 1 },
    animate: {
      opacity: [0.2, 0.4, 0.2],
      scale: [1, 1.1, 1],
      transition: { duration: 15, repeat: Infinity, ease: "easeInOut" }
    }
  };

  // Convert from ProjectDataType to ProjectCard props format
  const formatProjectData = (project: ProjectDataType, type: string) => {
    return {
      title: project.title,
      description: project.description,
      image: "/assets/project-placeholder.jpg", // Use a default or extract from your data
      technologies: project.tech.split(",").map(item => item.trim()), // Convert tech string to array
      liveUrl: project.link,
      githubUrl: "", // Add if available in your data
      type: type
    };
  };

  return (
    <section 
      className="relative py-20 overflow-hidden bg-gradient-to-b from-black via-purple-950 to-black text-blue-50" 
      id="projects"
    >
      {/* Space background with stars */}
      <div className="absolute inset-0 bg-black overflow-hidden">
        {/* Distant stars layer */}
        {smallStars.map((star) => (
          <div
            key={`small-${star.id}`}
            className="absolute rounded-full bg-white"
            style={{
              width: `${star.size / 2}px`,
              height: `${star.size / 2}px`,
              top: `${star.y}%`,
              left: `${star.x}%`,
              opacity: 0.6,
              animation: `twinkle ${star.duration}s infinite alternate ${star.delay}s`
            }}
          />
        ))}
        
        {/* Medium stars layer */}
        {mediumStars.map((star) => (
          <div
            key={`medium-${star.id}`}
            className="absolute rounded-full bg-white"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${star.y}%`,
              left: `${star.x}%`,
              opacity: 0.8,
              animation: `twinkle ${star.duration}s infinite alternate ${star.delay}s`,
              boxShadow: `0 0 ${star.size / 2}px rgba(255, 255, 255, 0.8)`
            }}
          />
        ))}
      </div>

      {/* Spiral galaxy effect */}
      <motion.div
        className="absolute opacity-10 top-0 left-0 w-full h-full bg-[url('/assets/galaxy-spiral.png')] bg-no-repeat bg-center bg-contain pointer-events-none"
        variants={galaxyVariants}
        initial="initial"
        animate="animate"
      />

      {/* Colorful space nebulas */}
      <motion.div
        className="absolute -top-1/4 right-1/3 w-full h-full rounded-full bg-blue-600 blur-3xl opacity-10"
        variants={nebulaVariants}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="absolute bottom-1/4 -left-1/4 w-full h-full rounded-full bg-purple-600 blur-3xl opacity-10"
        variants={nebulaVariants}
        initial="initial"
        animate="animate"
        style={{ animationDelay: "-5s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Cosmic Portfolio
        </motion.h2>

        <Tab.Group>
          <Tab.List className="flex space-x-4 mb-12 justify-center">
            <Tab className={({ selected }) => 
              `px-6 py-3 rounded-full transition-all duration-300 outline-none ${
                selected 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30' 
                  : 'bg-black/30 text-blue-300 border border-blue-500/20 hover:bg-blue-900/20'
              }`
            }>
              <div className="flex items-center gap-2">
                <FaLaptopCode className="text-blue-300" />
                <span>Personal Projects</span>
              </div>
            </Tab>
            <Tab className={({ selected }) => 
              `px-6 py-3 rounded-full transition-all duration-300 outline-none ${
                selected 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/30' 
                  : 'bg-black/30 text-purple-300 border border-purple-500/20 hover:bg-purple-900/20'
              }`
            }>
              <div className="flex items-center gap-2">
                <FaBriefcase className="text-purple-300" />
                <span>Freelance Projects</span>
              </div>
            </Tab>
          </Tab.List>

          <Tab.Panels className="mt-4">
            {/* Personal Projects Panel */}
            <Tab.Panel>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="space-y-8"
              >
                <motion.div 
                  className="flex items-center gap-3 mb-8"
                  variants={titleVariants}
                >
                  <div className="p-3 rounded-lg bg-black/30 border border-blue-500/30 backdrop-blur-sm">
                    <FaLaptopCode className="text-blue-400" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                    Personal Projects
                  </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {ProjectsData.map((project: ProjectDataType, index: number) => (
                    <motion.div
                      key={`project-${index}`}
                      custom={index}
                      variants={projectVariants}
                    >
                      <ProjectCard {...formatProjectData(project, "personal")} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Tab.Panel>

            {/* Freelance Projects Panel */}
            <Tab.Panel>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="space-y-8"
              >
                <motion.div 
                  className="flex items-center gap-3 mb-8"
                  variants={titleVariants}
                >
                  <div className="p-3 rounded-lg bg-black/30 border border-pink-500/30 backdrop-blur-sm">
                    <FaBriefcase className="text-pink-400" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                    Freelance Projects
                  </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {FreelanceProjectsData.map((project: ProjectDataType, index: number) => (
                    <motion.div
                      key={`freelance-${index}`}
                      custom={index}
                      variants={projectVariants}
                    >
                      <ProjectCard {...formatProjectData(project, "freelance")} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
        
        {/* Constellation connecting dots in the lower portion */}
        <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden opacity-40 pointer-events-none">
          <svg width="100%" height="100%" className="absolute inset-0">
            <g>
              {Array.from({ length: 8 }).map((_, i) => {
                const x1 = `${10 + i * 10}%`;
                const y1 = `${50 + Math.sin(i) * 20}%`;
                const x2 = `${20 + i * 10}%`;
                const y2 = `${50 + Math.cos(i) * 20}%`;
                return (
                  <line 
                    key={i} 
                    x1={x1} y1={y1} x2={x2} y2={y2} 
                    stroke="rgba(150, 180, 255, 0.5)" 
                    strokeWidth="0.5"
                  />
                );
              })}
              {Array.from({ length: 9 }).map((_, i) => {
                const x = `${10 + i * 10}%`;
                const y = `${50 + (i % 2 === 0 ? Math.sin(i) : Math.cos(i)) * 20}%`;
                return (
                  <circle 
                    key={i} 
                    cx={x} cy={y} r="2" 
                    fill="white"
                    opacity={i % 3 === 0 ? "0.9" : "0.5"}
                  />
                );
              })}
            </g>
          </svg>
        </div>
      </div>

      {/* Style definitions for star animations */}
      <style jsx>{`
        @keyframes twinkle {
          0% { opacity: 0.3; }
          100% { opacity: 0.8; }
        }
        
        @keyframes twinkleBright {
          0% { opacity: 0.6; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;