"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaTrophy, FaAward, FaCertificate, FaCode } from "react-icons/fa";
import achievementsData from "@/data/achievements.json";

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: JSX.Element } = {
      trophy: <FaTrophy size={32} />,
      award: <FaAward size={32} />,
      certificate: <FaCertificate size={32} />,
      code: <FaCode size={32} />,
    };
    return icons[iconName] || <FaTrophy size={32} />;
  };

  const getColorClass = (color: string) => {
    const colors: { [key: string]: string } = {
      purple: "from-accent-purple to-purple-600",
      blue: "from-primary-500 to-blue-600",
      green: "from-accent-green to-green-600",
      orange: "from-orange-500 to-red-500",
    };
    return colors[color] || "from-primary-500 to-accent-purple";
  };

  return (
    <section
      id="achievements"
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
            Achievements & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-purple mx-auto mb-8"></div>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Recognition and accolades earned through dedication, innovation, and
            continuous learning
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievementsData.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 50, rotateY: -20 }}
                animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="bg-gray-800/30 backdrop-blur-sm border border-primary-900/20 rounded-xl overflow-hidden card-glow h-full">
                  {/* Header with Icon */}
                  <div
                    className={`bg-gradient-to-r ${getColorClass(achievement.color)} p-6 relative overflow-hidden`}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
                    <motion.div
                      className="relative z-10 text-white"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {getIcon(achievement.icon)}
                    </motion.div>
                    <div className="mt-4">
                      <span className="text-white/80 text-sm font-medium">
                        {achievement.date}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-primary-400 font-semibold text-sm mb-3">
                      {achievement.organization}
                    </p>
                    <p className="text-gray-400 text-sm mb-4">
                      {achievement.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs font-medium border border-gray-600/30">
                        {achievement.category}
                      </span>
                      <motion.div
                        className={`w-10 h-10 rounded-full bg-gradient-to-r ${getColorClass(achievement.color)} flex items-center justify-center`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <FaTrophy size={16} className="text-white" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {[
              {
                label: "Hackathons Won",
                value: "3+",
                color: "from-accent-purple to-purple-600",
              },
              {
                label: "Certifications",
                value: "1+",
                color: "from-primary-500 to-blue-600",
              },
              {
                label: "GitHub Stars",
                value: "50+",
                color: "from-accent-green to-green-600",
              },
              {
                label: "Open Source",
                value: "100+",
                color: "from-orange-500 to-red-500",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gray-800/30 backdrop-blur-sm border border-primary-900/20 rounded-xl p-6 card-glow">
                  <motion.div
                    className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
