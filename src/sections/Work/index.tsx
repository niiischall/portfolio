import React, { useContext } from 'react';
import { PortableText } from '@portabletext/react';

import './style.css';
import { urlForImage } from '../../lib/sanity.image';
import Building from '../../utils/svgs/Building';
import Clock from '../../utils/svgs/Clock';
import { getEndDuration, getStartDuration } from '../../utils/helpers/services';
import { PortfolioContext } from '../../utils/hooks/useContext';
import { WorkCollectionType } from '../../utils/helpers/types';

export interface WorkProps {}

const Work: React.FC<WorkProps> = () => {
  const { work } = useContext(PortfolioContext) ?? [];
  const { data } = work ?? {};

  const { heading, collection = [] } = data ?? {};
  const { title = [] } = heading ?? {};

  return (
    <section className="relative flex flex-col justify-center items-start md:items-center" id="work">
      <div className="heading ml-5 text-left md:text-center md:ml-0 p-0">
        <PortableText value={title} />
      </div>
      <div className="timeline-container container-spacing">
        <div className="timeline-box">
          {collection.map((item: WorkCollectionType) => {
            const { designation = '', description = '', link, cover, duration } = item ?? {};
            const { name: orgName = '', href: orgLink = '' } = link ?? {};
            const { start = '', end = '' } = duration ?? {};
            const startDurationInString = getStartDuration(start);
            const endDurationInString = getEndDuration(end);

            return (
              <div key={item._key} className="timeline-box">
                <div className="timeline-block timeline-block-right">
                  <div className="marker">
                    <img src={urlForImage(cover)?.width(48).url()} alt={orgName} />
                  </div>
                  <div className="timeline-content">
                    <h3 className="font-sans">{designation}</h3>
                    <h4>
                      <Building />
                      <a href={orgLink} target="_blank" rel="noopener noreferrer">
                        {orgName}
                      </a>
                    </h4>
                    <span>
                      <Clock />
                      <p className="ml-1 font-bold">
                        {startDurationInString} - {endDurationInString}
                      </p>
                    </span>
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute bottom-0 w-3/4">
        <hr className="h-px w-3/4 mx-auto bg-[#34373c] border-0"></hr>
      </div>
    </section>
  );
};

export default Work;
