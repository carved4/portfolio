'use client';

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import anime from 'animejs'
import { useTheme } from '../context/ThemeContext'
import { useInView } from 'framer-motion'

interface CommandButtonProps {
  href: string;
  command: string;
  path: string;
  icon?: string;
  download?: boolean;
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()
  const isInView = useInView(containerRef)
  const [isDownloading, setIsDownloading] = useState(false)

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
      <div className="flex flex-col items-center gap-4 font-jetbrains">
        {/* Command prompt header */}
        <motion.div 
          className="flex items-center gap-2 text-sm sm:text-base text-text/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary/90">~/owen-smith</span>
          <span className="text-text/50">on</span>
          <span className="text-green-400/90">main</span>
          <motion.span 
            className="text-primary/80"
            animate={{ 
              opacity: [0.7, 1],
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            ⌥
          </motion.span>
        </motion.div>

        {/* Main command */}
        <motion.div 
          className="flex items-center gap-3 text-3xl sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.span 
            className="text-primary"
            animate={{ 
              opacity: [0.8, 1],
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            $
          </motion.span>
          <span className="text-text/90 font-medium tracking-tight">whoami</span>
          <motion.span 
            className="w-[2px] h-[32px] sm:h-[40px] bg-text/50"
            animate={{ 
              opacity: [1, 0],
              transition: {
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          />
        </motion.div>

        {/* Output */}
        <motion.div 
          className="text-xl sm:text-2xl md:text-3xl text-text/90 font-code
            flex items-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.span 
            className="text-primary/90"
            animate={{ 
              opacity: [0.8, 1],
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            &gt;
          </motion.span>
          <span className="tracking-tight">Owen Smith</span>
        </motion.div>
      </div>
    )
  }

  // First, let's create a reusable button component inside Hero.tsx
  const CommandButton: React.FC<CommandButtonProps> = ({ 
    href, 
    command, 
    path, 
    icon = "→", 
    download = false 
  }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [isDownloading, setIsDownloading] = useState(false)

    return (
      <motion.a
        href={href}
        download={download}
        className="relative px-6 py-3 rounded-lg
          bg-[#1a1a1a] backdrop-blur-md
          border border-primary/10
          text-text/90 font-code text-sm
          shadow-lg shadow-black/20
          hover:shadow-xl hover:shadow-primary/10
          focus:outline-none focus:ring-2 focus:ring-primary/50 
          transition-shadow duration-300
          group flex items-center gap-2"
        initial={{ scale: 1 }}
        whileHover={{ 
          scale: 1.02,
          backgroundColor: "rgb(45, 212, 191, 0.1)",
        }}
        whileTap={{ scale: 0.98 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={download ? (e: React.MouseEvent) => {
          setIsDownloading(true)
          setTimeout(() => setIsDownloading(false), 2000)
        } : undefined}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0"
          animate={{
            boxShadow: isHovered 
              ? "0 0 20px 2px rgba(45, 212, 191, 0.2)"
              : "0 0 0px 0px rgba(45, 212, 191, 0)"
          }}
          transition={{ duration: 0.2 }}
        />

        {/* Content */}
        <div className="relative flex items-center gap-3 px-1">
          <span className="text-primary font-medium">$</span>
          <span className="font-medium">{command}</span>
          <span className="text-primary/80 font-light">{path}</span>
          
          {isDownloading ? (
            <motion.div 
              className="absolute bottom-0 left-0 h-[2px] bg-primary/50"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          ) : (
            <motion.span 
              className="text-primary/80 ml-1"
              animate={{ 
                x: isHovered ? 3 : 0,
                opacity: isHovered ? 1 : 0.8,
              }}
            >
              {icon}
            </motion.span>
          )}
        </div>
      </motion.a>
    )
  }

  return (
    <section 
      id="home" 
      className="min-h-[60vh] flex items-center justify-center relative overflow-hidden bg-background pt-16 pb-10"
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
            className="text-base sm:text-lg text-text/70 mb-12 font-code"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.span 
              className="text-primary/90"
              animate={{ 
                opacity: [0.8, 1],
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              $
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              UI & UX Enthusiast with an Interest in Malware Development
            </motion.span>
            <motion.span
              className="inline-block w-[2px] h-[14px] bg-text/50 ml-2 align-middle"
              animate={{ 
                opacity: [1, 0],
                transition: {
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
            />
          </motion.p>

          <div 
            ref={buttonsRef}
            className="flex flex-wrap justify-center items-center gap-5 opacity-0 px-4"
          >
            <CommandButton 
              href="#projects"
              command="cd"
              path="./projects"
            />
            
            <CommandButton 
              href="#contact"
              command="ssh"
              path="./contact"
            />
            
            <CommandButton 
              href="/resume (1).pdf"
              command="wget"
              path="resume.pdf"
              download={true}
            />
          </div>
        </div>
      </div>
    </section>
  )
}