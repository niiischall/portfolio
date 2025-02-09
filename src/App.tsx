import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PostHogPageViewTracker from './utils/helpers/tracker';

import Layout from './components/Layout';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PostHogPageViewTracker />
      <Layout />
    </QueryClientProvider>
  );
};

export default App;
