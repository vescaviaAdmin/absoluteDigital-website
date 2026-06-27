import React from 'react'
import { motion } from 'framer-motion'

const PageHero = ({ eyebrow, title, description, actions, aside }) => {
  return (
    <section className="page-shell pt-6 sm:pt-10">
      <div className="hero-panel grid gap-7 overflow-hidden lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="relative z-10"
        >
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-[1.08] text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-lg sm:leading-8">{description}</p>
          {actions ? <div className="mt-6 flex flex-wrap gap-3">{actions}</div> : null}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="relative z-10 min-w-0"
        >
          {aside}
        </motion.div>
      </div>
    </section>
  )
}

export default PageHero
