'use client';

import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export default function About() {
  const { theme } = useTheme()
  
  return (
    <section id="about" className="pt-0 pb-4 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
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
              cat
            </motion.span>
            {' '}
            <span className="text-primary/80">~/</span>README.md
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
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <motion.div 
            className="bg-secondary/30 backdrop-blur-sm rounded-2xl p-8 border border-text/5 shadow-lg"
            whileHover={{ 
              boxShadow: "0 20px 40px -15px rgba(0,0,0,0.3)",
              scale: 1.02,
              borderColor: "rgba(238, 238, 238, 0.2)"
            }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-text/90 text-lg mb-6 font-code leading-relaxed">
              I'm a <motion.span 
                className="text-primary font-semibold inline-block"
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >third year student</motion.span> at Adrian College, majoring in{' '}
              <motion.span 
                className="text-primary font-semibold inline-block"
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >Computer Science</motion.span> and minoring in{' '}
              <motion.span 
                className="text-primary font-semibold inline-block"
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >Cloud Application Development</motion.span>. 
              As a passionate developer, I'm driven to create innovative solutions to complex problems. 
              With a strong foundation in modern web technologies, I aim to craft applications that deliver 
              both real-world functionality and an exceptional user experience.
            </p>
            <p className="text-text/90 text-lg font-code leading-relaxed">
              When I'm not coding, you can find me diving into{' '}
              <motion.span 
                className="text-primary font-semibold inline-block"
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >emerging technologies</motion.span>,
              contributing to <motion.span 
                className="text-primary font-semibold inline-block"
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >open-source projects</motion.span>,
              learning more about <motion.span 
                className="text-primary font-semibold inline-block"
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >LLMs and machine learning</motion.span>,
              or enjoying quality time with my girlfriend and cat.
            </p>
          </motion.div>

          <motion.button
            whileHover={{ 
              scale: 1.01,
              boxShadow: "0 10px 30px -15px rgba(0,0,0,0.3)"
            }}
            whileTap={{ scale: 0.99 }}
            className="mt-12 w-full p-5 rounded-xl
              bg-secondary/30 backdrop-blur-sm
              border border-text/10 hover:border-text/20
              text-text/90 font-code
              focus:outline-none focus:ring-2 focus:ring-primary/50 
              transition-all duration-300
              group flex items-center justify-between"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="text-left">
              <p className="text-lg font-medium mb-1">
                <span className="text-primary">$</span> portfolio --commission
              </p>
              <p className="text-sm text-text/70">
                Interested in a website like this? Let's chat!
              </p>
            </div>
            <motion.span 
              className="text-primary text-lg"
              initial={{ x: 0 }}
              whileHover={{ x: 3 }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  ) 
}
