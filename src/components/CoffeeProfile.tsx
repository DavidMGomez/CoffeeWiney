import './CoffeeProfile.css';
import { useEffect, useRef } from 'react';
import { getImagePath } from '../utils/imagePaths';

const CoffeeProfile = () => {
  const sensoryProfile = [
    { label: 'Acidez', value: 'Brillante', icon: '✨' },
    { label: 'Cuerpo', value: 'Medio', icon: '☕' },
    { label: 'Notas', value: 'Dulces', icon: '🍯' },
    { label: 'Aroma', value: 'Frutal acaramelado', icon: '🍑' },
    { label: 'Perfil', value: 'Vinoso', icon: '🍷' }
  ];

  const qualityParams = [
    { label: 'Factor de Rendimiento', value: '88-89', requirement: 'SKN Caribe Café, Carcafé' },
    { label: 'Humedad', value: '10-12%', requirement: 'SKN Caribe Café (10-12%), Carcafé (10-11%)' },
    { label: 'Granos Defectuosos', value: 'Máx. 1%', requirement: 'Granos negros, avinagrados y brocados' },
    { label: 'Taza', value: 'Limpia', requirement: 'Óptima calidad organoléptica' },
    { label: 'Puntaje SCAA', value: '≥ 88', requirement: 'Café especial de alta calidad' },
    { label: 'Perfil Winey', value: 'Certificado', requirement: 'Fermentaciones prolongadas controladas' }
  ];

  const varieties = [
    'Castillo Zona Sur',
    'Castillo Tambo',
    'Cenicafé 1',
    'Variedad Colombia'
  ];

  const titleRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);
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
    sectionsRef.current.forEach((section) => {
      if (section) {
        section.style.opacity = '0';
        observer.observe(section);
      }
    });
    cardsRef.current.forEach((card) => {
      if (card) {
        card.style.opacity = '0';
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="coffee-profile" id="coffee-profile">
      <div className="profile-container">
        <h2 className="section-title" ref={titleRef}>Nuestro Café - Perfil Winey</h2>

        <div className="profile-main">
          <div className="profile-intro" ref={introRef}>
            <p>
              Nuestro café especial se caracteriza por un perfil <strong>winey</strong> único:
              una experiencia sensorial que combina notas frutales, dulzor natural y un
              carácter avinado que lo distingue en el mercado internacional.
            </p>
          </div>
          <div className="profile-image">
            <img src={getImagePath('cafe.jpeg')} alt="Granos de café especial" />
          </div>
        </div>

        <div 
          className="profile-section"
          ref={(el) => {
            if (el) sectionsRef.current[0] = el;
          }}
        >
          <h3>Perfil Sensorial</h3>
          <div className="sensory-grid">
            {sensoryProfile.map((item, index) => (
              <div 
                key={index} 
                className="sensory-card"
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
              >
                <div className="sensory-icon">{item.icon}</div>
                <div className="sensory-label">{item.label}</div>
                <div className="sensory-value">{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div 
          className="profile-section"
          ref={(el) => {
            if (el) sectionsRef.current[1] = el;
          }}
        >
          <h3>Parámetros de Calidad</h3>
          <div className="quality-grid">
            {qualityParams.map((param, index) => (
              <div 
                key={index} 
                className="quality-item"
                ref={(el) => {
                  cardsRef.current[sensoryProfile.length + index] = el;
                }}
              >
                <span className="quality-label">{param.label}</span>
                <span className="quality-value">{param.value}</span>
                {param.requirement && (
                  <span className="quality-requirement">{param.requirement}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div 
          className="profile-section"
          ref={(el) => {
            if (el) sectionsRef.current[2] = el;
          }}
        >
          <h3>Variedades Cultivadas</h3>
          <div className="varieties-grid">
            {varieties.map((variety, index) => (
              <div 
                key={index} 
                className="variety-card"
                ref={(el) => {
                  cardsRef.current[sensoryProfile.length + qualityParams.length + index] = el;
                }}
              >
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
