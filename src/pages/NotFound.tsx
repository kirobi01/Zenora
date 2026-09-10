import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center bg-navy px-6 pt-32 text-white">
      <p className="kicker text-teal">404</p>
      <h1 className="display mt-4 max-w-4xl text-5xl md:text-7xl">This page is not in the system of record.</h1>
      <p className="mt-6 max-w-xl text-white/60">
        The URL may have moved, or it never existed. The work is still this way.
      </p>
      <Link
        to="/"
        className="mt-10 inline-flex w-fit bg-teal px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-navy"
      >
        Return home
      </Link>
    </section>
  )
}
