function Programacion() {
  const horarios = [
    { hora: "00:00 - 05:00", programa: "Noches de Purahéi", descripcion: "Música instrumental y cantada para la calma nocturna." },
    { hora: "05:00 - 07:00", programa: "Amanecer en el Campo", descripcion: "Las primeras polcas y guaranias para empezar el día con energía." },
    { hora: "07:00 - 10:00", programa: "La Mañana Cultural", descripcion: "Un viaje por los clásicos del folclore, con datos históricos y culturales." },
    { hora: "10:00 - 13:00", programa: "Corazón de Guarania", descripcion: "Las guaranias más emotivas y las historias detrás de sus letras." },
    { hora: "13:00 - 16:00", programa: "Siesta de Chamamé y Polka", descripcion: "Ritmos alegres para levantar el espíritu de la tarde." },
    { hora: "16:00 - 19:00", programa: "Atardecer Paraguayo", descripcion: "Un recorrido por los paisajes sonoros del país, desde el Chaco hasta el Paraná." },
    { hora: "19:00 - 21:00", programa: "Joyas del Folclore", descripcion: "Las grabaciones históricas y los artistas que marcaron una época." },
    { hora: "21:00 - 00:00", programa: "Serenata bajo las Estrellas", descripcion: "Las canciones más románticas y poéticas para cerrar la jornada." }
  ]

  const diasEspeciales = [
    { dia: "Lunes", especial: "Lunes de Leyendas", descripcion: "Homenaje a los grandes compositores como Emiliano R. Fernández y Agustín Barboza." },
    { dia: "Martes", especial: "Martes de Arpas", descripcion: "El arpa paraguaya como protagonista, con los mejores intérpretes." },
    { dia: "Miércoles", especial: "Miércoles de Frontera", descripcion: "Explorando el chamamé y la música de la región del Litoral." },
    { dia: "Jueves", especial: "Jueves de Voces Nuevas", descripcion: "Un espacio para los talentos emergentes y la polka fusión." },
    { dia: "Viernes", especial: "Viernes de Peña", descripcion: "La música más festiva para empezar el fin de semana, con polkas y galopas." },
    { dia: "Sábado", especial: "Sábado de Clásicos", descripcion: "Un viaje por las canciones que todo paraguayo lleva en el corazón." },
    { dia: "Domingo", especial: "Domingo en Familia", descripcion: "Música para compartir, con historias, anécdotas y la participación de la audiencia." }
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