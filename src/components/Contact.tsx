import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import emailjs from '@emailjs/browser'

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
                  className="w-full p-3 bg-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-gray-400"
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
                  className="w-full p-3 bg-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-gray-400"
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
                  className="w-full p-3 bg-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-gray-400 h-32 resize-none"
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
                } text-white`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : submitStatus === 'success' ? (
                  'Message Sent!'
                ) : submitStatus === 'error' ? (
                  'Failed to Send - Try Again'
                ) : (
                  'Send Message'
                )}
              </motion.button>
              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-500 text-sm text-center mt-2"
                >
                  Thanks for reaching out! I'll get back to you soon.
                </motion.p>
              )}
              {submitStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm text-center mt-2"
                >
                  Something went wrong. Please try again or email me directly.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center items-center gap-8"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Connect With Me</h3>
              <p className="text-dimWhite">Find me on these platforms</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dimWhite hover:text-primary transition-colors flex flex-col items-center gap-2"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="w-8 h-8" />
                  <span className="text-sm">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
