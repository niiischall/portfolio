import React from 'react';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <div className="mt-20 flex-grow px-4 md:px-16 lg:px-32">{children}</div>
    </div>
  );
}
