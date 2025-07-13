function Programacion() {
  const horarios = [
    { hora: "00:00 - 06:00", programa: "Madrugada Cultural", descripcion: "Música suave paraguaya para acompañar la noche" },
    { hora: "06:00 - 09:00", programa: "Amanecer Guaraní", descripcion: "Comenzá el día con las mejores polcas y guaranias" },
    { hora: "09:00 - 12:00", programa: "Mañana Folclórica", descripcion: "Lo mejor del folclore paraguayo" },
    { hora: "12:00 - 15:00", programa: "Mediodía Musical", descripcion: "Clásicos paraguayos para el almuerzo" },
    { hora: "15:00 - 18:00", programa: "Tarde Tradicional", descripcion: "Música tradicional y regional" },
    { hora: "18:00 - 21:00", programa: "Noche Cultural", descripcion: "Los grandes éxitos de la música paraguaya" },
    { hora: "21:00 - 00:00", programa: "Serenata Nocturna", descripcion: "Baladas y música romántica paraguaya" }
  ]

  const diasEspeciales = [
    { dia: "Lunes", especial: "Especial Eladio Martínez", descripcion: "Dedicado al gran compositor paraguayo" },
    { dia: "Martes", especial: "Voces Femeninas", descripcion: "Homenaje a las cantantes paraguayas" },
    { dia: "Miércoles", especial: "Folclore Regional", descripcion: "Música de todo el interior del país" },
    { dia: "Jueves", especial: "Arpa Paraguaya", descripcion: "El instrumento nacional en primer plano" },
    { dia: "Viernes", especial: "Nuevos Talentos", descripcion: "Artistas emergentes de la música paraguaya" },
    { dia: "Sábado", especial: "Clásicos Eternos", descripcion: "Los grandes hits de todos los tiempos" },
    { dia: "Domingo", especial: "Familia Cultural", descripcion: "Música para toda la familia paraguaya" }
  ]

  return (
    <div className="programacion-page">
      <h1>Programación</h1>
      
      <section className="programming-intro">
        <p>
          Conocé nuestra grilla de programación. Radio Cultural Paraguay transmite 
          las 24 horas con la mejor selección de música paraguaya, organizada 
          cuidadosamente para cada momento del día.
        </p>
      </section>

      <section className="horarios">
        <h2>Programación Diaria</h2>
        <div className="schedule-grid">
          {horarios.map((slot, index) => (
            <div key={index} className="schedule-item">
              <div className="time-slot">{slot.hora}</div>
              <div className="program-info">
                <h3>{slot.programa}</h3>
                <p>{slot.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="dias-especiales">
        <h2>Programación Especial por Día</h2>
        <div className="special-days-grid">
          {diasEspeciales.map((dia, index) => (
            <div key={index} className="special-day-card">
              <h3>{dia.dia}</h3>
              <h4>{dia.especial}</h4>
              <p>{dia.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="music-info">
        <h2>Sobre Nuestra Música</h2>
        <div className="music-categories">
          <div className="category">
            <h3>🎵 Géneros que transmitimos</h3>
            <ul>
              <li>Polcas paraguayas</li>
              <li>Guaranias</li>
              <li>Chamamés</li>
              <li>Música folclórica regional</li>
              <li>Canciones tradicionales</li>
              <li>Música instrumental paraguaya</li>
            </ul>
          </div>
          
          <div className="category">
            <h3>🎤 Artistas destacados</h3>
            <ul>
              <li>Eladio Martínez</li>
              <li>Luis Alberto del Paraná</li>
              <li>Los Paraguayos</li>
              <li>Dúo Vera-Lucero</li>
              <li>Ramón Ayala</li>
              <li>Y muchos más...</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="live-note">
        <div className="live-indicator-large">
          <span className="live-dot-large"></span>
          <div>
            <h3>¡Estamos en vivo!</h3>
            <p>Escuchá ahora la mejor música paraguaya las 24 horas del día</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Programacion