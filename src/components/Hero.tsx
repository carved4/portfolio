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
    return (
      <div className="flex flex-col items-center gap-2 font-jetbrains">
        <div className="flex items-center gap-2 text-lg sm:text-xl text-text/80">
          <span className="text-primary">~/owen-smith</span>
          <span className="text-text/50">on</span>
          <span className="text-green-400">main</span>
          <span className="text-primary">⌥</span>
        </div>
        <div className="flex items-center gap-3 text-3xl sm:text-5xl">
          <span className="text-primary">$</span>
          <span className="text-text/90">whoami</span>
          <motion.span 
            className="text-text/50 animate-pulse"
            whileHover={{ opacity: 1 }}
          >
            █
          </motion.span>
        </div>
        <div className="mt-2 text-xl sm:text-2xl text-text/80 font-code">
          <span className="text-primary">&gt;</span> Owen Smith
        </div>
      </div>
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
          <motion.h1 
            ref={nameRef}
            className="mb-6 relative"
          >
            {renderAnimatedName()}
          </motion.h1>

          <motion.p
            ref={subtitleRef}
            className="text-lg sm:text-xl text-text/70 mb-8 font-code"
            style={{ clipPath: 'inset(0 100% 0 0)' }}
          >
            <span className="text-primary">$</span> Full Stack Developer & UI/UX Enthusiast
          </motion.p>

          <div 
            ref={buttonsRef}
            className="flex flex-wrap justify-center gap-4 opacity-0"
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 rounded-lg bg-secondary/30 backdrop-blur-sm
                border border-text/10 hover:border-text/20
                text-text/90 font-code
                focus:outline-none focus:ring-2 focus:ring-primary/50 
                transition-all duration-300
                group flex items-center gap-3"
              initial={{ scale: 1 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 30px -15px rgba(0,0,0,0.3)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-primary">$</span>
              <span>cd</span>
              <span className="text-primary/80">./projects</span>
              <motion.span 
                className="text-primary"
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
              >
                →
              </motion.span>
            </motion.a>

            <motion.a
              href="#contact"
              className="px-8 py-3 rounded-lg bg-secondary/30 backdrop-blur-sm
                border border-text/10 hover:border-text/20
                text-text/90 font-code
                focus:outline-none focus:ring-2 focus:ring-primary/50 
                transition-all duration-300
                group flex items-center gap-3"
              initial={{ scale: 1 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 30px -15px rgba(0,0,0,0.3)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-primary">$</span>
              <span>ssh</span>
              <span className="text-primary/80">./contact</span>
              <motion.span 
                className="text-primary"
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
              >
                →
              </motion.span>
            </motion.a>

            <motion.a
              href="/resume (1).pdf"
              download
              className="px-8 py-3 rounded-lg bg-secondary/30 backdrop-blur-sm
                border border-text/10 hover:border-text/20
                text-text/90 font-code
                focus:outline-none focus:ring-2 focus:ring-primary/50 
                transition-all duration-300
                group flex items-center gap-3"
              initial={{ scale: 1 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 30px -15px rgba(0,0,0,0.3)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-primary">$</span>
              <span>wget</span>
              <span className="text-primary/80">resume.pdf</span>
              <motion.span 
                className="text-primary"
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
              >
                →
              </motion.span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}