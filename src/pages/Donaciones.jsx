import { Heart, Music, Radio, Users, Globe, Headphones } from 'lucide-react';
import useSeo from '../hooks/useSeo';
import './Donaciones.css';

function Donaciones() {
  useSeo({
    title: 'Apoyá a Radio Cultural - Donaciones',
    description: 'Tu apoyo mantiene viva la música paraguaya y nos ayuda a llevar nuestra cultura a cada rincón del planeta. Cada donación es un pilar fundamental para nuestra misión.'
  });
  return (
    <div className="donaciones-page">
      <div className="donation-hero">
        <div className="hero-content">
          <div className="hero-icon">
            <Heart size={64} className="heart-icon" />
          </div>
          <h1>Apoyá Radio Cultural</h1>
          <p className="hero-subtitle">Desde Limpio, Paraguay - Para el mundo</p>
          <p className="hero-description">
            Tu apoyo mantiene viva la música paraguaya y nos ayuda a llevar nuestra cultura 
            a cada rincón del planeta. Cada donación en Guaraníes, no importa el tamaño, es un pilar fundamental para nuestra misión.
          </p>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <Users size={24} />
            <span>+10.000 Oyentes</span>
          </div>
          <div className="stat-item">
            <Globe size={24} />
            <span>+50 Países</span>
          </div>
          <div className="stat-item">
            <Headphones size={24} />
            <span>24/7 al Aire</span>
          </div>
        </div>
      </div>

      <section className="donation-section">
        <h2>Hacé tu Aporte a la Cultura</h2>
        <p className="section-intro">
          Elegí la forma de apoyar que mejor se adapte a vos. 
          Tu donación, no importa el tamaño, es un pilar fundamental para nuestra misión.
        </p>

        <div className="donation-cards">
          <div className="donation-card single">
            <div className="card-header">
              <Heart size={40} className="card-icon" />
              <h3>Donación Única</h3>
            </div>
            <p>Una contribución especial cuando sientas el llamado cultural</p>
            <div className="amount-buttons">
              <button className="amount-btn">Gs. 30.000</button>
              <button className="amount-btn">Gs. 100.000</button>
              <button className="amount-btn">Gs. 200.000</button>
              <button className="amount-btn popular">Gs. 350.000</button>
              <button className="amount-btn">Gs. 750.000</button>
              <button className="amount-btn custom">Monto personalizado</button>
            </div>
            <button className="donate-button">Donar Ahora</button>
          </div>
          
          <div className="donation-card monthly featured">
            <div className="card-header">
              <Users size={40} className="card-icon" />
              <h3>Apoyo Mensual</h3>
            </div>
            <p>Convertite en guardián permanente de nuestra cultura</p>
            <div className="tiers">
              <div className="tier">
                <h4><Users size={20} /> Amigo/a de la Radio</h4>
                <div className="tier-price">Gs. 30.000/mes</div>
                <div className="tier-benefits">
                  <ul>
                    <li>Mención en la web</li>
                    <li>Acceso a sorteos</li>
                  </ul>
                </div>
              </div>
              <div className="tier popular">
                <h4><Radio size={20} /> Socio/a Cultural</h4>
                <div className="tier-price">Gs. 100.000/mes</div>
                <div className="tier-benefits">
                  <ul>
                    <li>Mención en la web</li>
                    <li>Acceso a sorteos</li>
                    <li>Programa dedicado</li>
                  </ul>
                </div>
              </div>
              <div className="tier">
                <h4><Heart size={20} /> Protector/a del Folclore</h4>
                <div className="tier-price">Gs. 200.000/mes</div>
                <div className="tier-benefits">
                  <ul>
                    <li>Mención en la web</li>
                    <li>Acceso a sorteos</li>
                    <li>Programa dedicado</li>
                    <li>Regalo exclusivo</li>
                  </ul>
                </div>
              </div>
            </div>
            <button className="donate-button">Suscribirme</button>
          </div>
        </div>
      </section>

      <section className="why-donate">
        <h2>¿Por qué tu apoyo es tan importante?</h2>
        <div className="reasons-grid">
          <div className="reason-card">
            <div className="icon-container"><Music size={32} /></div>
            <h3>Preservar la Música</h3>
            <p>Aseguramos que las futuras generaciones puedan disfrutar de nuestro tesoro musical.</p>
          </div>
          <div className="reason-card">
            <div className="icon-container"><Radio size={32} /></div>
            <h3>Mantener la Transmisión</h3>
            <p>Cubrimos los costos de servidores y licencias para seguir al aire 24/7 sin interrupciones.</p>
          </div>
          <div className="reason-card">
            <div className="icon-container"><Globe size={32} /></div>
            <h3>Expandir Fronteras</h3>
            <p>Llegamos a paraguayos en todo el mundo, conectándolos con sus raíces a través de la música.</p>
          </div>
        </div>
      </section>

      <section className="donation-impact">
        <div className="section-header">
          <h2>Tu apoyo transforma vidas</h2>
          <p>Conocé el impacto directo de cada peso donado</p>
        </div>
        <div className="impact-grid">
          <div className="impact-card">
            <Music size={48} />
            <h3>Música & Derechos</h3>
            <p>Adquisición de nueva música paraguaya y derechos de transmisión para artistas emergentes</p>
            <div className="impact-stat">40% del presupuesto</div>
          </div>
          <div className="impact-card">
            <Headphones size={48} />
            <h3>Tecnología & Calidad</h3>
            <p>Servidores, equipamiento de audio profesional y mejoras técnicas continuas</p>
            <div className="impact-stat">35% del presupuesto</div>
          </div>
          <div className="impact-card">
            <Globe size={48} />
            <h3>Alcance Cultural</h3>
            <p>Marketing digital, eventos culturales y expansión internacional</p>
            <div className="impact-stat">25% del presupuesto</div>
          </div>
        </div>
      </section>

      <section className="ways-to-help">
        <div className="help-content">
          <h2>Otras formas de ser parte</h2>
          <div className="help-options">
            <div className="help-option">
              <div className="help-icon">🎵</div>
              <div className="help-text">
                <h3>Compartí la música</h3>
                <p>Difundí nuestras canciones en tus redes sociales</p>
              </div>
            </div>
            <div className="help-option">
              <div className="help-icon">💌</div>
              <div className="help-text">
                <h3>Sugerí canciones</h3>
                <p>Ayudanos a descubrir nuevos talentos paraguayos</p>
              </div>
            </div>
            <div className="help-option">
              <div className="help-icon">🌟</div>
              <div className="help-text">
                <h3>Sé embajador</h3>
                <p>Representá nuestra cultura en tu comunidad</p>
              </div>
            </div>
          </div>
          <div className="local-donations">
            <p>
              <strong>¿Sos de Paraguay?</strong> Tenemos opciones especiales de donación local. 
              <a href="/contacto" className="contact-link">Contactanos para más detalles</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Donaciones