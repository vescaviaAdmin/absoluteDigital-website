import React from 'react'
import { motion } from 'framer-motion'
import assets from '../assets/assets'
import { companyProfile, navItems, services } from '../data/siteContent'

const SiteFooter = ({ theme, navigate }) => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-24 border-t border-gray-200/70 bg-slate-50 dark:border-white/10 dark:bg-gray-950"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr] lg:px-10">
        <div className="space-y-5">
          <img
            src={theme === 'dark' ? assets.logo_dark : assets.logo}
            alt="Absolute Digital"
            className="w-[9.5rem] sm:w-44"
          />
          <p className="max-w-md text-sm leading-7 text-gray-600 dark:text-gray-300">{companyProfile.promise}</p>
          <div className="flex items-center gap-3">
            <a href={companyProfile.facebook} target="_blank" rel="noreferrer">
              <img src={assets.facebook_icon} alt="Facebook" />
            </a>
            <a href={companyProfile.instagram} target="_blank" rel="noreferrer">
              <img src={assets.instagram_icon} alt="Instagram" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Pages</h3>
          <div className="mt-5 flex flex-col gap-3 text-sm text-gray-600 dark:text-gray-300">
            {navItems.map((item) => (
              <button key={item.path} type="button" onClick={() => navigate(item.path)} className="text-left hover:text-primary">
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Core Services</h3>
          <div className="mt-5 flex flex-col gap-3 text-sm text-gray-600 dark:text-gray-300">
            {services.slice(0, 5).map((service) => (
              <p key={service.slug}>{service.title}</p>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Contact</h3>
          <div className="mt-5 space-y-3 text-sm text-gray-600 dark:text-gray-300">
            <p>{companyProfile.address}</p>
            <a href={`tel:${companyProfile.phone.replace(/\s+/g, '')}`} className="block hover:text-primary">
              {companyProfile.phone}
            </a>
            <a href={`tel:${companyProfile.secondaryPhone.replace(/\s+/g, '')}`} className="block hover:text-primary">
              {companyProfile.secondaryPhone}
            </a>
            <a href={`mailto:${companyProfile.email}`} className="block hover:text-primary">
              {companyProfile.email}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200/70 px-4 py-5 text-center text-sm text-gray-500 dark:border-white/10 dark:text-gray-400">
        Copyright 2026 © Absolute Digital. All rights reserved.
      </div>
    </motion.footer>
  )
}

export default SiteFooter
