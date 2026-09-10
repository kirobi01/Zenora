import { Link, useParams } from 'react-router-dom'
import { CtaBand, PageHero } from '../components/PageChrome'
import { Container, SectionKicker, ButtonLink } from '../components/Ui'
import { roles } from '../data/careers'
import { site } from '../data/site'
import { NotFound } from './NotFound'

export function CareerDetail() {
  const { slug } = useParams()
  const role = roles.find((r) => r.slug === slug)
  if (!role) return <NotFound />

  return (
    <>
      <PageHero kicker={`${role.studio} · ${role.type}`} title={role.title} lede={role.summary} />
      <section className="bg-paper py-24">
        <Container className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionKicker>You will</SectionKicker>
            <ul className="mt-4 space-y-3 text-base text-ink/75">
              {role.youWill.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
            <SectionKicker>We look for</SectionKicker>
            <ul className="mt-4 space-y-3 text-base text-ink/75">
              {role.weLookFor.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>
          <aside className="border border-navy/10 bg-foam p-8 md:col-span-5">
            <p className="kicker text-teal-dim">Apply</p>
            <p className="mt-4 text-sm leading-relaxed text-ink/65">
              Send a letter — not a cover-letter template — and work that proves you finish. Address it to the partners.
            </p>
            <div className="mt-8">
              <ButtonLink to={`mailto:${site.email}?subject=${encodeURIComponent('Application: ' + role.title)}`} variant="light">
                Email this role
              </ButtonLink>
            </div>
            <p className="mt-6 text-xs text-ink/45">{site.email}</p>
          </aside>
        </Container>
        <Container className="mt-12">
          <Link to="/careers" className="text-sm">
            ← All roles
          </Link>
        </Container>
      </section>
      <CtaBand />
    </>
  )
}
