import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Wordmark } from './Logo'
import { nav } from '../data/site'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? 'bg-navy/95 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" aria-label="Zenora home">
          <Wordmark inverted />
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `text-[12px] font-medium tracking-[0.14em] uppercase transition-colors ${
                  isActive ? 'text-teal' : 'text-white/70 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="bg-teal px-4 py-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-navy hover:bg-white"
          >
            Start a brief
          </Link>
        </nav>
        <button
          type="button"
          className="relative h-8 w-8 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`absolute left-1 right-1 h-px bg-white transition ${open ? 'top-4 rotate-45' : 'top-2.5'}`}
          />
          <span
            className={`absolute left-1 right-1 top-4 h-px bg-white transition ${open ? 'opacity-0' : 'opacity-100'}`}
          />
          <span
            className={`absolute left-1 right-1 h-px bg-white transition ${open ? 'top-4 -rotate-45' : 'top-[22px]'}`}
          />
        </button>
      </div>
      {open ? (
        <div className="border-t border-white/10 bg-navy px-6 py-8 lg:hidden">
          <div className="flex flex-col gap-5">
            {nav.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className="text-sm tracking-[0.16em] uppercase text-white/80"
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" className="mt-2 bg-teal px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-navy">
              Start a brief
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}
