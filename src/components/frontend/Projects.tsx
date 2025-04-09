"use client";
import React, { Fragment } from "react";
import { FaLaptopCode, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";
import { Tab } from "@headlessui/react";
import { ProjectsData } from "@/constants/Projects";
import { FreelanceProjectsData } from "@/constants/FreelanceProjects";
import ProjectCard from "../ProjectCard";

interface ProjectDataType {
  title: string;
  description: string;
  tech: string;
  link: string;
  github?: string;
}

const generateStars = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 2,
  }));
};

const ProjectsSection: React.FC = () => {
  const smallStars = generateStars(50);
  const mediumStars = generateStars(25);

  const formatProjectData = (
    project: ProjectDataType,
    type: "personal" | "freelance"
  ) => ({
    title: project.title,
    description: project.description,
    image: "/assets/project-placeholder.jpg",
    technologies: project.tech.split(",").map((item) => item.trim()),
    liveUrl: project.link,
    githubUrl: project.github || "",
    type: type,
  });

  return (
    <section
      className="relative py-20 overflow-hidden bg-gradient-to-b from-black via-purple-950 to-black text-blue-50"
      id="projects"
    >
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
              animation: `twinkle ${star.duration}s infinite alternate ${star.delay}s`,
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
              animation: `twinkle ${star.duration}s infinite alternate ${star.delay}s`,
              boxShadow: `0 0 ${star.size / 2}px rgba(255, 255, 255, 0.8)`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Cosmic Portfolio
        </motion.h2>

        <Tab.Group>
          <Tab.List className="flex space-x-4 mb-12 justify-center">
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`px-6 py-3 rounded-full transition-all duration-300 outline-none ${
                    selected
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30"
                      : "bg-black/30 text-blue-300 border border-blue-500/20 hover:bg-blue-900/20"
                  }`}
                >
                  <FaLaptopCode className="inline-block mr-2" />
                  Personal Projects
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`px-6 py-3 rounded-full transition-all duration-300 outline-none ${
                    selected
                      ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/30"
                      : "bg-black/30 text-purple-300 border border-purple-500/20 hover:bg-purple-900/20"
                  }`}
                >
                  <FaBriefcase className="inline-block mr-2" />
                  Freelance Projects
                </button>
              )}
            </Tab>
          </Tab.List>

          <Tab.Panels>
            <Tab.Panel>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {ProjectsData.map((project, i) => (
                  <ProjectCard
                    key={i}
                    {...formatProjectData(project, "personal")}
                  />
                ))}
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {FreelanceProjectsData.map((project, i) => (
                  <ProjectCard
                    key={i}
                    {...formatProjectData(project, "freelance")}
                  />
                ))}
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
};

export default ProjectsSection;
