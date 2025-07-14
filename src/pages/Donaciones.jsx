import { Heart, Music, Radio, Users, Globe, Headphones } from 'lucide-react'

function Donaciones() {
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
            a cada rincón del planeta. Cada donación fortalece nuestras raíces musicales.
          </p>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <Radio size={32} />
            <span className="stat-number">24/7</span>
            <span className="stat-label">En vivo</span>
          </div>
          <div className="stat-item">
            <Music size={32} />
            <span className="stat-number">1000+</span>
            <span className="stat-label">Canciones</span>
          </div>
          <div className="stat-item">
            <Globe size={32} />
            <span className="stat-number">50+</span>
            <span className="stat-label">Países</span>
          </div>
        </div>
      </div>

      <section className="donation-options">
        <div className="section-header">
          <h2>Elegí tu forma de apoyo</h2>
          <p>Cada contribución, sin importar el monto, hace la diferencia</p>
        </div>
        
        <div className="donation-cards">
          <div className="donation-card single">
            <div className="card-header">
              <Heart size={40} className="card-icon" />
              <h3>Donación Única</h3>
            </div>
            <p>Una contribución especial cuando sientas el llamado cultural</p>
            <div className="amount-grid">
              <button className="amount-btn">$5 USD</button>
              <button className="amount-btn">$15 USD</button>
              <button className="amount-btn">$30 USD</button>
              <button className="amount-btn popular">$50 USD</button>
              <button className="amount-btn">$100 USD</button>
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
            <div className="monthly-tiers">
              <div className="tier">
                <div className="tier-price">$5 USD/mes</div>
                <div className="tier-name">Amigo Cultural</div>
                <div className="tier-benefits">
                  <ul>
                    <li>Acceso a contenido exclusivo</li>
                    <li>Newsletter mensual</li>
                  </ul>
                </div>
              </div>
              <div className="tier popular">
                <div className="tier-price">$15 USD/mes</div>
                <div className="tier-name">Guardián Cultural</div>
                <div className="tier-benefits">
                  <ul>
                    <li>Todo lo anterior</li>
                    <li>Reconocimiento en la radio</li>
                    <li>Requests prioritarios</li>
                  </ul>
                </div>
              </div>
              <div className="tier">
                <div className="tier-price">$30 USD/mes</div>
                <div className="tier-name">Embajador Cultural</div>
                <div className="tier-benefits">
                  <ul>
                    <li>Todo lo anterior</li>
                    <li>Merchandising exclusivo</li>
                    <li>Acceso a eventos exclusivos</li>
                  </ul>
                </div>
              </div>
            </div>
            <button className="donate-button">Suscribirme</button>
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