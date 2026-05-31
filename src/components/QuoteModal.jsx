import { useState } from 'react'

export default function QuoteModal({ onClose }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.service) {
      alert('Please fill in all fields.')
      return
    }
    const subject = `Quick Quote Request - ${form.service}`
    const body = `Name: ${form.name}%0APhone: ${form.phone}%0AService: ${form.service}`
    window.location.href = `mailto:office@expressstone.co.uk?subject=${subject}&body=${body}`
    onClose()
  }

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(0,0,0,0.85)',
        zIndex: 3000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: 'var(--dark)',
          border: '1px solid rgba(201,168,76,0.2)',
          maxWidth: '460px',
          width: '100%',
          padding: '48px 40px',
          position: 'relative',
        }}
      >
        {/* Corner accents */}
        <div style={{
          position: 'absolute', top: '-1px', left: '-1px',
          width: '32px', height: '32px',
          borderTop: '2px solid var(--gold)',
          borderLeft: '2px solid var(--gold)',
        }} />
        <div style={{
          position: 'absolute', bottom: '-1px', right: '-1px',
          width: '32px', height: '32px',
          borderBottom: '2px solid var(--gold)',
          borderRight: '2px solid var(--gold)',
        }} />

        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px', right: '16px',
            background: 'none',
            border: '1px solid rgba(201,168,76,0.3)',
            color: 'var(--gold)',
            width: '32px', height: '32px',
            cursor: 'pointer',
            fontSize: '0.85rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          ✕
        </button>

        {/* Header */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.65rem',
          fontWeight: '600',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'var(--gold)',
          marginBottom: '10px',
        }}>
          Free Consultation
        </p>
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.8rem',
          fontWeight: '600',
          color: 'var(--white)',
          marginBottom: '8px',
        }}>
          Get a Quick Quote
        </h3>
        <div style={{
          width: '40px', height: '1px',
          background: 'var(--gold)',
          marginBottom: '32px',
        }} />

        {/* Form */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

          {/* Name */}
          <div>
            <label style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.65rem',
              fontWeight: '600',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--gray)',
              display: 'block',
              marginBottom: '8px',
            }}>
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Smith"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(201,168,76,0.2)',
                color: 'var(--white)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                outline: 'none',
                transition: 'border 0.3s ease',
                boxSizing: 'border-box',
              }}
              onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.6)'}
              onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'}
            />
          </div>

          {/* Phone */}
          <div>
            <label style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.65rem',
              fontWeight: '600',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--gray)',
              display: 'block',
              marginBottom: '8px',
            }}>
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+44 7700 000000"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(201,168,76,0.2)',
                color: 'var(--white)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                outline: 'none',
                transition: 'border 0.3s ease',
                boxSizing: 'border-box',
              }}
              onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.6)'}
              onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'}
            />
          </div>

          {/* Service */}
          <div>
            <label style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.65rem',
              fontWeight: '600',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--gray)',
              display: 'block',
              marginBottom: '8px',
            }}>
              Service Required
            </label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'var(--dark)',
                border: '1px solid rgba(201,168,76,0.2)',
                color: form.service ? 'var(--white)' : 'var(--gray)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                outline: 'none',
                cursor: 'pointer',
                boxSizing: 'border-box',
              }}
              onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.6)'}
              onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'}
            >
              <option value="" disabled>Select a service</option>
              <option value="Kitchen Worktop">Kitchen Worktop</option>
              <option value="Bathroom Installation">Bathroom Installation</option>
              <option value="Flooring">Flooring</option>
              <option value="Wall Cladding">Wall Cladding</option>
              <option value="Staircase">Staircase</option>
              <option value="Commercial Project">Commercial Project</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            style={{
              marginTop: '8px',
              width: '100%',
              padding: '14px',
              background: 'var(--gold)',
              border: 'none',
              color: 'var(--black)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.72rem',
              fontWeight: '700',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => e.target.style.background = 'var(--gold-light)'}
            onMouseLeave={e => e.target.style.background = 'var(--gold)'}
          >
            Send My Request
          </button>

        </div>
      </div>
    </div>
  )
}
