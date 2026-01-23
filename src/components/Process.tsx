import './Process.css';
import { useEffect, useRef } from 'react';

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
      description: 'Procesos controlados de fermentación prolongada',
      details: [
        'Control aeróbico y anaeróbico en cereza y mucílago',
        'Duración: 24-60 horas según perfil deseado',
        'Medición constante de pH y temperatura',
        'Desarrollo del perfil winey (dulce, vinoso y afrutado)',
        'Más de 6 años de investigación en fermentaciones',
        'Protocolos científicos para garantizar consistencia'
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
      title: 'Selección y Empaque',
      icon: '📦',
      description: 'Selección óptica y conservación del aroma y calidad',
      details: [
        'Seleccionadora con capacidad 1000 kg/hora',
        'Control de humedad final (10-12%)',
        'Sacos de fique biodegradables',
        'Conservación de aroma y perfil winey',
        'Trazabilidad completa desde finca hasta taza',
        'Control de granos defectuosos (máx. 1%)'
      ]
    }
  ];

  const titleRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('fade-in-up');
            }, index * 150);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      titleRef.current.style.opacity = '0';
      observer.observe(titleRef.current);
    }
    if (introRef.current) {
      introRef.current.style.opacity = '0';
      observer.observe(introRef.current);
    }
    cardsRef.current.forEach((card) => {
      if (card) {
        card.style.opacity = '0';
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="process" id="process">
      <div className="process-container">
        <h2 className="section-title" ref={titleRef}>Nuestro Proceso Productivo</h2>
        <p className="process-intro" ref={introRef}>
          Cada etapa de nuestro proceso está diseñada para desarrollar y preservar
          el perfil winey único de nuestro café especial.
        </p>

        <div className="process-image-section">
          <img src="/escogiendo-cafe.jpeg" alt="Proceso de selección de café" />
        </div>

        <div className="process-grid">
          {processSteps.map((step, index) => (
            <div 
              key={index} 
              className="process-card"
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
            >
              <div className="process-card-header">
                <div className="process-number">{index + 1}</div>
                <div className="process-icon">{step.icon}</div>
              </div>
              <div className="process-card-content">
                <h3 className="process-title">{step.title}</h3>
                <p className="process-description">{step.description}</p>
                <ul className="process-details">
                  {step.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
