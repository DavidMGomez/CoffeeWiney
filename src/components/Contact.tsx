import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-content">
        <h2>¿Listo para comenzar?</h2>
        <p>Únete a cientos de emprendedores que ya están transformando sus ideas en negocios exitosos</p>
        <form className="contact-form">
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className="email-input"
          />
          <button type="submit" className="submit-button">
            Empezar Gratis
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
