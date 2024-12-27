import "../style/Footer.css"; // Stile personalizzato del footer

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h5>Contatti</h5>
            <p>📍 Via Roma, 123, 00100 Roma (RM)</p>
            <p>
              📞 <a href="tel:+391234567890">+39 123 456 7890</a>
            </p>
          </div>
          <div className="footer-section">
            <h5>Orari di Apertura</h5>
            <p>Lunedì - Venerdì: 09:00 - 22:00</p>
            <p>Sabato - Domenica: 10:00 - 23:00</p>
          </div>
          <div className="footer-section social-icons">
            <h5>Seguici</h5>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
