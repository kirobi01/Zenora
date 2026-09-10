import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { usePageTitle } from '../hooks/usePageTitle'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export function Layout() {
  usePageTitle()
  return (
    <>
      <ScrollToTop />
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-[60] focus:bg-teal focus:px-4 focus:py-2 focus:text-navy"
      >
        Skip to content
      </a>
      <Header />
      <main id="content">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
