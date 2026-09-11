export type Industry = {
  slug: string
  name: string
  summary: string
  body: string
  image: string
  systems: string[]
  workSlugs: string[]
}

export const industries: Industry[] = [
  {
    slug: 'agriculture',
    name: 'Agriculture & agribusiness',
    summary:
      'Cooperative unions and agribusiness operations — member records, produce, and money on one spine.',
    body: 'We work with cooperative unions and agribusiness operators when the books and the field no longer agree. The work is operational: membership, lots, payments, and the systems people already use on a buying day. Dashboards come after the record is trusted.',
    image: '/images/industry-agriculture.jpg',
    systems: [
      'Member & society registers',
      'Produce intake & lots',
      'Payments & recoveries',
      'Input revolving funds',
      'USSD member self-service',
      'Union accounting interfaces',
    ],
    workSlugs: [],
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    summary: 'Plants, batches, costing, and distribution on a backbone operators will defend.',
    body: 'Manufacturers come to us when growth has outpaced the ledger. We design ERP around how the line actually runs: substitutions, rework, by-products, and the night shift. Traceability is not a slogan. It is a batch you can follow to a customer complaint. Integrations to scales, machines, and warehouses are in the first release.',
    image: '/images/industry-manufacturing.jpg',
    systems: ['ERP & costing', 'MRP & production', 'Quality & traceability', 'WMS & distribution', 'Maintenance', 'Group finance'],
    workSlugs: ['meridian-manufacturing-erp'],
  },
  {
    slug: 'people-operations',
    name: 'People & workforce',
    summary: 'HRMS for groups that cannot afford a payroll surprise.',
    body: 'Conglomerates, hospitals, hospitality, and public agencies trust us with hire-to-retire. The standard is a payroll the CFO and the shop steward can both read. Self-service must work for a new graduate and a security guard. We integrate banks, statutory bodies, and the GL as if they were the product — because they are.',
    image: '/images/work-hrms.jpg',
    systems: ['Core HR', 'Multi-entity payroll', 'Time & attendance', 'Talent', 'Employee apps', 'Workforce analytics'],
    workSlugs: ['aether-people-hrms'],
  },
  {
    slug: 'health',
    name: 'Health systems',
    summary: 'Clinical flow, pharmacy, billing, and group finance that agree about yesterday.',
    body: 'Hospitals are 24-hour operations with no patience for software that was designed at lunchtime. We connect encounters, orders, stock, and revenue, and we train the night shift. Claims, cash, and corporate accounts are encoded with the people who fight denials. Privacy, audit, and uptime are design constraints, not compliance theatre.',
    image: '/images/industry-health.jpg',
    systems: ['Hospital information', 'Pharmacy & lab', 'Billing & claims', 'ERP', 'Referral networks', 'Patient portals'],
    workSlugs: [],
  },
  {
    slug: 'public-sector',
    name: 'Government & development',
    summary: 'Programmes with integrity, citizen-facing services, and ledgers that auditors can replay.',
    body: 'Public systems fail when they are built for the launch event. We design for registration integrity, grievance redress, partner reporting, and the unfashionable work of master data. Transparency portals publish what should be public. Personal data stays where the law says it should. We are comfortable in steering committees and in ward offices.',
    image: '/images/industry-public.jpg',
    systems: ['Registries', 'Subsidy & grants', 'Case management', 'Open statistics', 'GIS', 'Partner reporting'],
    workSlugs: [],
  },
  {
    slug: 'finance-logistics',
    name: 'Finance, trade & logistics',
    summary: 'Credit, documents, shipments, and exceptions — with AI that clerks will trust.',
    body: 'Banks, 3PLs, distributors, and trading houses live on documents and time. We build the spines that match invoices to reality, follow a container inland, and show a credit officer the same story the warehouse sees. Applied AI earns its place in AP, KYC, and demand — always with an exception queue and an audit trail.',
    image: '/images/industry-finance.jpg',
    systems: ['Trade documents', 'Control towers', 'B2B commerce', 'Credit & collections', 'KYC intelligence', 'Treasury visibility'],
    workSlugs: ['lumen-document-intelligence', 'northstar-control-tower', 'criss-cross-fmcg'],
  },
  {
    slug: 'education',
    name: 'Education',
    summary: 'Student, staff, and campus operations that treat the registry as a product.',
    body: 'Universities and school networks need more than a portal. We work on admissions, student finance, HRMS for academic and non-academic staff, and the unglamorous integrations that keep a campus week running. Design is calm, accessible, and built for peak registration week.',
    image: '/images/industry-education.jpg',
    systems: ['Student information', 'Fees & finance', 'HRMS', 'Timetabling interfaces', 'Alumni portals', 'Research admin'],
    workSlugs: [],
  },
]
