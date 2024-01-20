import { QueriesType } from '../hooks/useCustomQuery';
import { queries, initialState } from './constants';

export const getPortfolioContext = (response: any) => {
  const portfolioResponse = response.map((responseData: any) => {
    const { data, isLoading, isSuccess, isError, error } = responseData ?? {};
    return {
      data,
      isLoading,
      isSuccess,
      isError,
      error,
    };
  });

  let portfolioData = {
    ...initialState,
  };

  queries.forEach((query: QueriesType, index: number) => {
    const { key } = query;
    portfolioData = {
      ...portfolioData,
      [key]: portfolioResponse[index],
    };
  });

  return portfolioData;
};
