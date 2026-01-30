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

          {/* Mobile and Desktop Timeline */}
          <div className="relative">
            {/* Desktop Timeline - Centered vertical line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-purple to-accent-green"></div>

            {/* Mobile Timeline - Left side */}
            <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-purple to-accent-green"></div>

            <div className="space-y-12">
              {experienceData.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className="relative"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute left-4 md:left-1/2 top-8 w-4 h-4 bg-primary-500 rounded-full border-4 border-black transform -translate-x-1/2 z-10"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                    whileHover={{ scale: 1.5 }}
                  />

                  {/* Content Container - Alternating sides on desktop */}
                  <div
                    className={`md:grid md:grid-cols-2 md:gap-8 ${
                      index % 2 === 0 ? "" : "md:grid-flow-col-dense"
                    }`}
                  >
                    {/* Left/Right Content */}
                    <div
                      className={`${
                        index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
                      } pl-12 md:pl-0 ${
                        index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                      }`}
                    >
                      <motion.div
                        className="bg-gray-800/30 backdrop-blur-sm border border-primary-900/20 rounded-xl p-6 card-glow"
                        whileHover={{
                          scale: 1.03,
                          borderColor: "rgba(14, 165, 233, 0.5)",
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-white mb-2">
                              {exp.position}
                            </h3>
                            <div className="flex items-center text-primary-400 font-semibold mb-3">
                              <FaBriefcase className="mr-2 flex-shrink-0" />
                              <span>{exp.company}</span>
                            </div>
                            <div className="flex flex-col gap-2 text-gray-400 text-sm mb-4">
                              <div className="flex items-center">
                                <FaCalendarAlt className="mr-2 flex-shrink-0" />
                                <span>{exp.duration}</span>
                              </div>
                              <div className="flex items-center">
                                <FaMapMarkerAlt className="mr-2 flex-shrink-0" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>
                          <span className="px-3 py-1 bg-gradient-to-r from-primary-500/20 to-accent-purple/20 text-primary-400 rounded-full text-xs font-semibold border border-primary-500/30">
                            {exp.type}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Responsibilities */}
                        <div className="mb-4">
                          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
                            Key Highlights
                          </h4>
                          <ul className="space-y-2">
                            {exp.responsibilities
                              .slice(0, 3)
                              .map((resp, idx) => (
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
                                  <span className="text-primary-400 mr-2 mt-1">
                                    ▹
                                  </span>
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
                              className="px-3 py-1.5 bg-gradient-to-r from-gray-700/50 to-gray-800/50 text-gray-300 rounded-lg text-xs font-medium border border-gray-600/30 hover:border-primary-500/50 hover:from-primary-500/10 hover:to-accent-purple/10 transition-all"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : {}}
                              transition={{
                                duration: 0.3,
                                delay: index * 0.2 + 0.6 + idx * 0.05,
                              }}
                              whileHover={{
                                scale: 1.1,
                                y: -2,
                              }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Spacer for opposite side */}
                    <div
                      className={`hidden md:block ${
                        index % 2 === 0 ? "md:col-start-2" : "md:col-start-1"
                      }`}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
