export default function ProductModal({ product, onClose }) {
  if (!product) return null

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(0,0,0,0.85)',
        zIndex: 2000,
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
          maxWidth: '800px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'none',
            border: '1px solid rgba(201,168,76,0.3)',
            color: 'var(--gold)',
            width: '36px',
            height: '36px',
            cursor: 'pointer',
            fontSize: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
        >
          ✕
        </button>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        }}>
          {/* Image */}
          <div style={{
            height: '350px',
            background: 'var(--dark-3)',
            overflow: 'hidden',
          }}>
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <p style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '4rem',
                  color: 'rgba(201,168,76,0.2)',
                }}>ES</p>
              </div>
            )}
          </div>

          {/* Details */}
          <div style={{ padding: '40px 32px' }}>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.65rem',
              fontWeight: '600',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '10px',
            }}>
              {product.collection}
            </p>

            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2rem',
              fontWeight: '600',
              color: 'var(--white)',
              lineHeight: '1.2',
              marginBottom: '8px',
            }}>
              {product.name}
            </h2>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              fontWeight: '300',
              color: 'var(--gray)',
              fontStyle: 'italic',
              marginBottom: '20px',
            }}>
              {product.tagline}
            </p>

            <div style={{
              width: '40px',
              height: '1px',
              background: 'var(--gold)',
              marginBottom: '24px',
            }} />

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.82rem',
              fontWeight: '300',
              color: 'var(--gray-light)',
              lineHeight: '1.8',
              marginBottom: '28px',
            }}>
              {product.description}
            </p>

            {/* Specs */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0',
              marginBottom: '32px',
            }}>
              {[
                { label: 'Finish',     value: product.finish     },
                { label: 'Thickness',  value: product.thickness  },
                { label: 'Size',       value: product.size       },
                { label: 'Code',       value: product.code       },
                { label: 'Origin',     value: product.origin     },
              ].map((spec, i) => (
                <div key={i} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '10px 0',
                  borderBottom: '1px solid rgba(201,168,76,0.08)',
                }}>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--gray)',
                  }}>
                    {spec.label}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.82rem',
                    color: 'var(--white)',
                    fontWeight: '400',
                  }}>
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              onClick={onClose}
              style={{
                display: 'block',
                textAlign: 'center',
                fontFamily: 'var(--font-body)',
                fontSize: '0.72rem',
                fontWeight: '600',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--black)',
                background: 'var(--gold)',
                padding: '14px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => e.target.style.background = 'var(--gold-light)'}
              onMouseLeave={e => e.target.style.background = 'var(--gold)'}
            >
              Get a Quote for This Stone
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
