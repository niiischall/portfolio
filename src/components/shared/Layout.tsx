import React from 'react';
import Navigation from '../../sections/Navigation';
import Footer from '../../sections/Footer';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col text-black">
      <Navigation />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
}
