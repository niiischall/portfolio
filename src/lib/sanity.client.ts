import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: 'd3ylbkps',
  dataset: 'production',
  apiVersion: '2023-10-01',
  useCdn: false,
});

export default sanityClient;
