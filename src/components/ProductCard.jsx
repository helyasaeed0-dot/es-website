export default function ProductCard({ product, onViewDetails }) {
  return (
    <div
      style={{
        background: 'var(--dark-2)',
        border: '1px solid rgba(201,168,76,0.1)',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.border = '1px solid rgba(201,168,76,0.4)'
        e.currentTarget.style.transform = 'translateY(-4px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.border = '1px solid rgba(201,168,76,0.1)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {/* Image Area */}
      <div style={{
        height: '220px',
        background: 'var(--dark-3)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.5s ease',
            }}
            onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.target.style.transform = 'scale(1)'}
          />
        ) : (
          <p style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '3rem',
            color: 'rgba(201,168,76,0.2)',
          }}>ES</p>
        )}

        {/* Collection badge */}
        <div style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          background: 'rgba(10,10,10,0.85)',
          border: '1px solid rgba(201,168,76,0.3)',
          padding: '4px 10px',
        }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.6rem',
            fontWeight: '600',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
          }}>
            {product.collection}
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '24px' }}>
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.3rem',
          fontWeight: '600',
          color: 'var(--white)',
          marginBottom: '8px',
          letterSpacing: '0.02em',
        }}>
          {product.name}
        </h3>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.72rem',
          fontWeight: '300',
          color: 'var(--gray)',
          fontStyle: 'italic',
          marginBottom: '16px',
        }}>
          {product.tagline}
        </p>

        {/* Details row */}
        <div style={{
          display: 'flex',
          gap: '16px',
          marginBottom: '20px',
          paddingBottom: '16px',
          borderBottom: '1px solid rgba(201,168,76,0.1)',
        }}>
          <div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.6rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--gray)',
              marginBottom: '2px',
            }}>Finish</p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.78rem',
              color: 'var(--white)',
            }}>{product.finish}</p>
          </div>
          <div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.6rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--gray)',
              marginBottom: '2px',
            }}>Thickness</p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.78rem',
              color: 'var(--white)',
            }}>{product.thickness}</p>
          </div>
        </div>

        {/* View Details Button */}
        <button
          onClick={() => onViewDetails(product)}
          style={{
            width: '100%',
            fontFamily: 'var(--font-body)',
            fontSize: '0.68rem',
            fontWeight: '600',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            background: 'transparent',
            border: '1px solid rgba(201,168,76,0.3)',
            padding: '12px',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
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
          View Details
        </button>
      </div>
    </div>
  )
}
