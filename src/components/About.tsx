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
            className="bg-[#1a1a1a] backdrop-blur-md rounded-lg p-8 sm:p-10
              border border-primary/10
              shadow-lg shadow-black/20
              hover:shadow-xl hover:shadow-primary/10
              transition-all duration-300"
            whileHover={{ 
              scale: 1.01,
            }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-text/90 text-base sm:text-lg mb-8 font-code leading-loose">
              I'm a <span className="text-primary hover:underline decoration-primary/30 transition-all duration-200">third year student</span> at Adrian College, 
              pursuing a major in <span className="text-primary hover:underline decoration-primary/30 transition-all duration-200">Computer Science</span> and 
              a minor in <span className="text-primary hover:underline decoration-primary/30 transition-all duration-200">Cloud Application Development</span>. 
              I enjoy malware development, security testing + automation, and frontend development.
            </p>
          </motion.div>

          <motion.button
            whileHover={{ 
              scale: 1.01,
            }}
            whileTap={{ scale: 0.99 }}
            className="mt-12 w-full p-6 rounded-lg
              bg-[#1a1a1a] backdrop-blur-md
              border border-primary/10
              shadow-lg shadow-black/20
              hover:shadow-xl hover:shadow-primary/10
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
