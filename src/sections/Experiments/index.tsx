import React, { useContext } from 'react';
import { PortableText } from '@portabletext/react';

import { PortfolioContext } from '../../utils/hooks/useContext';
import { ExperimentCollectionType } from '../../utils/helpers/types';
import { urlForImage } from '../../lib/sanity.image';

export interface ExperimentsProps {}

const Experiments: React.FC<ExperimentsProps> = () => {
  const { experiments } = useContext(PortfolioContext) ?? [];
  const { data } = experiments ?? {};

  const { heading, collection = [] } = data ?? {};
  const { title = [] } = heading ?? {};

  return (
    <>
      <section className="pt-12 pb-24 px-4 md:px-8" id="experiments">
        <div className="flex flex-col justify-center items-start space-y-24 max-w-4xl md:mx-auto">
          <div className="text-left md:text-center p-0">
            <PortableText value={title} />
          </div>
          <div className="flex flex-col space-y-24 md:space-y-0 md:space-x-16 md:flex-row justify-between">
            {collection.map((item: ExperimentCollectionType) => {
              const { _key = '', heading = '', body = '', link, image = {} } = item ?? {};
              const { href = '' } = link ?? {};
              return (
                <div key={_key} className="w-full md:w-1/3">
                  <a href={href} target="_blank" className="group" rel="noopener noreferrer">
                    <div className="mb-6 h-[300px] w-auto max-h-[250px] overflow-hidden flex flex-col justify-center items-start md:items-center">
                      <img src={urlForImage(image)?.height(250).url()} alt={heading} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-sans font-bold mb-4 group-hover:text-secondary">{heading}</h3>
                      <p className="text-md mb-4 group-hover:text-secondary">{body}</p>
                    </div>
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

export default Experiments;
