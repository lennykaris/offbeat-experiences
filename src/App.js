import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Experiences from './pages/Experiences';
import Destinations from './pages/Destinations';
import AboutUs from './pages/AboutUs';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Themes from './pages/Themes';
import Nairobi from './components/destinations/Nairobi'; // Updated import path
import Nakuru from './components/destinations/Nakuru'; // Updated import path
import Kajiado from './components/destinations/Kajiado'; // Updated import path
import Mombasa from './components/destinations/Mombasa'; // Updated import path
import Adrenaline from './components/themes/Adrenaline';
import Hiking from './components/themes/Hiking';
import OnTheWater from './components/themes/OnTheWater';
import MultidayTour from './components/themes/MultidayTour';
import Educational from './components/themes/Educational';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          {/* Existing Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/themes" element={<Themes />} />

          {/* Destination Routes */}
          <Route path="/nairobi" element={<Nairobi />} />
          <Route path="/nakuru" element={<Nakuru />} />
          <Route path="/kajiado" element={<Kajiado />} />
          <Route path="/mombasa" element={<Mombasa />} />

          {/* Theme Routes */}
          <Route path="/adrenaline" element={<Adrenaline />} />
          <Route path="/hiking" element={<Hiking />} />
          <Route path="/on-the-water" element={<OnTheWater />} />
          <Route path="/multiday-tour" element={<MultidayTour />} />
          <Route path="/educational" element={<Educational />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;