import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2>Quiénes Somos</h2>

        <div className="about-section">
          <h3>Historia del Proyecto</h3>
          <p>
            Coffee Winey Varsovia S.A.S. es un emprendimiento ubicado en <strong>Isnos, Huila</strong>,
            en el corazón del Macizo Colombiano. Nos especializamos en la producción de café especial
            con un perfil winey único, resultado de más de 6 años de experiencia en investigación
            de fermentaciones.
          </p>
        </div>

        <div className="about-section">
          <h3>Nuestra Experiencia</h3>
          <ul>
            <li>Más de 6 años de investigación en procesos de fermentación del café</li>
            <li>Producción de café especial con perfil winey diferenciado</li>
            <li>Implementación de agricultura regenerativa</li>
            <li>Compromiso con la sostenibilidad ambiental</li>
          </ul>
        </div>

        <div className="about-section">
          <h3>Información Institucional</h3>
          <div className="info-grid">
            <div className="info-item">
              <strong>Subsector:</strong>
              <p>Cultivo de café especial</p>
            </div>
            <div className="info-item">
              <strong>Origen:</strong>
              <p>Proyecto presentado al Fondo Emprender</p>
            </div>
            <div className="info-item">
              <strong>Apoyo institucional:</strong>
              <p>Centro de formación SENA</p>
            </div>
            <div className="info-item">
              <strong>Ubicación:</strong>
              <p>Isnos, Huila - Macizo Colombiano</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
