"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import personalData from "@/data/personal.json";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    {
      name: "GitHub",
      url: personalData.socialLinks.github,
      icon: <FaGithub size={24} />,
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      url: personalData.socialLinks.linkedin,
      icon: <FaLinkedin size={24} />,
      color: "hover:text-blue-500",
    },
    {
      name: "LeetCode",
      url: personalData.socialLinks.leetcode,
      icon: <SiLeetcode size={24} />,
      color: "hover:text-yellow-500",
    },
    {
      name: "Email",
      url: personalData.socialLinks.email,
      icon: <FaEnvelope size={24} />,
      color: "hover:text-primary-400",
    },
  ];

  return (
    <section id="contact" className="relative py-20 bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-purple mx-auto mb-8"></div>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Feel free to reach out! I'm always open to discussing new
            opportunities and collaborations.
          </p>

          <div className="max-w-3xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Contact Details */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <motion.a
                  href={personalData.socialLinks.email}
                  className="flex items-center space-x-4 bg-gray-800/30 backdrop-blur-sm border border-primary-900/20 rounded-xl p-6 card-glow"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-purple rounded-lg flex items-center justify-center shrink-0">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium">
                      {personalData.personalInfo.email}
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  href={personalData.personalInfo.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 bg-gray-800/30 backdrop-blur-sm border border-primary-900/20 rounded-xl p-6 card-glow"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-green to-green-600 rounded-lg flex items-center justify-center shrink-0">
                    <FaDownload size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Resume</p>
                    <p className="text-white font-medium">Download Resume</p>
                  </div>
                </motion.a>
              </div>

              {/* Social Links */}
              <div className="text-center">
                <h4 className="text-xl font-semibold text-white mb-6">
                  Connect with me
                </h4>
                <div className="flex justify-center space-x-6">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 bg-gray-800/50 rounded-lg text-gray-300 ${link.color} transition-all card-glow`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        className="mt-20 pt-8 border-t border-gray-800"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              Designed & Built by{" "}
              <span className="text-gradient font-semibold">
                Gaurav Parulekar
              </span>
            </p>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </motion.footer>
    </section>
  );
}
