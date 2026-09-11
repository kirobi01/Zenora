import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ButtonLink, Container, SectionKicker } from '../components/Ui'
import { Reveal } from '../components/Reveal'
import { CtaBand } from '../components/PageChrome'
import { caseStudies, workPhotoClass } from '../data/work'
import { services } from '../data/services'
import { industries } from '../data/industries'
import { articles } from '../data/insights'
import { clients, stats } from '../data/site'
import { testimonials } from '../data/people'

const featured = caseStudies.filter((c) => c.featured)

export function Home() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-navy text-white">
        <img
          src="/images/hero-studio.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/55 to-navy" />
        <div className="aurora grain absolute inset-0" />
        <Container className="relative flex min-h-screen flex-col justify-end pb-16 pt-32 md:pb-24">
          <p className="kicker text-teal">Zenora Technologies and Systems</p>
          <h1 className="display mt-6 max-w-5xl text-5xl leading-[0.95] md:text-7xl lg:text-[5.6rem]">
            The operational backbone of ambitious organizations.
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            We design, engineer, and implement ERPs, HRMS, farmer platforms, applied AI, and digital products — then we stay until the night shift can run them without us.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink to="/work" variant="teal">
              See the work
            </ButtonLink>
            <ButtonLink to="/contact" variant="ghost">
              Start a brief
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="overflow-hidden border-y border-navy/10 bg-navy-2 py-4 text-white/50">
        <div className="marquee-track">
          {[...clients, ...clients].map((c, i) => (
            <span key={`${c}-${i}`} className="kicker whitespace-nowrap">
              {c}
              <span className="mx-6 text-teal">/</span>
            </span>
          ))}
        </div>
      </section>

      <section className="bg-paper py-24 md:py-32">
        <Container>
          <Reveal>
            <SectionKicker>Practice</SectionKicker>
            <h2 className="display max-w-4xl text-4xl leading-tight md:text-6xl">
              Software is easy to announce. Systems that operators will defend are harder — and that is the work.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/65">
              Zenora is a systems house. We build the ledgers, registries, and platforms that finance, people, farms, and supply chains run on. Design is not a coat of paint. Implementation is not a warranty. Intelligence is not a demo.
            </p>
          </Reveal>
          <div className="mt-20 grid gap-px bg-navy/10 md:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="bg-paper px-6 py-10">
                <p className="display text-4xl text-navy md:text-5xl">{s.value}</p>
                <p className="mt-3 text-sm text-ink/55">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-foam py-24 md:py-32">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <SectionKicker>Selected work</SectionKicker>
              <h2 className="display text-4xl md:text-5xl">Proof, not promises.</h2>
            </div>
            <Link to="/work" className="hidden items-center gap-2 text-sm font-medium md:inline-flex">
              All case studies <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {featured.map((study, i) => (
              <Reveal key={study.slug} delay={i * 80}>
                <Link to={`/work/${study.slug}`} className="group block">
                  <div className="img-frame aspect-[16/10] overflow-hidden bg-navy">
                    <img
                      src={study.image}
                      alt={study.imageAlt ?? ''}
                      className={`transition duration-700 group-hover:scale-[1.03] ${workPhotoClass(study.tone)}`}
                    />
                  </div>
                  <p className="kicker mt-5 text-mist">
                    {study.confidential ? 'Confidential' : study.sector}
                    {study.location ? ` · ${study.location}` : ''} · {study.year}
                  </p>
                  <h3 className="display mt-2 text-2xl leading-snug md:text-3xl group-hover:text-teal-dim">
                    {study.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">{study.summary}</p>
                </Link>
              </Reveal>
            ))}
          </div>
          <Link to="/work" className="mt-10 inline-flex items-center gap-2 text-sm font-medium md:hidden">
            All case studies <ArrowRight size={16} />
          </Link>
        </Container>
      </section>

      <section className="bg-navy py-24 text-white md:py-32">
        <Container>
          <SectionKicker light>Capabilities</SectionKicker>
          <h2 className="display max-w-3xl text-4xl md:text-5xl">Eight practices. One standard of finish.</h2>
          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group grid items-baseline gap-4 py-8 md:grid-cols-12"
              >
                <span className="font-mono text-xs text-white/35 md:col-span-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="display text-2xl md:col-span-4 md:text-3xl group-hover:text-teal">{s.name}</h3>
                <p className="text-sm leading-relaxed text-white/55 md:col-span-6">{s.summary}</p>
                <span className="hidden justify-end text-teal md:col-span-1 md:flex">
                  <ArrowRight size={18} />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-24 md:py-32">
        <Container>
          <SectionKicker>Industries</SectionKicker>
          <h2 className="display max-w-3xl text-4xl md:text-5xl">We learn a sector until the jargon is no longer impressive.</h2>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <Link key={ind.slug} to={`/industries/${ind.slug}`} className="group relative block overflow-hidden">
                <div className="img-frame aspect-[4/5]">
                  <img src={ind.image} alt="" className="transition duration-700 group-hover:scale-105" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="display text-2xl">{ind.name}</h3>
                  <p className="mt-2 text-sm text-white/70">{ind.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-2 py-24 text-white md:py-32">
        <Container>
          <SectionKicker light>Clients in their own words</SectionKicker>
          <div className="mt-10 grid gap-12 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote key={t.person}>
                <p className="display text-2xl leading-snug text-paper">“{t.text}”</p>
                <footer className="mt-6 text-sm">
                  <p className="text-teal">{t.person}</p>
                  <p className="mt-1 text-white/45">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-foam py-24 md:py-32">
        <Container>
          <div className="flex items-end justify-between">
            <div>
              <SectionKicker>Insights</SectionKicker>
              <h2 className="display text-4xl md:text-5xl">Notes from the work.</h2>
            </div>
            <Link to="/insights" className="hidden text-sm font-medium md:inline">
              All essays
            </Link>
          </div>
          <div className="mt-12 divide-y divide-navy/10 border-y border-navy/10">
            {articles.slice(0, 3).map((a) => (
              <Link key={a.slug} to={`/insights/${a.slug}`} className="group grid gap-3 py-8 md:grid-cols-12 md:items-baseline">
                <p className="kicker text-mist md:col-span-2">{a.topic}</p>
                <h3 className="display text-2xl md:col-span-7 group-hover:text-teal-dim">{a.title}</h3>
                <p className="text-sm text-ink/50 md:col-span-3 md:text-right">{a.date}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
