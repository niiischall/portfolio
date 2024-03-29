import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import Hero from './sections/Hero';
import About from './sections/About';
import Work from './sections/Work';
import Experiments from './sections/Experiments';
import Writings from './sections/Writings';
import Contact from './sections/Contact';

import Layout from './components/shared/Layout';
import Talks from './sections/Talks';
import { ContextWrapper } from './utils/hooks/usePortfolioContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

const App: React.FC<{ data: any }> = ({ data }) => {
  console.log('data from server: ', data);
  return (
    <QueryClientProvider client={queryClient}>
      <ContextWrapper>
        <Layout>
          <Hero />
          <About />
          <Work />
          <Experiments />
          <Writings />
          <Talks />
          <Contact />
        </Layout>
      </ContextWrapper>
    </QueryClientProvider>
  );
};

export default App;
