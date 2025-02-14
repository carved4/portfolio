'use client';

import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import emailjs from '@emailjs/browser'
import { useTheme } from '../context/ThemeContext'

const socialLinks = [
  {
    name: 'Email',
    icon: FiMail,
    href: 'mailto:owengilsm@gmail.com',
  },
  {
    name: 'GitHub',
    icon: FiGithub,
    href: 'https://github.com/carved4',
  },
  {
    name: 'LinkedIn',
    icon: FiLinkedin,
    href: 'https://linkedin.com/in/owengsmt',
  },
  {
    name: 'Twitter',
    icon: FiTwitter,
    href: 'https://twitter.com/owengsmt',
  },
]

export default function Contact() {
  const animation = useScrollAnimation()
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const { theme } = useTheme()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      await emailjs.send(
        'service_66zvfqp',
        'template_m5e1uj8',
        {
          from_name: formState.name,
          reply_to: formState.email,
          message: formState.message,
          to_name: 'Owen Smith',
        },
        'g--PACwBi3mFJwwcf'
      )

      setSubmitStatus('success')
      setFormState({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="section-padding bg-background">
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
              ssh
            </motion.span>
            {' '}
            <span className="text-primary/80">~/</span>contact
            <motion.span className="text-primary/80">.ssh</motion.span>
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
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <p className="text-text/80 text-lg font-code">
            <span className="text-primary">$</span> echo "Currently open for employment opportunities. Let's connect!"
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            ref={animation.ref}
            initial="hidden"
            animate={animation.controls}
            variants={animation.variants}
            className="w-full"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }}
                className="relative"
              >
                <span className="absolute left-3 top-3 text-primary font-code">name:</span>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={handleInputChange}
                  className="w-full p-3 pl-20 bg-secondary/30 backdrop-blur-sm
                    rounded-lg border border-text/10 hover:border-text/20
                    focus:outline-none focus:ring-2 focus:ring-primary/50 
                    text-black font-code placeholder:text-text/30
                    focus:bg-secondary/50"
                  required
                  disabled={isSubmitting}
                />
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }}
                className="relative"
              >
                <span className="absolute left-3 top-3 text-primary font-code">mail:</span>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formState.email}
                  onChange={handleInputChange}
                  className="w-full p-3 pl-20 bg-secondary/30 backdrop-blur-sm
                    rounded-lg border border-text/10 hover:border-text/20
                    focus:outline-none focus:ring-2 focus:ring-primary/50 
                    text-black font-code placeholder:text-text/30"
                  required
                  disabled={isSubmitting}
                />
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }}
                className="relative"
              >
                <span className="absolute left-3 top-3 text-primary font-code">msg:</span>
                <textarea
                  name="message"
                  placeholder="Your message here..."
                  value={formState.message}
                  onChange={handleInputChange}
                  className="w-full p-3 pl-16 bg-secondary/30 backdrop-blur-sm
                    rounded-lg border border-text/10 hover:border-text/20
                    focus:outline-none focus:ring-2 focus:ring-primary/50 
                    text-black font-code placeholder:text-text/30
                    h-32 resize-none"
                  required
                  disabled={isSubmitting}
                />
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 30px -15px rgba(0,0,0,0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                className={`w-full p-4 rounded-lg transition-all duration-300
                  bg-secondary/30 backdrop-blur-sm
                  border border-text/10 hover:border-text/20
                  text-text/90 font-code
                  focus:outline-none focus:ring-2 focus:ring-primary/50 
                  group flex items-center justify-between
                  ${isSubmitting ? 'cursor-not-allowed opacity-50' : ''}`}
                disabled={isSubmitting}
              >
                <div className="flex items-center gap-2">
                  <span className="text-primary">$</span>
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      sending_message.sh
                    </span>
                  ) : submitStatus === 'success' ? (
                    <span className="text-green-400">message_sent.log</span>
                  ) : submitStatus === 'error' ? (
                    <span className="text-red-400">error.log</span>
                  ) : (
                    <span>send_message.sh</span>
                  )}
                </div>
                <motion.span 
                  className="text-primary"
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                >
                  →
                </motion.span>
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-secondary/30 backdrop-blur-sm
                  rounded-lg border border-text/10 hover:border-text/20
                  transition-all duration-300 group"
                whileHover={{ 
                  scale: 1.02,
                  x: 10,
                  boxShadow: "0 10px 30px -15px rgba(0,0,0,0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <link.icon className="w-6 h-6 text-primary mr-4" />
                <span className="text-text/80 font-code">
                  <span className="text-primary">$</span> open {link.name.toLowerCase()}.url
                </span>
                <motion.span 
                  className="text-primary ml-auto"
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                >
                  →
                </motion.span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
