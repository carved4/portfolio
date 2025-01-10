'use client';

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import anime from 'animejs'
import { useTheme } from '../context/ThemeContext'
import { useInView } from 'framer-motion'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()
  const isInView = useInView(containerRef)

  useEffect(() => {
    if (!isInView) return

    // Initial setup
    if (containerRef.current) {
      containerRef.current.style.opacity = '1'
    }

    // Main animation timeline
    const mainTimeline = anime.timeline({
      easing: 'cubicBezier(0.645, 0.045, 0.355, 1.000)', // Improved easing
      duration: 800
    })

    // Background animation
    mainTimeline
      .add({
        targets: '.hero-bg-gradient',
        scale: [0.8, 1],
        opacity: [0, 0.8],
        duration: 1200,
        easing: 'cubicBezier(0.25, 0.46, 0.45, 0.94)',
        begin: () => {
          if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            mainTimeline.pause()
          }
        }
      })
      // Name animation with improved staggering
      .add({
        targets: '.letter',
        translateY: [60, 0],
        opacity: [0, 1],
        rotateX: [90, 0], // Added 3D rotation
        delay: anime.stagger(40, { from: 'center' }),
        duration: 800,
        easing: 'cubicBezier(0.215, 0.61, 0.355, 1)'
      }, '-=800')
      // Subtitle animation
      .add({
        targets: subtitleRef.current,
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'cubicBezier(0.215, 0.61, 0.355, 1)'
      }, '-=600')
      // Buttons animation with improved staggering
      .add({
        targets: buttonsRef.current,
        opacity: [0, 1],
        duration: 400,
        easing: 'cubicBezier(0.4, 0, 0.2, 1)'
      }, '-=500')
      .add({
        targets: buttonsRef.current?.children,
        translateY: [40, 0],
        scale: [0.95, 1],
        delay: anime.stagger(150),
        duration: 800,
        easing: 'cubicBezier(0.34, 1.56, 0.64, 1)'
      }, '-=200')

    // Enhanced background animation
    const bgAnimation = anime({
      targets: '.hero-bg-gradient',
      scale: [1, 1.05],
      opacity: [0.8, 0.9],
      duration: 3000,
      direction: 'alternate',
      loop: true,
      easing: 'cubicBezier(0.445, 0.05, 0.55, 0.95)',
      update: function(anim) {
        if (!isInView) {
          anim.pause()
        } else {
          anim.play()
        }
      }
    })

    return () => {
      mainTimeline.pause()
      bgAnimation.pause()
    }
  }, [isInView])

  // Split text into individual spans for letter animation
  const renderAnimatedName = () => {
    const name = "Owen Smith"
    return (
      <>
        <span className="mr-2 text-text">Hi, I'm</span>
        {name.split('').map((letter, index) => (
          <span 
            key={index} 
            className={`letter inline-block heading-gradient ${letter === ' ' ? 'mx-2' : ''}`}
          >
            {letter}
          </span>
        ))}
      </>
    )
  }

  return (
    <section 
      id="home" 
      className="min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-background"
      ref={containerRef}
      style={{ opacity: 0 }}
    >
      <div className="absolute inset-0 w-full h-full"></div>

      <div 
        className="hero-bg-gradient absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl -z-10 origin-center transform-gpu"
        style={{ willChange: 'transform, opacity' }}
      ></div>
      
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center">
          <h1 
            ref={nameRef}
            className="text-4xl sm:text-6xl font-bold mb-6 relative text-text"
          >
            {renderAnimatedName()}
          </h1>

          <motion.p
            ref={subtitleRef}
            className="text-xl sm:text-2xl text-text/80 mb-8"
            style={{ clipPath: 'inset(0 100% 0 0)' }}
          >
            Full Stack Developer & UI/UX Enthusiast
          </motion.p>

          <div 
            ref={buttonsRef}
            className="flex flex-wrap justify-center gap-4 opacity-0"
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-primary/90 text-text font-medium tracking-wide shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
              initial={{ scale: 1 }}
              whileHover={{ 
                scale: 1.02,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }
              }}
              whileTap={{ 
                scale: 0.98,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }
              }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-secondary to-secondary/90 text-text font-medium tracking-wide shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/30 transition-all duration-300"
              initial={{ scale: 1 }}
              whileHover={{ 
                scale: 1.02,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }
              }}
              whileTap={{ 
                scale: 0.98,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }
              }}
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="/resume (1).pdf"
              download
              className="px-8 py-3 rounded-full bg-gradient-to-r from-accent to-accent/90 text-text font-medium tracking-wide shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300"
              initial={{ scale: 1 }}
              whileHover={{ 
                scale: 1.02,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }
              }}
              whileTap={{ 
                scale: 0.98,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }
              }}
            >
              Download Resume
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}