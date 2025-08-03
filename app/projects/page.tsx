import { FaGithub, FaCalendarAlt } from "react-icons/fa";
import Button from "@/components/custom-elements/button";
import { projects } from "@/lib/projects";

const ProjectListPage = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-left mb-12">
          Projects
        </h2>

        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <div
              key={project.projectId}
              className="bg-white dark:bg-zinc-700 border border-gray-100 dark:border-zinc-500 rounded-xl shadow-sm hover:shadow-lg hover:border-gray-200 dark:hover:border-gray-600 hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col min-h-[300px]"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {project.name}
              </h3>

              <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-4">
                <FaCalendarAlt className="mr-2" />
                <span>{project.date}</span>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-auto">
                <Button
                  href={project.source}
                  className="bg-white dark:bg-zinc-600 text-black dark:text-white border border-gray-300 dark:border-zinc-500 rounded-lg px-4 py-2 hover:-translate-y-0.5 shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 text-sm font-medium"
                >
                  <FaGithub />
                  Source Code
                </Button>

                <Button
                  href={`/projects/${project.projectId}`}
                  className="bg-white dark:bg-zinc-600 text-black dark:text-white border border-gray-300 dark:border-zinc-500 rounded-lg px-4 py-2 hover:-translate-y-0.5 shadow-md hover:shadow-lg transition-all duration-200 text-sm font-medium"
                >
                  View Details
                </Button>

                {project.live && (
                  <Button
                    href={project.live}
                    className="bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 hover:-translate-y-0.5 shadow-md hover:shadow-lg transition-all duration-200 text-sm font-medium"
                  >
                    Live Demo
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectListPage;
