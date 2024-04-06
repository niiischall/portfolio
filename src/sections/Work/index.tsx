import React from 'react';
import { PortableText } from '@portabletext/react';

import Building from '../../utils/svgs/Building';
import Clock from '../../utils/svgs/Clock';
import { urlForImage } from '../../lib/sanity.image';
import { WorkCollectionType } from '../../utils/helpers/types';
import type { TypedObject } from 'sanity';

export interface WorkProps {
  data: {
    heading: {
      title: TypedObject[];
    };
    collection: WorkCollectionType[];
  };
}

const Work: React.FC<WorkProps> = ({ data }) => {
  const { heading, collection = [] } = data ?? {};
  const { title = [] } = heading ?? {};

  const renderCollection = () => {
    return collection.map((item: WorkCollectionType) => {
      const { designation = '', description = '', link, cover, duration } = item ?? {};
      const { name: orgName = '', href: orgLink = '' } = link ?? {};
      const { start = '', end = '' } = duration ?? {};

      return (
        <div key={item._key} className="relative">
          <div className="w-full h-full flex justify-between">
            <div className="absolute top-0 left-[3%] w-[2px] min-h-full bg-primary" />
            <div className="mt-8 z-10">
              <img
                className="border-solid border-2 border-primary"
                src={urlForImage(cover)?.width(48).height(48).url()}
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
                <p className="font-bold">
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
    <>
      <section
        id="work"
        className="px-4 pt-12 pb-24 px-relative flex flex-col justify-center items-start space-y-8 md:px-8 md:items-center"
      >
        <div className="text-left p-0">
          <PortableText value={title} />
        </div>
        <div className="max-w-4xl md:mx-auto">
          <div className="w-full pt-10 px-0 relative overflow-hidden">{renderCollection()}</div>
        </div>
      </section>
      <div className="divider" />
    </>
  );
};

export default Work;
