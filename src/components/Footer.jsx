const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScroll = (id) => {
    if (id === '#') return;
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const links = {
    Company: [
      { label: "About Us",      href: "#about"        },
      { label: "Our Process",   href: "#process"      },
      { label: "Gallery",       href: "#gallery"      },
      { label: "Testimonials",  href: "#testimonials" },
    ],
    Services: [
      { label: "Marble Supply",        href: "#services" },
      { label: "Stone Fitting",        href: "#services" },
      { label: "Kitchen Worktops",     href: "#products" },
      { label: "Bathroom Surfaces",    href: "#products" },
      { label: "Commercial Projects",  href: "#services" },
    ],
    Support: [
      { label: "FAQ",          href: "#faq"     },
      { label: "Get a Quote",  href: "#contact" },
      { label: "Contact Us",   href: "#contact" },
    ],
  };

  return (
    <footer style={s.footer}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,400&family=Montserrat:wght@300;400;500;600&display=swap');
        .footer-link:hover { color: #C9A84C !important; }
        .footer-social:hover { border-color: #C9A84C !important; color: #C9A84C !important; }
      `}</style>

      <div style={s.topLine} />

      <div style={s.inner}>
        {/* Brand col */}
        <div style={s.brandCol}>
          <img src="/src/assets/ES logo.png" alt="Express Stone" style={s.logo} />
          <p style={s.tagline}>MARBLE · SUPPLY · FIT</p>
          <p style={s.desc}>
            Premium natural stone solutions for residential and commercial spaces across the UK.
          </p>
          <div style={s.socials}>
            {[
              { label: "FB", href: "#" },
              { label: "IG", href: "#" },
              { label: "LI", href: "#" },
            ].map((s_) => (
              <a key={s_.label} href={s_.href} className="footer-social" style={s.social}>
                {s_.label}
              </a>
            ))}
          </div>
        </div>

        {/* Nav cols */}
        {Object.entries(links).map(([heading, items]) => (
          <div key={heading} style={s.linkCol}>
            <p style={s.colHeading}>{heading}</p>
            <div style={s.colLine} />
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="footer-link"
                style={s.link}
                onClick={(e) => { e.preventDefault(); handleScroll(item.href); }}
              >
                {item.label}
              </a>
            ))}
          </div>
        ))}

        {/* Contact col */}
        <div style={s.linkCol}>
          <p style={s.colHeading}>Contact</p>
          <div style={s.colLine} />
          {[
            { icon: "📞", text: "0751 40000 20",            href: "tel:075140000020" },
            { icon: "📍", text: "59 Victoria Rd, Ruislip, HA4 9BH", href: "https://maps.google.com/?q=59+Victoria+Rd+Ruislip+HA4+9BH" },
            { icon: "✉️", text: "office@expressstone.co.uk", href: "mailto:office@expressstone.co.uk" },
            { icon: "🌐", text: "expressstone.co.uk",        href: "https://expressstone.co.uk" },
          ].map((c) => (
            <a key={c.text} href={c.href} style={{ ...s.contactItem, textDecoration: 'none' }}
              target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              <span style={s.contactIcon}>{c.icon}</span>
              <span style={{ ...s.contactText, transition: 'color 0.2s' }} className="footer-link">{c.text}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={s.bottomBar}>
        <div style={s.bottomLine} />
        <div style={s.bottomInner}>
          <p style={s.copyright}>© {currentYear} Express Stone Ltd · All Rights Reserved</p>
          <div style={s.bottomLinks}>
            {["Privacy Policy", "Terms of Service"].map((l) => (
              <a key={l} href="#" className="footer-link" style={s.bottomLink}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

const s = {
  footer: { background: "#080808", fontFamily: "'Montserrat', sans-serif", position: "relative" },
  topLine: { height: "1px", background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" },
  inner: {
    maxWidth: "1200px", margin: "0 auto", padding: "64px 48px 48px",
    display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr 1.4fr", gap: "48px",
  },
  brandCol: { display: "flex", flexDirection: "column", gap: "0" },
  logo: { height: "44px", objectFit: "contain", objectPosition: "left", marginBottom: "12px" },
  tagline: { fontSize: "8.5px", letterSpacing: "0.3em", color: "#C9A84C", fontWeight: "600", marginBottom: "16px" },
  desc: { fontSize: "12px", color: "rgba(232,213,163,0.45)", lineHeight: "1.8", fontWeight: "300", marginBottom: "24px", maxWidth: "240px" },
  socials: { display: "flex", gap: "10px" },
  social: {
    width: "34px", height: "34px", border: "1px solid rgba(201,168,76,0.3)",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: "9px", fontWeight: "700", letterSpacing: "0.05em",
    color: "rgba(232,213,163,0.5)", transition: "all 0.25s", textDecoration: "none",
  },
  linkCol: { display: "flex", flexDirection: "column", gap: "0" },
  colHeading: { fontSize: "9px", letterSpacing: "0.25em", color: "#C9A84C", fontWeight: "600", marginBottom: "12px", textTransform: "uppercase" },
  colLine: { width: "28px", height: "1px", background: "rgba(201,168,76,0.35)", marginBottom: "16px" },
  link: { fontSize: "12px", color: "rgba(232,213,163,0.5)", fontWeight: "300", textDecoration: "none", marginBottom: "10px", transition: "color 0.2s", display: "block" },
  contactItem: { display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "12px" },
  contactIcon: { fontSize: "12px", marginTop: "1px", flexShrink: 0 },
  contactText: { fontSize: "11.5px", color: "rgba(232,213,163,0.5)", fontWeight: "300", lineHeight: "1.5" },
  bottomBar: { maxWidth: "1200px", margin: "0 auto", padding: "0 48px 32px" },
  bottomLine: { height: "1px", background: "rgba(201,168,76,0.12)", marginBottom: "20px" },
  bottomInner: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  copyright: { fontSize: "10px", letterSpacing: "0.08em", color: "rgba(232,213,163,0.25)" },
  bottomLinks: { display: "flex", gap: "24px" },
  bottomLink: { fontSize: "10px", color: "rgba(232,213,163,0.25)", textDecoration: "none", letterSpacing: "0.05em", transition: "color 0.2s" },
};

export default Footer;
