import './Contact.css';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    alert('Gracias por tu interés. Te contactaremos pronto.');
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h2>Contacto</h2>
        <p className="contact-intro">
          ¿Interesado en nuestro café especial? ¿Quieres conocer más sobre el proyecto?
          Déjanos tus datos y te contactaremos.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
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

        <div className="contact-info">
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
