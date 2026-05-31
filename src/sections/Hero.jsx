import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const videos = [
  'https://res.cloudinary.com/dxnvj1dnr/video/upload/v1780221773/front_video_wjninz.mp4',
  'https://res.cloudinary.com/dxnvj1dnr/video/upload/v1780221851/building_video1_yd7zy8.mp4',
  'https://res.cloudinary.com/dxnvj1dnr/video/upload/v1780221801/architecture_video_gepfl3.mp4',
  'https://res.cloudinary.com/dxnvj1dnr/video/upload/v1780221815/underground_tunnel_video_ba6iiv.mp4',
]

const SLIDE_DURATION = 7000

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const videoRefs = useRef({})
  const sectionRef = useRef(null)

  const { scrollY } = useScroll()
  const videoScale      = useTransform(scrollY, [0, 600], [1, 1.06])
  const contentY        = useTransform(scrollY, [0, 500], [0, -50])
  const contentOpacity  = useTransform(scrollY, [0, 350], [1, 0])

  const goTo = (i) => {
    if (transitioning || i === current) return
    setTransitioning(true)
    setCurrent(i)
    setTimeout(() => setTransitioning(false), 1100)
  }

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent(p => {
        const n = (p + 1) % videos.length
        setTransitioning(true)
        setTimeout(() => setTransitioning(false), 1100)
        return n
      })
    }, SLIDE_DURATION)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    videos.forEach((_, i) => {
      const v = videoRefs.current[i]
      if (!v) return
      if (i === current) v.play().catch(() => {})
      else { v.pause(); v.currentTime = 0 }
    })
  }, [current])

  return (
    <section
      id="hero"
      ref={sectionRef}
      style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        background: '#000',
      }}
    >
      {/* ── VIDEOS ── */}
      <motion.div style={{ position: 'absolute', inset: 0, scale: videoScale }}>
        {videos.map((src, i) => (
          <video
            key={src}
            ref={el => { if (el) videoRefs.current[i] = el }}
            src={src}
            autoPlay={i === 0}
            muted loop playsInline
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover',
              opacity: i === current ? 1 : 0,
              transition: 'opacity 1.1s cubic-bezier(0.4,0,0.2,1)',
              zIndex: i === current ? 1 : 0,
            }}
          />
        ))}
      </motion.div>

      {/* ── OVERLAYS — dark, site se match ── */}
      {/* Main cinematic dark overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2,
        background: 'linear-gradient(110deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.35) 100%)',
      }} />
      {/* Bottom vignette */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '260px', zIndex: 3,
        background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.75))',
      }} />
      {/* Top vignette */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '160px', zIndex: 3,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)',
      }} />

      {/* ── TOP GOLD LINE ── */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.8, ease: [0.22,1,0.36,1], delay: 0.2 }}
        style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.7) 25%, rgba(201,168,76,0.7) 75%, transparent)',
          zIndex: 10, transformOrigin: 'left',
        }}
      />

      {/* ── CORNER BRACKETS ── */}
      {[
        { top: '88px', left: '44px', borderTop: '1px solid rgba(201,168,76,0.5)', borderLeft: '1px solid rgba(201,168,76,0.5)' },
        { top: '88px', right: '44px', borderTop: '1px solid rgba(201,168,76,0.5)', borderRight: '1px solid rgba(201,168,76,0.5)' },
        { bottom: '60px', left: '44px', borderBottom: '1px solid rgba(201,168,76,0.5)', borderLeft: '1px solid rgba(201,168,76,0.5)' },
        { bottom: '60px', right: '44px', borderBottom: '1px solid rgba(201,168,76,0.5)', borderRight: '1px solid rgba(201,168,76,0.5)' },
      ].map((s, i) => (
        <motion.div key={i}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 + i * 0.1, ease: [0.22,1,0.36,1] }}
          style={{ position: 'absolute', width: '44px', height: '44px', zIndex: 5, pointerEvents: 'none', ...s }}
        />
      ))}

      {/* ── SPARKLE ACCENTS ── */}
      {[
        { top: '22%', right: '14%', size: 18, delay: 2.0 },
        { top: '68%', right: '8%',  size: 11, delay: 2.4 },
        { top: '48%', right: '26%', size: 8,  delay: 2.8 },
      ].map((s, i) => (
        <motion.svg key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: s.delay, duration: 0.7, ease: [0.22,1,0.36,1] }}
          style={{ position: 'absolute', top: s.top, right: s.right, zIndex: 5, pointerEvents: 'none' }}
          width={s.size} height={s.size} viewBox="0 0 24 24"
        >
          <path d="M12 0 L13.5 10.5 L24 12 L13.5 13.5 L12 24 L10.5 13.5 L0 12 L10.5 10.5 Z"
            fill="rgba(201,168,76,0.7)" />
        </motion.svg>
      ))}

      {/* ── MAIN CONTENT ── */}
      <motion.div
        style={{
          position: 'relative', zIndex: 10,
          width: '100%', maxWidth: '1280px',
          margin: '0 auto',
          padding: '120px 64px 80px',
          y: contentY,
          opacity: contentOpacity,
        }}
      >
        <div style={{ maxWidth: '600px' }}>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22,1,0.36,1], delay: 0.5 }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}
          >
            <div style={{ width: '32px', height: '1px', background: 'rgba(201,168,76,0.8)' }} />
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.6rem', fontWeight: '700',
              letterSpacing: '0.32em', textTransform: 'uppercase',
              color: 'rgba(201,168,76,0.9)',
            }}>
              Premium Stone Supply &amp; Installation
            </span>
          </motion.div>

          {/* Headline */}
          <div style={{ overflow: 'hidden', marginBottom: '4px' }}>
            <motion.h1
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.0, ease: [0.22,1,0.36,1], delay: 0.65 }}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(3.4rem, 6.5vw, 5.8rem)',
                fontWeight: '600',
                color: '#ffffff',
                lineHeight: '1',
                letterSpacing: '-0.015em',
                margin: 0,
              }}
            >
              Express Stone
            </motion.h1>
          </div>

          <div style={{ overflow: 'hidden', marginBottom: '36px' }}>
            <motion.div
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.0, ease: [0.22,1,0.36,1], delay: 0.8 }}
              style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}
            >
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.6rem, 3.2vw, 2.8rem)',
                fontWeight: '300',
                fontStyle: 'italic',
                color: 'var(--gold)',
                letterSpacing: '0.12em',
              }}>
                Ltd
              </span>
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.6rem', fontWeight: '600',
                letterSpacing: '0.28em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
                paddingBottom: '3px',
              }}>
                Est. 2014 · London, UK
              </span>
            </motion.div>
          </div>

          {/* Gold rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: [0.22,1,0.36,1], delay: 0.95 }}
            style={{
              width: '52px', height: '1px',
              background: 'linear-gradient(to right, var(--gold), rgba(201,168,76,0.2))',
              marginBottom: '28px',
              transformOrigin: 'left',
            }}
          />

          {/* Description card — dark frosted glass */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 1.1 }}
            style={{
              background: 'rgba(0,0,0,0.35)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              border: '1px solid rgba(201,168,76,0.15)',
              padding: '20px 24px',
              marginBottom: '36px',
              maxWidth: '440px',
            }}
          >
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.88rem', fontWeight: '300',
              color: 'rgba(255,255,255,0.72)',
              lineHeight: '1.85',
              margin: 0,
              letterSpacing: '0.02em',
            }}>
              Crafting extraordinary interiors with precision&#8209;engineered
              marble and stone surfaces. From residential kitchens to landmark
              commercial spaces.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 1.25 }}
            style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}
          >
            <motion.a
              href="#contact"
              whileHover={{ y: -3, background: '#b8922a' }}
              whileTap={{ scale: 0.97 }}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.65rem', fontWeight: '700',
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: '#0a0800',
                background: 'var(--gold)',
                padding: '14px 32px',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'background 0.25s ease',
              }}
            >
              Request a Consultation
            </motion.a>

            <motion.a
              href="#products"
              whileHover={{ y: -3, borderColor: 'rgba(201,168,76,0.7)', color: 'var(--gold)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.65rem', fontWeight: '600',
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.7)',
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.25)',
                padding: '14px 32px',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.25s ease',
              }}
            >
              Discover Collection
            </motion.a>
          </motion.div>

          {/* Stats — dark glass pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.45 }}
            style={{
              display: 'inline-flex',
              marginTop: '48px',
              background: 'rgba(0,0,0,0.4)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(201,168,76,0.22)',
              overflow: 'hidden',
            }}
          >
            {[
              { number: '500+', label: 'Projects'     },
              { number: '10+',  label: 'Years'        },
              { number: '100%', label: 'Satisfaction' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.55 + i * 0.12 }}
                style={{
                  padding: '14px 28px',
                  textAlign: 'center',
                  borderRight: i < 2 ? '1px solid rgba(201,168,76,0.15)' : 'none',
                }}
              >
                <p style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.55rem', fontWeight: '700',
                  color: 'var(--gold)',
                  lineHeight: '1', margin: '0 0 4px',
                }}>
                  {s.number}
                </p>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.55rem', fontWeight: '600',
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.35)',
                  margin: 0,
                }}>
                  {s.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.div>

      {/* ── SLIDE COUNTER ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 1 }}
        style={{
          position: 'absolute', right: '52px', bottom: '110px',
          zIndex: 10,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '8px',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.9rem', fontWeight: '700',
          color: 'rgba(201,168,76,0.85)',
          lineHeight: '1',
        }}>
          0{current + 1}
        </span>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, rgba(201,168,76,0.35), transparent)',
        }} />
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.55rem', fontWeight: '500',
          letterSpacing: '0.15em',
          color: 'rgba(255,255,255,0.3)',
        }}>
          0{videos.length}
        </span>
      </motion.div>

      {/* ── PROGRESS DOTS ── */}
      <div style={{
        position: 'absolute', bottom: '44px', left: '64px',
        display: 'flex', gap: '8px', zIndex: 10, alignItems: 'center',
      }}>
        {videos.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            animate={{
              width: i === current ? 26 : 6,
              background: i === current
                ? 'rgb(201,168,76)'
                : 'rgba(255,255,255,0.3)',
            }}
            transition={{ duration: 0.4, ease: [0.22,1,0.36,1] }}
            style={{ height: '2px', border: 'none', cursor: 'pointer', padding: 0, borderRadius: '1px' }}
          />
        ))}
      </div>

      {/* ── SCROLL MOUSE ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        style={{
          position: 'absolute', bottom: '32px',
          left: '50%', transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '6px',
        }}
      >
        <motion.div
          animate={{ y: [0, 7, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '18px', height: '28px',
            border: '1px solid rgba(201,168,76,0.45)',
            borderRadius: '9px',
            display: 'flex', justifyContent: 'center', paddingTop: '5px',
          }}
        >
          <div style={{
            width: '3px', height: '5px',
            borderRadius: '2px',
            background: 'rgba(201,168,76,0.7)',
          }} />
        </motion.div>
      </motion.div>

    </section>
  )
}
