import { QueriesType } from '../hooks/useCustomQuery';
import { queries, initialState } from './constants';

export const getStartDuration = (start: string) => {
  return new Date(start).toLocaleString('default', { month: 'long' }) + ', ' + new Date(start).getFullYear();
};

export const getEndDuration = (end: string) => {
  const today = Date.now();

  const currentYear = new Date(today).getFullYear();
  const startYear = new Date(end).getFullYear();

  if (currentYear === startYear) {
    return 'Present';
  }

  return new Date(end).toLocaleString('default', { month: 'long' }) + ', ' + new Date(end).getFullYear();
};

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
