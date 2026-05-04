import { useState } from 'react'
import Nav from './Nav.jsx'
import Hero from './Hero.jsx'
import Simuladores from './Simuladores.jsx'
import Repasos from './Repasos.jsx'
import Acceso from './Acceso.jsx'
import Visitanos from './Visitanos.jsx'
import Pagos from './Pagos.jsx'
import Footer from './Footer.jsx'

export default function App() {
  const [user, setUser] = useState(null)

  return (
    <>
      <Nav user={user} setUser={setUser} />
      <main>
        <Hero />
        <Simuladores />
        <Repasos />
        <Acceso user={user} setUser={setUser} />
        <Visitanos />
        <Pagos />
      </main>
      <Footer />
    </>
  )
}
