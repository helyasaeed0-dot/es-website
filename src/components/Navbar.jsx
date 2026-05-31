import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/ES logo.png'

const navLinks = [
  { label: 'About',        href: '#about'       },
  { label: 'Services',     href: '#services'    },
  { label: 'Products',     href: '#products'    },
  { label: 'Process',      href: '#process'     },
  { label: 'Gallery',      href: '#gallery'     },
  { label: 'Testimonials', href: '#testimonials'},
  { label: 'FAQ',          href: '#faq'         },
  { label: 'Contact',      href: '#contact'     },
]

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [activeLink, setActiveLink] = useState('')
  const [menuOpen,   setMenuOpen]   = useState(false)

  // ── Scroll background ──
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // ── Active section tracking via scroll position (most reliable) ──
  useEffect(() => {
    const getActiveSection = () => {
      const scrollY = window.scrollY + 120 // offset for navbar height

      // Go through sections in reverse so last visible wins
      const sectionIds = navLinks.map(l => l.href.replace('#', ''))
      
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i])
        if (!el) continue
        if (el.offsetTop <= scrollY) {
          setActiveLink(`#${sectionIds[i]}`)
          return
        }
      }
      setActiveLink('')
    }

    window.addEventListener('scroll', getActiveSection, { passive: true })
    getActiveSection() // run once on mount
    return () => window.removeEventListener('scroll', getActiveSection)
  }, [])

  // ── Body scroll lock for mobile menu ──
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNav = (href) => {
    setActiveLink(href)
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 999,
          background: scrolled ? 'rgba(6,5,3,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(18px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(18px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,168,76,0.12)' : '1px solid transparent',
          transition: 'background 0.4s ease, border-color 0.4s ease',
          padding: '0 48px',
        }}
      >
        {!scrolled && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.6, ease: [0.22,1,0.36,1], delay: 0.5 }}
            style={{
              position: 'absolute', top: 0, left: 0, right: 0,
              height: '1px',
              background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.5) 30%, rgba(201,168,76,0.5) 70%, transparent)',
              transformOrigin: 'left',
            }}
          />
        )}

        <div style={{
          maxWidth: '1320px', margin: '0 auto',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
          height: scrolled ? '68px' : '80px',
          transition: 'height 0.4s ease',
        }}>

          {/* ── LOGO ── */}
          <motion.a
            href="#hero"
            onClick={e => { e.preventDefault(); handleNav('#hero') }}
            whileHover={{ opacity: 0.85 }}
            style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}
          >
            <img
              src={logo}
              alt="Express Stone Ltd"
              style={{
                height: scrolled ? '42px' : '52px',
                width: 'auto', objectFit: 'contain',
                transition: 'height 0.4s ease',
                filter: 'brightness(1.05)',
              }}
            />
          </motion.a>

          {/* ── NAV LINKS ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }} className="desktop-nav">
            {navLinks.map((link, i) => {
              const isActive = activeLink === link.href
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={e => { e.preventDefault(); handleNav(link.href) }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.06 }}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.65rem', fontWeight: '600',
                    letterSpacing: '0.18em', textTransform: 'uppercase',
                    color: isActive ? 'var(--gold)' : 'rgba(255,255,255,0.75)',
                    textDecoration: 'none',
                    padding: '8px 12px',
                    position: 'relative',
                    transition: 'color 0.25s ease',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) e.currentTarget.style.color = '#fff'
                  }}
                  onMouseLeave={e => {
                    if (!isActive) e.currentTarget.style.color = 'rgba(255,255,255,0.75)'
                  }}
                >
                  {link.label}

                  {/* Active dot — only renders on active, no layoutId jumping */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.25 }}
                      style={{
                        position: 'absolute',
                        bottom: '2px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '4px', height: '4px',
                        borderRadius: '50%',
                        background: 'var(--gold)',
                      }}
                    />
                  )}
                </motion.a>
              )
            })}
          </div>

          {/* ── CTA ── */}
          <motion.a
            href="#contact"
            onClick={e => { e.preventDefault(); handleNav('#contact') }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="desktop-cta"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.62rem', fontWeight: '700',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#0a0800',
              background: 'var(--gold)',
              padding: '11px 26px',
              textDecoration: 'none',
              display: 'inline-block', flexShrink: 0,
              transition: 'background 0.25s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#b8922a' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--gold)' }}
          >
            Get a Quote
          </motion.a>

          {/* ── HAMBURGER ── */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
            className="hamburger"
            style={{
              background: 'transparent', border: 'none',
              cursor: 'pointer', padding: '8px',
              display: 'none', flexDirection: 'column', gap: '5px',
            }}
          >
            {[0,1,2].map(i => (
              <motion.span
                key={i}
                animate={
                  menuOpen
                    ? i === 0 ? { rotate: 45,  y: 7  }
                    : i === 1 ? { opacity: 0, scaleX: 0 }
                    : { rotate: -45, y: -7 }
                    : { rotate: 0, y: 0, opacity: 1, scaleX: 1 }
                }
                transition={{ duration: 0.3 }}
                style={{
                  display: 'block', width: '22px', height: '1.5px',
                  background: 'var(--gold)', borderRadius: '1px',
                  transformOrigin: 'center',
                }}
              />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22,1,0.36,1] }}
            style={{
              position: 'fixed', inset: 0, zIndex: 998,
              background: 'rgba(4,3,2,0.97)',
              backdropFilter: 'blur(20px)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: '4px', paddingTop: '80px',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={e => { e.preventDefault(); handleNav(link.href) }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.4 }}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.6rem, 5vw, 2.2rem)',
                  fontWeight: '300', fontStyle: 'italic',
                  color: activeLink === link.href ? 'var(--gold)' : 'rgba(255,255,255,0.8)',
                  textDecoration: 'none',
                  padding: '12px 0', letterSpacing: '0.04em',
                  transition: 'color 0.2s ease',
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={e => { e.preventDefault(); handleNav('#contact') }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{
                marginTop: '32px',
                fontFamily: 'var(--font-body)',
                fontSize: '0.7rem', fontWeight: '700',
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: '#0a0800', background: 'var(--gold)',
                padding: '14px 40px', textDecoration: 'none',
              }}
            >
              Get a Quote
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav  { display: none !important; }
          .desktop-cta  { display: none !important; }
          .hamburger    { display: flex !important; }
        }
      `}</style>
    </>
  )
}
