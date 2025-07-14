import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, Heart, Mail } from 'lucide-react';
import RadioPlayer from './RadioPlayer';

function Layout({ children }) {
  const [isMinimized, setIsMinimized] = useState(false);
  const location = useLocation();
  const lastScrollY = useRef(0);

  // Efecto para manejar la minimización con detección de dirección de scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isSmallScreen = window.innerWidth <= 768;

      if (!isSmallScreen) {
        setIsMinimized(false);
        return;
      }

      // Scroll hacia abajo: minimizar
      if (currentScrollY > lastScrollY.current) {
        if (currentScrollY > 50) {
          setIsMinimized(true);
        }
      } 
      // Scroll hacia arriba: expandir solo al llegar al tope
      else {
        if (currentScrollY < 10) {
          setIsMinimized(false);
        }
      }
      lastScrollY.current = currentScrollY;
    };

    // Al cambiar de ruta, minimizar y reiniciar scroll
    if (window.innerWidth <= 768) {
      setIsMinimized(true);
    }
    window.scrollTo(0, 0);
    lastScrollY.current = 0;

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // También re-evaluar en resize

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
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