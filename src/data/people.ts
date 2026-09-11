export type Leader = {
  name: string
  role: string
  bio: string
  image: string
}

export const leaders: Leader[] = [
  {
    name: 'Amara Njoroge',
    role: 'Managing Partner',
    bio: 'Amara spent a decade leading large public and agribusiness programmes before founding Zenora’s operating model: implementation as product. She holds the client relationship at steering level and still reads cutover runbooks.',
    image: '/images/leader-amara.jpg',
  },
  {
    name: 'David Mensah',
    role: 'Partner, Systems',
    bio: 'David architects ERPs and the financial spines underneath them. He came from group finance transformation and has a low tolerance for item masters that were “good enough to go live.”',
    image: '/images/leader-david.jpg',
  },
  {
    name: 'Priya Raman',
    role: 'Partner, Design',
    bio: 'Priya leads brand, product, and service design. She insists that a warehouse clerk and a minister should be able to trust the same interface family — different density, same honesty.',
    image: '/images/leader-priya.jpg',
  },
  {
    name: 'Kwame Boateng',
    role: 'Partner, Engineering & AI',
    bio: 'Kwame runs the engineering bar and our applied AI practice. Models ship with owners, evaluation sets, and fallbacks. He would rather miss a trend than surprise a regulator.',
    image: '/images/leader-kwame.jpg',
  },
]

export const testimonials = [
  {
    text: 'The reps use it because it helps them sell. Finance uses it because the delivery matches the invoice. That is the only test that mattered.',
    person: 'Commercial lead',
    role: 'Criss Cross FMCG',
  },
  {
    text: 'They did not sell us a dream of digital transformation. They stood next to the shift supervisor until the screen matched the line.',
    person: 'Daniel Otieno',
    role: 'Group COO, Meridian Industrials',
  },
  {
    text: 'The win was not the model. The win was that my clerks trust the queue, and internal audit can replay every decision.',
    person: 'Samira Haddad',
    role: 'CFO, Lumen Logistics',
  },
]
