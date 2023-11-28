import React from 'react';

export interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
  return (
    <div className="min-h-screen min-w-screen ">
      <div className="flex space-x-2 justify-center items-center bg-light h-screen ">
        <span className="sr-only">Loading...</span>
        <div className="h-4 w-4 bg-secondary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-4 w-4 bg-secondary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-4 w-4 bg-secondary rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default Loader;
