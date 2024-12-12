import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import anime from 'animejs'

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const nameRef = useRef<HTMLSpanElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const text = "Hi, I'm Owen Smith"
    let currentIndex = 0

    // Typing effect with Anime.js cursor animation
    const typeText = () => {
      if (currentIndex <= text.length) {
        setTypedText(text.slice(0, currentIndex))
        currentIndex++

        setTimeout(typeText, 100)
      } else {
        // After typing complete, start the reveal animation
        const textAnimation = anime.timeline({
          easing: 'easeOutExpo',
          duration: 1200
        })

        textAnimation
          .add({
            targets: subtitleRef.current,
            translateY: [50, 0],
            opacity: [0, 1],
            delay: 200
          })
          .add({
            targets: buttonsRef.current,
            translateY: [50, 0],
            opacity: [0, 1],
            begin: () => {
              if (buttonsRef.current) {
                buttonsRef.current.style.display = 'flex';
              }
            },
            delay: 200,
            offset: '-=600'
          }, '+=400')

        // Fade out cursor
        if (cursorRef.current) {
          anime({
            targets: cursorRef.current,
            opacity: [1, 0],
            scaleX: [1, 0],
            duration: 500,
            easing: 'easeInOutQuad'
          })
        }
      }
    }

    // Start typing
    typeText()
  }, [])

  const renderTypedText = () => {
    const prefix = "Hi, I'm "
    const name = "Owen Smith"
    const currentText = typedText

    if (currentText.length <= prefix.length) {
      return currentText
    }

    const nameTyped = currentText.slice(prefix.length)
    return (
      <>
        {prefix}
        <span className="heading-gradient">{nameTyped}</span>
      </>
    )
  }

  return (
    <section id="home" className="section-padding pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 relative">
            <span 
              ref={nameRef} 
              className="inline-block"
            >
              {renderTypedText()}
              <span 
                ref={cursorRef}
                className="inline-block w-[2px] h-[1em] bg-primary ml-1"
              >
                |
              </span>
            </span>
          </h1>
          <p 
            ref={subtitleRef}
            className="text-xl sm:text-2xl text-dimWhite mb-8 opacity-0"
          >
            Computer Science Student | Creating Beautiful Digital Experiences
          </p>
          <div 
            ref={buttonsRef}
            className="flex-center gap-4 opacity-0 hidden"
          >
            <motion.a
              href="#projects"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-lg font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}