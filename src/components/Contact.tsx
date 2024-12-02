import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const socialLinks = [
  {
    name: 'Email',
    icon: FiMail,
    href: 'mailto:your.email@example.com',
  },
  {
    name: 'GitHub',
    icon: FiGithub,
    href: 'https://github.com/yourusername',
  },
  {
    name: 'LinkedIn',
    icon: FiLinkedin,
    href: 'https://linkedin.com/in/yourusername',
  },
  {
    name: 'Twitter',
    icon: FiTwitter,
    href: 'https://twitter.com/yourusername',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-black/30">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <p className="text-dimWhite text-lg">
            I'm currently open for new opportunities. Whether you have a question or
            just want to say hi, feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex-center gap-8"
        >
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dimWhite hover:text-primary transition-colors"
            >
              <link.icon className="w-8 h-8" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
