import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, Heart, Mail, Instagram, Youtube, Facebook, MessageCircle } from 'lucide-react';
import RadioPlayer from './RadioPlayer';
import './Layout.css';

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

    // Al cambiar de ruta, gestionar estado inicial del reproductor
    const isHomepage = location.pathname === '/';
    const isSmallScreen = window.innerWidth <= 768;

    if (isHomepage) {
      setIsMinimized(false); // Siempre expandido en la página de inicio
    } else if (isSmallScreen) {
      setIsMinimized(true); // Minimizado en otras páginas en móvil
    } else {
      setIsMinimized(false); // Expandido en otras páginas en desktop
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
          <div className="footer-content">
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-link" aria-label="TikTok">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <Youtube size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link" aria-label="WhatsApp">
                <MessageCircle size={20} />
              </a>
            </div>
            <p className="footer-text">&copy; 2024 Radio Cultural Paraguay - Preservando nuestra cultura guaraní</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout