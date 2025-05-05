import React from "react";
import "./Projects.css";
import { projects } from "../data/projects";
import { FaGithub, FaCalendarAlt } from "react-icons/fa";
import Button from "../components/UI/Button";
import { motion } from "framer-motion";

const Projects: React.FC = () => (
  <motion.div
    id="about"
    className="project-section"
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {" "}
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((p) => (
          <div key={p.name} className="project-card">
            <h3>{p.name}</h3>
            <p className="project-date">
              <FaCalendarAlt />
              {p.date}
            </p>
            <p>{p.description}</p>
            <div className="project-links">
              <Button href={p.source} target="_blank" rel="noopener noreferrer">
                <FaGithub />
                Source Code
              </Button>
              {p.live && (
                <Button href={p.live} target="_blank" rel="noopener noreferrer">
                  Live
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  </motion.div>
);

export default Projects;
