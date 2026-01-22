import './Markets.css';

const Markets = () => {
  const clients = [
    'SKN Caribe Café',
    'Caravela Coffee',
    'Carcafé',
    'ECOM',
    'Café Export Colombia',
    'Compra Café Gómez'
  ];

  const targetMarkets = [
    { country: 'Estados Unidos', flag: '🇺🇸' },
    { country: 'Alemania', flag: '🇩🇪' },
    { country: 'Japón', flag: '🇯🇵' },
    { country: 'Francia', flag: '🇫🇷' },
    { country: 'Canadá', flag: '🇨🇦' },
    { country: 'España', flag: '🇪🇸' }
  ];

  return (
    <section className="markets" id="markets">
      <div className="markets-container">
        <h2 className="section-title">Clientes y Mercados</h2>

        <div className="markets-content">
          <div className="clients-section">
            <h3>Clientes Actuales</h3>
            <p className="section-description">
              Trabajamos con los principales compradores y exportadores de café
              especial en Colombia
            </p>
            <div className="clients-grid">
              {clients.map((client, index) => (
                <div key={index} className="client-card">
                  {client}
                </div>
              ))}
            </div>
          </div>

          <div className="target-markets-section">
            <h3>Mercados Objetivo</h3>
            <p className="section-description">
              Nuestro café especial llega a los mercados más exigentes del mundo
            </p>
            <div className="markets-grid">
              {targetMarkets.map((market, index) => (
                <div key={index} className="market-card">
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
