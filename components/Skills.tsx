'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '@/lib/data';
import { FiCloud, FiCode, FiDatabase, FiSettings, FiFileText, FiMonitor } from 'react-icons/fi';

const categoryIcons: { [key: string]: React.ReactNode } = {
  'Cloud & AWS': <FiCloud size={24} />,
  'Frontend Development': <FiCode size={24} />,
  'Backend Development': <FiMonitor size={24} />,
  'Database & Data': <FiDatabase size={24} />,
  'DevOps & Tools': <FiSettings size={24} />,
  'Documentation & Communication': <FiFileText size={24} />,
};

const categoryColors: { [key: string]: string } = {
  'Cloud & AWS': 'from-primary-500 to-primary-700',
  'Frontend Development': 'from-secondary-500 to-secondary-700',
  'Backend Development': 'from-accent-500 to-accent-700',
  'Database & Data': 'from-green-500 to-green-700',
  'DevOps & Tools': 'from-purple-500 to-purple-700',
  'Documentation & Communication': 'from-pink-500 to-pink-700',
};

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
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
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillCategory, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                {/* Card */}
                <div className="h-full p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${categoryColors[skillCategory.category]} text-white`}>
                      {categoryIcons[skillCategory.category]}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {skillCategory.category}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-primary-300 transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* Gradient Border on Hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${categoryColors[skillCategory.category]} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              I'm constantly exploring new technologies and best practices to stay at the forefront of web development and cloud architecture. Currently deepening my expertise in serverless architectures and microservices patterns.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
