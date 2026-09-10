export type Role = {
  slug: string
  title: string
  studio: string
  type: string
  summary: string
  youWill: string[]
  weLookFor: string[]
}

export const roles: Role[] = [
  {
    slug: 'product-engineer-platforms',
    title: 'Product engineer, platforms',
    studio: 'Nairobi / Remote East Africa',
    type: 'Full-time',
    summary:
      'Build the long-lived spines — registries, ledgers, APIs — that our ERPs, farmer platforms, and HRMS sit on.',
    youWill: [
      'Own domain models and ship production slices with tests and observability',
      'Work with operations, not only with tickets',
      'Mentor, write, and raise the engineering bar',
    ],
    weLookFor: [
      'Several years building production TypeScript or Python systems',
      'Taste for data modelling and boring reliability',
      'Comfort in ambiguous client rooms',
    ],
  },
  {
    slug: 'erp-implementation-lead',
    title: 'ERP implementation lead',
    studio: 'Nairobi / Kigali',
    type: 'Full-time',
    summary:
      'Run discovery through hypercare for finance, inventory, and production programmes.',
    youWill: [
      'Facilitate operating-model workshops that do not waste operators’ time',
      'Hold master data, cutover, and training as seriously as configuration',
      'Tell executives the truth about readiness',
    ],
    weLookFor: [
      'Lived ERP delivery in manufacturing, distribution, or services',
      'Financial literacy and political tact',
      'Willingness to be on a plant floor at dawn',
    ],
  },
  {
    slug: 'applied-ml-engineer',
    title: 'Applied ML engineer',
    studio: 'Remote',
    type: 'Full-time',
    summary:
      'Ship document intelligence, forecasting, and field vision with evaluation sets the business owns.',
    youWill: [
      'Take models into clerk and agronomist workflows',
      'Build evaluation, drift, and fallback as product features',
      'Refuse demos that cannot survive real documents',
    ],
    weLookFor: [
      'Production ML, not only notebooks',
      'Python, retrieval, and a respect for messy data',
      'Ability to explain a precision-recall tradeoff to a CFO',
    ],
  },
  {
    slug: 'product-designer',
    title: 'Product designer',
    studio: 'Nairobi',
    type: 'Full-time',
    summary:
      'Design for mixed literacy, bad networks, and institutions that need gravity.',
    youWill: [
      'Turn field research into interfaces operators finish',
      'Extend a design system from marketing site to warehouse app',
      'Prototype in the same week you research',
    ],
    weLookFor: [
      'A portfolio with operational software, not only brand',
      'Systems thinking and visual restraint',
      'Swahili or another regional language is a plus',
    ],
  },
  {
    slug: 'field-systems-analyst-agri',
    title: 'Field systems analyst, agriculture',
    studio: 'Kenya / Uganda / Rwanda',
    type: 'Full-time',
    summary:
      'Translate cooperative, county, and agribusiness operations into product requirements that survive the rainy season.',
    youWill: [
      'Spend real time at collection centers and with officers',
      'Own registry quality, training, and feedback loops',
      'Stand between engineering and the programme office',
    ],
    weLookFor: [
      'Agri programmes, cooperatives, or last-mile operations experience',
      'Clarity in writing and in tense rooms',
      'Comfort with data, GIS a plus',
    ],
  },
  {
    slug: 'change-and-training-lead',
    title: 'Change & training lead',
    studio: 'Nairobi',
    type: 'Contract or full-time',
    summary:
      'Make go-live a habit. Champions, floor-walking, runbooks, and the ninety days after.',
    youWill: [
      'Design role-based training that is not a slide dump',
      'Run command centers at cutover',
      'Measure adoption like a product manager',
    ],
    weLookFor: [
      'Implementation or operations experience',
      'Empathy without softness on standards',
      'Bilingual delivery a plus',
    ],
  },
]
