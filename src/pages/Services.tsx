import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PageHero, CtaBand } from '../components/PageChrome'
import { Container, SectionKicker } from '../components/Ui'
import { services } from '../data/services'

export function Services() {
  return (
    <>
      <PageHero
        kicker="Services"
        title="Practices built to finish — not to decorate a capability slide."
        lede="From ERP and HRMS to AgriTech, AI, and digital experience. Each practice shares a bar: a system of record, an implementation that lands, and operators who can run it."
      />
      <section className="bg-paper py-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-2">
            {services.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="group block border border-navy/10 bg-foam p-8 hover:border-navy">
                <p className="kicker text-teal-dim">{s.eyebrow}</p>
                <h2 className="display mt-4 text-3xl group-hover:text-teal-dim">{s.name}</h2>
                <p className="mt-4 text-sm leading-relaxed text-ink/65">{s.summary}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em]">
                  Explore <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-navy py-24 text-white">
        <Container className="grid gap-10 md:grid-cols-2">
          <div>
            <SectionKicker light>How we engage</SectionKicker>
            <h2 className="display text-4xl">Build. Implement. Partner. Advise.</h2>
          </div>
          <p className="self-end text-white/60">
            Most clients mix two. A farmer platform that needs a product squad and a change office. An ERP that needs architecture assurance and a floor team. We staff to the problem, not to a catalogue SKU.
          </p>
        </Container>
      </section>
      <CtaBand />
    </>
  )
}
