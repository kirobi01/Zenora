export type CaseStudy = {
  slug: string
  title: string
  client: string
  sector: string
  year: string
  services: string[]
  summary: string
  challenge: string
  approach: string
  architecture: string[]
  outcomes: { value: string; label: string }[]
  quote?: { text: string; person: string; role: string }
  image: string
  imageAlt?: string
  confidential?: boolean
  location?: string
  tone?: 'documentary'
  featured?: boolean
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'meridian-manufacturing-erp',
    title: 'One backbone for a multi-plant manufacturer',
    client: 'Meridian Industrials',
    sector: 'Manufacturing',
    year: '2023',
    services: ['ERP design & implementation', 'Integration', 'Custom software'],
    summary:
      'A purpose-built ERP covering finance, MRP, quality, and distribution across four plants — replacing a tangle of desktop accounting and shop-floor whiteboards.',
    challenge:
      'Meridian had grown by acquisition. Each plant had its own item codes, costing folklore, and month-end ritual. Group finance could not consolidate without a two-week spreadsheet. Stock-outs and overstock lived side by side. A previous suite implementation had stalled at “phase one” and become a political artefact. The board wanted control without stopping the lines.',
    approach:
      'We refused a big-bang cutover. Plant zero was a greenfield data model: a group item master, a costing method the CFO would sign, and production orders that matched how supervisors already thought. We ran parallel for two month-ends, then rolled plant by plant. Integrations to weighing scales, the WMS, and the bank were in the first release, not a later phase. Hypercare meant Zenora people on the factory floor at 5:30 a.m. for six weeks.',
    architecture: [
      'Unified item, BOM, and routing master across plants',
      'Real-time inventory and batch traceability',
      'MRP with planner workbenches, not black-box suggestions',
      'Finance close cockpit with intercompany eliminations',
      'Event stream to BI so plant managers see the same truth as group',
    ],
    outcomes: [
      { value: '6 days', label: 'Group close, down from 18' },
      { value: '22%', label: 'Working capital released from inventory' },
      { value: '4', label: 'Plants on one item master' },
      { value: '0', label: 'Unplanned production stops at cutover' },
    ],
    quote: {
      text: 'They did not sell us a dream of digital transformation. They stood next to the shift supervisor until the screen matched the line.',
      person: 'Daniel Otieno',
      role: 'Group COO, Meridian Industrials',
    },
    image: '/images/work-erp.jpg',
    featured: true,
  },
  {
    slug: 'aether-people-hrms',
    title: 'Hire-to-retire for a 9,000-person group',
    client: 'Aether Holdings',
    sector: 'Conglomerate / HR',
    year: '2024',
    services: ['HRMS & people systems', 'Integration', 'Mobile applications'],
    summary:
      'A single employee record, multi-entity payroll, and manager self-service that warehouse teams actually complete.',
    challenge:
      'Nine thousand people across hospitality, logistics, and retail. Payroll in three vendors. Statutory filings assembled by heroics. Managers approved leave on paper because the last HR portal felt like punishment. The CHRO needed one record, one payroll calendar, and a mobile experience that a night-shift supervisor would finish in under a minute.',
    approach:
      'We started with the employee record and identity — not with a performance module nobody asked for. Payroll rules were encoded with the group’s actual collective agreements, not a generic template. Self-service launched on feature phones via USSD in parallel with the app. Bank files, NHIF/NSSF-style statutory outputs, and GL postings into the existing finance system were acceptance criteria, not integrations to “phase later.”',
    architecture: [
      'Canonical employee, position, and cost-center model',
      'Rules engine for multi-entity payroll and benefits',
      'Manager and employee apps plus USSD',
      'Biometric attendance adapters per site',
      'Finance posting and statutory file generation',
    ],
    outcomes: [
      { value: '9,000', label: 'Employees on one record' },
      { value: '14 hrs', label: 'Payroll cycle time, down from 5 days' },
      { value: '76%', label: 'Leave requests now digital' },
      { value: '3', label: 'Payroll vendors retired' },
    ],
    image: '/images/work-hrms.jpg',
    featured: true,
  },
  {
    slug: 'lumen-document-intelligence',
    title: 'Invoices that post themselves — almost',
    client: 'Lumen Logistics',
    sector: 'Logistics',
    year: '2025',
    services: ['Applied AI', 'ERP design & implementation', 'Custom software'],
    summary:
      'Document intelligence that reads supplier invoices, matches them to POs and GRNs, and parks only the exceptions for AP clerks.',
    challenge:
      'A regional 3PL was drowning in PDFs, photos of delivery notes, and supplier portals. AP headcount grew linearly with volume. Exception handling was tribal knowledge. Leadership had seen three “AI invoice” demos. None survived the first week of real Kenyan and Emirati supplier documents.',
    approach:
      'We built the model last. First came a structured intake, a matching engine against purchase orders and receipts, and a clerk workbench with an audit trail. Extraction models were trained on Lumen’s own mess — stamps, handwritten quantities, mixed languages. Confidence thresholds send clean documents straight to ERP draft postings. Everything else lands in an exception queue with the reason, not a shrug. A weekly evaluation set keeps drift visible to finance, not just data science.',
    architecture: [
      'Multi-channel intake: email, portal, mobile capture',
      'Extraction + validation against vendor master and PO/GRN',
      'Human-in-the-loop workbench with dual control',
      'ERP posting adapters and three-way match',
      'Model evaluation dashboard owned by AP, not IT',
    ],
    outcomes: [
      { value: '71%', label: 'Invoices auto-posted with no clerk touch' },
      { value: '9 min', label: 'Median exception handling time' },
      { value: '4.6×', label: 'Documents processed per AP FTE' },
      { value: '99.2%', label: 'Posting accuracy on sampled audit' },
    ],
    quote: {
      text: 'The win was not the model. The win was that my clerks trust the queue, and internal audit can replay every decision.',
      person: 'Samira Haddad',
      role: 'CFO, Lumen Logistics',
    },
    image: '/images/work-ai.jpg',
    featured: true,
  },
  {
    slug: 'criss-cross-fmcg',
    title: 'Route-to-market that van sales and finance can both trust',
    client: 'Criss Cross FMCG',
    sector: 'FMCG / Distribution',
    year: '2024–25',
    location: 'Kenya',
    services: ['Custom software', 'Mobile applications', 'ERP integration'],
    summary:
      'Ordering, credit, and proof of delivery for Criss Cross — built around how the vans already sell, not a portal nobody would open.',
    challenge:
      'Outlets ordered on WhatsApp. Credit lived with a few people who knew the trade. Stock on the van and stock in the warehouse told different stories by mid-afternoon. A previous “digital channel” had launched as a brochure and died. Leadership wanted one picture: what left the depot, what the outlet took, what was still on credit, and what the next load should be.',
    approach:
      'We rode routes before we drew screens. The first slice was outlet identity, live price and stock from the books they already close, and an order the rep can finish in a shop doorway. Credit limits and ageing sat next to the SKU list — not in a finance folder. Proof of delivery and returns closed the loop the same day. Launch was territory by territory so a bad week in one region could not stain the brand.',
    architecture: [
      'Outlet master tied to the existing customer and credit records',
      'Live catalogue, price, and available-to-promise from the operational books',
      'Rep app and WhatsApp ordering on the same order object',
      'Proof of delivery, returns, and van stock',
      'Territory view for sales and a close file finance already knew how to post',
    ],
    outcomes: [
      { value: '1', label: 'Order, credit, and delivery on the same record' },
      { value: 'By route', label: 'Rollout — not a national big-bang' },
      { value: 'Same day', label: 'Proof of delivery back to the depot' },
      { value: 'Live', label: 'Price and stock the van can sell against' },
    ],
    quote: {
      text: 'The reps use it because it helps them sell. Finance uses it because the delivery matches the invoice. That is the only test that mattered.',
      person: 'Commercial lead',
      role: 'Criss Cross FMCG',
    },
    image: '/images/work-web.jpg',
    featured: true,
  },
  {
    slug: 'northstar-control-tower',
    title: 'A control tower for a regional supply chain',
    client: 'Northstar Trading',
    sector: 'Supply chain',
    year: '2025',
    services: ['Applied AI', 'Custom software', 'Integration'],
    summary:
      'Demand sensing, inbound visibility, and exception management across ports, bonded warehouses, and inland depots.',
    challenge:
      'Containers were “somewhere.” Planners lived in email. Stock-out and demurrage were discovered after they became expensive. Leadership wanted an AI control tower. We insisted on a data foundation first.',
    approach:
      'We stitched shipping lines, customs, WMS, and ERP into an event timeline per shipment and SKU. Exception playbooks — not just red dots — tell a planner what to do. A demand model proposes, a human disposes. The interface is a war-room wall and a phone-grade queue, because crises do not wait for a desktop.',
    architecture: [
      'Shipment and SKU event spine',
      'Carrier, customs, and WMS adapters',
      'Exception playbooks with owners and SLAs',
      'Demand sensing with planner override',
      'Executive and night-duty views',
    ],
    outcomes: [
      { value: '31%', label: 'Fewer demurrage events' },
      { value: '9 hrs', label: 'Median time-to-detect inbound delay' },
      { value: '18%', label: 'Service-level improvement on A SKUs' },
      { value: '1', label: 'Shared picture from port to depot' },
    ],
    image: '/images/work-logistics.jpg',
  },
]

export function workPhotoClass(tone?: CaseStudy['tone']) {
  return tone === 'documentary' ? 'documentary-photo' : ''
}
