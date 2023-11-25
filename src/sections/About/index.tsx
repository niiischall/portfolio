import React from 'react';
import { useQuery } from 'react-query';
import { PortableText } from '@portabletext/react';
import sanityClient from '../../lib/sanity.client';
import { aboutQuery } from '../../lib/sanity.queries';

import './style.css';

export interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  const { data } = useQuery('about', () =>
    sanityClient
      .fetch(aboutQuery)
      .then((res) => res)
      .catch((err) => console.log(err)),
  );

  const { heading, overview = [], cv } = data ?? {};
  const { title: headingTitle = [] } = heading ?? {};
  const { link: cvLink = '', title: cvTitle = '' } = cv ?? {};

  return (
    <section id="about">
      <div className="about">
        <div className="heading">
          <PortableText value={headingTitle} />
        </div>
        <div className="about-container container-spacing">
          <div className="about-text">
            <PortableText value={overview} />
            {cvTitle && cvLink ? (
              <div className="cv">
                <a
                  id="about-cv-download-clicked"
                  href={cvLink}
                  target="_blank"
                  className="btn"
                  rel="noopener noreferrer"
                >
                  {cvTitle}
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="w-full">
        <hr className="h-px w-3/4 mx-auto bg-[#34373c] border-0"></hr>
      </div>
    </section>
  );
};

export default About;
