"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Code, Server, Database, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TechStack = () => {
  // Create animated stars just like in HeroSection
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
  const largeStars = generateStars(10);

  const techCategories = [
    {
      id: "frontend",
      name: "Frontend",
      icon: <Code size={18} className="text-blue-400" />,
      color: "blue",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion", "Redux"]
    },
    {
      id: "backend",
      name: "Backend",
      icon: <Server size={18} className="text-purple-400" />,
      color: "purple",
      technologies: ["Node.js", "Express", "Python", "Django", "GraphQL"]
    },
    {
      id: "database",
      name: "Database",
      icon: <Database size={18} className="text-pink-400" />,
      color: "pink",
      technologies: ["MongoDB", "PostgreSQL", "Firebase", "Redis", "Supabase"]
    },
    {
      id: "tools",
      name: "Tools",
      icon: <Wrench size={18} className="text-teal-400" />,
      color: "teal",
      technologies: ["Git", "Docker", "Vercel", "AWS", "Jest", "Cypress"]
    }
  ];

  const techBadgeVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.3,
      },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
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

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        border: "border-blue-500/40",
        bg: "bg-blue-950/30",
        text: "text-blue-200",
        hover: "hover:bg-blue-900/50",
        icon: "text-blue-400",
        title: "text-blue-300",
        glow: "shadow-blue-500/30"
      },
      purple: {
        border: "border-purple-500/40",
        bg: "bg-purple-950/30",
        text: "text-purple-200",
        hover: "hover:bg-purple-900/50",
        icon: "text-purple-400",
        title: "text-purple-300",
        glow: "shadow-purple-500/30"
      },
      pink: {
        border: "border-pink-500/40",
        bg: "bg-pink-950/30",
        text: "text-pink-200",
        hover: "hover:bg-pink-900/50",
        icon: "text-pink-400",
        title: "text-pink-300",
        glow: "shadow-pink-500/30"
      },
      teal: {
        border: "border-teal-500/40",
        bg: "bg-teal-950/30",
        text: "text-teal-200",
        hover: "hover:bg-teal-900/50",
        icon: "text-teal-400",
        title: "text-teal-300",
        glow: "shadow-teal-500/30"
      }
    };
    
    return colors[color];
  };

  // Desktop view: Show all categories at once
  const DesktopView = () => (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {techCategories.map((category) => {
        const colorClasses = getColorClasses(category.color);
        
        return (
          <motion.div key={category.id} className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className={`${colorClasses.icon} p-2 rounded-full bg-black/50 border border-${category.color}-500/30`}>
                {category.icon}
              </span>
              <span className={`${colorClasses.title} text-sm font-semibold uppercase tracking-wider`}>
                {category.name}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.technologies.map((tech, i) => (
                <motion.div
                  key={tech}
                  custom={i}
                  variants={techBadgeVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Badge 
                    variant="outline" 
                    className={`px-3 py-1 ${colorClasses.border} ${colorClasses.bg} ${colorClasses.text} ${colorClasses.hover} shadow-sm ${colorClasses.glow} transition-all`}
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );

  // Mobile view: Use tabs for better space management
  const MobileView = () => (
    <Tabs defaultValue="frontend" className="w-full md:hidden">
      <TabsList className="grid grid-cols-4 mb-6 bg-black/50 backdrop-blur-md border border-blue-500/20">
        {techCategories.map((category) => {
          const colorClasses = getColorClasses(category.color);
          return (
            <TabsTrigger 
              key={category.id} 
              value={category.id} 
              className={`flex flex-col items-center gap-1 py-2 data-[state=active]:${colorClasses.bg} data-[state=active]:${colorClasses.text}`}
            >
              <span className={colorClasses.icon}>{category.icon}</span>
              <span className={`text-xs ${colorClasses.text}`}>{category.name}</span>
            </TabsTrigger>
          );
        })}
      </TabsList>

      {techCategories.map((category) => {
        const colorClasses = getColorClasses(category.color);
        
        return (
          <TabsContent key={category.id} value={category.id}>
            <Card className="border-0 bg-transparent shadow-none">
              <CardHeader className="px-0 pt-0">
                <CardTitle className={`text-sm ${colorClasses.title} flex items-center gap-2`}>
                  <span className={`${colorClasses.icon} p-2 rounded-full bg-black/50 border border-${category.color}-500/30`}>
                    {category.icon}
                  </span>
                  {category.name} Technologies
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 py-2">
                <motion.div 
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {category.technologies.map((tech, i) => (
                    <motion.div
                      key={tech}
                      custom={i}
                      variants={techBadgeVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <Badge 
                        variant="outline" 
                        className={`px-3 py-1 ${colorClasses.border} ${colorClasses.bg} ${colorClasses.text} ${colorClasses.hover} shadow-sm ${colorClasses.glow} transition-all`}
                      >
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </TabsContent>
        );
      })}
    </Tabs>
  );

  return (
    <section 
      id="tech-stack"
      className="relative w-full py-16 overflow-hidden bg-gradient-to-b from-black via-purple-950 to-black text-blue-50"
    >
      {/* Space background with stars - same as HeroSection */}
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
        
        {/* Bright stars layer with glow */}
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
              boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.9), 0 0 ${star.size * 4}px rgba(150, 200, 255, 0.5)`
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
        className="absolute -top-1/4 right-1/4 w-full h-full rounded-full bg-blue-600 blur-3xl opacity-10 md:opacity-15"
        variants={nebulaVariants}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="absolute top-1/2 -left-1/4 w-full h-full rounded-full bg-purple-600 blur-3xl opacity-10 md:opacity-15"
        variants={nebulaVariants}
        initial="initial"
        animate="animate"
        style={{ animationDelay: "-5s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Cosmic Tech Universe
          </h2>
          
          <Card className="w-full backdrop-blur-sm border border-blue-400/20 bg-black/30 shadow-lg shadow-blue-900/20">
            <CardContent className="p-6">
              {/* Mobile view with tabs */}
              <MobileView />
              
              {/* Desktop view - grid layout */}
              <div className="hidden md:block">
                <DesktopView />
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        {/* Constellation connecting dots in the lower portion - similar to HeroSection */}
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

      {/* Style definitions for star animations - same as HeroSection */}
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

export default TechStack;