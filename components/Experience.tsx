"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import experienceData from "@/data/experience.json";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-20 bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-purple mx-auto mb-16"></div>

          <div className="relative max-w-5xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-purple to-accent-green transform md:-translate-x-1/2"></div>

            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0
                    ? "md:pr-1/2 md:text-right"
                    : "md:pl-1/2 md:ml-auto"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline dot */}
                <motion.div
                  className={`absolute left-8 md:left-1/2 top-0 w-4 h-4 bg-primary-500 rounded-full border-4 border-black transform -translate-x-1/2 ${
                    index % 2 === 0
                      ? "md:translate-x-[-50%]"
                      : "md:translate-x-[-50%]"
                  }`}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  whileHover={{ scale: 1.5 }}
                />

                <motion.div
                  className={`ml-16 md:ml-0 ${index % 2 === 0 ? "md:mr-16" : "md:ml-16"}`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-primary-900/20 rounded-xl p-6 card-glow hover:scale-[1.02] transition-transform">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {exp.position}
                        </h3>
                        <div className="flex items-center text-primary-400 font-semibold mb-2">
                          <FaBriefcase className="mr-2" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-gray-400 text-sm">
                          <div className="flex items-center">
                            <FaCalendarAlt className="mr-2" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <FaMapMarkerAlt className="mr-2" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-xs font-semibold whitespace-nowrap">
                        {exp.type}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    {/* Responsibilities */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <motion.li
                            key={idx}
                            className="text-gray-400 text-sm flex items-start"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{
                              duration: 0.4,
                              delay: index * 0.2 + 0.4 + idx * 0.1,
                            }}
                          >
                            <span className="text-primary-400 mr-2">▹</span>
                            <span>{resp}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-lg text-xs font-medium border border-gray-600/30 hover:border-primary-500/50 transition-colors"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.2 + 0.6 + idx * 0.05,
                          }}
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(14, 165, 233, 0.1)",
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
