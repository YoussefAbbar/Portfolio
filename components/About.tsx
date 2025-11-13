'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo, education, certifications } from '@/lib/data';
import { FiAward, FiBookOpen } from 'react-icons/fi';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Passionate about building scalable cloud solutions and creating exceptional user experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Bio Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Who I Am
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {personalInfo.bio}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Currently pursuing a Master's degree in Web Architecture at Institut F2I in Vincennes,
                I'm seeking an apprenticeship opportunity starting October 2025 to further develop my
                expertise in cloud architecture and full-stack development.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Location:</span>
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Email:</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Stats/Highlights */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 border border-primary-200 dark:border-primary-800">
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  2+
                </div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">
                  Years Experience
                </div>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900/20 dark:to-secondary-800/20 border border-secondary-200 dark:border-secondary-800">
                <div className="text-4xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">
                  10+
                </div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">
                  Projects Completed
                </div>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20 border border-accent-200 dark:border-accent-800">
                <div className="text-4xl font-bold text-accent-600 dark:text-accent-400 mb-2">
                  15+
                </div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">
                  AWS Services
                </div>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-primary-50 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-800/20 border border-primary-200 dark:border-secondary-800">
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 mb-2">
                  4+
                </div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">
                  Certifications
                </div>
              </div>
            </motion.div>
          </div>

          {/* Education */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <FiBookOpen className="text-primary-600 dark:text-primary-400" size={32} />
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Education
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors"
                >
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    {edu.field}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-500">
                    <span>{edu.duration}</span>
                    <span>{edu.location}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-8">
              <FiAward className="text-secondary-600 dark:text-secondary-400" size={32} />
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Certifications
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="p-4 rounded-lg bg-gradient-to-br from-secondary-50 to-accent-50 dark:from-secondary-900/20 dark:to-accent-900/20 border border-secondary-200 dark:border-secondary-800 text-center"
                >
                  <FiAward className="mx-auto mb-3 text-secondary-600 dark:text-secondary-400" size={24} />
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {cert.issuer}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
