import React, { ReactNode, useEffect, useRef } from 'react'
import { useInView, motion, useAnimation } from 'framer-motion'

interface RevealProps {
  children: ReactNode
  className?: string
  id?: string
}

const Reveal: React.FC<RevealProps> = ({ children, className, ...props }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView])

  return (
    <div ref={ref} className={className} {...props}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default Reveal
