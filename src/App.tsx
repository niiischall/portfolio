import React from 'react';

import Navigation from './sections/Navigation';
import Hero from '../src/sections/Hero';
import About from '../src/sections/About';
import Work from '../src/sections/Work';
import Experiments from '../src/sections/Experiments';
import Writings from '../src/sections/Writings';
import Contact from '../src/sections/Contact';
import Layout from './components/Layout';
import Talks from '../src/sections/Talks';
import Footer from './sections/Footer';

const App: React.FC<{ data: any }> = ({ data }) => {
  const { navigation, hero, about, work, experiments, talks, writings, contact, footer } = data ?? {};

  return (
    <Layout>
      <Navigation data={navigation} />
      <Hero data={hero} />
      <About data={about} />
      <Work data={work} />
      <Experiments data={experiments} />
      <Writings data={writings} />
      <Talks data={talks} />
      <Contact data={contact} />
      <Footer data={footer} />
    </Layout>
  );
};

export default App;
