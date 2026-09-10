import { Link, useParams } from 'react-router-dom'
import { CtaBand, PageHero } from '../components/PageChrome'
import { Container, SectionKicker } from '../components/Ui'
import { industries } from '../data/industries'
import { caseStudies, workPhotoClass } from '../data/work'
import { NotFound } from './NotFound'

export function IndustryDetail() {
  const { slug } = useParams()
  const industry = industries.find((i) => i.slug === slug)
  if (!industry) return <NotFound />

  const work = caseStudies.filter((c) => industry.workSlugs.includes(c.slug))

  return (
    <>
      <PageHero kicker="Industry" title={industry.name} lede={industry.summary} />
      <section className="bg-paper py-24">
        <Container className="grid gap-14 md:grid-cols-12">
          <div className="img-frame aspect-[16/11] overflow-hidden md:col-span-7">
            <img src={industry.image} alt="" />
          </div>
          <div className="md:col-span-5">
            <p className="text-base leading-relaxed text-ink/70">{industry.body}</p>
            <p className="kicker mt-10 text-mist">Typical systems</p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {industry.systems.map((s) => (
                <li key={s} className="border border-navy/10 bg-foam px-3 py-2">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      {work.length > 0 ? (
        <section className="bg-foam py-24">
          <Container>
            <SectionKicker>Work in this sector</SectionKicker>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {work.map((c) => (
                <Link key={c.slug} to={`/work/${c.slug}`} className="group">
                  <div className="img-frame aspect-[16/10] overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.imageAlt ?? ''}
                      className={workPhotoClass(c.tone)}
                    />
                  </div>
                  <h3 className="display mt-4 text-2xl group-hover:text-teal-dim">{c.title}</h3>
                  <p className="mt-2 text-sm text-ink/60">{c.summary}</p>
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
