import React from 'react';
import { PortableText } from '@portabletext/react';

import './style.css';
import { aboutQuery } from '../../lib/sanity.queries';
import { useReactQuery } from '../../utils/hooks/useCustomQuery';

export interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  const { data, isLoading, error } = useReactQuery('about', aboutQuery);

  const { heading, overview = [], cv } = data ?? {};
  const { title: headingTitle = [] } = heading ?? {};
  const { link: cvLink = '', title: cvTitle = '' } = cv ?? {};

  return (
    <section id="about">
      <div className="flex flex-col justify-center items-start md:items-center">
        <div className="heading ml-5 text-left md:text-center md:ml-0 p-0">
          <PortableText value={headingTitle} />
        </div>
        <div className="about-container container-spacing">
          <div className="about-text text-left md:text-center">
            <PortableText value={overview} />
            {cvTitle && cvLink ? (
              <div className="cv justify-center items-left md:items-center">
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
