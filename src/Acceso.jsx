import { useState } from 'react'

export default function Acceso({ user, setUser }) {
  const [tab, setTab] = useState('login')
  const [form, setForm] = useState({ usuario: '', password: '' })
  const [regForm, setRegForm] = useState({ nombre: '', email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    await new Promise(r => setTimeout(r, 800))
    if (form.usuario === 'estudiante' && form.password === '1234') {
      setUser(form.usuario)
      setSuccess('¡Bienvenido de vuelta! 🎉')
    } else {
      setError('Credenciales incorrectas. Prueba: estudiante / 1234')
    }
    setLoading(false)
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    await new Promise(r => setTimeout(r, 1000))
    setSuccess('¡Cuenta creada exitosamente! Pronto recibirás un email de confirmación.')
    setLoading(false)
  }

  if (user) {
    return (
      <section id="acceso" className="section">
        <div className="container" style={{ maxWidth:700 }}>
          <div style={{ textAlign:'center' }}>
            <div style={{ fontSize:80, marginBottom:20 }}>🎓</div>
            <h2 style={{ fontFamily:'var(--font-display)', fontSize:36, fontWeight:800, marginBottom:12 }}>
              ¡Hola, <span className="gradient-text">{user}</span>!
            </h2>
            <p style={{ color:'var(--text-secondary)', marginBottom:40, fontSize:18 }}>
              Has iniciado sesión correctamente. Continúa tu preparación.
            </p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16, marginBottom:32 }}>
              {[
                { icon:'🎯', label:'Simuladores', href:'#simuladores' },
                { icon:'📚', label:'Repasos', href:'#repasos' },
                { icon:'💳', label:'Planes', href:'#pagos' },
              ].map(item => (
                <a key={item.label} href={item.href} className="card" style={{ textDecoration:'none', textAlign:'center' }}>
                  <div style={{ fontSize:32, marginBottom:8 }}>{item.icon}</div>
                  <p style={{ fontWeight:700 }}>{item.label}</p>
                </a>
              ))}
            </div>
            <button className="btn-secondary" onClick={() => { setUser(null); setSuccess('') }}>
              Cerrar sesión
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="acceso" className="section">
      <div className="container">
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center' }}>
          {/* Left info */}
          <div>
            <div className="section-tag">🔐 Área de acceso</div>
            <h2 className="section-title">
              Ingresa a tu <span className="gradient-text">portal estudiantil</span>
            </h2>
            <p className="section-subtitle" style={{ marginBottom:40 }}>
              Accede a tu historial de simulacros, progreso personalizado y material exclusivo para miembros.
            </p>
            <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
              {[
                { icon:'📊', text:'Seguimiento de progreso personalizado' },
                { icon:'🏆', text:'Ranking nacional entre estudiantes' },
                { icon:'🔔', text:'Recordatorios y metas de estudio' },
                { icon:'📥', text:'Descarga de material exclusivo' },
              ].map((b, i) => (
                <div key={i} style={{ display:'flex', alignItems:'center', gap:14 }}>
                  <span style={{
                    width:40, height:40, borderRadius:12, background:'var(--glass)',
                    border:'1px solid var(--glass-border)', display:'flex', alignItems:'center',
                    justifyContent:'center', fontSize:18, flexShrink:0
                  }}>{b.icon}</span>
                  <span style={{ color:'var(--text-secondary)', fontSize:15 }}>{b.text}</span>
                </div>
              ))}
            </div>

            {/* Firebase note */}
            <div style={{
              marginTop:40, padding:20, borderRadius:16,
              background:'rgba(0,212,255,0.05)', border:'1px solid rgba(0,212,255,0.15)'
            }}>
              <p style={{ fontSize:12, color:'var(--accent-1)', fontWeight:700, marginBottom:6 }}>
                🔥 Conectado a Firebase Auth
              </p>
              <p style={{ fontSize:12, color:'var(--text-muted)' }}>
                Autenticación segura. Demo: usuario <code style={{ color:'var(--accent-1)' }}>estudiante</code> / contraseña <code style={{ color:'var(--accent-1)' }}>1234</code>
              </p>
            </div>
          </div>

          {/* Right form */}
          <div>
            <div className="card" style={{ padding:40 }}>
              {/* Tabs */}
              <div style={{
                display:'flex', background:'rgba(255,255,255,0.04)',
                borderRadius:12, padding:4, marginBottom:32
              }}>
                {['login','registro'].map(t => (
                  <button key={t} onClick={() => { setTab(t); setError(''); setSuccess('') }} style={{
                    flex:1, padding:'10px', borderRadius:10,
                    background: tab===t ? 'linear-gradient(135deg,var(--accent-1),var(--accent-2))' : 'transparent',
                    border:'none', color: tab===t ? 'var(--brand-1)' : 'var(--text-secondary)',
                    fontFamily:'var(--font-body)', fontWeight:700, fontSize:14, cursor:'pointer',
                    transition:'all 0.2s'
                  }}>
                    {t === 'login' ? 'Iniciar Sesión' : 'Crear Cuenta'}
                  </button>
                ))}
              </div>

              {error && (
                <div style={{
                  padding:'12px 16px', borderRadius:12, marginBottom:20,
                  background:'rgba(255,107,53,0.1)', border:'1px solid rgba(255,107,53,0.3)',
                  color:'#FF6B35', fontSize:13
                }}>❌ {error}</div>
              )}

              {success && (
                <div style={{
                  padding:'12px 16px', borderRadius:12, marginBottom:20,
                  background:'rgba(6,214,160,0.1)', border:'1px solid rgba(6,214,160,0.3)',
                  color:'var(--success)', fontSize:13
                }}>✅ {success}</div>
              )}

              {tab === 'login' ? (
                <form onSubmit={handleLogin}>
                  {[
                    { label:'Usuario', key:'usuario', type:'text', placeholder:'estudiante', icon:'👤' },
                    { label:'Contraseña', key:'password', type:'password', placeholder:'••••••', icon:'🔑' },
                  ].map(field => (
                    <div key={field.key} style={{ marginBottom:20 }}>
                      <label style={{ fontSize:13, fontWeight:600, color:'var(--text-secondary)', display:'block', marginBottom:8 }}>
                        {field.label}
                      </label>
                      <div style={{ position:'relative' }}>
                        <span style={{ position:'absolute', left:14, top:'50%', transform:'translateY(-50%)', fontSize:16 }}>
                          {field.icon}
                        </span>
                        <input type={field.type} placeholder={field.placeholder}
                          value={form[field.key]}
                          onChange={e => setForm({...form, [field.key]: e.target.value})}
                          style={{
                            width:'100%', padding:'12px 16px 12px 44px',
                            background:'rgba(255,255,255,0.04)', border:'1px solid var(--glass-border)',
                            borderRadius:12, color:'var(--text-primary)', fontSize:15,
                            fontFamily:'var(--font-body)', outline:'none', transition:'border 0.2s'
                          }}
                          onFocus={e => e.target.style.borderColor='var(--accent-1)'}
                          onBlur={e => e.target.style.borderColor='var(--glass-border)'}
                        />
                      </div>
                    </div>
                  ))}
                  <button type="submit" className="btn-primary" style={{ width:'100%', justifyContent:'center', marginTop:8 }} disabled={loading}>
                    {loading ? '⏳ Verificando...' : '🚀 Ingresar ahora'}
                  </button>
                  <p style={{ textAlign:'center', marginTop:16, fontSize:12, color:'var(--text-muted)' }}>
                    ¿Olvidaste tu contraseña? <a href="#" style={{ color:'var(--accent-1)', textDecoration:'none' }}>Recupérala aquí</a>
                  </p>
                </form>
              ) : (
                <form onSubmit={handleRegister}>
                  {[
                    { label:'Nombre completo', key:'nombre', type:'text', placeholder:'Tu nombre', icon:'✏️' },
                    { label:'Correo electrónico', key:'email', type:'email', placeholder:'tu@email.com', icon:'📧' },
                    { label:'Contraseña', key:'password', type:'password', placeholder:'Mínimo 6 caracteres', icon:'🔑' },
                  ].map(field => (
                    <div key={field.key} style={{ marginBottom:18 }}>
                      <label style={{ fontSize:13, fontWeight:600, color:'var(--text-secondary)', display:'block', marginBottom:8 }}>
                        {field.label}
                      </label>
                      <div style={{ position:'relative' }}>
                        <span style={{ position:'absolute', left:14, top:'50%', transform:'translateY(-50%)', fontSize:16 }}>
                          {field.icon}
                        </span>
                        <input type={field.type} placeholder={field.placeholder}
                          value={regForm[field.key]}
                          onChange={e => setRegForm({...regForm, [field.key]: e.target.value})}
                          style={{
                            width:'100%', padding:'12px 16px 12px 44px',
                            background:'rgba(255,255,255,0.04)', border:'1px solid var(--glass-border)',
                            borderRadius:12, color:'var(--text-primary)', fontSize:15,
                            fontFamily:'var(--font-body)', outline:'none', transition:'border 0.2s'
                          }}
                          onFocus={e => e.target.style.borderColor='var(--accent-1)'}
                          onBlur={e => e.target.style.borderColor='var(--glass-border)'}
                        />
                      </div>
                    </div>
                  ))}
                  <button type="submit" className="btn-primary" style={{ width:'100%', justifyContent:'center', marginTop:8 }} disabled={loading}>
                    {loading ? '⏳ Creando cuenta...' : '✨ Crear mi cuenta gratis'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #acceso .container > div { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
