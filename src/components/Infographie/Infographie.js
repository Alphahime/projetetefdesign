import React from 'react';
import './Infographie.css'; 
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Infographie = () => {
  return (
    <div className="infographie-page">
         <Header />
      <header className="infographie-header">
        <h1>Infographie</h1>
        <p>Découvrez nos services de conception graphique et d'infographie.</p>
      </header>

      <section className="infographie-services">
        <div className="service-item">
          <h3>Conception Graphique</h3>
          <p>Création de visuels attractifs et professionnels pour vos besoins.</p>
        </div>
        <div className="service-item">
          <h3>Infographie & Illustration</h3>
          <p>Réalisation d'infographies et illustrations personnalisées pour captiver votre audience.</p>
        </div>
        <div className="service-item">
          <h3>Création de Logos</h3>
          <p>Des logos uniques pour représenter l'identité de votre marque.</p>
        </div>
      </section>
      <Footer /> 
    </div>
  );
};

export default Infographie;
