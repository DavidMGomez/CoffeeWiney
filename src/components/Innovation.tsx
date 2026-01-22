import './Innovation.css';

const Innovation = () => {
  const innovations = [
    {
      title: 'Variedades Resistentes',
      description: 'Cultivo de variedades de café desarrolladas para resistir plagas y cambio climático',
      icon: '🧬'
    },
    {
      title: 'Procesos Diferenciados',
      description: 'Técnicas especializadas de fermentación que desarrollan el perfil winey único',
      icon: '⚗️'
    },
    {
      title: 'Selección Óptica',
      description: 'Tecnología de selección óptica de granos para máxima calidad',
      icon: '👁️'
    },
    {
      title: 'Control de Defectos',
      description: 'Sistema riguroso de control de calidad en cada etapa del proceso',
      icon: '🔍'
    },
    {
      title: 'Trazabilidad',
      description: 'Tecnología para seguimiento completo desde la finca hasta la taza',
      icon: '📱'
    },
    {
      title: 'Estandarización Winey',
      description: 'Protocolos científicos para garantizar consistencia en el perfil winey',
      icon: '📊'
    }
  ];

  return (
    <section className="innovation" id="innovation">
      <div className="innovation-container">
        <h2 className="section-title">Innovación Tecnológica</h2>
        <p className="innovation-intro">
          Combinamos tradición cafetera con tecnología de vanguardia para producir
          café especial de clase mundial con estándares internacionales.
        </p>

        <div className="innovation-grid">
          {innovations.map((item, index) => (
            <div key={index} className="innovation-card">
              <div className="innovation-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Innovation;
