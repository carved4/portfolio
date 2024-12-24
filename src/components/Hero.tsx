import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import anime from 'animejs'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

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
        <span className="mr-2">Hi, I'm</span>
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
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
            className="text-4xl sm:text-6xl font-bold mb-6 relative"
          >
            {renderAnimatedName()}
          </h1>

          <motion.p
            ref={subtitleRef}
            className="text-xl sm:text-2xl text-gray-300 mb-8"
            style={{ clipPath: 'inset(0 100% 0 0)' }}
          >
            Full Stack Developer & UI/UX Enthusiast
          </motion.p>

          <div 
            ref={buttonsRef}
            className="flex justify-center gap-6"
          >
            <motion.a
              href="#projects"
              className="px-6 py-3 rounded-full bg-primary bg-gradient-to-r from-primary to-secondary text-white font-semibold"
              initial={{ scale: 1, boxShadow: "0 0 0 rgba(0,0,0,0)" }}
              whileHover={{ 
                scale: 1.03,
                y: -4,
                boxShadow: "0 10px 15px -3px rgba(var(--color-primary), 0.25)",
                transition: {
                  scale: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  },
                  y: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  },
                  boxShadow: {
                    duration: 0.25
                  }
                }
              }}
              whileTap={{ 
                scale: 0.98,
                boxShadow: "0 0 0 rgba(0,0,0,0)",
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 15
                }
              }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="px-6 py-3 rounded-full bg-secondary bg-gradient-to-r from-secondary to-primary text-white font-semibold"
              initial={{ scale: 1, boxShadow: "0 0 0 rgba(0,0,0,0)" }}
              whileHover={{ 
                scale: 1.03,
                y: -4,
                boxShadow: "0 10px 15px -3px rgba(var(--color-secondary), 0.25)",
                transition: {
                  scale: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  },
                  y: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  },
                  boxShadow: {
                    duration: 0.25
                  }
                }
              }}
              whileTap={{ 
                scale: 0.98,
                boxShadow: "0 0 0 rgba(0,0,0,0)",
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 15
                }
              }}
            >
              Get In Touch
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-12 max-w-md mx-auto"
          >
            <motion.div
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-6 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 transition-colors"
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">My Resume</h3>
                  <p className="text-gray-400 text-sm">PDF • Updated 2024</p>
                </div>
                <motion.a
                  href="/resume (1).pdf"
                  download
                  className="p-3 rounded-xl bg-primary/20 hover:bg-primary/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}