import React from 'react';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import './App.css';

import Hero from './sections/Hero';
import About from './sections/About';
import Work from './sections/Work';
import Experiments from './sections/Experiments';
import Writings from './sections/Writings';
import Contact from './sections/Contact';

import Layout from './components/shared/Layout';

const App: React.FC = () => {
  return (
    <Theme>
      <Layout>
        <Hero />
        <About />
        <Work />
        <Experiments />
        <Writings />
        <Contact />
      </Layout>
    </Theme>
  );
};

export default App;
