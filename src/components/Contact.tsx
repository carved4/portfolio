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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-text">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <p className="text-text/80 text-lg">
            I'm currently open for employment opportunities. Whether you have a question or
            just want to say hi, feel free to reach out!
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
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formState.name}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-text placeholder-text/50"
                  required
                  disabled={isSubmitting}
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formState.email}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-text placeholder-text/50"
                  required
                  disabled={isSubmitting}
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formState.message}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-text placeholder-text/50 h-32 resize-none"
                  required
                  disabled={isSubmitting}
                />
              </motion.div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full p-3 font-semibold rounded-lg transition-all relative ${
                  isSubmitting 
                    ? 'bg-gray-500 cursor-not-allowed' 
                    : submitStatus === 'success'
                    ? 'bg-green-500 hover:bg-green-600'
                    : submitStatus === 'error'
                    ? 'bg-red-500 hover:bg-red-600'
                    : 'bg-primary hover:bg-primary/90'
                } text-text`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
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
                    Sending...
                  </span>
                ) : submitStatus === 'success' ? (
                  'Message Sent!'
                ) : submitStatus === 'error' ? (
                  'Error Sending Message'
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-secondary/50 rounded-lg hover:bg-primary/10 transition-colors group"
                whileHover={{ scale: 1.02, x: 10 }}
                whileTap={{ scale: 0.98 }}
              >
                <link.icon className="w-6 h-6 text-primary mr-4" />
                <span className="text-text font-medium">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
