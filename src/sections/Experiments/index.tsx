import React, { useContext } from 'react';
import { PortableText } from '@portabletext/react';

import { PortfolioContext } from '../../utils/hooks/useContext';
import { ExperimentCollectionType } from '../../utils/helpers/types';

export interface ExperimentsProps {}

const Experiments: React.FC<ExperimentsProps> = () => {
  const { experiments } = useContext(PortfolioContext) ?? [];
  const { data } = experiments ?? {};

  const { heading, collection = [] } = data ?? {};
  const { title = [] } = heading ?? {};

  return (
    <section id="experiments">
      <div className="flex flex-col justify-center items-start space-x-0 space-y-24  md:space-x-24 md:flex-row md:space-y-0">
        <div className="text-left md:text-center p-0">
          <PortableText value={title} />
        </div>
        <div className="flex flex-col justify-between">
          {collection.map((item: ExperimentCollectionType) => {
            const { _key = '', heading = '', body = '', link } = item ?? {};
            const { href = '' } = link ?? {};
            return (
              <div key={_key} className="max-w-lg mb-12">
                <a href={href} target="_blank" className="group" rel="noopener noreferrer">
                  <h3 className="text-xl font-sans font-bold mb-4 group-hover:text-secondary">{heading}</h3>
                  <p className="text-sm mb-4 group-hover:text-secondary">{body}</p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full">
        <hr className="h-px w-3/4 mx-auto bg-[#34373c] border-0"></hr>
      </div>
    </section>
  );
};

export default Experiments;
