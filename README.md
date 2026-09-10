# Zenora Technologies and Systems

World-class marketing and studio site for Zenora — software, web design, ERP, HRMS, AgriTech, and applied AI.

## Run locally

```bash
npm install
npm run dev
```

Opens at [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## What to personalise

The site ships with detailed, production-quality copy and stylised case studies. Before you go live, replace:

- `src/data/site.ts` — email, phone, office addresses, social links
- Leadership names and portraits if they should match your real partners
- Client names in `src/data/work.ts` if you have permission to name them
- The contact form currently opens the visitor’s mail client to `hello@zenoratech.systems`

## Stack

Vite, React, TypeScript, Tailwind CSS v4, React Router.
