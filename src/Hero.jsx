import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 4800, suffix: '+', label: 'Estudiantes preparados' },
  { value: 94, suffix: '%', label: 'Tasa de aprobación' },
  { value: 15, suffix: '+', label: 'Universidades cubiertas' },
  { value: 3, suffix: 'x', label: 'Más probabilidad de ingreso' },
]

function Counter({ end, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 2000
        const steps = 60
        const increment = end / steps
        let current = 0
        const timer = setInterval(() => {
          current += increment
          if (current >= end) { setCount(end); clearInterval(timer) }
          else setCount(Math.floor(current))
        }, duration / steps)
      }
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

const universities = ['ESPOL', 'UCE', 'PUCE', 'UG', 'UTPL', 'ESPE', 'UTA', 'UDLA', 'UTC', 'USFQ']

export default function Hero() {
  return (
    <section id="inicio" style={{ position:'relative', minHeight:'100vh', display:'flex', alignItems:'center', overflow:'hidden', paddingTop:100 }}>
      {/* Background orbs */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none' }}>
        <div style={{
          position:'absolute', top:'-10%', right:'-5%',
          width:600, height:600, borderRadius:'50%',
          background:'radial-gradient(circle, rgba(123,92,250,0.15) 0%, transparent 70%)',
          animation:'orb-pulse 6s ease-in-out infinite'
        }}/>
        <div style={{
          position:'absolute', bottom:'-10%', left:'-10%',
          width:500, height:500, borderRadius:'50%',
          background:'radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)',
          animation:'orb-pulse 8s ease-in-out infinite 2s'
        }}/>
        {/* Grid lines */}
        <div style={{
          position:'absolute', inset:0,
          backgroundImage:'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize:'80px 80px'
        }}/>
      </div>

      <div className="container" style={{ position:'relative', zIndex:1, width:'100%' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center' }}>
          {/* Left */}
          <div style={{ animation:'fadeInUp 0.8s ease forwards' }}>
            <div className="section-tag">🎓 Plataforma #1 en Ecuador</div>
            <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(40px,5.5vw,68px)', fontWeight:800, lineHeight:1.05, marginBottom:24 }}>
              Tu camino a la{' '}
              <span className="gradient-text">universidad</span>{' '}
              comienza aquí
            </h1>
            <p style={{ fontSize:18, color:'var(--text-secondary)', marginBottom:40, lineHeight:1.8, maxWidth:500 }}>
              Simuladores oficiales, repasos inteligentes y acompañamiento personalizado para que ingreses a la universidad de tus sueños en Ecuador.
            </p>
            <div style={{ display:'flex', gap:16, flexWrap:'wrap', marginBottom:60 }}>
              <a href="#simuladores" className="btn-primary">
                🚀 Empezar gratis
              </a>
              <a href="#repasos" className="btn-secondary">
                Ver repasos →
              </a>
            </div>

            {/* University ticker */}
            <div style={{ display:'flex', alignItems:'center', gap:16, flexWrap:'wrap' }}>
              <span style={{ fontSize:12, color:'var(--text-muted)', textTransform:'uppercase', letterSpacing:'0.1em' }}>Cubre:</span>
              <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
                {universities.slice(0,6).map(u => (
                  <span key={u} style={{
                    background:'rgba(0,212,255,0.08)', border:'1px solid rgba(0,212,255,0.2)',
                    borderRadius:6, padding:'3px 10px', fontSize:11, fontWeight:700,
                    color:'var(--accent-1)', letterSpacing:'0.05em'
                  }}>{u}</span>
                ))}
                <span style={{ fontSize:11, color:'var(--text-muted)', padding:'3px 0' }}>+{universities.length - 6} más</span>
              </div>
            </div>
          </div>

          {/* Right — floating card */}
          <div style={{ position:'relative', display:'flex', justifyContent:'center', animation:'float 6s ease-in-out infinite' }}>
            <div style={{
              background:'var(--card-bg)', border:'1px solid var(--glass-border)',
              borderRadius:28, padding:32, backdropFilter:'blur(30px)',
              width:'100%', maxWidth:420, position:'relative'
            }}>
              {/* Glow */}
              <div style={{ position:'absolute', inset:-1, borderRadius:28, background:'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(123,92,250,0.2))', zIndex:-1 }}/>

              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:28 }}>
                <span style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:16 }}>Tu progreso esta semana</span>
                <span style={{ background:'rgba(6,214,160,0.15)', color:'var(--success)', borderRadius:100, padding:'4px 12px', fontSize:12, fontWeight:700 }}>+24% ↑</span>
              </div>

              {[
                { materia:'Matemáticas', pct:72, color:'var(--accent-1)' },
                { materia:'Lenguaje', pct:58, color:'var(--accent-2)' },
                { materia:'Ciencias Nat.', pct:85, color:'var(--success)' },
                { materia:'Estudios Soc.', pct:44, color:'var(--accent-gold)' },
              ].map(({ materia, pct, color }) => (
                <div key={materia} style={{ marginBottom:20 }}>
                  <div style={{ display:'flex', justifyContent:'space-between', marginBottom:8 }}>
                    <span style={{ fontSize:13, fontWeight:600 }}>{materia}</span>
                    <span style={{ fontSize:13, color, fontWeight:700 }}>{pct}%</span>
                  </div>
                  <div style={{ height:6, background:'rgba(255,255,255,0.06)', borderRadius:100, overflow:'hidden' }}>
                    <div style={{
                      height:'100%', width:`${pct}%`, borderRadius:100,
                      background:`linear-gradient(90deg, ${color}, ${color}88)`,
                      transition:'width 1.5s ease'
                    }}/>
                  </div>
                </div>
              ))}

              <div style={{ marginTop:28, padding:16, background:'rgba(0,212,255,0.05)', borderRadius:14, border:'1px solid rgba(0,212,255,0.1)', display:'flex', alignItems:'center', gap:12 }}>
                <span style={{ fontSize:28 }}>🎯</span>
                <div>
                  <p style={{ fontWeight:700, fontSize:14 }}>Próxima meta: ESPOL 2025</p>
                  <p style={{ color:'var(--text-muted)', fontSize:12 }}>Simulacro disponible ahora</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div style={{
          display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:1,
          marginTop:80, background:'var(--glass-border)', borderRadius:20, overflow:'hidden'
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              background:'var(--card-bg)', padding:'28px 24px', textAlign:'center',
              backdropFilter:'blur(20px)'
            }}>
              <div style={{ fontFamily:'var(--font-display)', fontSize:36, fontWeight:800, marginBottom:6 }}>
                <span className="gradient-text"><Counter end={s.value} suffix={s.suffix}/></span>
              </div>
              <div style={{ fontSize:13, color:'var(--text-muted)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes orb-pulse { 0%,100%{opacity:0.3;transform:scale(1)} 50%{opacity:0.6;transform:scale(1.05)} }
        @media (max-width:768px) {
          #inicio > div > div > div:first-child ~ div { display: none; }
          #inicio > div > div { grid-template-columns: 1fr !important; gap: 40px !important; }
          #inicio > div > div:last-child { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  )
}
