import React from 'react';
import { useQuery } from 'react-query';
import { PortableText } from '@portabletext/react';
import sanityClient from '../../lib/sanity.client';
import { urlForImage } from '../../lib/sanity.image';
import { heroQuery } from '../../lib/sanity.queries';

import './style.css';

export interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const { data } = useQuery('hero', () =>
    sanityClient
      .fetch(heroQuery)
      .then((res) => res)
      .catch((err) => console.log(err)),
  );
  const { socials = [], greeting, cover = {} } = data ?? {};
  const { link, text: greetingText = [] } = greeting ?? {};
  const { text: buttonText = '', slug } = link ?? {};
  const { current: buttonSlug = '' } = slug ?? {};

  return (
    <section className="home" id="home">
      <div className="social">
        {socials.map(
          (social: {
            _key: string;
            url: string;
            cover: {
              asset: { _type: 'reference'; _ref: string };
              _type: 'image';
            };
            caption: string;
            alt: string;
          }) => {
            return (
              <a key={social._key} href={social.url} target="_blank" title={social.caption} rel="noopener noreferrer">
                <img src={urlForImage(social.cover)?.width(24).url()} alt={social.alt} />
              </a>
            );
          },
        )}
      </div>
      <div className="home-img">
        <img src={urlForImage(cover)?.url()} alt="Profile" />
      </div>
      <div className="home-text">
        <PortableText value={greetingText} />
        {buttonText ? (
          <a id="home-contact" href={buttonSlug} className="btn">
            {buttonText}
          </a>
        ) : null}
      </div>
    </section>
  );
};

export default Hero;
