import { PageHero, CtaBand } from '../components/PageChrome'
import { Container, SectionKicker } from '../components/Ui'
import { engagementModels, processSteps } from '../data/process'

export function Process() {
  return (
    <>
      <PageHero
        kicker="Process"
        title="A sequence that starts in the operation and ends after go-live."
        lede="We do not sell a mystery methodology. We sell a spine: listen, model, slice, design, integrate, cut over, compound."
      />
      <section className="bg-paper py-24 md:py-32">
        <Container>
          <ol className="space-y-0">
            {processSteps.map((step) => (
              <li key={step.id} className="grid gap-6 border-t border-navy/10 py-12 md:grid-cols-12">
                <p className="font-mono text-sm text-teal-dim md:col-span-2">{step.id}</p>
                <h2 className="display text-3xl md:col-span-4">{step.name}</h2>
                <p className="text-base leading-relaxed text-ink/65 md:col-span-6">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
      <section className="bg-navy py-24 text-white">
        <Container>
          <SectionKicker light>Engagement</SectionKicker>
          <h2 className="display max-w-3xl text-4xl">Four ways to have us in the room.</h2>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {engagementModels.map((m) => (
              <article key={m.title} className="border-t border-white/15 pt-6">
                <h3 className="display text-2xl">{m.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/60">{m.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  )
}
