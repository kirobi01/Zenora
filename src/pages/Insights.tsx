import { Link } from 'react-router-dom'
import { PageHero, CtaBand } from '../components/PageChrome'
import { Container } from '../components/Ui'
import { articles } from '../data/insights'

export function Insights() {
  return (
    <>
      <PageHero
        kicker="Insights"
        title="Essays from delivery — written for operators and boards."
        lede="Short, opinionated notes on ERP, AI, AgriTech, HRMS, and the unfashionable craft of implementation."
      />
      <section className="bg-paper py-24">
        <Container>
          <div className="divide-y divide-navy/10 border-y border-navy/10">
            {articles.map((a) => (
              <Link key={a.slug} to={`/insights/${a.slug}`} className="group grid gap-4 py-10 md:grid-cols-12 md:items-baseline">
                <p className="kicker text-mist md:col-span-2">{a.topic}</p>
                <div className="md:col-span-8">
                  <h2 className="display text-3xl group-hover:text-teal-dim">{a.title}</h2>
                  <p className="mt-3 max-w-2xl text-sm text-ink/60">{a.dek}</p>
                </div>
                <p className="text-sm text-ink/45 md:col-span-2 md:text-right">
                  {a.date}
                  <br />
                  {a.minutes} min
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  )
}
