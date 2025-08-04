import { notFound } from "next/navigation";
import {
  FaGithub,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaArrowLeft,
} from "react-icons/fa";
import Button from "@/components/custom-elements/button";
import { projects } from "@/lib/projects";

type ProjectDetailPageProps = {
  params: Promise<{ projectId: string }>;
};

const ProjectDetailPage = async ({ params }: ProjectDetailPageProps) => {
  const { projectId } = await params;
  const project = projects.find((p) => p.projectId === projectId);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <Button
          href="/projects"
          className="inline-flex items-center gap-2 mb-8 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
        >
          <FaArrowLeft />
          Back to Projects
        </Button>

        <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-500 p-8 mb-8 transition-colors duration-200">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {project.name}
          </h1>

          <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-6">
            <FaCalendarAlt className="mr-2" />
            <span>{project.date}</span>
          </div>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-8">
            {project.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button
              href={project.source}
              className="bg-white dark:bg-zinc-700 text-black dark:text-white border border-gray-300 dark:border-zinc-500 rounded-lg px-4 py-2 hover:-translate-y-0.5 shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 text-sm font-medium"
            >
              <FaGithub />
              View Source Code
            </Button>

            {project.live && (
              <Button
                href={project.live}
                className="bg-white dark:bg-zinc-700 text-black dark:text-white border border-gray-300 dark:border-zinc-500 rounded-lg px-6 py-3 hover:-translate-y-0.5 shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 font-medium"
              >
                <FaExternalLinkAlt />
                Live Demo
              </Button>
            )}
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-500 p-8 mb-8 transition-colors duration-200">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Key Features
          </h2>
          <ul className="space-y-3">
            {project.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
              >
                <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-500 p-8 transition-colors duration-200">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Technology Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-100 dark:bg-zinc-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 dark:border-zinc-500 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
