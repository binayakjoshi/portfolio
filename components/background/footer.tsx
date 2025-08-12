'use client';

import React from 'react';
import { FaLinkedin, FaEnvelope, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/binayak-joshi-266203305', 
      label: 'LinkedIn',
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    {
      icon: FaEnvelope,
      href: 'mailto:binayak@pm.me', 
      label: 'Email',
      color: 'hover:text-red-600 dark:hover:text-red-400'
    },
    {
      icon: FaGithub,
      href: 'https://github.com/binayakjoshi',
      label: 'GitHub',
      color: 'hover:text-gray-800 dark:hover:text-gray-300'
    },
    {
      icon: FaTwitter,
      href: 'https://twitter.com/binayakjoshi', 
      label: 'Twitter',
      color: 'hover:text-blue-500 dark:hover:text-blue-300'
    }
  ];

  return (
    <footer className="relative z-10 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-t border-gray-200 dark:border-zinc-700 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-6">
          
          <div className="flex space-x-6">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-600 dark:text-gray-400 ${social.color} transition-colors duration-200 transform hover:scale-110`}
                  aria-label={social.label}
                >
                  <IconComponent size={24} />
                </a>
              );
            })}
          </div>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-zinc-600 to-transparent"></div>

          <div className="text-center space-y-2">
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              Binayak Joshi
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {currentYear} All rights reserved. Built with passion and code.
            </p>
          </div>

          <div className="text-xs text-gray-400 dark:text-gray-500 flex items-center space-x-2">
            <span>Built with</span>
            <span className="text-blue-600 dark:text-blue-400 font-semibold">Next.js</span>
            <span>•</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-semibold">TypeScript</span>
            <span>•</span>
            <span className="text-blue-500 dark:text-blue-300 font-semibold">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;