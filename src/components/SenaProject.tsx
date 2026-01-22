import './SenaProject.css';

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
    { label: 'Producción Anual Proyectada', value: 'Variable según consolidación' },
    { label: 'Volúmenes Objetivo', value: 'Café especial de alta calidad' },
    { label: 'Puntaje SCAA', value: '≥ 88 puntos' },
    { label: 'Mercados', value: '6 países objetivo' }
  ];

  return (
    <section className="sena-project" id="proyecto-sena">
      <div className="sena-container">
        <div className="sena-header">
          <h2 className="section-title">Proyecto Empresarial - Fondo Emprender SENA</h2>
          <p className="sena-subtitle">
            Coffee Winey Varsovia S.A.S. - Producción de Café Especial con Agricultura Regenerativa
          </p>
        </div>

        <div className="project-highlights">
          {projectHighlights.map((highlight, index) => (
            <div key={index} className="highlight-card">
              <div className="highlight-icon">{highlight.icon}</div>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </div>
          ))}
        </div>

        <div className="metrics-section">
          <h3>Métricas del Proyecto</h3>
          <div className="metrics-grid">
            {metrics.map((metric, index) => (
              <div key={index} className="metric-card">
                <div className="metric-label">{metric.label}</div>
                <div className="metric-value">{metric.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="support-section">
          <h3>Apoyo Institucional</h3>
          <div className="support-content">
            <div className="support-item">
              <div className="support-icon">🏛️</div>
              <h4>Fondo Emprender</h4>
              <p>Financiación y acompañamiento para el desarrollo empresarial</p>
            </div>
            <div className="support-item">
              <div className="support-icon">📚</div>
              <h4>SENA</h4>
              <p>Formación técnica y fortalecimiento de capacidades</p>
            </div>
            <div className="support-item">
              <div className="support-icon">🤝</div>
              <h4>Alianzas Estratégicas</h4>
              <p>Red de compradores y exportadores de café especial</p>
            </div>
          </div>
        </div>

        <div className="location-section">
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
