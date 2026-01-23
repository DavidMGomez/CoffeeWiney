import './Innovation.css';
import { useEffect, useRef } from 'react';

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
      description: 'Seleccionadora con capacidad de 1000 kg/hora para garantizar máxima calidad y eficiencia en el proceso',
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
    <section className="innovation" id="innovation">
      <div className="innovation-container">
        <h2 className="section-title" ref={titleRef}>Innovación Tecnológica</h2>
        <p className="innovation-intro" ref={introRef}>
          Combinamos tradición cafetera con tecnología de vanguardia para producir
          café especial de clase mundial con estándares internacionales.
        </p>

        <div className="innovation-image-section">
          <img src="/cafe.jpeg" alt="Granos de café especial seleccionados" />
        </div>

        <div className="innovation-grid">
          {innovations.map((item, index) => (
            <div 
              key={index} 
              className="innovation-card"
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
            >
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
