import React, { createContext } from 'react';
import { useReactQueries } from './useCustomQuery';
import { queries, initialState } from '../helpers/constants';
import { getPortfolioContext } from '../helpers/services';
import {
  AboutContextType,
  ContactsContextType,
  ExperimentContextType,
  FooterContextType,
  HeroContextType,
  NavigationContextType,
  TalksContextType,
  WorkContextType,
  WritingsContextType,
} from '../helpers/types';

export interface PortfolioContextType {
  navigation: NavigationContextType;
  hero: HeroContextType;
  about: AboutContextType;
  work: WorkContextType;
  experiments: ExperimentContextType;
  writings: WritingsContextType;
  talks: TalksContextType;
  contact: ContactsContextType;
  footer: FooterContextType;
}

export const PortfolioContext = createContext<PortfolioContextType>(initialState);

export const ContextWrapper = ({ children }: { children: React.ReactNode }) => {
  const response = useReactQueries(queries);
  const data = getPortfolioContext(response);

  return <PortfolioContext.Provider value={data}>{children}</PortfolioContext.Provider>;
};
