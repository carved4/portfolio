'use client';

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useTheme } from '../context/ThemeContext'

const navItems = [
  { name: 'cd ~/', href: '#home', description: 'home' },
  { name: 'cat', href: '#about', description: 'about.md' },
  { name: 'ls', href: '#skills', description: 'skills.json' },
  { name: 'git', href: '#projects', description: 'projects' },
  { name: 'ssh', href: '#contact', description: 'contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme } = useTheme()

  const closeMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b border-text/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="font-code text-lg text-text hover:text-primary transition-colors flex items-center gap-2"
            >
              <span className="text-primary">$</span>
              <span className="text-text/80">~/</span>
              owens.lol
              <motion.span 
                className="text-text/50 inline-block"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
              >
                █
              </motion.span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group text-sm font-code text-text/80 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span className="text-primary">{item.name}</span>
                  {item.description && (
                    <span className="text-text/50 group-hover:text-text/80 transition-colors">
                      {item.description}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="touch-target text-text/80 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              <motion.div
                initial={false}
                animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background/95 backdrop-blur-sm border-b border-text/10"
          >
            <motion.div 
              className="space-y-2 px-4 pb-3 pt-2"
              initial="closed"
              animate="open"
              variants={{
                open: {
                  transition: { staggerChildren: 0.07, delayChildren: 0.1 }
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 }
                }
              }}
            >
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  variants={{
                    open: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        y: { stiffness: 1000, velocity: -100 }
                      }
                    },
                    closed: {
                      y: 20,
                      opacity: 0,
                      transition: {
                        y: { stiffness: 1000 }
                      }
                    }
                  }}
                >
                  <Link
                    href={item.href}
                    className="touch-target w-full px-3 py-2 text-sm font-code text-text/80 hover:text-primary transition-colors block"
                    onClick={closeMenu}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-primary">$</span>
                      <span>{item.name}</span>
                      {item.description && (
                        <span className="text-text/50">
                          {item.description}
                        </span>
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
