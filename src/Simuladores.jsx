import { useState } from 'react'

const materias = [
  {
    id: 'matematicas',
    icon: '📐',
    nombre: 'Matemáticas',
    color: '#00D4FF',
    temas: ['Álgebra', 'Geometría', 'Trigonometría', 'Estadística', 'Cálculo básico'],
    preguntas: 40,
    tiempo: '90 min',
    dificultad: 'Alta',
    universidades: ['ESPOL', 'EPN', 'ESPE', 'UCE'],
    preguntas_data: [
      {
        pregunta: 'Si f(x) = 2x² - 3x + 1, ¿cuál es f(3)?',
        opciones: ['8', '10', '12', '14'],
        correcta: 1,
        explicacion: 'f(3) = 2(9) - 3(3) + 1 = 18 - 9 + 1 = 10'
      },
      {
        pregunta: '¿Cuánto es la raíz cuadrada de 144?',
        opciones: ['11', '12', '13', '14'],
        correcta: 1,
        explicacion: '√144 = 12, porque 12 × 12 = 144'
      },
      {
        pregunta: 'Resuelve: 2x + 5 = 15',
        opciones: ['x = 4', 'x = 5', 'x = 6', 'x = 10'],
        correcta: 1,
        explicacion: '2x = 15 - 5 = 10, entonces x = 5'
      },
    ]
  },
  {
    id: 'lenguaje',
    icon: '📖',
    nombre: 'Lenguaje y Literatura',
    color: '#7B5CFA',
    temas: ['Comprensión lectora', 'Gramática', 'Ortografía', 'Literatura', 'Redacción'],
    preguntas: 35,
    tiempo: '75 min',
    dificultad: 'Media',
    universidades: ['UCE', 'PUCE', 'UDLA', 'UTPL'],
    preguntas_data: [
      {
        pregunta: '¿Cuál es el sujeto de la oración: "Los estudiantes estudian mucho"?',
        opciones: ['estudian mucho', 'Los estudiantes', 'mucho', 'Los'],
        correcta: 1,
        explicacion: '"Los estudiantes" es el sujeto porque es quien realiza la acción.'
      },
      {
        pregunta: '¿Qué figura literaria usa la oración: "Sus ojos son dos luceros"?',
        opciones: ['Metáfora', 'Hipérbole', 'Anáfora', 'Símil'],
        correcta: 0,
        explicacion: 'Es una metáfora porque identifica directamente ojos con luceros sin usar "como".'
      },
    ]
  },
  {
    id: 'ciencias',
    icon: '🔬',
    nombre: 'Ciencias Naturales',
    color: '#06D6A0',
    temas: ['Biología celular', 'Química básica', 'Física', 'Ecología', 'Anatomía'],
    preguntas: 35,
    tiempo: '75 min',
    dificultad: 'Media-Alta',
    universidades: ['UCE-Medicina', 'PUCE', 'UG', 'UTPL'],
    preguntas_data: [
      {
        pregunta: '¿Cuál es la función principal de la mitocondria?',
        opciones: ['Síntesis de proteínas', 'Producción de energía (ATP)', 'Digestión celular', 'División celular'],
        correcta: 1,
        explicacion: 'La mitocondria es la "central energética" de la célula, produce ATP mediante respiración celular.'
      },
      {
        pregunta: '¿Cuál es la fórmula química del agua?',
        opciones: ['CO₂', 'H₂O', 'NaCl', 'O₂'],
        correcta: 1,
        explicacion: 'El agua (H₂O) está compuesta por 2 átomos de hidrógeno y 1 de oxígeno.'
      },
    ]
  },
  {
    id: 'sociales',
    icon: '🌎',
    nombre: 'Estudios Sociales',
    color: '#FFD166',
    temas: ['Historia del Ecuador', 'Geografía', 'Civismo', 'Economía básica', 'Cultura'],
    preguntas: 30,
    tiempo: '60 min',
    dificultad: 'Media',
    universidades: ['UCE', 'FLACSO', 'UDLA', 'UDA'],
    preguntas_data: [
      {
        pregunta: '¿En qué año se firmó la primera Constitución del Ecuador?',
        opciones: ['1830', '1835', '1843', '1861'],
        correcta: 0,
        explicacion: 'La primera Constitución ecuatoriana fue promulgada en 1830, cuando Ecuador se separó de la Gran Colombia.'
      },
    ]
  },
  {
    id: 'ingles',
    icon: '🇬🇧',
    nombre: 'Inglés',
    color: '#FF6B35',
    temas: ['Reading', 'Grammar', 'Vocabulary', 'Writing', 'Listening concepts'],
    preguntas: 25,
    tiempo: '50 min',
    dificultad: 'Media',
    universidades: ['USFQ', 'UDLA', 'UTPL', 'PUCE'],
    preguntas_data: [
      {
        pregunta: 'Choose the correct option: "She ___ studying for two hours."',
        opciones: ['have been', 'has been', 'had been', 'is been'],
        correcta: 1,
        explicacion: 'Con "She" (3rd person singular) se usa "has been" en Present Perfect Continuous.'
      },
    ]
  },
  {
    id: 'aptitud',
    icon: '🧠',
    nombre: 'Aptitud Abstracta',
    color: '#F72585',
    temas: ['Series numéricas', 'Razonamiento lógico', 'Patrones visuales', 'Analogías', 'Secuencias'],
    preguntas: 30,
    tiempo: '45 min',
    dificultad: 'Alta',
    universidades: ['ESPOL', 'EPN', 'ESPE', 'INIAP'],
    preguntas_data: [
      {
        pregunta: 'Completa la serie: 2, 6, 18, 54, ___',
        opciones: ['108', '162', '216', '270'],
        correcta: 1,
        explicacion: 'Cada término se multiplica por 3: 2×3=6, 6×3=18, 18×3=54, 54×3=162'
      },
    ]
  },
]

function SimuladorModal({ materia, onClose }) {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answered, setAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [answers, setAnswers] = useState([])

  const preguntas = materia.preguntas_data
  const q = preguntas[current]

  const handleSelect = (idx) => {
    if (answered) return
    setSelected(idx)
    setAnswered(true)
    if (idx === q.correcta) setScore(s => s + 1)
    setAnswers(a => [...a, { correcta: idx === q.correcta }])
  }

  const next = () => {
    if (current + 1 >= preguntas.length) { setFinished(true); return }
    setCurrent(c => c + 1)
    setSelected(null)
    setAnswered(false)
  }

  const pct = Math.round((score / preguntas.length) * 100)

  return (
    <div style={{
      position:'fixed', inset:0, background:'rgba(0,0,0,0.85)', zIndex:9999,
      display:'flex', alignItems:'center', justifyContent:'center', padding:24,
      backdropFilter:'blur(10px)'
    }} onClick={onClose}>
      <div style={{
        background:'#0D1B3E', border:'1px solid rgba(255,255,255,0.1)',
        borderRadius:28, padding:40, width:'100%', maxWidth:600,
        maxHeight:'90vh', overflowY:'auto'
      }} onClick={e => e.stopPropagation()}>
        {!finished ? (
          <>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:32 }}>
              <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                <span style={{ fontSize:24 }}>{materia.icon}</span>
                <span style={{ fontFamily:'var(--font-display)', fontWeight:700 }}>{materia.nombre}</span>
              </div>
              <div style={{ display:'flex', gap:12, alignItems:'center' }}>
                <span style={{ color:'var(--text-muted)', fontSize:14 }}>
                  {current + 1} / {preguntas.length}
                </span>
                <button onClick={onClose} style={{ background:'none', border:'none', color:'var(--text-muted)', cursor:'pointer', fontSize:20 }}>✕</button>
              </div>
            </div>

            <div style={{ height:4, background:'rgba(255,255,255,0.06)', borderRadius:100, marginBottom:32 }}>
              <div style={{ height:'100%', width:`${((current+1)/preguntas.length)*100}%`, background:materia.color, borderRadius:100, transition:'width 0.4s' }}/>
            </div>

            <p style={{ fontSize:18, fontWeight:600, marginBottom:28, lineHeight:1.6 }}>{q.pregunta}</p>

            <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
              {q.opciones.map((op, i) => {
                let bg = 'rgba(255,255,255,0.04)'
                let border = 'rgba(255,255,255,0.08)'
                if (answered) {
                  if (i === q.correcta) { bg='rgba(6,214,160,0.15)'; border='rgba(6,214,160,0.5)' }
                  else if (i === selected) { bg='rgba(255,107,53,0.15)'; border='rgba(255,107,53,0.5)' }
                } else if (selected === i) {
                  bg = `${materia.color}22`; border = materia.color
                }
                return (
                  <button key={i} onClick={() => handleSelect(i)} style={{
                    background:bg, border:`1px solid ${border}`, borderRadius:14,
                    padding:'14px 20px', textAlign:'left', color:'var(--text-primary)',
                    cursor: answered ? 'default' : 'pointer', transition:'all 0.2s',
                    fontSize:15, fontFamily:'var(--font-body)'
                  }}>
                    <span style={{ fontWeight:700, marginRight:10, color:materia.color }}>
                      {String.fromCharCode(65+i)}.
                    </span>
                    {op}
                  </button>
                )
              })}
            </div>

            {answered && (
              <div style={{
                marginTop:24, padding:16, borderRadius:14,
                background: selected === q.correcta ? 'rgba(6,214,160,0.08)' : 'rgba(255,107,53,0.08)',
                border: `1px solid ${selected === q.correcta ? 'rgba(6,214,160,0.3)' : 'rgba(255,107,53,0.3)'}`
              }}>
                <p style={{ fontSize:13, marginBottom:8, fontWeight:700 }}>
                  {selected === q.correcta ? '✅ ¡Correcto!' : '❌ Incorrecto'}
                </p>
                <p style={{ fontSize:13, color:'var(--text-secondary)' }}>{q.explicacion}</p>
              </div>
            )}

            {answered && (
              <button className="btn-primary" style={{ marginTop:24, width:'100%', justifyContent:'center' }} onClick={next}>
                {current + 1 >= preguntas.length ? 'Ver resultados' : 'Siguiente pregunta →'}
              </button>
            )}
          </>
        ) : (
          <div style={{ textAlign:'center' }}>
            <div style={{ fontSize:64, marginBottom:16 }}>{pct >= 70 ? '🏆' : pct >= 50 ? '📈' : '💪'}</div>
            <h2 style={{ fontFamily:'var(--font-display)', fontSize:32, marginBottom:8 }}>
              {pct >= 70 ? '¡Excelente resultado!' : pct >= 50 ? '¡Buen intento!' : '¡Sigue practicando!'}
            </h2>
            <p style={{ color:'var(--text-secondary)', marginBottom:32 }}>
              Respondiste correctamente {score} de {preguntas.length} preguntas
            </p>
            <div style={{
              width:120, height:120, borderRadius:'50%', margin:'0 auto 32px',
              background:`conic-gradient(${materia.color} ${pct*3.6}deg, rgba(255,255,255,0.05) 0deg)`,
              display:'flex', alignItems:'center', justifyContent:'center',
              fontSize:28, fontWeight:800, fontFamily:'var(--font-display)'
            }}>
              {pct}%
            </div>
            <button className="btn-primary" style={{ justifyContent:'center' }} onClick={onClose}>
              Continuar explorando
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Simuladores() {
  const [active, setActive] = useState(null)

  return (
    <section id="simuladores" className="section">
      <div className="container">
        <div style={{ textAlign:'center', marginBottom:64 }}>
          <div className="section-tag">🎯 Simuladores oficiales</div>
          <h2 className="section-title">
            Practica como en el <span className="gradient-text">examen real</span>
          </h2>
          <p className="section-subtitle" style={{ margin:'0 auto' }}>
            Diseñados según los estándares de evaluación de todas las universidades y politécnicas del Ecuador. Preguntas actualizadas cada semestre.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(340px,1fr))', gap:24 }}>
          {materias.map(m => (
            <div key={m.id} className="card" style={{ cursor:'pointer', position:'relative', overflow:'hidden' }}
              onClick={() => setActive(m)}>
              {/* Top accent */}
              <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:`linear-gradient(90deg, ${m.color}, transparent)` }}/>

              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:20 }}>
                <div style={{ display:'flex', alignItems:'center', gap:12 }}>
                  <div style={{
                    width:48, height:48, borderRadius:14,
                    background:`${m.color}18`, display:'flex', alignItems:'center', justifyContent:'center',
                    fontSize:24, border:`1px solid ${m.color}33`
                  }}>{m.icon}</div>
                  <div>
                    <h3 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:16 }}>{m.nombre}</h3>
                    <span style={{ fontSize:11, color:m.color, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.08em' }}>
                      {m.dificultad}
                    </span>
                  </div>
                </div>
                <span style={{ fontSize:11, color:'var(--text-muted)', background:'var(--glass)', padding:'4px 10px', borderRadius:100 }}>
                  {m.tiempo}
                </span>
              </div>

              <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:20 }}>
                {m.temas.map(t => (
                  <span key={t} style={{
                    fontSize:11, padding:'3px 10px', borderRadius:100,
                    background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.06)',
                    color:'var(--text-secondary)'
                  }}>{t}</span>
                ))}
              </div>

              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:16 }}>
                <span style={{ fontSize:13, color:'var(--text-muted)' }}>
                  📝 {m.preguntas} preguntas
                </span>
                <div style={{ display:'flex', gap:4 }}>
                  {m.universidades.slice(0,3).map(u => (
                    <span key={u} style={{
                      fontSize:10, padding:'2px 7px', borderRadius:4,
                      background:`${m.color}15`, color:m.color, fontWeight:700
                    }}>{u}</span>
                  ))}
                </div>
              </div>

              <button style={{
                width:'100%', padding:'12px', borderRadius:12,
                background:`linear-gradient(135deg, ${m.color}22, ${m.color}11)`,
                border:`1px solid ${m.color}44`,
                color:m.color, fontFamily:'var(--font-body)', fontWeight:700, fontSize:14,
                cursor:'pointer', transition:'all 0.2s'
              }}
              onMouseEnter={e => { e.target.style.background=`${m.color}33` }}
              onMouseLeave={e => { e.target.style.background=`linear-gradient(135deg, ${m.color}22, ${m.color}11)` }}>
                ▶ Iniciar simulador
              </button>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div style={{
          marginTop:60, padding:'40px 48px', borderRadius:28,
          background:'linear-gradient(135deg, rgba(123,92,250,0.15), rgba(0,212,255,0.1))',
          border:'1px solid rgba(123,92,250,0.2)', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:24
        }}>
          <div>
            <h3 style={{ fontFamily:'var(--font-display)', fontSize:24, fontWeight:800, marginBottom:8 }}>
              ¿Listo para el simulacro completo?
            </h3>
            <p style={{ color:'var(--text-secondary)', fontSize:15 }}>
              Simula el examen completo de tu universidad objetivo con tiempo real y ranking nacional.
            </p>
          </div>
          <a href="#pagos" className="btn-primary">Ver planes premium →</a>
        </div>
      </div>

      {active && <SimuladorModal materia={active} onClose={() => setActive(null)} />}
    </section>
  )
}
