export default function Footer() {
  return (
    <footer style={{
      borderTop:'1px solid var(--glass-border)',
      padding:'60px 0 40px',
      background:'rgba(7,11,22,0.8)'
    }}>
      <div className="container">
        <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', gap:48, marginBottom:48 }}>
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:16 }}>
              <div style={{
                width:38, height:38, borderRadius:10,
                background:'linear-gradient(135deg,#00D4FF,#7B5CFA)',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontFamily:'var(--font-display)', fontWeight:800, fontSize:16, color:'#0A0F1E'
              }}>P</div>
              <span style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:20 }}>
                Prep<span style={{ color:'var(--accent-1)' }}>Uni</span>
              </span>
            </div>
            <p style={{ fontSize:14, color:'var(--text-muted)', lineHeight:1.8, maxWidth:280 }}>
              La plataforma de preparación universitaria más completa del Ecuador. Miles de estudiantes ya ingresaron a su universidad ideal.
            </p>
            <p style={{ fontSize:12, color:'var(--text-muted)', marginTop:16 }}>
              📍 Quito, Ecuador
            </p>
          </div>

          {[
            { titulo:'Plataforma', links:['Simuladores','Repasos','Planes','Acceso'] },
            { titulo:'Universidades', links:['ESPOL','UCE','PUCE','EPN','ESPE','UTPL'] },
            { titulo:'Soporte', links:['Centro de ayuda','Términos de uso','Privacidad','Contacto'] },
          ].map((col, i) => (
            <div key={i}>
              <h4 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:14, marginBottom:20, color:'var(--text-primary)', textTransform:'uppercase', letterSpacing:'0.08em' }}>
                {col.titulo}
              </h4>
              <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
                {col.links.map(l => (
                  <a key={l} href="#" style={{
                    fontSize:14, color:'var(--text-muted)', textDecoration:'none',
                    transition:'color 0.2s'
                  }}
                  onMouseEnter={e => e.target.style.color='var(--accent-1)'}
                  onMouseLeave={e => e.target.style.color='var(--text-muted)'}
                  >{l}</a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          borderTop:'1px solid var(--glass-border)', paddingTop:24,
          display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:12
        }}>
          <p style={{ fontSize:13, color:'var(--text-muted)' }}>
            © 2025 PrepUni Ecuador. Todos los derechos reservados.
          </p>
          <p style={{ fontSize:13, color:'var(--text-muted)' }}>
            Hecho con ❤️ para los estudiantes ecuatorianos
          </p>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          footer .container > div:first-child { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  )
}
