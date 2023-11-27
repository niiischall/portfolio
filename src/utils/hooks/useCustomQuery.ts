import { useQueries, useQuery } from 'react-query';
import sanityClient from '../../lib/sanity.client';
export interface QueriesType {
  key: string;
  endpoint: string;
}

const fetchData = async (endpoint: string) => {
  const response = await sanityClient
    .fetch(endpoint)
    .then((response) => response)
    .catch((error) => console.log(error));

  return response;
};

export const useReactQuery = (query: QueriesType) => {
  const { key = '', endpoint = '' } = query;
  return useQuery(key, () => fetchData(endpoint));
};

export const useReactQueries = (inputKeyAndEndpoints: QueriesType[]) => {
  const queries = inputKeyAndEndpoints.map((query: QueriesType) => {
    const { key = '', endpoint = '' } = query;
    return {
      queryKey: key,
      queryFn: () => fetchData(endpoint),
    };
  });
  return useQueries(queries);
};
