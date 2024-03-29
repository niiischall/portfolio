import React, { useContext } from 'react';

import Navigation from '../../sections/Navigation';
import Footer from '../../sections/Footer';
import { PortfolioContext } from '../../utils/hooks/usePortfolioContext';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { navigation, hero, about, work, experiments, writings, talks, contact, footer } =
    useContext(PortfolioContext) ?? [];

  const { isSuccess: isSuccessNavigation } = navigation;
  const { isSuccess: isSuccessLoading } = hero;
  const { isSuccess: isSuccessAbout } = about;
  const { isSuccess: isSuccessWork } = work;
  const { isSuccess: isSuccessExperiments } = experiments;
  const { isSuccess: isSuccessWritings } = writings;
  const { isSuccess: isSuccessTalks } = talks;
  const { isSuccess: isSuccessContact } = contact;
  const { isSuccess: isSuccessFooter } = footer;

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
