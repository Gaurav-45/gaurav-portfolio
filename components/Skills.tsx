"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import skillsData from "@/data/skills.json";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-20 bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-purple mx-auto mb-8"></div>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Technologies I work with to build cutting-edge solutions
          </p>

          <div className="space-y-12">
            {skillsData.categories.map((category, catIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: catIndex * 0.15 }}
              >
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <span className="text-primary-400 mr-3">{"<"}</span>
                  {category.name}
                  <span className="text-primary-400 ml-3">{"/>"}</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-primary-500/50 to-transparent ml-6"></div>
                </h3>

                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: catIndex * 0.15 + skillIndex * 0.03,
                      }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="group"
                    >
                      <div className="bg-gray-800/30 backdrop-blur-sm border border-primary-900/20 rounded-xl p-4 text-center card-glow flex flex-col items-center justify-center">
                        {/* Tech Logo */}
                        <motion.div
                          className="w-12 h-12 mb-3 flex items-center justify-center"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all"
                            onError={(e) => {
                              // Fallback to colored div with initial
                              e.currentTarget.style.display = "none";
                              const fallback = e.currentTarget
                                .nextElementSibling as HTMLElement;
                              if (fallback) fallback.style.display = "flex";
                            }}
                          />
                          <div className="w-full h-full bg-gradient-to-br from-primary-500 to-accent-purple rounded-lg items-center justify-center text-white font-bold text-2xl hidden">
                            {skill.name.charAt(0)}
                          </div>
                        </motion.div>

                        {/* Skill Name */}
                        <h4 className="text-white text-sm font-medium group-hover:text-primary-400 transition-colors">
                          {skill.name}
                        </h4>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Section */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <p className="text-gray-400 mb-4">Also experienced with:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "REST APIs",
                "GraphQL",
                "OAuth",
                "JWT",
                "CI/CD",
                "Agile",
                "Unit Testing",
                "Jest",
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-gray-300 text-sm hover:border-primary-500/50 hover:text-primary-400 transition-all"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 1.2 + index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
