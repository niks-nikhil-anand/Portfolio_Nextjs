"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CTASection = () => {
  // Create animated stars similar to the hero section
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
  const neutronStars = generateStars(15);

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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const glowVariants = {
    initial: { opacity: 0.3, scale: 1 },
    animate: {
      opacity: [0.3, 0.5, 0.3],
      scale: [1, 1.05, 1],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const planetVariants = {
    initial: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: { duration: 30, repeat: Infinity, ease: "linear" }
    }
  };

  const neutronStarVariants = {
    initial: { scale: 1, opacity: 0.8 },
    animate: {
      scale: [1, 1.3, 1],
      opacity: [0.8, 1, 0.8],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const galaxyVariants = {
    initial: { opacity: 0.4, scale: 1, rotate: 0 },
    animate: {
      opacity: [0.4, 0.6, 0.4],
      scale: [1, 1.03, 1],
      rotate: [0, 5, 0],
      transition: { duration: 15, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <section className="relative w-full py-24 bg-gradient-to-t from-black via-indigo-950 to-black overflow-hidden">
      {/* Deep space background with stars */}
      <div className="absolute inset-0 overflow-hidden">
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
        
        {/* Neutron stars with pulsing effect */}
        {neutronStars.map((star) => (
          <motion.div
            key={`neutron-${star.id}`}
            className="absolute rounded-full bg-blue-50"
            style={{
              width: `${star.size + 2}px`,
              height: `${star.size + 2}px`,
              top: `${star.y}%`,
              left: `${star.x}%`,
              boxShadow: `0 0 ${star.size * 3}px rgba(120, 200, 255, 0.9), 0 0 ${star.size * 5}px rgba(100, 150, 255, 0.7)`
            }}
            variants={neutronStarVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: star.delay }}
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

      {/* Moving planets */}
      <motion.div
        className="absolute -right-20 top-10 w-40 h-40 rounded-full bg-gradient-to-r from-purple-800 to-indigo-600 opacity-30 blur-sm"
        variants={planetVariants}
        initial="initial"
        animate="animate"
        style={{ transformOrigin: "center" }}
      >
        {/* Planet rings */}
        <div className="absolute top-1/2 left-1/2 w-60 h-12 border border-purple-300/30 rounded-full transform -translate-x-1/2 -translate-y-1/2 rotate-12"></div>
        <div className="absolute top-1/2 left-1/2 w-50 h-10 border border-indigo-300/20 rounded-full transform -translate-x-1/2 -translate-y-1/2 -rotate-6"></div>
      </motion.div>

      <motion.div 
        className="absolute -left-16 bottom-10 w-32 h-32 rounded-full bg-gradient-to-b from-cyan-700 to-teal-900 opacity-40 blur-sm"
        animate={{
          x: [0, 20, 0, -20, 0],
          y: [0, -15, 0, 15, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Small orbiting moon */}
      <motion.div
        className="absolute left-1/4 bottom-1/4 w-6 h-6 rounded-full bg-gray-300 opacity-60"
        animate={{
          rotate: 360,
          x: [0, 50, 0, -50, 0],
          y: [50, 0, -50, 0, 50],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Background glow effects */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-cyan-500 blur-3xl"
        variants={glowVariants}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-fuchsia-500 blur-3xl"
        variants={glowVariants}
        initial="initial"
        animate="animate"
        style={{ animationDelay: "-2s" }}
      />

      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-fuchsia-300"
            variants={itemVariants}
          >
            Let's Connect Across the Cosmos
          </motion.h2>

          <Card className="backdrop-blur-sm border border-cyan-400/20 bg-black/30 overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <motion.div 
                className="flex flex-col items-center text-center"
                variants={itemVariants}
              >
                <motion.p 
                  className="text-cyan-100 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl"
                  variants={itemVariants}
                >
                  My interstellar inbox is always open for new connections. Whether you have a question about the digital universe or simply want to say <span className="font-bold text-fuchsia-300">Hello</span>, I'll respond faster than light!
                </motion.p>

                <motion.div 
                  className="flex gap-4 mb-8 flex-wrap justify-center"
                  variants={itemVariants}
                >
                  <Button 
                    className="px-6 py-6 text-base flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-none hover:shadow-lg hover:shadow-cyan-500/50 transition-all group"
                  >
                    Transmit Message
                    <Mail className="group-hover:translate-x-1 transition-transform" size={16} />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="px-6 py-6 text-base border-cyan-400 text-cyan-200 hover:bg-cyan-950/50 hover:text-white transition-all"
                  >
                    View Star Chart
                  </Button>
                </motion.div>

                <motion.div 
                  className="flex gap-6 justify-center"
                  variants={itemVariants}
                >
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="rounded-full w-12 h-12 text-cyan-300 hover:text-white hover:bg-cyan-900/30 relative"
                  >
                    <Github size={22} />
                    {/* Orbital ring around icon */}
                    <motion.div 
                      className="absolute inset-0 rounded-full border border-cyan-400/20"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="rounded-full w-12 h-12 text-cyan-300 hover:text-white hover:bg-cyan-900/30 relative"
                  >
                    <Linkedin size={22} />
                    <motion.div 
                      className="absolute inset-0 rounded-full border border-cyan-400/20"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="rounded-full w-12 h-12 text-cyan-300 hover:text-white hover:bg-cyan-900/30 relative"
                  >
                    <Twitter size={22} />
                    <motion.div 
                      className="absolute inset-0 rounded-full border border-cyan-400/20"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                  </Button>
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Constellation connecting dots in the lower portion */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden opacity-30 pointer-events-none">
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

      {/* Style definitions for star animations */}
      <style jsx>{`
        @keyframes twinkle {
          0% { opacity: 0.3; }
          100% { opacity: 0.8; }
        }
      `}</style>
    </section>
  );
};

export default CTASection;