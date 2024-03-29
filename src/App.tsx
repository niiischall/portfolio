import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ContextWrapper } from './utils/hooks/usePortfolioContext';
import Home from './pages/Home';

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
        <Home />
      </ContextWrapper>
    </QueryClientProvider>
  );
};

export default App;
