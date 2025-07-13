function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Bienvenidos a Radio Cultural Paraguay</h1>
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

      <section className="features">
        <div className="feature-grid">
          <div className="feature-card">
            <h3>🎵 Música Tradicional</h3>
            <p>Polcas, guaranias, chamamés y toda la música que nos representa</p>
          </div>
          <div className="feature-card">
            <h3>🎙️ En Vivo 24/7</h3>
            <p>Transmisión continua con la mejor selección musical paraguaya</p>
          </div>
          <div className="feature-card">
            <h3>🇵🇾 Cultura Guaraní</h3>
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
    </div>
  )
}

export default Home