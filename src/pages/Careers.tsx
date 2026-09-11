import { Link } from 'react-router-dom'
import { PageHero, CtaBand } from '../components/PageChrome'
import { Container, SectionKicker, ButtonLink } from '../components/Ui'
import { roles } from '../data/careers'

export function Careers() {
  return (
    <>
      <PageHero
        kicker="Careers"
        title="Come do the unglamorous work that makes systems real."
        lede="Engineers, designers, implementers, and field analysts who would rather be right on a factory floor than impressive in a deck."
      />
      <section className="bg-paper py-24">
        <Container className="grid gap-16 md:grid-cols-12">
          <div className="img-frame aspect-[16/11] overflow-hidden md:col-span-7">
            <img src="/images/careers-team.jpg" alt="Zenora team at work" />
          </div>
          <div className="md:col-span-5">
            <SectionKicker>How we work</SectionKicker>
            <p className="text-base leading-relaxed text-ink/70">
              Small senior teams. Named clients. Time in the field. We write, we review, we disagree in private and show up aligned in the room. Compensation is competitive. Titles are honest. We hire for taste and stamina.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-ink/75">
              <li>— Remote-friendly; we hire for the work, not a postcode</li>
              <li>— Health cover, learning budget, and real time off after cutovers</li>
              <li>— No bench theatre: you will be on a system that matters</li>
            </ul>
          </div>
        </Container>
      </section>
      <section className="bg-foam py-24">
        <Container>
          <SectionKicker>Open roles</SectionKicker>
          <div className="mt-8 divide-y divide-navy/10 border-y border-navy/10">
            {roles.map((role) => (
              <Link key={role.slug} to={`/careers/${role.slug}`} className="group grid gap-3 py-8 md:grid-cols-12 md:items-center">
                <h2 className="display text-2xl md:col-span-6 group-hover:text-teal-dim">{role.title}</h2>
                <p className="text-sm text-ink/55 md:col-span-4">{role.studio}</p>
                <p className="text-xs uppercase tracking-[0.14em] text-ink/40 md:col-span-2 md:text-right">
                  {role.type}
                </p>
              </Link>
            ))}
          </div>
          <p className="mt-10 text-sm text-ink/55">
            Do not see yourself? Write anyway.{' '}
            <a href="mailto:info@zenoratech.co.ke" className="underline">
              info@zenoratech.co.ke
            </a>
          </p>
        </Container>
      </section>
      <section className="bg-paper py-16">
        <Container>
          <ButtonLink to="/contact" variant="light">
            Introduce yourself
          </ButtonLink>
        </Container>
      </section>
      <CtaBand />
    </>
  )
}
