import { Link } from 'react-router-dom'
import { PageHero, CtaBand } from '../components/PageChrome'
import { Container } from '../components/Ui'
import { caseStudies, workPhotoClass } from '../data/work'

export function Work() {
  return (
    <>
      <PageHero
        kicker="Work"
        title="Case studies from plants, depots, routes, and headquarters."
        lede="Implementations we can discuss. Where a board asked us not to name the organisation, we still describe how the operation actually ran."
      />
      <section className="bg-paper py-24">
        <Container>
          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
            {caseStudies.map((study) => (
              <Link key={study.slug} to={`/work/${study.slug}`} className="group">
                <div className="img-frame aspect-[16/10] overflow-hidden bg-navy">
                  <img
                    src={study.image}
                    alt={study.imageAlt ?? ''}
                    className={`transition duration-700 group-hover:scale-[1.03] ${workPhotoClass(study.tone)}`}
                  />
                </div>
                <p className="kicker mt-5 text-mist">
                  {study.confidential ? 'Confidential' : study.client}
                  {study.location ? ` · ${study.location}` : ''} · {study.year}
                </p>
                <h2 className="display mt-2 text-2xl leading-snug md:text-3xl group-hover:text-teal-dim">
                  {study.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{study.summary}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.12em] text-ink/40">{study.services.join(' · ')}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  )
}
