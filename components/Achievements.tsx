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

  const getGlowColor = (color: string) => {
    const glows: { [key: string]: string } = {
      purple: "shadow-[0_0_40px_rgba(168,85,247,0.4)]",
      blue: "shadow-[0_0_40px_rgba(14,165,233,0.4)]",
      green: "shadow-[0_0_40px_rgba(16,185,129,0.4)]",
      orange: "shadow-[0_0_40px_rgba(251,146,60,0.4)]",
    };
    return glows[color] || "shadow-[0_0_40px_rgba(14,165,233,0.4)]";
  };

  return (
    <section
      id="achievements"
      className="relative py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden"
      ref={ref}
    >
      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-500/20 rounded-full"
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: "100%",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{
                  y: -15,
                  scale: 1.03,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
                className="group perspective-1000"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-2 border-gray-700/30 rounded-2xl overflow-hidden h-full hover:border-transparent transition-all duration-500 group-hover:${getGlowColor(achievement.color)} relative`}
                >
                  {/* Animated gradient border */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${getColorClass(achievement.color)} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl`}
                  ></div>

                  {/* Ribbon */}
                  <div className="absolute top-4 -right-12 w-40 h-8 bg-gradient-to-r from-yellow-500/80 to-yellow-600/80 rotate-45 flex items-center justify-center text-white text-xs font-bold shadow-lg">
                    EARNED
                  </div>

                  {/* Header with Icon or Image */}
                  <div
                    className={`${(achievement as any).image ? "h-48" : "p-8"} bg-gradient-to-br ${getColorClass(achievement.color)} relative overflow-hidden`}
                  >
                    {/* Show image if provided, otherwise show gradient with icon */}
                    {(achievement as any).image ? (
                      <>
                        <img
                          src={(achievement as any).image}
                          alt={achievement.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity"></div>
                        <div className="absolute bottom-4 left-4 z-10">
                          <span className="text-white/90 text-sm font-semibold bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                            {achievement.date}
                          </span>
                        </div>
                        <div className="absolute top-4 left-4 z-10 text-white drop-shadow-lg">
                          <motion.div
                            whileHover={{
                              scale: 1.2,
                              rotate: 360,
                            }}
                            transition={{ duration: 0.6 }}
                            className="inline-block"
                          >
                            {getIcon(achievement.icon)}
                          </motion.div>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Animated background shapes */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl transform translate-x-16 -translate-y-16"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform -translate-x-10 translate-y-10"></div>

                        <motion.div
                          className="relative z-10 text-white mb-4"
                          animate={{
                            y: [0, -5, 0],
                            rotate: [0, 5, -5, 0],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.3,
                          }}
                        >
                          <motion.div
                            whileHover={{
                              scale: 1.2,
                              rotate: 360,
                              filter:
                                "drop-shadow(0 0 20px rgba(255,255,255,0.8))",
                            }}
                            transition={{ duration: 0.6 }}
                            className="inline-block"
                          >
                            {getIcon(achievement.icon)}
                          </motion.div>
                        </motion.div>

                        <div className="relative z-10">
                          <span className="text-white/90 text-sm font-semibold bg-black/20 px-3 py-1 rounded-full">
                            {achievement.date}
                          </span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 relative">
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-accent-purple transition-all duration-300">
                        {achievement.title}
                      </h3>
                      <p className="text-primary-400 font-semibold text-sm mb-3 flex items-center">
                        <motion.span
                          className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [1, 0.5, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        {achievement.organization}
                      </p>
                      <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                        {achievement.description}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-700/30">
                        <span
                          className={`px-4 py-1.5 bg-gradient-to-r ${getColorClass(achievement.color)} bg-opacity-20 text-white rounded-full text-xs font-semibold border border-white/10 shadow-lg`}
                        >
                          {achievement.category}
                        </span>
                        <motion.div
                          className={`w-12 h-12 rounded-full bg-gradient-to-br ${getColorClass(achievement.color)} flex items-center justify-center shadow-lg`}
                          whileHover={{
                            rotate: 360,
                            scale: 1.2,
                          }}
                          transition={{ duration: 0.6 }}
                        >
                          <FaTrophy
                            size={20}
                            className="text-white drop-shadow-lg"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {[
              {
                label: "Wins",
                value: "5+",
                color: "from-yellow-500 to-orange-500",
              },
              {
                label: "Certifications",
                value: "3+",
                color: "from-blue-500 to-purple-500",
              },
              {
                label: "Hackathons",
                value: "10+",
                color: "from-green-500 to-emerald-500",
              },
              {
                label: "Projects",
                value: "20+",
                color: "from-pink-500 to-red-500",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300 group"
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
                <div
                  className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${stat.color} mx-auto mt-3 rounded-full transition-all duration-500`}
                ></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
