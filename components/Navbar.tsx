"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import personalData from "@/data/personal.json";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-lg border-b border-primary-900/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-xl font-bold text-gradient"
            whileHover={{ scale: 1.05 }}
          >
            GP
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <motion.a
              href={personalData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary-400 transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <FaGithub size={20} />
            </motion.a>
            <motion.a
              href={personalData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary-400 transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <FaLinkedin size={20} />
            </motion.a>
            <motion.a
              href={personalData.socialLinks.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary-400 transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <SiLeetcode size={20} />
            </motion.a>
            <motion.a
              href={personalData.personalInfo.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-purple rounded-lg text-white font-medium flex items-center space-x-2 hover:shadow-lg hover:shadow-primary-500/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload size={16} />
              <span>Resume</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
