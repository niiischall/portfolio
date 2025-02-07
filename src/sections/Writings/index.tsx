import React from 'react';
import { PortableText } from '@portabletext/react';

import { urlForImage } from '../../lib/sanity.image';
import { WritingsCollectionType } from '../../utils/helpers/types';
import type { TypedObject } from 'sanity';
import Button from '../../components/Button';

export interface WritingsProps {
  data: {
    heading: {
      title: TypedObject[];
    };
    collection: WritingsCollectionType[];
  };
}

const Writings: React.FC<WritingsProps> = ({ data }) => {
  const { heading, collection = [] } = data ?? {};
  const { title = [] } = heading ?? {};

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
                  <Button
                    styles="group"
                    onClick={() => {
                      window.open(link, '_blank');
                    }}
                    analyticsLabel={`writings-${heading}`}
                  >
                    <div className="mb-6 overflow-hidden rounded-md shadow-xl">
                      <img src={urlForImage(image)?.url()} alt={heading} />
                    </div>
                    <h3 className="text-xl font-sans font-bold mb-4 group-hover:text-secondary">{heading}</h3>
                    <p className="text-sm mb-4 group-hover:text-secondary">{body}</p>
                  </Button>
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
