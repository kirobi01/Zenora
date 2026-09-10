import { Link, useParams } from 'react-router-dom'
import { CtaBand, PageHero } from '../components/PageChrome'
import { Container, SectionKicker } from '../components/Ui'
import { services } from '../data/services'
import { caseStudies, workPhotoClass } from '../data/work'
import { NotFound } from './NotFound'

export function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)
  if (!service) return <NotFound />

  const key = service.slug.split('-')[0]
  const related = caseStudies.filter((c) =>
    c.services.some((name) => name.toLowerCase().includes(key) || name.toLowerCase().includes(service.eyebrow.toLowerCase())),
  )

  return (
    <>
      <PageHero kicker={service.eyebrow} title={service.name} lede={service.summary} />
      <section className="bg-paper py-24">
        <Container className="grid gap-16 md:grid-cols-12">
          <div className="img-frame aspect-[16/11] overflow-hidden md:col-span-7">
            <img src={service.image} alt="" />
          </div>
          <div className="md:col-span-5">
            <SectionKicker>Why it exists</SectionKicker>
            <p className="text-base leading-relaxed text-ink/70">{service.description}</p>
            <ul className="mt-8 space-y-3">
              {service.outcomes.map((o) => (
                <li key={o} className="border-l-2 border-teal pl-4 text-sm text-ink/80">
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      <section className="bg-foam py-24">
        <Container>
          <SectionKicker>What we actually do</SectionKicker>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {service.offerings.map((o) => (
              <article key={o.title} className="border-t border-navy/15 pt-6">
                <h3 className="display text-2xl">{o.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{o.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-16">
            <p className="kicker text-mist">Typical stack</p>
            <p className="mt-4 text-sm text-ink/70">{service.stack.join(' · ')}</p>
          </div>
        </Container>
      </section>
      {related.length > 0 ? (
        <section className="bg-paper py-24">
          <Container>
            <SectionKicker>Related work</SectionKicker>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {related.slice(0, 3).map((c) => (
                <Link key={c.slug} to={`/work/${c.slug}`} className="group">
                  <div className="img-frame aspect-[16/10] overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.imageAlt ?? ''}
                      className={`transition duration-500 group-hover:scale-105 ${workPhotoClass(c.tone)}`}
                    />
                  </div>
                  <h3 className="display mt-4 text-xl">{c.title}</h3>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      ) : null}
      <CtaBand />
    </>
  )
}
