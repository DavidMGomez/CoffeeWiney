import './SenaProject.css';
import { useEffect, useRef } from 'react';
import { getImagePath } from '../utils/imagePaths';

const SenaProject = () => {
  const projectHighlights = [
    {
      title: 'Objetivo del Proyecto',
      description: 'Consolidar una empresa productora de café especial con perfil winey, implementando agricultura regenerativa y procesos de fermentación controlada para acceder a mercados internacionales de alto valor.',
      icon: '🎯'
    },
    {
      title: 'Diferencial Competitivo',
      description: 'Perfil winey único en el mercado, resultado de más de 6 años de investigación en fermentaciones, combinado con prácticas de agricultura regenerativa y trazabilidad completa.',
      icon: '⭐'
    },
    {
      title: 'Impacto Ambiental',
      description: 'Recuperación de suelos, cero deforestación, reducción de agroquímicos y reincorporación de pulpa al suelo. Agricultura regenerativa que restaura ecosistemas.',
      icon: '🌍'
    },
    {
      title: 'Impacto Social',
      description: 'Generación de empleo rural digno, transferencia de conocimiento a productores locales y fortalecimiento de la economía cafetera del Macizo Colombiano.',
      icon: '👥'
    }
  ];

  const metrics = [
    { label: 'Puntaje SCAA', value: '≥ 88 puntos' },
    { label: 'Factor de Rendimiento', value: '88-89' },
    { label: 'Humedad', value: '10-12%' },
    { label: 'Granos Defectuosos', value: 'Máx. 1%' },
    { label: 'Taza', value: 'Limpia' },
    { label: 'Perfil Winey', value: 'Certificado' }
  ];

  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const highlightsRef = useRef<(HTMLDivElement | null)[]>([]);
  const metricsRef = useRef<HTMLDivElement>(null);
  const supportRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('fade-in-up');
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      titleRef.current.style.opacity = '0';
      observer.observe(titleRef.current);
    }
    if (subtitleRef.current) {
      subtitleRef.current.style.opacity = '0';
      observer.observe(subtitleRef.current);
    }
    highlightsRef.current.forEach((card) => {
      if (card) {
        card.style.opacity = '0';
        observer.observe(card);
      }
    });
    if (metricsRef.current) {
      metricsRef.current.style.opacity = '0';
      observer.observe(metricsRef.current);
    }
    if (supportRef.current) {
      supportRef.current.style.opacity = '0';
      observer.observe(supportRef.current);
    }
    if (locationRef.current) {
      locationRef.current.style.opacity = '0';
      observer.observe(locationRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="sena-project" id="proyecto-sena">
      <div className="sena-container">
        <div className="sena-header">
          <img
            className="sena-logo"
            src={getImagePath('sena-fondo-emprender-2024-seeklogo.png')}
            alt="Fondo Emprender SENA"
          />
          <h2 className="section-title" ref={titleRef}>Proyecto Empresarial - Fondo Emprender SENA</h2>
          <p className="sena-subtitle" ref={subtitleRef}>
            Coffee Winey Varsovia S.A.S. - Producción de Café Especial con Agricultura Regenerativa
          </p>
        </div>

        <div className="project-highlights">
          {projectHighlights.map((highlight, index) => (
            <div 
              key={index} 
              className="highlight-card"
              ref={(el) => {
                highlightsRef.current[index] = el;
              }}
            >
              <div className="highlight-icon">{highlight.icon}</div>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </div>
          ))}
        </div>

        <div 
          className="metrics-section"
          ref={metricsRef}
        >
          <h3>Estándares de Calidad del Proyecto</h3>
          <div className="metrics-grid">
            {metrics.map((metric, index) => (
              <div key={index} className="metric-card">
                <div className="metric-label">{metric.label}</div>
                <div className="metric-value">{metric.value}</div>
              </div>
            ))}
          </div>
          <div className="investment-details">
            <h4>Equipamiento y Tecnología</h4>
            <div className="investment-grid">
              <div className="investment-item">
                <strong>Seleccionadora Óptica:</strong>
                <span>Capacidad 1000 kg/hora</span>
                <small>Tecnología de vanguardia para máxima calidad</small>
              </div>
              <div className="investment-item">
                <strong>Procesos de Fermentación:</strong>
                <span>Controlado y Prolongado</span>
                <small>Más de 6 años de investigación</small>
              </div>
              <div className="investment-item">
                <strong>Agricultura Regenerativa:</strong>
                <span>Buenas Prácticas Agrícolas</span>
                <small>Sostenibilidad y conservación ambiental</small>
              </div>
            </div>
          </div>
        </div>

        <div 
          className="support-section"
          ref={supportRef}
        >
          <h3>Apoyo Institucional</h3>
          <div className="support-content">
            <div className="support-item">
              <div className="support-icon">🏛️</div>
              <h4>Fondo Emprender</h4>
              <p>Financiación y acompañamiento para el desarrollo empresarial. Apoyo en la consolidación del proyecto desde su creación en marzo 2024.</p>
            </div>
            <div className="support-item">
              <div className="support-icon">📚</div>
              <h4>Centro de Gestión y Desarrollo Sostenible Surcolombiano</h4>
              <p>SENA - Huila. Formación técnica, fortalecimiento de capacidades y apoyo en el desarrollo del proyecto empresarial.</p>
            </div>
            <div className="support-item">
              <div className="support-icon">🤝</div>
              <h4>Alianzas Estratégicas</h4>
              <p>Red consolidada con SKN Caribe Café, Carcafé, Caravela Coffee, ECOM y Café Export Colombia. Compradores y exportadores de café especial de alto valor.</p>
            </div>
          </div>
        </div>

        <div 
          className="location-section"
          ref={locationRef}
        >
          <h3>Ubicación Estratégica</h3>
          <div className="location-content">
            <div className="location-info">
              <p><strong>Finca:</strong> Varsovia</p>
              <p><strong>Municipio:</strong> Isnos</p>
              <p><strong>Departamento:</strong> Huila</p>
              <p><strong>Región:</strong> Macizo Colombiano</p>
              <p><strong>País:</strong> Colombia 🇨🇴</p>
            </div>
            <div className="location-description">
              <p>
                El Macizo Colombiano es reconocido mundialmente por la calidad excepcional
                de su café. Nuestra ubicación en Isnos, Huila, nos proporciona condiciones
                ideales de altitud, clima y suelo para producir café especial de clase mundial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SenaProject;
