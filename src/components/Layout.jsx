import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, Heart, Mail } from 'lucide-react';
import RadioPlayer from './RadioPlayer';

function Layout({ children }) {
  const [isMinimized, setIsMinimized] = useState(false);
  const location = useLocation();

  // Efecto unificado para manejar la minimización de forma inteligente
  useEffect(() => {
    const handleScrollAndResize = () => {
      const isSmallScreen = window.innerWidth <= 768;
      if (!isSmallScreen) {
        setIsMinimized(false);
        return;
      }

      // Lógica de estado mejorada para evitar parpadeos
      setIsMinimized(prevIsMinimized => {
        const isScrolledPastThreshold = window.scrollY > 50;
        // Si ya está minimizado, solo se expande al volver al inicio
        if (prevIsMinimized) {
          return window.scrollY > 10; // Un pequeño umbral para evitar expansiones accidentales
        }
        // Si está expandido, se minimiza al pasar el umbral
        return isScrolledPastThreshold;
      });
    };

    // Al cambiar de ruta, forzar la minimización en móviles
    if (window.innerWidth <= 768) {
      setIsMinimized(true);
    }
    window.scrollTo(0, 0);

    window.addEventListener('scroll', handleScrollAndResize);
    window.addEventListener('resize', handleScrollAndResize);

    return () => {
      window.removeEventListener('scroll', handleScrollAndResize);
      window.removeEventListener('resize', handleScrollAndResize);
    };
  }, [location.pathname]);

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
        <RadioPlayer isMinimized={isMinimized} />
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