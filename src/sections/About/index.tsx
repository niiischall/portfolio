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

  const isCvAvailable = cvTitle && cvLink;

  return (
    <>
      <section className="pt-12 px-4 pb-24 md:pb-36 md:px-8" id="about">
        <div className="max-w-4xl flex flex-col md:flex-row justify-center items-start space-y-12 space-x-0 md:space-x-24 md:justify-start md:items-center md:mx-auto">
          <div className="text-3xl px-0 text-left md:text-center">
            <PortableText value={headingTitle} />
          </div>
          <div className="md:max-w-xl">
            <div className="text-left">
              <PortableText value={overview} />
              {isCvAvailable ? (
                <div className="mt-8 justify-center items-left md:items-center">
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
      </section>
      <div className="divider" />
    </>
  );
};

export default About;
