import React from 'react'

export default function ConsultationForm({ onClose }) {
  const minDateTime = new Date(Date.now() + 60 * 1000).toISOString().slice(0, 16)

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-lg font-bold mb-4">Consultation Request</h2>
        <form
          action="https://script.google.com/macros/s/AKfycbxPnOvCn7lR98Jh1cNs5KKvl3heYaCu6k55oSpCJ_vQf3MDYqF6Q8MwFrHTFJH2VB6GXQ/exec"
          method="POST"
          target="hidden_iframe"
          onSubmit={() => setTimeout(onClose, 300)}
        >
          <input type="text" name="name" placeholder="Name" required className="w-full mb-2 border p-2 rounded" />
          <input type="text" name="surname" placeholder="Surname" required className="w-full mb-2 border p-2 rounded" />
          <input type="email" name="email" placeholder="Email" required className="w-full mb-2 border p-2 rounded" />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            required
            pattern="^\+?[0-9\s\-()]{7,20}$"
            title="Enter a valid phone number"
            className="w-full mb-2 border p-2 rounded"
          />
          <select name="service" required className="w-full mb-2 border p-2 rounded">
            <option value="Help with search/buy property">Help with search/buy property</option>
            <option value="Help with repairment">Help with repairment</option>
            <option value="Maintenance">Maintenance</option>
          </select>
          <input
            type="datetime-local"
            name="datetime"
            required
            min={minDateTime}
            className="w-full mb-4 border p-2 rounded"
          />
          <button type="submit" className="bg-brand-blue text-white px-4 py-2 rounded">Submit</button>
        </form>
        <iframe name="hidden_iframe" style={{ display: 'none' }} title="hidden_submit_target" />
        <button onClick={onClose} className="mt-2 text-sm text-slate-500">Close</button>
      </div>
    </div>
  )
}
