'use client';

import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export default function About() {
  const { theme } = useTheme()
  
  return (
    <section id="about" className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-text">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-text text-lg mb-6">
            I'm a third year student at Adrian College, majoring in Computer Science and minoring in Cloud Application Development. As a passionate developer, I'm driven to create innovative solutions to complex problems. With a strong foundation in modern web technologies, I aim to craft applications that deliver both real-world functionality and an exceptional user experience.
          </p>
          <p className="text-text text-lg">
            When I'm not coding, you can find me diving into emerging technologies,
            contributing to open-source projects, delving deeper into AI and machine learning,
            or enjoying quality time with my girlfriend and cat.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
