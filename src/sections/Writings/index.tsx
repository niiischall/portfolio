import React from 'react';
import { useQuery } from 'react-query';
import { PortableText } from '@portabletext/react';
import { writingsQuery } from '../../lib/sanity.queries';
import sanityClient from '../../lib/sanity.client';
import { urlForImage } from '../../lib/sanity.image';

export interface WritingsProps {}

const Writings: React.FC<WritingsProps> = () => {
  const { data } = useQuery('writings', () =>
    sanityClient
      .fetch(writingsQuery)
      .then((res) => res)
      .catch((err) => console.log(err)),
  );

  const { heading, collection = [] } = data ?? {};
  const { title = [] } = heading ?? {};

  return (
    <section
      className="flex flex-col justify-center items-start space-x-0 space-y-24  md:space-x-48 md:flex-row md:space-y-0"
      id="writings"
    >
      <div className="heading text-left md:text-center p-0">
        <PortableText value={title} />
      </div>
      <div className="flex flex-col justify-between">
        {collection.map((item: { _key: string; heading: string; body: string; link: string; image: {} }) => {
          const { _key = '', heading = '', body = '', link = '', image = {} } = item ?? {};
          return (
            <div key={_key} className="feature-box max-w-lg mb-24">
              <div className="mb-6 overflow-hidden rounded-md shadow-xl">
                <img src={urlForImage(image)?.url()} alt={heading} />
              </div>
              <h3 className="text-xl font-sans font-bold mb-4">{heading}</h3>
              <p className="text-sm mb-4">{body}</p>
              <a href={link} target="_blank" className="btn" rel="noopener noreferrer">
                READ MORE
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Writings;
