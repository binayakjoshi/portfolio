import React from 'react';
import './AboutMe.css'; 
export const AboutMe = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">Binayak Joshi</h1>
      <p className="about-intro">
        Hi there! 👋 I'm <strong>Binayak</strong>, a passionate <strong>Full Stack Developer</strong> with a strong focus on building responsive and user-friendly applications that are both efficient and scalable.
      </p>

      <section className="about-section">
        <h2 className="about-subtitle">What I Do</h2>
        <p>
          As a developer, I enjoy transforming complex problems into simple, beautiful, and intuitive solutions. Whether it's creating a stunning front-end user interface or designing a well-structured backend architecture, I love working through the entire development lifecycle.
        </p>
        <ul className="about-list">
          <li>Languages: JavaScript, Python, Java, SQL, C++</li>
          <li>Frameworks: React, Node.js, Express.js, Mongoose, Django</li>
          <li>API Development: Designing and implementing RESTful APIs</li>
          <li>Other Tools: Docker, Heroku, Netlify</li>
        </ul>
      </section>

      <section className="about-section">
        <h2 className="about-subtitle">My Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3 className="project-name">Pop N'Buy (Vendor-Client Website)</h3>
            <p className="project-date">September 2024</p>
            <p className="project-description">
              A website for vendors to add their products, and customers can view, add to cart, or buy them. The app uses the MERN stack to manage the entire workflow, from product creation to order placement.
            </p>
            <a
              href="https://github.com/binayakjoshi/PopNBuy"
              className="project-source"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source Code
            </a>
            <a
              href="https://popnbuy.netlify.app/"
              className="project-source"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live
            </a>
          </div>
          <div className="project-card">
            <h3 className="project-name">Audio Atlas (Music Recommendation App)</h3>
            <p className="project-date">Jan 2025</p>
            <p className="project-description">
              A content-based music recommendation system where users can upload an audio file, and the app suggests similar songs using ML-based feature extraction and KNN for recommendations. Built using the MERN stack, Flask, and Spotify API for metadata enrichment.
            </p>
            <a
              href="https://github.com/binayakjoshi/AudioAtlas"
              className="project-source"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source Code
            </a>
          </div>

          <div className="project-card">
            <h3 className="project-name">Readly (Bookstore app)</h3>
            <p className="project-date">Jan 2024</p>
            <p className="project-description">
               A simple bookstore application with minimalistic UI built using Java Servlets, Tomcat server, and MariaDB. Users can browse books, add them to their cart and place order.The app handles user authentication, inventory management.
            </p>
            <a
              href="https://github.com/binayakjoshi/readly"
              className="project-source"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source Code
            </a>
          </div>
          <div className="project-card">
            <h3 className="project-name">Hangman game</h3>
            <p className="project-date">2021</p>
            <p className="project-description">
             A simple command-line based hangman game I built using python back in 2021.
            </p>
            <a
              href="https://github.com/binayakjoshi/hangman"
              className="project-source"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source Code
            </a>
          </div>
          <div className="project-card">
            <h3 className="project-name">Simple Portfolio</h3>
            <p className="project-date">2021</p>
            <p className="project-description">
              My first web development project, A simple portfolio website I created while learning Python, showcasing my journey and projects. The site is hosted using Flask and deployed on PythonAnywhere.
            </p>
            <a
              href="https://lucifer08.pythonanywhere.com/"
              className="project-source"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live Portfolio
            </a>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2 className="about-subtitle">What I'm Passionate About</h2>
        <p>
          I'm passionate about writing clean, maintainable, and scalable code. I'm always eager to learn new technologies and push the boundaries of what's possible with web development. Currently, I'm focused on:
        </p>
        <ul className="about-list">
          <li>Learning more about DevOps and cloud computing (AWS, Docker, CI/CD)</li>
          <li>Getting into next.js, typescript</li>
        </ul>
      </section>

      <section className="about-section">
        <h2 className="about-subtitle">Let's Connect</h2>
        <p>I'm always open to exciting projects, collaborations, and new opportunities! Whether you're a fellow developer, recruiter, or business owner looking to build something amazing, feel free to reach out:</p>
        <ul className="about-contact">
          <li>Email: <a href="mailto:binayakj@pm.me">binayakj@pm.me</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/binayak-joshi-266203305/" target="_blank" rel="noopener noreferrer">Binayak Joshi</a></li>
          <li>GitHub: <a href="https://github.com/binayakjoshi" target="_blank" rel="noopener noreferrer">binayakjoshi</a></li>
        </ul>
      </section>
    </div>
  );
};

