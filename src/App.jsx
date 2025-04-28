import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navvbar from './pages/Navvbar';
import Footerr from './pages/Footerr';
import HomePage  from './pages/HomePage'
import WeddingTypes from './pages/WeddingTypes';
import Packages from './pages/Packages';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Contact from './pages/ContactPage';
import Login from './pages/Login';
import SignUp from './pages/Signup'
import TourismPlaces from './pages/TourismPlaces';
import './App.css';

function App() {
  const basePath = "/shadi-web";

  return (
    <Router basename={basePath}>
      <div className="App flex flex-col min-h-screen">
        <Navvbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/wedding-types" element={<WeddingTypes />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tourism" element={<TourismPlaces />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>
        <Footerr />
      </div>
    </Router>
  );
}

export default App;