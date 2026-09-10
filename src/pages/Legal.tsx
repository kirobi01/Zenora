import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageChrome'
import { Container } from '../components/Ui'

export function Privacy() {
  return (
    <>
      <PageHero kicker="Legal" title="Privacy notice" lede="How Zenora Technologies and Systems treats information you share with us." />
      <section className="bg-paper py-20">
        <Container className="max-w-3xl space-y-6 text-base leading-relaxed text-ink/75">
          <p>
            When you write to us, apply for a role, or submit a brief, we collect the details you provide — typically name, organisation, email, and the content of your message. We use that information to respond, to assess fit, and, if we work together, to deliver services.
          </p>
          <p>
            We do not sell personal data. We do not use contact forms as a marketing list without consent. Client systems we design may process personal data under the client’s instruction and applicable law; those programmes have their own notices and data-processing terms.
          </p>
          <p>
            This marketing site uses no advertising trackers. If we add analytics later, we will update this notice. Hosting providers may process technical logs (IP address, user agent) as part of keeping the site available.
          </p>
          <p>
            To access, correct, or delete information we hold about you from this site, email hello@zenoratech.co.ke. We will respond within a reasonable period.
          </p>
          <p>
            This notice was last updated in September 2026. It is written for a public website, not as legal advice for your jurisdiction.
          </p>
          <Link to="/" className="inline-block text-sm">
            ← Home
          </Link>
        </Container>
      </section>
    </>
  )
}

export function Terms() {
  return (
    <>
      <PageHero kicker="Legal" title="Terms of use" lede="The ground rules for this public website." />
      <section className="bg-paper py-20">
        <Container className="max-w-3xl space-y-6 text-base leading-relaxed text-ink/75">
          <p>
            The content on this site is provided by Zenora Technologies and Systems for general information. Some case studies withhold a client’s name at their request; others describe an operating problem in composite form to protect members and staff. They illustrate the kind of work we do; they are not warranties of a particular result.
          </p>
          <p>
            You may share links to public pages. You may not copy the site as a template for a competing consultancy, scrape it at a volume that degrades service, or imply a partnership that does not exist.
          </p>
          <p>
            Engagements for software, design, or implementation are governed by a separate statement of work and master agreement — not by these website terms.
          </p>
          <p>
            The site is provided as-is. We will correct material errors when we learn of them. If something on a page conflicts with a signed contract, the contract wins.
          </p>
          <p>Governing conversations about this site can be addressed to hello@zenoratech.co.ke.</p>
          <Link to="/" className="inline-block text-sm">
            ← Home
          </Link>
        </Container>
      </section>
    </>
  )
}

