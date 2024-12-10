import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: 'StudyFlow',
    description: 'A comprehensive study platform built with Next.js, TypeScript, and Tailwind CSS. Features include task management, progress tracking, and collaborative study tools.',
    image: '/project1.jpg',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    github: 'https://github.com/carved4/studyflow',
    live: 'https://studyflow-six.vercel.app',
  },
  {
    title: 'Nutrition Helper',
    description: 'A nutrition tracking application that helps users monitor their daily nutritional intake and maintain a healthy diet.',
    image: '/project2.jpg',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/carved4/nutrihelper',
    live: 'https://nutrihelp.lol',
  },
  // Add more projects as needed
]

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary/50 rounded-lg overflow-hidden"
            >
              <div className="relative h-48 w-full">
                <div className="absolute inset-0 bg-primary/10" />
                {/* Add actual project images later */}
                <div className="absolute inset-0 flex-center text-2xl font-bold text-primary">
                  {project.title}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-dimWhite mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dimWhite hover:text-primary transition-colors"
                  >
                    <FiGithub className="w-6 h-6" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dimWhite hover:text-primary transition-colors"
                  >
                    <FiExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
