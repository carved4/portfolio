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
    title: 'sudo apt-get study',
    description: 'A comprehensive study platform built with Next.js, TypeScript, and Tailwind CSS. Features include task management, progress tracking, and collaborative study tools.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    github: 'https://github.com/carved4/studyflow',
    live: 'https://studyflow-six.vercel.app',
    icon: BsBook,
  },
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
            <span className="text-primary/80">~/</span>projects
            <motion.span className="text-primary/80">.git</motion.span>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-secondary/30 backdrop-blur-sm rounded-lg overflow-hidden border border-text/10 hover:border-text/20 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-primary font-code">$</span>
                  <div className="flex items-center gap-3">
                    {project.icon && <project.icon className="w-5 h-5 text-primary" />}
                    <h3 className="text-xl font-semibold text-text font-code">{project.title}</h3>
                  </div>
                </div>
                <div className="pl-6 border-l-2 border-primary/20 mb-4">
                  <p className="text-text/80 font-code text-sm">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-secondary/50 text-text/80 rounded-full font-code border border-text/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pl-6">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text/70 hover:text-primary transition-colors font-code text-sm"
                    whileHover={{ x: 5 }}
                  >
                    <FiGithub className="w-4 h-4" />
                    <span>source</span>
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text/70 hover:text-primary transition-colors font-code text-sm"
                    whileHover={{ x: 5 }}
                  >
                    <FiExternalLink className="w-4 h-4" />
                    <span>demo</span>
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
