import { FaEnvelope, FaLinkedin, FaGithub, FaArrowRight } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className="max-w-4xl mx-auto my-16 p-4 transition-colors duration-200">
      <section className="about-section">
        <div className="relative mb-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gray-500 rounded"></div>
        </div>

        <div className="space-y-6 mb-8">
          <p className="leading-relaxed text-lg text-gray-700 dark:text-gray-300">
            I&apos;m a passionate Full-Stack Developer specializing in creating
            responsive, scalable, and user-friendly applications that are both
            efficient and scalable.
          </p>

          <p className="leading-relaxed text-lg text-gray-700 dark:text-gray-300">
            As a developer, I enjoy transforming complex problems into simple,
            beautiful, and intuitive solutions. Whether it&apos;s creating a
            stunning front-end user interface or designing a well-structured
            backend architecture, I love working through the entire development
            lifecycle.
          </p>
        </div>

        {/* Skills Section */}
        <div className="bg-white dark:bg-zinc-700 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-500 p-6 mb-8 transition-colors duration-200">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-6">
            Technical Skills
          </h3>
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <FaArrowRight className="text-black-500 flex-shrink-0" />
              <strong className="text-gray-900 dark:text-zinc-100">
                Languages:
              </strong>
              <div className="flex flex-wrap gap-2">
                {["TypeScript", "JavaScript", "Python", "Java", "C++"].map(
                  (lang) => (
                    <span
                      key={lang}
                      className="bg-gray-100 dark:bg-zinc-600 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-lg text-sm font-medium"
                    >
                      {lang}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <FaArrowRight className="text-black-500 flex-shrink-0" />
              <strong className="text-gray-900 dark:text-white">
                Frameworks:
              </strong>
              <div className="flex flex-wrap gap-2">
                {["NextJS", "React", "Node.js", "Express.js", "NestJS"].map(
                  (framework) => (
                    <span
                      key={framework}
                      className="bg-gray-100 dark:bg-zinc-600 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-lg text-sm font-medium"
                    >
                      {framework}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <FaArrowRight className="text-black-500 flex-shrink-0" />
              <strong className="text-gray-900 dark:text-white">Tools:</strong>
              <div className="flex flex-wrap gap-2">
                {["AWS", "Docker", "Git", "Github", "Netlify", "Heroku"].map(
                  (tool) => (
                    <span
                      key={tool}
                      className="bg-gray-100 dark:bg-zinc-600 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-lg text-sm font-medium"
                    >
                      {tool}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Passion Section */}
        <div className="bg-white dark:bg-zinc-700 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-500 p-6 mb-8 transition-colors duration-200">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            What I&apos;m Passionate About
          </h3>

          <p className="leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
            I&apos;m passionate about writing clean, maintainable, and scalable
            code. I&apos;m always eager to learn new technologies and push the
            boundaries of what&apos;s possible with web development. Currently,
            I&apos;m focused on:
          </p>

          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <div className="w-2 h-2 bg-gray-500 rounded-full flex-shrink-0"></div>
              <span>Learning About DevOps and cloud computing</span>
            </li>
            <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <div className="w-2 h-2 bg-gray-500 rounded-full flex-shrink-0"></div>
              <span>Getting into NestJS</span>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="bg-white dark:bg-zinc-700 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-500 p-6 transition-colors duration-200">
          <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Contact Information
          </h4>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-black-500 text-lg" />
              <span className="text-gray-900 dark:text-white font-medium">
                Email:
              </span>
              <a
                href="mailto:binayakj@pm.me"
                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-blue-400 transition-colors duration-200"
              >
                binayakj@pm.me
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaLinkedin className="text-black-500 text-lg" />
              <span className="text-gray-900 dark:text-white font-medium">
                LinkedIn:
              </span>
              <a
                href="https://www.linkedin.com/in/binayak-joshi-266203305/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-blue-400 transition-colors duration-200"
              >
                Binayak Joshi
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaGithub className="text-black-500 text-lg" />
              <span className="text-gray-900 dark:text-white font-medium">
                GitHub:
              </span>
              <a
                href="https://github.com/binayakjoshi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-blue-400 transition-colors duration-200"
              >
                binayakjoshi
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
