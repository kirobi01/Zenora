type MarkProps = {
  className?: string
}

export function Mark({ className = 'h-9 w-9' }: MarkProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <rect width="48" height="48" rx="14" fill="#0B1D36" />
      <path
        d="M10 34c8-2 10-16 14-20 4 4 6 18 14 20"
        fill="none"
        stroke="#2EE6A6"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M12 16.5h24M12 16.5 36 31.5M12 31.5h24"
        fill="none"
        stroke="#C9A36A"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <Mark />
      <span className="leading-none">
        <span
          className={`block text-[11px] font-semibold tracking-[0.28em] ${inverted ? 'text-white' : 'text-navy'}`}
        >
          ZENORA
        </span>
        <span
          className={`mt-0.5 block font-mono text-[9px] tracking-[0.16em] uppercase ${inverted ? 'text-gold-soft/80' : 'text-mist'}`}
        >
          Technologies & Systems
        </span>
      </span>
    </span>
  )
}
