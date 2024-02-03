import React, { useContext } from 'react';

import Navigation from '../../sections/Navigation';
import Footer from '../../sections/Footer';
import { PortfolioContext } from '../../utils/hooks/useContext';
import Loader from '../loader/Loader';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { navigation, hero, about, work, experiments, writings, talks, contact, footer } =
    useContext(PortfolioContext) ?? [];

  const { isLoading: isLoadingNavigation, isSuccess: isSuccessNavigation, isError: isErrorNavigation } = navigation;
  const { isLoading: isLoadingHero, isSuccess: isSuccessLoading, isError: isErrorHero } = hero;
  const { isLoading: isLoadingAbout, isSuccess: isSuccessAbout, isError: isErrorAbout } = about;
  const { isLoading: isLoadingWork, isSuccess: isSuccessWork, isError: isErrorWork } = work;
  const { isLoading: isLoadingExperiments, isSuccess: isSuccessExperiments, isError: isErrorExperiments } = experiments;
  const { isLoading: isLoadingWritings, isSuccess: isSuccessWritings, isError: isErrorWritings } = writings;
  const { isLoading: isLoadingTalks, isSuccess: isSuccessTalks, isError: isErrorTalks } = talks;
  const { isLoading: isLoadingContact, isSuccess: isSuccessContact, isError: isErrorContact } = contact;
  const { isLoading: isLoadingFooter, isSuccess: isSuccessFooter, isError: isErrorFooter } = footer;

  const isLoading =
    isLoadingNavigation ||
    isLoadingHero ||
    isLoadingAbout ||
    isLoadingWork ||
    isLoadingExperiments ||
    isLoadingWritings ||
    isLoadingTalks ||
    isLoadingContact ||
    isLoadingFooter;

  const isError =
    isErrorNavigation ||
    isErrorHero ||
    isErrorAbout ||
    isErrorWork ||
    isErrorExperiments ||
    isErrorWritings ||
    isErrorTalks ||
    isErrorContact ||
    isErrorFooter;

  const isSuccess =
    isSuccessNavigation &&
    isSuccessLoading &&
    isSuccessAbout &&
    isSuccessWork &&
    isSuccessExperiments &&
    isSuccessWritings &&
    isSuccessTalks &&
    isSuccessContact &&
    isSuccessFooter;

  let child: React.ReactNode = null;

  if (isLoading) {
    child = (
      <React.Fragment>
        <Loader />
      </React.Fragment>
    );
  }

  if (isSuccess) {
    child = (
      <React.Fragment>
        <Navigation />
        <div className="flex-grow">{children}</div>
        <Footer />
      </React.Fragment>
    );
  }

  return <div className="flex min-h-screen flex-col text-black">{child}</div>;
}
