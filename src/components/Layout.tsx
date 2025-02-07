import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from '../sections/Navigation';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Work from '../sections/Work';
import Experiments from '../sections/Experiments';
import Writings from '../sections/Writings';
import Contact from '../sections/Contact';
import Talks from '../sections/Talks';
import Footer from '../sections/Footer';

import { useSanityData } from '../lib/sanity-client';
import PostHogPageViewTracker from '../utils/helpers/tracker';

export const Layout = () => {
  const { data, isLoading, isError } = useSanityData();

  if (isLoading || isError) {
    return null;
  }

  return (
    <Router>
      <PostHogPageViewTracker />
      <div className="flex-grow">
        <Navigation data={data?.navigation} />
        <Hero data={data?.hero} />
        <About data={data?.about} />
        <Work data={data?.work} />
        <Experiments data={data?.experiments} />
        <Writings data={data?.writings} />
        <Talks data={data?.talks} />
        <Contact data={data?.contact} />
        <Footer data={data?.footer} />
      </div>
    </Router>
  );
};

export default Layout;
