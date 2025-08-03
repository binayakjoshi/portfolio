"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

const NavLink = (props: NavLinkProps) => {
  const path = usePathname();

  return (
    <Link
      href={props.href}
      className={`
        text-gray-500 dark:text-gray-400 no-underline font-medium px-4 py-2 text-base transition-colors duration-200 ease-in-out hover:text-black dark:hover:text-white
        ${path === props.href ? "text-black dark:text-white" : ""}
      `}
    >
      {props.children}
    </Link>
  );
};

export default NavLink;
