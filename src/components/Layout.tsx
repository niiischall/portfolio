import React from 'react';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <React.Fragment>
      <div className="flex-grow">{children}</div>
    </React.Fragment>
  );
}
