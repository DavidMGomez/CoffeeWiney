import './Features.css';

const Features = () => {
  const features = [
    {
      title: 'Innovación',
      description: 'Soluciones tecnológicas de vanguardia para tu negocio',
      icon: '💡'
    },
    {
      title: 'Escalabilidad',
      description: 'Crece sin límites con nuestra infraestructura flexible',
      icon: '📈'
    },
    {
      title: 'Soporte 24/7',
      description: 'Estamos contigo en cada paso de tu emprendimiento',
      icon: '🤝'
    }
  ];

  return (
    <section className="features">
      <h2 className="features-title">¿Por qué elegirnos?</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
