function Donaciones() {
  return (
    <div className="donaciones-page">
      <h1>Apoyá Radio Cultural Paraguay</h1>
      
      <section className="donation-intro">
        <p>
          Radio Cultural Paraguay es un proyecto independiente que busca preservar 
          y difundir nuestra cultura musical. Tu apoyo nos ayuda a mantener la radio 
          funcionando y a seguir compartiendo la música paraguaya con el mundo.
        </p>
      </section>

      <section className="donation-options">
        <h2>Formas de Apoyo</h2>
        
        <div className="donation-cards">
          <div className="donation-card">
            <h3>Donación Única</h3>
            <p>Realizá una contribución por el monto que desees</p>
            <div className="amount-buttons">
              <button className="amount-btn">$5 USD</button>
              <button className="amount-btn">$10 USD</button>
              <button className="amount-btn">$25 USD</button>
              <button className="amount-btn">Otro monto</button>
            </div>
          </div>
          
          <div className="donation-card featured">
            <h3>Apoyo Mensual</h3>
            <p>Convertite en un mecenas cultural</p>
            <div className="monthly-options">
              <div className="monthly-option">
                <strong>$3 USD/mes</strong>
                <span>Amigo Cultural</span>
              </div>
              <div className="monthly-option">
                <strong>$10 USD/mes</strong>
                <span>Guardián de la Cultura</span>
              </div>
              <div className="monthly-option">
                <strong>$25 USD/mes</strong>
                <span>Embajador Cultural</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="donation-info">
        <h2>¿Cómo se usan las donaciones?</h2>
        <ul>
          <li>🎵 Adquisición de música y derechos de transmisión</li>
          <li>💻 Mantenimiento de servidores y hosting</li>
          <li>🎙️ Equipamiento técnico para mejorar la calidad</li>
          <li>📱 Desarrollo de nuevas funcionalidades</li>
          <li>🌍 Expansión del alcance cultural</li>
        </ul>
      </section>

      <section className="contact-donation">
        <h2>Otras formas de colaborar</h2>
        <p>
          También podés colaborar compartiendo nuestra música, sugiriendo canciones 
          o ayudándonos a difundir Radio Cultural Paraguay en tus redes sociales.
        </p>
        <p>
          Para donaciones desde Paraguay o consultas especiales, 
          <a href="/contacto"> contactanos directamente</a>.
        </p>
      </section>
    </div>
  )
}

export default Donaciones