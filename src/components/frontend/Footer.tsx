"use client";

import React from "react";
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
            }}
          />
        ))}

        {neutronStars.map((star) => (
          <div
            key={`neutron-${star.id}`}
            className="absolute rounded-full bg-blue-50"
            style={{
              width: `${star.size + 2}px`,
              height: `${star.size + 2}px`,
              top: `${star.y}%`,
              left: `${star.x}%`,
              boxShadow: `0 0 ${star.size * 3}px rgba(120, 200, 255, 0.9), 0 0 ${star.size * 5}px rgba(100, 150, 255, 0.7)`,
            }}
          />
        ))}
      </div>

      <div className="absolute opacity-10 bottom-0 left-0 w-64 h-64 bg-[url('/assets/galaxy-spiral.png')] bg-no-repeat bg-center bg-contain pointer-events-none" />

      <div className="absolute -left-16 top-0 w-32 h-32 rounded-full bg-gradient-to-b from-purple-700 to-indigo-900 opacity-20 blur-sm">
        <div className="absolute top-1/2 left-1/2 w-48 h-10 border border-purple-300/20 rounded-full transform -translate-x-1/2 -translate-y-1/2 rotate-12" />
      </div>

      <div className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-cyan-500 blur-3xl opacity-5" />

      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left relative">
            <div className="absolute -top-6 -left-6 text-yellow-400">
              <Star size={16} />
            </div>

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
          </div>

          <div className="flex gap-4 mt-6 md:mt-0">
            {[Github, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <Button
                key={i}
                variant="ghost"
                size="icon"
                className="rounded-full w-10 h-10 text-cyan-300 hover:text-white hover:bg-cyan-900/30"
              >
                <Icon size={20} />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
