import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Accueil from './components/Accueil/Accueil';
import APropos from './components/APropos/APropos';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <Router>
      
        <Routes>
          {/* Route pour la page d'accueil */}
          <Route path="/" element={<Accueil />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    
    </Router>
  );
}

export default App;