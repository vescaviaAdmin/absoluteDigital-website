import React, { useState } from 'react'
import { motion } from 'framer-motion'
import assets from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn'
import { companyProfile, navItems } from '../data/siteContent'

const SiteHeader = ({ theme, setTheme, pathname, navigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNavigate = (path) => {
    navigate(path)
    setMobileOpen(false)
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="sticky top-0 z-40 border-b border-white/40 bg-white/78 backdrop-blur-xl dark:border-white/10 dark:bg-gray-950/78"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10">
        <button type="button" onClick={() => handleNavigate('/')} className="flex items-center gap-3">
          <img
            src={theme === 'dark' ? assets.logo_dark : assets.logo}
            alt="Absolute Digital logo"
            className="w-[8.5rem] sm:w-40"
          />
        </button>

        <nav className="hidden items-center gap-1 rounded-full border border-gray-200/80 bg-white/90 px-2 py-2 text-sm shadow-lg shadow-primary/5 dark:border-white/10 dark:bg-white/5 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.path
            return (
              <button
                key={item.path}
                type="button"
                onClick={() => handleNavigate(item.path)}
                className={`rounded-full px-4 py-2 transition-colors ${
                  active
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-primary/8 hover:text-primary dark:text-gray-200'
                }`}
              >
                {item.label}
              </button>
            )
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href={companyProfile.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-primary/20 px-4 py-2 text-sm text-primary transition-transform hover:scale-[1.02] sm:inline-flex"
          >
            WhatsApp
          </a>
          <ThemeToggleBtn theme={theme} setTheme={setTheme} />
          <button
            type="button"
            onClick={() => handleNavigate('/contact')}
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm text-white shadow-lg shadow-primary/25 transition-transform hover:scale-[1.02] lg:inline-flex"
          >
            Start a Project <img src={assets.arrow_icon} width={14} alt="" />
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="rounded-full border border-gray-200 p-2 dark:border-white/10 lg:hidden"
            aria-label="Open navigation menu"
          >
            <img
              src={mobileOpen ? assets.close_icon : theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon}
              alt=""
              className="w-6"
            />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 dark:border-white/10 dark:bg-gray-950 lg:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.path}
                type="button"
                onClick={() => handleNavigate(item.path)}
                className={`rounded-2xl px-4 py-3 text-left text-sm ${
                  pathname === item.path ? 'bg-primary text-white' : 'bg-gray-50 dark:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </motion.header>
  )
}

export default SiteHeader
