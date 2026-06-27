import React, { useEffect, useMemo, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import WorkPage from './pages/WorkPage'
import IndustriesPage from './pages/IndustriesPage'
import ProductsPage from './pages/ProductsPage'
import ContactPage from './pages/ContactPage'

const routes = {
  '/': {
    title: 'Absolute Digital | Digital Marketing Agency & Product Builder',
    page: HomePage,
  },
  '/about': {
    title: 'About | Absolute Digital',
    page: AboutPage,
  },
  '/services': {
    title: 'Services | Absolute Digital',
    page: ServicesPage,
  },
  '/work': {
    title: 'Work | Absolute Digital',
    page: WorkPage,
  },
  '/industries': {
    title: 'Industries | Absolute Digital',
    page: IndustriesPage,
  },
  '/products': {
    title: 'Products | Absolute Digital',
    page: ProductsPage,
  },
  '/contact': {
    title: 'Contact | Absolute Digital',
    page: ContactPage,
  },
}

const getInitialTheme = () => {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark' || saved === 'light') return saved
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  return 'light'
}

const normalizePath = (path) => {
  if (!path || path === '') return '/'
  const trimmed = path.replace(/\/+$/, '')
  return trimmed === '' ? '/' : trimmed
}

  const App = () => {
  const [theme, setTheme] = useState(getInitialTheme)
  const [pathname, setPathname] = useState(() => normalizePath(window.location.pathname))

  const activeRoute = useMemo(() => routes[pathname] || routes['/'], [pathname])
  const ActivePage = activeRoute.page

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    document.title = activeRoute.title
  }, [activeRoute])

  useEffect(() => {
    const handlePopState = () => setPathname(normalizePath(window.location.pathname))

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = (nextPath) => {
    const normalized = normalizePath(nextPath)
    if (normalized === pathname) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    window.history.pushState({}, '', normalized)
    setPathname(normalized)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white text-gray-700 transition-colors dark:bg-black">
      <Toaster position="top-right" />
      <SiteHeader theme={theme} setTheme={setTheme} pathname={pathname} navigate={navigate} />
      <main>
        <ActivePage navigate={navigate} />
      </main>
      <SiteFooter theme={theme} navigate={navigate} />
    </div>
  )
}

export default App
