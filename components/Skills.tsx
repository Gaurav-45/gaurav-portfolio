"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import skillsData from "@/data/skills.json";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categoryGradients = [
    "from-blue-500/10 to-purple-500/10",
    "from-purple-500/10 to-pink-500/10",
    "from-green-500/10 to-emerald-500/10",
    "from-orange-500/10 to-red-500/10",
  ];

  const categoryBorderColors = [
    "from-blue-500/20 to-purple-500/20",
    "from-purple-500/20 to-pink-500/20",
    "from-green-500/20 to-emerald-500/20",
    "from-orange-500/20 to-red-500/20",
  ];

  const categoryAccentColors = [
    "from-blue-500 to-purple-500",
    "from-purple-500 to-pink-500",
    "from-green-500 to-emerald-500",
    "from-orange-500 to-red-500",
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Technologies I work with
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillsData.categories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className={`bg-gradient-to-br ${categoryGradients[categoryIndex % categoryGradients.length]} backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/30 relative overflow-hidden group`}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <motion.span 
                    className={`w-2 h-8 bg-gradient-to-b ${categoryAccentColors[categoryIndex % categoryAccentColors.length]} mr-3 rounded-full`}
                    animate={{
                      scaleY: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: categoryIndex * 0.2,
                    }}
                  ></motion.span>
                  {category.name}
                </h3>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                  {category.skills.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.1 + index * 0.05,
                      }}
                      whileHover={{
                        scale: 1.15,
                        y: -8,
                        rotateY: 10,
                      }}
                      className={`bg-gradient-to-br from-gray-800/90 to-gray-900/90 p-4 rounded-xl border bg-gradient-to-br ${categoryBorderColors[categoryIndex % categoryBorderColors.length]} hover:shadow-xl hover:shadow-primary-500/20 transition-all duration-300 group/item cursor-pointer backdrop-blur-sm relative overflow-hidden`}
                      style={{
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      {/* Gradient overlay on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${categoryGradients[categoryIndex % categoryGradients.length]} opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-xl`}></div>
                      
                      <div className="flex flex-col items-center space-y-2 relative z-10">
                        <motion.div 
                          className="w-12 h-12 relative"
                          animate={{
                            y: [0, -5, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.1,
                          }}
                        >
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-full h-full object-contain group-hover/item:drop-shadow-[0_0_8px_rgba(14,165,233,0.5)] transition-all duration-300"
                          />
                        </motion.div>
                        <span className="text-gray-300 text-xs font-medium text-center group-hover/item:text-white transition-colors">
                          {tech.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
