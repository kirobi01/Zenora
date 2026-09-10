import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Variant = 'teal' | 'gold' | 'ghost' | 'light'

const styles: Record<Variant, string> = {
  teal: 'bg-teal text-navy hover:bg-white',
  gold: 'bg-gold text-navy hover:bg-gold-soft',
  ghost: 'border border-white/20 text-white hover:border-teal hover:text-teal',
  light: 'border border-navy/15 text-navy hover:border-navy hover:bg-navy hover:text-paper',
}

export function ButtonLink({
  to,
  children,
  variant = 'teal',
  className = '',
}: {
  to: string
  children: ReactNode
  variant?: Variant
  className?: string
}) {
  const cls = `inline-flex items-center justify-center gap-2 px-6 py-3 text-[13px] font-semibold tracking-[0.08em] uppercase transition-colors duration-300 ${styles[variant]} ${className}`
  if (to.startsWith('mailto:') || to.startsWith('http') || to.startsWith('tel:')) {
    return (
      <a href={to} className={cls}>
        {children}
      </a>
    )
  }
  return (
    <Link to={to} className={cls}>
      {children}
    </Link>
  )
}

export function SectionKicker({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`kicker mb-4 ${light ? 'text-teal' : 'text-teal-dim'}`}>{children}</p>
  )
}

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-6 md:px-10 ${className}`}>{children}</div>
}
