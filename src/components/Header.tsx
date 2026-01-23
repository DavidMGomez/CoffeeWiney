import './Header.css';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo" onClick={scrollToTop}>
          <span className="logo-icon">☕</span>
          <span className="logo-text">
            <span className="logo-main">COFFEE WINEY</span>
            <span className="logo-sub">VARSOVIA S.A.S.</span>
          </span>
        </div>
        <nav className={`nav-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <button className="nav-link" onClick={() => scrollToTop()}>
            INICIO
          </button>
          <button className="nav-link" onClick={() => scrollToSection('about')}>
            QUIÉNES SOMOS
          </button>
          <button className="nav-link" onClick={() => scrollToSection('coffee-profile')}>
            NUESTRO CAFÉ
          </button>
          <button className="nav-link" onClick={() => scrollToSection('process')}>
            PROCESO
          </button>
          <button className="nav-link" onClick={() => scrollToSection('proyecto-sena')}>
            PROYECTO SENA
          </button>
          <button className="nav-link" onClick={() => scrollToSection('contact')}>
            CONTACTO
          </button>
        </nav>
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} 
          aria-label="Menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;

