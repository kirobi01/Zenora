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
    slug: 'cereals-cooperative-union',
    title: 'Weighbridge tickets that the treasurer can pay against',
    client: 'Cereals growers’ cooperative union',
    sector: 'Cooperatives',
    year: '2023–24',
    location: 'Rift Valley, Kenya',
    confidential: true,
    services: ['AgriTech & farmers systems', 'Mobile applications', 'Custom software'],
    summary:
      'A union of 36 primary societies: one member register, intake at 11 collection centres, and a second-payment run that starts from the weighbridge ticket — not from a spreadsheet rebuilt every season.',
    challenge:
      'The union is a union in law and a stack of exercise books in practice. Each affiliated farmers’ cooperative society kept its own member numbers. The same household appeared three times — once at the society, once on the input revolving-fund list, once on a photocopied ID sheet in the accountant’s cabinet.\n\nIntake was a mechanical scale, a carbon receipt, and a WhatsApp photo of the day’s tally sent to headquarters. Second payment — the money members actually wait for after the miller or offtaker settles — was an Excel file that took the treasurer eleven nights. Kilos on the receipt and kilos on the payment list did not match often enough that queues turned into arguments. The board did not ask for a marketplace or an “agri platform.” They asked for the weighbridge ticket, the member number, and the second-payment file to be the same fact.',
    approach:
      'We sat on the intake bench for the first two buying weeks before we designed screens. The unit of work is not “the farmer in an app.” It is the society clerk, the scale, the sack, and the union accountant. First we built a member register that respects how cooperatives actually identify people: society code, member number, national ID where they consented, and a photo of the share certificate when the ID was missing. Duplicates were resolved in a hall with society secretaries, not by an algorithm alone.\n\nIntake followed: the clerk enters the ticket on a phone that works when the network bar disappears, writes the same serial on the paper carbon, and the lot is closed at end of day against the scale. Members check deliveries and input balances on USSD — the channel they already use for airtime. Second payment is a file the accountant can take to the bank, with recoveries for the input fund already netted. We trained clerks at the centres, not in a hotel workshop, and stood through the first two payment runs.',
    architecture: [
      'Member register keyed by society + member number, with ID de-duplication',
      'Weighbridge ticket as the source document for the lot and the payment',
      'Offline intake on the clerk’s phone, paper carbon kept as the legal copy',
      'USSD for delivery history, input balance, and payment notices',
      'Second-payment and input-recovery export the accountant already knew how to bank',
    ],
    outcomes: [
      { value: '36', label: 'Primary societies on one member register' },
      { value: '11', label: 'Collection centres issuing the same ticket series' },
      { value: '9,400', label: 'Unique members after de-duplication' },
      { value: '2', label: 'Seasons of second payment run from the system' },
    ],
    quote: {
      text: 'The ticket at the scale is now the same record I use to pay. Members stopped arguing about kilos we could not prove.',
      person: 'General Manager',
      role: 'Cereals growers’ cooperative union — name withheld',
    },
    image: '/images/work-coop-intake.jpg',
    imageAlt: 'Maize on a mechanical scale beside a handwritten cooperative receipt book',
    tone: 'documentary',
    featured: true,
  },
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
    slug: 'countyfarm-public-extension',
    title: 'A county that put extension back in the field',
    client: 'County Department of Agriculture',
    sector: 'Public sector',
    year: '2023',
    services: ['AgriTech & farmers systems', 'Web design', 'Applied AI'],
    summary:
      'Farmer registration, e-voucher inputs, and an extension officer platform for a county programme serving 62,000 households.',
    challenge:
      'Input subsidies were a political and operational risk. Ghost farmers, double registration, and agrodealers who ran out of stock on day two. Extension officers spent more time in the office compiling reports than on farms. The county needed integrity, not another dashboard for the CEC.',
    approach:
      'Registration used field biometrics and plot photos, with de-duplication against national IDs where consented. E-vouchers were redeemable only at contracted agrodealers with live stock. Officer apps scheduled visits, captured advisory, and — later — surfaced pest risk from a seasonal model. A public transparency portal published aggregated redemption, not personal data. We trained ward-level champions and sat in the war-room through the first distribution window.',
    architecture: [
      'Farmer and household registry with de-duplication',
      'E-voucher and agrodealer settlement rails',
      'Officer app with offline visit capture',
      'Seasonal advisory and outbreak alerting',
      'Open statistics portal for programme integrity',
    ],
    outcomes: [
      { value: '62k', label: 'Households registered' },
      { value: '28%', label: 'Fewer duplicate claims vs prior season' },
      { value: '2.4×', label: 'Farm visits logged per officer' },
      { value: '14 days', label: 'Agrodealer settlement, down from 6 weeks' },
    ],
    image: '/images/industry-public.jpg',
  },
  {
    slug: 'helios-hospital-system',
    title: 'Clinical and commercial truth in one hospital network',
    client: 'Helios Medical Group',
    sector: 'Health',
    year: '2024',
    services: ['ERP design & implementation', 'Custom software', 'Integration'],
    summary:
      'A hospital information and ERP spine linking encounters, pharmacy, labs, billing, and group finance across six facilities.',
    challenge:
      'Clinical systems and the accounts office disagreed about what happened yesterday. Pharmacy stock was a nightly argument. Insurance claims bounced. Patients queued twice. A best-of-breed stack had produced best-of-breed silos.',
    approach:
      'We defined a canonical encounter and a chargeable event before touching UI. Pharmacy and lab were integrated as sources of truth, not as islands. Billing rules for cash, corporate, and insurance were encoded with the revenue team. Clinicians got faster order entry; finance got a close they could defend. Change management included night-shift super-users, because that is when hospitals are honest.',
    architecture: [
      'Encounter-centric clinical record',
      'Pharmacy, lab, and radiology orders with stock impact',
      'Billing, claims, and cash office on one ledger',
      'Group finance consolidation',
      'HL7/FHIR-style interfaces where partners required them',
    ],
    outcomes: [
      { value: '6', label: 'Facilities on one operational spine' },
      { value: '19%', label: 'Reduction in claim rejections' },
      { value: '35 min', label: 'Shorter median pharmacy wait' },
      { value: '8 days', label: 'Revenue close, down from 3 weeks' },
    ],
    image: '/images/work-health.jpg',
  },
  {
    slug: 'atlas-b2b-commerce',
    title: 'A distributor’s digital storefront that sales actually uses',
    client: 'Atlas FMCG',
    sector: 'Distribution',
    year: '2025',
    services: ['Web design & digital experience', 'Mobile applications', 'ERP integration'],
    summary:
      'B2B ordering, credit visibility, and route-to-market for 4,000 retail outlets — designed with van sales, not against them.',
    challenge:
      'The previous portal was a brochure. Outlet owners ordered on WhatsApp. Sales reps feared anything that made their relationships transparent. Credit limits lived in a finance manager’s head. Atlas needed a channel that respected the van-sale motion while giving finance a spine.',
    approach:
      'We rode routes for two weeks. The product is a WhatsApp-class ordering experience with ERP pricing, available-to-promise, and credit in the same glance. Reps got a route app that helps them sell, not a surveillance tool. Design was restrained, fast, and in the languages outlets actually speak. Launch was by territory, with incentives aligned to digital order share.',
    architecture: [
      'Headless catalogue on live ERP pricing and stock',
      'Outlet identity, credit, and promotions engine',
      'WhatsApp ordering plus PWA and rep app',
      'Proof of delivery and returns',
      'Territory analytics for sales leadership',
    ],
    outcomes: [
      { value: '4,000', label: 'Outlets enabled' },
      { value: '38%', label: 'Orders now digital in live territories' },
      { value: '17%', label: 'Drop in failed deliveries' },
      { value: '2.1×', label: 'Rep calls converted to orders' },
    ],
    image: '/images/work-web.jpg',
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
