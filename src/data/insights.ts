export type Article = {
  slug: string
  title: string
  dek: string
  date: string
  minutes: string
  topic: string
  body: string[]
}

export const articles: Article[] = [
  {
    slug: 'erp-fails-in-the-item-master',
    title: 'ERP programmes fail in the item master, not the kickoff',
    dek: 'If your codes, units, and costing method are folklore, no amount of dashboards will save close.',
    date: '12 Mar 2026',
    minutes: '8',
    topic: 'ERP',
    body: [
      'Boards approve ERP programmes on the strength of a future-state slide. The slide is usually honest about ambition and silent about the item master. That silence is expensive.',
      'An item master is a political document. It encodes how plants name things, how finance costs them, how sales discounts them, and how warehouses count them. If those four groups do not share a noun, the software will faithfully automate a quarrel.',
      'Zenora’s practice is unfashionable: we freeze a first-cut master data design before we argue about screens. We sit with costing, with the store, with the night supervisor who invented a workaround in 2019 that now holds the plant together. We decide units of measure like adults. We decide what a “product” is versus a “variant” versus a “recipe.”',
      'Only then does implementation have a chance. Month-end is not a reporting problem. It is a language problem that became a ledger problem.',
      'If you are mid-programme and close is still a war-room, resist the urge to buy another analytics layer. Go back to the nouns. It is slower in week two and faster in year two.',
    ],
  },
  {
    slug: 'ai-that-clerks-will-trust',
    title: 'AI that clerks will trust, and auditors can replay',
    dek: 'The demo is not the product. The exception queue is.',
    date: '2 Feb 2026',
    minutes: '7',
    topic: 'AI',
    body: [
      'Every logistics and finance leader has seen a model read an invoice on stage. Few have a clerk who will defend that model on a Thursday when a supplier stamps over the total.',
      'Trust is an interface problem and a governance problem. Extraction without a three-way match is a parlour trick. Auto-posting without dual control is a finding waiting for internal audit. A model without an evaluation set owned by the business is a hobby.',
      'We ship document intelligence as an operations product: intake, validation against masters, confidence thresholds, an exception workbench with reasons, and a replayable decision log. The model is allowed to be wrong in public, inside a queue, with an owner.',
      'If your AI vendor cannot show you last week’s precision on your documents — not a public benchmark — you do not have a system. You have a pilot with better lighting.',
    ],
  },
  {
    slug: 'farmers-are-not-users-they-are-a-network',
    title: 'Farmers are not “users.” They are a network.',
    dek: 'Design for the officer, the agrodealer, the collection center, and the household — or the app will die in week three.',
    date: '18 Nov 2025',
    minutes: '9',
    topic: 'AgriTech',
    body: [
      'AgriTech fails when it imagines a farmer alone with a smartphone, making rational clicks. The real unit of design is a network: a household, a field officer with a dying tablet, an agrodealer who is also a cousin, a collection center that opens when the truck arrives, a cooperative secretary who still trusts the counter book.',
      'Channels have to be plural. USSD and WhatsApp are not concessions; they are often the system. Offline is not an edge case. Duplicate identity is not a data-quality issue you “clean later”; it is how leakage happens.',
      'The registry is the product. Advisory, credit, and markets only compound if the person, the plot, and the lot are true. That is slower than a launch video. It is the only way a minister, an offtaker, and a farmer ever hear the same number.',
    ],
  },
  {
    slug: 'hrms-adoption-is-a-night-shift-problem',
    title: 'HRMS adoption is a night-shift problem',
    dek: 'If a supervisor will not finish a leave approval in under a minute, you built a filing cabinet with a login.',
    date: '7 Sep 2025',
    minutes: '6',
    topic: 'HRMS',
    body: [
      'People teams launch portals. Warehouse teams ignore them. The post-mortem blames “change management,” which is a way of saying the software was designed at headquarters o’clock.',
      'Hire-to-retire systems earn adoption in the worst five minutes of a shift. Payslips on a feature phone. Attendance that does not pick a fight with a biometric clock that fails in the rain. Approvals that match how a supervisor already thinks about a crew.',
      'Payroll accuracy is the brand of HR. If the first digital payslip is wrong, you will spend a year apologising to a system that was technically “live.” We treat statutory files, bank files, and the GL posting as the launch criteria — and we stand next to payroll through the first three cycles.',
    ],
  },
  {
    slug: 'implementation-is-the-product',
    title: 'Implementation is the product',
    dek: 'Hypercare is not a warranty. It is the second half of design.',
    date: '21 May 2025',
    minutes: '5',
    topic: 'Practice',
    body: [
      'Software companies like to finish at deploy. Operators start living at deploy. The gap is where reputations go to die.',
      'Zenora staffs cutover like a product launch: runbooks, named champions, floor-walkers, a command channel, and the humility to change a workflow on day four when the night shift shows us we were wrong.',
      'If your contract ends at “go-live,” you have purchased a ceremony. Buy the ninety days after. That is when a system becomes a habit, or a rumour.',
    ],
  },
]
