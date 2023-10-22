import React from 'react';
import './App.css';

import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Work from './sections/Work';
import Experiments from './sections/Experiments';
import Writings from './sections/Writings';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

import Layout from './components/shared/Layout';

const App: React.FC = () => {
  return (
    <Layout>
      <Navigation />
      <Hero />
      <About />
      <Work />
      <Experiments />
      <Writings />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default App;
