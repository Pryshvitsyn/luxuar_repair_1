import React from 'react'

export default function ConsultationForm({ onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: connect to Google Sheets API
    onClose()
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-lg font-bold mb-4">Consultation Request</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" className="w-full mb-2 border p-2 rounded" />
          <input type="text" placeholder="Surname" className="w-full mb-2 border p-2 rounded" />
          <input type="email" placeholder="Email" className="w-full mb-2 border p-2 rounded" />
          <input type="tel" placeholder="Phone" className="w-full mb-2 border p-2 rounded" />
          <select className="w-full mb-2 border p-2 rounded">
            <option>Help with search/buy property</option>
            <option>Help with repairment</option>
            <option>Maintenance</option>
          </select>
          <input type="datetime-local" className="w-full mb-4 border p-2 rounded" />
          <button type="submit" className="bg-brand-blue text-white px-4 py-2 rounded">Submit</button>
        </form>
        <button onClick={onClose} className="mt-2 text-sm text-slate-500">Close</button>
      </div>
    </div>
  )
}
