import React from 'react';

import Hero from '../sections/Hero';
import About from '../sections/About';
import Work from '../sections/Work';
import Experiments from '../sections/Experiments';
import Writings from '../sections/Writings';
import Contact from '../sections/Contact';

import Layout from '../components/shared/Layout';
import Talks from '../sections/Talks';

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Work />
      <Experiments />
      <Writings />
      <Talks />
      <Contact />
    </Layout>
  );
};

export default Home;
