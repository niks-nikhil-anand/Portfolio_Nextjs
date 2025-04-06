// components/FreelanceProjects.tsx
import { FreelanceProjectsData } from "@/constants/FreelanceProjects";
import { FaBriefcase } from "react-icons/fa";
import ProjectCard, { ProjectType } from "../ProjectCard";


const FreelanceProjects = () => (
  <section className=" px-4 py-5 bg-gray-50 dark:bg-gray-900" id="freelance">
    <div className="container mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <FaBriefcase className="text-teal-500 dark:text-teal-400" size={28} />
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
          Freelance Projects
        </h2>
      </div>
      <div className="flex flex-wrap gap-6">
        {FreelanceProjectsData.map((project: ProjectType, index: number) => (
          <ProjectCard key={`freelance-${index}`} {...project} />
        ))}
      </div>
    </div>
  </section>
);

export default FreelanceProjects;