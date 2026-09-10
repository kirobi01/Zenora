export type Offering = { title: string; body: string }

export type Service = {
  slug: string
  name: string
  eyebrow: string
  summary: string
  description: string
  image: string
  outcomes: string[]
  offerings: Offering[]
  stack: string[]
}

export const services: Service[] = [
  {
    slug: 'erp-design-implementation',
    name: 'ERP design & implementation',
    eyebrow: 'Enterprise core',
    summary:
      'Finance, inventory, procurement, production, and distribution — modelled to how your organization actually works, then implemented until the books close on time.',
    description:
      'Most ERP programmes fail in the gap between configuration and operations. Zenora treats ERP as both a design problem and a change problem. We map processes with the people who run them, design a chart of accounts and item master that will still make sense in five years, and stay through cutover, parallel run, and hypercare. Whether we extend a proven platform or engineer a purpose-built core, the standard is the same: one system of record, trusted numbers, and teams who can run it without us in the room.',
    image: '/images/work-erp.jpg',
    outcomes: [
      'Month-end close reduced from weeks to days',
      'Single source of truth across finance, stock, and sales',
      'Traceable procurement and audit-ready ledgers',
      'Plant, warehouse, and branch operations on one backbone',
    ],
    offerings: [
      {
        title: 'Discovery & operating model',
        body: 'Current-state mapping, future-state design, master data strategy, and a realistic cutover plan with executive and shop-floor stakeholders.',
      },
      {
        title: 'Custom and platform ERP',
        body: 'Purpose-built cores for organizations that outgrew spreadsheets, and disciplined implementation of established suites where they fit.',
      },
      {
        title: 'Finance, supply & production',
        body: 'GL, AR/AP, costing, inventory, MRP, quality, and multi-branch consolidation designed as one coherent model.',
      },
      {
        title: 'Migration, training & hypercare',
        body: 'Data cleansing, historical loads, role-based training, floor-walking, and a 90-day stabilization programme.',
      },
    ],
    stack: ['PostgreSQL', 'TypeScript', 'Python', 'Odoo', 'REST & events', 'Power BI / Metabase'],
  },
  {
    slug: 'hrms-people-systems',
    name: 'HRMS & people systems',
    eyebrow: 'Workforce',
    summary:
      'Hire-to-retire platforms that payroll trusts, managers actually use, and employees can reach from a phone.',
    description:
      'People operations collapse when HR, payroll, time, and talent live in separate tools. We design HRMS platforms that hold a clean employee record, run compliant payroll across entities, and give managers workflows they will complete. Self-service is designed for mixed digital literacy. Integrations with banks, statutory bodies, biometric attendance, and finance are treated as core product — not afterthoughts.',
    image: '/images/work-hrms.jpg',
    outcomes: [
      'Payroll cycles that close without war-rooms',
      'Statutory filings generated from the system of record',
      'Manager self-service with real adoption, not shelfware',
      'A trustworthy headcount and cost picture for the CFO',
    ],
    offerings: [
      {
        title: 'Core HR & employee record',
        body: 'Contracts, positions, org structures, documents, and a single identity that follows the person across entities.',
      },
      {
        title: 'Payroll, time & benefits',
        body: 'Multi-country payroll engines, leave, overtime, loans, pensions, and medical schemes with full audit trails.',
      },
      {
        title: 'Talent, performance & learning',
        body: 'Recruitment pipelines, probation, appraisals, and learning pathways that feed workforce planning.',
      },
      {
        title: 'Employee experience',
        body: 'Mobile self-service, payslips, requests, and announcements designed for the warehouse as much as HQ.',
      },
    ],
    stack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Mobile PWA', 'Bank & statutory APIs'],
  },
  {
    slug: 'agritech-farmers-systems',
    name: 'AgriTech & farmers systems',
    eyebrow: 'Field systems',
    summary:
      'Registries, extension, input credit, produce aggregation, and marketplaces — built for cooperatives, counties, and agribusiness at national scale.',
    description:
      'Agriculture is a last-mile problem dressed as software. Zenora builds farmer platforms that work with intermittent connectivity, USSD and WhatsApp as first-class channels, and field officers as the operating system. We have shipped farmer registries, e-extension, input subsidy and credit flows, collection-center operations, quality grading, and offtaker marketplaces. The work is as much about master data, incentives, and training as it is about apps.',
    image: '/images/work-coop-intake.jpg',
    outcomes: [
      'Living farmer registries instead of stale Excel lists',
      'Traceable produce from farm to offtaker',
      'Input distribution with less leakage',
      'Extension content and advisory reaching the last mile',
    ],
    offerings: [
      {
        title: 'Farmer registry & identity',
        body: 'Plot mapping, household records, KYC-lite onboarding, and de-duplication across programmes and seasons.',
      },
      {
        title: 'Extension, advisory & AI agronomy',
        body: 'Field-officer apps, seasonal campaigns, pest and weather alerts, and language-aware advisory.',
      },
      {
        title: 'Inputs, credit & subsidies',
        body: 'Voucher and wallet rails, agrodealer networks, repayment schedules, and programme integrity dashboards.',
      },
      {
        title: 'Aggregation, quality & markets',
        body: 'Collection centers, grading, lots, offtaker contracts, and price discovery that farmers can actually see.',
      },
    ],
    stack: ['React Native', 'USSD', 'WhatsApp Cloud API', 'PostGIS', 'Python', 'Offline-first sync'],
  },
  {
    slug: 'artificial-intelligence',
    name: 'Applied artificial intelligence',
    eyebrow: 'Intelligence',
    summary:
      'Document intelligence, forecasting, computer vision, and copilots — deployed into operations, not parked in a lab.',
    description:
      'We build AI that sits on top of a trustworthy system of record. That means retrieval over your documents, classifiers on your invoices, demand models on your sales history, and vision on your produce or factory line. Every model has an owner, an evaluation set, and a fallback. We prefer boring reliability over theatrical demos: a clerk who no longer re-keys a thousand invoices is a better story than a chatbot that hallucinates policy.',
    image: '/images/work-ai.jpg',
    outcomes: [
      'Hours of document processing collapsed into minutes',
      'Forecasts that planners trust enough to act on',
      'Exception queues instead of 100% manual review',
      'Clear model governance for audit and regulators',
    ],
    offerings: [
      {
        title: 'Document intelligence',
        body: 'Invoices, contracts, KYC packs, and claims extracted, validated, and posted into ERP or case systems.',
      },
      {
        title: 'Forecasting & operations research',
        body: 'Demand, yield, cash, and staffing models with planner-in-the-loop workflows.',
      },
      {
        title: 'Computer vision in the field and plant',
        body: 'Grading, defect detection, and safety monitoring designed for imperfect lighting and devices.',
      },
      {
        title: 'Copilots with guardrails',
        body: 'Role-aware assistants over policy, SOPs, and knowledge bases, with citations and human approval.',
      },
    ],
    stack: ['Python', 'PyTorch', 'OpenAI / open models', 'pgvector', 'Airflow', 'MLOps'],
  },
  {
    slug: 'custom-software',
    name: 'Custom software engineering',
    eyebrow: 'Products',
    summary:
      'Bespoke platforms, portals, and internal tools engineered as long-lived products — not one-off project code.',
    description:
      'When the market has no product that fits, we build one. Zenora engineers platforms with the discipline of a product company: domain modelling, automated tests, observability, and a roadmap the client can own. We work in finance, logistics, education, health, and the public sector — always with an eye on the operators who will live in the system after launch.',
    image: '/images/work-logistics.jpg',
    outcomes: [
      'Platforms that survive leadership changes',
      'Clear domain models instead of accidental architecture',
      'Observability from day one',
      'Internal teams trained to extend the product',
    ],
    offerings: [
      {
        title: 'Product discovery',
        body: 'Service blueprints, opportunity scoring, and a thin-slice roadmap that can ship in weeks, not years.',
      },
      {
        title: 'Platform engineering',
        body: 'APIs, event backbones, identity, multi-tenancy, and the unglamorous foundations that keep products alive.',
      },
      {
        title: 'Modernization',
        body: 'Strangling legacy systems, rewriting high-risk modules, and migrating data without stopping the business.',
      },
      {
        title: 'Managed evolution',
        body: 'Retained squads who keep the product compounding after go-live.',
      },
    ],
    stack: ['TypeScript', 'React', 'Node.js', 'Go', 'PostgreSQL', 'Kubernetes'],
  },
  {
    slug: 'web-design-experience',
    name: 'Web design & digital experience',
    eyebrow: 'Presence',
    summary:
      'Sites, portals, and brand systems with the gravity of a serious institution and the craft of a design studio.',
    description:
      'Digital presence is an operating asset. We design websites, client portals, and content systems for organizations that cannot afford to look like everyone else. Information architecture, motion, photography direction, and CMS operations are treated as one brief. The result is a presence that sells, explains, and serves — and that a communications team can actually run.',
    image: '/images/work-web.jpg',
    outcomes: [
      'Brand systems that hold up at enterprise scale',
      'Portals that customers prefer to the call center',
      'Editorial sites marketing teams can ship without engineering',
      'Performance and accessibility as defaults',
    ],
    offerings: [
      {
        title: 'Brand & design systems',
        body: 'Visual language, component libraries, and voice that travel from the homepage to the product UI.',
      },
      {
        title: 'Marketing and institutional sites',
        body: 'World-class public websites with CMS, localization, and measurable conversion paths.',
      },
      {
        title: 'Portals & self-service',
        body: 'Authenticated experiences for customers, farmers, patients, students, and partners.',
      },
      {
        title: 'Content operations',
        body: 'Governance, training, and templates so the site does not freeze the week after launch.',
      },
    ],
    stack: ['React', 'Design systems', 'Headless CMS', 'SEO', 'Motion', 'Accessibility'],
  },
  {
    slug: 'mobile-applications',
    name: 'Mobile applications',
    eyebrow: 'The edge',
    summary:
      'Field, consumer, and workforce apps that stay useful when the network does not.',
    description:
      'Our mobile work lives at the edge of the enterprise: agronomists, riders, nurses, sales reps, inspectors. We design offline-first data, conflict resolution, device constraints, and the unglamorous sync layer that makes a field day possible. Native, React Native, or PWA — chosen for the job, not the trend.',
    image: '/images/work-mobile.jpg',
    outcomes: [
      'Field teams working through outages',
      'GPS, photos, and forms captured once, used everywhere',
      'App store and MDM distribution that IT can govern',
      'Usage analytics that tell the operational truth',
    ],
    offerings: [
      {
        title: 'Offline-first field apps',
        body: 'Sync queues, photo compression, and maps that still work on a dusty tablet.',
      },
      {
        title: 'Consumer & member apps',
        body: 'Onboarding, wallets, orders, and support designed for mixed smartphones.',
      },
      {
        title: 'Workforce apps',
        body: 'Attendance, tasks, inventory counts, and approvals in the flow of a shift.',
      },
      {
        title: 'USSD & messaging',
        body: 'Feature-phone and WhatsApp journeys for populations the app stores do not reach.',
      },
    ],
    stack: ['React Native', 'Kotlin', 'Swift', 'SQLite', 'USSD', 'Firebase / custom push'],
  },
  {
    slug: 'integration-transformation',
    name: 'Integration & digital transformation',
    eyebrow: 'The connective tissue',
    summary:
      'Banks, ERPs, ministries, warehouses, and partners speaking one language — with change management that sticks.',
    description:
      'Transformation programmes die in the interfaces. We design event and API layers, master data, identity, and the operating cadence that keeps twenty systems from drifting. Programme management, vendor orchestration, and training sit beside the technical work. The ambition is not a slide titled “future state.” It is a Tuesday morning that is quieter than last year’s.',
    image: '/images/work-health.jpg',
    outcomes: [
      'Nightly reconciliations instead of monthly surprises',
      'Partner onboarding in days, not quarters',
      'Identity and access that security teams will sign',
      'A transformation office that has numbers, not folklore',
    ],
    offerings: [
      {
        title: 'Integration architecture',
        body: 'API gateways, event buses, EDI, and file exchanges designed for failure, retries, and audit.',
      },
      {
        title: 'Master data',
        body: 'Customers, items, farmers, employees, and locations governed as products.',
      },
      {
        title: 'Programme leadership',
        body: 'Steering, RAID, vendor management, and executive reporting that tells the truth.',
      },
      {
        title: 'Change & capability',
        body: 'Role design, floor training, champions networks, and post-go-live command centers.',
      },
    ],
    stack: ['Kafka / queues', 'API management', 'SSO', 'ETL', 'Observability', 'ITIL-aligned ops'],
  },
]
