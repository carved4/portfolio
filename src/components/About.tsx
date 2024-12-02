import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-dimWhite text-lg mb-6">
            I'm a passionate developer with a keen eye for creating elegant solutions
            to complex problems. With expertise in modern web technologies, I strive
            to build applications that are not only functional but also provide
            exceptional user experiences.
          </p>
          <p className="text-dimWhite text-lg">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or sharing my knowledge with the
            developer community.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
