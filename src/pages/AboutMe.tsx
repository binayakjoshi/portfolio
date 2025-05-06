import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaArrowRight } from "react-icons/fa";
import "./AboutMe.css";

const AboutMe: React.FC = () => {
  return (
    <motion.div
      id="about"
      className="home-section"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {" "}
      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>
          I'm a passionate Full-Stack Developer specializing in creating
          responsive, scalable, and user-friendly applications that are both
          efficient and scalable.
        </p>
        <p>
          As a developer, I enjoy transforming complex problems into simple,
          beautiful, and intuitive solutions. Whether it's creating a stunning
          front-end user interface or designing a well-structured backend
          architecture, I love working through the entire development lifecycle.
        </p>
        <ul>
          <li>
            <strong>
              <FaArrowRight /> Languages:{" "}
            </strong>{" "}
            JavaScript, TypeScript, Python, Java, SQL, C++
          </li>
          <li>
            <strong>
              <FaArrowRight /> Frameworks:
            </strong>{" "}
            React, Node.js, Express.js,Next, Django
          </li>
          <li>
            <strong>
              <FaArrowRight /> Tools:
            </strong>{" "}
            AWS, Netlify, Heroku
          </li>
        </ul>
        <h3>What I'm Passionate About</h3>
        <p>
          I'm passionate about writing clean, maintainable, and scalable code.
          I'm always eager to learn new technologies and push the boundaries of
          what's possible with web development. Currently, I'm focused on:
        </p>
        <ul>
          <li>
            <FaArrowRight /> Learning About DevOps and cloud computing
          </li>
          <li>
            <FaArrowRight /> Getting in NestJs
          </li>
        </ul>
        <h4>Contact Information</h4>
        <ul className="contact-list">
          <li>
            <FaArrowRight />
            <FaEnvelope />
            Email: <a href="mailto:binayakj@pm.me">binayakj@pm.me</a>
          </li>
          <li>
            <FaArrowRight />
            <FaLinkedin />
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/binayak-joshi-266203305/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Binayak Joshi
            </a>
          </li>
          <li>
            <FaArrowRight />
            <FaGithub />
            GitHub:{" "}
            <a
              href="https://github.com/binayakjoshi"
              target="_blank"
              rel="noopener noreferrer"
            >
              binayakjoshi
            </a>
          </li>
        </ul>
      </section>
    </motion.div>
  );
};

export default AboutMe;
