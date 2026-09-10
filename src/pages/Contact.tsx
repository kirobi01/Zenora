import { PageHero } from '../components/PageChrome'
import { Container, SectionKicker } from '../components/Ui'
import { ContactForm } from '../components/ContactForm'
import { site } from '../data/site'

export function Contact() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="A two-page brief is enough."
        lede="Tell us what must exist, who operates it, and what has already failed. We reply within two working days — including when the answer is that we are not the right house."
      />
      <section className="bg-paper py-24">
        <Container className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <ContactForm />
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <SectionKicker>Studios</SectionKicker>
            <ul className="space-y-8">
              {site.offices.map((o) => (
                <li key={o.city}>
                  <p className="text-lg font-semibold">{o.city}</p>
                  <p className="kicker mt-1 text-teal-dim">{o.role}</p>
                  <p className="mt-2 text-sm text-ink/60">{o.address}</p>
                </li>
              ))}
            </ul>
            <div className="mt-12 border-t border-navy/10 pt-8">
              <p className="text-sm">
                <a href={`mailto:${site.email}`} className="underline">
                  {site.email}
                </a>
              </p>
              <p className="mt-2 text-sm text-ink/55">{site.phone}</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
