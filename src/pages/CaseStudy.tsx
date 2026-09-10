import { Link, useParams } from 'react-router-dom'
import { CtaBand } from '../components/PageChrome'
import { Container, SectionKicker, ButtonLink } from '../components/Ui'
import { caseStudies, workPhotoClass } from '../data/work'
import { NotFound } from './NotFound'

export function CaseStudy() {
  const { slug } = useParams()
  const study = caseStudies.find((c) => c.slug === slug)
  if (!study) return <NotFound />

  const others = caseStudies.filter((c) => c.slug !== study.slug).slice(0, 2)

  return (
    <>
      <section className="relative min-h-[70vh] overflow-hidden bg-navy pt-32 text-white">
        <img
          src={study.image}
          alt={study.imageAlt ?? ''}
          className={`absolute inset-0 h-full w-full object-cover opacity-45 ${workPhotoClass(study.tone)}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/30" />
        <Container className="relative flex min-h-[70vh] flex-col justify-end pb-16">
          <p className="kicker text-teal">
            {study.confidential ? 'Confidential client' : study.client}
            {study.location ? ` · ${study.location}` : ''} · {study.sector} · {study.year}
          </p>
          <h1 className="display mt-5 max-w-4xl text-4xl leading-tight md:text-6xl">{study.title}</h1>
          <p className="mt-6 max-w-2xl text-white/70">{study.summary}</p>
        </Container>
      </section>

      <section className="bg-navy-2 py-12 text-white">
        <Container className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {study.outcomes.map((o) => (
            <div key={o.label}>
              <p className="display text-3xl text-teal">{o.value}</p>
              <p className="mt-2 text-sm text-white/55">{o.label}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="bg-paper py-24">
        <Container className="grid gap-16 md:grid-cols-12">
          <article className="prose-zen md:col-span-7">
            <SectionKicker>The situation</SectionKicker>
            {study.challenge.split('\n\n').map((p) => (
              <p key={p.slice(0, 48)} className="mt-4 text-base leading-relaxed text-ink/75">
                {p}
              </p>
            ))}
            <div className="mt-12">
              <SectionKicker>The work</SectionKicker>
            </div>
            {study.approach.split('\n\n').map((p) => (
              <p key={p.slice(0, 48)} className="mt-4 text-base leading-relaxed text-ink/75">
                {p}
              </p>
            ))}
          </article>
          <aside className="md:col-span-4 md:col-start-9">
            {study.confidential ? (
              <p className="mb-8 border-l-2 border-gold pl-4 text-sm leading-relaxed text-ink/65">
                The union asked not to be named. What follows is the operating problem as we found it, and the system that now sits under intake and second payment.
              </p>
            ) : null}
            <p className="kicker text-mist">Practices</p>
            <ul className="mt-4 space-y-2 text-sm">
              {study.services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <p className="kicker mt-10 text-mist">Architecture notes</p>
            <ul className="mt-4 space-y-3">
              {study.architecture.map((a) => (
                <li key={a} className="border-l border-gold pl-4 text-sm text-ink/70">
                  {a}
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </section>

      {study.quote ? (
        <section className="bg-navy py-24 text-white">
          <Container className="max-w-4xl">
            <blockquote className="display text-3xl leading-snug md:text-4xl">“{study.quote.text}”</blockquote>
            <p className="mt-8 text-teal">{study.quote.person}</p>
            <p className="mt-1 text-sm text-white/45">{study.quote.role}</p>
          </Container>
        </section>
      ) : null}

      <section className="bg-foam py-24">
        <Container>
          <SectionKicker>More work</SectionKicker>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {others.map((c) => (
              <Link key={c.slug} to={`/work/${c.slug}`} className="group">
                <div className="img-frame aspect-[16/10] overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.imageAlt ?? ''}
                    className={workPhotoClass(c.tone)}
                  />
                </div>
                <h3 className="display mt-4 text-2xl group-hover:text-teal-dim">{c.title}</h3>
              </Link>
            ))}
          </div>
          <div className="mt-12">
            <ButtonLink to="/work" variant="light">
              All case studies
            </ButtonLink>
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  )
}
