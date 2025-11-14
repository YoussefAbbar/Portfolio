'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { education } from '@/lib/data';
import { FiBookOpen, FiMapPin, FiCalendar } from 'react-icons/fi';

export default function Education() {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
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
              <span className="gradient-text">Education</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              My academic journey in technology and software engineering
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500" />

            {/* Education Items */}
            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      {/* Degree & Field */}
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold text-lg mb-2" style={{ justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                          <FiBookOpen size={20} />
                          <span>{edu.institution}</span>
                        </div>
                        <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400 text-sm" style={{ justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                          <div className="flex items-center gap-1">
                            <FiCalendar size={16} />
                            <span>{edu.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FiMapPin size={16} />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Field of Study */}
                      <div className="text-gray-600 dark:text-gray-400" style={{ textAlign: index % 2 === 0 ? 'right' : 'left' }}>
                        <span className="text-primary-500">Field of Study:</span> {edu.field}
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline Node */}
                  <div className="hidden md:flex items-center justify-center flex-shrink-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.5 }}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 border-4 border-gray-50 dark:border-gray-800 shadow-lg flex items-center justify-center relative z-10"
                    >
                      <FiBookOpen className="text-white" size={20} />
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
