import { motion, useAnimationControls } from 'framer-motion'
import { useEffect } from 'react'

export default function Hero() {
  const controls = useAnimationControls()
  const cursorControls = useAnimationControls()
  const subtitleControls = useAnimationControls()
  const buttonsControls = useAnimationControls()
  const text = "Hi, I'm Owen Smith"
  
  useEffect(() => {
    const animateText = async () => {
      // Initial fade in
      await controls.start({
        opacity: 1,
        transition: { duration: 0.3 }
      })
      
      // Type out text
      for (let i = 0; i <= text.length; i++) {
        await controls.start({
          width: `${(i / text.length) * 100}%`,
          transition: { duration: 0.05 }
        })
      }

      // Animate cursor after typing
      await cursorControls.start({
        scaleY: [1, 1, 1, 0],
        x: [0, 10, 20, 30],
        opacity: [1, 1, 0.5, 0],
        transition: { 
          duration: 0.5,
          times: [0, 0.5, 0.7, 1],
          ease: "easeInOut"
        }
      })

      // Fade in subtitle with a smooth slide
      await subtitleControls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.4,
          ease: "circOut"
        }
      })

      // Fade in buttons with a staggered effect
      await buttonsControls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.4,
          ease: "easeOut"
        }
      })
    }
    
    animateText()
  }, [controls, cursorControls, subtitleControls, buttonsControls, text])

  return (
    <section id="home" className="section-padding pt-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 relative">
            <motion.div
              initial={{ opacity: 0, width: "0%" }}
              animate={controls}
              className="overflow-hidden whitespace-nowrap inline-block"
            >
              Hi, I'm <span className="heading-gradient">Owen Smith</span>
            </motion.div>
            <motion.div
              initial={{ 
                opacity: 1,
                scaleY: 1,
                x: 0,
                originX: 0
              }}
              animate={cursorControls}
              className="absolute -right-[3px] top-0 h-full w-[3px] bg-gradient-to-b from-primary via-primary to-purple-600"
            >
              <motion.div 
                className="absolute inset-0 bg-primary/30"
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>
          </h1>
          <motion.p 
            className="text-xl sm:text-2xl text-dimWhite mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={subtitleControls}
          >
            Computer Science Student | Creating Beautiful Digital Experiences
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={buttonsControls}
            className="flex-center gap-4"
          >
            <motion.a
              href="#projects"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-lg font-medium transition-colors"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
