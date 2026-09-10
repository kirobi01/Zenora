import { ButtonLink, Container, SectionKicker } from './Ui'
import { Reveal } from './Reveal'

export function PageHero({
  kicker,
  title,
  lede,
}: {
  kicker: string
  title: string
  lede?: string
}) {
  return (
    <section className="grain aurora relative bg-navy pt-32 pb-20 text-white md:pt-40 md:pb-28">
      <Container>
        <Reveal>
          <SectionKicker light>{kicker}</SectionKicker>
          <h1 className="display max-w-4xl text-4xl leading-[1.08] md:text-6xl">{title}</h1>
          {lede ? (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">{lede}</p>
          ) : null}
        </Reveal>
      </Container>
    </section>
  )
}

export function CtaBand() {
  return (
    <section className="bg-navy-2 text-white">
      <Container className="flex flex-col items-start justify-between gap-8 py-20 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="kicker text-gold">Begin</p>
          <h2 className="display mt-4 text-4xl md:text-5xl">Tell us about the system you need to exist.</h2>
          <p className="mt-4 max-w-xl text-white/60">
            A two-page brief is enough. We will tell you, quickly, whether we are the right house — and what the first ninety days should look like.
          </p>
        </div>
        <ButtonLink to="/contact" variant="teal">
          Start a conversation
        </ButtonLink>
      </Container>
    </section>
  )
}
