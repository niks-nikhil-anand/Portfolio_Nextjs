"use client";
import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Code, Server, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const HeroSection = () => {
  const frontendTechs = ["React", "Next.js", "TypeScript", "Tailwind"];
  const backendTechs = ["Node.js", "Express", "Python", "MongoDB", "SQL"];

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

  const techBadgeVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.8 + i * 0.1,
        duration: 0.3,
      },
    }),
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background text-foreground dark:bg-black dark:text-white"
    >
      <div className="container mx-auto px-4 z-10">
        <motion.div
          className="flex flex-col items-start max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Avatar className="w-40 h-40 mb-4 rounded-full border-2 border-primary overflow-hidden">
            <AvatarImage
              src="/assets/profile.jpeg"
              alt="Profile Image"
              className="w-full h-full object-cover object-center"
            />
          </Avatar>

          <motion.span
            className="text-primary font-mono text-lg mb-2"
            variants={itemVariants}
          >
            👋 Hello, my name is
          </motion.span>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            variants={itemVariants}
          >
            <span className="block">Nikhil Anand</span>
            <span className="block text-primary mt-2">
              Full Stack Developer
            </span>
          </motion.h1>

          <motion.p
            className="text-muted-foreground text-lg mb-8 leading-relaxed"
            variants={itemVariants}
          >
            I build modern, responsive, and user-friendly web applications with
            a focus on clean code and optimal performance.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-12"
            variants={itemVariants}
          >
            <Button className="px-6 py-6 text-base flex items-center gap-2">
              View My Work
              <ChevronRight size={16} />
            </Button>
            <Button variant="outline" className="px-6 py-6 text-base">
              Contact Me
            </Button>
          </motion.div>

          <motion.div className="w-full" variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Code size={20} className="text-primary" />
              My Tech Stack
            </h3>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Server size={16} className="text-primary" />
                <span className="text-muted-foreground text-sm">Frontend</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {frontendTechs.map((tech, i) => (
                  <motion.div
                    key={tech}
                    custom={i}
                    variants={techBadgeVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Badge variant="outline" className="px-3 py-1">
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Database size={16} className="text-primary" />
                <span className="text-muted-foreground text-sm">Backend</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {backendTechs.map((tech, i) => (
                  <motion.div
                    key={tech}
                    custom={i}
                    variants={techBadgeVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Badge variant="outline" className="px-3 py-1">
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
