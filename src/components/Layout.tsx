import React from 'react';

import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';

export interface LayoutProps {
  navigation: any;
  children: React.ReactNode;
  footer: any;
}

export default function Layout({ navigation, children, footer }: LayoutProps) {
  return (
    <React.Fragment>
      <Navigation data={navigation} />
      <div className="flex-grow">{children}</div>
      <Footer data={footer} />
    </React.Fragment>
  );
}
