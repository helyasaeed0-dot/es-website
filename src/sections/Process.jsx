export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'Tell us about your project requirements. We listen carefully to understand your vision, budget, and timeline.',
    },
    {
      number: '02',
      title: 'Material Selection',
      description: 'Choose from our premium stone range. Our experts guide you to find the perfect surface for your project.',
    },
    {
      number: '03',
      title: 'Site Measurement',
      description: 'Our team visits your site for accurate measurements ensuring a perfect fit with zero margin for error.',
    },
    {
      number: '04',
      title: 'Fabrication',
      description: 'Precision cutting and preparation of your chosen stone using state-of-the-art equipment and techniques.',
    },
    {
      number: '05',
      title: 'Installation',
      description: 'Professional fitting by experienced specialists. We ensure a flawless finish every single time.',
    },
  ]

  return (
    <section
      id="process"
      style={{
        padding: '100px 20px',
        background: 'var(--black)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background grid */}
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

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.7rem',
            fontWeight: '600',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '16px',
          }}>
            Simple & Transparent
          </p>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: '600',
            color: 'var(--white)',
            lineHeight: '1.2',
            marginBottom: '20px',
          }}>
            How We <span style={{
              color: 'var(--gold)',
              fontStyle: 'italic',
              fontWeight: '300',
            }}>Work</span>
          </h2>
          <div style={{
            width: '60px',
            height: '1px',
            background: 'var(--gold)',
            margin: '0 auto',
          }} />
        </div>

        {/* Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '0',
          position: 'relative',
        }}>

          {/* Connecting line */}
          <div style={{
            position: 'absolute',
            top: '36px',
            left: '10%',
            right: '10%',
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)',
            zIndex: 0,
          }} />

          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '0 20px',
                position: 'relative',
                zIndex: 1,
              }}
            >
              {/* Circle */}
              <div
                style={{
                  width: '72px',
                  height: '72px',
                  border: '1px solid rgba(201,168,76,0.4)',
                  background: 'var(--black)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '28px',
                  transition: 'all 0.3s ease',
                  flexShrink: 0,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--gold)'
                  e.currentTarget.style.borderColor = 'var(--gold)'
                  const num = e.currentTarget.querySelector('span')
                  if (num) num.style.color = 'var(--black)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--black)'
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)'
                  const num = e.currentTarget.querySelector('span')
                  if (num) num.style.color = 'var(--gold)'
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  letterSpacing: '0.1em',
                  color: 'var(--gold)',
                  transition: 'color 0.3s ease',
                }}>
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.2rem',
                fontWeight: '600',
                color: 'var(--white)',
                marginBottom: '14px',
                letterSpacing: '0.02em',
              }}>
                {step.title}
              </h3>

              {/* Description */}
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.78rem',
                fontWeight: '300',
                color: 'var(--gray)',
                lineHeight: '1.8',
              }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          textAlign: 'center',
          marginTop: '80px',
          padding: '48px',
          border: '1px solid rgba(201,168,76,0.15)',
          background: 'rgba(201,168,76,0.02)',
        }}>
          <p style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
            fontWeight: '500',
            color: 'var(--white)',
            marginBottom: '8px',
          }}>
            Ready to Transform Your Space?
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.82rem',
            fontWeight: '300',
            color: 'var(--gray)',
            marginBottom: '32px',
          }}>
            Start with a free consultation — no obligation, no pressure.
          </p>
          <a
            href="#contact"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.72rem',
              fontWeight: '600',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--black)',
              background: 'var(--gold)',
              padding: '14px 40px',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => {
              e.target.style.background = 'var(--gold-light)'
              e.target.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.target.style.background = 'var(--gold)'
              e.target.style.transform = 'translateY(0)'
            }}
          >
            Start Your Project
          </a>
        </div>

      </div>
    </section>
  )
}
