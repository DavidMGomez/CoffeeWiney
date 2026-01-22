import './CoffeeProfile.css';

const CoffeeProfile = () => {
  const sensoryProfile = [
    { label: 'Acidez', value: 'Brillante', icon: '✨' },
    { label: 'Cuerpo', value: 'Medio', icon: '☕' },
    { label: 'Notas', value: 'Dulces', icon: '🍯' },
    { label: 'Aroma', value: 'Frutal acaramelado', icon: '🍑' },
    { label: 'Perfil', value: 'Vinoso', icon: '🍷' }
  ];

  const qualityParams = [
    { label: 'Factor de Rendimiento', value: '88-89' },
    { label: 'Humedad', value: '10-12%' },
    { label: 'Granos Defectuosos', value: 'Máx. 1%' },
    { label: 'Taza', value: 'Limpia' },
    { label: 'Puntaje SCAA', value: '≥ 88' }
  ];

  const varieties = [
    'Castillo Zona Sur',
    'Castillo Tambo',
    'Cenicafé 1',
    'Variedad Colombia'
  ];

  return (
    <section className="coffee-profile" id="coffee-profile">
      <div className="profile-container">
        <h2 className="section-title">Nuestro Café - Perfil Winey</h2>

        <div className="profile-intro">
          <p>
            Nuestro café especial se caracteriza por un perfil <strong>winey</strong> único:
            una experiencia sensorial que combina notas frutales, dulzor natural y un
            carácter avinado que lo distingue en el mercado internacional.
          </p>
        </div>

        <div className="profile-section">
          <h3>Perfil Sensorial</h3>
          <div className="sensory-grid">
            {sensoryProfile.map((item, index) => (
              <div key={index} className="sensory-card">
                <div className="sensory-icon">{item.icon}</div>
                <div className="sensory-label">{item.label}</div>
                <div className="sensory-value">{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="profile-section">
          <h3>Parámetros de Calidad</h3>
          <div className="quality-grid">
            {qualityParams.map((param, index) => (
              <div key={index} className="quality-item">
                <span className="quality-label">{param.label}</span>
                <span className="quality-value">{param.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="profile-section">
          <h3>Variedades Cultivadas</h3>
          <div className="varieties-grid">
            {varieties.map((variety, index) => (
              <div key={index} className="variety-card">
                {variety}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoffeeProfile;
