import React from 'react';
import './Formation.css'; 
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Formation = () => {
  return (
    <div className="formation-page">
          <Header />
      <header className="formation-header">
        <h1>Formation Professionnelle</h1>
        <p>Découvrez nos formations professionnelles dans divers domaines pour améliorer vos compétences.</p>
      </header>

      <section className="formation-services">
        <div className="service-item">
          <h3>Formation en Développement Web</h3>
          <p>Apprenez à créer des sites web modernes et performants avec des technologies comme HTML, CSS, JavaScript et React.</p>
        </div>
        <div className="service-item">
          <h3>Formation en Marketing Digital</h3>
          <p>Formez-vous aux stratégies de marketing digital pour booster votre présence en ligne et optimiser vos campagnes.</p>
        </div>
        <div className="service-item">
          <h3>Formation en Gestion de Projet</h3>
          <p>Maîtrisez les outils et techniques pour gérer efficacement vos projets et équipes avec des méthodes agiles.</p>
        </div>
        <div className="service-item">
          <h3>Formation en Graphisme et Infographie</h3>
          <p>Apprenez à créer des visuels professionnels avec des logiciels comme Photoshop, Illustrator, et InDesign.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Formation;
