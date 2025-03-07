import React from 'react';
import './DeveloppementWeb.css'; 
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const DeveloppementWeb = () => {
  return (
    <div className="developpement-web-page">
           <Header />
      <header className="developpement-web-header">
        <h1>Développement Web</h1>
        <p>Nous créons des sites web modernes et performants pour répondre à vos besoins professionnels.</p>
      </header>

      <section className="developpement-web-services">
        <div className="service-item">
          <h3>Création de Sites Web</h3>
          <p>Développement de sites web responsives, adaptés à tous les types d’appareils et optimisés pour un meilleur rendement.</p>
        </div>
        <div className="service-item">
          <h3>Applications Web</h3>
          <p>Création d’applications web performantes et interactives adaptées à vos besoins spécifiques.</p>
        </div>
        <div className="service-item">
          <h3>E-commerce</h3>
          <p>Développement de boutiques en ligne sécurisées et faciles à utiliser pour améliorer votre expérience client.</p>
        </div>
        <div className="service-item">
          <h3>Maintenance et Support</h3>
          <p>Assurez-vous que votre site web ou application reste à jour et sécurisé avec nos services de maintenance réguliers.</p>
        </div>
      </section>
      <Footer /> 
    </div>
  );
};

export default DeveloppementWeb;
