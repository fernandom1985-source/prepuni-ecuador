const redes = [
  {
    nombre: 'Instagram',
    usuario: '@prepuni.ec',
    icon: '📸',
    color: '#E1306C',
    bg: 'linear-gradient(135deg, #833AB4, #FD1D1D, #F77737)',
    descripcion: 'Tips diarios, resultados de estudiantes y contenido motivacional',
    seguidores: '2.4K',
    status: 'próximamente'
  },
  {
    nombre: 'TikTok',
    usuario: '@prepuni.ec',
    icon: '🎵',
    color: '#00F2EA',
    bg: 'linear-gradient(135deg, #010101, #69C9D0)',
    descripcion: 'Videos cortos con fórmulas, mnemotécnicas y ejercicios rápidos',
    seguidores: '1.8K',
    status: 'próximamente'
  },
  {
    nombre: 'YouTube',
    usuario: 'PrepUni Ecuador',
    icon: '▶️',
    color: '#FF0000',
    bg: 'linear-gradient(135deg, #CC0000, #FF4444)',
    descripcion: 'Clases completas, resolución de exámenes anteriores y masterclasses',
    seguidores: '980',
    status: 'próximamente'
  },
  {
    nombre: 'WhatsApp',
    usuario: 'Grupo PrepUni',
    icon: '💬',
    color: '#25D366',
    bg: 'linear-gradient(135deg, #075E54, #25D366)',
    descripcion: 'Comunidad de estudiantes, dudas en tiempo real y material compartido',
    seguidores: '420',
    status: 'próximamente'
  },
  {
    nombre: 'Facebook',
    usuario: 'PrepUni Ecuador',
    icon: '📘',
    color: '#1877F2',
    bg: 'linear-gradient(135deg, #0C55B8, #1877F2)',
    descripcion: 'Noticias de universidades, convocatorias y eventos académicos',
    seguidores: '3.1K',
    status: 'próximamente'
  },
  {
    nombre: 'Telegram',
    usuario: '@prepuniec',
    icon: '✈️',
    color: '#0088CC',
    bg: 'linear-gradient(135deg, #0055A5, #0088CC)',
    descripcion: 'Notificaciones de simulacros, resultados y material descargable',
    seguidores: '650',
    status: 'próximamente'
  },
]

export default function Visitanos() {
  return (
    <section id="visitanos" className="section" style={{ background:'rgba(7,11,22,0.5)' }}>
      <div className="container">
        <div style={{ textAlign:'center', marginBottom:64 }}>
          <div className="section-tag">🌐 Síguenos</div>
          <h2 className="section-title">
            Únete a nuestra <span className="gradient-text">comunidad</span>
          </h2>
          <p className="section-subtitle" style={{ margin:'0 auto' }}>
            Pronto estaremos en todas las plataformas con contenido educativo diario. ¡Sé de los primeros en seguirnos!
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(320px,1fr))', gap:20 }}>
          {redes.map((r, i) => (
            <div key={i} className="card" style={{ position:'relative', overflow:'hidden' }}>
              {/* Glow top */}
              <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background:r.bg }}/>

              <div style={{ display:'flex', alignItems:'center', gap:16, marginBottom:16 }}>
                <div style={{
                  width:52, height:52, borderRadius:16, background:r.bg,
                  display:'flex', alignItems:'center', justifyContent:'center', fontSize:24,
                  flexShrink:0
                }}>{r.icon}</div>
                <div>
                  <h3 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:18 }}>{r.nombre}</h3>
                  <span style={{ fontSize:13, color:r.color }}>{r.usuario}</span>
                </div>
                <div style={{ marginLeft:'auto' }}>
                  <span style={{
                    background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)',
                    borderRadius:100, padding:'4px 12px', fontSize:11, color:'var(--text-muted)',
                    fontWeight:600
                  }}>
                    {r.seguidores} seguidores
                  </span>
                </div>
              </div>

              <p style={{ fontSize:14, color:'var(--text-secondary)', marginBottom:20, lineHeight:1.6 }}>
                {r.descripcion}
              </p>

              <button style={{
                width:'100%', padding:'12px', borderRadius:12,
                background:`${r.color}15`, border:`1px solid ${r.color}33`,
                color:r.color, fontFamily:'var(--font-body)', fontWeight:700, fontSize:13,
                cursor:'default', display:'flex', alignItems:'center', justifyContent:'center', gap:8
              }}>
                <span style={{
                  background:r.bg, color:'white', borderRadius:100,
                  padding:'2px 10px', fontSize:10, fontWeight:800, letterSpacing:'0.1em'
                }}>PRÓXIMAMENTE</span>
                Notifícame cuando esté disponible
              </button>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div style={{
          marginTop:60, padding:'48px', borderRadius:28, textAlign:'center',
          background:'linear-gradient(135deg, rgba(123,92,250,0.1), rgba(0,212,255,0.08))',
          border:'1px solid rgba(123,92,250,0.2)'
        }}>
          <div style={{ fontSize:48, marginBottom:16 }}>📬</div>
          <h3 style={{ fontFamily:'var(--font-display)', fontSize:28, fontWeight:800, marginBottom:12 }}>
            Sé el primero en enterarse
          </h3>
          <p style={{ color:'var(--text-secondary)', marginBottom:32, fontSize:16 }}>
            Déjanos tu correo y te avisamos cuando lancemos en todas las plataformas + 7 días de acceso premium gratis.
          </p>
          <div style={{ display:'flex', gap:12, maxWidth:480, margin:'0 auto', flexWrap:'wrap' }}>
            <input type="email" placeholder="tu@email.com" style={{
              flex:1, padding:'14px 20px', borderRadius:100,
              background:'rgba(255,255,255,0.06)', border:'1px solid var(--glass-border)',
              color:'var(--text-primary)', fontSize:15, fontFamily:'var(--font-body)', outline:'none',
              minWidth:200
            }}
            onFocus={e => e.target.style.borderColor='var(--accent-1)'}
            onBlur={e => e.target.style.borderColor='var(--glass-border)'}
            />
            <button className="btn-primary">
              🔔 Notifícame
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
