import { motion, useReducedMotion } from 'framer-motion'

function Reveal({ children, className = '', delay = 0 }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reduceMotion ? 0 : 0.45, delay }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
