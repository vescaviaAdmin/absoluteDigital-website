import React, { useEffect, useState } from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServicesCard from './ServicesCard'
import { AnimatePresence, motion } from "framer-motion";

const Services = () => {
    const [activeService, setActiveService] = useState(null)

    const servicesData = [
        {
            title: 'Advertising',
            description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
            details: 'We plan, launch, and optimize paid campaigns across search, social, and display channels. From audience research and messaging to conversion tracking and reporting, we build advertising systems focused on measurable growth rather than vanity metrics.',
            icon: assets.ads_icon
        },
        {
            title: 'Content marketing',
            description: 'We turn bold ideas into powerful digital solutions that connect, engage and...',
            details: 'We create content strategies that attract qualified traffic and build long-term brand authority. This includes campaign themes, editorial planning, landing-page messaging, distribution plans, and performance analysis designed to support your sales funnel.',
            icon: assets.marketing_icon
        },
        {
            title: 'Software products',
            description: 'We turn bold ideas into powerful digital solutions that connect...',
            details: 'We help shape and deliver digital products that solve real business problems. From product discovery and feature planning to interface direction and launch-ready experiences, we focus on software that is useful, scalable, and commercially aligned.',
            icon: assets.content_icon
        },
        {
            title: 'Social media',
            description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
            details: 'We manage social presence with a clear brand voice, platform-specific creative, and growth-minded execution. Our work covers content direction, campaign support, community touchpoints, and reporting that ties social activity back to business outcomes.',
            icon: assets.social_icon
        }
    ]

    useEffect(() => {
      if (!activeService) return undefined

      const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
          setActiveService(null)
        }
      }

      document.addEventListener('keydown', handleKeyDown)

      return () => document.removeEventListener('keydown', handleKeyDown)
    }, [activeService])

  return (
    <>
      <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{once: true}}
      transition={{staggerChildren: 0.2}}
      
      id='services' className='relative  flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 z-1 dark:hidden' />

        <div className="z-10">
          <Title title='How can we help?' desc='From strategy to execution, we craft digital solutions that move your business forward.' />
        </div>
        <div className="flex flex-col md:grid grid-cols-2">
          {servicesData.map((service, index)=>(
              <ServicesCard
                key={index}
                service={service}
                index={index}
                onClick={() => setActiveService(service)}
              />
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {activeService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-4 py-6 backdrop-blur-sm"
            onClick={() => setActiveService(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.96 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="w-full max-w-2xl rounded-3xl border border-gray-200 bg-white p-6 shadow-2xl dark:border-gray-700 dark:bg-gray-900 sm:p-8"
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="service-modal-title"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-gray-100 p-3 dark:bg-gray-800">
                    <img src={activeService.icon} alt="" className="w-12 h-12" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-primary">Service</p>
                    <h3 id="service-modal-title" className="mt-1 text-2xl font-semibold text-gray-800 dark:text-white">
                      {activeService.title}
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveService(null)}
                  className="rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-600 transition-colors hover:border-primary hover:text-primary dark:border-gray-700 dark:text-gray-300"
                >
                  Close
                </button>
              </div>

              <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">
                {activeService.details}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Services
