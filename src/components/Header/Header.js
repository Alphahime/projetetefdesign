import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/LOGO-ETEF-DESIGN-3.jpg';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="ETET Design Logo" className="logo-image" />
          </Link>
        </div>

        {/* Bouton du menu burger (visible uniquement en mobile) */}
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        {/* Liste de navigation avec une classe conditionnelle */}
        <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className="nav-link" onClick={toggleMenu}>Accueil</Link></li>
          <li><Link to="/a-propos" className="nav-link" onClick={toggleMenu}>À Propos</Link></li>
          <li><Link to="/services" className="nav-link" onClick={toggleMenu}>Services</Link></li>
          <li><Link to="/contact" className="nav-link" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      
      </nav>

   
    </header>
  );
}

export default Header;