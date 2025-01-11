'use client';

import { motion } from 'framer-motion'
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiGit,
  SiDocker 
} from 'react-icons/si'
import { useTheme } from '../context/ThemeContext'

const skills = [
  { name: 'React', icon: SiReact, description: 'Frontend Development', command: 'npm start' },
  { name: 'Next.js', icon: SiNextdotjs, description: 'Full-stack Framework', command: 'next dev' },
  { name: 'TypeScript', icon: SiTypescript, description: 'Type-safe JavaScript', command: 'tsc --watch' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, description: 'Utility-first CSS', command: 'npx tailwindcss' },
  { name: 'Node.js', icon: SiNodedotjs, description: 'Backend Development', command: 'node server.js' },
  { name: 'Python', icon: SiPython, description: 'Scripting & Automation', command: 'python3 main.py' },
  { name: 'Git', icon: SiGit, description: 'Version Control', command: 'git push origin' },
  { name: 'Docker', icon: SiDocker, description: 'Containerization', command: 'docker-compose up' },
]

export default function Skills() {
  const { theme } = useTheme()

  return (
    <section id="skills" className="section-padding bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
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
              ls
            </motion.span>
            {' '}
            <span className="text-primary/80">~/</span>skills.json
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
              transition={{ 
                duration: 0.2,
                delay: index * 0.1 
              }}
              viewport={{ once: true }}
              className="bg-secondary/30 backdrop-blur-sm rounded-lg overflow-hidden border border-text/10 hover:border-text/20 shadow-lg hover:shadow-xl transition-all duration-300 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary font-code">$</span>
                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <skill.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-text font-code">{skill.name}</h3>
                </div>
              </div>
              <div className="pl-6 border-l-2 border-primary/20 mb-4">
                <p className="text-text/80 font-code text-sm">{skill.description}</p>
              </div>
              <div className="pl-6 font-code text-sm">
                <span className="text-text/50">$ </span>
                <span className="text-text/80">{skill.command}</span>
                <motion.span 
                  className="text-text/50 ml-1 inline-block"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                >
                  █
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
