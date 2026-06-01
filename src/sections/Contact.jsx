import { useState } from "react";

const contacts = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 13a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.1-1.1a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    label: "Phone",
    value: "0751 40000 20",
    href: "tel:075140000020",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: "Address",
    value: "59 Victoria Rd, Ruislip, HA4 9BH",
    href: "https://maps.google.com/?q=59+Victoria+Rd+Ruislip+HA4+9BH",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: "Email",
    value: "office@expressstone.co.uk",
    href: "mailto:office@expressstone.co.uk",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
    label: "Website",
    value: "expressstone.co.uk",
    href: "https://expressstone.co.uk",
  },
];

export default function Contact() {
  const [hovered, setHovered] = useState(null);

  return (
    <div id="contact" style={s.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Montserrat:wght@300;400;500;600&display=swap');
        a { text-decoration: none; color: inherit; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Mobile overrides ── */
        @media (max-width: 768px) {
          #contact-hero {
            padding: 60px 24px 44px !important;
          }
          #contact-title {
            font-size: 48px !important;
          }
          #contact-grid {
            grid-template-columns: 1fr 1fr !important;
            padding: 0 16px 60px !important;
            gap: 12px !important;
          }
          .contact-card {
            padding: 28px 16px !important;
            margin: 0 !important;
          }
          .contact-card-value {
            font-size: 11px !important;
            word-break: break-word !important;
          }
        }

        @media (max-width: 420px) {
          #contact-grid {
            grid-template-columns: 1fr !important;
            padding: 0 20px 60px !important;
          }
          .contact-card {
            flex-direction: row !important;
            text-align: left !important;
            align-items: center !important;
            gap: 20px !important;
            padding: 22px 20px !important;
          }
          .contact-card-text {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }
        }
      `}</style>

      <div style={s.bgGlow} />

      <div id="contact-hero" style={s.hero}>
        <p style={s.eyebrow}>GET IN TOUCH</p>
        <h1 id="contact-title" style={s.title}>
          Contact <em style={s.italic}>Us</em>
        </h1>
        <div style={s.divider} />
        <p style={s.subtitle}>
          We'd love to hear from you. Reach out through any of the channels below.
        </p>
      </div>

      <div id="contact-grid" style={s.grid}>
        {contacts.map((c, i) => (
          <a
            key={c.label}
            href={c.href}
            target={c.label === "Address" || c.label === "Website" ? "_blank" : undefined}
            rel="noreferrer"
            className="contact-card"
            style={{
              ...s.card,
              animationDelay: `${i * 0.1}s`,
              background: hovered === i ? "rgba(201,168,76,0.07)" : "rgba(255,255,255,0.025)",
              borderColor: hovered === i ? "rgba(201,168,76,0.7)" : "rgba(201,168,76,0.2)",
              transform: hovered === i ? "translateY(-4px)" : "translateY(0)",
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div style={{
              ...s.iconWrap,
              background: hovered === i ? "rgba(201,168,76,0.2)" : "rgba(201,168,76,0.08)",
              color: "#C9A84C",
              flexShrink: 0,
            }}>
              {c.icon}
            </div>
            <div className="contact-card-text">
              <p style={s.cardLabel}>{c.label}</p>
              <p className="contact-card-value" style={s.cardValue}>{c.value}</p>
            </div>
          </a>
        ))}
      </div>

      <div style={s.tagline}>
        <span style={s.tagDot}>✦</span>
        <span style={s.tagText}>MARBLE</span>
        <span style={s.tagLine} />
        <span style={s.tagText}>SUPPLY</span>
        <span style={s.tagLine} />
        <span style={s.tagText}>FIT</span>
        <span style={s.tagDot}>✦</span>
      </div>
    </div>
  );
}

const s = {
  page: {
    minHeight: "60vh",
    background: "#0c0c0c",
    fontFamily: "'Montserrat', sans-serif",
    color: "#e8d5a3",
    position: "relative",
    overflow: "hidden",
    padding: "0 0 40px",
  },
  bgGlow: {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "700px",
    height: "400px",
    background: "radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 70%)",
    pointerEvents: "none",
    zIndex: 0,
  },
  hero: {
    position: "relative",
    zIndex: 5,
    textAlign: "center",
    padding: "80px 48px 60px",
  },
  eyebrow: {
    fontSize: "10px",
    letterSpacing: "0.35em",
    color: "#C9A84C",
    marginBottom: "18px",
    fontWeight: "600",
  },
  title: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "clamp(40px, 7vw, 88px)",
    fontWeight: "300",
    color: "#fff",
    lineHeight: 1.05,
    marginBottom: "24px",
  },
  italic: { color: "#C9A84C", fontStyle: "italic" },
  divider: {
    width: "50px",
    height: "1px",
    background: "linear-gradient(90deg, transparent, #C9A84C, transparent)",
    margin: "0 auto 24px",
  },
  subtitle: {
    fontSize: "13px",
    color: "rgba(232,213,163,0.45)",
    fontWeight: "300",
    letterSpacing: "0.05em",
    maxWidth: "420px",
    margin: "0 auto",
    lineHeight: 1.8,
  },
  grid: {
    position: "relative",
    zIndex: 5,
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "1px",
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 48px 80px",
  },
  card: {
    padding: "44px 32px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: "16px",
    border: "1px solid rgba(201,168,76,0.2)",
    transition: "all 0.3s ease",
    animation: "fadeUp 0.6s ease both",
    cursor: "pointer",
    background: "rgba(255,255,255,0.025)",
    margin: "1px",
  },
  iconWrap: {
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background 0.3s",
    marginBottom: "4px",
  },
  cardLabel: {
    fontSize: "9px",
    letterSpacing: "0.25em",
    color: "#C9A84C",
    fontWeight: "600",
    textTransform: "uppercase",
  },
  cardValue: {
    fontSize: "13px",
    color: "rgba(232,213,163,0.85)",
    fontWeight: "300",
    lineHeight: 1.6,
  },
  tagline: {
    position: "relative",
    zIndex: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    padding: "8px 0 24px",
    flexWrap: "wrap",
  },
  tagDot: { color: "#C9A84C", fontSize: "12px" },
  tagText: {
    fontSize: "10px",
    letterSpacing: "0.35em",
    color: "rgba(201,168,76,0.5)",
    fontWeight: "500",
  },
  tagLine: {
    width: "40px",
    height: "1px",
    background: "rgba(201,168,76,0.25)",
  },
};
