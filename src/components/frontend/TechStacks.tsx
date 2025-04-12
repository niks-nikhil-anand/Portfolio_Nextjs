"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Code, Server, Database, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaCode } from "react-icons/fa";        // Languages
import { FiCpu } from "react-icons/fi";        // Frameworks
import { GiBookshelf } from "react-icons/gi";  // Libraries
import { FiTool } from "react-icons/fi";       // Tools
import { TbBoxMultiple } from "react-icons/tb";

type Star = {
  id: number;
  size: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
};

type TechCategory = {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: keyof typeof colorMap;
  technologies: string[];
};

const generateStars = (count: number): Star[] => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 2,
  }));
};

const smallStars = generateStars(100);
const mediumStars = generateStars(50);
const largeStars = generateStars(20);

const techCategories: TechCategory[] = [
  {
    id: "languages",
    name: "Languages",
    icon: <FaCode size={20} />,
    color: "cyan",
    technologies: ["TypeScript", "Python"],
  },
  {
    id: "frameworks",
    name: "Frameworks",
    icon: <FiCpu size={20} />,
    color: "purple",
    technologies: ["Next.js", "Express", "Django", "Tailwind"],
  },
  {
    id: "libraries",
    name: "Libraries",
    icon: <GiBookshelf size={20} />,
    color: "pink",
    technologies: ["React", "Redux", "Framer Motion", "GraphQL"],
  },
  {
    id: "tools",
    name: "Tools",
    icon: <FiTool size={20} />,
    color: "green",
    technologies: ["Node.js", "Git", "Docker", "Vercel", "AWS", "Jest", "Cypress"],
  },
  {
    id: "misc",
    name: "Miscellaneous",
    icon: <TbBoxMultiple size={20} />,
    color: "amber",
    technologies: ["MongoDB", "PostgreSQL", "Firebase", "Redis", "Supabase"],
  },
];

const techBadgeVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0, y: 10 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.05,
      duration: 0.4,
      type: "spring",
      stiffness: 150,
    },
  }),
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Card animation variants
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      type: "spring",
      stiffness: 100
    }
  })
};

const galaxyVariants: Variants = {
  initial: { opacity: 0.3, scale: 1, rotate: 0 },
  animate: {
    opacity: [0.3, 0.5, 0.3],
    scale: [1, 1.05, 1],
    rotate: [0, 5, 0],
    transition: { duration: 20, repeat: Infinity, ease: "easeInOut" },
  },
};

const nebulaVariants: Variants = {
  initial: { opacity: 0.2, scale: 1 },
  animate: {
    opacity: [0.2, 0.4, 0.2],
    scale: [1, 1.1, 1],
    transition: { duration: 15, repeat: Infinity, ease: "easeInOut" },
  },
};

const colorMap = {
  blue: {
    border: "border-blue-500/40",
    bg: "bg-blue-950/30",
    text: "text-blue-200",
    hover: "hover:bg-blue-900/50",
    icon: "text-blue-400",
    title: "text-blue-300",
    glow: "shadow-blue-500/30",
    gradient: "from-blue-600 to-blue-400",
  },
  cyan: {
    border: "border-cyan-500/40",
    bg: "bg-cyan-950/30",
    text: "text-cyan-200",
    hover: "hover:bg-cyan-900/50",
    icon: "text-cyan-400",
    title: "text-cyan-300",
    glow: "shadow-cyan-500/30",
    gradient: "from-cyan-600 to-cyan-400",
  },
  purple: {
    border: "border-purple-500/40",
    bg: "bg-purple-950/30",
    text: "text-purple-200",
    hover: "hover:bg-purple-900/50",
    icon: "text-purple-400",
    title: "text-purple-300",
    glow: "shadow-purple-500/30",
    gradient: "from-purple-600 to-purple-400",
  },
  pink: {
    border: "border-pink-500/40",
    bg: "bg-pink-950/30",
    text: "text-pink-200",
    hover: "hover:bg-pink-900/50",
    icon: "text-pink-400",
    title: "text-pink-300",
    glow: "shadow-pink-500/30",
    gradient: "from-pink-600 to-pink-400",
  },
  green: {
    border: "border-green-500/40",
    bg: "bg-green-950/30",
    text: "text-green-200",
    hover: "hover:bg-green-900/50",
    icon: "text-green-400",
    title: "text-green-300",
    glow: "shadow-green-500/30",
    gradient: "from-green-600 to-green-400",
  },
  teal: {
    border: "border-teal-500/40",
    bg: "bg-teal-950/30",
    text: "text-teal-200",
    hover: "hover:bg-teal-900/50",
    icon: "text-teal-400",
    title: "text-teal-300",
    glow: "shadow-teal-500/30",
    gradient: "from-teal-600 to-teal-400",
  },
  amber: {
    border: "border-amber-500/40",
    bg: "bg-amber-950/30",
    text: "text-amber-200",
    hover: "hover:bg-amber-900/50",
    icon: "text-amber-400",
    title: "text-amber-300",
    glow: "shadow-amber-500/30",
    gradient: "from-amber-600 to-amber-400",
  },
};

const TechStack: React.FC = () => {
  // Reusable card component for both mobile and desktop
  const TechCard = ({ category, index }: { category: TechCategory, index: number }) => {
    const colorClasses = colorMap[category.color];
    
    return (
      <motion.div 
        key={category.id}
        custom={index}
        variants={cardVariants}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="backdrop-blur-md bg-black/40 border border-white/10 rounded-xl overflow-hidden w-full"
      >
        <div className={`h-1 w-full bg-gradient-to-r ${colorClasses.gradient}`}></div>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-5">
            <span className={`${colorClasses.icon} p-3 rounded-full bg-black/60 border ${colorClasses.border} shadow-lg ${colorClasses.glow}`}>
              {category.icon}
            </span>
            <span className={`${colorClasses.title} text-base font-bold uppercase tracking-wider`}>
              {category.name}
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            {category.technologies.map((tech, i) => (
              <motion.div key={tech} custom={i} variants={techBadgeVariants}>
                <Badge
                  variant="outline"
                  className={`px-4 py-2 ${colorClasses.border} ${colorClasses.bg} ${colorClasses.text} ${colorClasses.hover} shadow-md ${colorClasses.glow} transition-all duration-300 ease-in-out hover:scale-105`}
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  const DesktopView = () => (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {techCategories.map((category, index) => (
        <TechCard key={category.id} category={category} index={index} />
      ))}
    </motion.div>
  );

  const MobileView = () => (
    <motion.div
      className="flex flex-col gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {techCategories.map((category, index) => (
        <TechCard key={category.id} category={category} index={index} />
      ))}
    </motion.div>
  );

  return (
    <section className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-gray-950 via-purple-950/40 to-gray-950 text-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-black/90 overflow-hidden">
        {/* Enhanced starfield */}
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
              animation: `twinkle ${star.duration}s infinite alternate ${star.delay}s`,
            }}
          />
        ))}
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
              boxShadow: `0 0 ${star.size / 2}px rgba(255, 255, 255, 0.8)`,
            }}
          />
        ))}
        {largeStars.map((star) => (
          <div
            key={`large-${star.id}`}
            className="absolute rounded-full bg-white"
            style={{
              width: `${star.size + 1}px`,
              height: `${star.size + 1}px`,
              top: `${star.y}%`,
              left: `${star.x}%`,
              opacity: 1,
              animation: `twinkleBright ${star.duration * 1.5}s infinite alternate ${star.delay}s`,
              boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.9), 0 0 ${star.size * 4}px rgba(150, 200, 255, 0.5)`,
            }}
          />
        ))}
      </div>

      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Modern galaxy/spiral effect */}
        <motion.div
          className="absolute opacity-20 top-0 left-0 w-full h-full bg-[url('/assets/galaxy-spiral.png')] bg-no-repeat bg-center bg-contain pointer-events-none"
          variants={galaxyVariants}
          initial="initial"
          animate="animate"
        />
        
        {/* Enhanced nebula effects with gradients */}
        <motion.div
          className="absolute -top-1/4 right-1/4 w-full h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 blur-3xl opacity-15"
          variants={nebulaVariants}
          initial="initial"
          animate="animate"
        />
        <motion.div
          className="absolute top-1/2 -left-1/4 w-full h-full rounded-full bg-gradient-to-r from-purple-600 to-pink-400 blur-3xl opacity-15"
          variants={nebulaVariants}
          initial="initial"
          animate="animate"
          style={{ animationDelay: "-5s" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-3/4 h-3/4 rounded-full bg-gradient-to-r from-green-600 to-teal-400 blur-3xl opacity-10"
          variants={nebulaVariants}
          initial="initial"
          animate="animate"
          style={{ animationDelay: "-8s" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7, type: "spring" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Cosmic Tech Universe
          </h2>
          <p className="text-center text-gray-300 max-w-2xl mx-auto opacity-80 text-lg">
            Explore the constellation of technologies that power our digital galaxy
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="md:hidden">
            <MobileView />
          </div>
          <div className="hidden md:block">
            <DesktopView />
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0% {
            opacity: 0.3;
            transform: scale(0.9);
          }
          100% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }

        @keyframes twinkleBright {
          0% {
            opacity: 0.6;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>
    </section>
  );
};

export default TechStack;