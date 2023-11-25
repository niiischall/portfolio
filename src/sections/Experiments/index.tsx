import React from 'react';
import { useQuery } from 'react-query';
import sanityClient from '../../lib/sanity.client';
import { experimentsQuery } from '../../lib/sanity.queries';

import { PortableText } from '@portabletext/react';

export interface ExperimentsProps {}

const Experiments: React.FC<ExperimentsProps> = () => {
  const { data } = useQuery('experiments', () =>
    sanityClient
      .fetch(experimentsQuery)
      .then((res) => res)
      .catch((err) => console.log(err)),
  );

  console.log(data);
  const { heading, collection = [] } = data ?? {};
  const { title = [] } = heading ?? {};

  return (
    <section
      className="flex flex-col justify-center items-start space-x-0 space-y-24  md:space-x-24 md:flex-row md:space-y-0"
      id="experiments"
    >
      <div className="heading text-left md:text-center p-0">
        <PortableText value={title} />
      </div>
      <div className="flex flex-col justify-between">
        {collection.map(
          (item: {
            _key: string;
            heading: string;
            body: string;
            link: {
              text: string;
              href: string;
            };
          }) => {
            const { _key = '', heading = '', body = '', link } = item ?? {};
            const { text = '', href = '' } = link ?? {};
            return (
              <div key={_key} className="feature-box max-w-lg mb-24">
                <h3 className="text-xl font-sans font-bold mb-4">{heading}</h3>
                <p className="text-sm mb-4">{body}</p>
                <a href={href} target="_blank" className="btn" rel="noopener noreferrer">
                  {text}
                </a>
              </div>
            );
          },
        )}
      </div>
    </section>
  );
};

export default Experiments;
