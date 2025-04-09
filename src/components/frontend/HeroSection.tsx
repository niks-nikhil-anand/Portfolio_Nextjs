"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const HeroSection = () => {
  // Create animated stars
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

  const smallStars = generateStars(100);
  const mediumStars = generateStars(50);
  const largeStars = generateStars(20);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const galaxyVariants = {
    initial: { opacity: 0.5, scale: 1, rotate: 0 },
    animate: {
      opacity: [0.5, 0.7, 0.5],
      scale: [1, 1.05, 1],
      rotate: [0, 5, 0],
      transition: { duration: 20, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const nebulaVariants = {
    initial: { opacity: 0.3, scale: 1 },
    animate: {
      opacity: [0.3, 0.5, 0.3],
      scale: [1, 1.1, 1],
      transition: { duration: 15, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-black via-purple-950 to-black text-blue-50"
    >
      {/* Deep space background with stars */}
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
        className="absolute -top-1/4 -left-1/4 w-full h-full rounded-full bg-blue-600 blur-3xl opacity-10 md:opacity-20"
        variants={nebulaVariants}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="absolute -bottom-1/4 -right-1/4 w-full h-full rounded-full bg-purple-600 blur-3xl opacity-10 md:opacity-20"
        variants={nebulaVariants}
        initial="initial"
        animate="animate"
        style={{ animationDelay: "-5s" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-1/2 h-1/2 rounded-full bg-pink-600 blur-3xl opacity-5 md:opacity-10"
        variants={nebulaVariants}
        initial="initial"
        animate="animate"
        style={{ animationDelay: "-8s" }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-1/2 h-1/2 rounded-full bg-indigo-600 blur-3xl opacity-5 md:opacity-10"
        variants={nebulaVariants}
        initial="initial"
        animate="animate"
        style={{ animationDelay: "-12s" }}
      />

      {/* Content container */}
      <div className="container mx-auto px-4 z-10">
        <motion.div
          className="flex flex-col items-center md:items-start max-w-4xl mx-auto md:mx-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile avatar with orbit effect */}
          <div className="relative mb-6">
            {/* Orbital rings */}
            <motion.div 
              className="absolute inset-0 rounded-full border border-blue-400/30 -m-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute inset-0 rounded-full border border-purple-400/20 -m-8"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Glowing avatar */}
            <motion.div
              className="absolute inset-0 -m-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-md"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <Avatar className="w-28 md:w-40 h-28 md:h-40 rounded-full border-2 border-blue-400 overflow-hidden relative z-10 shadow-lg shadow-blue-500/30">
              <AvatarImage
                src="/assets/profile.jpeg"
                alt="Profile Image"
                className="w-full h-full object-cover object-center"
              />
            </Avatar>
            
            {/* Small orbiting planet */}
            <motion.div
              className="absolute w-4 h-4 rounded-full bg-teal-400 shadow-md shadow-teal-400/50"
              animate={{
                rotate: [0, 360],
                x: [0, 30, 0, -30, 0],
                y: [30, 0, -30, 0, 30],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ 
                left: '50%',
                top: '50%',
                marginLeft: '-8px',
                marginTop: '-8px'
              }}
            />
          </div>

          <motion.span
            className="text-blue-400 font-mono text-base md:text-lg mb-2 backdrop-blur-sm px-4 py-1 rounded-full border border-blue-400/30 my-5"
            variants={itemVariants}
          >
            🌌 From the cosmic void, I am
          </motion.span>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-center md:text-left"
            variants={itemVariants}
          >
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Nikhil Anand</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mt-2">
              Galactic Developer
            </span>
          </motion.h1>

          <motion.p
            className="text-blue-300/80 text-base md:text-lg mb-8 leading-relaxed backdrop-blur-sm p-4 rounded-lg border border-blue-500/10 bg-black/20 text-center md:text-left"
            variants={itemVariants}
          >
            Navigating the digital cosmos with code as my starship. Creating 
            interfaces that shine brighter than supernovas and experiences 
            that transcend dimensions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row flex-wrap gap-4 mb-12 w-full sm:w-auto"
            variants={itemVariants}
          >
            <Button className="px-4 sm:px-6 py-5 sm:py-6 text-base flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white border-none hover:shadow-lg hover:shadow-blue-500/50 transition-all w-full sm:w-auto group">
              Explore Universe
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="px-4 sm:px-6 py-5 sm:py-6 text-base border-blue-400 text-blue-200 hover:bg-blue-950/50 hover:text-white transition-all w-full sm:w-auto backdrop-blur-sm">
              Send Interstellar Message
            </Button>
          </motion.div>

          {/* Constellation connecting dots in the lower portion */}
          <div className="absolute bottom-12 left-0 right-0 h-32 overflow-hidden opacity-40 pointer-events-none">
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
        </motion.div>
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

export default HeroSection;