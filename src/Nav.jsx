import { useState, useEffect } from 'react'

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#simuladores', label: 'Simuladores' },
  { href: '#repasos', label: 'Repasos' },
  { href: '#acceso', label: 'Acceso' },
  { href: '#visitanos', label: 'Visítanos' },
  { href: '#pagos', label: 'Pagos' },
]

export default function Nav({ user, setUser }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999,
    transition: 'all 0.4s ease',
    padding: scrolled ? '12px 0' : '20px 0',
    background: scrolled ? 'rgba(10,15,30,0.95)' : 'transparent',
    backdropFilter: scrolled ? 'blur(20px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
  }

  return (
    <nav style={navStyle}>
      <div className="container" style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        {/* Logo */}
        <a href="#inicio" style={{ textDecoration:'none', display:'flex', alignItems:'center', gap:'10px' }}>
          <div style={{
            width:38, height:38, borderRadius:10,
            background:'linear-gradient(135deg,#00D4FF,#7B5CFA)',
            display:'flex', alignItems:'center', justifyContent:'center',
            fontFamily:'var(--font-display)', fontWeight:800, fontSize:16, color:'#0A0F1E'
          }}>P</div>
          <span style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:20 }}>
            Prep<span style={{ color:'var(--accent-1)' }}>Uni</span>
          </span>
        </a>

        {/* Desktop links */}
        <div style={{ display:'flex', gap:'8px', alignItems:'center' }} className="desktop-nav">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              color:'var(--text-secondary)', textDecoration:'none',
              padding:'8px 14px', borderRadius:100, fontSize:14, fontWeight:500,
              transition:'all 0.2s'
            }}
            onMouseEnter={e => { e.target.style.color='white'; e.target.style.background='rgba(255,255,255,0.06)' }}
            onMouseLeave={e => { e.target.style.color='var(--text-secondary)'; e.target.style.background='transparent' }}
            >{l.label}</a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display:'flex', alignItems:'center', gap:12 }}>
          {user ? (
            <div style={{ display:'flex', alignItems:'center', gap:10 }}>
              <span style={{ fontSize:14, color:'var(--accent-1)' }}>👋 {user}</span>
              <button className="btn-secondary" style={{ padding:'8px 18px', fontSize:13 }}
                onClick={() => setUser(null)}>Salir</button>
            </div>
          ) : (
            <a href="#acceso" className="btn-primary" style={{ padding:'10px 24px', fontSize:14 }}>
              Ingresar →
            </a>
          )}
          {/* Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} style={{
            display:'none', background:'none', border:'none', color:'white',
            fontSize:24, cursor:'pointer'
          }} className="hamburger">☰</button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background:'rgba(10,15,30,0.98)', padding:'20px 24px',
          borderTop:'1px solid rgba(255,255,255,0.06)'
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ display:'block', color:'var(--text-primary)', textDecoration:'none',
                padding:'12px 0', fontSize:16, fontWeight:500,
                borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
