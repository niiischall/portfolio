import { useQuery } from 'react-query';
import sanityClient from '../../lib/sanity.client';

const fetchData = async (endpoint: string) => {
  const response = await sanityClient
    .fetch(endpoint)
    .then((response) => response)
    .catch((error) => console.log(error));

  return response;
};

export const useReactQuery = (key: string, endpoint: string) => {
  return useQuery(key, () => fetchData(endpoint));
};
