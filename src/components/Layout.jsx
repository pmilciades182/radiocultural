import { Link } from 'react-router-dom'
import { Home, Calendar, Heart, Mail } from 'lucide-react'
import RadioPlayer from './RadioPlayer'

function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header">
        <div className="container">
          <div className="logo">
            <h1 className="logo-title">Radio Cultural</h1>
            <p className="logo-subtitle">Desde la ciudad de Limpio - Paraguay</p>
          </div>
          <nav className="nav">
            <Link to="/" className="nav-link">
              <Home size={16} />
              <span>Inicio</span>
            </Link>
            <Link to="/programacion" className="nav-link">
              <Calendar size={16} />
              <span>Programación</span>
            </Link>
            <Link to="/donaciones" className="nav-link">
              <Heart size={16} />
              <span>Doná</span>
            </Link>
            <Link to="/contacto" className="nav-link">
              <Mail size={16} />
              <span>Contacto</span>
            </Link>
          </nav>
        </div>
      </header>
      
      <main className="main">
        <div className="container">
          {children}
        </div>
      </main>
      
      <div className="radio-player-fixed">
        <RadioPlayer />
      </div>
      
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Radio Cultural Paraguay - Preservando nuestra cultura guaraní</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout