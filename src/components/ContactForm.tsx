import { useState, type FormEvent } from 'react'
import { site } from '../data/site'

export function ContactForm() {
  const [sent, setSent] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [org, setOrg] = useState('')
  const [interest, setInterest] = useState('ERP design & implementation')
  const [message, setMessage] = useState('')

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !message.trim()) return
    const subject = encodeURIComponent(`Brief from ${name} — ${org || 'Zenora enquiry'}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nOrganisation: ${org}\nInterest: ${interest}\n\n${message}`,
    )
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  if (sent) {
    return (
      <div className="border border-navy/10 bg-foam p-10">
        <p className="kicker text-teal-dim">Received</p>
        <h3 className="display mt-4 text-3xl">Thank you. We will be in touch within two working days.</h3>
        <p className="mt-4 text-sm leading-relaxed text-ink/65">
          If your mail client did not open, write directly to {site.email} with the same brief.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6">
      <label className="block">
        <span className="kicker text-mist">Name</span>
        <input value={name} onChange={(e) => setName(e.target.value)} required autoComplete="name" />
      </label>
      <label className="block">
        <span className="kicker text-mist">Work email</span>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" />
      </label>
      <label className="block">
        <span className="kicker text-mist">Organisation</span>
        <input value={org} onChange={(e) => setOrg(e.target.value)} autoComplete="organization" />
      </label>
      <label className="block">
        <span className="kicker text-mist">What do you need</span>
        <select value={interest} onChange={(e) => setInterest(e.target.value)}>
          <option>ERP design & implementation</option>
          <option>HRMS & people systems</option>
          <option>AgriTech & farmers platforms</option>
          <option>Applied AI</option>
          <option>Custom software</option>
          <option>Web & digital experience</option>
          <option>Mobile applications</option>
          <option>Integration & transformation</option>
          <option>Not sure yet</option>
        </select>
      </label>
      <label className="block">
        <span className="kicker text-mist">The brief</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          placeholder="What must exist in ninety days? Who operates it? What has already failed?"
        />
      </label>
      <button
        type="submit"
        className="mt-2 bg-navy px-6 py-4 text-[13px] font-semibold tracking-[0.1em] uppercase text-paper hover:bg-teal hover:text-navy"
      >
        Send the brief
      </button>
    </form>
  )
}
