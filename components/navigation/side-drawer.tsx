"use client";
import type { ReactNode } from "react";

type SideDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  position?: "left" | "right";
};

const SideDrawer = ({
  isOpen,
  onClose,
  children,
  position = "right",
}: SideDrawerProps) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-300 dark:bg-gray-900 bg-opacity-30 dark:bg-opacity-50 z-[999] transition-colors duration-200"
          onClick={onClose}
        />
      )}
      <aside
        className={`
          fixed top-0 w-[300px] h-full bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 ease-out z-[1000] p-4 border-r border-gray-200 dark:border-gray-700
          ${position === "left" ? "left-0" : "right-0"}
          ${
            isOpen
              ? "translate-x-0"
              : position === "left"
              ? "-translate-x-full"
              : "translate-x-full"
          }
        `}
        role="navigation"
      >
        <button
          className="bg-transparent border-none text-2xl cursor-pointer mb-4 hover:opacity-70 text-gray-700 dark:text-gray-300 transition-colors duration-200"
          onClick={onClose}
          aria-label="Close Menu"
        >
          &times;
        </button>
        <div className="pt-4">{children}</div>
      </aside>
    </>
  );
};

export default SideDrawer;
