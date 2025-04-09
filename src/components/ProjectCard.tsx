"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  type: "personal" | "freelance";
};

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  type,
}: ProjectCardProps) => {
  // Different styling based on project type
  const getTypeStyles = () => {
    if (type === "personal") {
      return {
        gradientFrom: "from-blue-500",
        gradientTo: "to-cyan-500",
        borderColor: "border-blue-500/20",
        hoverBorder: "group-hover:border-blue-500/50",
        glowColor: "group-hover:shadow-blue-500/20",
        badgeBg: "bg-blue-950/50",
        badgeBorder: "border-blue-500/30",
        badgeText: "text-blue-300",
        buttonBg: "bg-blue-500/80",
        buttonHover: "hover:bg-blue-600",
      };
    } else {
      return {
        gradientFrom: "from-purple-500",
        gradientTo: "to-pink-500",
        borderColor: "border-purple-500/20",
        hoverBorder: "group-hover:border-purple-500/50",
        glowColor: "group-hover:shadow-purple-500/20",
        badgeBg: "bg-purple-950/50",
        badgeBorder: "border-purple-500/30",
        badgeText: "text-purple-300",
        buttonBg: "bg-purple-500/80",
        buttonHover: "hover:bg-purple-600",
      };
    }
  };

  const styles = getTypeStyles();

  return (
    <motion.div
      className={`group relative h-full rounded-xl border ${styles.borderColor} bg-black/20 backdrop-blur-sm overflow-hidden transition-all duration-300 ${styles.hoverBorder} hover:shadow-lg ${styles.glowColor}`}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
    >
      {/* Animated glow effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className={`absolute -inset-1 opacity-0 bg-gradient-to-r ${styles.gradientFrom} ${styles.gradientTo} blur-xl group-hover:opacity-10 transition-opacity duration-500`}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Project image */}
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
          width={600}
          height={300}
        />
        
        {/* Project type badge */}
        <div className="absolute top-3 right-3 z-20">
          <Badge
            className={`px-3 py-1 ${styles.badgeBg} ${styles.badgeText} border ${styles.badgeBorder} backdrop-blur-sm`}
          >
            {type === "personal" ? "Personal" : "Freelance"}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <h3 className={`font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r ${styles.gradientFrom} ${styles.gradientTo}`}>
          {title}
        </h3>
        
        <p className="text-blue-100/80 text-sm line-clamp-3">
          {description}
        </p>
        
        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 pt-2">
          {technologies.slice(0, 3).map((tech, index) => (
            <Badge
              key={index}
              variant="outline"
              className={`text-xs ${styles.badgeBg} ${styles.badgeText} border ${styles.badgeBorder}`}
            >
              {tech}
            </Badge>
          ))}
          {technologies.length > 3 && (
            <Badge
              variant="outline"
              className={`text-xs ${styles.badgeBg} ${styles.badgeText} border ${styles.badgeBorder}`}
            >
              +{technologies.length - 3} more
            </Badge>
          )}
        </div>
      </div>
      
      {/* Action buttons */}
      <div className="p-5 pt-0 flex gap-2">
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-1 px-4 py-2 rounded-lg ${styles.buttonBg} text-white text-sm ${styles.buttonHover} transition-colors`}
        >
          <ExternalLink size={14} />
          Live Demo
          <motion.span
            className="inline-block"
            animate={{ x: [0, 3, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <ArrowUpRight size={14} />
          </motion.span>
        </a>
        
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1 px-4 py-2 rounded-lg bg-transparent border ${styles.borderColor} text-white text-sm hover:bg-white/5 transition-colors`}
          >
            <Github size={14} />
            Code
          </a>
        )}
      </div>
      
      {/* Floating particles */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-30 pointer-events-none h-32">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white w-1 h-1"
            style={{
              left: `${20 + i * 15}%`,
              bottom: `${10 + (i % 3) * 15}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;