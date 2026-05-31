import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import ProductModal from '../components/ProductModal'

const products = [
  {
    id: 1,
    name: 'Calacatta Fantastico',
    tagline: 'Timeless Elegance. Naturally Exceptional.',
    description: 'A timeless masterpiece with bold, dramatic veining on a crisp white base. Perfect for creating statement spaces with elegance and sophistication.',
    finish: 'Polished',
    thickness: '20mm / 30mm',
    size: '3200 x 1600mm (Jumbo)',
    code: 'ES-QF-001',
    collection: 'Quartz Collection',
    origin: 'Premium Engineered Quartz',
    image: 'https://res.cloudinary.com/dxnvj1dnr/image/upload/v1780212523/calacatta_fantatistico_tdtkio.png',
  },
  {
    id: 2,
    name: 'Taj Mahal Extra',
    tagline: 'Soft. Elegant. Timeless.',
    description: 'A delicate blend of warm whites and subtle beige veining inspired by the natural beauty of Taj Mahal stone. Perfect for creating bright, serene spaces.',
    finish: 'Polished',
    thickness: '20mm / 30mm',
    size: '3200 x 1600mm (Jumbo)',
    code: 'ES-QF-012',
    collection: 'Quartz Collection',
    origin: 'Premium Engineered Quartz',
    image: 'https://res.cloudinary.com/dxnvj1dnr/image/upload/v1780212503/Taj_mahal_kvuulb.png',
  },
  {
    id: 3,
    name: 'Carrara Supremo',
    tagline: 'Classic Beauty. Timeless Appeal.',
    description: 'Inspired by the iconic Italian marble, Carrara Supremo features soft grey veining on a bright white background. A sophisticated choice for elegant interiors.',
    finish: 'Polished',
    thickness: '20mm / 30mm',
    size: '3200 x 1600mm (Jumbo)',
    code: 'ES-QF-003',
    collection: 'Quartz Collection',
    origin: 'Premium Engineered Quartz',
    image: 'https://res.cloudinary.com/dxnvj1dnr/image/upload/v1780212487/Carrara_supremo_hdwdms.png',
  },
  {
    id: 4,
    name: 'Statuario Venato',
    tagline: 'Pure Elegance. Timeless Luxury.',
    description: 'Statuario Venato captures the essence of classic Italian marble with its crisp white base and soft, flowing grey veining. A luxurious statement for any space.',
    finish: 'Polished',
    thickness: '20mm / 30mm',
    size: '3200 x 1600mm (Jumbo)',
    code: 'ES-QF-004',
    collection: 'Quartz Collection',
    origin: 'Premium Engineered Quartz',
    image: 'https://res.cloudinary.com/dxnvj1dnr/image/upload/v1780212464/Statuario_venato_ygb1me.png',
  },
  {
    id: 5,
    name: 'Bianco Lumina',
    tagline: 'Pure. Refined. Radiant.',
    description: 'Bianco Lumina brings a clean, luminous white surface to life with its gentle grey tones. Perfect for bright, sophisticated spaces.',
    finish: 'Polished',
    thickness: '20mm / 30mm',
    size: '3200 x 1600mm (Jumbo)',
    code: 'ES-QF-005',
    collection: 'Quartz Collection',
    origin: 'Premium Engineered Quartz',
    image: 'https://res.cloudinary.com/dxnvj1dnr/image/upload/v1780212445/Bilanco_lumina_b3xza7.png',
  },
  {
    id: 6,
    name: 'Galaxy Nero',
    tagline: 'Deep. Distinctive. Unforgettable.',
    description: 'Galaxy Nero showcases a rich black base enhanced with unique gold and silver specks that shimmer with sophistication. A striking centerpiece for luxury interiors.',
    finish: 'Polished',
    thickness: '20mm / 30mm',
    size: '3200 x 1600mm (Jumbo)',
    code: 'ES-QF-007',
    collection: 'Quartz Collection',
    origin: 'Premium Engineered Quartz',
    image: 'https://res.cloudinary.com/dxnvj1dnr/image/upload/v1780212429/Glaxy_nero_m48k2v.png',
  },
]

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <section
      id="products"
      style={{
        padding: '100px 20px',
        background: 'var(--dark)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>

        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: '60px',
          flexWrap: 'wrap',
          gap: '20px',
        }}>
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
              Quartz Collection
            </p>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: '600',
              color: 'var(--white)',
              lineHeight: '1.2',
            }}>
              Premium <span style={{
                color: 'var(--gold)',
                fontStyle: 'italic',
                fontWeight: '300',
              }}>Stone Products</span>
            </h2>
          </div>

          <div style={{
            borderLeft: '2px solid var(--gold)',
            paddingLeft: '20px',
          }}>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.72rem',
              fontWeight: '300',
              color: 'var(--gray)',
              lineHeight: '1.8',
              maxWidth: '260px',
            }}>
              Engineered for beauty and durability — each stone is precision crafted for residential and commercial spaces.
            </p>
          </div>
        </div>

        {/* Gold divider */}
        <div style={{
          width: '100%',
          height: '1px',
          background: 'linear-gradient(to right, var(--gold), transparent)',
          marginBottom: '60px',
          opacity: 0.3,
        }} />

        {/* Products Grid — proper gap */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px',
        }}>
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={setSelectedProduct}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
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
            Request a Sample
          </a>
        </div>

      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  )
}
