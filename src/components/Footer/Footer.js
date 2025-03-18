import React from 'react';
import './Footer.css'; // Importez le fichier CSS
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importez les icônes

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            {/* <h4>ETEF Design</h4>
            <p>Une plateforme pour les créatifs du monde entier.</p> */}
            {/* Icônes des réseaux sociaux */}
            <div className="social-icons">
              <a href="https://www.facebook.com/DesignEtef/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="icon" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="icon" />
              </a>
              <a href="https://www.instagram.com/design_etef/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="icon" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="icon" />
              </a>
            </div>
          </div>
          <div className="col-md-6 text-end">
            <ul className="footer-links">
              <li><a href="/">Accueil</a></li>
              <li><a href="/a-propos">À Propos</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ETEF Design. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;