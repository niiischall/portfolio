import React from 'react';
import { useQuery } from 'react-query';
import { PortableText } from '@portabletext/react';
import sanityClient from '../../lib/sanity.client';
import { aboutQuery } from '../../lib/sanity.queries';

import './style.css';
import { urlForImage } from '../../lib/sanity.image';

export interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  const { data } = useQuery('about', () =>
    sanityClient
      .fetch(aboutQuery)
      .then((res) => res)
      .catch((err) => console.log(err)),
  );

  const { heading, contact, overview = [], cv } = data ?? {};

  const { title: headingTitle = [] } = heading ?? {};
  const {
    cover = {
      asset: { _type: 'reference', _ref: '' },
      _type: 'image',
    },
    text = '',
  } = contact ?? {};
  const { link: cvLink = '', title: cvTitle = '' } = cv ?? {};

  return (
    <section className="about" id="about">
      <div className="heading">
        <PortableText value={headingTitle} />
      </div>
      <div className="about-container container-spacing">
        <div className="about-text">
          <PortableText value={overview} />
          <div className="information">
            <div className="info-box">
              <img src={urlForImage(cover)?.url()} alt="mail" />
              <p className="font-sans strong">{text}</p>
            </div>
          </div>
          {cvTitle && cvLink ? (
            <div className="cv">
              <a id="about-cv-download-clicked" href={cvLink} target="_blank" className="btn" rel="noopener noreferrer">
                {cvTitle}
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default About;
