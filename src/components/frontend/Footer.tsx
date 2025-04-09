"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Twitter,
  Instagram,
  Linkedin,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type StarProps = {
  id: number;
  size: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
};

const Footer: React.FC = () => {
  const generateStars = (count: number): StarProps[] => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
      duration: Math.random() * 2 + 1,
    }));
  };

  const smallStars = generateStars(35);
  const neutronStars = generateStars(6);

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

  const galaxyVariants = {
    initial: { opacity: 0.1, rotate: 0 },
    animate: {
      opacity: [0.1, 0.15, 0.1],
      rotate: [0, 5, 0],
      transition: { duration: 20, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const neutronStarVariants = {
    initial: { scale: 1, opacity: 0.8 },
    animate: {
      scale: [1, 1.5, 1],
      opacity: [0.8, 1, 0.8],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <footer className="relative py-10 bg-gradient-to-b from-black via-indigo-950/30 to-black overflow-hidden border-t border-blue-900/30">
      <div className="absolute inset-0 overflow-hidden">
        {smallStars.map((star) => (
          <div
            key={`footer-star-${star.id}`}
            className="absolute rounded-full bg-white"
            style={{
              width: `${star.size / 2}px`,
              height: `${star.size / 2}px`,
              top: `${star.y}%`,
              left: `${star.x}%`,
              opacity: 0.6,
              animation: `twinkleFooter ${star.duration}s infinite alternate ${star.delay}s`,
            }}
          />
        ))}

        {neutronStars.map((star) => (
          <motion.div
            key={`neutron-${star.id}`}
            className="absolute rounded-full bg-blue-50"
            style={{
              width: `${star.size + 2}px`,
              height: `${star.size + 2}px`,
              top: `${star.y}%`,
              left: `${star.x}%`,
              boxShadow: `0 0 ${star.size * 3}px rgba(120, 200, 255, 0.9), 0 0 ${star.size * 5}px rgba(100, 150, 255, 0.7)`,
            }}
            variants={neutronStarVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: star.delay }}
          />
        ))}
      </div>

      <motion.div
        className="absolute opacity-10 bottom-0 left-0 w-64 h-64 bg-[url('/assets/galaxy-spiral.png')] bg-no-repeat bg-center bg-contain pointer-events-none"
        variants={galaxyVariants}
        initial="initial"
        animate="animate"
      />

      <motion.div
        className="absolute -left-16 top-0 w-32 h-32 rounded-full bg-gradient-to-b from-purple-700 to-indigo-900 opacity-20 blur-sm"
        animate={{ x: [0, 10, 0, -10, 0], y: [0, -5, 0, 5, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute top-1/2 left-1/2 w-48 h-10 border border-purple-300/20 rounded-full transform -translate-x-1/2 -translate-y-1/2 rotate-12" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-cyan-500 blur-3xl opacity-5"
        animate={{ opacity: [0.05, 0.08, 0.05], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <motion.div variants={itemVariants} className="text-center md:text-left relative">
            <motion.div
              className="absolute -top-6 -left-6 text-yellow-400"
              animate={{ rotate: 360, scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <Star size={16} />
            </motion.div>

            <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Nikhil Anand
            </h2>
            <p className="text-blue-200/70 text-sm mt-2">&copy; {new Date().getFullYear()} Stellar Rights Reserved</p>

            <div className="absolute -bottom-5 left-0 right-0 h-6 overflow-hidden opacity-50 md:hidden">
              <svg width="100%" height="100%">
                <g>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <line
                      key={`line-${i}`}
                      x1={`${10 + i * 20}%`}
                      y1="50%"
                      x2={`${20 + i * 20}%`}
                      y2="50%"
                      stroke="rgba(150, 180, 255, 0.5)"
                      strokeWidth="0.5"
                    />
                  ))}
                  {Array.from({ length: 6 }).map((_, i) => (
                    <circle
                      key={`dot-${i}`}
                      cx={`${10 + i * 20}%`}
                      cy="50%"
                      r="1"
                      fill="white"
                      opacity={i % 2 === 0 ? "0.9" : "0.5"}
                    />
                  ))}
                </g>
              </svg>
            </div>
          </motion.div>

          <motion.div className="flex gap-4 mt-6 md:mt-0" variants={itemVariants}>
            {[Github, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <Button
                key={i}
                variant="ghost"
                size="icon"
                className="rounded-full w-10 h-10 text-cyan-300 hover:text-white hover:bg-cyan-900/30 relative group"
              >
                <Icon size={20} className="group-hover:scale-110 transition-transform" />
                <motion.div
                  className="absolute inset-0 rounded-full border border-cyan-400/20"
                  animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                  transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
                />
              </Button>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes twinkleFooter {
          0% { opacity: 0.3; }
          100% { opacity: 0.8; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;