import { FaGithub, FaLinkedin, FaSun, FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";
import Button from "../UI/Button";
import "./NavActions.css";

const NavActions = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);
  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };
  return (
    <div className="nav-actions">
      <a
        href="https://github.com/binayakjoshi"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub size={22} />
      </a>
      <a
        href="https://www.linkedin.com/in/binayak-joshi-266203305/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={22} />
      </a>
      <Button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </Button>
    </div>
  );
};
export default NavActions;
