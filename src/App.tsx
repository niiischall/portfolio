import React from 'react';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';

import Hero from './sections/Hero';
import About from './sections/About';
import Work from './sections/Work';
import Experiments from './sections/Experiments';
import Writings from './sections/Writings';
import Contact from './sections/Contact';

import Layout from './components/shared/Layout';
import Talks from './sections/Talks';
import { ContextWrapper } from './utils/hooks/useContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ContextWrapper>
        <Theme>
          <Layout>
            <Hero />
            <About />
            <Work />
            <Experiments />
            <Writings />
            <Talks />
            <Contact />
          </Layout>
        </Theme>
      </ContextWrapper>
    </QueryClientProvider>
  );
};

export default App;
