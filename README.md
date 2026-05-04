# PrepUni Ecuador 🎓

Plataforma de preparación universitaria para Ecuador. React + Vite + Firebase.

## Stack Tecnológico
- **Frontend**: React 19 + Vite 8
- **Autenticación**: Firebase Auth (configurar en src/firebase.js)
- **Deploy**: Vercel
- **Fonts**: Syne + Plus Jakarta Sans (Google Fonts)

## Estructura del Proyecto
```
src/
├── App.jsx          — Componente raíz
├── Nav.jsx          — Navegación sticky
├── Hero.jsx         — Sección principal con estadísticas
├── Simuladores.jsx  — Simuladores por materia (Matemáticas, Lenguaje, CC.NN., Sociales, Inglés, Aptitud)
├── Repasos.jsx      — Material organizado por nivel
├── Acceso.jsx       — Login/Registro (Firebase)
├── Visitanos.jsx    — Redes sociales + newsletter
├── Pagos.jsx        — 3 planes + métodos de pago
├── Footer.jsx       — Footer completo
├── firebase.js      — Configuración Firebase
└── index.css        — Variables CSS globales
```

## Configurar Firebase (REQUERIDO para producción)

1. Ve a https://console.firebase.google.com
2. Crea un nuevo proyecto "prepuni-ec"
3. Activa **Authentication → Email/Password**
4. Copia tu config en `src/firebase.js`
5. Crea un usuario con email: estudiante@prepuni.ec / contraseña: 1234

## Deploy en Vercel

### Opción 1 — GitHub + Vercel (recomendado)
```bash
git init
git add .
git commit -m "PrepUni Ecuador - Initial commit"
git remote add origin https://github.com/TU_USUARIO/prepuni-ec.git
git push -u origin main
```
Luego conecta el repo en vercel.com → New Project → Import Git Repository

### Opción 2 — Vercel CLI
```bash
npm install -g vercel
vercel --prod
```

## Credenciales Demo
- Usuario: `estudiante`
- Contraseña: `1234`

## Secciones
| Sección | Descripción |
|---------|-------------|
| Inicio | Hero con contadores animados y tarjeta de progreso |
| Simuladores | 6 materias con preguntas reales, feedback inmediato |
| Repasos | 3 niveles (Básico/Intermedio/Avanzado) con barras de progreso |
| Acceso | Login/Registro con Firebase Auth |
| Visítanos | 6 redes sociales próximamente + newsletter |
| Pagos | 3 planes (Gratis/$12.99/$24.99) con toggle anual |

