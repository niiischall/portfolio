import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ContextWrapper } from './utils/hooks/usePortfolioContext';
import Hero from '../src/sections/Hero';
import About from '../src/sections/About';
import Work from '../src/sections/Work';
import Experiments from '../src/sections/Experiments';
import Writings from '../src/sections/Writings';
import Contact from '../src/sections/Contact';
import Layout from '../src/components/shared/Layout';
import Talks from '../src/sections/Talks';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

const App: React.FC<{ data: any }> = ({ data }) => {
  console.log('this data is coming from server, no client-side api called.');
  console.log(JSON.stringify(data, null, 2));
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
