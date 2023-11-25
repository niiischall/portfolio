import React from 'react';
import { useQuery } from 'react-query';
import { PortableText } from '@portabletext/react';
import sanityClient from '../../lib/sanity.client';
import { workQuery } from '../../lib/sanity.queries';

import './style.css';
import { urlForImage } from '../../lib/sanity.image';
import Building from '../../utils/svgs/Building';
import Clock from '../../utils/svgs/Clock';
import { getEndDuration, getStartDuration } from '../../utils/helpers/services';

export interface WorkProps {}

const Work: React.FC<WorkProps> = () => {
  const { data } = useQuery('work', () =>
    sanityClient
      .fetch(workQuery)
      .then((res) => res)
      .catch((err) => console.log(err)),
  );

  const { heading, collection = [] } = data ?? {};
  const { title = [] } = heading ?? {};

  console.log(collection);
  return (
    <section className="timeline" id="work">
      <div className="heading">
        <PortableText value={title} />
      </div>
      <div className="timeline-container container-spacing">
        <div className="timeline-box">
          {collection.map(
            (item: {
              _key: string;
              link: {
                name: string;
                href: string;
              };
              description: string;
              designation: string;
              duration: {
                _type: 'duration';
                start: string;
                end: string;
              };
              cover: {
                _type: 'image';
                asset: {
                  _type: 'reference';
                  _ref: string;
                };
              };
            }) => {
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
                        <p className="ml-1">
                          {startDurationInString} - {endDurationInString}
                        </p>
                      </span>
                      <p>{description}</p>
                    </div>
                  </div>
                </div>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
};

export default Work;
