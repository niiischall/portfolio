import React, { createContext } from 'react';
import { useReactQueries } from './useCustomQuery';
import { QUERIES } from '../helpers/constants';
import { getPortfolioContext } from '../helpers/services';

export type PortfolioSection = {
  data: object;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: boolean;
};

export interface PortfolioContextType {
  navigation: object;
  hero: object;
  about: object;
  work: object;
  experiments: object;
  writings: object;
  talks: object;
  contact: object;
  footer: object;
}

export const PortfolioContext = createContext<PortfolioContextType>({
  navigation: {},
  hero: {},
  about: {},
  work: {},
  experiments: {},
  writings: {},
  talks: {},
  contact: {},
  footer: {},
});

export const ContextWrapper = ({ children }: { children: React.ReactNode }) => {
  const response = useReactQueries(QUERIES);
  const data = getPortfolioContext(response);

  return <PortfolioContext.Provider value={data}>{children}</PortfolioContext.Provider>;
};
