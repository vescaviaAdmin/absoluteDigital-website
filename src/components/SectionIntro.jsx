import React from 'react'
import { motion } from 'framer-motion'

const SectionIntro = ({ eyebrow, title, description, align = 'left' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true }}
      className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-semibold text-gray-900 dark:text-white sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-gray-600 dark:text-gray-300">{description}</p>
      ) : null}
    </motion.div>
  )
}

export default SectionIntro
