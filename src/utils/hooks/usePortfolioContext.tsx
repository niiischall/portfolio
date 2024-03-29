import React, { createContext, useContext } from 'react';

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

export const useHero = () => {
  const { hero } = useContext(PortfolioContext) ?? [];
  const { data } = hero ?? {};
  const { socials = [], greeting, cover = {} } = data ?? {};
  const { link, text: greetingText = [] } = greeting ?? {};
  const { text: buttonText = '', slug } = link ?? {};
  const { current: buttonSlug = '' } = slug ?? {};

  return {
    socials,
    cover,
    greetingText,
    buttonText,
    buttonSlug,
  };
};

export const useAbout = () => {
  const { about } = useContext(PortfolioContext) ?? [];
  const { data } = about ?? {};
  const { heading, overview = [], cv } = data ?? {};
  const { title: headingTitle = [] } = heading ?? {};
  const { link: cvLink = '', title: cvTitle = '' } = cv ?? {};

  return {
    overview,
    headingTitle,
    cvLink,
    cvTitle,
  };
};

export const useWork = () => {
  const { work } = useContext(PortfolioContext) ?? [];
  const { data } = work ?? {};
  const { heading, collection = [] } = data ?? {};
  const { title = [] } = heading ?? {};

  return {
    title,
    collection,
  };
};

export const useExperiments = () => {
  const { experiments } = useContext(PortfolioContext) ?? [];
  const { data } = experiments ?? {};
  const { heading, collection = [] } = data ?? {};
  const { title = [] } = heading ?? {};

  return {
    title,
    collection,
  };
};

export const useWritings = () => {
  const { writings } = useContext(PortfolioContext) ?? [];
  const { data } = writings ?? {};
  const { heading, collection = [] } = data ?? {};
  const { title = [] } = heading ?? {};

  return {
    title,
    collection,
  };
};

export const useTalks = () => {
  const { talks } = useContext(PortfolioContext) ?? [];
  const { data } = talks ?? {};
  const { heading, collection } = data ?? {};
  const { title = [] } = heading ?? {};

  return {
    title,
    collection,
  };
};

export const useContact = () => {
  const { contact } = useContext(PortfolioContext) ?? [];
  const { data } = contact ?? {};
  const { heading, text = [], link } = data ?? {};
  const { text: linkText, href: linkUrl } = link ?? {};
  const { title = [] } = heading ?? {};

  return {
    title,
    text,
    linkText,
    linkUrl,
  };
};

export const useFooter = () => {
  const { footer } = useContext(PortfolioContext) ?? [];
  const { data } = footer ?? {};
  const { heading, email = '', copyright = '', socials = [], collection = [] } = data ?? {};
  const { title = [] } = heading ?? {};

  return {
    email,
    copyright,
    socials,
    collection,
    title,
  };
};
