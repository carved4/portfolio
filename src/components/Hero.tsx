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
      easing: 'cubicBezier(.5, .05, .1, .3)',
      duration: 800
    })

    // Slide in and reveal letters animation
    const letters = nameRef.current?.querySelectorAll('.letter')
    timeline
      .add({
        targets: '.hero-bg-gradient',
        scale: [0, 1],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeInOutQuart'
      })
      .add({
        targets: letters,
        translateY: [-100, 0],
        opacity: [0, 1],
        delay: anime.stagger(50),
        duration: 800,
        easing: 'easeOutElastic(1, .5)'
      }, '-=400')
      .add({
        targets: subtitleRef.current,
        clipPath: ['inset(0 100% 0 0)', 'inset(0 0% 0 0)'],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeInOutQuint'
      }, '-=400')
      .add({
        targets: buttonsRef.current?.children,
        translateY: [20, 0],
        opacity: [0, 1],
        delay: anime.stagger(100),
        duration: 600,
        easing: 'easeOutCubic'
      }, '-=400')

    // Continuous subtle animations
    anime({
      targets: '.hero-bg-gradient',
      scale: [1, 1.1],
      opacity: [0.8, 1],
      duration: 3000,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutQuad'
    })
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

      <div className="hero-bg-gradient absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl -z-10 origin-center"></div>
      
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
        </div>
      </div>
    </section>
  )
}