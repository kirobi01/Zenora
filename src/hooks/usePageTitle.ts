import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { caseStudies } from '../data/work'
import { services } from '../data/services'
import { industries } from '../data/industries'
import { articles } from '../data/insights'

const titles: Record<string, string> = {
  '/': 'Zenora Technologies and Systems',
  '/about': 'About — Zenora',
  '/services': 'Services — Zenora',
  '/work': 'Work — Zenora',
  '/industries': 'Industries — Zenora',
  '/process': 'Process — Zenora',
  '/insights': 'Insights — Zenora',
  '/contact': 'Contact — Zenora',
  '/privacy': 'Privacy — Zenora',
  '/terms': 'Terms — Zenora',
}

export function usePageTitle() {
  const { pathname } = useLocation()
  useEffect(() => {
    const exact = titles[pathname]
    if (exact) {
      document.title = exact
      return
    }
    const part = pathname.split('/').filter(Boolean)
    if (part[0] === 'work') {
      const item = caseStudies.find((c) => c.slug === part[1])
      document.title = item ? `${item.client} — Zenora` : 'Work — Zenora'
    } else if (part[0] === 'services') {
      const item = services.find((s) => s.slug === part[1])
      document.title = item ? `${item.name} — Zenora` : 'Services — Zenora'
    } else if (part[0] === 'industries') {
      const item = industries.find((i) => i.slug === part[1])
      document.title = item ? `${item.name} — Zenora` : 'Industries — Zenora'
    } else if (part[0] === 'insights') {
      const item = articles.find((a) => a.slug === part[1])
      document.title = item ? `${item.title} — Zenora` : 'Insights — Zenora'
    } else {
      document.title = 'Zenora Technologies and Systems'
    }
  }, [pathname])
}
