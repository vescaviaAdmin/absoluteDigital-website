import React from 'react'
import { company_logos } from '../assets/assets'
import { motion } from "framer-motion";

const TrustedBy = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6}}
    viewport={{once: true}} 

    className='flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-10 text-gray-700 dark:text-white/80'>
      <motion.h3 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5}}
      viewport={{once: true}}
      className='font-semibold'>Trusted by Leading Companies</motion.h3>

      <motion.div 
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.1}}
      viewport={{once: true}}
      className="grid w-full max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3">
        {company_logos.map((logo, index)=>(
            <motion.div
            variants={{
              hidden: {opacity: 0, y: 10},
              visible: {opacity: 1, y: 0},
            }} 
            transition={{duration: 0.4}}
            key={index}
            className="flex h-24 items-center justify-center rounded-2xl border border-gray-200 bg-white/80 px-5 py-4 shadow-lg shadow-gray-100 dark:border-gray-700 dark:bg-gray-900/80 dark:shadow-white/5"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className='h-12 w-full object-contain dark:drop-shadow-xl sm:h-14'
              />
            </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default TrustedBy
