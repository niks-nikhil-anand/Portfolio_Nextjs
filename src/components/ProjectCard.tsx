// components/ProjectCard.tsx
import { Card, CardContent } from "@/components/ui/card";
import { FaGithub, FaLink } from "react-icons/fa";

export interface ProjectType {
  title: string;
  description: string;
  tech: string;
  link: string;
  github?: string; // Optional GitHub link
  demo?: string; // Optional demo link
}

const ProjectCard = ({ title, description, tech, link, github, demo }: ProjectType) => (
  <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]">
    <Card className="h-full rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-800">
      <CardContent className="p-5">
        <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-3">{description}</p>
        <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-4">
          <span className="italic">Tech: </span>
          <span className="not-italic">{tech}</span>
        </p>
        <div className="flex items-center gap-3 mt-auto pt-2">
          {github && (
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub Repository"
            >
              <FaGithub size={18} />
            </a>
          )}
          {demo && (
            <a 
              href={demo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              aria-label="Live Demo"
            >
              <FaLink size={18} />
            </a>
          )}
          {!demo && !github && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="Project Link"
            >
              <FaLink size={18} />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  </div>
);

export default ProjectCard;