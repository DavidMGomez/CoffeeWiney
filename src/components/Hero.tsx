import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Coffee Winey Varsovia S.A.S.</h1>
        <p className="hero-subtitle">
          Café especial del Macizo Colombiano con agricultura regenerativa
        </p>
        <p className="hero-description">
          Producimos café especial con perfil winey —frutal, dulce y avinado— mediante
          procesos sostenibles y agricultura regenerativa en Isnos, Huila.
        </p>
        <div className="cta-buttons">
          <button className="cta-button primary" onClick={() => scrollToSection('coffee-profile')}>
            Conoce nuestro café
          </button>
          <button className="cta-button secondary" onClick={() => scrollToSection('process')}>
            Nuestro proceso
          </button>
          <button className="cta-button tertiary" onClick={() => scrollToSection('proyecto-sena')}>
            Proyecto SENA
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
