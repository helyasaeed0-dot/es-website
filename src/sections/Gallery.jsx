import { useState } from 'react'

// Cloudinary optimized URL helper — serves compressed, resized WebP automatically
const cld = (url, w = 800) => {
  // Insert Cloudinary transformation params right after /upload/
  return url.replace('/upload/', `/upload/f_auto,q_auto:good,w_${w},c_fill/`)
}

const galleryItems = [
  { id: 1, title: 'Luxury Kitchen Worktop',  category: 'Kitchen',    image: 'https://res.cloudinary.com/doewtzrgl/image/upload/v1780293567/kitchen1_uvqnsz.jpg' },
  { id: 2, title: 'Bespoke Kitchen Island',  category: 'Kitchen',    image: 'https://res.cloudinary.com/doewtzrgl/image/upload/v1780293567/kitchen2_ywfhav.avif' },
  { id: 3, title: 'Marble Bathroom Vanity',  category: 'Bathroom',   image: 'https://res.cloudinary.com/doewtzrgl/image/upload/v1780293296/bathroom1_yfkuzx.jpg' },
  { id: 4, title: 'Shower Surround',         category: 'Bathroom',   image: 'https://res.cloudinary.com/doewtzrgl/image/upload/v1780293958/bathroom_5_yname8.jpg' },
  { id: 5, title: 'Feature Wall Cladding',   category: 'Wall',       image: 'https://res.cloudinary.com/doewtzrgl/image/upload/v1780293720/wall_1_r7c04a.jpg' },
  { id: 6, title: 'Stone Wall Panel',        category: 'Wall',       image: 'https://res.cloudinary.com/doewtzrgl/image/upload/v1780294042/wall10_yrxxkm.jpg' },
  { id: 7, title: 'Staircase Installation',  category: 'Staircase',  image: 'https://res.cloudinary.com/doewtzrgl/image/upload/v1780293301/staircase2_vxzchf.jpg' },
  { id: 8, title: 'Grand Staircase',         category: 'Staircase',  image: 'https://res.cloudinary.com/doewtzrgl/image/upload/v1780293309/staircase1_a6j8ze.jpg' },
  { id: 9, title: 'Commercial Flooring',     category: 'Commercial', image: 'https://res.cloudinary.com/doewtzrgl/image/upload/v1780293298/commercial1_dxz5mx.jpg' },
]

const categories = ['All', 'Kitchen', 'Bathroom', 'Wall', 'Staircase', 'Commercial']

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [loadedIds,    setLoadedIds]    = useState({})
  const [hoveredId,    setHoveredId]    = useState(null)

  const filtered = galleryItems.filter(item =>
    activeFilter === 'All' ? true : item.category === activeFilter
  )

  return (
    <section id="gallery" style={s.section}>
      {/* Preload first 3 images via <link rel="preload"> injected in <head> */}
      {galleryItems.slice(0, 3).map(item => (
        <link
          key={item.id}
          rel="preload"
          as="image"
          href={cld(item.image, 800)}
          fetchpriority="high"
        />
      ))}

      <div style={s.container}>

        {/* Header */}
        <div style={s.header}>
          <p style={s.eyebrow}>Our Work</p>
          <h2 style={s.title}>
            Recent <span style={s.italic}>Projects</span>
          </h2>
          <div style={s.divider} />
          <p style={s.subtitle}>
            Luxury kitchens, bathrooms, staircases, feature walls, and commercial stone installations.
          </p>
        </div>

        {/* Filter Buttons */}
        <div style={s.filters}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                ...s.filterBtn,
                background:  activeFilter === cat ? 'var(--gold)' : 'transparent',
                color:       activeFilter === cat ? 'var(--black)' : 'var(--gray)',
                borderColor: activeFilter === cat ? 'var(--gold)' : 'rgba(201,168,76,0.2)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div style={s.grid}>
          {filtered.map((item, i) => {
            const isLoaded  = !!loadedIds[item.id]
            const isHovered = hoveredId === item.id
            const isTall    = i % 3 === 0
            // First 6 images load eagerly (above fold), rest lazy
            const isEager   = item.id <= 6

            return (
              <div
                key={item.id}
                style={{
                  ...s.card,
                  height: isTall ? '320px' : '260px',
                  borderColor: isHovered ? 'rgba(201,168,76,0.45)' : 'rgba(201,168,76,0.1)',
                }}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Skeleton shown until loaded */}
                {!isLoaded && <div style={s.skeleton} />}

                <img
                  src={cld(item.image, 800)}
                  alt={item.title}
                  loading={isEager ? 'eager' : 'lazy'}
                  decoding={isEager ? 'sync' : 'async'}
                  fetchpriority={item.id <= 3 ? 'high' : 'auto'}
                  style={{
                    ...s.img,
                    opacity:   isLoaded ? 1 : 0,
                    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                  }}
                  onLoad={() =>
                    setLoadedIds(prev => ({ ...prev, [item.id]: true }))
                  }
                />

                {/* Hover overlay */}
                <div style={{ ...s.overlay, opacity: isHovered ? 1 : 0 }}>
                  <div style={s.overlayLine} />
                  <p style={s.overlayTitle}>{item.title}</p>
                  <p style={s.overlayCategory}>{item.category}</p>
                </div>

                {/* Category badge */}
                <div style={s.badge}>
                  <p style={s.badgeText}>{item.category}</p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

const s = {
  section: {
    padding: '100px 20px',
    background: 'var(--dark)',
    position: 'relative',
    overflow: 'hidden',
  },
  container: { maxWidth: '1200px', margin: '0 auto' },
  header:    { textAlign: 'center', marginBottom: '50px' },
  eyebrow: {
    fontFamily: 'var(--font-body)',
    fontSize: '0.7rem', fontWeight: '600',
    letterSpacing: '0.3em', textTransform: 'uppercase',
    color: 'var(--gold)', marginBottom: '16px',
  },
  title: {
    fontFamily: 'var(--font-heading)',
    fontSize: 'clamp(2rem, 4vw, 3.2rem)',
    fontWeight: '600', color: 'var(--white)',
    lineHeight: '1.2', marginBottom: '20px',
  },
  italic: { color: 'var(--gold)', fontStyle: 'italic', fontWeight: '300' },
  divider: {
    width: '60px', height: '1px',
    background: 'var(--gold)',
    margin: '0 auto 16px',
  },
  subtitle: {
    fontFamily: 'var(--font-body)',
    fontSize: '0.85rem', fontWeight: '300',
    color: 'var(--gray)',
  },
  filters: {
    display: 'flex', justifyContent: 'center',
    gap: '10px', marginBottom: '50px', flexWrap: 'wrap',
  },
  filterBtn: {
    fontFamily: 'var(--font-body)',
    fontSize: '0.65rem', fontWeight: '600',
    letterSpacing: '0.15em', textTransform: 'uppercase',
    padding: '8px 20px', cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: '1px solid',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '16px',
  },
  card: {
    position: 'relative',
    border: '1px solid',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'border-color 0.3s ease',
    background: '#111',
  },
  skeleton: {
    position: 'absolute', inset: 0,
    background: 'linear-gradient(90deg, #1a1a1a 25%, #222 50%, #1a1a1a 75%)',
    backgroundSize: '200% 100%',
    animation: 'shimmer 1.4s infinite',
    zIndex: 1,
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    display: 'block',
    transition: 'transform 0.5s ease, opacity 0.4s ease',
    position: 'relative',
    zIndex: 2,
  },
  overlay: {
    position: 'absolute', inset: 0, zIndex: 3,
    background: 'rgba(0,0,0,0.75)',
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center',
    transition: 'opacity 0.3s ease',
    gap: '8px',
  },
  overlayLine: {
    width: '32px', height: '1px',
    background: 'var(--gold)', marginBottom: '8px',
  },
  overlayTitle: {
    fontFamily: 'var(--font-heading)',
    fontSize: '1.1rem', fontWeight: '600',
    color: 'var(--white)', textAlign: 'center',
    padding: '0 20px',
  },
  overlayCategory: {
    fontFamily: 'var(--font-body)',
    fontSize: '0.65rem', letterSpacing: '0.2em',
    textTransform: 'uppercase', color: 'var(--gold)',
  },
  badge: {
    position: 'absolute', bottom: '12px', left: '12px',
    zIndex: 4,
    background: 'rgba(10,10,10,0.85)',
    border: '1px solid rgba(201,168,76,0.2)',
    padding: '4px 10px',
  },
  badgeText: {
    fontFamily: 'var(--font-body)',
    fontSize: '0.58rem', fontWeight: '600',
    letterSpacing: '0.15em', textTransform: 'uppercase',
    color: 'var(--gold)',
  },
}
