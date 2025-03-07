import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/LOGO-ETEF-DESIGN-3.jpg';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Fermer le menu après le clic (pour les mobiles)
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
          <li>
            <button
              className="nav-link"
              onClick={() => scrollToSection('section_1')}
            >
              Accueil
            </button>
          </li>
          <li>
            <button
              className="nav-link"
              onClick={() => scrollToSection('section_2')}
            >
              À Propos
            </button>
          </li>
          <li>
            <button
              className="nav-link"
              onClick={() => scrollToSection('section_3')}
            >
              Services
            </button>
          </li>
          <li>
            <button
              className="nav-link"
              onClick={() => scrollToSection('section_4')}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;