"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Download, Rocket } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation links
  const navLinks = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];

  // Create animated stars
  const generateStars = (count: number) => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
      duration: Math.random() * 2 + 1
    }));
  };

  const smallStars = generateStars(30);

  // Animation for navbar items
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  const galaxyVariants = {
    initial: { opacity: 0.2, rotate: 0 },
    animate: {
      opacity: [0.2, 0.3, 0.2],
      rotate: [0, 5, 0],
      transition: { duration: 20, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "backdrop-blur-md shadow-lg bg-black/50" 
          : "bg-transparent"
      }`}
    >
      {/* Background star field */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Small stars */}
        {smallStars.map((star) => (
          <div
            key={`nav-star-${star.id}`}
            className="absolute rounded-full bg-white"
            style={{
              width: `${star.size / 2}px`,
              height: `${star.size / 2}px`,
              top: `${star.y}%`,
              left: `${star.x}%`,
              opacity: 0.6,
              animation: `twinkleNav ${star.duration}s infinite alternate ${star.delay}s`
            }}
          />
        ))}
        
        {/* Spiral galaxy effect */}
        <motion.div
          className="absolute opacity-5 top-0 right-0 w-32 h-32 bg-[url('/assets/galaxy-spiral.png')] bg-no-repeat bg-center bg-contain pointer-events-none"
          variants={galaxyVariants}
          initial="initial"
          animate="animate"
        />
        
        {/* Nebula glow */}
        <motion.div
          className="absolute -right-10 top-0 w-40 h-20 rounded-full bg-indigo-600 blur-3xl opacity-10"
          animate={{
            opacity: [0.1, 0.15, 0.1],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute -left-10 top-0 w-40 h-20 rounded-full bg-cyan-500 blur-3xl opacity-10"
          animate={{
            opacity: [0.1, 0.15, 0.1],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with orbit effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Orbital ring */}
            <motion.div 
              className="absolute inset-0 rounded-full border border-blue-400/30 -m-1"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            
            <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 flex items-center">
              <span className="relative">
                <Rocket size={20} className="inline-block mr-2 text-purple-400" />
                <motion.div
                  className="absolute -top-1 -right-1 w-6 h-6 opacity-60"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-full h-full bg-blue-400 rounded-full blur-md"></div>
                </motion.div>
              </span>
              <span>Cosmic Portfolio</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.title}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
              >
                <Link 
                  href={link.href} 
                  className="text-blue-100 hover:text-cyan-300 transition-colors font-semibold relative group"
                >
                  {link.title}
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"
                  />
                </Link>
              </motion.div>
            ))}
            
            {/* Resume button with space effect */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
            >
              <button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white px-4 py-2 rounded-md hover:shadow-lg hover:shadow-blue-500/20 transition-all group">
                <Download size={16} className="group-hover:scale-110 transition-transform" />
                <span>Star Map</span>
              </button>
            </motion.div>
            
            {/* Small orbiting planet instead of theme toggle */}
            <motion.div
              custom={5}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
              className="relative w-8 h-8"
            >
              <motion.div
                className="absolute w-3 h-3 rounded-full bg-purple-400 shadow-md shadow-purple-400/50"
                animate={{
                  rotate: 360,
                  x: [0, 8, 0, -8, 0],
                  y: [8, 0, -8, 0, 8],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-80"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-blue-100 hover:text-cyan-300 p-2 rounded-md focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu - Completely simplified */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 bg-black/80 backdrop-blur-md z-40 pt-20">
            <div className="px-4 py-6 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.title} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-blue-100 hover:text-cyan-300 transition-colors text-lg font-medium block"
                >
                  {link.title}
                </Link>
              ))}
              <button 
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white px-4 py-2 rounded-md w-full justify-center"
              >
                <Download size={16} />
                Star Map
              </button>
              
              {/* Small orbiting planets - simplified for mobile */}
              <div className="h-16 relative">
                <motion.div
                  className="absolute left-1/4 top-4 w-3 h-3 rounded-full bg-purple-400"
                  animate={{
                    x: [-20, 20],
                    y: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <motion.div
                  className="absolute left-2/4 top-4 w-2 h-2 rounded-full bg-cyan-400"
                  animate={{
                    x: [20, -20],
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Star animation styles */}
      <style jsx>{`
        @keyframes twinkleNav {
          0% { opacity: 0.3; }
          100% { opacity: 0.8; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;