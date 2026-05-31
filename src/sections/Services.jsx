export default function Services() {
  const services = [
    {
      number: '01',
      title: 'Marble Supply',
      description: 'A wide selection of premium marble, granite, quartz, and natural stone materials sourced from the finest quarries worldwide.',
      icon: '◇',
    },
    {
      number: '02',
      title: 'Kitchen Worktops',
      description: 'Elegant, durable stone countertops tailored to your kitchen space. Precision cut and professionally fitted.',
      icon: '◇',
    },
    {
      number: '03',
      title: 'Bathroom Installation',
      description: 'Luxury vanity tops, wall cladding, shower surrounds, and bespoke bathroom stonework for a premium finish.',
      icon: '◇',
    },
    {
      number: '04',
      title: 'Flooring & Wall Cladding',
      description: 'Timeless marble and stone finishes for interiors and commercial spaces. Built to last a lifetime.',
      icon: '◇',
    },
    {
      number: '05',
      title: 'Staircases & Feature Walls',
      description: 'Custom stone designs that create a lasting impression. Transform ordinary spaces into extraordinary ones.',
      icon: '◇',
    },
    {
      number: '06',
      title: 'Commercial Projects',
      description: 'Stone solutions for offices, hotels, retail spaces, restaurants, and large-scale developments.',
      icon: '◇',
    },
  ]

  return (
    <section
      id="services"
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

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

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
            What We Offer
          </p>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: '600',
            color: 'var(--white)',
            lineHeight: '1.2',
            marginBottom: '20px',
          }}>
            Our <span style={{ color: 'var(--gold)', fontStyle: 'italic', fontWeight: '300' }}>Services</span>
          </h2>
          <div style={{
            width: '60px',
            height: '1px',
            background: 'var(--gold)',
            margin: '0 auto',
          }} />
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1px',
          background: 'rgba(201,168,76,0.1)',
          border: '1px solid rgba(201,168,76,0.1)',
        }}>
          {services.map((service, i) => (
            <div
              key={i}
              style={{
                padding: '40px 36px',
                background: 'var(--black)',
                transition: 'all 0.3s ease',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--dark-2)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--black)'
              }}
            >
              {/* Number */}
              <p style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '3.5rem',
                fontWeight: '700',
                color: 'rgba(201,168,76,0.08)',
                lineHeight: '1',
                marginBottom: '16px',
                letterSpacing: '-0.02em',
              }}>
                {service.number}
              </p>

              {/* Gold line */}
              <div style={{
                width: '30px',
                height: '1px',
                background: 'var(--gold)',
                marginBottom: '20px',
              }} />

              {/* Title */}
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.4rem',
                fontWeight: '600',
                color: 'var(--white)',
                marginBottom: '14px',
                letterSpacing: '0.02em',
              }}>
                {service.title}
              </h3>

              {/* Description */}
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.82rem',
                fontWeight: '300',
                color: 'var(--gray)',
                lineHeight: '1.8',
              }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          textAlign: 'center',
          marginTop: '60px',
        }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.85rem',
            color: 'var(--gray)',
            marginBottom: '24px',
          }}>
            Not sure what you need? Get in touch and we will guide you.
          </p>
          <a
            href="#contact"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.72rem',
              fontWeight: '600',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              border: '1px solid rgba(201,168,76,0.5)',
              padding: '14px 36px',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => {
              e.target.style.background = 'var(--gold)'
              e.target.style.color = 'var(--black)'
            }}
            onMouseLeave={e => {
              e.target.style.background = 'transparent'
              e.target.style.color = 'var(--gold)'
            }}
          >
            Discuss Your Project
          </a>
        </div>

      </div>
    </section>
  )
}
