import { Music, Radio, Heart } from 'lucide-react';
import InstallPrompt from '../components/InstallPrompt';
import useSeo from '../hooks/useSeo';
import './Home.css';

function Home() {
  useSeo({
    title: 'Radio Cultural Paraguay - Música y Tradición Guaraní',
    description: 'Escuchá la mejor música folclórica paraguaya, polcas, guaranias y toda la riqueza cultural de nuestro país. Radio Cultural Paraguay preserva y difunde nuestras tradiciones musicales las 24 horas del día.'
  });
  return (
    <div className="home-page">
      <InstallPrompt />
      <section className="hero">
        <h1>Bienvenidos a Radio Cultural</h1>
        <p className="hero-subtitle">
          La voz de nuestra cultura guaraní - Transmitiendo las tradiciones paraguayas al mundo
        </p>
        <div className="hero-description">
          <p>
            Escuchá la mejor música folclórica paraguaya, polcas, guaranias y toda la riqueza 
            cultural de nuestro país. Radio Cultural Paraguay preserva y difunde nuestras 
            tradiciones musicales las 24 horas del día.
          </p>
        </div>
      </section>

      <section className="radio-showcase">
        <div className="radio-showcase-card">
          <div className="radio-showcase-header">
            <div className="live-indicator-large">
              <span className="live-dot-large"></span>
              <div>
                <h3>¡Estamos en vivo!</h3>
                <p>Escuchá ahora la mejor música paraguaya</p>
              </div>
            </div>
          </div>
          <div className="radio-showcase-content">
            <h3>Tu radio cultural está siempre contigo</h3>
            <p>Reproductor fijo en la parte inferior para que no pierdas ni un momento de la mejor música paraguaya.</p>
            <div className="radio-features">
              <div className="radio-feature">
                <Music size={18} />
                <span>Rotación continua de música folclórica</span>
              </div>
              <div className="radio-feature">
                <Radio size={18} />
                <span>Calidad de audio premium</span>
              </div>
              <div className="radio-feature">
                <Heart size={18} />
                <span>Acceso desde cualquier dispositivo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature-grid">
          <div className="feature-card">
            <h3><Music size={20} style={{display: 'inline', marginRight: '0.5rem'}} /> Música Tradicional</h3>
            <p>Polcas, guaranias, chamamés y toda la música que nos representa</p>
          </div>
          <div className="feature-card">
            <h3><Radio size={20} style={{display: 'inline', marginRight: '0.5rem'}} /> En Vivo 24/7</h3>
            <p>Transmisión continua con la mejor selección musical paraguaya</p>
          </div>
          <div className="feature-card">
            <h3><Heart size={20} style={{display: 'inline', marginRight: '0.5rem'}} /> Cultura Guaraní</h3>
            <p>Preservando y difundiendo nuestras raíces culturales</p>
          </div>
        </div>
      </section>

      <section className="about">
        <h2>Sobre Radio Cultural</h2>
        <p>
          Radio Cultural Paraguay nace del amor por nuestras tradiciones musicales. 
          Nuestro compromiso es mantener viva la cultura guaraní a través de la música, 
          llevando los sonidos auténticos del Paraguay a cada rincón del mundo donde 
          hay corazones paraguayos latiendo.
        </p>
      </section>

      <section className="cultural-highlight">
        <h2>La Polka Paraguaya</h2>
        <p>
          La polka paraguaya es la máxima expresión de nuestro acervo cultural. 
          Combina ritmos ternarios, binarios y síncopas, creando un sonido único que 
          representa el alma de nuestra música. En guaraní, se la conoce como <strong>purahéi</strong>.
        </p>
        <div className="cultural-grid">
          <div className="cultural-card">
            <h4>Historia</h4>
            <p>Nacida en el siglo XIX, fusiona las danzas europeas con el sentir paraguayo.</p>
          </div>
          <div className="cultural-card">
            <h4>Características</h4>
            <p>Ritmo de 6/8 con arpa paraguaya y guitarra criolla como instrumentos principales.</p>
          </div>
          <div className="cultural-card">
            <h4>Variantes</h4>
            <p>Polka tradicional, Syryry y Popó, cada una con su propio estilo y cadencia.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home