"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import personalData from "@/data/personal.json";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { label: "Years Experience", value: "2.5+" },
    { label: "Projects Completed", value: "15+" },
    { label: "Hackathons Won", value: "3" },
    { label: "Technologies", value: "20+" },
  ];

  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-b from-black to-gray-900"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-purple mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {personalData.personalInfo.bio}
              </p>
              <p className="text-gray-400 text-base leading-relaxed mb-6">
                Currently working at{" "}
                <span className="text-primary-400 font-semibold">Barclays</span>
                , I specialize in building robust, scalable applications using
                modern web technologies. My experience spans across frontend
                frameworks like React and Next.js, backend technologies
                including Node.js and Java, and cloud platforms such as AWS.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                Beyond coding, I'm passionate about participating in hackathons,
                contributing to open-source projects, and staying updated with
                the latest tech trends. I believe in writing clean, maintainable
                code and creating exceptional user experiences.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-gray-800/30 backdrop-blur-sm border border-primary-900/20 rounded-xl p-6 text-center card-glow"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    borderColor: "rgba(14, 165, 233, 0.5)",
                  }}
                >
                  <motion.h3
                    className="text-4xl font-bold text-gradient mb-2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.h3>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
