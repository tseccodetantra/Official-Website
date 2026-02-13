import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import ImageFlow from './components/ImageFlow';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.pageYOffset / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <div 
        className="scroll-progress" 
        style={{ width: `${scrollProgress}%` }}
      />
      <Navbar />
      <Hero />
      <About />
      <Events />
      <ImageFlow />
      <Footer />
    </div>
  );
}

export default App;
