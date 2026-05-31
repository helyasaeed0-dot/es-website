import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'James Richardson',
    location: 'London, UK',
    project: 'Kitchen Worktop',
    review: 'Excellent workmanship and professional service from start to finish. The team was punctual, tidy, and the final result exceeded our expectations. Our kitchen looks absolutely stunning.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Mitchell',
    location: 'Ruislip, UK',
    project: 'Bathroom Installation',
    review: 'Beautiful marble installation completed on time and exactly as promised. Express Stone transformed our bathroom into a luxury spa. Could not be happier with the result.',
    rating: 5,
  },
  {
    id: 3,
    name: 'David Thompson',
    location: 'Harrow, UK',
    project: 'Commercial Flooring',
    review: 'We used Express Stone for our office refurbishment and the quality of work was outstanding. Professional team, competitive pricing, and a flawless finish throughout.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Emma Clarke',
    location: 'Uxbridge, UK',
    project: 'Feature Wall',
    review: 'From material selection to final installation, the entire process was seamless. The feature wall they created is the centrepiece of our living room. Highly recommend.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Michael Patel',
    location: 'Watford, UK',
    project: 'Staircase',
    review: 'Incredible attention to detail on our staircase project. The stone work is precision perfect. Express Stone delivered exactly what they promised, on time and on budget.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () => setActive(i => (i === 0 ? testimonials.length - 1 : i - 1))
  const next = () => setActive(i => (i === testimonials.length - 1 ? 0 : i + 1))

  const current = testimonials[active]

  return (
    <section
      id="testimonials"
      style={{
        padding: '100px 20px',
        background: 'var(--black)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background accent */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: `
          linear-gradient(rgba(201,168,76,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(201,168,76,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '70px' }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.7rem',
            fontWeight: '600',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '16px',
          }}>
            Client Reviews
          </p>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: '600',
            color: 'var(--white)',
            lineHeight: '1.2',
            marginBottom: '20px',
          }}>
            What Clients <span style={{
              color: 'var(--gold)',
              fontStyle: 'italic',
              fontWeight: '300',
            }}>Say</span>
          </h2>
          <div style={{
            width: '60px',
            height: '1px',
            background: 'var(--gold)',
            margin: '0 auto',
          }} />
        </div>

        {/* Testimonial Card */}
        <div style={{
          border: '1px solid rgba(201,168,76,0.15)',
          background: 'rgba(201,168,76,0.02)',
          padding: '60px',
          position: 'relative',
          textAlign: 'center',
        }}>

          {/* Gold corner accents */}
          <div style={{
            position: 'absolute', top: '-1px', left: '-1px',
            width: '40px', height: '40px',
            borderTop: '2px solid var(--gold)',
            borderLeft: '2px solid var(--gold)',
          }} />
          <div style={{
            position: 'absolute', bottom: '-1px', right: '-1px',
            width: '40px', height: '40px',
            borderBottom: '2px solid var(--gold)',
            borderRight: '2px solid var(--gold)',
          }} />

          {/* Quote mark */}
          <p style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '5rem',
            color: 'rgba(201,168,76,0.15)',
            lineHeight: '0.5',
            marginBottom: '32px',
          }}>
            "
          </p>

          {/* Stars */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '4px',
            marginBottom: '28px',
          }}>
            {[...Array(current.rating)].map((_, i) => (
              <span key={i} style={{ color: 'var(--gold)', fontSize: '0.9rem' }}>★</span>
            ))}
          </div>

          {/* Review text */}
          <p style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
            fontWeight: '400',
            color: 'var(--white)',
            lineHeight: '1.8',
            fontStyle: 'italic',
            marginBottom: '40px',
            maxWidth: '680px',
            margin: '0 auto 40px',
          }}>
            "{current.review}"
          </p>

          {/* Divider */}
          <div style={{
            width: '40px',
            height: '1px',
            background: 'var(--gold)',
            margin: '0 auto 24px',
          }} />

          {/* Client info */}
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.85rem',
            fontWeight: '600',
            color: 'var(--white)',
            letterSpacing: '0.05em',
            marginBottom: '4px',
          }}>
            {current.name}
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.7rem',
            fontWeight: '300',
            color: 'var(--gray)',
            letterSpacing: '0.1em',
          }}>
            {current.project} · {current.location}
          </p>
        </div>

        {/* Navigation */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '24px',
          marginTop: '40px',
        }}>
          <button
            onClick={prev}
            style={{
              width: '44px', height: '44px',
              background: 'transparent',
              border: '1px solid rgba(201,168,76,0.3)',
              color: 'var(--gold)',
              cursor: 'pointer',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--gold)'
              e.currentTarget.style.color = 'var(--black)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = 'var(--gold)'
            }}
          >
            ←
          </button>

          {/* Dots */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: i === active ? '24px' : '8px',
                  height: '2px',
                  background: i === active ? 'var(--gold)' : 'rgba(201,168,76,0.25)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0,
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            style={{
              width: '44px', height: '44px',
              background: 'transparent',
              border: '1px solid rgba(201,168,76,0.3)',
              color: 'var(--gold)',
              cursor: 'pointer',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--gold)'
              e.currentTarget.style.color = 'var(--black)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = 'var(--gold)'
            }}
          >
            →
          </button>
        </div>

      </div>
    </section>
  )
}
