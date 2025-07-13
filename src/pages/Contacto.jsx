function Contacto() {
  return (
    <div className="contacto-page">
      <h1>Contacto</h1>
      
      <section className="contact-intro">
        <p>
          ¿Tenés alguna consulta, sugerencia o querés colaborar con Radio Cultural Paraguay? 
          ¡Nos encanta escuchar de nuestra audiencia!
        </p>
      </section>

      <div className="contact-content">
        <section className="contact-info">
          <h2>Información de Contacto</h2>
          
          <div className="contact-item">
            <h3>📧 Email</h3>
            <p>info@radioculturalpy.com</p>
            <p>programacion@radioculturalpy.com</p>
          </div>
          
          <div className="contact-item">
            <h3>📱 Redes Sociales</h3>
            <p>Facebook: @RadioCulturalParaguay</p>
            <p>Instagram: @radioculturalpy</p>
            <p>Twitter: @RadioCulturalPY</p>
          </div>
          
          <div className="contact-item">
            <h3>📍 Ubicación</h3>
            <p>Asunción, Paraguay</p>
          </div>
        </section>

        <section className="contact-form-section">
          <h2>Envianos un mensaje</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" name="name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Asunto</label>
              <select id="subject" name="subject">
                <option value="">Seleccioná un tema</option>
                <option value="sugerencia">Sugerencia musical</option>
                <option value="colaboracion">Colaboración</option>
                <option value="tecnico">Problema técnico</option>
                <option value="donacion">Consulta sobre donaciones</option>
                <option value="general">Consulta general</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Enviar mensaje</button>
          </form>
        </section>
      </div>

      <section className="faq">
        <h2>Preguntas Frecuentes</h2>
        
        <div className="faq-item">
          <h3>¿Cómo puedo sugerir música?</h3>
          <p>Podés enviarnos tus sugerencias por email o redes sociales. Siempre estamos buscando nuevas canciones paraguayas para incluir en nuestra programación.</p>
        </div>
        
        <div className="faq-item">
          <h3>¿Puedo colaborar como voluntario?</h3>
          <p>¡Por supuesto! Siempre necesitamos ayuda con la curaduría musical, difusión y tareas técnicas. Contactanos para conocer las oportunidades disponibles.</p>
        </div>
        
        <div className="faq-item">
          <h3>¿Transmiten programas en vivo?</h3>
          <p>Actualmente transmitimos música pregrabada las 24 horas. Estamos trabajando para incluir programas en vivo en el futuro.</p>
        </div>
      </section>
    </div>
  )
}

export default Contacto