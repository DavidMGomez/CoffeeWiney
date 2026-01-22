import './Features.css';

const Features = () => {
  const practices = [
    {
      title: 'Recuperación de Suelos',
      description: 'Restauramos la salud del suelo mediante prácticas orgánicas y conservación de materia orgánica',
      icon: '🌱'
    },
    {
      title: 'Reducción de Agroquímicos',
      description: 'Minimizamos el uso de químicos sintéticos, priorizando métodos naturales y orgánicos',
      icon: '🚫'
    },
    {
      title: 'Manejo Eficiente del Agua',
      description: 'Implementamos sistemas de riego sostenible y conservación de fuentes hídricas',
      icon: '💧'
    },
    {
      title: 'Conservación Ambiental',
      description: 'Protegemos la biodiversidad y los ecosistemas locales del Macizo Colombiano',
      icon: '🌿'
    },
    {
      title: 'Cero Deforestación',
      description: 'Compromiso absoluto con la preservación del bosque y áreas naturales',
      icon: '🌳'
    },
    {
      title: 'Reincorporación de Pulpa',
      description: 'Devolvemos la pulpa del café al suelo como abono orgánico, cerrando el ciclo de nutrientes',
      icon: '♻️'
    }
  ];

  return (
    <section className="features" id="regenerative">
      <div className="features-intro">
        <h2 className="features-title">Agricultura Regenerativa</h2>
        <p className="features-subtitle">
          Implementamos Buenas Prácticas Agrícolas enfocadas en restaurar el suelo,
          reducir la huella de carbono y proteger los recursos naturales, garantizando
          sostenibilidad económica y ambiental.
        </p>
      </div>

      <div className="features-grid">
        {practices.map((practice, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{practice.icon}</div>
            <h3>{practice.title}</h3>
            <p>{practice.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
