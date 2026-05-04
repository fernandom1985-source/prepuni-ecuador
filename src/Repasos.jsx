import { useState } from 'react'

const niveles = [
  {
    nivel: 'Básico',
    color: '#06D6A0',
    icon: '🌱',
    descripcion: 'Fundamentos sólidos para comenzar tu preparación',
    materiales: [
      { titulo:'Álgebra desde cero', tipo:'Video', duracion:'45 min', progreso:100 },
      { titulo:'Gramática esencial', tipo:'Lectura', duracion:'30 min', progreso:80 },
      { titulo:'Historia del Ecuador', tipo:'Infografía', duracion:'20 min', progreso:60 },
      { titulo:'Biología celular básica', tipo:'Video', duracion:'35 min', progreso:40 },
    ]
  },
  {
    nivel: 'Intermedio',
    color: '#00D4FF',
    icon: '🚀',
    descripcion: 'Profundiza en los temas más evaluados en los exámenes',
    materiales: [
      { titulo:'Trigonometría aplicada', tipo:'Ejercicios', duracion:'60 min', progreso:75 },
      { titulo:'Comprensión lectora avanzada', tipo:'Práctica', duracion:'45 min', progreso:50 },
      { titulo:'Química: tabla periódica', tipo:'Flashcards', duracion:'25 min', progreso:30 },
      { titulo:'Geografía de Ecuador', tipo:'Mapa interactivo', duracion:'30 min', progreso:0 },
    ]
  },
  {
    nivel: 'Avanzado',
    color: '#7B5CFA',
    icon: '🏆',
    descripcion: 'Para estudiantes que buscan puntajes de excelencia',
    materiales: [
      { titulo:'Cálculo diferencial', tipo:'Ejercicios', duracion:'90 min', progreso:25 },
      { titulo:'Literatura latinoamericana', tipo:'Análisis', duracion:'55 min', progreso:0 },
      { titulo:'Física: cinemática', tipo:'Simulación', duracion:'70 min', progreso:0 },
      { titulo:'Razonamiento abstracto nivel 5', tipo:'Test', duracion:'40 min', progreso:0 },
    ]
  },
]

const tipoColors = {
  'Video':'#FF6B35', 'Lectura':'#7B5CFA', 'Infografía':'#06D6A0',
  'Ejercicios':'#00D4FF', 'Práctica':'#FFD166', 'Flashcards':'#F72585',
  'Mapa interactivo':'#06D6A0', 'Análisis':'#7B5CFA', 'Simulación':'#00D4FF', 'Test':'#FF6B35'
}

export default function Repasos() {
  const [activeNivel, setActiveNivel] = useState(0)
  const nivel = niveles[activeNivel]

  return (
    <section id="repasos" className="section" style={{ background:'rgba(13,27,62,0.3)' }}>
      <div className="container">
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1.3fr', gap:80, alignItems:'start' }}>
          {/* Left */}
          <div style={{ position:'sticky', top:100 }}>
            <div className="section-tag">📚 Material de repaso</div>
            <h2 className="section-title">
              Aprende a tu <span className="gradient-text">propio ritmo</span>
            </h2>
            <p className="section-subtitle" style={{ marginBottom:40 }}>
              Material organizado por nivel de dificultad, actualizado según el currículo nacional y los patrones de evaluación universitaria.
            </p>

            {/* Level selector */}
            <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
              {niveles.map((n, i) => (
                <button key={i} onClick={() => setActiveNivel(i)} style={{
                  display:'flex', alignItems:'center', gap:16, padding:'18px 24px',
                  borderRadius:16, border:`1px solid ${activeNivel===i ? n.color : 'var(--glass-border)'}`,
                  background: activeNivel===i ? `${n.color}12` : 'var(--glass)',
                  cursor:'pointer', textAlign:'left', transition:'all 0.2s',
                  backdropFilter:'blur(10px)'
                }}>
                  <span style={{ fontSize:28 }}>{n.icon}</span>
                  <div>
                    <p style={{
                      fontFamily:'var(--font-display)', fontWeight:700, fontSize:16,
                      color: activeNivel===i ? n.color : 'var(--text-primary)', marginBottom:2
                    }}>{n.nivel}</p>
                    <p style={{ fontSize:12, color:'var(--text-muted)' }}>{n.descripcion}</p>
                  </div>
                  {activeNivel===i && (
                    <span style={{ marginLeft:'auto', color:n.color, fontSize:18 }}>→</span>
                  )}
                </button>
              ))}
            </div>

            {/* Progress summary */}
            <div style={{
              marginTop:32, padding:24, borderRadius:20,
              background:'var(--card-bg)', border:'1px solid var(--glass-border)',
              backdropFilter:'blur(20px)'
            }}>
              <p style={{ fontSize:13, color:'var(--text-muted)', marginBottom:16, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.08em' }}>
                Tu progreso global
              </p>
              {['Básico','Intermedio','Avanzado'].map((n, i) => {
                const avg = Math.round(niveles[i].materiales.reduce((a,m)=>a+m.progreso,0)/niveles[i].materiales.length)
                return (
                  <div key={n} style={{ marginBottom:12 }}>
                    <div style={{ display:'flex', justifyContent:'space-between', marginBottom:6 }}>
                      <span style={{ fontSize:13 }}>{n}</span>
                      <span style={{ fontSize:13, fontWeight:700, color:niveles[i].color }}>{avg}%</span>
                    </div>
                    <div style={{ height:4, background:'rgba(255,255,255,0.06)', borderRadius:100 }}>
                      <div style={{ height:'100%', width:`${avg}%`, background:niveles[i].color, borderRadius:100 }}/>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right — materials */}
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:32 }}>
              <span style={{ fontSize:32 }}>{nivel.icon}</span>
              <div>
                <h3 style={{ fontFamily:'var(--font-display)', fontSize:24, fontWeight:800 }}>
                  Nivel <span style={{ color:nivel.color }}>{nivel.nivel}</span>
                </h3>
                <p style={{ color:'var(--text-muted)', fontSize:14 }}>{nivel.materiales.length} recursos disponibles</p>
              </div>
            </div>

            <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
              {nivel.materiales.map((m, i) => (
                <div key={i} className="card" style={{ padding:24 }}>
                  <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', marginBottom:16 }}>
                    <div style={{ flex:1 }}>
                      <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:8 }}>
                        <span style={{
                          fontSize:10, fontWeight:700, padding:'3px 10px', borderRadius:100,
                          background:`${tipoColors[m.tipo] || '#666'}20`,
                          color: tipoColors[m.tipo] || '#ccc', letterSpacing:'0.06em'
                        }}>{m.tipo.toUpperCase()}</span>
                        <span style={{ fontSize:12, color:'var(--text-muted)' }}>⏱ {m.duracion}</span>
                      </div>
                      <h4 style={{ fontWeight:700, fontSize:16 }}>{m.titulo}</h4>
                    </div>
                    {m.progreso === 100 && (
                      <span style={{
                        background:'rgba(6,214,160,0.15)', color:'var(--success)',
                        borderRadius:100, padding:'4px 12px', fontSize:11, fontWeight:700,
                        marginLeft:12, whiteSpace:'nowrap'
                      }}>✓ Completado</span>
                    )}
                  </div>

                  {m.progreso > 0 && (
                    <div style={{ marginBottom:16 }}>
                      <div style={{ display:'flex', justifyContent:'space-between', marginBottom:6 }}>
                        <span style={{ fontSize:12, color:'var(--text-muted)' }}>Progreso</span>
                        <span style={{ fontSize:12, color:nivel.color, fontWeight:700 }}>{m.progreso}%</span>
                      </div>
                      <div style={{ height:4, background:'rgba(255,255,255,0.06)', borderRadius:100 }}>
                        <div style={{
                          height:'100%', width:`${m.progreso}%`,
                          background:`linear-gradient(90deg, ${nivel.color}, ${nivel.color}88)`,
                          borderRadius:100
                        }}/>
                      </div>
                    </div>
                  )}

                  <button style={{
                    padding:'10px 20px', borderRadius:10,
                    background: m.progreso===0 ? 'var(--glass)' : `${nivel.color}18`,
                    border: `1px solid ${m.progreso===0 ? 'var(--glass-border)' : nivel.color+'44'}`,
                    color: m.progreso===0 ? 'var(--text-secondary)' : nivel.color,
                    fontFamily:'var(--font-body)', fontSize:13, fontWeight:600, cursor:'pointer',
                    transition:'all 0.2s'
                  }}>
                    {m.progreso === 0 ? '▶ Comenzar' : m.progreso === 100 ? '🔄 Repasar' : '▶ Continuar'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #repasos .container > div { grid-template-columns: 1fr !important; }
          #repasos .container > div > div:first-child { position: static !important; }
        }
      `}</style>
    </section>
  )
}
