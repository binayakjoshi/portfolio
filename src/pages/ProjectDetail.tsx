import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { FaGithub, FaArrowRight, FaCalendar } from "react-icons/fa";
import Button from "../components/UI/Button";
import "./ProjectDetail.css";

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.projectId === projectId);

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <div className="project-detail">
      <h2>{project.name}</h2>
      <p>
        <FaCalendar /> {project.date}
      </p>
      <p>{project.description}</p>

      <h4>Features</h4>
      <ul>
        {project.features.map((feature, idx) => (
          <li key={idx}>
            <FaArrowRight className="arrow-right" />
            {feature}
          </li>
        ))}
      </ul>

      <h4>Tech Stack</h4>
      <ul className="tech-stack">
        {project.techStack.map((tech, idx) => (
          <li key={idx}>
            <FaArrowRight className="arrow-right" />
            {tech}
          </li>
        ))}
      </ul>

      <div className="project-links">
        <Button href={project.source} target="_blank" rel="noopener noreferrer">
          <FaGithub /> Source Code
        </Button>
        {project.live && (
          <Button href={project.live} target="_blank" rel="noopener noreferrer">
            Live
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
