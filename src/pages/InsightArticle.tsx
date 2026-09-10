import { Link, useParams } from 'react-router-dom'
import { CtaBand } from '../components/PageChrome'
import { Container, ButtonLink } from '../components/Ui'
import { articles } from '../data/insights'
import { NotFound } from './NotFound'

export function InsightArticle() {
  const { slug } = useParams()
  const article = articles.find((a) => a.slug === slug)
  if (!article) return <NotFound />

  return (
    <>
      <article className="bg-navy pt-32 pb-16 text-white">
        <Container className="max-w-3xl">
          <p className="kicker text-teal">
            {article.topic} · {article.minutes} min read
          </p>
          <h1 className="display mt-5 text-4xl leading-tight md:text-5xl">{article.title}</h1>
          <p className="mt-6 text-lg text-white/65">{article.dek}</p>
          <p className="mt-6 text-sm text-white/40">{article.date}</p>
        </Container>
      </article>
      <section className="bg-paper py-20">
        <Container className="max-w-3xl space-y-6">
          {article.body.map((p) => (
            <p key={p.slice(0, 40)} className="text-lg leading-relaxed text-ink/80">
              {p}
            </p>
          ))}
          <div className="pt-10">
            <Link to="/insights" className="text-sm font-medium">
              ← All insights
            </Link>
          </div>
        </Container>
      </section>
      <section className="bg-foam py-16">
        <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="display text-3xl">If this sounds like your problem, write to us.</p>
          <ButtonLink to="/contact" variant="light">
            Start a brief
          </ButtonLink>
        </Container>
      </section>
      <CtaBand />
    </>
  )
}
