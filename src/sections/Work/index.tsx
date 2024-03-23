import React, { useContext } from 'react';
import { PortableText } from '@portabletext/react';

import Building from '../../utils/svgs/Building';
import Clock from '../../utils/svgs/Clock';
import { urlForImage } from '../../lib/sanity.image';
import { PortfolioContext } from '../../utils/hooks/useContext';
import { WorkCollectionType } from '../../utils/helpers/types';

export interface WorkProps {}

const Work: React.FC<WorkProps> = () => {
  const { work } = useContext(PortfolioContext) ?? [];
  const { data } = work ?? {};

  const { heading, collection = [] } = data ?? {};
  const { title = [] } = heading ?? {};

  const renderCollection = () => {
    return collection.map((item: WorkCollectionType) => {
      const { designation = '', description = '', link, cover, duration } = item ?? {};
      const { name: orgName = '', href: orgLink = '' } = link ?? {};
      const { start = '', end = '' } = duration ?? {};

      return (
        <div key={item._key} className="relative">
          <div className="w-[98% + 8] h-full flex justify-between">
            <div className="absolute top-0 left-[3%] w-[2px] min-h-full bg-primary ml-[-1px]" />
            <div className="w-[48px] h-[48px] mt-8 z-10">
              <img
                className="border-solid border-2 border-primary"
                src={urlForImage(cover)?.width(48).url()}
                alt={orgName}
              />
            </div>
            <div className="w-[95%] p-8">
              <h3 className="font-sans font-bold">{designation}</h3>
              <div className="flex items-center space-x-1">
                <Building />
                <a href={orgLink} className="text-secondary font-bold" target="_blank" rel="noopener noreferrer">
                  {orgName}
                </a>
              </div>
              <div className="flex items-center space-x-1">
                <Clock />
                <p className="ml-1 font-bold">
                  {start} - {end}
                </p>
              </div>
              <p>{description}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <section
      id="work"
      className="px-[6%] md:px-0 pt-16 pb-32 relative flex flex-col justify-center items-start space-y-16 md:space-y-24 md:items-center"
    >
      <div className="text-left md:text-center p-0">
        <PortableText value={title} />
      </div>
      <div className="max-w-4xl">
        <div className="w-full py-10 px-0 relative overflow-hidden">{renderCollection()}</div>
      </div>
    </section>
  );
};

export default Work;
