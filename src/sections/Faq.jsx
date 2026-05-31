import { useState } from 'react'

const faqs = [
  {
    id: 1,
    question: 'Do you offer free quotations?',
    answer: 'Yes, we offer completely free consultations and quotes. Simply contact us with your project details and we will get back to you promptly with a no-obligation quote.',
  },
  {
    id: 2,
    question: 'Do you supply materials only or do you also install?',
    answer: 'We offer both options. You can choose supply-only if you have your own fitter, or our full supply and installation service where our experienced team handles everything from measurement to fitting.',
  },
  {
    id: 3,
    question: 'What areas do you cover?',
    answer: 'We are based in Ruislip, London and cover the surrounding areas. Please contact us to confirm whether we cover your location.',
  },
  {
    id: 4,
    question: 'How long does installation take?',
    answer: 'Most residential projects such as kitchen worktops and bathroom vanities are completed within 1-2 days. Larger commercial projects may take longer. We will give you a precise timeline during your consultation.',
  },
  {
    id: 5,
    question: 'What types of stone do you work with?',
    answer: 'We work with a wide range of premium stones including engineered quartz, natural marble, granite, and porcelain. Our current quartz collection includes Calacatta Fantastico, Taj Mahal Extra, Carrara Supremo, Statuario Venato, Bianco Lumina, and Galaxy Nero.',
  },
  {
    id: 6,
    question: 'Can I see samples before ordering?',
    answer: 'Absolutely. We encourage you to view samples before making a decision. Contact us to arrange a sample viewing at our showroom or request samples to be brought to your home.',
  },
  {
    id: 7,
    question: 'Do you work on commercial projects?',
    answer: 'Yes, we have extensive experience with commercial projects including offices, hotels, restaurants, retail spaces, and large developments. We handle projects of all sizes.',
  },
  {
    id: 8,
    question: 'How do I care for my stone surfaces?',
    answer: 'Our engineered quartz surfaces are non-porous and easy to maintain. Simply clean with a damp cloth and mild detergent. Avoid harsh chemicals and abrasive cleaners. We provide full care guidance after installation.',
  },
]

export default function Faq() {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => setOpenId(prev => prev === id ? null : id)

  return (
    <section
      id="faq"
      style={{
        padding: '100px 20px',
        background: 'var(--dark)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>

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
            Got Questions?
          </p>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: '600',
            color: 'var(--white)',
            lineHeight: '1.2',
            marginBottom: '20px',
          }}>
            Frequently Asked <span style={{
              color: 'var(--gold)',
              fontStyle: 'italic',
              fontWeight: '300',
            }}>Questions</span>
          </h2>
          <div style={{
            width: '60px',
            height: '1px',
            background: 'var(--gold)',
            margin: '0 auto',
          }} />
        </div>

        {/* FAQ Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {faqs.map((faq) => (
            <div
              key={faq.id}
              style={{
                border: '1px solid rgba(201,168,76,0.12)',
                background: openId === faq.id ? 'rgba(201,168,76,0.04)' : 'transparent',
                transition: 'background 0.3s ease',
              }}
            >
              {/* Question */}
              <button
                onClick={() => toggle(faq.id)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '22px 28px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  gap: '16px',
                }}
              >
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.88rem',
                  fontWeight: '500',
                  color: openId === faq.id ? 'var(--gold)' : 'var(--white)',
                  lineHeight: '1.5',
                  transition: 'color 0.3s ease',
                }}>
                  {faq.question}
                </p>

                {/* Plus / Minus icon */}
                <div style={{
                  width: '28px',
                  height: '28px',
                  border: '1px solid rgba(201,168,76,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'all 0.3s ease',
                  background: openId === faq.id ? 'var(--gold)' : 'transparent',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    color: openId === faq.id ? 'var(--black)' : 'var(--gold)',
                    lineHeight: '1',
                    transition: 'color 0.3s ease',
                  }}>
                    {openId === faq.id ? '−' : '+'}
                  </span>
                </div>
              </button>

              {/* Answer */}
              {openId === faq.id && (
                <div style={{
                  padding: '0 28px 24px',
                }}>
                  <div style={{
                    width: '30px',
                    height: '1px',
                    background: 'var(--gold)',
                    marginBottom: '16px',
                    opacity: 0.5,
                  }} />
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.84rem',
                    fontWeight: '300',
                    color: 'var(--gray-light)',
                    lineHeight: '1.9',
                  }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div style={{
          textAlign: 'center',
          marginTop: '60px',
        }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.82rem',
            color: 'var(--gray)',
            marginBottom: '20px',
          }}>
            Still have questions? We are happy to help.
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
              border: '1px solid rgba(201,168,76,0.4)',
              padding: '12px 32px',
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
            Contact Us
          </a>
        </div>

      </div>
    </section>
  )
}
