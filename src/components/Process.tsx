import './Process.css';

const Process = () => {
  const processSteps = [
    {
      title: 'Recolección',
      icon: '🌾',
      description: 'Selección cuidadosa en cereza',
      details: [
        'Solo granos maduros',
        'Recolección manual selectiva',
        'Control de calidad en campo',
        'Separación inmediata de defectos'
      ]
    },
    {
      title: 'Fermentación',
      icon: '🧪',
      description: 'Procesos controlados de fermentación',
      details: [
        'Control aeróbico y anaeróbico',
        'Duración: 24-60 horas',
        'Medición constante de pH y temperatura',
        'Desarrollo del perfil winey'
      ]
    },
    {
      title: 'Secado',
      icon: '☀️',
      description: 'Secado controlado para preservar calidad',
      details: [
        'Espesor controlado de capa',
        'Aireación constante',
        'Revolvimiento diario',
        'Monitoreo de humedad'
      ]
    },
    {
      title: 'Empaque',
      icon: '📦',
      description: 'Conservación del aroma y calidad',
      details: [
        'Sacos de fique biodegradables',
        'Control de humedad final',
        'Conservación de aroma',
        'Trazabilidad completa'
      ]
    }
  ];

  return (
    <section className="process" id="process">
      <div className="process-container">
        <h2 className="section-title">Nuestro Proceso Productivo</h2>
        <p className="process-intro">
          Cada etapa de nuestro proceso está diseñada para desarrollar y preservar
          el perfil winey único de nuestro café especial.
        </p>

        <div className="process-grid">
          {processSteps.map((step, index) => (
            <div key={index} className="process-card">
              <div className="process-number">{index + 1}</div>
              <div className="process-icon">{step.icon}</div>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-description">{step.description}</p>
              <ul className="process-details">
                {step.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
