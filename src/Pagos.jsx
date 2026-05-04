import { useState } from 'react'

const planes = [
  {
    nombre: 'Explorador',
    precio: 0,
    moneda: '$',
    periodo: 'Siempre gratis',
    color: '#06D6A0',
    icon: '🌱',
    descripcion: 'Perfecta para comenzar tu preparación',
    badge: null,
    caracteristicas: [
      { ok:true, texto:'Acceso a 3 simuladores básicos' },
      { ok:true, texto:'Material de repaso Nivel Básico' },
      { ok:true, texto:'5 preguntas diarias de práctica' },
      { ok:true, texto:'Registro de progreso básico' },
      { ok:false, texto:'Simulacros completos por universidad' },
      { ok:false, texto:'Ranking nacional' },
      { ok:false, texto:'Material Intermedio y Avanzado' },
      { ok:false, texto:'Soporte personalizado' },
    ],
    cta: 'Comenzar gratis',
    ctaStyle: 'secondary'
  },
  {
    nombre: 'Universitario',
    precio: 12.99,
    moneda: '$',
    periodo: 'mes',
    color: '#00D4FF',
    icon: '🚀',
    descripcion: 'El plan más popular entre estudiantes',
    badge: '⭐ MÁS POPULAR',
    badgeColor: '#00D4FF',
    caracteristicas: [
      { ok:true, texto:'Todos los simuladores desbloqueados' },
      { ok:true, texto:'Material Básico + Intermedio' },
      { ok:true, texto:'Simulacros ilimitados' },
      { ok:true, texto:'Estadísticas avanzadas' },
      { ok:true, texto:'Ranking entre tus compañeros' },
      { ok:true, texto:'Modo examen con tiempo real' },
      { ok:false, texto:'Sesiones en vivo con tutores' },
      { ok:false, texto:'Plan de estudio personalizado IA' },
    ],
    cta: 'Empezar ahora',
    ctaStyle: 'primary'
  },
  {
    nombre: 'Elite',
    precio: 24.99,
    moneda: '$',
    periodo: 'mes',
    color: '#7B5CFA',
    icon: '🏆',
    descripcion: 'Máximo rendimiento garantizado',
    badge: '👑 MEJOR RESULTADO',
    badgeColor: '#FFD166',
    caracteristicas: [
      { ok:true, texto:'Todo lo del plan Universitario' },
      { ok:true, texto:'Material Avanzado exclusivo' },
      { ok:true, texto:'2 sesiones en vivo/mes con tutores' },
      { ok:true, texto:'Plan de estudio personalizado con IA' },
      { ok:true, texto:'Acceso a exámenes anteriores reales' },
      { ok:true, texto:'Soporte prioritario 24/7' },
      { ok:true, texto:'Garantía: si no ingresas, te devolvemos' },
      { ok:true, texto:'Certificado de preparación' },
    ],
    cta: 'Quiero el Elite',
    ctaStyle: 'purple'
  }
]

const metodos = [
  { nombre:'Tarjeta de crédito/débito', icon:'💳', desc:'Visa, Mastercard, American Express' },
  { nombre:'Transferencia bancaria', icon:'🏦', desc:'Banco Pichincha, Guayaquil, Pacífico' },
  { nombre:'PayPhone', icon:'📱', desc:'Billetera virtual ecuatoriana' },
  { nombre:'Western Union / Remesa', icon:'💰', desc:'Para estudiantes en el exterior' },
]

export default function Pagos() {
  const [billing, setBilling] = useState('mensual')
  const [selected, setSelected] = useState(null)

  return (
    <section id="pagos" className="section">
      <div className="container">
        <div style={{ textAlign:'center', marginBottom:64 }}>
          <div className="section-tag">💳 Planes y precios</div>
          <h2 className="section-title">
            Invierte en tu <span className="gradient-text">futuro universitario</span>
          </h2>
          <p className="section-subtitle" style={{ margin:'0 auto 32px' }}>
            Sin contratos. Cancela cuando quieras. Precios en dólares, sin sorpresas.
          </p>

          {/* Billing toggle */}
          <div style={{
            display:'inline-flex', background:'rgba(255,255,255,0.04)',
            borderRadius:100, padding:4, gap:4
          }}>
            {['mensual','anual'].map(b => (
              <button key={b} onClick={() => setBilling(b)} style={{
                padding:'10px 24px', borderRadius:100,
                background: billing===b ? 'linear-gradient(135deg,var(--accent-1),var(--accent-2))' : 'transparent',
                border:'none', color: billing===b ? 'var(--brand-1)' : 'var(--text-secondary)',
                fontFamily:'var(--font-body)', fontWeight:700, fontSize:14, cursor:'pointer',
                transition:'all 0.2s'
              }}>
                {b === 'mensual' ? 'Mensual' : 'Anual (ahorra 30%)'}
              </button>
            ))}
          </div>
        </div>

        {/* Plan cards */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24, marginBottom:80 }}>
          {planes.map((plan, i) => {
            const precio = billing === 'anual' && plan.precio > 0
              ? (plan.precio * 0.7).toFixed(2) : plan.precio
            const isPopular = plan.badge?.includes('POPULAR')

            return (
              <div key={i} onClick={() => setSelected(i)} style={{
                position:'relative', borderRadius:24, overflow:'hidden', cursor:'pointer',
                transition:'all 0.3s',
                transform: isPopular ? 'scale(1.04)' : 'scale(1)',
                background: isPopular
                  ? `linear-gradient(180deg, ${plan.color}18 0%, var(--card-bg) 40%)`
                  : 'var(--card-bg)',
                border: selected===i ? `2px solid ${plan.color}` : isPopular
                  ? `2px solid ${plan.color}44`
                  : '1px solid var(--glass-border)',
                backdropFilter:'blur(20px)',
                boxShadow: isPopular ? `0 20px 60px ${plan.color}20` : 'none'
              }}>
                {/* Top bar */}
                <div style={{ height:3, background:`linear-gradient(90deg, ${plan.color}, transparent)` }}/>

                {plan.badge && (
                  <div style={{
                    position:'absolute', top:20, right:20,
                    background:`${plan.badgeColor}20`, border:`1px solid ${plan.badgeColor}50`,
                    borderRadius:100, padding:'4px 12px', fontSize:10,
                    color:plan.badgeColor, fontWeight:800, letterSpacing:'0.08em'
                  }}>{plan.badge}</div>
                )}

                <div style={{ padding:32 }}>
                  <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:20 }}>
                    <span style={{
                      width:44, height:44, borderRadius:12,
                      background:`${plan.color}18`, display:'flex', alignItems:'center',
                      justifyContent:'center', fontSize:22, border:`1px solid ${plan.color}33`
                    }}>{plan.icon}</span>
                    <div>
                      <h3 style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:18 }}>{plan.nombre}</h3>
                      <p style={{ fontSize:12, color:'var(--text-muted)' }}>{plan.descripcion}</p>
                    </div>
                  </div>

                  <div style={{ marginBottom:28 }}>
                    <div style={{ display:'flex', alignItems:'baseline', gap:4 }}>
                      <span style={{ fontFamily:'var(--font-display)', fontSize:44, fontWeight:800, color:plan.color }}>
                        {plan.precio === 0 ? 'Gratis' : `$${precio}`}
                      </span>
                      {plan.precio > 0 && (
                        <span style={{ color:'var(--text-muted)', fontSize:14 }}>/{billing === 'mensual' ? 'mes' : 'mes (anual)'}</span>
                      )}
                    </div>
                    {billing === 'anual' && plan.precio > 0 && (
                      <p style={{ fontSize:12, color:'var(--success)', marginTop:4 }}>
                        Ahorras ${(plan.precio * 0.3 * 12).toFixed(2)} al año
                      </p>
                    )}
                  </div>

                  <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:28 }}>
                    {plan.caracteristicas.map((c, j) => (
                      <div key={j} style={{ display:'flex', alignItems:'center', gap:10 }}>
                        <span style={{
                          width:18, height:18, borderRadius:'50%', flexShrink:0,
                          background: c.ok ? `${plan.color}20` : 'rgba(255,255,255,0.04)',
                          display:'flex', alignItems:'center', justifyContent:'center',
                          fontSize:10, color: c.ok ? plan.color : 'var(--text-muted)'
                        }}>
                          {c.ok ? '✓' : '✕'}
                        </span>
                        <span style={{ fontSize:13, color: c.ok ? 'var(--text-primary)' : 'var(--text-muted)' }}>
                          {c.texto}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button style={{
                    width:'100%', padding:'14px', borderRadius:14,
                    background: plan.ctaStyle === 'primary'
                      ? `linear-gradient(135deg, var(--accent-1), var(--accent-2))`
                      : plan.ctaStyle === 'purple'
                      ? `linear-gradient(135deg, var(--accent-2), #9D4EDD)`
                      : 'var(--glass)',
                    border: plan.ctaStyle === 'secondary' ? '1px solid var(--glass-border)' : 'none',
                    color: plan.ctaStyle === 'secondary' ? 'var(--text-primary)' : 'white',
                    fontFamily:'var(--font-body)', fontWeight:700, fontSize:15, cursor:'pointer',
                    transition:'all 0.2s'
                  }}
                  onMouseEnter={e => { e.target.style.opacity='0.9'; e.target.style.transform='translateY(-1px)' }}
                  onMouseLeave={e => { e.target.style.opacity='1'; e.target.style.transform='translateY(0)' }}>
                    {plan.cta} {plan.precio > 0 && '→'}
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Payment methods */}
        <div>
          <h3 style={{ fontFamily:'var(--font-display)', fontSize:22, fontWeight:800, textAlign:'center', marginBottom:32 }}>
            Métodos de pago disponibles
          </h3>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:16, marginBottom:40 }}>
            {metodos.map((m, i) => (
              <div key={i} className="card" style={{ padding:20, display:'flex', alignItems:'center', gap:16 }}>
                <span style={{
                  width:44, height:44, borderRadius:12, background:'var(--glass)',
                  display:'flex', alignItems:'center', justifyContent:'center', fontSize:22, flexShrink:0
                }}>{m.icon}</span>
                <div>
                  <p style={{ fontWeight:700, fontSize:14, marginBottom:2 }}>{m.nombre}</p>
                  <p style={{ fontSize:12, color:'var(--text-muted)' }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Guarantee */}
          <div style={{
            padding:'32px 40px', borderRadius:20,
            background:'rgba(6,214,160,0.05)', border:'1px solid rgba(6,214,160,0.2)',
            display:'flex', alignItems:'center', gap:24, flexWrap:'wrap'
          }}>
            <span style={{ fontSize:48 }}>🛡️</span>
            <div>
              <h4 style={{ fontFamily:'var(--font-display)', fontSize:20, fontWeight:800, marginBottom:6 }}>
                Garantía de satisfacción 30 días
              </h4>
              <p style={{ color:'var(--text-secondary)', fontSize:15 }}>
                Si en los primeros 30 días no estás satisfecho, te devolvemos el 100% de tu dinero. Sin preguntas.
              </p>
            </div>
            <div style={{ marginLeft:'auto' }}>
              <a href="#acceso" className="btn-primary">Empezar ahora</a>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          #pagos .container > div:nth-child(3) { grid-template-columns: 1fr !important; }
          #pagos .container > div:nth-child(3) > div { transform: scale(1) !important; }
        }
      `}</style>
    </section>
  )
}
