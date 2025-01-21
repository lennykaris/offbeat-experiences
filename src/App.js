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
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/themes" element={<Themes />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
