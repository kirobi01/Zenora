import { Link } from 'react-router-dom'
import { PageHero, CtaBand } from '../components/PageChrome'
import { Container } from '../components/Ui'
import { industries } from '../data/industries'

export function Industries() {
  return (
    <>
      <PageHero
        kicker="Industries"
        title="Sectors we have earned the right to talk about."
        lede="Agriculture, manufacturing, people operations, health, government, trade, logistics, and education. We stay long enough to be useful."
      />
      <section className="bg-paper py-24">
        <Container className="grid gap-6 md:grid-cols-2">
          {industries.map((ind) => (
            <Link key={ind.slug} to={`/industries/${ind.slug}`} className="group relative min-h-[360px] overflow-hidden">
              <img src={ind.image} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                <h2 className="display text-3xl">{ind.name}</h2>
                <p className="mt-3 max-w-md text-sm text-white/70">{ind.summary}</p>
              </div>
            </Link>
          ))}
        </Container>
      </section>
      <CtaBand />
    </>
  )
}
