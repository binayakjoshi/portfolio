"use client";
import { useState, useEffect } from "react";
import {
  FaBars,
  FaGithub,
  FaLinkedin,
  FaSun,
  FaMoon,
  FaHome,
  FaProjectDiagram,
  FaUser,
} from "react-icons/fa";
import Button from "../custom-elements/button";
import SideDrawer from "./side-drawer";
import NavLink from "./nav-link";
import { useTheme } from "next-themes";

const NavigationBar = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);
  const toggleDrawer = () => setDrawerIsOpen((p) => !p);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="w-full bg-white dark:bg-zinc-900 shadow-sm border-b border-gray-200 dark:border-gray-600 transition-colors duration-200">
      <Button
        className="block sm:hidden fixed top-4 left-4 z-50 inline-flex items-center justify-center p-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-500 rounded-lg shadow-md cursor-pointer transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-600 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={toggleDrawer}
        aria-label="Menu"
      >
        <FaBars size={20} className="text-gray-700 dark:text-gray-300" />
      </Button>

      <SideDrawer position="left" isOpen={drawerIsOpen} onClose={toggleDrawer}>
        <div className="h-full flex flex-col bg-white dark:bg-zinc-800">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              Navigation
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Explore my portfolio
            </p>
          </div>

          <nav className="flex-1 p-6">
            <ul className="list-none p-0 m-0 space-y-2">
              <li className="flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-zinc-700 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 group">
                <FaHome className="text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-black transition-colors duration-200" />
                <NavLink href="/">
                  <span className="font-medium">Binayak Joshi</span>
                </NavLink>
              </li>
              <li className="flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-zinc-700 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 group">
                <FaProjectDiagram className="text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-black transition-colors duration-200" />
                <NavLink href="/projects">
                  <span className="font-medium">Projects</span>
                </NavLink>
              </li>
              <li className="flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-zinc-700 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 group">
                <FaUser className="text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-black-400 transition-colors duration-200" />
                <NavLink href="/about">
                  <span className="font-medium">About Me</span>
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-zinc-800">
            <div className="mb-4">
              <Button
                onClick={() =>
                  setTheme(resolvedTheme === "dark" ? "light" : "dark")
                }
                className="w-full flex items-center justify-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-gray-200 dark:hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600"
              >
                {resolvedTheme === "dark" ? (
                  <FaSun size={18} className="text-yellow-500" />
                ) : (
                  <FaMoon size={18} className="text-blue-600" />
                )}
                <span className="font-medium">
                  {resolvedTheme === "dark" ? "Light Mode" : "Dark Mode"}
                </span>
              </Button>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                Connect
              </p>
              <Button
                href="https://github.com/binayakjoshi"
                className="w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-gray-900 hover:text-white dark:hover:bg-zinc-700 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 group"
              >
                <FaGithub className="group-hover:text-white transition-colors duration-200" />
                <span className="font-medium">GitHub Profile</span>
              </Button>
              <Button
                href="https://www.linkedin.com/in/binayak-joshi-266203305"
                className="w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-gray-900 hover:text-white text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 group"
              >
                <FaLinkedin className="group-hover:text-white transition-colors duration-200" />
                <span className="font-medium">LinkedIn Profile</span>
              </Button>
            </div>
          </div>
        </div>
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
                onClick={() =>
                  setTheme(resolvedTheme === "dark" ? "light" : "dark")
                }
                className="p-2 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {resolvedTheme === "dark" ? (
                  <FaSun size={18} />
                ) : (
                  <FaMoon size={18} />
                )}
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
