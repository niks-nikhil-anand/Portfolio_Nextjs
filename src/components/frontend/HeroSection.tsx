"use server";
import React from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

type Star = {
  id: number;
  size: number;
  x: number;
  y: number;
};

const HeroSection: React.FC = () => {
  const generateStars = (count: number): Star[] => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
  };

  const smallStars = generateStars(100);
  const mediumStars = generateStars(50);
  const largeStars = generateStars(20);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-black via-purple-950 to-black text-blue-50"
    >
      {/* Static space background with stars */}
      <div className="absolute inset-0 bg-black overflow-hidden">
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
              boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.9), 0 0 ${star.size * 4}px rgba(150, 200, 255, 0.5)`,
            }}
          />
        ))}
      </div>

      {/* Static background overlays */}
      <div className="absolute opacity-10 top-0 left-0 w-full h-full bg-[url('/assets/galaxy-spiral.png')] bg-no-repeat bg-center bg-contain pointer-events-none" />
      <div className="absolute -top-1/4 -left-1/4 w-full h-full rounded-full bg-blue-600 blur-3xl opacity-10 md:opacity-20" />
      <div className="absolute -bottom-1/4 -right-1/4 w-full h-full rounded-full bg-purple-600 blur-3xl opacity-10 md:opacity-20" />
      <div className="absolute top-1/3 right-1/3 w-1/2 h-1/2 rounded-full bg-pink-600 blur-3xl opacity-5 md:opacity-10" />
      <div className="absolute bottom-1/3 left-1/4 w-1/2 h-1/2 rounded-full bg-indigo-600 blur-3xl opacity-5 md:opacity-10" />

      {/* Content container */}
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center md:items-start max-w-4xl mx-auto md:mx-0">
          {/* Profile avatar */}
          <div className="relative mb-6">
            <div className="absolute inset-0 rounded-full border border-blue-400/30 -m-4" />
            <div className="absolute inset-0 rounded-full border border-purple-400/20 -m-8" />
            <div className="absolute inset-0 -m-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-md opacity-40" />
            <Avatar className="w-28 md:w-40 h-28 md:h-40 rounded-full border-2 border-blue-400 overflow-hidden relative z-10 shadow-lg shadow-blue-500/30">
              <AvatarImage
                src="/assets/profile.jpeg"
                alt="Profile Image"
                className="w-full h-full object-cover object-center"
              />
            </Avatar>
            {/* Orbiting planet removed */}
          </div>

          <span className="text-blue-400 font-mono text-base md:text-lg mb-2 backdrop-blur-sm px-4 py-1 rounded-full border border-blue-400/30 my-5">
            🌌 From the cosmic void, I am
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-center md:text-left">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Nikhil Anand
            </span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mt-2">
              Full Stack Developer
            </span>
          </h1>

          <p className="text-blue-300/80 text-base md:text-lg mb-8 leading-relaxed backdrop-blur-sm p-4 rounded-lg border border-blue-500/10 bg-black/20 text-center md:text-left">
            Navigating the digital cosmos with code as my starship. Creating
            interfaces that shine brighter than supernovas and experiences
            that transcend dimensions.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-12 w-full sm:w-auto">
            <Button className="px-4 sm:px-6 py-5 sm:py-6 text-base flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white border-none hover:shadow-lg hover:shadow-blue-500/50 transition-all w-full sm:w-auto group">
              Explore Universe
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="px-4 sm:px-6 py-5 sm:py-6 text-base border-blue-400 text-blue-200 hover:bg-blue-950/50 hover:text-white transition-all w-full sm:w-auto backdrop-blur-sm">
              Send Interstellar Message
            </Button>
          </div>

          {/* Constellation lines */}
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
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
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
                      cx={x}
                      cy={y}
                      r="2"
                      fill="white"
                      opacity={i % 3 === 0 ? "0.9" : "0.5"}
                    />
                  );
                })}
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
