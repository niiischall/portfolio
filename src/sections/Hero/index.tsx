import React, { useContext } from 'react';
import { PortableText } from '@portabletext/react';

import { urlForImage } from '../../lib/sanity.image';
import { PortfolioContext } from '../../utils/hooks/useContext';
import { HeroSocialType } from '../../utils/helpers/types';

export interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const { hero } = useContext(PortfolioContext) ?? [];
  const { data } = hero ?? {};

  const { socials = [], greeting, cover = {} } = data ?? {};
  const { link, text: greetingText = [] } = greeting ?? {};
  const { text: buttonText = '', slug } = link ?? {};
  const { current: buttonSlug = '' } = slug ?? {};

  return (
    <section
      className="px-[6%] md:px-0 pt-16 pb-32 mx-auto bg-light relative flex flex-col items-start justify-start space-x-0 md:justify-center md:items-center md:flex-row md:space-x-6 lg:space-x-12"
      id="home"
    >
      <div className="flex flex-col absolute top-15 left-4 md:relative">
        {socials.map((social: HeroSocialType) => {
          return (
            <a
              key={social._key}
              href={social.url}
              target="_blank"
              className="mb-6 md:w-12"
              title={social.caption}
              rel="noopener noreferrer"
            >
              <img src={urlForImage(social.cover)?.width(24).url()} alt={social.alt} />
            </a>
          );
        })}
      </div>
      <div className="order-first md:order-2 flex justify-start pl-12 md:pl-0">
        <img src={urlForImage(cover)?.url()} className="w-[200px] md:w-[300px] lg:w-[350px]" alt="Profile" />
      </div>
      <div className="max-w-lg md:max-w-md mt-8 md:mt-0 lg:max-w-lg">
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
