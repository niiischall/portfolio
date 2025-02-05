import { useEffect, useState } from 'react';

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

import {
  aboutQuery,
  contactQuery,
  experimentsQuery,
  footerQuery,
  heroQuery,
  navigationQuery,
  talksQuery,
  workQuery,
  writingsQuery,
} from './lib/sanity.queries';
import sanityClient from './lib/sanity-client';

const App = () => {
  const [navigationData, setNavigationData] = useState({
    heading: {
      title: '',
      slug: {
        current: '',
      },
    },
    collection: [],
  });
  const [heroData, setHeroData] = useState({
    socials: [],
    greeting: {
      link: {
        text: '',
        slug: {
          current: '',
        },
      },
      text: [],
    },
    cover: {
      asset: {
        _type: '',
        _ref: '',
      },
      _type: '',
    },
  });
  const [aboutData, setAboutData] = useState({
    heading: {
      title: [],
    },
    overview: [],
    cv: {
      link: '',
      title: '',
    },
  });
  const [workData, setWorkData] = useState({
    heading: {
      title: [],
    },
    collection: [],
  });
  const [experimentsData, setExperimentsData] = useState({
    heading: {
      title: [],
    },
    collection: [],
  });
  const [writingsData, setWritingsData] = useState({
    heading: {
      title: [],
    },
    collection: [],
  });
  const [talksData, setTalksData] = useState({
    heading: {
      title: [],
    },
    collection: [],
  });
  const [contactData, setContactData] = useState({
    heading: {
      title: [],
    },
    text: [],
    link: {
      text: '',
      href: '',
    },
  });
  const [footerData, setFooterData] = useState({
    heading: {
      title: [],
    },
    email: '',
    copyright: '',
    socials: [],
    collection: [],
  });

  //Navigation
  useEffect(() => {
    sanityClient
      .fetch(navigationQuery)
      .then((data) => setNavigationData(data))
      .catch((err) => console.error(err));
  }, []);

  //Hero
  useEffect(() => {
    sanityClient
      .fetch(heroQuery)
      .then((data) => setHeroData(data))
      .catch((err) => console.error(err));
  }, []);

  //About
  useEffect(() => {
    sanityClient
      .fetch(aboutQuery)
      .then((data) => setAboutData(data))
      .catch((err) => console.error(err));
  }, []);

  //Work
  useEffect(() => {
    sanityClient
      .fetch(workQuery)
      .then((data) => setWorkData(data))
      .catch((err) => console.error(err));
  }, []);

  //Experiments
  useEffect(() => {
    sanityClient
      .fetch(experimentsQuery)
      .then((data) => setExperimentsData(data))
      .catch((err) => console.error(err));
  }, []);

  //Writings
  useEffect(() => {
    sanityClient
      .fetch(writingsQuery)
      .then((data) => setWritingsData(data))
      .catch((err) => console.error(err));
  }, []);

  //Talks
  useEffect(() => {
    sanityClient
      .fetch(talksQuery)
      .then((data) => setTalksData(data))
      .catch((err) => console.error(err));
  }, []);

  //Contact
  useEffect(() => {
    sanityClient
      .fetch(contactQuery)
      .then((data) => setContactData(data))
      .catch((err) => console.error(err));
  }, []);

  //Footer
  useEffect(() => {
    sanityClient
      .fetch(footerQuery)
      .then((data) => setFooterData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Layout>
      <Navigation data={navigationData} />
      <Hero data={heroData} />
      <About data={aboutData} />
      <Work data={workData} />
      <Experiments data={experimentsData} />
      <Writings data={writingsData} />
      <Talks data={talksData} />
      <Contact data={contactData} />
      <Footer data={footerData} />
    </Layout>
  );
};

export default App;
