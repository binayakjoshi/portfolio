"use client";
import { useState } from "react";
import { FaBars, FaGithub, FaLinkedin, FaSun, FaMoon } from "react-icons/fa";
import Button from "../custom-elements/button";
import SideDrawer from "./side-drawer";
import NavLink from "./nav-link";
import { useTheme } from "../theme-provider";

const NavigationBar = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(false);
  const toggleDrawer = () => setDrawerIsOpen((p) => !p);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors duration-200">
      <Button
        className="block sm:hidden fixed top-4 left-4 z-50 inline-flex items-center justify-center p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-md cursor-pointer transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={toggleDrawer}
        aria-label="Menu"
      >
        <FaBars size={20} className="text-gray-700 dark:text-gray-300" />
      </Button>

      <SideDrawer position="left" isOpen={drawerIsOpen} onClose={toggleDrawer}>
        <nav className="p-6">
          <ul className="list-none p-0 m-0 flex flex-col gap-2">
            <li>
              <NavLink href="/">Binayak Joshi</NavLink>
            </li>
            <li>
              <NavLink href="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink href="/about">About Me</NavLink>
            </li>
          </ul>

          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <Button
              onClick={toggleTheme}
              className="flex items-center gap-2 p-2 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 dark:text-gray-300"
            >
              {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
              <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
            </Button>
          </div>
        </nav>
      </SideDrawer>

      <nav className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <ul className="hidden sm:flex items-center space-x-1 list-none p-0 m-0">
            <li>
              <NavLink href="/">Binayak Joshi</NavLink>
            </li>
            <li>
              <NavLink href="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink href="/about">About Me</NavLink>
            </li>
          </ul>

          <ul className="hidden sm:flex items-center space-x-6 list-none p-0 m-0">
            <li>
              <Button href="https://github.com/binayakjoshi">
                <FaGithub
                  size={20}
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                />
              </Button>
            </li>
            <li>
              <Button href="https://www.linkedin.com/in/binayak-joshi-266203305">
                <FaLinkedin
                  size={20}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                />
              </Button>
            </li>
            <li>
              <Button
                onClick={toggleTheme}
                className="p-2 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
