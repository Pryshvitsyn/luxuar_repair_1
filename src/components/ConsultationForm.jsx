import React, { useState } from 'react'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_RE = /^\+?[0-9\s\-()]{7,20}$/

function isFutureDateTime(value) {
  if (!value) return false
  const d = new Date(value)
  if (Number.isNaN(d.getTime())) return false
  return d.getTime() > Date.now()
}

export default function ConsultationForm({ onClose }) {
  const [form, setForm] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    service: 'Help with search/buy property',
    datetime: '',
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [serverError, setServerError] = useState('')

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const validate = () => {
    const next = {}

    if (!form.name.trim()) next.name = 'Name is required'
    if (!form.surname.trim()) next.surname = 'Surname is required'

    if (!EMAIL_RE.test(form.email.trim())) {
      next.email = 'Enter a valid email (example@domain.com)'
    }

    if (!PHONE_RE.test(form.phone.trim())) {
      next.phone = 'Enter a valid phone number'
    }

    if (!isFutureDateTime(form.datetime)) {
      next.datetime = 'Please choose a valid future date/time'
    }

    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setServerError('')

    if (!validate()) return

    try {
      setSubmitting(true)

      const payload = new FormData()
      payload.append('name', form.name)
      payload.append('surname', form.surname)
      payload.append('email', form.email)
      payload.append('phone', form.phone)
      payload.append('service', form.service)
      payload.append('datetime', form.datetime)

      const res = await fetch('https://script.google.com/macros/s/AKfycbxPnOvCn7lR98Jh1cNs5KKvl3heYaCu6k55oSpCJ_vQf3MDYqF6Q8MwFrHTFJH2VB6GXQ/exec', {
        method: 'POST',
        body: payload,
      })

      if (!res.ok) throw new Error('Request failed')

      onClose()
    } catch (err) {
      setServerError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-lg font-bold mb-4">Consultation Request</h2>
        <form onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            placeholder="Name"
            className="w-full mb-1 border p-2 rounded"
            value={form.name}
            onChange={update('name')}
          />
          {errors.name && <p className="text-red-600 text-sm mb-2">{errors.name}</p>}

          <input
            type="text"
            placeholder="Surname"
            className="w-full mb-1 border p-2 rounded"
            value={form.surname}
            onChange={update('surname')}
          />
          {errors.surname && <p className="text-red-600 text-sm mb-2">{errors.surname}</p>}

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-1 border p-2 rounded"
            value={form.email}
            onChange={update('email')}
          />
          {errors.email && <p className="text-red-600 text-sm mb-2">{errors.email}</p>}

          <input
            type="tel"
            placeholder="Phone"
            className="w-full mb-1 border p-2 rounded"
            value={form.phone}
            onChange={update('phone')}
          />
          {errors.phone && <p className="text-red-600 text-sm mb-2">{errors.phone}</p>}

          <select
            className="w-full mb-2 border p-2 rounded"
            value={form.service}
            onChange={update('service')}
          >
            <option>Help with search/buy property</option>
            <option>Help with repairment</option>
            <option>Maintenance</option>
          </select>

          <input
            type="datetime-local"
            className="w-full mb-1 border p-2 rounded"
            value={form.datetime}
            onChange={update('datetime')}
          />
          {errors.datetime && <p className="text-red-600 text-sm mb-2">{errors.datetime}</p>}

          {serverError && <p className="text-red-700 text-sm mb-3">{serverError}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="bg-brand-blue text-white px-4 py-2 rounded disabled:opacity-60"
          >
            {submitting ? 'Sending...' : 'Submit'}
          </button>
        </form>
        <button onClick={onClose} className="mt-2 text-sm text-slate-500">Close</button>
      </div>
    </div>
  )
}
