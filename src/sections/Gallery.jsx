import { useState, useEffect } from 'react'

import bathroom1   from '../assets/bathroom1.jpg'
import bathroom3   from '../assets/bathroom3.jpg'
import commercial1 from '../assets/commercial1.jpg'
import kitchen1    from '../assets/kitchen1.jpg'
import kitchen2    from '../assets/kitchen2.jpg'
import staircase1  from '../assets/staircase1.jpg'
import staircase2  from '../assets/staircase2.jpg'
import wall1       from '../assets/wall 1.jpg'
import wall2       from '../assets/wall2.jpg'

const galleryItems = [
  { id: 1, title: 'Luxury Kitchen Worktop',  category: 'Kitchen',    image: kitchen1    },
  { id: 2, title: 'Bespoke Kitchen Island',  category: 'Kitchen',    image: kitchen2    },
  { id: 3, title: 'Marble Bathroom Vanity',  category: 'Bathroom',   image: bathroom1   },
  { id: 4, title: 'Shower Surround',         category: 'Bathroom',   image: bathroom3   },
  { id: 5, title: 'Feature Wall Cladding',   category: 'Wall',       image: wall1       },
  { id: 6, title: 'Stone Wall Panel',        category: 'Wall',       image: wall2       },
  { id: 7, title: 'Staircase Installation',  category: 'Staircase',  image: staircase1  },
  { id: 8, title: 'Grand Staircase',         category: 'Staircase',  image: staircase2  },
  { id: 9, title: 'Commercial Flooring',     category: 'Commercial', image: commercial1 },
]

const categories = ['All', 'Kitchen', 'Bathroom', 'Wall', 'Staircase', 'Commercial']

// Preload all images immediately on module load
const preloadedImages = {}
galleryItems.forEach(item => {
  const img = new Image()
  img.src = item.image
  preloadedImages[item.id] = img
})

export default function Gallery() {
  const [activeFilter, setActiveFilter]   = useState('All')
  const [loadedIds,    setLoadedIds]      = useState({})
  const [hoveredId,    setHoveredId]      = useState(null)

  // Mark images as loaded once they're ready
  useEffect(() => {
    galleryItems.forEach(item => {
      const img = preloadedImages[item.id]
      const markLoaded = () =>
        setLoadedIds(prev => ({ ...prev, [item.id]: true }))

      if (img.complete) markLoaded()
      else img.onload = markLoaded
    })
  }, [])

  const filtered = galleryItems.filter(item =>
    activeFilter === 'All' ? true : item.category === activeFilter
  )

  return (
    <section id="gallery" style={s.section}>
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
                background:   activeFilter === cat ? 'var(--gold)' : 'transparent',
                color:        activeFilter === cat ? 'var(--black)' : 'var(--gray)',
                borderColor:  activeFilter === cat ? 'var(--gold)' : 'rgba(201,168,76,0.2)',
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

                {/* Image — always in DOM for instant display */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="eager"
                  decoding="async"
                  style={{
                    ...s.img,
                    opacity:    isLoaded ? 1 : 0,
                    transform:  isHovered ? 'scale(1.05)' : 'scale(1)',
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
    background: '#111',        // dark bg while loading
  },
  skeleton: {
    position: 'absolute', inset: 0,
    background: 'linear-gradient(90deg, #1a1a1a 25%, #222 50%, #1a1a1a 75%)',
    backgroundSize: '200% 100%',
    animation: 'shimmer 1.4s infinite',
    zIndex: 1,
  },
  img: {
    width: '100%', height: '100%',
    objectFit: 'cover', display: 'block',
    transition: 'transform 0.5s ease, opacity 0.4s ease',
    position: 'relative', zIndex: 2,
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
