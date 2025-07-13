import { Link } from 'react-router-dom'
import RadioPlayer from './RadioPlayer'

function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header">
        <div className="container">
          <h1 className="logo">Radio Cultural Paraguay</h1>
          <nav className="nav">
            <Link to="/" className="nav-link">Inicio</Link>
            <Link to="/programacion" className="nav-link">Programación</Link>
            <Link to="/donaciones" className="nav-link">Donaciones</Link>
            <Link to="/contacto" className="nav-link">Contacto</Link>
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