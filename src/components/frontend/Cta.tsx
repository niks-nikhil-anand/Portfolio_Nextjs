"use client";

import React from "react";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Star {
  id: number;
  size: number;
  x: number;
  y: number;
}

const CTASection: React.FC = () => {
  const generateStars = (count: number): Star[] => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
  };

  const smallStars = generateStars(50);
  const neutronStars = generateStars(15);

  return (
    <section className="relative w-full py-24 bg-gradient-to-t from-black via-indigo-950 to-black overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
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

      <div className="absolute opacity-10 top-0 left-0 w-full h-full bg-[url('/assets/galaxy-spiral.png')] bg-no-repeat bg-center bg-contain pointer-events-none" />

      <div className="absolute -right-20 top-10 w-40 h-40 rounded-full bg-gradient-to-r from-purple-800 to-indigo-600 opacity-30 blur-sm" />

      <div className="absolute -left-16 bottom-10 w-32 h-32 rounded-full bg-gradient-to-b from-cyan-700 to-teal-900 opacity-40 blur-sm" />

      <div className="absolute left-1/4 bottom-1/4 w-6 h-6 rounded-full bg-gray-300 opacity-60" />

      <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-cyan-500 blur-3xl" />

      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-fuchsia-500 blur-3xl" />

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-fuchsia-300">
            Let&apos;s Connect Across the Cosmos
          </h2>

          <Card className="backdrop-blur-sm border border-cyan-400/20 bg-black/30 overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col items-center text-center">
                <p className="text-cyan-100 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl">
                  My interstellar inbox is always open for new connections. Whether you have a question about the digital universe or simply want to say{" "}
                  <span className="font-bold text-fuchsia-300">Hello</span>, I&apos;ll respond faster than light!
                </p>

                <div className="flex gap-4 mb-8 flex-wrap justify-center">
                  <Button className="px-6 py-6 text-base flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-none hover:shadow-lg hover:shadow-cyan-500/50 transition-all group">
                    Transmit Message
                    <Mail className="group-hover:translate-x-1 transition-transform" size={16} />
                  </Button>
                  <Button variant="outline" className="px-6 py-6 text-base border-cyan-400 text-cyan-200 hover:bg-cyan-950/50 hover:text-white transition-all">
                    View Star Chart
                  </Button>
                </div>

                <div className="flex gap-6 justify-center">
                  <Button variant="ghost" size="icon" className="rounded-full w-12 h-12 text-cyan-300 hover:text-white hover:bg-cyan-900/30">
                    <Github size={22} />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full w-12 h-12 text-cyan-300 hover:text-white hover:bg-cyan-900/30">
                    <Linkedin size={22} />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full w-12 h-12 text-cyan-300 hover:text-white hover:bg-cyan-900/30">
                    <Twitter size={22} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden opacity-30 pointer-events-none">
        <svg width="100%" height="100%" className="absolute inset-0">
          <g>
            {Array.from({ length: 8 }).map((_, i) => {
              const x1 = `${10 + i * 10}%`;
              const y1 = `${50 + Math.sin(i) * 20}%`;
              const x2 = `${20 + i * 10}%`;
              const y2 = `${50 + Math.cos(i) * 20}%`;
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(150, 180, 255, 0.5)" strokeWidth="0.5" />;
            })}
            {Array.from({ length: 9 }).map((_, i) => {
              const x = `${10 + i * 10}%`;
              const y = `${50 + (i % 2 === 0 ? Math.sin(i) : Math.cos(i)) * 20}%`;
              return <circle key={i} cx={x} cy={y} r="2" fill="white" opacity={i % 3 === 0 ? "0.9" : "0.5"} />;
            })}
          </g>
        </svg>
      </div>
    </section>
  );
};

export default CTASection;
