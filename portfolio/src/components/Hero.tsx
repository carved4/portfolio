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
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      if (containerRef.current) containerRef.current.style.opacity = '1'
      return
    }

    // Enhanced initial animation timeline
    const timeline = anime.timeline({
      easing: 'cubicBezier(.175, .885, .32, 1.275)', // Enhanced easing
      duration: 800
    })

    // Refined gradient animation
    timeline
      .add({
        targets: '.hero-bg-gradient',
        scale: [1.5, 1],
        opacity: [0, 0.9],
        duration: 1200,
        easing: 'easeOutExpo',
      })
      .add({
        targets: '.greeting-text',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        easing: 'easeOutQuint',
      }, '-=400')
      .add({
        targets: '.name-letter',
        opacity: [0, 1],
        translateY: [40, 0],
        rotateX: [90, 0],
        delay: anime.stagger(40, { from: 'center' }),
        duration: 800,
        easing: 'easeOutExpo',
      }, '-=400')
      .add({
        targets: subtitleRef.current,
        clipPath: ['inset(0 100% 0 0)', 'inset(0 0% 0 0)'],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutQuint',
      }, '-=600')
      .add({
        targets: buttonsRef.current?.children,
        translateY: [30, 0],
        opacity: [0, 1],
        scale: [0.9, 1],
        delay: anime.stagger(100),
        duration: 600,
        easing: 'easeOutExpo',
      }, '-=400')

    // Enhanced background animation
    const bgAnimation = anime({
      targets: '.hero-bg-gradient',
      scale: [1, 1.1],
      opacity: [0.9, 1],
      duration: 8000,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutQuad',
      update: function(anim) {
        if (!containerRef.current) return
        
        const rect = containerRef.current.getBoundingClientRect()
        const isVisible = rect.bottom > 0 && rect.top < window.innerHeight
        
        if (!isVisible && !anim.paused) {
          anim.pause()
        } else if (isVisible && anim.paused) {
          anim.play()
        }
      }
    })

    // Show container
    if (containerRef.current) {
      containerRef.current.style.opacity = '1'
    }

    return () => {
      bgAnimation.pause()
      timeline.pause()
    }
  }, [])

  const renderAnimatedName = () => {
    const name = "Owen Smith"
    return (
      <>
        <span className="greeting-text mr-2 text-text opacity-0">Hi, I'm</span>
        {name.split('').map((letter, index) => (
          <span 
            key={index} 
            className={`name-letter inline-block heading-gradient opacity-0 ${
              letter === ' ' ? 'mx-2' : ''
            }`}
            style={{ 
              transformOrigin: 'bottom',
              willChange: 'transform, opacity'
            }}
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
      className="min-h-[85vh] pt-16 flex items-center justify-center relative overflow-hidden bg-background"
      ref={containerRef}
      style={{ opacity: 0 }}
    >
      <div 
        className="hero-bg-gradient absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-[100%] blur-3xl -z-10 origin-center transform-gpu"
        style={{ 
          willChange: 'transform, opacity',
          backfaceVisibility: 'hidden'
        }}
      />
      
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
             Web Developer & UI/UX Enthusiast
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