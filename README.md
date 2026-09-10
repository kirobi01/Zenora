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
- The contact form currently opens the visitor’s mail client to `info@zenoratech.co.ke`

## Deploy on Cloudflare (free)

This is a Vite SPA. Cloudflare Workers static assets serve it. **Do not** use a Netlify-style `_redirects` file — that is what broke the first deploy (infinite loop). SPA fallback is set in `wrangler.jsonc`.

In the Cloudflare project:

1. **Deploy command:** `npm run deploy`  
   (not `npx wrangler deploy` alone — the site must be built first.)
2. After a green deploy, open **Workers & Pages → zenora → Custom domains** and add `zenoratech.co.ke` and `www.zenoratech.co.ke`.
3. If the domain is not already on Cloudflare DNS, add the zone (free) and point the `.co.ke` nameservers at Cloudflare, then attach the custom domain.

## Stack

Vite, React, TypeScript, Tailwind CSS v4, React Router, Cloudflare Workers.
