export default function About() {
  const reasons = [
    'Premium marble & natural stone selection',
    'Expert measuring, cutting & fitting',
    'Fast and reliable service',
    'Competitive pricing',
    'Custom solutions for every project',
    'Residential & commercial projects',
  ]

  return (
    <section
      id="about"
      style={{
        padding: '100px 20px',
        background: 'var(--dark)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '1px',
        height: '100%',
        background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.3), transparent)',
        marginLeft: '60px',
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '80px',
        alignItems: 'center',
      }}>

        {/* Left Side */}
        <div>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.7rem',
            fontWeight: '600',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '16px',
          }}>
            About Us
          </p>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: '600',
            color: 'var(--white)',
            lineHeight: '1.2',
            marginBottom: '24px',
          }}>
            Craftsmanship <br />
            <span style={{ color: 'var(--gold)', fontStyle: 'italic', fontWeight: '300' }}>
              You Can Trust
            </span>
          </h2>

          <div style={{
            width: '60px',
            height: '1px',
            background: 'var(--gold)',
            marginBottom: '28px',
          }} />

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
            fontWeight: '300',
            color: 'var(--gray-light)',
            lineHeight: '1.9',
            marginBottom: '20px',
          }}>
            At Express Stone, we specialize in the supply and fitting of premium
            marble and natural stone solutions for residential and commercial clients.
            With a commitment to quality, precision workmanship, and dependable
            service, we help bring elegant stone designs to life.
          </p>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
            fontWeight: '300',
            color: 'var(--gray-light)',
            lineHeight: '1.9',
            marginBottom: '40px',
          }}>
            From selecting the perfect stone to expert installation, our team
            manages every stage with care and professionalism.
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
              padding: '14px 32px',
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
            Get In Touch
          </a>
        </div>

        {/* Right Side */}
        <div>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.7rem',
            fontWeight: '600',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '24px',
          }}>
            Why Choose Express Stone?
          </p>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0',
          }}>
            {reasons.map((reason, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '18px 0',
                  borderBottom: '1px solid rgba(201,168,76,0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.paddingLeft = '8px'
                  e.currentTarget.style.borderBottomColor = 'rgba(201,168,76,0.4)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.paddingLeft = '0'
                  e.currentTarget.style.borderBottomColor = 'rgba(201,168,76,0.1)'
                }}
              >
                <div style={{
                  width: '6px',
                  height: '6px',
                  background: 'var(--gold)',
                  flexShrink: 0,
                  transform: 'rotate(45deg)',
                }} />
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  fontWeight: '400',
                  color: 'var(--gray-light)',
                  letterSpacing: '0.03em',
                }}>
                  {reason}
                </p>
              </div>
            ))}
          </div>

          {/* Stats box */}
          <div style={{
            marginTop: '40px',
            padding: '28px',
            border: '1px solid rgba(201,168,76,0.2)',
            background: 'rgba(201,168,76,0.03)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px',
          }}>
            {[
              { number: '500+', label: 'Projects Done'     },
              { number: '10+',  label: 'Years Experience'  },
              { number: '50+',  label: 'Stone Varieties'   },
              { number: '100%', label: 'Satisfaction Rate' },
            ].map(stat => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <p style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2rem',
                  fontWeight: '600',
                  color: 'var(--gold)',
                  lineHeight: '1',
                  marginBottom: '4px',
                }}>
                  {stat.number}
                </p>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.65rem',
                  fontWeight: '500',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--gray)',
                }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
