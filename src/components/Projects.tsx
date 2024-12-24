import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { BsBook, BsFileEarmarkArrowUp } from 'react-icons/bs'
import { IoNutritionOutline } from 'react-icons/io5'
import { useRef } from 'react'

const projects = [
  {
    title: 'StudyFlow',
    description: 'A comprehensive study platform built with Next.js, TypeScript, and Tailwind CSS. Features include task management, progress tracking, and collaborative study tools.',
    image: '/project1.jpg',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    github: 'https://github.com/carved4/studyflow',
    live: 'https://studyflow-six.vercel.app',
    icon: BsBook,
  },
  {
    title: 'Nutrition Helper',
    description: 'A nutrition tracking application that helps users monitor their daily nutritional intake and maintain a healthy diet.',
    image: '/project2.jpg',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/carved4/nutrihelper',
    live: 'https://nutrihelp.lol',
    icon: IoNutritionOutline,
  },
  {
    title: 'File Conversion Hub',
    description: 'A versatile file conversion platform that enables users to seamlessly transform documents and media files between different formats with an intuitive drag-and-drop interface.',
    image: '/project3.jpg',
    tech: ['Vite', 'Tailwind', 'Javascript', 'Next.js', 'Node.js'],
    github: 'https://github.com/carved4/fileconversionhub',
    live: 'https://fileconverthub.vercel.app',
    icon: BsFileEarmarkArrowUp,
  },
]

export default function Projects() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  return (
    <section id="projects" className="section-padding" ref={containerRef}>
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.7,
            ease: "easeOut"
          }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4"
            whileInView={{ 
              opacity: [0, 1],
              y: [20, 0],
            }}
            transition={{ duration: 0.5 }}
          >
            Projects
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-primary mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
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
              className="bg-secondary/50 rounded-lg overflow-hidden backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <motion.div 
                className="relative h-48 w-full group cursor-pointer"
                whileHover="hover"
              >
                <motion.div 
                  className="absolute inset-0 bg-primary/10"
                  variants={{
                    hover: { 
                      opacity: 0.8,
                    }
                  }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  variants={{
                    hover: {
                      opacity: 1
                    }
                  }}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-full hover:scale-110 transition-transform"
                  >
                    <FiGithub className="w-6 h-6 text-gray-900" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-full hover:scale-110 transition-transform"
                  >
                    <FiExternalLink className="w-6 h-6 text-gray-900" />
                  </a>
                </motion.div>
              </motion.div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  {project.icon && <project.icon className="w-6 h-6 text-primary" />}
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/20 rounded-full text-sm font-medium hover:bg-primary/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
