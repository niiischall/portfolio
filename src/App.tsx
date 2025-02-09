import Layout from './components/Layout';
import PostHogPageViewTracker from './utils/helpers/tracker';

const App = () => {
  return (
    <div className="flex-grow flex flex-col min-h-[100vh]">
      <PostHogPageViewTracker />
      <Layout />
    </div>
  );
};

export default App;
