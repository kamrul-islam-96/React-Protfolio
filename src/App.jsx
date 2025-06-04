import React from 'react';
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import Projects from './Component/Projects';
import About from './Component/About';
import Contact from './Component/Contact';
import Footer from './Component/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;