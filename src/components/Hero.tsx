import './Hero.css';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger animations on mount
    if (titleRef.current) {
      titleRef.current.style.opacity = '0';
      setTimeout(() => {
        titleRef.current?.classList.add('fade-in-up');
      }, 100);
    }
    if (subtitleRef.current) {
      subtitleRef.current.style.opacity = '0';
      setTimeout(() => {
        subtitleRef.current?.classList.add('fade-in-up');
      }, 300);
    }
    if (descriptionRef.current) {
      descriptionRef.current.style.opacity = '0';
      setTimeout(() => {
        descriptionRef.current?.classList.add('fade-in-up');
      }, 500);
    }
    if (buttonsRef.current) {
      buttonsRef.current.style.opacity = '0';
      setTimeout(() => {
        buttonsRef.current?.classList.add('fade-in-up');
      }, 700);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-background-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title" ref={titleRef}>Coffee Winey Varsovia S.A.S.</h1>
        <p className="hero-subtitle" ref={subtitleRef}>
          Café especial del Macizo Colombiano con agricultura regenerativa
        </p>
        <p className="hero-description" ref={descriptionRef}>
          Producimos café especial con perfil winey —frutal, dulce y avinado— mediante
          procesos sostenibles y agricultura regenerativa en Isnos, Huila.
        </p>
        <div className="cta-buttons" ref={buttonsRef}>
          <button className="cta-button primary" onClick={() => scrollToSection('coffee-profile')}>
            Conoce nuestro café
          </button>
          <button className="cta-button secondary" onClick={() => scrollToSection('process')}>
            Nuestro proceso
          </button>
          <button className="cta-button tertiary" onClick={() => scrollToSection('contact')}>
            Contacto
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
