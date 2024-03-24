import React, { useContext } from 'react';

import { PortfolioContext } from '../../utils/hooks/useContext';
import { PortableText } from '@portabletext/react';
import { urlForImage } from '../../lib/sanity.image';
import { TalkCollectionType } from '../../utils/helpers/types';

export interface TalksProps {}

const Talks: React.FC<TalksProps> = () => {
  const { talks } = useContext(PortfolioContext) ?? [];

  const { data } = talks ?? {};
  const { heading, collection } = data ?? {};
  const { title = [] } = heading ?? {};

  return (
    <>
      <section className="px-4 pt-12 pb-24 md:px-8" id="talks">
        <div className="flex flex-col justify-center items-start space-y-24 max-w-4xl mx-auto">
          <div className="text-left md:text-center p-0">
            <PortableText value={title} />
          </div>
          <div className="flex flex-col space-y-24 md:space-y-0 md:space-x-32 md:flex-row justify-center">
            {collection.map((item: TalkCollectionType) => {
              const { _key = '', heading = '', body = '', link, cover = {} } = item ?? {};
              const { url = '' } = link ?? {};
              return (
                <div key={_key} className="w-full py-2">
                  <a href={url} target="_blank" className="group" rel="noopener noreferrer">
                    <div className="mb-12 w-auto overflow-hidden flex flex-col justify-start items-start md:items-center">
                      <img
                        className="rounded-md shadow-xl"
                        src={urlForImage(cover)?.height(350).width(450).url()}
                        alt={heading}
                      />
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

export default Talks;
