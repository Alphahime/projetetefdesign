import React from 'react';
import './MarketingDigital.css'; 
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MarketingDigital = () => {
  return (
    <div className="marketing-digital-page">
         <Header />
      <header className="marketing-digital-header">
        <h1>Marketing Digital</h1>
        <p>Découvrez nos services en marketing digital pour développer votre présence en ligne.</p>
      </header>

      <section className="marketing-digital-services">
        <div className="service-item">
          <h3>Publicité en Ligne</h3>
          <p>Stratégies digitales pour booster votre marque à travers des publicités ciblées sur les réseaux sociaux et Google.</p>
        </div>
        <div className="service-item">
          <h3>SEO (Référencement Naturel)</h3>
          <p>Optimisation de votre site web pour améliorer son classement dans les moteurs de recherche.</p>
        </div>
        <div className="service-item">
          <h3>Gestion des Réseaux Sociaux</h3>
          <p>Création et gestion de vos profils sociaux pour une meilleure interaction avec votre audience.</p>
        </div>
        <div className="service-item">
          <h3>Email Marketing</h3>
          <p>Création de campagnes d'emailing pour fidéliser vos clients et atteindre de nouveaux prospects.</p>
        </div>
      </section>
      <Footer /> 
    </div>
  );
};

export default MarketingDigital;
