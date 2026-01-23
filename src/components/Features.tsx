import './Features.css';
import { useEffect, useRef } from 'react';

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

  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);

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

    if (titleRef.current) observer.observe(titleRef.current);
    cardsRef.current.forEach((card) => {
      if (card) {
        card.style.opacity = '0';
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="features" id="regenerative">
      <div className="features-image-section">
        <img src="/paisajecafetero.jpeg" alt="Paisaje cafetero del Macizo Colombiano" />
      </div>
      <div className="features-intro">
        <h2 className="features-title" ref={titleRef} style={{ opacity: 0 }}>Agricultura Regenerativa</h2>
        <p className="features-subtitle">
          Implementamos Buenas Prácticas Agrícolas enfocadas en restaurar el suelo,
          reducir la huella de carbono y proteger los recursos naturales, garantizando
          sostenibilidad económica y ambiental.
        </p>
        <p className="features-intro-text">
          La agricultura regenerativa es un enfoque integral que va más allá de la sostenibilidad, 
          restaurando activamente la salud del ecosistema mientras producimos café de la más alta calidad.
        </p>
      </div>

      <div className="features-grid">
        {practices.map((practice, index) => (
          <div 
            key={index} 
            className="feature-card"
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
          >
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
