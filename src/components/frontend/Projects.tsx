// components/Projects.tsx
import { ProjectsData } from "@/constants/Projects";
import { FaLaptopCode } from "react-icons/fa";
import ProjectCard, { ProjectType } from "../ProjectCard";


const Projects = () => (
  <section className=" px-4 py-5" id="freelance">
    <div className="container mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <FaLaptopCode className="text-indigo-500 dark:text-indigo-400" size={28} />
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
          Projects
        </h2>
      </div>
      <div className="flex flex-wrap gap-6">
        {ProjectsData.map((project: ProjectType, index: number) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;