'use client';
import { SiLeetcode } from 'react-icons/si'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { BsBook, BsFileEarmarkArrowUp } from 'react-icons/bs'
import { IoNutritionOutline } from 'react-icons/io5'
import { useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

const projects = [
  {
    title: './nutrition-tracker',
    description: 'A nutrition tracking application that helps users monitor their daily nutritional intake and maintain a healthy diet.',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/carved4/nutrihelper',
    live: 'https://nutrihelp.lol',
    icon: IoNutritionOutline,
  },
  {
    title: 'convert.sh',
    description: 'A versatile file conversion platform that enables users to seamlessly transform documents and media files between different formats with an intuitive drag-and-drop interface.',
    tech: ['Vite', 'Tailwind', 'Javascript', 'Next.js', 'Node.js'],
    github: 'https://github.com/carved4/fileconversionhub',
    live: 'https://fileconverthub.vercel.app',
    icon: BsFileEarmarkArrowUp,
  },
  {
    title: 'leetcode --help',
    description: 'An intelligent LeetCode problem analysis tool that provides optimization suggestions, complexity analysis, and problem-solving approaches to improve coding skills.',
    tech: ['Python', 'GraphQL', 'HTML', 'Vercel'],
    github: 'https://github.com/carved4/leethelper',
    live: 'https://leethelp.live',
    icon: SiLeetcode,
  },
]

export default function Projects() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  const { theme } = useTheme()

  return (
    <section id="projects" className="section-padding bg-background" ref={containerRef}>
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-3xl sm:text-4xl font-bold mb-4 text-text font-jetbrains inline-block"
          >
            <motion.span 
              className="text-primary"
              whileHover={{ rotate: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              git
            </motion.span>
            {' '}
            <span className="text-primary/80"></span>projects
            <motion.span className="text-primary/80"></motion.span>
            <motion.span 
              className="text-text/50 ml-1 animate-pulse"
              whileHover={{ opacity: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              █
            </motion.span>
          </motion.h2>
          <motion.div 
            className="tech-divider"
            whileHover={{ 
              width: "16rem",
              opacity: 0.5,
              transition: { duration: 0.3 }
            }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1,
                transition: {
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: "easeOut"
                }
              }}
              whileHover={{ scale: 1.01 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative bg-[#1a1a1a] backdrop-blur-md rounded-lg
                border border-primary/10
                shadow-lg shadow-black/20
                hover:shadow-xl hover:shadow-primary/10
                transition-all duration-300
                overflow-hidden"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />

              <div className="relative p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-primary font-code">$</span>
                  <div className="flex items-center gap-3">
                    {project.icon && (
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="text-primary/80 hover:text-primary transition-colors duration-300"
                      >
                        <project.icon className="w-6 h-6" />
                      </motion.div>
                    )}
                    <h3 className="text-lg sm:text-xl font-medium text-text/90 font-code group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="pl-6 border-l border-primary/10 mb-6">
                  <p className="text-text/70 font-code text-sm sm:text-base leading-relaxed group-hover:text-text/80 transition-colors duration-300">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6 pl-6">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ y: -2 }}
                      className="px-3 py-1 text-sm 
                        bg-[#1a1a1a] text-text/70
                        rounded-md font-code 
                        border border-primary/10
                        shadow-sm shadow-black/10
                        hover:border-primary/30 hover:text-text/90
                        transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-6 pl-6">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text/70 hover:text-primary 
                      transition-all duration-300 font-code text-sm group/link"
                    whileHover={{ x: 3 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <FiGithub className="w-4 h-4" />
                    </motion.div>
                    <span className="relative">
                      source
                      <span className="absolute left-0 right-0 bottom-0 h-px bg-primary transform scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300" />
                    </span>
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text/70 hover:text-primary 
                      transition-all duration-300 font-code text-sm group/link"
                    whileHover={{ x: 3 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <FiExternalLink className="w-4 h-4" />
                    </motion.div>
                    <span className="relative">
                      demo
                      <span className="absolute left-0 right-0 bottom-0 h-px bg-primary transform scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300" />
                    </span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
