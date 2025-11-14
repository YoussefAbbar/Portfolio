'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiExternalLink } from 'react-icons/fi';
import { personalInfo } from '@/lib/data';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Animated background - Apple style */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50 to-white dark:from-black dark:via-primary-900 dark:to-black" />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-secondary-400 dark:bg-secondary-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 -right-20 w-96 h-96 bg-secondary-300 dark:bg-secondary-700 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20"
        />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="text-center">
          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-5 py-2 rounded-full bg-primary-100 dark:bg-primary-800/50 text-secondary-600 dark:text-secondary-400 font-medium text-sm tracking-wide">
              Welcome to my portfolio
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            <span className="gradient-text">
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-4xl text-gray-700 dark:text-gray-300 font-medium mb-6"
          >
            {personalInfo.title}
          </motion.h2>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.a
              href="/CV_Youssef_ABBAR_Developpeur_FullStack_AWS_Alternance.pdf"
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 bg-primary-100 hover:bg-primary-200 dark:bg-primary-800 dark:hover:bg-primary-700 text-secondary-600 dark:text-secondary-400 rounded-xl font-medium transition-all duration-200"
            >
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-4 justify-center"
          >
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-primary-100 dark:bg-primary-800 text-primary-900 dark:text-primary-100 hover:bg-secondary-100 dark:hover:bg-secondary-800 hover:text-secondary-600 dark:hover:text-secondary-400 transition-all duration-200"
            >
              <FiLinkedin size={22} />
            </motion.a>
            <motion.a
              href={personalInfo.upwork}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-primary-100 dark:bg-primary-800 text-primary-900 dark:text-primary-100 hover:bg-secondary-100 dark:hover:bg-secondary-800 hover:text-secondary-600 dark:hover:text-secondary-400 transition-all duration-200"
            >
              <FiExternalLink size={22} />
            </motion.a>
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-primary-100 dark:bg-primary-800 text-primary-900 dark:text-primary-100 hover:bg-secondary-100 dark:hover:bg-secondary-800 hover:text-secondary-600 dark:hover:text-secondary-400 transition-all duration-200"
            >
              <FiMail size={22} />
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
