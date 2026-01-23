import './Markets.css';
import { useEffect, useRef } from 'react';
import { getImagePath } from '../utils/imagePaths';

const Markets = () => {
  const clients = [
    {
      name: 'SKN Caribe Café',
      location: 'Pitalito, Huila - Avenida Circunvalar 9ª-26',
      description: 'Una de las comercializadoras más grandes de Colombia. Busca café con perfil winey (dulce, vinoso y afrutado) con factor 88-89, taza limpia, humedad 10-12%, granos negros avinagrados y brocados máximo 1%.',
      coverage: '80% del café comercializado en Huila'
    },
    {
      name: 'Carcafé LTDA',
      location: 'Calle 22ª sur #1e 11, Barrio Antonio Nariño, Pitalito',
      description: 'Empresa líder en compra y exportación de café colombiano. Atiende a los tostadores más importantes a nivel mundial. Exige factor 88-89, taza limpia, humedad 10-11%, granos negros avinagrados y brocados máximo 1%.',
      coverage: 'Cobertura en toda la geografía cafetera nacional'
    },
    {
      name: 'Caravela Coffee',
      location: 'Colombia, Ecuador, El Salvador, Guatemala, México, Nicaragua y Perú',
      description: 'Empresa verticalmente integrada especializada en cafés de muy alta calidad. Opera en 8 países de Latinoamérica y exporta a Australia, Europa y Norte América. Busca perfiles con fermentos prolongados.',
      coverage: 'Operaciones en 8 países de Latinoamérica'
    },
    {
      name: 'ECOM CCA S.A',
      location: 'Presencia en más de 28 países',
      description: 'Multinacional establecida en 1991, uno de los grandes comercializadores de soft commodities. Inició trayectoria desde 1849. Reconocida por su compromiso con la calidad y sostenibilidad.',
      coverage: 'Presencia internacional en 28+ países'
    },
    {
      name: 'Café Export Colombia',
      location: 'Calle 3 1B 35, Barrio Quinche, Pitalito, Huila',
      description: 'Empresa privada dedicada a la compra de café pergamino seco. Paga prima o excedente por calidad. Exige factor 86-88, taza limpia de óptima calidad. Con cobertura del mercado del 5%.',
      coverage: '5% de cobertura del mercado'
    }
  ];

  const targetMarkets = [
    { country: 'Estados Unidos', flag: '🇺🇸' },
    { country: 'Alemania', flag: '🇩🇪' },
    { country: 'Japón', flag: '🇯🇵' },
    { country: 'Francia', flag: '🇫🇷' },
    { country: 'Canadá', flag: '🇨🇦' },
    { country: 'España', flag: '🇪🇸' }
  ];

  const titleRef = useRef<HTMLHeadingElement>(null);
  const clientsSectionRef = useRef<HTMLDivElement>(null);
  const marketsSectionRef = useRef<HTMLDivElement>(null);
  const clientCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const marketCardsRef = useRef<(HTMLDivElement | null)[]>([]);

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
    if (clientsSectionRef.current) {
      clientsSectionRef.current.style.opacity = '0';
      observer.observe(clientsSectionRef.current);
    }
    if (marketsSectionRef.current) {
      marketsSectionRef.current.style.opacity = '0';
      observer.observe(marketsSectionRef.current);
    }
    clientCardsRef.current.forEach((card) => {
      if (card) {
        card.style.opacity = '0';
        observer.observe(card);
      }
    });
    marketCardsRef.current.forEach((card) => {
      if (card) {
        card.style.opacity = '0';
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="markets" id="markets">
      <div className="markets-image-section">
        <img src={getImagePath('escogiendo-cafe.jpeg')} alt="Proceso de selección y comercialización de café" />
      </div>
      <div className="markets-container">
        <h2 className="section-title" ref={titleRef}>Clientes y Mercados</h2>

        <div className="markets-content">
          <div 
            className="clients-section"
            ref={clientsSectionRef}
          >
            <h3>Clientes Actuales</h3>
            <p className="section-description">
              Trabajamos con los principales compradores y exportadores de café
              especial en Colombia
            </p>
            <div className="clients-grid">
              {clients.map((client, index) => (
                <div 
                  key={index} 
                  className="client-card"
                  ref={(el) => {
                    clientCardsRef.current[index] = el;
                  }}
                >
                  <h4 className="client-name">{client.name}</h4>
                  <p className="client-location">📍 {client.location}</p>
                  <p className="client-description">{client.description}</p>
                  <span className="client-coverage">{client.coverage}</span>
                </div>
              ))}
            </div>
          </div>

          <div 
            className="target-markets-section"
            ref={marketsSectionRef}
          >
            <h3>Mercados Objetivo</h3>
            <p className="section-description">
              Nuestro café especial llega a los mercados más exigentes del mundo
            </p>
            <div className="markets-grid">
              {targetMarkets.map((market, index) => (
                <div 
                  key={index} 
                  className="market-card"
                  ref={(el) => {
                    marketCardsRef.current[index] = el;
                  }}
                >
                  <div className="market-flag">{market.flag}</div>
                  <div className="market-name">{market.country}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Markets;
