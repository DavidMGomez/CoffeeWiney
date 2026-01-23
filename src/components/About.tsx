import './About.css';
import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="about-content">
        <h2 ref={titleRef} style={{ opacity: 0 }}>Quiénes Somos</h2>

        <div className="about-main">
          <div className="about-text">
            <div 
              className="about-section"
              ref={(el) => {
                if (el) sectionsRef.current[0] = el;
              }}
              style={{ opacity: 0 }}
            >
              <h3>Historia del Proyecto</h3>
              <p>
                Coffee Winey Varsovia S.A.S. es un <strong>emprendimiento apoyado por el SENA</strong>, 
                ubicado en <strong>Isnos, Huila</strong>, en el corazón del Macizo Colombiano. 
                Nos especializamos en la <strong>producción de café especial</strong> con un perfil 
                winey único, resultado de <strong>más de 6 años de experiencia en investigación 
                de fermentaciones</strong>.
              </p>
              <p>
                El proyecto fue creado el <strong>24 de marzo de 2024</strong> como parte del 
                <strong> Fondo Emprender SENA</strong>, con el objetivo de consolidar una empresa 
                productora de café especial que implemente agricultura regenerativa y procesos de 
                fermentación controlada.
              </p>
            </div>

            <div 
              className="about-section"
              ref={(el) => {
                if (el) sectionsRef.current[1] = el;
              }}
              style={{ opacity: 0 }}
            >
              <h3>Nuestra Experiencia</h3>
              <ul>
                <li>Más de 6 años de investigación en procesos de fermentación del café</li>
                <li>Producción de café especial con perfil winey diferenciado</li>
                <li>Implementación de agricultura regenerativa</li>
                <li>Compromiso con la sostenibilidad ambiental</li>
              </ul>
            </div>
          </div>

          <div 
            className="about-image"
            ref={(el) => {
              if (el) sectionsRef.current[2] = el;
            }}
            style={{ opacity: 0 }}
          >
            <img src="/finca.jpeg" alt="Finca de café en Isnos, Huila" onError={(e) => { console.error('Error loading image:', e); }} />
          </div>
        </div>

        <div 
          className="institutional-info"
          ref={(el) => {
            if (el) sectionsRef.current[3] = el;
          }}
          style={{ opacity: 0 }}
        >
          <h3 className="institutional-title">Información Institucional</h3>
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">🌱</div>
              <div className="info-content">
                <strong>Subsector</strong>
                <p>Cultivo de café</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">📅</div>
              <div className="info-content">
                <strong>Fecha de Creación</strong>
                <p>24 de marzo de 2024</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">🏛️</div>
              <div className="info-content">
                <strong>Origen</strong>
                <p>Proyecto presentado al Fondo Emprender</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">📚</div>
              <div className="info-content">
                <strong>Centro de Formación</strong>
                <p>SENA - Centro de Gestión y Desarrollo Sostenible Surcolombiano (Huila)</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <strong>Ubicación</strong>
                <p>Isnos, Huila - Macizo Colombiano</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
