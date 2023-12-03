import React, { useContext } from 'react';
import { PortableText } from '@portabletext/react';

import { PortfolioContext } from '../../utils/hooks/useContext';

export interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  const { about } = useContext(PortfolioContext) ?? [];
  const { data } = about ?? {};

  const { heading, overview = [], cv } = data ?? {};
  const { title: headingTitle = [] } = heading ?? {};
  const { link: cvLink = '', title: cvTitle = '' } = cv ?? {};

  return (
    <section id="about">
      <div className="flex flex-col justify-center items-start md:items-center">
        <div className="text-3xl px-0 py-4 md:px-36 md:py-8 text-left md:text-center">
          <PortableText value={headingTitle} />
        </div>
        <div className="max-w-2xl py-10">
          <div className="text-left md:text-center">
            <PortableText value={overview} />
            {cvTitle && cvLink ? (
              <div className="my-5 mb-10 justify-center items-left md:items-center">
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
        <hr className="h-px w-3/4 mx-auto bg-rule border-0"></hr>
      </div>
    </section>
  );
};

export default About;
