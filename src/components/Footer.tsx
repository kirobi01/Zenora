import { Link } from 'react-router-dom'
import { Mark } from './Logo'
import { nav, site } from '../data/site'
import { services } from '../data/services'

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <Mark />
              <div>
                <p className="text-[11px] font-semibold tracking-[0.28em]">ZENORA</p>
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-gold-soft/80">
                  Technologies & Systems
                </p>
              </div>
            </div>
            <p className="display mt-8 max-w-md text-3xl leading-tight text-paper">
              Systems that endure. Software that compounds.
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/55">
              {site.description}
            </p>
          </div>
          <div className="md:col-span-2">
            <p className="kicker text-teal">Visit</p>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="kicker text-teal">Practices</p>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="hover:text-white">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="kicker text-teal">Studios</p>
            <ul className="mt-5 space-y-5 text-sm text-white/70">
              {site.offices.map((o) => (
                <li key={o.city}>
                  <p className="text-white">{o.city}</p>
                  <p className="mt-1 text-xs text-white/45">{o.role}</p>
                  <p className="mt-1 text-xs">{o.address}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Zenora Technologies and Systems. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms
            </Link>
            <a href={`mailto:${site.email}`} className="hover:text-white">
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
