import './Contact.css';
import { useEffect, useRef } from 'react';
import { getImagePath } from '../utils/imagePaths';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    alert('Gracias por tu interés. Te contactaremos pronto.');
  };

  const titleRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

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
    if (formRef.current) {
      formRef.current.style.opacity = '0';
      observer.observe(formRef.current);
    }
    if (infoRef.current) {
      infoRef.current.style.opacity = '0';
      observer.observe(infoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h2 ref={titleRef}>Contacto</h2>
        <p className="contact-intro" ref={introRef}>
          ¿Interesado en nuestro café especial? ¿Quieres conocer más sobre el proyecto?
          Déjanos tus datos y te contactaremos.
        </p>

        <div className="contact-image-section">
          <img src={getImagePath('finca.jpeg')} alt="Finca Varsovia, Isnos - Huila" />
        </div>

        <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
          <div className="form-row">
            <input
              type="text"
              placeholder="Nombre completo"
              className="form-input"
              required
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="form-input"
              required
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              placeholder="Empresa (opcional)"
              className="form-input"
            />
            <input
              type="text"
              placeholder="País"
              className="form-input"
              required
            />
          </div>

          <textarea
            placeholder="Mensaje"
            className="form-textarea"
            rows={5}
            required
          ></textarea>

          <button type="submit" className="submit-button">
            Enviar Mensaje
          </button>
        </form>

        <div className="contact-info" ref={infoRef}>
          <div className="info-item">
            <span className="info-icon">📍</span>
            <div>
              <strong>Ubicación</strong>
              <p>Finca Varsovia, Isnos - Huila, Colombia</p>
            </div>
          </div>
          <div className="info-item">
            <span className="info-icon">🏛️</span>
            <div>
              <strong>Proyecto</strong>
              <p>Fondo Emprender SENA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
