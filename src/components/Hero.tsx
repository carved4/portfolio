'use client';

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import anime from 'animejs'
import { useTheme } from '../context/ThemeContext'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    // Initial setup
    if (containerRef.current) {
      containerRef.current.style.opacity = '1'
    }

    const timeline = anime.timeline({
      easing: 'easeOutQuint',
      duration: 600
    })

    // Slide in and reveal letters animation
    const letters = nameRef.current?.querySelectorAll('.letter')
    timeline
      .add({
        targets: '.hero-bg-gradient',
        scale: [0, 1],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutQuint',
        begin: () => {
          if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            timeline.pause()
          }
        }
      })
      .add({
        targets: letters,
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(30, {from: 'center'}),
        duration: 600,
        easing: 'easeOutQuint'
      }, '-=300')
      .add({
        targets: subtitleRef.current,
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 600,
        easing: 'easeOutQuint'
      }, '-=300')
      .add({
        targets: buttonsRef.current?.children,
        translateY: [20, 0],
        opacity: [0, 1],
        delay: anime.stagger(50),
        duration: 400,
        easing: 'easeOutQuint'
      }, '-=300')

    // Continuous subtle animations - optimized for mobile
    const bgAnimation = anime({
      targets: '.hero-bg-gradient',
      scale: [1, 1.05],
      opacity: [0.9, 1],
      duration: 4000,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutQuad',
      update: function(anim) {
        // Pause animation when out of viewport
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect()
          if (rect.bottom < 0 || rect.top > window.innerHeight) {
            anim.pause()
          } else {
            anim.play()
          }
        }
      }
    })

    // Cleanup function
    return () => {
      bgAnimation.pause()
      timeline.pause()
    }
  }, [])

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
      className="min-h-[90vh] flex items-center justify-center relative overflow-hidden bg-background"
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
            className="flex flex-wrap justify-center gap-4"
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