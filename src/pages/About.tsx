import { PageHero, CtaBand } from '../components/PageChrome'
import { Container, SectionKicker } from '../components/Ui'
import { Reveal } from '../components/Reveal'
import { leaders } from '../data/people'
import { principles, stats } from '../data/site'

export function About() {
  return (
    <>
      <PageHero
        kicker="About"
        title="A systems house for organizations that are done performing digital."
        lede="Zenora Technologies and Systems was founded to close the gap between software that launches and systems that last. We design, engineer, and implement — then we stay through the unfashionable middle."
      />

      <section className="bg-paper py-24 md:py-32">
        <Container className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="img-frame aspect-[4/5] overflow-hidden">
              <img src="/images/about-hq.jpg" alt="Zenora studio" />
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <SectionKicker>Origin</SectionKicker>
            <h2 className="display text-4xl md:text-5xl">Built where the work is unforgiving.</h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/70">
              <p>
                Our partners came out of ERP programmes that stalled, farmer platforms that died after the launch video, HR portals nobody opened, and AI pilots that never met a clerk. The pattern was always the same: design without operations, operations without a system of record, intelligence without governance.
              </p>
              <p>
                Zenora is the house we wished had been in the room. Headquartered in Nairobi, with a studio in Kigali and a specialist network across East Africa, the Middle East, and Europe, we take briefs that mix public duty and private P&L — cooperatives and conglomerates, hospitals and ministries, plants and ports.
              </p>
              <p>
                We are not a staffing firm. We are not a slide factory. We put named people on a named system until the night shift can run it.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-navy py-24 text-white md:py-32">
        <Container>
          <SectionKicker light>Principles</SectionKicker>
          <h2 className="display max-w-3xl text-4xl md:text-5xl">How we refuse to work.</h2>
          <div className="mt-16 grid gap-12 md:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <p className="font-mono text-xs text-teal">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="display mt-3 text-2xl">{p.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/60">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-24 md:py-32">
        <Container>
          <SectionKicker>Leadership</SectionKicker>
          <h2 className="display max-w-3xl text-4xl md:text-5xl">Partners who still read the runbook.</h2>
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {leaders.map((person) => (
              <article key={person.name}>
                <div className="img-frame aspect-[4/5] overflow-hidden bg-sand">
                  <img src={person.image} alt={person.name} />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{person.name}</h3>
                <p className="kicker mt-1 text-teal-dim">{person.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{person.bio}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-foam py-20">
        <Container className="grid gap-px bg-navy/10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-foam px-6 py-10">
              <p className="display text-4xl">{s.value}</p>
              <p className="mt-2 text-sm text-ink/55">{s.label}</p>
            </div>
          ))}
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
