"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaGithub, FaStar, FaRocket } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import projectsData from "@/data/projects.json";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("all");

  const categories = [
    "all",
    ...Array.from(new Set(projectsData.map((p) => p.category))),
  ];
  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="relative py-20 bg-gradient-to-b from-gray-900 to-black"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-purple mx-auto mb-8"></div>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            A collection of my recent work showcasing expertise in full-stack
            development, and innovative problem-solving
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === category
                    ? "bg-gradient-to-r from-primary-500 to-accent-purple text-white shadow-lg shadow-primary-500/30"
                    : "bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-gray-800/30 backdrop-blur-sm border border-primary-900/20 rounded-xl overflow-hidden card-glow h-full flex flex-col">
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-primary-900/20 to-accent-purple/20 overflow-hidden">
                    {project.featured && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="flex items-center px-3 py-1 bg-gradient-to-r from-primary-500 to-accent-purple rounded-full text-xs font-bold text-white">
                          <FaStar className="mr-1" /> Featured
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="text-6xl text-primary-400 opacity-20"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        💻
                      </motion.div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className="px-2 py-1 bg-primary-500/20 text-primary-400 rounded text-xs font-semibold whitespace-nowrap ml-2">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-gray-400 text-sm mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-gradient-to-r from-gray-700/50 to-gray-800/50 text-gray-300 rounded-lg text-xs font-medium border border-gray-600/30 hover:border-primary-500/50 hover:text-primary-400 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1.5 text-primary-400 text-xs font-semibold">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex space-x-4">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-700/30 border border-gray-600/30 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 hover:border-gray-500/50 transition-all font-medium"
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          <FaGithub className="text-sm" />
                          <span>Code</span>
                        </motion.a>
                      )}
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-primary-500/10 to-accent-purple/10 border border-primary-500/30 rounded-lg text-primary-400 hover:bg-primary-500/20 hover:border-primary-500/50 transition-all font-medium"
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          <FaRocket className="text-sm" />
                          <span>Live Demo</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.a
              href="https://github.com/Gaurav-45"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gray-800/50 border border-primary-500 rounded-lg text-primary-400 font-semibold hover:bg-primary-500/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="mr-2" size={20} />
              View More on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
