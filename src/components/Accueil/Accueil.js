import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { FaPaintBrush, FaChalkboardTeacher, FaCode, FaBullhorn, FaSearch } from 'react-icons/fa';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Accueil.css';
import { FaRocket, FaLightbulb, FaUsers } from 'react-icons/fa'; 
// Importez les images des services
import infographieImage from '../../images/concept-strategie-entreprise-dessine-main.png';
import marketingImage from '../../images/service markting digital.jpg';
import formationImage from '../../images/service formation.jpg';
import devwebImage from '../../images/illustration-equipe-developpement-web.png';
import aproposImage from '../../images/apropos image personne.jpg';
// Importez le logo Africa For Good
import logomendres from "../../images/logomendres.jpg";
import logowallyauto from "../../images/logowallyauto.jpg";
import logoEtef from "../../images/logo-etef-5_0 (1) (1).avif";
import ecopialogo from "../../images/ecopialogo.jpeg";
import logoafricaforgood from "../../images/logoafricaforgood.png"; // Importez ce logo
import bannerImage from "../../images/banner-image-etef.svg";

function Accueil() {
  return (
    <div className="accueil">
      <Header />
      <meta name="google-site-verification" content="s1bQ4tk6BTbj8CW6mkeLuqCvgDYY1wjemkPIjHcwVKQ" />
  
{/* Section Bannière améliorée */}
<section className="hero-section d-flex align-items-center" id="section_1">
  <div className="container">
    <div className="row align-items-center">
      {/* Colonne pour l'image */}
      <div className="col-lg-6 col-12 mb-5 mb-lg-0">
      <img src={bannerImage} alt="Bannière ETEF" className="img-fluid animate__animated animate__fadeInLeft" />
      </div>

      {/* Colonne pour le texte et le champ de recherche */}
      <div className="col-lg-6 col-12 text-center text-lg-start">
        <h1 className="text-white animate__animated animate__fadeInDown">Créez. Optimisez. Rentabilisez.</h1>
        <h6 className="text-white animate__animated animate__fadeInUp mb-4">Une plateforme pour les créatifs du monde entier</h6>

        {/* Champ de recherche */}
        <form method="get" className="custom-form animate__animated animate__fadeIn" role="search">
          <div className="input-group input-group-lg">
            <span className="input-group-text" id="basic-addon1">
              <FaSearch className="text-white" />
            </span>
            <input
              name="keyword"
              type="search"
              className="form-control"
              id="keyword"
              placeholder="Design, Code, Marketing, ..."
              aria-label="Rechercher"
            />
            <button type="submit" className="btn btn-primary">Rechercher</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>



<section className="about-section section-padding" id="section_2">
      <div className="container">
        <div className="row align-items-center">
          {/* Image à gauche */}
          <div className="col-lg-6 col-md-12">
          <img
  src={aproposImage}
  alt="À propos de nous"
  className="img-fluid rounded shadow-lg"
/>

            
          </div>

          {/* Texte et slogans à droite */}
          <div className="col-lg-6 col-md-12 mt-4 mt-lg-0">
            <h2 className="mb-4">À propos de nous</h2>
            <p className="mb-4">
              Nous sommes une équipe passionnée dédiée à fournir des solutions créatives et innovantes pour nos clients. 
              Que vous ayez besoin de design, de développement web ou de stratégies marketing, nous sommes là pour vous accompagner.
            </p>

            {/* Slogans avec icônes */}
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    {/* Face avant */}
                    <div className="flip-card-front">
                      <FaRocket className="icon-lg text-primary mb-2" />
                      <h6>Innovation</h6>
                      <p className="small">Des solutions modernes et efficaces.</p>
                    </div>
                    {/* Face arrière */}
                    <div className="flip-card-back">
                      <h6>Notre Mission</h6>
                      <p className="small">Innover pour vous offrir le meilleur.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    {/* Face avant */}
                    <div className="flip-card-front">
                      <FaLightbulb className="icon-lg text-primary mb-2" />
                      <h6>Créativité</h6>
                      <p className="small">Des idées uniques pour votre marque.</p>
                    </div>
                    {/* Face arrière */}
                    <div className="flip-card-back">
                      <h6>Notre Vision</h6>
                      <p className="small">Créer des designs qui inspirent.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    {/* Face avant */}
                    <div className="flip-card-front">
                      <FaUsers className="icon-lg text-primary mb-2" />
                      <h6>Collaboration</h6>
                      <p className="small">Travaillons ensemble pour réussir.</p>
                    </div>
                    {/* Face arrière */}
                    <div className="flip-card-back">
                      <h6>Notre Engagement</h6>
                      <p className="small">Votre succès est notre priorité.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Section Services avec icônes */}
      <section className="explore-section section-padding" id="section_3">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="mb-4">Nos Services</h2>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="infographie-tab" data-bs-toggle="tab" data-bs-target="#infographie-tab-pane" type="button" role="tab" aria-controls="infographie-tab-pane" aria-selected="true">
                  <FaPaintBrush className="me-2" size={24} /> Infographie
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button className="nav-link" id="formation-tab" data-bs-toggle="tab" data-bs-target="#formation-tab-pane" type="button" role="tab" aria-controls="formation-tab-pane" aria-selected="false">
                  <FaChalkboardTeacher className="me-2" size={24} /> Formation
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button className="nav-link" id="devweb-tab" data-bs-toggle="tab" data-bs-target="#devweb-tab-pane" type="button" role="tab" aria-controls="devweb-tab-pane" aria-selected="false">
                  <FaCode className="me-2" size={24} /> Développement Web
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button className="nav-link" id="marketing-tab" data-bs-toggle="tab" data-bs-target="#marketing-tab-pane" type="button" role="tab" aria-controls="marketing-tab-pane" aria-selected="false">
                  <FaBullhorn className="me-2" size={24} /> Marketing Digital
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tab-content" id="myTabContent">
                {/* Infographie */}
                <div className="tab-pane fade show active" id="infographie-tab-pane" role="tabpanel" aria-labelledby="infographie-tab" tabIndex="0">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                      <div className="custom-block bg-white shadow-lg">
                        <img src={infographieImage} alt="Infographie" className="img-fluid mb-3" />
                        <div className="d-flex">
                          <FaPaintBrush className="me-3" size={32} color="#1b61ba" />
                          <div>
                            <h5 className="mb-2">Conception Graphique</h5>
                            <p className="mb-0">Création de visuels attractifs et uniques</p>
                          </div>
                        </div>
                        <Link to="/infographie" className="d-flex align-items-center mt-3">
    <span className="me-2">Voir plus</span>
    <FaArrowRight size={18} />
  </Link>
                      </div>
   
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                      <div className="custom-block bg-white shadow-lg">
                        <img src={infographieImage} alt="Infographie" className="img-fluid mb-3" />
                        <div className="d-flex">
                          <FaPaintBrush className="me-3" size={32} color="#1b61ba" />
                          <div>
                            <h5 className="mb-2">Infographie & Illustration</h5>
                            <p className="mb-0">Création d'éléments graphiques impactants</p>
                          </div>
                        </div>
                        <Link to="/infographie" className="d-flex align-items-center mt-3">
    <span className="me-2">Voir plus</span>
    <FaArrowRight size={18} />
  </Link>
                      </div>
   
                    </div>

                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="custom-block bg-white shadow-lg">
                        <img src={infographieImage} alt="Infographie" className="img-fluid mb-3" />
                        <div className="d-flex">
                          <FaPaintBrush className="me-3" size={32} color="#1b61ba" />
                          <div>
                            <h5 className="mb-2">Création de Logos</h5>
                            <p className="mb-0">Des logos sur mesure pour votre marque</p>
                          </div>
                        </div>
                        <Link to="/infographie" className="d-flex align-items-center mt-3">
    <span className="me-2">Voir plus</span>
    <FaArrowRight size={18} />
  </Link>
                      </div>

                    </div>
   
                  </div>
   
                </div>

                {/* Formation */}
                <div className="tab-pane fade" id="formation-tab-pane" role="tabpanel" aria-labelledby="formation-tab" tabIndex="0">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                      <div className="custom-block bg-white shadow-lg">
                        <img src={formationImage} alt="Formation" className="img-fluid mb-3" />
                        <div className="d-flex">
                          <FaChalkboardTeacher className="me-3" size={32} color="#1b61ba" />
                          <div>
                            <h5 className="mb-2">Formation Professionnelle</h5>
                            <p className="mb-0">Apprenez avec des experts du domaine</p>
                          </div>
                        </div>
                        <Link to="/formation" className="d-flex align-items-center mt-3">
    <span className="me-2">Voir plus</span>
    <FaArrowRight size={18} />
  </Link>
                      </div>

                    </div>
 
                  </div>
   
                </div>

                {/* Développement Web */}
                <div className="tab-pane fade" id="devweb-tab-pane" role="tabpanel" aria-labelledby="devweb-tab" tabIndex="0">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                      <div className="custom-block bg-white shadow-lg">
                        <img src={devwebImage} alt="Développement Web" className="img-fluid mb-3" />
                        <div className="d-flex">
                          <FaCode className="me-3" size={32} color="#1b61ba" />
                          <div>
                            <h5 className="mb-2">Création de Sites Web</h5>
                            <p className="mb-0">Développement de sites performants et responsives</p>
                          </div>
                        </div>
                        <Link to="/developpement-web" className="d-flex align-items-center mt-3">
    <span className="me-2">Voir plus</span>
    <FaArrowRight size={18} />
  </Link>
              
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="custom-block bg-white shadow-lg">
                        <img src={devwebImage} alt="Développement Web" className="img-fluid mb-3" />
                        <div className="d-flex">
                          <FaCode className="me-3" size={32} color="#1b61ba" />
                          <div>
                            <h5 className="mb-2">Développement d'Applications</h5>
                            <p className="mb-0">Applications web et mobiles sur mesure</p>
                          </div>
                        </div>
                        <Link to="/developpement-web" className="d-flex align-items-center mt-3">
    <span className="me-2">Voir plus</span>
    <FaArrowRight size={18} />
  </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Marketing Digital */}
                <div className="tab-pane fade" id="marketing-tab-pane" role="tabpanel" aria-labelledby="marketing-tab" tabIndex="0">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 mb-4 mb-lg-0">
                      <div className="custom-block bg-white shadow-lg">
                        <img src={marketingImage} alt="Marketing Digital" className="img-fluid mb-3" />
                        <div className="d-flex">
                          <FaBullhorn className="me-3" size={32} color="#1b61ba" />
                          <div>
                            <h5 className="mb-2">Publicité en Ligne</h5>
                            <p className="mb-0">Stratégies digitales pour booster votre marque</p>
                          </div>
                        </div>
                        <Link to="/marketing-digital" className="d-flex align-items-center mt-3">
    <span className="me-2">Voir plus</span>
    <FaArrowRight size={18} />
  </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="testimonial-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="mb-4">Témoignages</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="testimonial-block bg-white shadow-lg">
                <p>"Un service professionnel et des résultats impressionnants !"</p>
                <h6>- Pierre Tchoungui</h6>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="testimonial-block bg-white shadow-lg">
                <p>"Leur équipe a su répondre à tous mes besoins."</p>
                <h6>- Marie Nguimfack </h6>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="testimonial-block bg-white shadow-lg">
                <p>"Je recommande vivement ETET Design Website !"</p>
                <h6>- Jean-Baptiste Ekodeck
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Section Ils nous ont fait confiance */}
<div className="sectiontitle">
<h2 className="mb-4">Ils nous ont fait confiance</h2>
</div>

<div className="logos-container">

      <img src={logomendres} alt="Logo Mendres" className="logo" />
      <img src={logowallyauto} alt="Logo Wally Auto" className="logo" />
      <img src={logoEtef} alt="Logo ETEF" className="logo" />
      <img src={ecopialogo} alt="Logo Ecopia" className="logo" />
      <img src={logoafricaforgood} alt="Logo Africa For Good" className="logo" />
  
    </div>


     <section className="contact-section section-padding" id="section_4">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="mb-4">Contactez-nous</h2>
            <p className="mb-5">Nous sommes à votre disposition pour répondre à vos questions.</p>
          </div>
        </div>

        <div className="row align-items-center">
          {/* Carte Google Maps (iframe) */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <div className="map-container rounded shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2904.093933346093!2d5.374515315484238!3d43.29648697913528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9c0c5a5a5a5a5%3A0x5a5a5a5a5a5a5a5!2sH%C3%B4tel%20des%20Postes%2C%2013001%20Marseille%2C%20France!5e0!3m2!1sfr!2sfr!4v1633021234567!5m2!1sfr!2sfr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Adresse de l'Hôtel des Postes"
              ></iframe>
            </div>
          </div>

          {/* Informations de contact */}
          <div className="col-lg-6 col-md-12">
            <div className="contact-info bg-white p-4 rounded shadow-lg">
              <div className="d-flex align-items-center mb-4">
                <FaMapMarkerAlt className="icon-lg text-primary me-3" />
                <div>
                  <h5>Adresse</h5>
                  <p className="mb-0">Hôtel des Postes, 13001 Marseille, France</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <FaPhone className="icon-lg text-primary me-3" />
                <div>
                  <h5>Téléphone</h5>
                  <p className="mb-0">
                    <a href="tel:+33695744027" className="text-decoration-none">+(33) 6 95 74 40 27</a>
                  </p>
                  <p className="mb-0">
                    {/* <a href="tel:+33749911112" className="text-decoration-none">+(33) 7 49 91 11 12</a> */}
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <FaEnvelope className="icon-lg text-primary me-3" />
                <div>
                  <h5>Email</h5>
                  <p className="mb-0">
                    <a href="design.pro@etef.fr" className="text-decoration-none">design.pro@etef.fr </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer /> 
    </div>
  );
}

export default Accueil;