import React from 'react';
import { PortableText } from '@portabletext/react';

import { urlForImage } from '../../lib/sanity.image';
import { useWritings } from '../../utils/hooks/usePortfolioContext';
import { WritingsCollectionType } from '../../utils/helpers/types';

export interface WritingsProps {}

const Writings: React.FC<WritingsProps> = () => {
  const { title, collection } = useWritings();

  return (
    <>
      <section className="px-4 pt-12 pb-24 md:px-8" id="writings">
        <div className="max-w-4xl flex flex-col justify-center items-start space-x-0 space-y-12 md:space-x-48 md:flex-row md:justify-between md:space-y-0 md:mx-auto">
          <div className="text-left md:text-center p-0">
            <PortableText value={title} />
          </div>
          <div className="flex flex-col space-y-12 justify-between">
            {collection.map((item: WritingsCollectionType) => {
              const { _key = '', heading = '', body = '', link = '', image = {} } = item ?? {};
              return (
                <div key={_key} className="max-w-lg">
                  <a target="_blank" href={link} className="group" rel="noopener noreferrer">
                    <div className="mb-6 overflow-hidden rounded-md shadow-xl">
                      <img src={urlForImage(image)?.url()} alt={heading} />
                    </div>
                    <h3 className="text-xl font-sans font-bold mb-4 group-hover:text-secondary">{heading}</h3>
                    <p className="text-sm mb-4 group-hover:text-secondary">{body}</p>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <div className="divider" />
    </>
  );
};

export default Writings;
