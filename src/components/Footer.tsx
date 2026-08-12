import './Footer.css';
import { getImagePath } from '../utils/imagePaths';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img
          className="footer-sena-logo"
          src={getImagePath('sena-fondo-emprender-2024-seeklogo.png')}
          alt="Fondo Emprender SENA"
        />
        <p className="footer-text">
          Proyecto financiado por Fondo Emprender - SENA
        </p>
        <p className="footer-copy">
          © {new Date().getFullYear()} Coffee Winey Varsovia S.A.S. - Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
