import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PostHogPageViewTracker from './utils/helpers/tracker';

import Layout from './components/Layout';
import { BrowserRouter as Router } from 'react-router-dom';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <PostHogPageViewTracker />
        <Layout />
      </Router>
    </QueryClientProvider>
  );
};

export default App;
